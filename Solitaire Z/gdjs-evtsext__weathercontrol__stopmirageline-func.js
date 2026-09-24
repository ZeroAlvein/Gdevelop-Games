
if (typeof gdjs.evtsExt__WeatherControl__StopMirageLine !== "undefined") {
  gdjs.evtsExt__WeatherControl__StopMirageLine.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WeatherControl__StopMirageLine = {};
gdjs.evtsExt__WeatherControl__StopMirageLine.idToCallbackMap = new Map();


gdjs.evtsExt__WeatherControl__StopMirageLine.userFunc0x17b7ef8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const layerName = eventsFunctionContext.getArgument("LayerName") || "";

if (runtimeScene.mirageSystems && runtimeScene.mirageSystems[layerName]) {
  const system = runtimeScene.mirageSystems[layerName];
  const index = system.pixiContainer.filters
    ? system.pixiContainer.filters.indexOf(system.filter)
    : -1;

  if (index !== -1) {
    system.pixiContainer.filters.splice(index, 1);
  }

  delete runtimeScene.mirageSystems[layerName];
}
};
gdjs.evtsExt__WeatherControl__StopMirageLine.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WeatherControl__StopMirageLine.userFunc0x17b7ef8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WeatherControl__StopMirageLine.func = function(runtimeScene, LayerName, parentEventsFunctionContext) {
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


gdjs.evtsExt__WeatherControl__StopMirageLine.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WeatherControl__StopMirageLine.registeredGdjsCallbacks = [];