
if (typeof gdjs.evtsExt__WeatherControl__StartHeatWave !== "undefined") {
  gdjs.evtsExt__WeatherControl__StartHeatWave.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WeatherControl__StartHeatWave = {};
gdjs.evtsExt__WeatherControl__StartHeatWave.idToCallbackMap = new Map();


gdjs.evtsExt__WeatherControl__StartHeatWave.userFunc0x17b4a28 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
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
            vec2 i=floor(p);
            vec2 f=fract(p);

            float a=hash(i);
            float b=hash(i+vec2(1.0,0.0));
            float c=hash(i+vec2(0.0,1.0));
            float d=hash(i+vec2(1.0,1.0));

            vec2 u=f*f*(3.0-2.0*f);

            return mix(a,b,u.x)
                 + (c-a)*u.y*(1.0-u.x)
                 + (d-b)*u.x*u.y;
        }

        float fbm(vec2 p){
            float v=0.0;
            float a=0.5;

            for(int i=0;i<4;i++){
                v+=noise(p)*a;
                p*=2.0;
                a*=0.5;
            }

            return v;
        }

        void main(){

            vec2 uv=vTextureCoord;

            float worldX = uv.x + cameraOffsetX;
            float worldY = uv.y + cameraOffsetY;

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
        uTime: 0,
        strength: strength,
        scale: scale,
        waveStrength: waveStrength,
        cameraOffsetX: 0,
        cameraOffsetY: 0
    });

    currentContainer.filters = currentContainer.filters
        ? currentContainer.filters.concat(filter)
        : [filter];

    system = {
        filter,
        pixiContainer: currentContainer,
        baseCameraX: layer.getCameraX(),
        baseCameraY: layer.getCameraY()
    };
    runtimeScene.heatWaveSystems[layerName] = system;
}

// Force a FIXED render-texture region matching the actual game screen,
// instead of letting PIXI auto-compute the filter's bounds from the
// container's content -- content-based bounds can change size/shape as
// objects move, and PIXI reallocating its internal render texture when
// that happens causes exactly the kind of one-frame coordinate-mapping
// pop being seen here.
const pixiRenderer = runtimeScene.getGame().getRenderer().getPIXIRenderer();
if (pixiRenderer && pixiRenderer.screen) {
    system.pixiContainer.filterArea = pixiRenderer.screen;
}

const dt = runtimeScene.getTimeManager().getElapsedTime() / 1000;
const camWidth = layer.getCameraWidth();
const camHeight = layer.getCameraHeight();

const uTimeWrap = 1000.0;
system.uTimeRaw = (system.uTimeRaw || 0) + dt * speed;
system.filter.uniforms.uTime = system.uTimeRaw % uTimeWrap;

system.filter.uniforms.strength = strength;
system.filter.uniforms.scale = scale;
system.filter.uniforms.waveStrength = waveStrength;

const offsetWrap = 1000.0;

let rawOffsetX = (layer.getCameraX() - system.baseCameraX) / camWidth;
let wrappedX = rawOffsetX % offsetWrap;
if (wrappedX < 0) wrappedX += offsetWrap;

let rawOffsetY = (layer.getCameraY() - system.baseCameraY) / camHeight;
let wrappedY = rawOffsetY % offsetWrap;
if (wrappedY < 0) wrappedY += offsetWrap;

system.filter.uniforms.cameraOffsetX = wrappedX;
system.filter.uniforms.cameraOffsetY = wrappedY;
};
gdjs.evtsExt__WeatherControl__StartHeatWave.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__WeatherControl__StartHeatWave.userFunc0x17b4a28(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WeatherControl__StartHeatWave.func = function(runtimeScene, LayerName, Amplitude, PulseWidth, Spacing, PulseCount, Speed, parentEventsFunctionContext) {
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
if (argName === "Amplitude") return Amplitude;
if (argName === "PulseWidth") return PulseWidth;
if (argName === "Spacing") return Spacing;
if (argName === "PulseCount") return PulseCount;
if (argName === "Speed") return Speed;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WeatherControl__StartHeatWave.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WeatherControl__StartHeatWave.registeredGdjsCallbacks = [];