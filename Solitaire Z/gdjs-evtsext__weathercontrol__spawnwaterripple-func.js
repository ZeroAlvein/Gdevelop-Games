
if (typeof gdjs.evtsExt__WeatherControl__SpawnWaterRipple !== "undefined") {
  gdjs.evtsExt__WeatherControl__SpawnWaterRipple.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WeatherControl__SpawnWaterRipple = {};
gdjs.evtsExt__WeatherControl__SpawnWaterRipple.idToCallbackMap = new Map();


gdjs.evtsExt__WeatherControl__SpawnWaterRipple.userFunc0x16dd9a8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const layerName = eventsFunctionContext.getArgument("LayerName") || "";
const x = Number(eventsFunctionContext.getArgument("X")) || 0;
const y = Number(eventsFunctionContext.getArgument("Y")) || 0;
const minRadius = Number(eventsFunctionContext.getArgument("MinRadius")) || 20;
const maxRadius = Number(eventsFunctionContext.getArgument("MaxRadius")) || 50;
const lifetime  = Number(eventsFunctionContext.getArgument("Lifetime"))  || 60;
const thickness = Number(eventsFunctionContext.getArgument("Thickness")) || 2;
const opacity   = Number(eventsFunctionContext.getArgument("Opacity"))   || 200;

const colorArg = eventsFunctionContext.getArgument("Color") || "255;255;255";
const [r, g, b] = colorArg.split(";").map(Number);
const colorHex = (r << 16) + (g << 8) + b;

if (runtimeScene.rippleSystems && runtimeScene.rippleSystems[layerName]) {
  const system = runtimeScene.rippleSystems[layerName];

  const graphic = new PIXI.Graphics();
  graphic.x = x;
  graphic.y = y;
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
}
};
gdjs.evtsExt__WeatherControl__SpawnWaterRipple.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WeatherControl__SpawnWaterRipple.userFunc0x16dd9a8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WeatherControl__SpawnWaterRipple.func = function(runtimeScene, LayerName, X, Y, MinRadius, MaxRadius, Lifetime, Thickness, Opacity, Color, parentEventsFunctionContext) {
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
if (argName === "X") return X;
if (argName === "Y") return Y;
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


gdjs.evtsExt__WeatherControl__SpawnWaterRipple.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WeatherControl__SpawnWaterRipple.registeredGdjsCallbacks = [];