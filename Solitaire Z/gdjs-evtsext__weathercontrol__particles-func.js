
if (typeof gdjs.evtsExt__WeatherControl__Particles !== "undefined") {
  gdjs.evtsExt__WeatherControl__Particles.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WeatherControl__Particles = {};
gdjs.evtsExt__WeatherControl__Particles.idToCallbackMap = new Map();


gdjs.evtsExt__WeatherControl__Particles.userFunc0x1831430 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const layerName = eventsFunctionContext.getArgument("LayerName") || "";

const destroyArg = eventsFunctionContext.getArgument("Destroy");
const destroy = destroyArg === true || destroyArg === "true" || destroyArg === "1" || destroyArg === 1;

if (destroy) {
  if (runtimeScene.particleSystems && runtimeScene.particleSystems[layerName]) {
    runtimeScene.particleSystems[layerName].container.destroy({ children: true });
    delete runtimeScene.particleSystems[layerName];
  }
  if (runtimeScene.particlePendingInit) delete runtimeScene.particlePendingInit[layerName];
  return;
}

// Number(x) || default silently replaces an explicit 0 with the default,
// since 0 is falsy in JS -- that was the bug behind Spin/Path not doing
// anything at 0. This only falls back when the argument is actually
// missing/blank, so a genuine 0 is respected.
function numArg(name, defaultVal) {
  const raw = eventsFunctionContext.getArgument(name);
  const n = Number(raw);
  return (raw === undefined || raw === null || raw === "" || Number.isNaN(n)) ? defaultVal : n;
}

const density = numArg("Density", 0);

// --- Scaling note ---------------------------------------------------------
// Size/SizeRange and Angle/AngleRange are plain units already (pixels and
// degrees), no division needed. Speed/SpeedRange and Spin/SpinRange get
// divided down so two-digit inputs land in the small fractional range
// actual movement needs.
const sizeRaw      = numArg("Size", 12);
const sizeRangeRaw = numArg("SizeRange", 6);
const size      = sizeRaw;
const sizeRange = sizeRangeRaw;

const speedRaw      = numArg("Speed", 15);
const speedRangeRaw = numArg("SpeedRange", 10);
const speed      = speedRaw / 10;
const speedRange = speedRangeRaw / 10;

// Angle: 0 = right, 90 = down (matches the requested convention). Each
// flake picks its own general heading somewhere within Angle +/- half of
// AngleRange, then wanders around that heading as it travels -- see
// WANDER_HALF_WOBBLE below for the "like snow, not a straight line" part.
const angleRaw      = numArg("Angle", 90);
const angleRangeRaw = numArg("AngleRange", 40);
const angleRad      = angleRaw * Math.PI / 180;
const angleRangeRad = angleRangeRaw * Math.PI / 180;

const spinRaw      = numArg("Spin", 20);
const spinRangeRaw = numArg("SpinRange", 15);
const spin      = spinRaw / 1000;
const spinRange = spinRangeRaw / 1000;

// Path is how far off its own base heading a particle can wander as it
// travels -- 0 means it flies in a perfectly straight line; higher values
// mean it weaves more, like the wind gusting. PathRange lets some
// particles wander more than others, same pattern as Speed/SpeedRange.
// Degrees, same convention as Angle/AngleRange -- no division needed.
const pathRaw      = numArg("Path", 30);
const pathRangeRaw = numArg("PathRange", 0);

const instantSpawnArg = eventsFunctionContext.getArgument("InstantSpawn");
const instantSpawn = instantSpawnArg === true || instantSpawnArg === "true" || instantSpawnArg === "1" || instantSpawnArg === 1;

const opacity = Number(eventsFunctionContext.getArgument("Opacity"));

const colorArg = eventsFunctionContext.getArgument("Color") || "45;40;38";

// Which named shape pool to draw from. See PARTICLE_SHAPE_LIBRARY below for
// the full list of valid values.
const shapeArg = eventsFunctionContext.getArgument("Shape") || "Ash 1";

if (!runtimeScene.particleSystems) runtimeScene.particleSystems = {};
if (!runtimeScene.particlePendingInit) runtimeScene.particlePendingInit = {};
if (!runtimeScene.particleTextureCache) runtimeScene.particleTextureCache = {};

// Every shape is a list of [angle, radiusFactor] pairs describing a polygon
// radiating from its own center -- the same format for both the hardcoded
// traced shapes below and "Ash 1"'s procedurally-generated blobs. Built
// once and shared across every particle system on the scene, regardless of
// layer, since the shapes themselves don't depend on this action's params.
if (!runtimeScene.particleShapeLibrary) {
  const library = {};

  // "Ash 1": irregular jagged blobs, randomly generated once (kept from
  // the original ash-only version of this effect).
  const ash1 = [];
  for (let s = 0; s < 8; s++) {
    const vertexCount = 5 + Math.floor(Math.random() * 5); // 5..9 vertices
    const vertices = [];
    for (let v = 0; v < vertexCount; v++) {
      const baseAngle = (v / vertexCount) * Math.PI * 2;
      const angleJitter = (Math.random() - 0.5) * (Math.PI * 2 / vertexCount) * 0.6;
      const radiusFactor = 0.55 + Math.random() * 0.45;
      vertices.push([baseAngle + angleJitter, radiusFactor]);
    }
    ash1.push(vertices);
  }
  library["Ash 1"] = ash1;

  // Everything else: traced from reference images, angle-sampled around
  // each shape's own centroid.
  library["Ash 2"] = [
    [[0.0,0.882],[0.196,1.0],[0.393,0.941],[0.589,0.941],[0.785,0.941],[0.982,0.941],[1.178,0.882],[1.374,0.941],[1.571,0.941],[1.767,0.824],[1.964,0.882],[2.16,0.824],[2.356,1.0],[2.553,1.0],[2.749,1.0],[2.945,0.941],[3.142,0.941],[3.338,0.824],[3.534,0.882],[3.731,0.882],[3.927,0.824],[4.123,0.882],[4.32,0.941],[4.516,0.882],[4.712,1.0],[4.909,1.0],[5.105,0.941],[5.301,0.941],[5.498,0.941],[5.694,0.765],[5.891,0.824],[6.087,0.882]],
    [[0.0,0.773],[0.196,0.773],[0.393,0.727],[0.589,0.727],[0.785,0.727],[0.982,0.727],[1.178,0.773],[1.374,0.818],[1.571,0.773],[1.767,0.818],[1.964,0.864],[2.16,0.818],[2.356,0.864],[2.553,0.864],[2.749,0.773],[2.945,0.727],[3.142,0.727],[3.338,0.727],[3.534,0.682],[3.731,0.682],[3.927,0.636],[4.123,0.682],[4.32,0.727],[4.516,0.909],[4.712,1.0],[4.909,0.909],[5.105,0.864],[5.301,0.727],[5.498,0.773],[5.694,0.727],[5.891,0.682],[6.087,0.773]],
    [[0.0,0.812],[0.196,0.812],[0.393,0.875],[0.589,0.812],[0.785,0.938],[0.982,0.938],[1.178,0.875],[1.374,0.812],[1.571,0.812],[1.767,0.938],[1.964,1.0],[2.16,0.938],[2.356,0.938],[2.553,0.75],[2.749,0.812],[2.945,0.875],[3.142,0.875],[3.338,0.875],[3.534,0.812],[3.731,0.75],[3.927,0.75],[4.123,0.812],[4.32,0.875],[4.516,0.938],[4.712,0.875],[4.909,0.938],[5.105,0.875],[5.301,0.812],[5.498,0.938],[5.694,1.0],[5.891,0.875],[6.087,0.812]],
    [[0.0,1.0],[0.196,1.0],[0.393,0.875],[0.589,0.812],[0.785,0.812],[0.982,0.875],[1.178,0.875],[1.374,0.812],[1.571,0.812],[1.767,0.812],[1.964,0.875],[2.16,0.875],[2.356,1.0],[2.553,0.812],[2.749,0.875],[2.945,0.938],[3.142,0.938],[3.338,0.938],[3.534,0.875],[3.731,0.938],[3.927,0.812],[4.123,0.875],[4.32,0.938],[4.516,0.875],[4.712,0.875],[4.909,0.812],[5.105,0.812],[5.301,0.75],[5.498,0.875],[5.694,0.938],[5.891,0.938],[6.087,1.0]],
    [[0.0,0.533],[0.196,0.533],[0.393,0.6],[0.589,1.0],[0.785,1.0],[0.982,0.8],[1.178,0.733],[1.374,0.867],[1.571,0.8],[1.767,0.867],[1.964,0.867],[2.16,0.867],[2.356,0.867],[2.553,0.8],[2.749,0.8],[2.945,0.867],[3.142,0.867],[3.338,0.733],[3.534,0.667],[3.731,0.733],[3.927,0.667],[4.123,0.867],[4.32,0.8],[4.516,0.867],[4.712,0.867],[4.909,0.867],[5.105,0.933],[5.301,0.867],[5.498,1.0],[5.694,1.0],[5.891,0.733],[6.087,0.533]],
    [[0.0,0.762],[0.196,0.905],[0.393,0.952],[0.589,0.857],[0.785,0.857],[0.982,0.809],[1.178,0.714],[1.374,0.667],[1.571,0.667],[1.767,0.571],[1.964,0.619],[2.16,0.571],[2.356,0.619],[2.553,0.619],[2.749,0.762],[2.945,0.905],[3.142,1.0],[3.338,0.905],[3.534,0.857],[3.731,0.809],[3.927,0.714],[4.123,0.762],[4.32,0.809],[4.516,0.762],[4.712,0.619],[4.909,0.667],[5.105,0.571],[5.301,0.571],[5.498,0.619],[5.694,0.714],[5.891,0.714],[6.087,0.809]],
    [[0.0,0.278],[0.196,0.556],[0.393,0.556],[0.589,0.778],[0.785,0.889],[0.982,0.889],[1.178,0.667],[1.374,0.611],[1.571,0.611],[1.767,0.5],[1.964,0.278],[2.16,0.333],[2.356,0.278],[2.553,0.278],[2.749,0.333],[2.945,0.333],[3.142,0.333],[3.338,0.444],[3.534,0.444],[3.731,0.667],[3.927,0.778],[4.123,1.0],[4.32,1.0],[4.516,0.444],[4.712,0.333],[4.909,0.333],[5.105,0.222],[5.301,0.167],[5.498,0.167],[5.694,0.222],[5.891,0.222],[6.087,0.167]],
    [[0.0,0.429],[0.196,0.429],[0.393,0.381],[0.589,0.429],[0.785,0.476],[0.982,0.524],[1.178,0.667],[1.374,0.714],[1.571,0.809],[1.767,0.905],[1.964,0.952],[2.16,0.762],[2.356,0.667],[2.553,0.571],[2.749,0.524],[2.945,0.476],[3.142,0.476],[3.338,0.381],[3.534,0.381],[3.731,0.429],[3.927,0.429],[4.123,0.524],[4.32,0.524],[4.516,0.762],[4.712,0.857],[4.909,1.0],[5.105,0.857],[5.301,0.619],[5.498,0.619],[5.694,0.524],[5.891,0.571],[6.087,0.524]]
  ];
  library["Leaf 1"] = [
    [[0.0,0.44],[0.224,0.5],[0.449,0.54],[0.673,0.58],[0.898,0.64],[1.122,0.74],[1.346,0.72],[1.571,0.5],[1.795,0.72],[2.02,0.74],[2.244,0.64],[2.468,0.58],[2.693,0.54],[2.917,0.5],[3.142,0.44],[3.366,0.46],[3.59,0.46],[3.815,0.48],[4.039,0.54],[4.264,0.58],[4.488,0.7],[4.712,1.0],[4.937,0.7],[5.161,0.58],[5.386,0.54],[5.61,0.48],[5.834,0.46],[6.059,0.46]],
    [[0.0,0.744],[0.224,0.767],[0.449,0.814],[0.673,0.837],[0.898,0.861],[1.122,0.907],[1.346,0.674],[1.571,0.954],[1.795,0.837],[2.02,0.791],[2.244,0.744],[2.468,0.744],[2.693,0.744],[2.917,0.744],[3.142,0.721],[3.366,0.698],[3.59,0.698],[3.815,0.744],[4.039,0.791],[4.264,0.93],[4.488,1.0],[4.712,0.93],[4.937,0.767],[5.161,0.721],[5.386,0.674],[5.61,0.651],[5.834,0.674],[6.059,0.721]],
    [[0.0,0.275],[0.224,0.325],[0.449,0.35],[0.673,0.55],[0.898,0.6],[1.122,0.75],[1.346,0.775],[1.571,0.75],[1.795,0.6],[2.02,0.5],[2.244,0.425],[2.468,0.325],[2.693,0.275],[2.917,0.275],[3.142,0.2],[3.366,0.2],[3.59,0.225],[3.815,0.275],[4.039,0.425],[4.264,0.725],[4.488,1.0],[4.712,0.625],[4.937,0.5],[5.161,0.4],[5.386,0.3],[5.61,0.275],[5.834,0.25],[6.059,0.275]],
    [[0.0,0.4],[0.224,0.4],[0.449,0.5],[0.673,0.575],[0.898,0.65],[1.122,0.7],[1.346,0.8],[1.571,0.825],[1.795,0.8],[2.02,0.7],[2.244,0.625],[2.468,0.55],[2.693,0.475],[2.917,0.4],[3.142,0.375],[3.366,0.4],[3.59,0.375],[3.815,0.425],[4.039,0.525],[4.264,0.625],[4.488,0.775],[4.712,1.0],[4.937,0.7],[5.161,0.55],[5.386,0.475],[5.61,0.375],[5.834,0.375],[6.059,0.35]],
    [[0.0,0.436],[0.224,0.564],[0.449,0.718],[0.673,0.821],[0.898,0.846],[1.122,0.795],[1.346,0.744],[1.571,0.667],[1.795,0.615],[2.02,0.615],[2.244,0.641],[2.468,0.59],[2.693,0.615],[2.917,0.615],[3.142,0.615],[3.366,0.564],[3.59,0.513],[3.815,0.538],[4.039,0.564],[4.264,0.718],[4.488,0.872],[4.712,1.0],[4.937,0.821],[5.161,0.436],[5.386,0.385],[5.61,0.308],[5.834,0.333],[6.059,0.41]]
  ];
  library["Leaf 2"] = [
    [[0.0,0.524],[0.224,0.571],[0.449,0.587],[0.673,0.635],[0.898,0.651],[1.122,0.698],[1.346,0.778],[1.571,0.984],[1.795,0.714],[2.02,0.667],[2.244,0.603],[2.468,0.571],[2.693,0.571],[2.917,0.556],[3.142,0.508],[3.366,0.524],[3.59,0.524],[3.815,0.524],[4.039,0.571],[4.264,0.667],[4.488,0.825],[4.712,1.0],[4.937,0.73],[5.161,0.587],[5.386,0.508],[5.61,0.492],[5.834,0.476],[6.059,0.508]],
    [[0.0,0.508],[0.224,0.593],[0.449,0.627],[0.673,0.695],[0.898,0.695],[1.122,0.797],[1.346,0.864],[1.571,0.78],[1.795,0.695],[2.02,0.644],[2.244,0.576],[2.468,0.559],[2.693,0.559],[2.917,0.542],[3.142,0.559],[3.366,0.576],[3.59,0.559],[3.815,0.559],[4.039,0.593],[4.264,0.695],[4.488,0.915],[4.712,1.0],[4.937,0.712],[5.161,0.542],[5.386,0.491],[5.61,0.475],[5.834,0.441],[6.059,0.475]],
    [[0.0,0.455],[0.224,0.455],[0.449,0.491],[0.673,0.527],[0.898,0.6],[1.122,0.709],[1.346,0.855],[1.571,0.982],[1.795,0.818],[2.02,0.691],[2.244,0.6],[2.468,0.527],[2.693,0.491],[2.917,0.455],[3.142,0.436],[3.366,0.455],[3.59,0.491],[3.815,0.527],[4.039,0.6],[4.264,0.691],[4.488,0.855],[4.712,1.0],[4.937,0.855],[5.161,0.709],[5.386,0.6],[5.61,0.527],[5.834,0.491],[6.059,0.455]],
    [[0.0,0.386],[0.224,0.386],[0.449,0.477],[0.673,0.5],[0.898,0.614],[1.122,0.682],[1.346,0.75],[1.571,0.841],[1.795,0.909],[2.02,0.727],[2.244,0.591],[2.468,0.523],[2.693,0.455],[2.917,0.364],[3.142,0.364],[3.366,0.364],[3.59,0.409],[3.815,0.409],[4.039,0.523],[4.264,0.568],[4.488,0.705],[4.712,1.0],[4.937,0.955],[5.161,0.591],[5.386,0.409],[5.61,0.386],[5.834,0.318],[6.059,0.341]],
    [[0.0,0.491],[0.224,0.509],[0.449,0.509],[0.673,0.582],[0.898,0.6],[1.122,0.636],[1.346,0.764],[1.571,0.836],[1.795,0.891],[2.02,0.764],[2.244,0.691],[2.468,0.6],[2.693,0.564],[2.917,0.527],[3.142,0.473],[3.366,0.455],[3.59,0.436],[3.815,0.473],[4.039,0.509],[4.264,0.6],[4.488,0.818],[4.712,1.0],[4.937,0.855],[5.161,0.727],[5.386,0.618],[5.61,0.582],[5.834,0.545],[6.059,0.509]]
  ];
  library["Leaf 3"] = [
    [[0.0,0.882],[0.174,1.0],[0.349,0.735],[0.524,0.5],[0.698,0.382],[0.873,0.324],[1.047,0.706],[1.222,1.0],[1.396,0.912],[1.571,0.706],[1.745,0.647],[1.92,0.588],[2.094,0.824],[2.269,0.794],[2.443,0.765],[2.618,0.735],[2.792,0.676],[2.967,0.794],[3.142,0.794],[3.316,0.765],[3.491,0.618],[3.665,0.588],[3.84,0.676],[4.014,0.735],[4.189,0.794],[4.363,0.912],[4.538,0.676],[4.712,0.735],[4.887,0.794],[5.061,0.824],[5.236,0.912],[5.41,0.5],[5.585,0.5],[5.76,0.529],[5.934,0.618],[6.109,0.765]],
    [[0.0,0.75],[0.174,0.659],[0.349,0.614],[0.524,0.545],[0.698,0.886],[0.873,0.795],[1.047,0.773],[1.222,0.795],[1.396,0.705],[1.571,0.614],[1.745,0.568],[1.92,0.795],[2.094,0.659],[2.269,0.614],[2.443,0.727],[2.618,0.773],[2.792,0.818],[2.967,0.841],[3.142,0.636],[3.316,0.705],[3.491,0.773],[3.665,0.841],[3.84,1.0],[4.014,0.614],[4.189,0.545],[4.363,0.591],[4.538,0.705],[4.712,0.818],[4.887,0.977],[5.061,0.795],[5.236,0.591],[5.41,0.455],[5.585,0.364],[5.76,0.568],[5.934,0.841],[6.109,0.864]],
    [[0.0,0.625],[0.174,0.542],[0.349,0.479],[0.524,0.667],[0.698,0.5],[0.873,0.583],[1.047,0.667],[1.222,0.75],[1.396,0.875],[1.571,0.604],[1.745,0.667],[1.92,0.75],[2.094,0.812],[2.269,0.917],[2.443,0.917],[2.618,0.521],[2.792,0.354],[2.967,0.458],[3.142,0.479],[3.316,0.583],[3.491,0.688],[3.665,0.833],[3.84,0.708],[4.014,0.583],[4.189,0.521],[4.363,0.479],[4.538,0.417],[4.712,1.0],[4.887,0.875],[5.061,0.792],[5.236,0.708],[5.41,0.646],[5.585,0.604],[5.76,0.854],[5.934,0.75],[6.109,0.667]],
    [[0.0,0.672],[0.174,0.845],[0.349,0.759],[0.524,0.81],[0.698,0.776],[0.873,0.655],[1.047,0.534],[1.222,0.655],[1.396,0.741],[1.571,0.569],[1.745,0.638],[1.92,0.776],[2.094,0.707],[2.269,0.655],[2.443,0.724],[2.618,0.81],[2.792,0.931],[2.967,0.603],[3.142,0.69],[3.316,0.776],[3.491,1.0],[3.665,0.638],[3.84,0.328],[4.014,0.5],[4.189,0.638],[4.363,0.741],[4.538,0.914],[4.712,0.759],[4.887,0.638],[5.061,0.552],[5.236,0.448],[5.41,0.603],[5.585,0.776],[5.76,0.776],[5.934,0.741],[6.109,0.707]],
    [[0.0,0.93],[0.174,0.702],[0.349,0.614],[0.524,0.965],[0.698,0.807],[0.873,0.912],[1.047,0.789],[1.222,0.737],[1.396,0.667],[1.571,0.719],[1.745,0.667],[1.92,0.737],[2.094,0.789],[2.269,1.0],[2.443,0.632],[2.618,0.684],[2.792,0.825],[2.967,0.702],[3.142,0.807],[3.316,0.93],[3.491,0.895],[3.665,0.93],[3.84,0.702],[4.014,0.439],[4.189,0.772],[4.363,0.86],[4.538,0.825],[4.712,0.947],[4.887,0.772],[5.061,0.789],[5.236,0.684],[5.41,0.421],[5.585,0.351],[5.76,0.772],[5.934,0.965],[6.109,0.877]],
    [[0.0,0.818],[0.174,0.764],[0.349,0.727],[0.524,0.691],[0.698,0.618],[0.873,0.564],[1.047,1.0],[1.222,0.927],[1.396,0.873],[1.571,0.746],[1.745,0.618],[1.92,0.873],[2.094,0.618],[2.269,0.836],[2.443,0.782],[2.618,0.927],[2.792,0.618],[2.967,0.673],[3.142,0.727],[3.316,0.891],[3.491,0.855],[3.665,0.927],[3.84,0.673],[4.014,0.564],[4.189,0.746],[4.363,0.691],[4.538,0.873],[4.712,0.909],[4.887,0.982],[5.061,0.709],[5.236,0.746],[5.41,0.6],[5.585,0.4],[5.76,0.691],[5.934,0.836],[6.109,0.8]]
  ];
  library["Snow"] = [
    [[0.0,0.3],[0.131,0.26],[0.262,0.82],[0.393,0.68],[0.524,0.74],[0.654,0.78],[0.785,0.86],[0.916,0.5],[1.047,0.42],[1.178,0.36],[1.309,0.92],[1.44,0.72],[1.571,0.96],[1.702,0.76],[1.833,0.92],[1.964,0.36],[2.094,0.42],[2.225,0.46],[2.356,0.4],[2.487,0.8],[2.618,0.9],[2.749,0.7],[2.88,0.82],[3.011,0.28],[3.142,0.32],[3.272,0.36],[3.403,0.86],[3.534,0.78],[3.665,1.0],[3.796,0.8],[3.927,0.94],[4.058,0.28],[4.189,0.26],[4.32,0.32],[4.451,0.92],[4.582,0.78],[4.712,0.98],[4.843,0.78],[4.974,0.92],[5.105,0.28],[5.236,0.3],[5.367,0.28],[5.498,0.94],[5.629,0.78],[5.76,1.0],[5.891,0.76],[6.021,0.9],[6.152,0.34]],
    [[0.0,0.24],[0.131,0.68],[0.262,0.88],[0.393,0.78],[0.524,0.98],[0.654,0.72],[0.785,0.86],[0.916,0.68],[1.047,0.26],[1.178,0.64],[1.309,0.9],[1.44,0.78],[1.571,0.98],[1.702,0.74],[1.833,0.86],[1.964,0.68],[2.094,0.28],[2.225,0.68],[2.356,0.88],[2.487,0.74],[2.618,1.0],[2.749,0.76],[2.88,0.88],[3.011,0.66],[3.142,0.26],[3.272,0.66],[3.403,0.88],[3.534,0.74],[3.665,0.94],[3.796,0.74],[3.927,0.88],[4.058,0.7],[4.189,0.28],[4.32,0.68],[4.451,0.86],[4.582,0.76],[4.712,0.96],[4.843,0.76],[4.974,0.92],[5.105,0.64],[5.236,0.28],[5.367,0.66],[5.498,0.86],[5.629,0.76],[5.76,0.98],[5.891,0.74],[6.021,0.88],[6.152,0.28]],
    [[0.0,0.673],[0.131,0.558],[0.262,0.827],[0.393,0.731],[0.524,1.0],[0.654,0.712],[0.785,0.846],[0.916,0.558],[1.047,0.673],[1.178,0.538],[1.309,0.808],[1.44,0.692],[1.571,0.923],[1.702,0.692],[1.833,0.846],[1.964,0.904],[2.094,0.673],[2.225,0.923],[2.356,0.808],[2.487,0.731],[2.618,0.981],[2.749,0.731],[2.88,0.827],[3.011,0.577],[3.142,0.692],[3.272,0.538],[3.403,0.827],[3.534,0.712],[3.665,0.981],[3.796,0.673],[3.927,0.808],[4.058,0.904],[4.189,0.692],[4.32,0.904],[4.451,0.846],[4.582,0.712],[4.712,0.981],[4.843,0.673],[4.974,0.808],[5.105,0.558],[5.236,0.673],[5.367,0.942],[5.498,0.846],[5.629,0.712],[5.76,1.0],[5.891,0.692],[6.021,0.827],[6.152,0.558]],
    [[0.0,0.077],[0.131,0.692],[0.262,0.846],[0.393,0.75],[0.524,0.981],[0.654,0.731],[0.785,0.827],[0.916,0.692],[1.047,0.058],[1.178,0.673],[1.309,0.577],[1.44,0.75],[1.571,0.923],[1.702,0.712],[1.833,0.846],[1.964,0.673],[2.094,0.058],[2.225,0.692],[2.356,0.827],[2.487,0.75],[2.618,1.0],[2.749,0.75],[2.88,0.865],[3.011,0.712],[3.142,0.058],[3.272,0.712],[3.403,0.865],[3.534,0.75],[3.665,1.0],[3.796,0.75],[3.927,0.827],[4.058,0.692],[4.189,0.058],[4.32,0.673],[4.451,0.846],[4.582,0.712],[4.712,0.981],[4.843,0.75],[4.974,0.577],[5.105,0.673],[5.236,0.058],[5.367,0.692],[5.498,0.827],[5.629,0.731],[5.76,0.981],[5.891,0.75],[6.021,0.846],[6.152,0.692]],
    [[0.0,0.44],[0.131,0.64],[0.262,0.86],[0.393,0.72],[0.524,1.0],[0.654,0.74],[0.785,0.9],[0.916,0.62],[1.047,0.44],[1.178,0.94],[1.309,0.84],[1.44,0.74],[1.571,0.98],[1.702,0.74],[1.833,0.84],[1.964,0.62],[2.094,0.44],[2.225,0.62],[2.356,0.9],[2.487,0.74],[2.618,1.0],[2.749,0.72],[2.88,0.86],[3.011,0.64],[3.142,0.42],[3.272,0.64],[3.403,0.86],[3.534,0.76],[3.665,1.0],[3.796,0.74],[3.927,0.9],[4.058,0.62],[4.189,0.42],[4.32,0.62],[4.451,0.88],[4.582,0.74],[4.712,0.96],[4.843,0.74],[4.974,0.88],[5.105,0.94],[5.236,0.42],[5.367,0.62],[5.498,0.9],[5.629,0.74],[5.76,1.0],[5.891,0.76],[6.021,0.86],[6.152,0.64]],
    [[0.0,0.08],[0.131,0.68],[0.262,0.82],[0.393,0.7],[0.524,0.98],[0.654,0.7],[0.785,0.8],[0.916,0.66],[1.047,0.06],[1.178,0.66],[1.309,0.8],[1.44,0.74],[1.571,0.98],[1.702,0.7],[1.833,0.8],[1.964,0.66],[2.094,0.06],[2.225,0.68],[2.356,0.82],[2.487,0.74],[2.618,1.0],[2.749,0.72],[2.88,0.8],[3.011,0.7],[3.142,0.06],[3.272,0.66],[3.403,0.82],[3.534,0.72],[3.665,0.98],[3.796,0.74],[3.927,0.8],[4.058,0.66],[4.189,0.06],[4.32,0.66],[4.451,0.84],[4.582,0.7],[4.712,0.96],[4.843,0.74],[4.974,0.8],[5.105,0.66],[5.236,0.06],[5.367,0.66],[5.498,0.8],[5.629,0.7],[5.76,0.98],[5.891,0.7],[6.021,0.82],[6.152,0.68]],
    [[0.0,0.471],[0.131,0.686],[0.262,0.941],[0.393,0.765],[0.524,0.98],[0.654,0.804],[0.785,0.902],[0.916,0.412],[1.047,0.471],[1.178,0.647],[1.309,0.902],[1.44,0.765],[1.571,1.0],[1.702,0.765],[1.833,0.902],[1.964,0.667],[2.094,0.471],[2.225,0.412],[2.356,0.902],[2.487,0.765],[2.618,0.98],[2.749,0.765],[2.88,0.902],[3.011,0.686],[3.142,0.49],[3.272,0.412],[3.403,0.941],[3.534,0.745],[3.665,1.0],[3.796,0.804],[3.927,0.961],[4.058,0.706],[4.189,0.51],[4.32,0.667],[4.451,0.941],[4.582,0.804],[4.712,0.941],[4.843,0.804],[4.974,0.941],[5.105,0.392],[5.236,0.49],[5.367,0.706],[5.498,0.961],[5.629,0.804],[5.76,1.0],[5.891,0.745],[6.021,0.941],[6.152,0.412]]
  ];
  library["Sphere"] = [
    [[0.0,0.958],[0.262,0.958],[0.524,0.958],[0.785,0.917],[1.047,0.958],[1.309,0.958],[1.571,0.958],[1.833,0.958],[2.094,0.958],[2.356,0.917],[2.618,0.958],[2.88,0.958],[3.142,1.0],[3.403,0.958],[3.665,0.958],[3.927,0.917],[4.189,0.958],[4.451,0.958],[4.712,1.0],[4.974,0.958],[5.236,0.958],[5.498,0.917],[5.76,0.958],[6.021,0.958]]
  ];
  library["Triangle"] = [
    [[0.0,0.553],[0.175,0.605],[0.349,0.684],[0.524,0.868],[0.698,0.816],[0.873,0.684],[1.047,0.605],[1.222,0.553],[1.396,0.526],[1.571,0.5],[1.745,0.526],[1.92,0.553],[2.094,0.605],[2.269,0.684],[2.443,0.816],[2.618,0.868],[2.793,0.684],[2.967,0.605],[3.142,0.553],[3.316,0.5],[3.491,0.474],[3.665,0.447],[3.84,0.474],[4.014,0.526],[4.189,0.553],[4.363,0.658],[4.538,0.737],[4.712,1.0],[4.887,0.737],[5.061,0.658],[5.236,0.579],[5.411,0.526],[5.585,0.474],[5.76,0.447],[5.934,0.474],[6.109,0.5]]
  ];
  library["Square"] = [
    [[0.0,0.742],[0.174,0.774],[0.349,0.806],[0.524,0.871],[0.698,1.0],[0.873,1.0],[1.047,0.871],[1.222,0.806],[1.396,0.774],[1.571,0.742],[1.745,0.774],[1.92,0.806],[2.094,0.871],[2.269,1.0],[2.443,1.0],[2.618,0.871],[2.792,0.806],[2.967,0.774],[3.142,0.774],[3.316,0.774],[3.491,0.806],[3.665,0.871],[3.84,1.0],[4.014,1.0],[4.189,0.871],[4.363,0.806],[4.538,0.774],[4.712,0.774],[4.887,0.774],[5.061,0.806],[5.236,0.871],[5.41,1.0],[5.585,1.0],[5.76,0.871],[5.934,0.806],[6.109,0.774]]
  ];
  library["Star"] = [
    [[4.7124,1.0],[5.3407,0.382],[5.969,1.0],[0.3142,0.382],[0.9425,1.0],[1.5708,0.382],[2.1991,1.0],[2.8274,0.382],[3.4558,1.0],[4.0841,0.382]]
  ];
  library["Heart"] = [
    [[0.0,0.931],[0.196,0.828],[0.393,0.759],[0.589,0.724],[0.785,0.69],[0.982,0.724],[1.178,0.759],[1.374,0.862],[1.571,0.966],[1.767,0.862],[1.964,0.759],[2.16,0.724],[2.356,0.69],[2.553,0.724],[2.749,0.759],[2.945,0.828],[3.142,0.966],[3.338,0.966],[3.534,1.0],[3.731,0.966],[3.927,0.931],[4.123,0.793],[4.32,0.724],[4.516,0.517],[4.712,0.448],[4.909,0.517],[5.105,0.724],[5.301,0.793],[5.498,0.931],[5.694,0.966],[5.891,1.0],[6.087,0.966]]
  ];

  runtimeScene.particleShapeLibrary = library;
}

const shapePool = runtimeScene.particleShapeLibrary[shapeArg] || runtimeScene.particleShapeLibrary["Ash 1"];

function buildParticleTexture(shape, radius, colorRgb) {
  const pad = Math.ceil(radius * 0.15) + 3;
  const canvasSize = Math.max(8, Math.ceil(radius * 2 + pad * 2));
  const canvas = document.createElement("canvas");
  canvas.width = canvasSize;
  canvas.height = canvasSize;
  const ctx = canvas.getContext("2d");
  const cx = canvasSize / 2;
  const cy = canvasSize / 2;

  ctx.beginPath();
  shape.forEach((v, i) => {
    const r = radius * v[1];
    const x = cx + Math.cos(v[0]) * r;
    const y = cy + Math.sin(v[0]) * r;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = `rgba(${colorRgb[0]},${colorRgb[1]},${colorRgb[2]},0.92)`;
  ctx.fill();

  return PIXI.Texture.from(canvas);
}

function getParticleTexture(shapeIndex, radiusKey) {
  const key = shapeArg + "_" + shapeIndex + "_" + radiusKey + "_" + colorArg;
  const cache = runtimeScene.particleTextureCache;
  if (!cache[key]) {
    const colorRgb = colorArg.split(";").map(Number);
    cache[key] = buildParticleTexture(shapePool[shapeIndex], radiusKey, colorRgb);
  }
  return cache[key];
}

const layer = runtimeScene.getLayer(layerName);

if (runtimeScene.particlePendingInit[layerName] === undefined) {
  runtimeScene.particlePendingInit[layerName] = 2;
}

if (!runtimeScene.particleSystems[layerName]) {
  if (runtimeScene.particlePendingInit[layerName] > 0) {
    runtimeScene.particlePendingInit[layerName]--;
    return;
  }

  const renderer = layer.getRenderer();
  const pixiContainer = renderer.getRendererObject();
  const container = new PIXI.Container();
  pixiContainer.addChild(container);
  runtimeScene.particleSystems[layerName] = { container, flakes: [], filled: false, spawnQueue: [], spawnClock: 0 };
}

const system = runtimeScene.particleSystems[layerName];
if (!system.spawnQueue) system.spawnQueue = [];
if (system.spawnClock === undefined) system.spawnClock = 0;

const camX = layer.getCameraX();
const camY = layer.getCameraY();
const camWidth = layer.getCameraWidth();
const camHeight = layer.getCameraHeight();
const halfW = camWidth / 2;
const halfH = camHeight / 2;

const dt = runtimeScene.getTimeManager().getElapsedTime() / 1000;

const camRadius = Math.sqrt(halfW * halfW + halfH * halfH); // camera's bounding-circle radius, from its center
const SPAWN_MARGIN = 50;    // particles are born just outside the camera's bounding circle
const RECYCLE_MARGIN = 250; // and culled only once well past it -- kept much larger than SPAWN_MARGIN so a freshly-spawned particle always has room to travel through view before it's ever eligible for recycling

// Same steer-toward-a-periodically-changing-target technique as the
// fireflies for how a particle's heading drifts around its base heading --
// the actual wobble amount comes from Path/PathRange per flake.
const HEADING_CHANGE_MIN = 1.0;     // seconds
const HEADING_CHANGE_MAX = 2.5;
const STEER_RATE = 1.6;             // radians/sec

// When InstantSpawn is off, the initial fill trickles in from the upwind
// edge one at a time instead of the whole batch launching together.
const INITIAL_SPAWN_SPREAD = 6.0;   // seconds

const targetCount = Math.max(0, Math.round(density));

const windDirX = Math.cos(angleRad);
const windDirY = Math.sin(angleRad);
const perpX = -windDirY;
const perpY = windDirX;

function upwindSpawnPoint() {
  const spawnDistance = camRadius + SPAWN_MARGIN;
  const lateralSpread = (Math.random() - 0.5) * camRadius * 2.4;
  return {
    x: camX - windDirX * spawnDistance + perpX * lateralSpread,
    y: camY - windDirY * spawnDistance + perpY * lateralSpread,
  };
}

// Creates one particle. mode is:
//  - "instant" InstantSpawn's initial fill: scattered anywhere across the
//              whole camera area right now, at full size.
//  - "edge"    every other case (staggered initial fill, ongoing
//              replenishment): born upwind and carried in by the wind.
function createFlake(mode) {
  let spawnX;
  let spawnY;
  if (mode === "instant") {
    spawnX = camX - halfW + Math.random() * camWidth;
    spawnY = camY - halfH + Math.random() * camHeight;
  } else {
    const p = upwindSpawnPoint();
    spawnX = p.x;
    spawnY = p.y;
  }

  const radius = Math.max(1, size + Math.random() * sizeRange);
  const radiusKey = Math.max(1, Math.round(radius));
  const shapeIndex = Math.floor(Math.random() * shapePool.length);
  const texture = getParticleTexture(shapeIndex, radiusKey);

  const flake = new PIXI.Sprite(texture);
  flake.anchor.set(0.5);
  flake.x = spawnX;
  flake.y = spawnY;
  flake.rotation = 0;

  const baseHeading = angleRad + (Math.random() - 0.5) * angleRangeRad;
  flake.baseHeading = baseHeading;
  flake.headingAngle = baseHeading;
  flake.targetHeading = baseHeading;
  flake.headingChangeTimer = HEADING_CHANGE_MIN + Math.random() * (HEADING_CHANGE_MAX - HEADING_CHANGE_MIN);
  flake.wobbleHalf = (pathRaw + Math.random() * pathRangeRaw) * Math.PI / 180;

  flake.speedFactor = speed + Math.random() * speedRange;
  flake.spinFactor = (spin + Math.random() * spinRange) * (Math.random() < 0.5 ? -1 : 1);

  flake.baseAlpha = Math.random() * 0.25 + 0.75;
  flake.visible = true;
  flake.alpha = flake.baseAlpha;

  system.container.addChild(flake);
  system.flakes.push(flake);
}

system.flakes.forEach(flake => {
  flake.headingChangeTimer -= dt;
  if (flake.headingChangeTimer <= 0) {
    flake.targetHeading = flake.baseHeading + (Math.random() - 0.5) * 2 * flake.wobbleHalf;
    flake.headingChangeTimer = HEADING_CHANGE_MIN + Math.random() * (HEADING_CHANGE_MAX - HEADING_CHANGE_MIN);
  }
  let headingDiff = flake.targetHeading - flake.headingAngle;
  headingDiff = Math.atan2(Math.sin(headingDiff), Math.cos(headingDiff));
  const maxTurn = STEER_RATE * dt;
  flake.headingAngle += Math.max(-maxTurn, Math.min(maxTurn, headingDiff));

  flake.x += Math.cos(flake.headingAngle) * flake.speedFactor;
  flake.y += Math.sin(flake.headingAngle) * flake.speedFactor;

  flake.rotation += flake.spinFactor;
});

for (let i = system.flakes.length - 1; i >= 0; i--) {
  const flake = system.flakes[i];
  const distFromCam = Math.sqrt((flake.x - camX) ** 2 + (flake.y - camY) ** 2);
  if (distFromCam > camRadius + RECYCLE_MARGIN) {
    system.container.removeChild(flake);
    flake.destroy();
    system.flakes.splice(i, 1);
  }
}

// Advance the spawn clock and release any queued spawns whose moment has
// arrived. The queue only ever holds entries for the staggered initial
// fill; ongoing replenishment spawns immediately upwind.
system.spawnClock += dt;
for (let i = system.spawnQueue.length - 1; i >= 0; i--) {
  if (system.spawnQueue[i] <= system.spawnClock) {
    createFlake("edge");
    system.spawnQueue.splice(i, 1);
  }
}

const totalHave = system.flakes.length + system.spawnQueue.length;
const toAdd = Math.max(targetCount - totalHave, 0);

if (toAdd > 0) {
  if (!system.filled && !instantSpawn) {
    for (let i = 0; i < toAdd; i++) {
      system.spawnQueue.push(system.spawnClock + Math.random() * INITIAL_SPAWN_SPREAD);
    }
  } else {
    for (let i = 0; i < toAdd; i++) {
      createFlake(!system.filled && instantSpawn ? "instant" : "edge");
    }
  }
} else if (totalHave > targetCount) {
  let excess = totalHave - targetCount;
  while (excess > 0 && system.spawnQueue.length > 0) {
    system.spawnQueue.pop();
    excess--;
  }
  while (excess > 0 && system.flakes.length > 0) {
    const flake = system.flakes.pop();
    system.container.removeChild(flake);
    flake.destroy();
    excess--;
  }
}

if (!system.filled && targetCount > 0 && system.flakes.length >= targetCount && system.spawnQueue.length === 0) {
  system.filled = true;
}

system.container.alpha = Math.max(0, Math.min(255, opacity)) / 255;
};
gdjs.evtsExt__WeatherControl__Particles.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WeatherControl__Particles.userFunc0x1831430(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WeatherControl__Particles.func = function(runtimeScene, LayerName, Shape, Density, Size, SizeRange, Speed, SpeedRange, Angle, AngleRange, Spin, SpinRange, Path, PathRange, Opacity, Color, InstantSpawn, Destroy, parentEventsFunctionContext) {
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
if (argName === "Shape") return Shape;
if (argName === "Density") return Density;
if (argName === "Size") return Size;
if (argName === "SizeRange") return SizeRange;
if (argName === "Speed") return Speed;
if (argName === "SpeedRange") return SpeedRange;
if (argName === "Angle") return Angle;
if (argName === "AngleRange") return AngleRange;
if (argName === "Spin") return Spin;
if (argName === "SpinRange") return SpinRange;
if (argName === "Path") return Path;
if (argName === "PathRange") return PathRange;
if (argName === "Opacity") return Opacity;
if (argName === "Color") return Color;
if (argName === "InstantSpawn") return InstantSpawn;
if (argName === "Destroy") return Destroy;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WeatherControl__Particles.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WeatherControl__Particles.registeredGdjsCallbacks = [];