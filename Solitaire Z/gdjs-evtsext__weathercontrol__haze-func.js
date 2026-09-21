
if (typeof gdjs.evtsExt__WeatherControl__Haze !== "undefined") {
  gdjs.evtsExt__WeatherControl__Haze.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WeatherControl__Haze = {};
gdjs.evtsExt__WeatherControl__Haze.idToCallbackMap = new Map();


gdjs.evtsExt__WeatherControl__Haze.userFunc0x1704728 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const layerName = eventsFunctionContext.getArgument("LayerName") || "";

if (!runtimeScene.heatHazeSystems) runtimeScene.heatHazeSystems = {};

if (!runtimeScene.heatHazeSystems[layerName]) {
  const layer = runtimeScene.getLayer(layerName);
  const renderer = layer.getRenderer();
  const pixiContainer = renderer.getRendererObject();

  const gameWidth = runtimeScene.getGame().getGameResolutionWidth();

  // Shifts each pixel's sample X-position by a sine wave based on its
  // Y-position and the current time — the classic heat-shimmer technique.
  // NOTE: "intensity" here is already expressed in normalized UV units
  // (fraction of screen width), not raw pixels — that conversion happens
  // in JS below, so the shader itself never has to divide by anything.
  // (An earlier version divided by a "resolution" uniform inside the
  // shader; that uniform wasn't reliably reaching the shader in some
  // GDevelop/PixiJS builds, causing a divide-by-zero that broke the whole
  // render. Doing the conversion in JS avoids that entirely.)
  const fragmentShader = `
    precision mediump float;
    varying vec2 vTextureCoord;
    uniform sampler2D uSampler;
    uniform float time;
    uniform float intensity;
    uniform float frequency;   // how many tear-line cycles fit down the screen
    uniform float lineWidth;   // fraction (0-1) of each cycle that is "inside" the line
    uniform float bands;       // 0 = smooth line edge; >0 = quantize into this many strips

    void main(void) {
      vec2 uv = vTextureCoord;

      // When bands > 0, snap the Y coordinate to a coarse grid first, for
      // a pixelated/retro-TV edge on the tear line instead of a smooth one.
      float y = uv.y;
      if (bands > 0.0) {
        y = floor(uv.y * bands) / bands;
      }

      // Cyclic phase (0-1) that repeats 'frequency' times down the screen
      // and scrolls with time.
      float phase = fract(y * frequency + time);

      // Hard on/off threshold: pixels inside the thin "lineWidth" window
      // get a CONSTANT offset, everything else gets none. No gradient in
      // between — that's what makes this a sharp tear line rather than a
      // smooth bump (a smooth curve would fade in/out over several rows,
      // which reads as a soft "C" shape instead of a clean line).
      float inLine = step(phase, lineWidth);

      float wave = inLine * intensity;
      uv.x += wave;
      gl_FragColor = texture2D(uSampler, uv);
    }
  `;

  const filter = new PIXI.Filter(undefined, fragmentShader, {
    time: 0,
    intensity: 8 / gameWidth,
    frequency: 1,
    bands: 0,
    lineWidth: 0.03
  });

  // Append rather than overwrite, in case the layer already has other
  // effects applied via GDevelop's layer effects panel.
  pixiContainer.filters = pixiContainer.filters
    ? pixiContainer.filters.concat(filter)
    : [filter];

  runtimeScene.heatHazeSystems[layerName] = { filter, pixiContainer };
}
};
gdjs.evtsExt__WeatherControl__Haze.userFunc0x1708888 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const layerName = eventsFunctionContext.getArgument("LayerName") || "";
const intensityPx = Number(eventsFunctionContext.getArgument("Intensity")) || 8; // pixels
const frequency   = Number(eventsFunctionContext.getArgument("Frequency"))  || 1;
const speed       = Number(eventsFunctionContext.getArgument("Speed"))      || 1;
const stripHeight = Number(eventsFunctionContext.getArgument("StripHeight")) || 0; // pixels, 0 = smooth
const lineWidth   = Number(eventsFunctionContext.getArgument("LineWidth"))   || 0.03;

if (runtimeScene.heatHazeSystems && runtimeScene.heatHazeSystems[layerName]) {
  const system = runtimeScene.heatHazeSystems[layerName];

  // GDevelop's own layer renderer can reset .filters based on the layer's
  // configured Effects (from the editor's Effects panel), which would wipe
  // out a filter added purely through code. Re-attach it defensively every
  // frame so it survives regardless of when that reset happens.
  if (!system.pixiContainer.filters || !system.pixiContainer.filters.includes(system.filter)) {
    system.pixiContainer.filters = system.pixiContainer.filters
      ? system.pixiContainer.filters.concat(system.filter)
      : [system.filter];
  }

  // Use actual elapsed time rather than assuming a fixed frame rate,
  // so the animation speed stays consistent regardless of FPS. Speed can
  // be negative — that alone reverses which way the line scrolls, no
  // extra direction logic needed.
  const dt = runtimeScene.getTimeManager().getElapsedTime() / 1000; // seconds
  const gameWidth = runtimeScene.getGame().getGameResolutionWidth();
  const gameHeight = runtimeScene.getGame().getGameResolutionHeight();

  system.filter.uniforms.time += dt * speed;
  // Convert pixels -> normalized UV units here in JS (not in the shader).
  system.filter.uniforms.intensity = intensityPx / gameWidth;
  system.filter.uniforms.frequency = frequency;
  // Convert StripHeight (pixels) into a strip count for the shader.
  // 0 stays 0 (smooth); any positive value becomes a whole-number band count.
  system.filter.uniforms.bands = stripHeight > 0 ? Math.max(1, gameHeight / stripHeight) : 0;
  system.filter.uniforms.lineWidth = lineWidth;
}
};
gdjs.evtsExt__WeatherControl__Haze.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WeatherControl__Haze.userFunc0x1704728(runtimeScene, eventsFunctionContext);

}


{


gdjs.evtsExt__WeatherControl__Haze.userFunc0x1708888(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WeatherControl__Haze.func = function(runtimeScene, LayerName, Intensity, Frequency, Speed, StripHeight, LineSharpness, LineWidth, parentEventsFunctionContext) {
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
if (argName === "StripHeight") return StripHeight;
if (argName === "LineSharpness") return LineSharpness;
if (argName === "LineWidth") return LineWidth;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WeatherControl__Haze.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WeatherControl__Haze.registeredGdjsCallbacks = [];