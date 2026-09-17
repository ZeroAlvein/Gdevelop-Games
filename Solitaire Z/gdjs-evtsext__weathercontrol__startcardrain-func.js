
if (typeof gdjs.evtsExt__WeatherControl__StartCardRain !== "undefined") {
  gdjs.evtsExt__WeatherControl__StartCardRain.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WeatherControl__StartCardRain = {};
gdjs.evtsExt__WeatherControl__StartCardRain.idToCallbackMap = new Map();


gdjs.evtsExt__WeatherControl__StartCardRain.userFunc0x16b94b8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const layerName = eventsFunctionContext.getArgument("LayerName") || "";
const density = Math.max(0, Math.round(Number(eventsFunctionContext.getArgument("Density")) || 30));
const speedRaw = Number(eventsFunctionContext.getArgument("Speed")) || 20;
const speedRangeRaw = Number(eventsFunctionContext.getArgument("SpeedRange")) || 0;
const maxWidth = Number(eventsFunctionContext.getArgument("Width")) || 10;
const minWidth = Number(eventsFunctionContext.getArgument("MinWidth")) || 2;
const height = Number(eventsFunctionContext.getArgument("Height")) || 10;
const heightRange = Number(eventsFunctionContext.getArgument("HeightRange")) || 0;
const shrinkSpeedRaw = Number(eventsFunctionContext.getArgument("ShrinkSpeed")) || 20;

const instantSpawnArg = eventsFunctionContext.getArgument("InstantSpawn");
const instantSpawn = instantSpawnArg === true || instantSpawnArg === "true" || instantSpawnArg === "1" || instantSpawnArg === 1;

const speed = speedRaw * 10;
const speedRange = speedRangeRaw * 10;
const shrinkSpeed = Math.max(1, shrinkSpeedRaw * 10);

if (!runtimeScene.fallingRectSystems) runtimeScene.fallingRectSystems = {};
if (!runtimeScene.fallingRectPendingInit) runtimeScene.fallingRectPendingInit = {};

const layer = runtimeScene.getLayer(layerName);

// Delay actual creation by a couple of frames, so any window
// resize/maximize action run at scene start has time to take effect
// before we read camera dimensions for the reveal-line math.
if (runtimeScene.fallingRectPendingInit[layerName] === undefined) {
  runtimeScene.fallingRectPendingInit[layerName] = 2;
}

let system = runtimeScene.fallingRectSystems[layerName];
const pixiContainer = layer.getRenderer().getRendererObject();

if (system) {
  const stillAttached = pixiContainer.children && pixiContainer.children.indexOf(system.graphics) !== -1;
  if (system.pixiContainer !== pixiContainer || !stillAttached) {
    system = null;
  }
}

if (!system) {
  if (runtimeScene.fallingRectPendingInit[layerName] > 0) {
    runtimeScene.fallingRectPendingInit[layerName]--;
    return;
  }
}

const COLORS = [
    { color: 0xFFD500, weight: 40 },
    { color: 0xFF8C00, weight: 30 },
    { color: 0xFFFFFF, weight: 20 },
    { color: 0xE63232, weight: 10 }
];
const TOTAL_WEIGHT = COLORS.reduce((sum, c) => sum + c.weight, 0);

function pickColor() {
    let r = Math.random() * TOTAL_WEIGHT;
    for (let i = 0; i < COLORS.length; i++) {
        if (r < COLORS[i].weight) return COLORS[i].color;
        r -= COLORS[i].weight;
    }
    return COLORS[0].color;
}

function makeDrop(camW, camH, spawnAboveScreen) {
    const dropSpeed = speed + Math.random() * speedRange;
    const dropHeight = Math.max(1, height + Math.random() * heightRange);
    return {
        sx: Math.random() * camW,
        sy: spawnAboveScreen ? -dropHeight - Math.random() * camH * 0.5 : Math.random() * camH,
        speed: Math.max(1, dropSpeed),
        height: dropHeight,
        width: minWidth + Math.random() * (maxWidth - minWidth),
        shrinking: Math.random() < 0.5,
        color: pickColor(),
        visible: true
    };
}

if (!system) {
    const graphics = new PIXI.Graphics();
    pixiContainer.addChild(graphics);

    const camW = layer.getCameraWidth();
    const camH = layer.getCameraHeight();

    const drops = [];
    for (let i = 0; i < density; i++) {
        const drop = makeDrop(camW, camH, false);
        drops.push(drop);
    }

    system = {
        graphics,
        pixiContainer,
        drops
    };

    // Reveal-line setup: purely vertical (drops only fall straight
    // down), starts at the camera's top edge and sweeps to the bottom
    // edge in a fixed, short duration -- one-time decision per drop,
    // never re-evaluated, so nothing pops in or flickers mid-life.
    if (!instantSpawn) {
        const topEdge = -camH / 2;
        const bottomEdge = camH / 2;
        const startMargin = 20;

        system.revealLinePos = topEdge - startMargin;
        system.revealLineEnd = bottomEdge + startMargin;
        system.revealLineActive = true;
        system.revealSweepDuration = 1.5;
        system.revealLineSpeed = (system.revealLineEnd - system.revealLinePos) / system.revealSweepDuration;

        for (let i = 0; i < drops.length; i++) {
            const d = drops[i];
            const relY = d.sy - camH / 2;
            d.visible = relY <= system.revealLinePos;
        }

        // Guarantee at least a few drops are placed right at the very
        // top of the field and marked visible immediately, so
        // something is on screen from frame one regardless of density
        // or random scatter luck -- avoids relying on chance for the
        // very first visible content.
        const guaranteedCount = Math.min(5, drops.length);
        for (let i = 0; i < guaranteedCount; i++) {
            drops[i].sy = Math.random() * -20; // just above the very top edge
            drops[i].visible = true;
        }
    } else {
        system.revealLineActive = false;
    }

    runtimeScene.fallingRectSystems[layerName] = system;
}

if (system.revealLineActive) {
    const dt = runtimeScene.getTimeManager().getElapsedTime() / 1000;
    system.revealLinePos += system.revealLineSpeed * dt;
    if (system.revealLinePos > system.revealLineEnd) {
        system.revealLineActive = false;
    }
}

const dt = runtimeScene.getTimeManager().getElapsedTime() / 1000;
const camX = layer.getCameraX();
const camY = layer.getCameraY();
const camW = layer.getCameraWidth();
const camH = layer.getCameraHeight();

while (system.drops.length < density) {
    const fresh = makeDrop(camW, camH, true);
    fresh.visible = true; // new drops always spawn above screen already, always visible
    system.drops.push(fresh);
}
if (system.drops.length > density) {
    system.drops.length = density;
}

const g = system.graphics;
g.clear();

for (let i = 0; i < system.drops.length; i++) {
    const drop = system.drops[i];

    drop.sy += drop.speed * dt;

    if (drop.sy - drop.height > camH) {
        const fresh = makeDrop(camW, camH, true);
        drop.sx = fresh.sx;
        drop.sy = fresh.sy;
        drop.speed = fresh.speed;
        drop.height = fresh.height;
        drop.width = fresh.width;
        drop.shrinking = fresh.shrinking;
        drop.color = fresh.color;
        drop.visible = true; // recycled drops always come back visible
    }

    const widthDelta = shrinkSpeed * dt;
    if (drop.shrinking) {
        drop.width -= widthDelta;
        if (drop.width <= minWidth) {
            drop.width = minWidth;
            drop.shrinking = false;
        }
    } else {
        drop.width += widthDelta;
        if (drop.width >= maxWidth) {
            drop.width = maxWidth;
            drop.shrinking = true;
        }
    }

    if (!drop.visible) continue; // skip drawing entirely while hidden

    const worldX = camX - camW / 2 + drop.sx;
    const worldY = camY - camH / 2 + drop.sy;

    g.beginFill(drop.color);
    g.drawRect(worldX - drop.width / 2, worldY, drop.width, drop.height);
    g.endFill();
}
};
gdjs.evtsExt__WeatherControl__StartCardRain.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WeatherControl__StartCardRain.userFunc0x16b94b8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WeatherControl__StartCardRain.func = function(runtimeScene, LayerName, Density, Speed, SpeedRange, Width, MinWidth, Height, HeightRange, ShrinkSpeed, InstantSpawn, parentEventsFunctionContext) {
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
if (argName === "Width") return Width;
if (argName === "MinWidth") return MinWidth;
if (argName === "Height") return Height;
if (argName === "HeightRange") return HeightRange;
if (argName === "ShrinkSpeed") return ShrinkSpeed;
if (argName === "InstantSpawn") return InstantSpawn;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WeatherControl__StartCardRain.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WeatherControl__StartCardRain.registeredGdjsCallbacks = [];