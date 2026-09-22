
if (typeof gdjs.evtsExt__WeatherControl__Snow !== "undefined") {
  gdjs.evtsExt__WeatherControl__Snow.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WeatherControl__Snow = {};
gdjs.evtsExt__WeatherControl__Snow.idToCallbackMap = new Map();


gdjs.evtsExt__WeatherControl__Snow.userFunc0x1703328 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const layerName  = eventsFunctionContext.getArgument("LayerName") || "";

const destroyArg = eventsFunctionContext.getArgument("Destroy");
const destroy = destroyArg === true || destroyArg === "true" || destroyArg === "1" || destroyArg === 1;

if (destroy) {
  if (runtimeScene.snowSystems && runtimeScene.snowSystems[layerName]) {
    runtimeScene.snowSystems[layerName].container.destroy({ children: true });
    delete runtimeScene.snowSystems[layerName];
  }
  // Also clear the pending-init counter for this layer, so if snow gets
  // started again later on the same layer, it goes through the same
  // 2-frame startup delay as a genuinely fresh start instead of skipping
  // it (which was only ever meant to happen once, right at the very
  // beginning).
  if (runtimeScene.snowPendingInit) delete runtimeScene.snowPendingInit[layerName];
  return;
}

const density    = Number(eventsFunctionContext.getArgument("Density"))  || 0;

const size       = Number(eventsFunctionContext.getArgument("Size"))      || 1;
const sizeRange  = Number(eventsFunctionContext.getArgument("SizeRange")) || 0;

const speedRaw      = Number(eventsFunctionContext.getArgument("Speed"))      || 1;
const speedRangeRaw = Number(eventsFunctionContext.getArgument("SpeedRange")) || 0;
const speed      = speedRaw / 10;
const speedRange = speedRangeRaw / 10;

const windAngle  = Number(eventsFunctionContext.getArgument("WindAngle")) || 0;
const windRange  = Number(eventsFunctionContext.getArgument("WindRange")) || 0;
const swingRange = Number(eventsFunctionContext.getArgument("SwingRange")) || 0;
const swingSpeed = (Number(eventsFunctionContext.getArgument("SwingSpeed")) || 0) / 100;
const opacity    = Number(eventsFunctionContext.getArgument("Opacity"));

const instantSpawnArg = eventsFunctionContext.getArgument("InstantSpawn");
const instantSpawn = instantSpawnArg === true || instantSpawnArg === "true" || instantSpawnArg === "1" || instantSpawnArg === 1;

const colorArg = eventsFunctionContext.getArgument("Color") || "255;255;255";
const [r, g, b] = colorArg.split(";").map(Number);
const colorHex = (r << 16) + (g << 8) + b;

if (!runtimeScene.snowSystems) runtimeScene.snowSystems = {};
if (!runtimeScene.snowPendingInit) runtimeScene.snowPendingInit = {};

const layer = runtimeScene.getLayer(layerName);

if (runtimeScene.snowPendingInit[layerName] === undefined) {
  runtimeScene.snowPendingInit[layerName] = 2;
}

if (!runtimeScene.snowSystems[layerName]) {
  if (runtimeScene.snowPendingInit[layerName] > 0) {
    runtimeScene.snowPendingInit[layerName]--;
    return;
  }

  const renderer = layer.getRenderer();
  const pixiContainer = renderer.getRendererObject();
  const container = new PIXI.Container();
  pixiContainer.addChild(container);
  runtimeScene.snowSystems[layerName] = { container, flakes: [], filled: false };
}

const system = runtimeScene.snowSystems[layerName];

const camX = layer.getCameraX();
const camY = layer.getCameraY();
const camWidth = layer.getCameraWidth();
const camHeight = layer.getCameraHeight();
const halfW = camWidth / 2;
const halfH = camHeight / 2;

const angleRad = windAngle * Math.PI / 180;
const dirX = Math.cos(angleRad);
const dirY = Math.sin(angleRad);

const PADDING_FACTOR = 0.5;
const paddingX = camWidth * PADDING_FACTOR;
const paddingY = camHeight * PADDING_FACTOR;
const fieldHalfW = halfW + paddingX;
const fieldHalfH = halfH + paddingY;
const fieldWidth = fieldHalfW * 2;
const fieldHeight = fieldHalfH * 2;
const areaRatio = (camWidth > 0 && camHeight > 0)
  ? (fieldWidth * fieldHeight) / (camWidth * camHeight)
  : 1;
const targetCount = Math.max(0, Math.round(density * areaRatio));

const spawnMargin = 40;
const recycleMargin = 40;

const fieldHalfWExt = fieldHalfW + spawnMargin;
const fieldHalfHExt = fieldHalfH + spawnMargin;

const vertEdgeLength = fieldHeight + 2 * spawnMargin;
const horizEdgeLength = fieldWidth + 2 * spawnMargin;
const weightVert = Math.abs(dirX) * vertEdgeLength;
const weightHoriz = Math.abs(dirY) * horizEdgeLength;
const totalWeight = weightVert + weightHoriz;

function stratifiedFractions(count) {
  if (count <= 0) return [];
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push((i + Math.random()) / count);
  }
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = result[i];
    result[i] = result[j];
    result[j] = tmp;
  }
  return result;
}

function edgeSpawnPoints(count) {
  const points = [];
  if (count <= 0) return points;

  if (totalWeight <= 0) {
    const fracsX = stratifiedFractions(count);
    const fracsY = stratifiedFractions(count);
    for (let i = 0; i < count; i++) {
      points.push({
        x: camX - fieldHalfWExt + fracsX[i] * (2 * fieldHalfWExt),
        y: camY - fieldHalfHExt + fracsY[i] * (2 * fieldHalfHExt),
      });
    }
    return points;
  }

  let vertCount = Math.round(count * (weightVert / totalWeight));
  vertCount = Math.max(0, Math.min(vertCount, count));
  const horizCount = count - vertCount;

  const vertFracs = stratifiedFractions(vertCount);
  for (let i = 0; i < vertCount; i++) {
    points.push({
      x: camX - Math.sign(dirX) * fieldHalfWExt,
      y: camY - fieldHalfHExt + vertFracs[i] * (2 * fieldHalfHExt),
    });
  }

  const horizFracs = stratifiedFractions(horizCount);
  for (let i = 0; i < horizCount; i++) {
    points.push({
      x: camX - fieldHalfWExt + horizFracs[i] * (2 * fieldHalfWExt),
      y: camY - Math.sign(dirY) * fieldHalfHExt,
    });
  }

  return points;
}

function projectionOf(x, y) {
  return (x - camX) * dirX + (y - camY) * dirY;
}

// --- Reveal-line setup (runs once, at creation) ---
if (system.revealLinePos === undefined) {
  if (!instantSpawn) {
    const camCorners = [
      { x: -halfW, y: -halfH },
      { x:  halfW, y: -halfH },
      { x: -halfW, y:  halfH },
      { x:  halfW, y:  halfH },
    ];
    let nearestProjection = Infinity;
    let farthestProjection = -Infinity;
    for (let c = 0; c < camCorners.length; c++) {
      const proj = camCorners[c].x * dirX + camCorners[c].y * dirY;
      if (proj < nearestProjection) nearestProjection = proj;
      if (proj > farthestProjection) farthestProjection = proj;
    }

    const startMargin = 20;
    system.revealLinePos = nearestProjection - startMargin;
    system.revealLineEnd = farthestProjection + startMargin;
    system.revealLineActive = true;

    system.revealSweepDuration = 1.5;
    const sweepDistance = system.revealLineEnd - system.revealLinePos;
    system.revealLineSpeed = sweepDistance / system.revealSweepDuration;
  } else {
    system.revealLineActive = false;
  }
}

// Don't advance the line until the on-screen portion of the initial
// population has been created (system.onScreenFilled) -- that's the part
// that actually needs to be judged consistently against one fixed line
// position. Off-screen flakes finish filling in over later frames (see
// below) but that's invisible anyway, so it doesn't need to block the
// sweep from starting.
if (system.revealLineActive && system.onScreenFilled) {
  const dt = runtimeScene.getTimeManager().getElapsedTime() / 1000;
  system.revealLinePos += system.revealLineSpeed * dt;
  if (system.revealLinePos > system.revealLineEnd) {
    system.revealLinePos = system.revealLineEnd;
    system.revealLineActive = false;
  }
}

function decideInitialVisibility(flake) {
  // Decided once, at creation, and never revisited afterward: a flake that
  // starts hidden stays hidden -- opacity 0 -- for its entire remaining
  // lifetime, no matter where the line later moves to. It only becomes
  // visible again once it's recycled (destroyed and replaced by a brand
  // new flake, which gets its own fresh decision at ITS creation time).
  // This is what stops a fast-moving recycled flake from racing ahead and
  // showing up deep on screen before the snow has had time to look like
  // it's really reached that far -- it stays suppressed for its whole
  // crossing instead of "catching up" once the line passes its old spot.
  if (!system.revealLineActive) {
    flake.visible = true;
    flake.__pendingReveal = false;
    return;
  }
  if (projectionOf(flake.x, flake.y) <= system.revealLinePos) {
    flake.visible = true;
    flake.__pendingReveal = false;
  } else {
    flake.visible = false;
    flake.__pendingReveal = true;
  }
}

system.flakes.forEach(flake => {
  const radius = size + flake.sizeFactor * sizeRange;
  flake.scale.set(radius);
  flake.tint = colorHex;

  const flakeSpeed = speed + flake.speedFactor * speedRange;
  const flakeAngleRad = (windAngle + flake.angleOffset) * Math.PI / 180;
  const flakeDirX = Math.cos(flakeAngleRad);
  const flakeDirY = Math.sin(flakeAngleRad);
  const flakePerpX = -flakeDirY;
  const flakePerpY = flakeDirX;

  flake.swing += swingSpeed * flake.swingSpeedFactor;
  const swingOffset = Math.sin(flake.swing) * flake.swingAmplitude;

  flake.x += flakeDirX * flakeSpeed + flakePerpX * swingOffset;
  flake.y += flakeDirY * flakeSpeed + flakePerpY * swingOffset;
});

for (let i = system.flakes.length - 1; i >= 0; i--) {
  const flake = system.flakes[i];
  if (
    flake.x < camX - fieldHalfW - recycleMargin ||
    flake.x > camX + fieldHalfW + recycleMargin ||
    flake.y < camY - fieldHalfH - recycleMargin ||
    flake.y > camY + fieldHalfH + recycleMargin
  ) {
    system.container.removeChild(flake);
    flake.destroy();
    system.flakes.splice(i, 1);
  }
}

// InstantSpawn creates the whole population in one frame, same as always.
// For the non-instant reveal-line start, only what's actually on screen
// needs to be created in that first frame (everything in it must be judged
// against the SAME fixed line position, or you get inconsistent pop-ins).
// Off-screen flakes aren't visible yet regardless of when they're created,
// so they're queued once (stratified across the whole field, same as
// before) and trickled in over the following frames to spread out the
// PIXI.Graphics creation cost.
const OFFSCREEN_CHUNK = 150;

if (!system.filled && !instantSpawn && !system.fillQueue) {
  const total = targetCount;
  const fracsX = stratifiedFractions(total);
  const fracsY = stratifiedFractions(total);
  const onScreen = [];
  const offScreen = [];
  for (let i = 0; i < total; i++) {
    const x = camX - fieldHalfW + fracsX[i] * fieldWidth;
    const y = camY - fieldHalfH + fracsY[i] * fieldHeight;
    const isOnScreen = x > camX - halfW && x < camX + halfW && y > camY - halfH && y < camY + halfH;
    (isOnScreen ? onScreen : offScreen).push({ x, y });
  }
  system.fillQueue = { onScreen, offScreen };
  system.onScreenFilled = false;
}

const rawToAdd = Math.max(targetCount - system.flakes.length, 0);
let toAdd = 0;
let spawnQueue = null;

if (system.filled) {
  toAdd = rawToAdd;
  spawnQueue = edgeSpawnPoints(toAdd);
} else if (instantSpawn) {
  toAdd = rawToAdd;
  const fracsX = stratifiedFractions(toAdd);
  const fracsY = stratifiedFractions(toAdd);
  spawnQueue = [];
  for (let i = 0; i < toAdd; i++) {
    spawnQueue.push({
      x: camX - fieldHalfW + fracsX[i] * fieldWidth,
      y: camY - fieldHalfH + fracsY[i] * fieldHeight,
    });
  }
} else if (!system.onScreenFilled) {
  spawnQueue = system.fillQueue.onScreen;
  toAdd = spawnQueue.length;
  system.fillQueue.onScreen = [];
  system.onScreenFilled = true;
} else if (system.fillQueue.offScreen.length > 0) {
  spawnQueue = system.fillQueue.offScreen.splice(0, OFFSCREEN_CHUNK);
  toAdd = spawnQueue.length;
}

if (toAdd > 0) {
  for (let i = 0; i < toAdd; i++) {
    const flake = new PIXI.Graphics();
    flake.beginFill(0xFFFFFF, 1);
    flake.drawCircle(0, 0, 1);
    flake.endFill();

    const spawnPoint = spawnQueue[i];
    flake.x = spawnPoint.x;
    flake.y = spawnPoint.y;

    flake.sizeFactor = Math.random();
    flake.speedFactor = Math.random();
    flake.angleOffset = windRange === 0 ? 0 : (Math.random() * 2 - 1) * windRange;
    flake.swingAmplitude = Math.random() * swingRange;
    flake.swingSpeedFactor = 0.75 + Math.random() * 0.5;
    flake.alpha = Math.random() * 0.5 + 0.5;
    flake.swing = Math.random() * Math.PI * 2;

    decideInitialVisibility(flake);

    system.container.addChild(flake);
    system.flakes.push(flake);
  }

  // Guarantee a few flakes sit right at the reveal line's STARTING
  // edge and are immediately visible -- but only ever done ONCE, on
  // the very first call that creates any flakes at all. Without this
  // guard, since fill can now spread across multiple frames (capped
  // per frame), this block would otherwise re-run on every one of
  // those frames using the line's CURRENT (already advanced)
  // position, placing "guaranteed" flakes progressively deeper into
  // the visible area on each subsequent frame.
  if (!system.guaranteedFlakesPlaced && !instantSpawn && system.revealLineActive) {
    system.guaranteedFlakesPlaced = true;

    const guaranteedCount = Math.min(5, system.flakes.length);
    const lineStartPos = system.revealLinePos - 30;
    for (let i = 0; i < guaranteedCount; i++) {
      const flake = system.flakes[system.flakes.length - 1 - i];
      const forwardOffset = Math.random() * 20;
      const lateralOffset = (Math.random() - 0.5) * Math.min(camWidth, camHeight) * 0.3;
      const perpX = -dirY;
      const perpY = dirX;

      flake.x = camX + dirX * (lineStartPos + forwardOffset) + perpX * lateralOffset;
      flake.y = camY + dirY * (lineStartPos + forwardOffset) + perpY * lateralOffset;
      flake.visible = true;
      flake.__pendingReveal = false;
    }
  }
} else if (system.flakes.length > targetCount) {
  const toRemove = system.flakes.length - targetCount;
  for (let i = 0; i < toRemove; i++) {
    const flake = system.flakes.pop();
    system.container.removeChild(flake);
    flake.destroy();
  }
}

if (!system.filled && targetCount > 0 && system.flakes.length >= targetCount) {
  system.filled = true;
}

system.container.alpha = Math.max(0, Math.min(255, opacity)) / 255;
};
gdjs.evtsExt__WeatherControl__Snow.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__WeatherControl__Snow.userFunc0x1703328(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WeatherControl__Snow.func = function(runtimeScene, LayerName, Density, Size, SizeRange, Speed, SpeedRange, WindAngle, WindRange, SwingSpeed, SwingRange, Opacity, Color, InstantSpawn, Destroy, parentEventsFunctionContext) {
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
if (argName === "WindAngle") return WindAngle;
if (argName === "WindRange") return WindRange;
if (argName === "SwingSpeed") return SwingSpeed;
if (argName === "SwingRange") return SwingRange;
if (argName === "Opacity") return Opacity;
if (argName === "Color") return Color;
if (argName === "InstantSpawn") return InstantSpawn;
if (argName === "Destroy") return Destroy;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WeatherControl__Snow.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WeatherControl__Snow.registeredGdjsCallbacks = [];