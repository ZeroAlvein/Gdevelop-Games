
if (typeof gdjs.evtsExt__SaveLoadEasy__Save !== "undefined") {
  gdjs.evtsExt__SaveLoadEasy__Save.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SaveLoadEasy__Save = {};
gdjs.evtsExt__SaveLoadEasy__Save.idToCallbackMap = new Map();


gdjs.evtsExt__SaveLoadEasy__Save.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variables._declare("SaveVar", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{gdjs.Variable.copy(eventsFunctionContext.getArgument("ActionVariable"), eventsFunctionContext.localVariables[0].getFromIndex(0), false);
}
{gdjs.evtTools.storage.writeStringInJSONFile(eventsFunctionContext.getArgument("StorageName"), eventsFunctionContext.getArgument("GroupName"), gdjs.evtTools.network.variableStructureToJSON(eventsFunctionContext.localVariables[0].getFromIndex(0)));
}
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__SaveLoadEasy__Save.func = function(runtimeScene, ActionVariable, GroupName, StorageName, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SaveLoadEasy"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SaveLoadEasy"),
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
if (argName === "ActionVariable") return ActionVariable;
if (argName === "GroupName") return GroupName;
if (argName === "StorageName") return StorageName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SaveLoadEasy__Save.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__SaveLoadEasy__Save.registeredGdjsCallbacks = [];