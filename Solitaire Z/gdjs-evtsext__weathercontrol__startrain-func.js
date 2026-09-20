
if (typeof gdjs.evtsExt__WeatherControl__StartRain !== "undefined") {
  gdjs.evtsExt__WeatherControl__StartRain.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WeatherControl__StartRain = {};
gdjs.evtsExt__WeatherControl__StartRain.idToCallbackMap = new Map();


gdjs.evtsExt__WeatherControl__StartRain.userFunc0x16dea18 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const layerName = eventsFunctionContext.getArgument("LayerName") || "";

if (!runtimeScene.rainSystems) runtimeScene.rainSystems = {};

if (!runtimeScene.rainSystems[layerName]) {
  const layer = runtimeScene.getLayer(layerName);
  const renderer = layer.getRenderer();
  const pixiContainer = renderer.getRendererObject();

  const container = new PIXI.Container();
  pixiContainer.addChild(container);

  runtimeScene.rainSystems[layerName] = { container, drops: [], filled: false };
}
};
gdjs.evtsExt__WeatherControl__StartRain.userFunc0x16ddb10 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const layerName = eventsFunctionContext.getArgument("LayerName") || "";
const density   = Number(eventsFunctionContext.getArgument("Density"))   || 0;
const minLength = Number(eventsFunctionContext.getArgument("MinLength")) || 10;
const maxLength = Number(eventsFunctionContext.getArgument("MaxLength")) || 20;
const width     = Number(eventsFunctionContext.getArgument("Width"))     || 2;
const minSpeed  = Number(eventsFunctionContext.getArgument("MinSpeed"))  || 8;
const maxSpeed  = Number(eventsFunctionContext.getArgument("MaxSpeed"))  || 14;
const minAngle  = Number(eventsFunctionContext.getArgument("MinAngle"))  || 95;
const maxAngle  = Number(eventsFunctionContext.getArgument("MaxAngle"))  || 85;
const opacity   = Number(eventsFunctionContext.getArgument("Opacity"));

const colorArg = eventsFunctionContext.getArgument("Color") || "255;255;255";
const [r, g, b] = colorArg.split(";").map(Number);
const colorHex = (r << 16) + (g << 8) + b;

if (runtimeScene.rainSystems && runtimeScene.rainSystems[layerName]) {
  const system = runtimeScene.rainSystems[layerName];
  const gameWidth = runtimeScene.getGame().getGameResolutionWidth();
  const gameHeight = runtimeScene.getGame().getGameResolutionHeight();

  // --- Ramp drop count gradually toward Density (same idea as snow) ---
  const maxChangePerFrame = 3;

  if (system.drops.length < density) {
    const toAdd = Math.min(maxChangePerFrame, density - system.drops.length);
    for (let i = 0; i < toAdd; i++) {
      const drop = new PIXI.Graphics();
      // Unit square (1x1), centered on origin — scaled per-drop below.
      drop.beginFill(0xFFFFFF, 1);
      drop.drawRect(-0.5, -0.5, 1, 1);
      drop.endFill();

      drop.x = Math.random() * gameWidth;
      // First fill scatters across the screen (looks like rain already
      // falling); later additions arrive from the top like new rain.
      drop.y = system.filled ? -10 : Math.random() * gameHeight;

      drop.lengthFactor = Math.random();
      drop.speedFactor = Math.random();
      drop.angleFactor = Math.random();
      drop.alpha = Math.random() * 0.4 + 0.6;

      system.container.addChild(drop);
      system.drops.push(drop);
    }
  } else if (system.drops.length > density) {
    const toRemove = Math.min(maxChangePerFrame, system.drops.length - density);
    for (let i = 0; i < toRemove; i++) {
      const drop = system.drops.pop();
      system.container.removeChild(drop);
      drop.destroy();
    }
  }

  if (!system.filled && density > 0 && system.drops.length >= density) {
    system.filled = true;
  }

  // --- Update every currently-alive drop ---
  system.container.alpha = Math.max(0, Math.min(255, opacity)) / 255;

  const spawnMargin = 10;
  const recycleMargin = 40;

  system.drops.forEach(drop => {
    const length = minLength + drop.lengthFactor * (maxLength - minLength);
    const speed  = minSpeed  + drop.speedFactor  * (maxSpeed  - minSpeed);
    const angleDeg = minAngle + drop.angleFactor * (maxAngle - minAngle);
    const angleRad = angleDeg * Math.PI / 180;

    drop.scale.x = width;
    drop.scale.y = length;
    // Unit rect is drawn "vertical" (matches angle = 90°), so rotate
    // relative to that baseline to match the drop's actual travel angle.
    drop.rotation = angleRad - Math.PI / 2;
    drop.tint = colorHex;

    drop.x += Math.cos(angleRad) * speed;
    drop.y += Math.sin(angleRad) * speed;

    // Recycle on whichever edge is crossed — works for any angle/direction,
    // same approach as the snow extension.
    if (drop.y > gameHeight + recycleMargin) {
      drop.y = -spawnMargin;
      drop.x = Math.random() * gameWidth;
    } else if (drop.y < -recycleMargin) {
      drop.y = gameHeight + spawnMargin;
      drop.x = Math.random() * gameWidth;
    }

    if (drop.x > gameWidth + recycleMargin) {
      drop.x = -spawnMargin;
      drop.y = Math.random() * gameHeight;
    } else if (drop.x < -recycleMargin) {
      drop.x = gameWidth + spawnMargin;
      drop.y = Math.random() * gameHeight;
    }
  });
}
};
gdjs.evtsExt__WeatherControl__StartRain.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__WeatherControl__StartRain.userFunc0x16dea18(runtimeScene, eventsFunctionContext);

}


{


gdjs.evtsExt__WeatherControl__StartRain.userFunc0x16ddb10(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WeatherControl__StartRain.func = function(runtimeScene, LayerName, Density, Width, MinLength, MaxLength, MinSpeed, MaxSpeed, MinAngle, MaxAngle, Opacity, Color, parentEventsFunctionContext) {
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
if (argName === "Width") return Width;
if (argName === "MinLength") return MinLength;
if (argName === "MaxLength") return MaxLength;
if (argName === "MinSpeed") return MinSpeed;
if (argName === "MaxSpeed") return MaxSpeed;
if (argName === "MinAngle") return MinAngle;
if (argName === "MaxAngle") return MaxAngle;
if (argName === "Opacity") return Opacity;
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WeatherControl__StartRain.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WeatherControl__StartRain.registeredGdjsCallbacks = [];