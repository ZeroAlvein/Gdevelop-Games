
if (typeof gdjs.evtsExt__WeatherControl__StopRealHeat !== "undefined") {
  gdjs.evtsExt__WeatherControl__StopRealHeat.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WeatherControl__StopRealHeat = {};
gdjs.evtsExt__WeatherControl__StopRealHeat.idToCallbackMap = new Map();


gdjs.evtsExt__WeatherControl__StopRealHeat.userFunc0x17ac950 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const layerName = eventsFunctionContext.getArgument("LayerName") || "";

if (runtimeScene.heatWaveSystems && runtimeScene.heatWaveSystems[layerName]) {
  const system = runtimeScene.heatWaveSystems[layerName];
  const index = system.pixiContainer.filters
    ? system.pixiContainer.filters.indexOf(system.filter)
    : -1;

  if (index !== -1) {
    system.pixiContainer.filters.splice(index, 1);
  }

  delete runtimeScene.heatWaveSystems[layerName];
}
};
gdjs.evtsExt__WeatherControl__StopRealHeat.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WeatherControl__StopRealHeat.userFunc0x17ac950(runtimeScene, eventsFunctionContext);

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__WeatherControl__StopRealHeat.func = function(runtimeScene, LayerName, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WeatherControl__StopRealHeat.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WeatherControl__StopRealHeat.registeredGdjsCallbacks = [];