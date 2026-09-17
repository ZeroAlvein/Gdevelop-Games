
if (typeof gdjs.evtsExt__WeatherControl__NewheatWave !== "undefined") {
  gdjs.evtsExt__WeatherControl__NewheatWave.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WeatherControl__NewheatWave = {};
gdjs.evtsExt__WeatherControl__NewheatWave.idToCallbackMap = new Map();


gdjs.evtsExt__WeatherControl__NewheatWave.userFunc0x16b21c0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const layerName = eventsFunctionContext.getArgument("LayerName");
const bandWidthRaw = Number(eventsFunctionContext.getArgument("BandWidth")) || 100;
const magnificationRaw = Number(eventsFunctionContext.getArgument("Magnification")) || 150;
const speedRaw = Number(eventsFunctionContext.getArgument("Speed")) || 20;

// Friendly whole-number inputs, converted to the shader's working range.
const bandWidth = bandWidthRaw / 1000;       // e.g. 100 -> 0.1 (fraction of layer height)
const magnification = magnificationRaw / 100; // e.g. 150 -> 1.5x stretch at the band's center
const speed = speedRaw / 100;                 // e.g. 20 -> 0.2 loops per second

const game = runtimeScene.getGame();
if (!game.__magnifierWaves) game.__magnifierWaves = {};

let effect = game.__magnifierWaves[layerName];
const layer = runtimeScene.getLayer(layerName);
const pixiContainer = layer.getRenderer().getRendererObject();

// Rebuild if the container object changed (covers scene resets).
if (effect && effect.container !== pixiContainer) {
    effect = null;
}

// --- First call for this layer: build + attach the filter ---
if (!effect) {
    const fragmentShader = `
        precision mediump float;
        varying vec2 vTextureCoord;
        uniform sampler2D uSampler;

        uniform float uPhase;          // 0..1, position of the band, looping
        uniform float uBandWidth;      // thickness of the magnifying band
        uniform float uMagnification;  // stretch factor at the band's center
        uniform float uCameraOffset;   // small, pre-wrapped world compensation

        // Wrapped distance: shortest signed distance from y to center,
        // treating the 0..1 range as looping. Keeps the band seamless
        // when it wraps from top back to bottom.
        float wrapDelta(float y, float center) {
            float d = y - center;
            return mod(d + 0.5, 1.0) - 0.5;
        }

        void main(void) {
            vec2 uv = vTextureCoord;
            float worldY = uv.y + uCameraOffset;

            float delta = wrapDelta(worldY, uPhase);
            float absDelta = abs(delta);

            // 1.0 at the band's center, fading to 0.0 past its edge.
            float influence = 1.0 - smoothstep(0.0, uBandWidth, absDelta);

            // Blend between normal (1.0) and full magnification at the
            // band's center -- this is what stretches/enlarges content
            // as the band passes over it.
            float zoom = mix(1.0, uMagnification, influence);

            vec2 sampleUv = uv;
            sampleUv.y = worldY + delta / zoom - (worldY - uv.y);
            // Simplify back to screen-space by removing the worldY shift
            // we added only for the band-distance calculation:
            sampleUv.y = uv.y + (delta / zoom - delta);

            sampleUv.y = clamp(sampleUv.y, 0.0, 1.0);

            gl_FragColor = texture2D(uSampler, sampleUv);
        }
    `;

    const filter = new PIXI.Filter(undefined, fragmentShader, {
        uPhase: 0.0,
        uBandWidth: bandWidth,
        uMagnification: magnification,
        uCameraOffset: 0.0
    });

    pixiContainer.filters = pixiContainer.filters || [];
    pixiContainer.filters.push(filter);

    effect = {
        filter,
        container: pixiContainer,
        baseCameraY: layer.getCameraY()
    };
    game.__magnifierWaves[layerName] = effect;
}

// Re-attach defensively if the filter fell out of the array without the
// container itself changing (avoids losing baseCameraY unnecessarily).
if (pixiContainer.filters.indexOf(effect.filter) === -1) {
    pixiContainer.filters.push(effect.filter);
}

// --- Every call: advance the band position, update parameters ---
const dt = runtimeScene.getTimeManager().getElapsedTime() / 1000;

effect.filter.uniforms.uPhase = (effect.filter.uniforms.uPhase + dt * speed) % 1.0;
effect.filter.uniforms.uBandWidth = bandWidth;
effect.filter.uniforms.uMagnification = magnification;

// World-space anchoring: reduce the camera's offset down to a small,
// precise value in JS (full 64-bit float) BEFORE sending it to the
// shader (mediump, low precision) -- this is what avoids any snapping
// after walking far from the start position.
const camHeight = layer.getCameraHeight();
const rawOffset = (layer.getCameraY() - effect.baseCameraY) / camHeight;
let wrappedOffset = rawOffset % 1.0;
if (wrappedOffset < 0) wrappedOffset += 1.0;

effect.filter.uniforms.uCameraOffset = wrappedOffset;
};
gdjs.evtsExt__WeatherControl__NewheatWave.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__WeatherControl__NewheatWave.userFunc0x16b21c0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WeatherControl__NewheatWave.func = function(runtimeScene, LayerName, BandWidth, Magnification, Speed, parentEventsFunctionContext) {
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
if (argName === "BandWidth") return BandWidth;
if (argName === "Magnification") return Magnification;
if (argName === "Speed") return Speed;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WeatherControl__NewheatWave.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WeatherControl__NewheatWave.registeredGdjsCallbacks = [];