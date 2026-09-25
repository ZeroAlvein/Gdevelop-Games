
if (typeof gdjs.evtsExt__WeatherControl__FireFlies !== "undefined") {
  gdjs.evtsExt__WeatherControl__FireFlies.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WeatherControl__FireFlies = {};
gdjs.evtsExt__WeatherControl__FireFlies.idToCallbackMap = new Map();


gdjs.evtsExt__WeatherControl__FireFlies.userFunc0x181a1b0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const layerName = eventsFunctionContext.getArgument("LayerName") || "";

const destroyArg = eventsFunctionContext.getArgument("Destroy");
const destroy = destroyArg === true || destroyArg === "true" || destroyArg === "1" || destroyArg === 1;

if (destroy) {
  if (runtimeScene.fireflySystems && runtimeScene.fireflySystems[layerName]) {
    runtimeScene.fireflySystems[layerName].container.destroy({ children: true });
    delete runtimeScene.fireflySystems[layerName];
  }
  if (runtimeScene.fireflyPendingInit) delete runtimeScene.fireflyPendingInit[layerName];
  return;
}

const density = Number(eventsFunctionContext.getArgument("Density")) || 0;

// --- Scaling note ---------------------------------------------------------
// Every tunable below now takes an extra factor of 10 off the raw input
// compared to before, so you can dial in with two-digit numbers instead of
// needing fractional/single-digit values. Example: Speed = 20 now behaves
// exactly like the old Speed = 2 did.
const sizeRaw      = Number(eventsFunctionContext.getArgument("Size"))      || 10;
const sizeRangeRaw = Number(eventsFunctionContext.getArgument("SizeRange")) || 0;
const size      = sizeRaw / 10;
const sizeRange = sizeRangeRaw / 10;

const speedRaw      = Number(eventsFunctionContext.getArgument("Speed"))      || 10;
const speedRangeRaw = Number(eventsFunctionContext.getArgument("SpeedRange")) || 0;
const speed      = speedRaw / 100;
const speedRange = speedRangeRaw / 100;

// How many pixels a firefly shrinks by at the bottom of its pulse, and how
// fast that shrink-and-grow cycle repeats -- this is what fakes flashing.
const shrinkRaw = Number(eventsFunctionContext.getArgument("Shrink")) || 0;
const shrink = shrinkRaw / 10;

const shrinkSpeedRaw      = Number(eventsFunctionContext.getArgument("ShrinkSpeed"))      || 0;
const shrinkSpeedRangeRaw = Number(eventsFunctionContext.getArgument("ShrinkSpeedRange")) || 0;
const shrinkSpeed      = shrinkSpeedRaw / 1000;
const shrinkSpeedRange = shrinkSpeedRangeRaw / 1000;

const instantSpawnArg = eventsFunctionContext.getArgument("InstantSpawn");
const instantSpawn = instantSpawnArg === true || instantSpawnArg === "true" || instantSpawnArg === "1" || instantSpawnArg === 1;

const opacity = Number(eventsFunctionContext.getArgument("Opacity"));

const colorArg = eventsFunctionContext.getArgument("Color") || "220;220;80";
const [rArg, gArg, bArg] = colorArg.split(";").map(Number);
const colorHex = (rArg << 16) + (gArg << 8) + bArg;

if (!runtimeScene.fireflySystems) runtimeScene.fireflySystems = {};
if (!runtimeScene.fireflyPendingInit) runtimeScene.fireflyPendingInit = {};

// A soft white radial-gradient glow, generated once via canvas and shared
// by every firefly (any layer, any color -- color comes from Sprite.tint,
// not the texture). Far cheaper than blurring each firefly individually
// every frame, and gives the fuzzy bokeh look instead of flat dots.
if (!runtimeScene.fireflyGlowTexture) {
  const canvasSize = 128;
  const canvas = document.createElement("canvas");
  canvas.width = canvasSize;
  canvas.height = canvasSize;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createRadialGradient(
    canvasSize / 2, canvasSize / 2, 0,
    canvasSize / 2, canvasSize / 2, canvasSize / 2
  );
  gradient.addColorStop(0,    "rgba(255,255,255,1)");
  gradient.addColorStop(0.25, "rgba(255,255,255,0.9)");
  gradient.addColorStop(0.6,  "rgba(255,255,255,0.25)");
  gradient.addColorStop(1,    "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvasSize, canvasSize);
  runtimeScene.fireflyGlowTexture = PIXI.Texture.from(canvas);
  runtimeScene.fireflyGlowTextureRadius = canvasSize / 2;
}
const glowTexture = runtimeScene.fireflyGlowTexture;
const glowTextureRadius = runtimeScene.fireflyGlowTextureRadius;

const layer = runtimeScene.getLayer(layerName);

if (runtimeScene.fireflyPendingInit[layerName] === undefined) {
  runtimeScene.fireflyPendingInit[layerName] = 2;
}

if (!runtimeScene.fireflySystems[layerName]) {
  if (runtimeScene.fireflyPendingInit[layerName] > 0) {
    runtimeScene.fireflyPendingInit[layerName]--;
    return;
  }

  const renderer = layer.getRenderer();
  const pixiContainer = renderer.getRendererObject();
  const container = new PIXI.Container();
  pixiContainer.addChild(container);
  runtimeScene.fireflySystems[layerName] = { container, flakes: [], filled: false, spawnQueue: [], spawnClock: 0 };
}

const system = runtimeScene.fireflySystems[layerName];
// Defensive: if this system object was created by an older version of this
// script (e.g. a hot-reloaded preview that never restarted the scene), it
// may be missing these fields. Without this, spawnQueue/spawnClock being
// undefined throws below and silently kills all spawning for the rest of
// the scene's life.
if (!system.spawnQueue) system.spawnQueue = [];
if (system.spawnClock === undefined) system.spawnClock = 0;

const camX = layer.getCameraX();
const camY = layer.getCameraY();
const camWidth = layer.getCameraWidth();
const camHeight = layer.getCameraHeight();
const halfW = camWidth / 2;
const halfH = camHeight / 2;

const dt = runtimeScene.getTimeManager().getElapsedTime() / 1000;

// Fireflies wander randomly instead of drifting in one wind direction, so
// unlike snow/leaves they don't need a big padded field to enter from --
// they just live within the screen plus a small margin. If one wanders
// past that margin it gets recycled back to a fresh random spot on screen.
const RECYCLE_MARGIN = 60;
const GROW_DURATION = 0.8;          // seconds to grow from 0 to full size

// How a firefly's heading changes over time. Instead of nudging the angle
// by a tiny random amount every frame (which reads as "basically a straight
// line with a wobble"), each firefly periodically picks a brand-new random
// target heading and steers toward it. That gives real course changes --
// flying right, then curving up-left, then down -- while the turn itself is
// still gradual instead of an instant snap.
const HEADING_CHANGE_MIN = 1.0;     // seconds before a new target heading is possible
const HEADING_CHANGE_MAX = 2.5;
const STEER_RATE = 2.2;             // radians/sec, how fast it turns toward the target heading
const HEADING_JITTER = 0.03;        // tiny continuous wobble on top of steering, radians

// When InstantSpawn is off, the very first batch of fireflies (from 0 up to
// Density) no longer pops into existence together on screen. Instead each
// one is scheduled to spawn just off-screen at a random moment spread over
// this window, then wanders in on its own -- same as a recycled firefly.
const INITIAL_SPAWN_SPREAD = 9.0;   // seconds over which the initial fill trickles in

const targetCount = Math.max(0, Math.round(density));

function randomOffscreenPoint() {
  // A point just outside the camera, within RECYCLE_MARGIN of the edge it
  // crosses -- close enough to wander into view naturally before long.
  const side = Math.floor(Math.random() * 4);
  const edgeOffset = Math.random() * RECYCLE_MARGIN;
  if (side === 0) { // left
    return { x: camX - halfW - edgeOffset, y: camY - halfH + Math.random() * camHeight };
  } else if (side === 1) { // right
    return { x: camX + halfW + edgeOffset, y: camY - halfH + Math.random() * camHeight };
  } else if (side === 2) { // top
    return { x: camX - halfW + Math.random() * camWidth, y: camY - halfH - edgeOffset };
  } else { // bottom
    return { x: camX - halfW + Math.random() * camWidth, y: camY + halfH + edgeOffset };
  }
}

// Creates one firefly sprite. mode is:
//  - "instant"    InstantSpawn's initial fill: on screen, already full size.
//  - "staggered"  the non-instant initial fill, released one at a time by
//                 the spawn queue: on screen (scattered anywhere, same as
//                 "instant"), but starts at zero size/alpha and grows in --
//                 this is what makes it read as "appearing" rather than
//                 "entering", and staggering the release times is what
//                 stops them all appearing together.
//  - "offscreen"  recycling only: a firefly that wandered past the edge
//                 re-enters just outside the camera and heads back in.
function createFlake(mode) {
  const flake = new PIXI.Sprite(glowTexture);
  flake.anchor.set(0.5);
  flake.tint = colorHex;

  let spawnPoint;
  let headingAngle;
  if (mode === "offscreen") {
    spawnPoint = randomOffscreenPoint();
    const angleToCenter = Math.atan2(camY - spawnPoint.y, camX - spawnPoint.x);
    // Aim roughly back toward the screen so it doesn't immediately drift
    // back out and get stuck bouncing at the edge.
    headingAngle = angleToCenter + (Math.random() - 0.5) * 0.8;
  } else {
    spawnPoint = { x: camX - halfW + Math.random() * camWidth, y: camY - halfH + Math.random() * camHeight };
    headingAngle = Math.random() * Math.PI * 2;
  }
  flake.x = spawnPoint.x;
  flake.y = spawnPoint.y;

  flake.sizeFactor = Math.random();
  flake.speedFactor = speed + Math.random() * speedRange;
  flake.headingAngle = headingAngle;
  flake.targetHeading = headingAngle;
  flake.headingChangeTimer = HEADING_CHANGE_MIN + Math.random() * (HEADING_CHANGE_MAX - HEADING_CHANGE_MIN);

  flake.shrinkPhase = Math.random() * Math.PI * 2;
  flake.shrinkSpeedFactor = shrinkSpeed + Math.random() * shrinkSpeedRange;

  flake.baseAlpha = Math.random() * 0.3 + 0.7;
  flake.visible = true;
  flake.growProgress = mode === "instant" ? 1 : 0;

  // Set the initial scale/alpha immediately using the same formula the
  // per-frame update uses -- otherwise a fresh Sprite sits at its
  // default scale of 1 (i.e. the full 128px texture) for one frame
  // before the update loop corrects it next frame, which looks like it
  // spawns oversized and instantly shrinks.
  const initialRadius = size + flake.sizeFactor * sizeRange;
  const initialPulse = (1 - Math.cos(flake.shrinkPhase)) / 2;
  flake.scale.set(Math.max(0, initialRadius - shrink * initialPulse) * flake.growProgress / glowTextureRadius);
  flake.alpha = flake.baseAlpha * (1 - initialPulse * 0.7);

  system.container.addChild(flake);
  system.flakes.push(flake);
}

system.flakes.forEach(flake => {
  const radius = size + flake.sizeFactor * sizeRange;

  // Steer smoothly toward a periodically-refreshed random target heading,
  // plus a tiny continuous jitter for texture. This is what produces real
  // direction changes (right, then up-left, then down) instead of a mostly
  // straight line with a faint wobble.
  flake.headingChangeTimer -= dt;
  if (flake.headingChangeTimer <= 0) {
    flake.targetHeading = Math.random() * Math.PI * 2;
    flake.headingChangeTimer = HEADING_CHANGE_MIN + Math.random() * (HEADING_CHANGE_MAX - HEADING_CHANGE_MIN);
  }
  let headingDiff = flake.targetHeading - flake.headingAngle;
  headingDiff = Math.atan2(Math.sin(headingDiff), Math.cos(headingDiff)); // shortest signed distance
  const maxTurn = STEER_RATE * dt;
  flake.headingAngle += Math.max(-maxTurn, Math.min(maxTurn, headingDiff));
  flake.headingAngle += (Math.random() - 0.5) * HEADING_JITTER;

  flake.x += Math.cos(flake.headingAngle) * flake.speedFactor;
  flake.y += Math.sin(flake.headingAngle) * flake.speedFactor;

  flake.shrinkPhase += flake.shrinkSpeedFactor;
  const pulse = (1 - Math.cos(flake.shrinkPhase)) / 2; // 0 (full size) .. 1 (max shrink)

  if (flake.growProgress < 1) {
    flake.growProgress = Math.min(1, flake.growProgress + dt / GROW_DURATION);
  }

  const currentRadius = Math.max(0, radius - shrink * pulse) * flake.growProgress;
  flake.scale.set(currentRadius / glowTextureRadius);
  // Dimming alongside shrinking sells the "flashing" look much better than
  // size changing alone -- a firefly that shrinks but stays full-bright
  // just looks like it's pulsing in size, not flashing on and off.
  flake.alpha = flake.baseAlpha * (1 - pulse * 0.7);
});

for (let i = system.flakes.length - 1; i >= 0; i--) {
  const flake = system.flakes[i];
  if (
    flake.x < camX - halfW - RECYCLE_MARGIN ||
    flake.x > camX + halfW + RECYCLE_MARGIN ||
    flake.y < camY - halfH - RECYCLE_MARGIN ||
    flake.y > camY + halfH + RECYCLE_MARGIN
  ) {
    system.container.removeChild(flake);
    flake.destroy();
    system.flakes.splice(i, 1);
  }
}

// Advance the spawn clock and release any queued spawns whose moment has
// arrived. The queue only ever holds entries for the staggered initial
// fill (non-instant); recycled and instant-mode fireflies are created
// immediately elsewhere and never touch it.
system.spawnClock += dt;
for (let i = system.spawnQueue.length - 1; i >= 0; i--) {
  if (system.spawnQueue[i] <= system.spawnClock) {
    createFlake("staggered");
    system.spawnQueue.splice(i, 1);
  }
}

const totalHave = system.flakes.length + system.spawnQueue.length;
const toAdd = Math.max(targetCount - totalHave, 0);

if (toAdd > 0) {
  if (!system.filled && !instantSpawn) {
    // Initial, non-instant fill: schedule each firefly to appear off-screen
    // at a random moment over the next few seconds instead of all at once.
    for (let i = 0; i < toAdd; i++) {
      system.spawnQueue.push(system.spawnClock + Math.random() * INITIAL_SPAWN_SPREAD);
    }
  } else {
    // Either the InstantSpawn initial burst (appear now, full size, on
    // screen) or ordinary recycling / density increases after the initial
    // fill (appear off-screen and wander in) -- both happen immediately.
    for (let i = 0; i < toAdd; i++) {
      createFlake(!system.filled && instantSpawn ? "instant" : "offscreen");
    }
  }
} else if (totalHave > targetCount) {
  let excess = totalHave - targetCount;
  // Trim pending (not-yet-spawned) entries first, then actual sprites.
  while (excess > 0 && system.spawnQueue.length > 0) {
    system.spawnQueue.pop();
    excess--;
  }
  while (excess > 0 && system.flakes.length > 0) {
    const flake = system.flakes.pop();
    system.container.removeChild(flake);
    flake.destroy();
    excess--;
  }
}

if (!system.filled && targetCount > 0 && system.flakes.length >= targetCount && system.spawnQueue.length === 0) {
  system.filled = true;
}

system.container.alpha = Math.max(0, Math.min(255, opacity)) / 255;
};
gdjs.evtsExt__WeatherControl__FireFlies.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__WeatherControl__FireFlies.userFunc0x181a1b0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WeatherControl__FireFlies.func = function(runtimeScene, LayerName, Density, Speed, SpeedRange, Size, SizeRange, Shrink, ShrinkSpeed, ShrinkSpeedRange, Opacity, Color, InstantSpawn, Destroy, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WeatherControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WeatherControl"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "LayerName") return LayerName;
if (argName === "Density") return Density;
if (argName === "Speed") return Speed;
if (argName === "SpeedRange") return SpeedRange;
if (argName === "Size") return Size;
if (argName === "SizeRange") return SizeRange;
if (argName === "Shrink") return Shrink;
if (argName === "ShrinkSpeed") return ShrinkSpeed;
if (argName === "ShrinkSpeedRange") return ShrinkSpeedRange;
if (argName === "Opacity") return Opacity;
if (argName === "Color") return Color;
if (argName === "InstantSpawn") return InstantSpawn;
if (argName === "Destroy") return Destroy;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WeatherControl__FireFlies.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WeatherControl__FireFlies.registeredGdjsCallbacks = [];