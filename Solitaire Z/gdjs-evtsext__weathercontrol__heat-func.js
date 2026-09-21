
if (typeof gdjs.evtsExt__WeatherControl__Heat !== "undefined") {
  gdjs.evtsExt__WeatherControl__Heat.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WeatherControl__Heat = {};
gdjs.evtsExt__WeatherControl__Heat.idToCallbackMap = new Map();


gdjs.evtsExt__WeatherControl__Heat.userFunc0x16ed508 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const layerName = eventsFunctionContext.getArgument("LayerName") || "";

if (!runtimeScene.underwaterWaveSystems) runtimeScene.underwaterWaveSystems = {};

let system = runtimeScene.underwaterWaveSystems[layerName];
const layer = runtimeScene.getLayer(layerName);

if (!system) {
  const renderer = layer.getRenderer();
  const pixiContainer = renderer.getRendererObject();

  const camWidth = layer.getCameraWidth();
  const camHeight = layer.getCameraHeight();

  const amplitudeXPx = eventsFunctionContext.getArgument("AmplitudeX");
  const amplitudeYPx = eventsFunctionContext.getArgument("AmplitudeY");
  const wavelengthXPx = eventsFunctionContext.getArgument("WavelengthX");
  const wavelengthYPx = eventsFunctionContext.getArgument("WavelengthY");
  const speed = eventsFunctionContext.getArgument("Speed");
  const secondaryStrength = eventsFunctionContext.getArgument("SecondaryStrength");

  const fragmentShader = `
    precision mediump float;
    varying vec2 vTextureCoord;
    uniform sampler2D uSampler;

    uniform float time;
    uniform float amplitudeX;
    uniform float amplitudeY;
    uniform float freqX;
    uniform float freqY;
    uniform float speed;
    uniform float secondaryStrength;
    uniform float cameraOffsetX;
    uniform float cameraOffsetY;

    void main(void) {
      vec2 uv = vTextureCoord;

      float worldY = uv.y + cameraOffsetY;
      float worldX = uv.x + cameraOffsetX;

      float mainOffsetX = sin(worldY * freqX + time * speed) * amplitudeX;
      float mainOffsetY = sin(worldX * freqY + time * speed * 0.85) * amplitudeY;

      float secOffsetX = sin(worldY * freqX * 2.3 + time * speed * 1.6) * amplitudeX * secondaryStrength;
      float secOffsetY = sin(worldX * freqY * 2.7 + time * speed * 1.3) * amplitudeY * secondaryStrength;

      vec2 distortedUV = uv + vec2(mainOffsetX + secOffsetX, mainOffsetY + secOffsetY);
      distortedUV = clamp(distortedUV, 0.0, 1.0);

      gl_FragColor = texture2D(uSampler, distortedUV);
    }
  `;

  const filter = new PIXI.Filter(undefined, fragmentShader, {
    time: 0,
    amplitudeX: amplitudeXPx / camWidth,
    amplitudeY: amplitudeYPx / camHeight,
    freqX: (2 * Math.PI * camHeight) / wavelengthXPx,
    freqY: (2 * Math.PI * camWidth) / wavelengthYPx,
    speed: speed,
    secondaryStrength: secondaryStrength,
    cameraOffsetX: 0,
    cameraOffsetY: 0,
  });

  pixiContainer.filters = pixiContainer.filters
    ? pixiContainer.filters.concat(filter)
    : [filter];

  system = { filter, pixiContainer, camWidth, camHeight };
  runtimeScene.underwaterWaveSystems[layerName] = system;
}

system.filter.uniforms.time +=
  runtimeScene.getTimeManager().getElapsedTime() / 1000;

// Use current camera dimensions every frame in case of zoom changes
const camWidth = layer.getCameraWidth();
const camHeight = layer.getCameraHeight();
system.camWidth = camWidth;
system.camHeight = camHeight;

system.filter.uniforms.cameraOffsetX = layer.getCameraX() / camWidth;
system.filter.uniforms.cameraOffsetY = layer.getCameraY() / camHeight;
};
gdjs.evtsExt__WeatherControl__Heat.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__WeatherControl__Heat.userFunc0x16ed508(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WeatherControl__Heat.func = function(runtimeScene, LayerName, AmplitudeX, AmplitudeY, WavelengthX, WavelengthY, Speed, SecondaryStrength, parentEventsFunctionContext) {
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
if (argName === "AmplitudeX") return AmplitudeX;
if (argName === "AmplitudeY") return AmplitudeY;
if (argName === "WavelengthX") return WavelengthX;
if (argName === "WavelengthY") return WavelengthY;
if (argName === "Speed") return Speed;
if (argName === "SecondaryStrength") return SecondaryStrength;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WeatherControl__Heat.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WeatherControl__Heat.registeredGdjsCallbacks = [];