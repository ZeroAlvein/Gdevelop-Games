
if (typeof gdjs.evtsExt__WeatherControl__StartMirageLine !== "undefined") {
  gdjs.evtsExt__WeatherControl__StartMirageLine.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WeatherControl__StartMirageLine = {};
gdjs.evtsExt__WeatherControl__StartMirageLine.idToCallbackMap = new Map();


gdjs.evtsExt__WeatherControl__StartMirageLine.userFunc0x16e4690 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const layerName = eventsFunctionContext.getArgument("LayerName") || "";
const intensityPx       = Number(eventsFunctionContext.getArgument("Intensity"))       || 2;
const frequency         = Number(eventsFunctionContext.getArgument("Frequency"))       || 8;
const speed              = Number(eventsFunctionContext.getArgument("Speed"))           || 0.6;
const streakIntensityPx = Number(eventsFunctionContext.getArgument("StreakIntensity")) || 6;
const streakFrequency   = Number(eventsFunctionContext.getArgument("StreakFrequency")) || 2;
const streakSpeed       = Number(eventsFunctionContext.getArgument("StreakSpeed"))     || 1.2;
const streakWidth       = Number(eventsFunctionContext.getArgument("StreakWidth"))     || 0.04;
const stripHeight       = Number(eventsFunctionContext.getArgument("StripHeight"))     || 0;

if (!runtimeScene.mirageSystems) runtimeScene.mirageSystems = {};

let system = runtimeScene.mirageSystems[layerName];
const layer = runtimeScene.getLayer(layerName);

// --- First call for this layer: build + attach the filter ---
if (!system) {
  const renderer = layer.getRenderer();
  const pixiContainer = renderer.getRendererObject();

  const fragmentShader = `
    precision mediump float;
    varying vec2 vTextureCoord;
    uniform sampler2D uSampler;

    uniform float time;
    uniform float streakTime;

    uniform float intensity;
    uniform float frequency;

    uniform float streakIntensity;
    uniform float streakFrequency;
    uniform float streakWidth;

    uniform float bands;

    uniform float cameraOffsetY; // world-anchoring compensation

    void main(void) {
      vec2 uv = vTextureCoord;

      // World-anchored Y position used only for the phase math below,
      // so the pattern stays glued to layer content instead of the screen.
      float worldY = uv.y + cameraOffsetY;

      float ambientWave = sin(worldY * frequency + time) * intensity;

      float streakY = worldY;
      if (bands > 0.0) {
        streakY = floor(worldY * bands) / bands;
      }
      float phase = fract(streakY * streakFrequency + streakTime);
      float inStreak = step(phase, streakWidth);
      float streakWave = inStreak * streakIntensity;

      uv.x += ambientWave + streakWave;
      gl_FragColor = texture2D(uSampler, uv);
    }
  `;

  const filter = new PIXI.Filter(undefined, fragmentShader, {
    time: 0,
    streakTime: 0,
    intensity: 0,
    frequency: frequency,
    streakIntensity: 0,
    streakFrequency: streakFrequency,
    streakWidth: streakWidth,
    bands: 0,
    cameraOffsetY: 0
  });

  pixiContainer.filters = pixiContainer.filters
    ? pixiContainer.filters.concat(filter)
    : [filter];

  system = {
    filter,
    pixiContainer,
    camHeight: layer.getCameraHeight()
  };
  runtimeScene.mirageSystems[layerName] = system;
}

// --- Every call: defensive re-attach, advance time, update params ---
if (!system.pixiContainer.filters || !system.pixiContainer.filters.includes(system.filter)) {
  system.pixiContainer.filters = system.pixiContainer.filters
    ? system.pixiContainer.filters.concat(system.filter)
    : [system.filter];
}

const dt = runtimeScene.getTimeManager().getElapsedTime() / 1000;
const gameWidth = runtimeScene.getGame().getGameResolutionWidth();
const gameHeight = runtimeScene.getGame().getGameResolutionHeight();
const camHeight = layer.getCameraHeight();

system.filter.uniforms.time += dt * speed;
system.filter.uniforms.streakTime += dt * streakSpeed;

system.filter.uniforms.intensity = intensityPx / gameWidth;
system.filter.uniforms.frequency = frequency;
system.filter.uniforms.streakIntensity = streakIntensityPx / gameWidth;
system.filter.uniforms.streakFrequency = streakFrequency;
system.filter.uniforms.streakWidth = streakWidth;
system.filter.uniforms.bands = stripHeight > 0 ? Math.max(1, gameHeight / stripHeight) : 0;

// World-space anchoring: convert camera Y (world pixels) into the same
// normalized UV units the shader's phase math uses, based on the
// camera's actual visible height (handles zoom correctly).
system.filter.uniforms.cameraOffsetY = layer.getCameraY() / camHeight;
};
gdjs.evtsExt__WeatherControl__StartMirageLine.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__WeatherControl__StartMirageLine.userFunc0x16e4690(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WeatherControl__StartMirageLine.func = function(runtimeScene, LayerName, Intensity, Frequency, Speed, StreakIntensity, StreakFrequency, StreakSpeed, StreakWidth, StripHeight, parentEventsFunctionContext) {
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
if (argName === "Intensity") return Intensity;
if (argName === "Frequency") return Frequency;
if (argName === "Speed") return Speed;
if (argName === "StreakIntensity") return StreakIntensity;
if (argName === "StreakFrequency") return StreakFrequency;
if (argName === "StreakSpeed") return StreakSpeed;
if (argName === "StreakWidth") return StreakWidth;
if (argName === "StripHeight") return StripHeight;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WeatherControl__StartMirageLine.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WeatherControl__StartMirageLine.registeredGdjsCallbacks = [];