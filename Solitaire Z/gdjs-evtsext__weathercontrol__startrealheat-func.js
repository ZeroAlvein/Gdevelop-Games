
if (typeof gdjs.evtsExt__WeatherControl__StartRealHeat !== "undefined") {
  gdjs.evtsExt__WeatherControl__StartRealHeat.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WeatherControl__StartRealHeat = {};
gdjs.evtsExt__WeatherControl__StartRealHeat.idToCallbackMap = new Map();


gdjs.evtsExt__WeatherControl__StartRealHeat.userFunc0x1323ba8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const layerName = eventsFunctionContext.getArgument("LayerName") || "";
const strengthRaw = Number(eventsFunctionContext.getArgument("Strength")) || 25;
const speed = Number(eventsFunctionContext.getArgument("Speed")) || 1.0;
const scale = Number(eventsFunctionContext.getArgument("Scale")) || 8.0;
const waveStrengthRaw = Number(eventsFunctionContext.getArgument("WaveStrength")) || 0;

const strength = strengthRaw / 1000;
const waveStrength = Math.min(waveStrengthRaw / 100, 0.9);

if (!runtimeScene.heatWaveSystems) runtimeScene.heatWaveSystems = {};

let system = runtimeScene.heatWaveSystems[layerName];
const layer = runtimeScene.getLayer(layerName);

const renderer = layer.getRenderer();
const currentContainer = renderer.getRendererObject
    ? renderer.getRendererObject()
    : renderer._pixiContainer;

if (system) {
    const filters = currentContainer.filters;
    const filterStillPresent = filters && filters.indexOf(system.filter) !== -1;
    if (system.pixiContainer !== currentContainer || !filterStillPresent) {
        system = null;
    }
}

if (!system) {
    const fragmentShader = `
        precision mediump float;
        varying vec2 vTextureCoord;
        uniform sampler2D uSampler;
        uniform float uTime;
        uniform float strength;
        uniform float scale;
        uniform float waveStrength;
        uniform float cameraOffsetX;
        uniform float cameraOffsetY;

        float hash(vec2 p){
            return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453);
        }
        float noise(vec2 p){
            vec2 i=floor(p); vec2 f=fract(p);
            float a=hash(i), b=hash(i+vec2(1.0,0.0)), c=hash(i+vec2(0.0,1.0)), d=hash(i+vec2(1.0,1.0));
            vec2 u=f*f*(3.0-2.0*f);
            return mix(a,b,u.x) + (c-a)*u.y*(1.0-u.x) + (d-b)*u.x*u.y;
        }
        float fbm(vec2 p){
            float v=0.0, a=0.5;
            for(int i=0;i<4;i++){ v+=noise(p)*a; p*=2.0; a*=0.5; }
            return v;
        }
        void main(){
            vec2 uv=vTextureCoord;

            // ABS() here forces the phase input to sin() to never be
            // negative, ruling out a sign-flip at the compensation
            // boundary as the cause of the "wavelength doubling" look.
            float worldX = uv.x + abs(cameraOffsetX);
            float worldY = uv.y + abs(cameraOffsetY);

            vec2 flow;
            flow.x = worldX*scale;
            flow.y = worldY*scale;
            float rowSpeed = 1.0 + sin(worldY * 6.2831853) * waveStrength;
            flow.y -= uTime * rowSpeed;
            float n=fbm(flow);
            uv.x+=(n-0.5)*strength;
            uv.y+=(fbm(flow+10.0)-0.5)*strength*0.35;
            gl_FragColor=texture2D(uSampler,uv);
        }
    `;

    const filter = new PIXI.Filter(undefined, fragmentShader, {
        uTime: 0, strength: strength, scale: scale, waveStrength: waveStrength,
        cameraOffsetX: 0, cameraOffsetY: 0
    });

    currentContainer.filters = currentContainer.filters
        ? currentContainer.filters.concat(filter) : [filter];

    system = { filter, pixiContainer: currentContainer, baseCameraX: layer.getCameraX(), baseCameraY: layer.getCameraY() };
    runtimeScene.heatWaveSystems[layerName] = system;
}

const dt = runtimeScene.getTimeManager().getElapsedTime() / 1000;
const camWidth = layer.getCameraWidth();
const camHeight = layer.getCameraHeight();

system.uTimeRaw = (system.uTimeRaw || 0) + dt * speed;
system.filter.uniforms.uTime = system.uTimeRaw;
system.filter.uniforms.strength = strength;
system.filter.uniforms.scale = scale;
system.filter.uniforms.waveStrength = waveStrength;

// Compute raw offset WITHOUT any wrapping first, to test whether sign
// itself (not magnitude) is the trigger.
const rawOffsetX = (layer.getCameraX() - system.baseCameraX) / camWidth;
const rawOffsetY = (layer.getCameraY() - system.baseCameraY) / camHeight;

system.filter.uniforms.cameraOffsetX = rawOffsetX;
system.filter.uniforms.cameraOffsetY = rawOffsetY;
};
gdjs.evtsExt__WeatherControl__StartRealHeat.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WeatherControl__StartRealHeat.userFunc0x1323ba8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WeatherControl__StartRealHeat.func = function(runtimeScene, LayerName, Strength, Speed, Scale, WaveStrength, parentEventsFunctionContext) {
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
if (argName === "Strength") return Strength;
if (argName === "Speed") return Speed;
if (argName === "Scale") return Scale;
if (argName === "WaveStrength") return WaveStrength;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WeatherControl__StartRealHeat.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WeatherControl__StartRealHeat.registeredGdjsCallbacks = [];