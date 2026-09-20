
if (typeof gdjs.evtsExt__WeatherControl__Bubble !== "undefined") {
  gdjs.evtsExt__WeatherControl__Bubble.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WeatherControl__Bubble = {};
gdjs.evtsExt__WeatherControl__Bubble.idToCallbackMap = new Map();


gdjs.evtsExt__WeatherControl__Bubble.userFunc0x1706cd8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const layerName = eventsFunctionContext.getArgument("LayerName") || "";

const destroyArg = eventsFunctionContext.getArgument("Destroy");
const destroy = destroyArg === true || destroyArg === "true" || destroyArg === "1" || destroyArg === 1;

if (destroy) {
  if (runtimeScene.bubbleSystems && runtimeScene.bubbleSystems[layerName]) {
    runtimeScene.bubbleSystems[layerName].container.destroy({ children: true });
    delete runtimeScene.bubbleSystems[layerName];
  }
  if (runtimeScene.bubblePendingInit) delete runtimeScene.bubblePendingInit[layerName];
  return;
}

const density = Number(eventsFunctionContext.getArgument("Density")) || 0;

// --- Scaling note ---------------------------------------------------------
// Size/SizeRange are plain pixels (a two-digit number like 20 is already a
// sensible bubble radius, no division needed). Speed/SpeedRange and
// SwingSpeed get divided down so two-digit inputs land in the small
// fractional range actual movement needs -- you never have to type "0.4"
// or "3", just "40" or "30".
const sizeRaw      = Number(eventsFunctionContext.getArgument("Size"))      || 20;
const sizeRangeRaw = Number(eventsFunctionContext.getArgument("SizeRange")) || 0;
const size      = sizeRaw;
const sizeRange = sizeRangeRaw;

const speedRaw      = Number(eventsFunctionContext.getArgument("Speed"))      || 20;
const speedRangeRaw = Number(eventsFunctionContext.getArgument("SpeedRange")) || 0;
const speed      = speedRaw / 10;
const speedRange = speedRangeRaw / 10;

// Swing is how far (in pixels) a bubble drifts side to side as it rises;
// SwingSpeed is how fast that side-to-side cycle repeats. Swing = 0 gives a
// perfectly straight line up.
const swingRaw      = Number(eventsFunctionContext.getArgument("Swing"))      || 0;
const swingSpeedRaw = Number(eventsFunctionContext.getArgument("SwingSpeed")) || 30;
const swing      = swingRaw;
const swingSpeed = swingSpeedRaw / 1000;

const instantSpawnArg = eventsFunctionContext.getArgument("InstantSpawn");
const instantSpawn = instantSpawnArg === true || instantSpawnArg === "true" || instantSpawnArg === "1" || instantSpawnArg === 1;

const pixelArtArg = eventsFunctionContext.getArgument("PixelArt");
const pixelArt = pixelArtArg === true || pixelArtArg === "true" || pixelArtArg === "1" || pixelArtArg === 1;

// Thickness is a genuine, fixed pixel width for the ring -- it does NOT
// scale with bubble Size (that was the bug). Default 20 -> 3px, matching
// what the realistic ring originally looked like.
const thicknessRaw = Number(eventsFunctionContext.getArgument("Thickness")) || 20;
const thicknessPx = thicknessRaw * 0.15;

const opacity = Number(eventsFunctionContext.getArgument("Opacity"));

const colorArg = eventsFunctionContext.getArgument("Color") || "200;230;255";
const [rArg, gArg, bArg] = colorArg.split(";").map(Number);
const colorHex = (rArg << 16) + (gArg << 8) + bArg;

if (!runtimeScene.bubbleSystems) runtimeScene.bubbleSystems = {};
if (!runtimeScene.bubblePendingInit) runtimeScene.bubblePendingInit = {};
if (!runtimeScene.bubbleTextureCache) runtimeScene.bubbleTextureCache = {};

// How big one pixel-art "pixel" is in real screen pixels. Fixed regardless
// of bubble Size -- this is what keeps the blockiness the same "pencil"
// whether the bubble is tiny or huge: bigger bubbles get MORE cells at the
// same physical cell size, instead of the same handful of cells stretched.
const ART_PIXEL_SIZE = 4;

// Every bubble's texture is generated at its own true pixel radius (not a
// single shared texture later stretched via sprite scale). That's what
// makes Thickness a real, fixed pixel width no matter how big Size is.
// Cached per (radius, thickness, style) so repeat sizes don't redraw.
function buildRealisticTexture(radius) {
  const pad = Math.ceil(thicknessPx) + 2;
  const canvasSize = Math.max(8, Math.ceil(radius * 2 + pad * 2));
  const canvas = document.createElement("canvas");
  canvas.width = canvasSize;
  canvas.height = canvasSize;
  const ctx = canvas.getContext("2d");
  const cx = canvasSize / 2;
  const cy = canvasSize / 2;
  const ringR = Math.max(1, radius - thicknessPx / 2);

  const fillGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
  fillGradient.addColorStop(0,   "rgba(255,255,255,0.05)");
  fillGradient.addColorStop(0.7, "rgba(255,255,255,0.10)");
  fillGradient.addColorStop(1,   "rgba(255,255,255,0.35)");
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fillStyle = fillGradient;
  ctx.fill();

  ctx.lineWidth = thicknessPx;
  ctx.strokeStyle = "rgba(255,255,255,0.55)";
  ctx.beginPath();
  ctx.arc(cx, cy, ringR, 0, Math.PI * 2);
  ctx.stroke();

  const hl1 = ctx.createRadialGradient(cx - radius * 0.35, cy - radius * 0.4, 0, cx - radius * 0.35, cy - radius * 0.4, radius * 0.35);
  hl1.addColorStop(0, "rgba(255,255,255,0.9)");
  hl1.addColorStop(1, "rgba(255,255,255,0)");
  ctx.beginPath();
  ctx.arc(cx - radius * 0.35, cy - radius * 0.4, radius * 0.35, 0, Math.PI * 2);
  ctx.fillStyle = hl1;
  ctx.fill();

  const hl2 = ctx.createRadialGradient(cx + radius * 0.4, cy + radius * 0.45, 0, cx + radius * 0.4, cy + radius * 0.45, radius * 0.18);
  hl2.addColorStop(0, "rgba(255,255,255,0.35)");
  hl2.addColorStop(1, "rgba(255,255,255,0)");
  ctx.beginPath();
  ctx.arc(cx + radius * 0.4, cy + radius * 0.45, radius * 0.18, 0, Math.PI * 2);
  ctx.fillStyle = hl2;
  ctx.fill();

  return PIXI.Texture.from(canvas);
}

function buildPixelArtTexture(radius) {
  const diameter = Math.max(ART_PIXEL_SIZE * 2, radius * 2);
  const gridSize = Math.max(4, Math.round(diameter / ART_PIXEL_SIZE));
  const canvasPx = gridSize * ART_PIXEL_SIZE;
  const canvas = document.createElement("canvas");
  canvas.width = canvasPx;
  canvas.height = canvasPx;
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  const center = gridSize / 2;
  const maxRGrid = gridSize / 2;
  const thicknessCells = Math.max(1, Math.round(thicknessPx / ART_PIXEL_SIZE));
  const ringStartDist = Math.max(0, 1 - thicknessCells / maxRGrid);

  // Primary highlight: a curved crescent hugging the inside of the rim,
  // upper-left -- an angular band (not a filled blob), so it reads as a
  // reflection following the sphere's curve.
  const hl1AngleCenter = -2.356;               // ~ -135°, upper-left
  const hl1AngleHalfWidth = 0.75;              // radians, arc span
  const hl1OuterR = Math.max(0.15, ringStartDist - 0.08);
  const hl1InnerR = Math.max(0.05, hl1OuterR - 0.32);

  // Secondary highlight: a small, fainter dot near the rim, lower-right.
  const hl2AngleCenter = 0.785;                // ~45°, lower-right
  const hl2AngleHalfWidth = 0.3;
  const hl2OuterR = Math.max(0.1, ringStartDist - 0.05);
  const hl2InnerR = Math.max(0.05, hl2OuterR - 0.16);

  function angularDist(a, b) {
    let d = Math.abs(a - b) % (Math.PI * 2);
    if (d > Math.PI) d = Math.PI * 2 - d;
    return d;
  }

  for (let gy = 0; gy < gridSize; gy++) {
    for (let gx = 0; gx < gridSize; gx++) {
      const dx = gx - center + 0.5;
      const dy = gy - center + 0.5;
      const dist = Math.sqrt(dx * dx + dy * dy) / maxRGrid;
      if (dist > 1) continue; // outside the circle: leave transparent

      const angle = Math.atan2(dy, dx);
      const hl1Match = dist >= hl1InnerR && dist <= hl1OuterR && angularDist(angle, hl1AngleCenter) <= hl1AngleHalfWidth;
      const hl2Match = dist >= hl2InnerR && dist <= hl2OuterR && angularDist(angle, hl2AngleCenter) <= hl2AngleHalfWidth;

      let color;
      if (dist > ringStartDist) {
        color = "rgba(255,255,255,0.95)";       // chunky rim, width set by Thickness
      } else if (hl1Match) {
        color = "rgba(255,255,255,0.95)";       // primary crescent highlight
      } else if (hl2Match) {
        color = "rgba(255,255,255,0.55)";       // secondary highlight dot
      } else {
        color = "rgba(255,255,255,0.3)";        // flat fill, no gradient
      }
      ctx.fillStyle = color;
      ctx.fillRect(gx * ART_PIXEL_SIZE, gy * ART_PIXEL_SIZE, ART_PIXEL_SIZE, ART_PIXEL_SIZE);
    }
  }

  const texture = PIXI.Texture.from(canvas);
  texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
  return texture;
}

function getBubbleTexture(radiusKey) {
  const key = (pixelArt ? "p" : "r") + "_" + radiusKey + "_" + thicknessRaw;
  const cache = runtimeScene.bubbleTextureCache;
  if (!cache[key]) {
    cache[key] = pixelArt ? buildPixelArtTexture(radiusKey) : buildRealisticTexture(radiusKey);
  }
  return cache[key];
}

const layer = runtimeScene.getLayer(layerName);

if (runtimeScene.bubblePendingInit[layerName] === undefined) {
  runtimeScene.bubblePendingInit[layerName] = 2;
}

if (!runtimeScene.bubbleSystems[layerName]) {
  if (runtimeScene.bubblePendingInit[layerName] > 0) {
    runtimeScene.bubblePendingInit[layerName]--;
    return;
  }

  const renderer = layer.getRenderer();
  const pixiContainer = renderer.getRendererObject();
  const container = new PIXI.Container();
  pixiContainer.addChild(container);
  runtimeScene.bubbleSystems[layerName] = { container, flakes: [], filled: false, spawnQueue: [], spawnClock: 0 };
}

const system = runtimeScene.bubbleSystems[layerName];
if (!system.spawnQueue) system.spawnQueue = [];
if (system.spawnClock === undefined) system.spawnClock = 0;

const camX = layer.getCameraX();
const camY = layer.getCameraY();
const camWidth = layer.getCameraWidth();
const camHeight = layer.getCameraHeight();
const halfW = camWidth / 2;
const halfH = camHeight / 2;

const dt = runtimeScene.getTimeManager().getElapsedTime() / 1000;

const RECYCLE_MARGIN = 60;          // how far below the camera a bubble is born, and how far past an edge it's culled

// When InstantSpawn is off, the initial fill trickles in from the bottom
// edge one bubble at a time instead of the whole batch launching together,
// spread randomly over this window.
const INITIAL_SPAWN_SPREAD = 6.0;   // seconds over which the initial fill trickles in

const targetCount = Math.max(0, Math.round(density));

// Creates one bubble sprite. mode is:
//  - "instant" InstantSpawn's initial fill: scattered anywhere across the
//              whole camera area right now, at full size -- an "already
//              streaming" look.
//  - "edge"    every other case (staggered initial fill, ongoing top-outs
//              being replenished): born just below the bottom edge of the
//              camera at full size and rises into view.
function createFlake(mode) {
  let spawnX;
  let spawnY;
  if (mode === "instant") {
    spawnX = camX - halfW + Math.random() * camWidth;
    spawnY = camY - halfH + Math.random() * camHeight;
  } else {
    spawnX = camX - halfW + Math.random() * camWidth;
    spawnY = camY + halfH + Math.random() * RECYCLE_MARGIN;
  }

  const radius = Math.max(1, size + Math.random() * sizeRange);
  const radiusKey = Math.max(1, Math.round(radius));
  const texture = getBubbleTexture(radiusKey);

  const flake = new PIXI.Sprite(texture);
  flake.anchor.set(0.5);
  flake.tint = colorHex;
  flake.scale.set(1); // texture is already drawn at this bubble's true size

  flake.baseX = spawnX;
  flake.x = spawnX;
  flake.y = spawnY;

  flake.speedFactor = speed + Math.random() * speedRange;
  flake.swingFactor = swing; // could be varied per-bubble later; kept uniform for predictable width
  flake.swingSpeedFactor = swingSpeed * (0.7 + Math.random() * 0.6); // slight per-bubble variation so they don't sway in lockstep
  flake.swingPhase = Math.random() * Math.PI * 2;

  flake.baseAlpha = Math.random() * 0.25 + 0.75;
  flake.visible = true;
  flake.alpha = flake.baseAlpha;

  system.container.addChild(flake);
  system.flakes.push(flake);
}

system.flakes.forEach(flake => {
  flake.y -= flake.speedFactor;

  flake.swingPhase += flake.swingSpeedFactor;
  flake.x = flake.baseX + Math.sin(flake.swingPhase) * flake.swingFactor;
});

for (let i = system.flakes.length - 1; i >= 0; i--) {
  const flake = system.flakes[i];
  if (
    flake.y < camY - halfH - RECYCLE_MARGIN ||
    flake.x < camX - halfW - RECYCLE_MARGIN * 2 ||
    flake.x > camX + halfW + RECYCLE_MARGIN * 2
  ) {
    system.container.removeChild(flake);
    flake.destroy();
    system.flakes.splice(i, 1);
  }
}

// Advance the spawn clock and release any queued spawns whose moment has
// arrived. The queue only ever holds entries for the staggered initial
// fill; ongoing replenishment (bubbles that popped at the top) spawns
// immediately at the bottom edge and never touches it.
system.spawnClock += dt;
for (let i = system.spawnQueue.length - 1; i >= 0; i--) {
  if (system.spawnQueue[i] <= system.spawnClock) {
    createFlake("edge");
    system.spawnQueue.splice(i, 1);
  }
}

const totalHave = system.flakes.length + system.spawnQueue.length;
const toAdd = Math.max(targetCount - totalHave, 0);

if (toAdd > 0) {
  if (!system.filled && !instantSpawn) {
    for (let i = 0; i < toAdd; i++) {
      system.spawnQueue.push(system.spawnClock + Math.random() * INITIAL_SPAWN_SPREAD);
    }
  } else {
    for (let i = 0; i < toAdd; i++) {
      createFlake(!system.filled && instantSpawn ? "instant" : "edge");
    }
  }
} else if (totalHave > targetCount) {
  let excess = totalHave - targetCount;
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
gdjs.evtsExt__WeatherControl__Bubble.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__WeatherControl__Bubble.userFunc0x1706cd8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WeatherControl__Bubble.func = function(runtimeScene, LayerName, Density, Size, SizeRange, Speed, SpeedRange, Swing, SwingSpeed, Color, Opacity, Thickness, PixelArt, InstantSpawn, Destroy, parentEventsFunctionContext) {
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
if (argName === "Size") return Size;
if (argName === "SizeRange") return SizeRange;
if (argName === "Speed") return Speed;
if (argName === "SpeedRange") return SpeedRange;
if (argName === "Swing") return Swing;
if (argName === "SwingSpeed") return SwingSpeed;
if (argName === "Color") return Color;
if (argName === "Opacity") return Opacity;
if (argName === "Thickness") return Thickness;
if (argName === "PixelArt") return PixelArt;
if (argName === "InstantSpawn") return InstantSpawn;
if (argName === "Destroy") return Destroy;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WeatherControl__Bubble.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WeatherControl__Bubble.registeredGdjsCallbacks = [];