
if (typeof gdjs.evtsExt__WeatherControl__StartWaterRipple !== "undefined") {
  gdjs.evtsExt__WeatherControl__StartWaterRipple.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WeatherControl__StartWaterRipple = {};
gdjs.evtsExt__WeatherControl__StartWaterRipple.idToCallbackMap = new Map();


gdjs.evtsExt__WeatherControl__StartWaterRipple.userFunc0x16dd990 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const layerName = eventsFunctionContext.getArgument("LayerName") || "";

if (!runtimeScene.rippleSystems) runtimeScene.rippleSystems = {};

if (!runtimeScene.rippleSystems[layerName]) {
  const layer = runtimeScene.getLayer(layerName);
  const renderer = layer.getRenderer();
  const pixiContainer = renderer.getRendererObject();

  const container = new PIXI.Container();
  pixiContainer.addChild(container);

  runtimeScene.rippleSystems[layerName] = {
    container,
    emitters: [],
    ripples: []
  };
}
};
gdjs.evtsExt__WeatherControl__StartWaterRipple.userFunc0x16d7e60 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const layerName     = eventsFunctionContext.getArgument("LayerName")     || "";
const emitterCount  = Number(eventsFunctionContext.getArgument("EmitterCount"))  || 0;
const emitterSpeed  = Number(eventsFunctionContext.getArgument("EmitterSpeed"))  || 0.5;
const spawnInterval = Number(eventsFunctionContext.getArgument("SpawnInterval")) || 45;
const minRadius     = Number(eventsFunctionContext.getArgument("MinRadius"))     || 20;
const maxRadius     = Number(eventsFunctionContext.getArgument("MaxRadius"))     || 50;
const lifetime      = Number(eventsFunctionContext.getArgument("Lifetime"))      || 60;
const thickness     = Number(eventsFunctionContext.getArgument("Thickness"))     || 2;
const opacity       = Number(eventsFunctionContext.getArgument("Opacity"))       || 180;

const colorArg = eventsFunctionContext.getArgument("Color") || "255;255;255";
const [r, g, b] = colorArg.split(";").map(Number);
const colorHex = (r << 16) + (g << 8) + b;

if (runtimeScene.rippleSystems && runtimeScene.rippleSystems[layerName]) {
  const system = runtimeScene.rippleSystems[layerName];
  const gameWidth = runtimeScene.getGame().getGameResolutionWidth();
  const gameHeight = runtimeScene.getGame().getGameResolutionHeight();

  // --- Ramp emitter count toward EmitterCount. 0 = no ambient ripples at all. ---
  if (system.emitters.length < emitterCount) {
    const toAdd = emitterCount - system.emitters.length;
    for (let i = 0; i < toAdd; i++) {
      system.emitters.push({
        x: Math.random() * gameWidth,
        y: Math.random() * gameHeight,
        angle: Math.random() * Math.PI * 2,
        turnTimer: 60 + Math.random() * 60,
        spawnTimer: Math.random() * spawnInterval
      });
    }
  } else if (system.emitters.length > emitterCount) {
    system.emitters.length = emitterCount; // drop the extras
  }

  // --- Move each invisible emitter and occasionally drop a ripple ---
  system.emitters.forEach(emitter => {
    emitter.turnTimer -= 1;
    if (emitter.turnTimer <= 0) {
      emitter.angle = Math.random() * Math.PI * 2;
      emitter.turnTimer = 60 + Math.random() * 60;
    }

    emitter.x += Math.cos(emitter.angle) * emitterSpeed;
    emitter.y += Math.sin(emitter.angle) * emitterSpeed;

    // Bounce off the edges so emitters stay within the visible area
    if (emitter.x < 0)          { emitter.x = 0;          emitter.angle = Math.PI - emitter.angle; }
    if (emitter.x > gameWidth)  { emitter.x = gameWidth;  emitter.angle = Math.PI - emitter.angle; }
    if (emitter.y < 0)          { emitter.y = 0;          emitter.angle = -emitter.angle; }
    if (emitter.y > gameHeight) { emitter.y = gameHeight; emitter.angle = -emitter.angle; }

    emitter.spawnTimer -= 1;
    if (emitter.spawnTimer <= 0) {
      const graphic = new PIXI.Graphics();
      graphic.x = emitter.x;
      graphic.y = emitter.y;
      system.container.addChild(graphic);

      system.ripples.push({
        graphic,
        age: 0,
        lifetime: lifetime + Math.random() * lifetime * 0.3,
        startRadius: 1,
        targetRadius: minRadius + Math.random() * (maxRadius - minRadius),
        opacityFactor: 0.7 + Math.random() * 0.3,
        thickness,
        colorHex,
        opacity
      });

      emitter.spawnTimer = spawnInterval + (Math.random() - 0.5) * spawnInterval * 0.5;
    }
  });

  // --- Grow, fade, and remove every active ripple (both ambient and manual) ---
  for (let i = system.ripples.length - 1; i >= 0; i--) {
    const ripple = system.ripples[i];
    ripple.age += 1;

    if (ripple.age >= ripple.lifetime) {
      system.container.removeChild(ripple.graphic);
      ripple.graphic.destroy();
      system.ripples.splice(i, 1);
      continue;
    }

    const t = ripple.age / ripple.lifetime;
    const radius = ripple.startRadius + t * (ripple.targetRadius - ripple.startRadius);
    const alpha = (1 - t) * (ripple.opacity / 255) * ripple.opacityFactor;

    ripple.graphic.clear();
    ripple.graphic.lineStyle(ripple.thickness, ripple.colorHex, Math.max(0, alpha));
    ripple.graphic.drawCircle(0, 0, radius);
  }
}
};
gdjs.evtsExt__WeatherControl__StartWaterRipple.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WeatherControl__StartWaterRipple.userFunc0x16dd990(runtimeScene, eventsFunctionContext);

}


{


gdjs.evtsExt__WeatherControl__StartWaterRipple.userFunc0x16d7e60(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WeatherControl__StartWaterRipple.func = function(runtimeScene, LayerName, EmitterCount, EmitterSpeed, SpawnInterval, MinRadius, MaxRadius, Lifetime, Thickness, Opacity, Color, parentEventsFunctionContext) {
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
if (argName === "EmitterCount") return EmitterCount;
if (argName === "EmitterSpeed") return EmitterSpeed;
if (argName === "SpawnInterval") return SpawnInterval;
if (argName === "MinRadius") return MinRadius;
if (argName === "MaxRadius") return MaxRadius;
if (argName === "Lifetime") return Lifetime;
if (argName === "Thickness") return Thickness;
if (argName === "Opacity") return Opacity;
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WeatherControl__StartWaterRipple.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WeatherControl__StartWaterRipple.registeredGdjsCallbacks = [];