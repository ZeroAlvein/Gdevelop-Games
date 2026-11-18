gdjs.CopyCode = {};
gdjs.CopyCode.localVariables = [];
gdjs.CopyCode.idToCallbackMap = new Map();
gdjs.CopyCode.GDButtonFontObjects5_1final = [];

gdjs.CopyCode.GDButtonObjects5_1final = [];

gdjs.CopyCode.forEachIndex3 = 0;

gdjs.CopyCode.forEachIndex4 = 0;

gdjs.CopyCode.forEachObjects3 = [];

gdjs.CopyCode.forEachObjects4 = [];

gdjs.CopyCode.forEachTemporary3 = null;

gdjs.CopyCode.forEachTemporary4 = null;

gdjs.CopyCode.forEachTotalCount3 = 0;

gdjs.CopyCode.forEachTotalCount4 = 0;

gdjs.CopyCode.GDButtonObjects1= [];
gdjs.CopyCode.GDButtonObjects2= [];
gdjs.CopyCode.GDButtonObjects3= [];
gdjs.CopyCode.GDButtonObjects4= [];
gdjs.CopyCode.GDButtonObjects5= [];
gdjs.CopyCode.GDButtonObjects6= [];
gdjs.CopyCode.GDButtonObjects7= [];
gdjs.CopyCode.GDButtonObjects8= [];
gdjs.CopyCode.GDButtonFlashSPObjects1= [];
gdjs.CopyCode.GDButtonFlashSPObjects2= [];
gdjs.CopyCode.GDButtonFlashSPObjects3= [];
gdjs.CopyCode.GDButtonFlashSPObjects4= [];
gdjs.CopyCode.GDButtonFlashSPObjects5= [];
gdjs.CopyCode.GDButtonFlashSPObjects6= [];
gdjs.CopyCode.GDButtonFlashSPObjects7= [];
gdjs.CopyCode.GDButtonFlashSPObjects8= [];
gdjs.CopyCode.GDEffectSPObjects1= [];
gdjs.CopyCode.GDEffectSPObjects2= [];
gdjs.CopyCode.GDEffectSPObjects3= [];
gdjs.CopyCode.GDEffectSPObjects4= [];
gdjs.CopyCode.GDEffectSPObjects5= [];
gdjs.CopyCode.GDEffectSPObjects6= [];
gdjs.CopyCode.GDEffectSPObjects7= [];
gdjs.CopyCode.GDEffectSPObjects8= [];
gdjs.CopyCode.GDInputFontObjects1= [];
gdjs.CopyCode.GDInputFontObjects2= [];
gdjs.CopyCode.GDInputFontObjects3= [];
gdjs.CopyCode.GDInputFontObjects4= [];
gdjs.CopyCode.GDInputFontObjects5= [];
gdjs.CopyCode.GDInputFontObjects6= [];
gdjs.CopyCode.GDInputFontObjects7= [];
gdjs.CopyCode.GDInputFontObjects8= [];
gdjs.CopyCode.GDEffectSP2Objects1= [];
gdjs.CopyCode.GDEffectSP2Objects2= [];
gdjs.CopyCode.GDEffectSP2Objects3= [];
gdjs.CopyCode.GDEffectSP2Objects4= [];
gdjs.CopyCode.GDEffectSP2Objects5= [];
gdjs.CopyCode.GDEffectSP2Objects6= [];
gdjs.CopyCode.GDEffectSP2Objects7= [];
gdjs.CopyCode.GDEffectSP2Objects8= [];
gdjs.CopyCode.GDButtonFontObjects1= [];
gdjs.CopyCode.GDButtonFontObjects2= [];
gdjs.CopyCode.GDButtonFontObjects3= [];
gdjs.CopyCode.GDButtonFontObjects4= [];
gdjs.CopyCode.GDButtonFontObjects5= [];
gdjs.CopyCode.GDButtonFontObjects6= [];
gdjs.CopyCode.GDButtonFontObjects7= [];
gdjs.CopyCode.GDButtonFontObjects8= [];
gdjs.CopyCode.GDOutputFontObjects1= [];
gdjs.CopyCode.GDOutputFontObjects2= [];
gdjs.CopyCode.GDOutputFontObjects3= [];
gdjs.CopyCode.GDOutputFontObjects4= [];
gdjs.CopyCode.GDOutputFontObjects5= [];
gdjs.CopyCode.GDOutputFontObjects6= [];
gdjs.CopyCode.GDOutputFontObjects7= [];
gdjs.CopyCode.GDOutputFontObjects8= [];
gdjs.CopyCode.GDDebugTextObjects1= [];
gdjs.CopyCode.GDDebugTextObjects2= [];
gdjs.CopyCode.GDDebugTextObjects3= [];
gdjs.CopyCode.GDDebugTextObjects4= [];
gdjs.CopyCode.GDDebugTextObjects5= [];
gdjs.CopyCode.GDDebugTextObjects6= [];
gdjs.CopyCode.GDDebugTextObjects7= [];
gdjs.CopyCode.GDDebugTextObjects8= [];


gdjs.CopyCode.mapOfGDgdjs_9546CopyCode_9546GDInputFontObjects3Objects = Hashtable.newFrom({"InputFont": gdjs.CopyCode.GDInputFontObjects3});
gdjs.CopyCode.mapOfGDgdjs_9546CopyCode_9546GDOutputFontObjects3Objects = Hashtable.newFrom({"OutputFont": gdjs.CopyCode.GDOutputFontObjects3});
gdjs.CopyCode.mapOfGDgdjs_9546CopyCode_9546GDEffectSPObjects3Objects = Hashtable.newFrom({"EffectSP": gdjs.CopyCode.GDEffectSPObjects3});
gdjs.CopyCode.mapOfGDgdjs_9546CopyCode_9546GDEffectSP2Objects3Objects = Hashtable.newFrom({"EffectSP2": gdjs.CopyCode.GDEffectSP2Objects3});
gdjs.CopyCode.mapOfGDgdjs_9546CopyCode_9546GDButtonFlashSPObjects3Objects = Hashtable.newFrom({"ButtonFlashSP": gdjs.CopyCode.GDButtonFlashSPObjects3});
gdjs.CopyCode.mapOfGDgdjs_9546CopyCode_9546GDButtonFontObjects4Objects = Hashtable.newFrom({"ButtonFont": gdjs.CopyCode.GDButtonFontObjects4});
gdjs.CopyCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.CopyCode.GDButtonFontObjects4, gdjs.CopyCode.GDButtonFontObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.CopyCode.GDButtonFontObjects5_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.CopyCode.GDButtonFontObjects4, gdjs.CopyCode.GDButtonFontObjects6);

for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonFontObjects6.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonFontObjects6[i].getBehavior("Text").getText() == "+" ) {
        isConditionTrue_1 = true;
        gdjs.CopyCode.GDButtonFontObjects6[k] = gdjs.CopyCode.GDButtonFontObjects6[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonFontObjects6.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.CopyCode.GDButtonFontObjects6.length; j < jLen ; ++j) {
        if ( gdjs.CopyCode.GDButtonFontObjects5_1final.indexOf(gdjs.CopyCode.GDButtonFontObjects6[j]) === -1 )
            gdjs.CopyCode.GDButtonFontObjects5_1final.push(gdjs.CopyCode.GDButtonFontObjects6[j]);
    }
}
}
{
gdjs.copyArray(gdjs.CopyCode.GDButtonFontObjects4, gdjs.CopyCode.GDButtonFontObjects6);

for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonFontObjects6.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonFontObjects6[i].getBehavior("Text").getText() == "-" ) {
        isConditionTrue_1 = true;
        gdjs.CopyCode.GDButtonFontObjects6[k] = gdjs.CopyCode.GDButtonFontObjects6[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonFontObjects6.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.CopyCode.GDButtonFontObjects6.length; j < jLen ; ++j) {
        if ( gdjs.CopyCode.GDButtonFontObjects5_1final.indexOf(gdjs.CopyCode.GDButtonFontObjects6[j]) === -1 )
            gdjs.CopyCode.GDButtonFontObjects5_1final.push(gdjs.CopyCode.GDButtonFontObjects6[j]);
    }
}
}
{
gdjs.copyArray(gdjs.CopyCode.GDButtonFontObjects4, gdjs.CopyCode.GDButtonFontObjects6);

for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonFontObjects6.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonFontObjects6[i].getBehavior("Text").getText() == "*" ) {
        isConditionTrue_1 = true;
        gdjs.CopyCode.GDButtonFontObjects6[k] = gdjs.CopyCode.GDButtonFontObjects6[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonFontObjects6.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.CopyCode.GDButtonFontObjects6.length; j < jLen ; ++j) {
        if ( gdjs.CopyCode.GDButtonFontObjects5_1final.indexOf(gdjs.CopyCode.GDButtonFontObjects6[j]) === -1 )
            gdjs.CopyCode.GDButtonFontObjects5_1final.push(gdjs.CopyCode.GDButtonFontObjects6[j]);
    }
}
}
{
gdjs.copyArray(gdjs.CopyCode.GDButtonFontObjects4, gdjs.CopyCode.GDButtonFontObjects6);

for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonFontObjects6.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonFontObjects6[i].getBehavior("Text").getText() == "/" ) {
        isConditionTrue_1 = true;
        gdjs.CopyCode.GDButtonFontObjects6[k] = gdjs.CopyCode.GDButtonFontObjects6[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonFontObjects6.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.CopyCode.GDButtonFontObjects6.length; j < jLen ; ++j) {
        if ( gdjs.CopyCode.GDButtonFontObjects5_1final.indexOf(gdjs.CopyCode.GDButtonFontObjects6[j]) === -1 )
            gdjs.CopyCode.GDButtonFontObjects5_1final.push(gdjs.CopyCode.GDButtonFontObjects6[j]);
    }
}
}
{
gdjs.copyArray(gdjs.CopyCode.GDButtonFontObjects4, gdjs.CopyCode.GDButtonFontObjects6);

for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonFontObjects6.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonFontObjects6[i].getBehavior("Text").getText() == "$" ) {
        isConditionTrue_1 = true;
        gdjs.CopyCode.GDButtonFontObjects6[k] = gdjs.CopyCode.GDButtonFontObjects6[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonFontObjects6.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.CopyCode.GDButtonFontObjects6.length; j < jLen ; ++j) {
        if ( gdjs.CopyCode.GDButtonFontObjects5_1final.indexOf(gdjs.CopyCode.GDButtonFontObjects6[j]) === -1 )
            gdjs.CopyCode.GDButtonFontObjects5_1final.push(gdjs.CopyCode.GDButtonFontObjects6[j]);
    }
}
}
{
gdjs.copyArray(gdjs.CopyCode.GDButtonFontObjects4, gdjs.CopyCode.GDButtonFontObjects6);

for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonFontObjects6.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonFontObjects6[i].getBehavior("Text").getText() == "=" ) {
        isConditionTrue_1 = true;
        gdjs.CopyCode.GDButtonFontObjects6[k] = gdjs.CopyCode.GDButtonFontObjects6[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonFontObjects6.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.CopyCode.GDButtonFontObjects6.length; j < jLen ; ++j) {
        if ( gdjs.CopyCode.GDButtonFontObjects5_1final.indexOf(gdjs.CopyCode.GDButtonFontObjects6[j]) === -1 )
            gdjs.CopyCode.GDButtonFontObjects5_1final.push(gdjs.CopyCode.GDButtonFontObjects6[j]);
    }
}
}
{
gdjs.copyArray(gdjs.CopyCode.GDButtonFontObjects5_1final, gdjs.CopyCode.GDButtonFontObjects5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonFontObjects5 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonFontObjects5.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonFontObjects5[i].setTint("0;210;255");
}
}
}

}


{

gdjs.copyArray(gdjs.CopyCode.GDButtonFontObjects4, gdjs.CopyCode.GDButtonFontObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.CopyCode.GDButtonFontObjects5_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.CopyCode.GDButtonFontObjects4, gdjs.CopyCode.GDButtonFontObjects6);

for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonFontObjects6.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonFontObjects6[i].getBehavior("Text").getText() == "SYS" ) {
        isConditionTrue_1 = true;
        gdjs.CopyCode.GDButtonFontObjects6[k] = gdjs.CopyCode.GDButtonFontObjects6[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonFontObjects6.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.CopyCode.GDButtonFontObjects6.length; j < jLen ; ++j) {
        if ( gdjs.CopyCode.GDButtonFontObjects5_1final.indexOf(gdjs.CopyCode.GDButtonFontObjects6[j]) === -1 )
            gdjs.CopyCode.GDButtonFontObjects5_1final.push(gdjs.CopyCode.GDButtonFontObjects6[j]);
    }
}
}
{
gdjs.copyArray(gdjs.CopyCode.GDButtonFontObjects4, gdjs.CopyCode.GDButtonFontObjects6);

for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonFontObjects6.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonFontObjects6[i].getBehavior("Text").getText() == "C" ) {
        isConditionTrue_1 = true;
        gdjs.CopyCode.GDButtonFontObjects6[k] = gdjs.CopyCode.GDButtonFontObjects6[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonFontObjects6.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.CopyCode.GDButtonFontObjects6.length; j < jLen ; ++j) {
        if ( gdjs.CopyCode.GDButtonFontObjects5_1final.indexOf(gdjs.CopyCode.GDButtonFontObjects6[j]) === -1 )
            gdjs.CopyCode.GDButtonFontObjects5_1final.push(gdjs.CopyCode.GDButtonFontObjects6[j]);
    }
}
}
{
gdjs.copyArray(gdjs.CopyCode.GDButtonFontObjects4, gdjs.CopyCode.GDButtonFontObjects6);

for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonFontObjects6.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonFontObjects6[i].getBehavior("Text").getText() == "<" ) {
        isConditionTrue_1 = true;
        gdjs.CopyCode.GDButtonFontObjects6[k] = gdjs.CopyCode.GDButtonFontObjects6[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonFontObjects6.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.CopyCode.GDButtonFontObjects6.length; j < jLen ; ++j) {
        if ( gdjs.CopyCode.GDButtonFontObjects5_1final.indexOf(gdjs.CopyCode.GDButtonFontObjects6[j]) === -1 )
            gdjs.CopyCode.GDButtonFontObjects5_1final.push(gdjs.CopyCode.GDButtonFontObjects6[j]);
    }
}
}
{
gdjs.copyArray(gdjs.CopyCode.GDButtonFontObjects5_1final, gdjs.CopyCode.GDButtonFontObjects5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonFontObjects5 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonFontObjects5.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonFontObjects5[i].setTint("255;160;0");
}
}
}

}


{

gdjs.copyArray(gdjs.CopyCode.GDButtonObjects4, gdjs.CopyCode.GDButtonObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects5.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects5[i].getVariableString(gdjs.CopyCode.GDButtonObjects5[i].getVariables().getFromIndex(1)) == "Operator" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects5[k] = gdjs.CopyCode.GDButtonObjects5[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects5 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects5.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects5[i].setColor("43;43;43");
}
}
}

}


{

gdjs.copyArray(gdjs.CopyCode.GDButtonObjects4, gdjs.CopyCode.GDButtonObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects5.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects5[i].getVariableString(gdjs.CopyCode.GDButtonObjects5[i].getVariables().getFromIndex(1)) == "Result" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects5[k] = gdjs.CopyCode.GDButtonObjects5[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects5 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects5.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects5[i].setColor("185;116;0");
}
}
}

}


{

gdjs.copyArray(gdjs.CopyCode.GDButtonObjects4, gdjs.CopyCode.GDButtonObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects5.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects5[i].getVariableString(gdjs.CopyCode.GDButtonObjects5[i].getVariables().getFromIndex(1)) != "Operator" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects5[k] = gdjs.CopyCode.GDButtonObjects5[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects5.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects5[i].getVariableString(gdjs.CopyCode.GDButtonObjects5[i].getVariables().getFromIndex(1)) != "Result" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects5[k] = gdjs.CopyCode.GDButtonObjects5[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects5 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects5.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects5[i].setColor("56;56;56");
}
}
}

}


{

gdjs.copyArray(gdjs.CopyCode.GDButtonObjects4, gdjs.CopyCode.GDButtonObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.CopyCode.GDButtonObjects5_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.CopyCode.GDButtonObjects4, gdjs.CopyCode.GDButtonObjects6);

for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects6.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects6[i].getVariableString(gdjs.CopyCode.GDButtonObjects6[i].getVariables().getFromIndex(1)) == "SYS" ) {
        isConditionTrue_1 = true;
        gdjs.CopyCode.GDButtonObjects6[k] = gdjs.CopyCode.GDButtonObjects6[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects6.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.CopyCode.GDButtonObjects6.length; j < jLen ; ++j) {
        if ( gdjs.CopyCode.GDButtonObjects5_1final.indexOf(gdjs.CopyCode.GDButtonObjects6[j]) === -1 )
            gdjs.CopyCode.GDButtonObjects5_1final.push(gdjs.CopyCode.GDButtonObjects6[j]);
    }
}
}
{
gdjs.copyArray(gdjs.CopyCode.GDButtonObjects4, gdjs.CopyCode.GDButtonObjects6);

for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects6.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects6[i].getVariableString(gdjs.CopyCode.GDButtonObjects6[i].getVariables().getFromIndex(1)) == "Clear" ) {
        isConditionTrue_1 = true;
        gdjs.CopyCode.GDButtonObjects6[k] = gdjs.CopyCode.GDButtonObjects6[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects6.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.CopyCode.GDButtonObjects6.length; j < jLen ; ++j) {
        if ( gdjs.CopyCode.GDButtonObjects5_1final.indexOf(gdjs.CopyCode.GDButtonObjects6[j]) === -1 )
            gdjs.CopyCode.GDButtonObjects5_1final.push(gdjs.CopyCode.GDButtonObjects6[j]);
    }
}
}
{
gdjs.copyArray(gdjs.CopyCode.GDButtonObjects4, gdjs.CopyCode.GDButtonObjects6);

for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects6.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects6[i].getVariableString(gdjs.CopyCode.GDButtonObjects6[i].getVariables().getFromIndex(1)) == "Backspace" ) {
        isConditionTrue_1 = true;
        gdjs.CopyCode.GDButtonObjects6[k] = gdjs.CopyCode.GDButtonObjects6[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects6.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.CopyCode.GDButtonObjects6.length; j < jLen ; ++j) {
        if ( gdjs.CopyCode.GDButtonObjects5_1final.indexOf(gdjs.CopyCode.GDButtonObjects6[j]) === -1 )
            gdjs.CopyCode.GDButtonObjects5_1final.push(gdjs.CopyCode.GDButtonObjects6[j]);
    }
}
}
{
gdjs.copyArray(gdjs.CopyCode.GDButtonObjects5_1final, gdjs.CopyCode.GDButtonObjects5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects5 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects5.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects5[i].setColor("34;34;34");
}
}
}

}


};gdjs.CopyCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects3);

for (gdjs.CopyCode.forEachIndex4 = 0;gdjs.CopyCode.forEachIndex4 < gdjs.CopyCode.GDButtonObjects3.length;++gdjs.CopyCode.forEachIndex4) {
gdjs.CopyCode.GDButtonFontObjects4.length = 0;

gdjs.CopyCode.GDButtonObjects4.length = 0;


gdjs.CopyCode.forEachTemporary4 = gdjs.CopyCode.GDButtonObjects3[gdjs.CopyCode.forEachIndex4];
gdjs.CopyCode.GDButtonObjects4.push(gdjs.CopyCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.CopyCode.mapOfGDgdjs_9546CopyCode_9546GDButtonFontObjects4Objects, (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getCenterXInScene()), (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getCenterYInScene()), "");
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonFontObjects4.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonFontObjects4[i].getBehavior("Text").setText(((gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CopyCode.GDButtonObjects4[0].getVariables()).getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonFontObjects4.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonFontObjects4[i].getBehavior("Scale").setScale(1);
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonFontObjects4.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonFontObjects4[i].setTextAlignment("center");
}
}

{ //Subevents: 
gdjs.CopyCode.eventsList0(runtimeScene);} //Subevents end.
}
}

}


};gdjs.CopyCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.CopyCode.GDButtonObjects3, gdjs.CopyCode.GDButtonObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects4.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects4[i].getVariableString(gdjs.CopyCode.GDButtonObjects4[i].getVariables().getFromIndex(1)) != "Result" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects4[k] = gdjs.CopyCode.GDButtonObjects4[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects4 */
gdjs.copyArray(runtimeScene.getObjects("EffectSP"), gdjs.CopyCode.GDEffectSPObjects4);
gdjs.copyArray(runtimeScene.getObjects("EffectSP2"), gdjs.CopyCode.GDEffectSP2Objects4);
{for(var i = 0, len = gdjs.CopyCode.GDEffectSPObjects4.length ;i < len;++i) {
    gdjs.CopyCode.GDEffectSPObjects4[i].setOutlineOpacity(25);
}
}
{for(var i = 0, len = gdjs.CopyCode.GDEffectSP2Objects4.length ;i < len;++i) {
    gdjs.CopyCode.GDEffectSP2Objects4[i].setOutlineOpacity(100);
}
}
{for(var i = 0, len = gdjs.CopyCode.GDEffectSPObjects4.length ;i < len;++i) {
    gdjs.CopyCode.GDEffectSPObjects4[i].setOutlineColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.CopyCode.GDEffectSP2Objects4.length ;i < len;++i) {
    gdjs.CopyCode.GDEffectSP2Objects4[i].setOutlineColor("0;0;0");
}
}
{for(var i = 0, len = gdjs.CopyCode.GDEffectSPObjects4.length ;i < len;++i) {
    gdjs.CopyCode.GDEffectSPObjects4[i].drawLineV2((( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getPointX("")), 0, (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getPointX("")) + (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getWidth()), 0, 0);
}
}
{for(var i = 0, len = gdjs.CopyCode.GDEffectSPObjects4.length ;i < len;++i) {
    gdjs.CopyCode.GDEffectSPObjects4[i].drawLineV2(0, (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getPointY("")), 0, (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getPointY("")) + (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getHeight()), 0);
}
}
{for(var i = 0, len = gdjs.CopyCode.GDEffectSP2Objects4.length ;i < len;++i) {
    gdjs.CopyCode.GDEffectSP2Objects4[i].drawLineV2((( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getPointX("")), 0, (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getPointX("")) + (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getWidth()), 0, 0);
}
}
{for(var i = 0, len = gdjs.CopyCode.GDEffectSP2Objects4.length ;i < len;++i) {
    gdjs.CopyCode.GDEffectSP2Objects4[i].drawLineV2(0, (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getPointY("")), 0, (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getPointY("")) + (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getHeight()), 0);
}
}
}

}


{

gdjs.copyArray(gdjs.CopyCode.GDButtonObjects3, gdjs.CopyCode.GDButtonObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects4.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects4[i].getVariableString(gdjs.CopyCode.GDButtonObjects4[i].getVariables().getFromIndex(1)) == "Result" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects4[k] = gdjs.CopyCode.GDButtonObjects4[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects4 */
gdjs.copyArray(runtimeScene.getObjects("EffectSP"), gdjs.CopyCode.GDEffectSPObjects4);
gdjs.copyArray(runtimeScene.getObjects("EffectSP2"), gdjs.CopyCode.GDEffectSP2Objects4);
{for(var i = 0, len = gdjs.CopyCode.GDEffectSPObjects4.length ;i < len;++i) {
    gdjs.CopyCode.GDEffectSPObjects4[i].setOutlineOpacity(70);
}
}
{for(var i = 0, len = gdjs.CopyCode.GDEffectSP2Objects4.length ;i < len;++i) {
    gdjs.CopyCode.GDEffectSP2Objects4[i].setOutlineOpacity(120);
}
}
{for(var i = 0, len = gdjs.CopyCode.GDEffectSPObjects4.length ;i < len;++i) {
    gdjs.CopyCode.GDEffectSPObjects4[i].setOutlineColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.CopyCode.GDEffectSP2Objects4.length ;i < len;++i) {
    gdjs.CopyCode.GDEffectSP2Objects4[i].setOutlineColor("0;0;0");
}
}
{for(var i = 0, len = gdjs.CopyCode.GDEffectSPObjects4.length ;i < len;++i) {
    gdjs.CopyCode.GDEffectSPObjects4[i].drawLineV2((( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getPointX("")), 0, (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getPointX("")) + (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getWidth()), 0, 0);
}
}
{for(var i = 0, len = gdjs.CopyCode.GDEffectSPObjects4.length ;i < len;++i) {
    gdjs.CopyCode.GDEffectSPObjects4[i].drawLineV2(0, (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getPointY("")), 0, (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getPointY("")) + (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getHeight()), 0);
}
}
{for(var i = 0, len = gdjs.CopyCode.GDEffectSP2Objects4.length ;i < len;++i) {
    gdjs.CopyCode.GDEffectSP2Objects4[i].drawLineV2((( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getPointX("")), 0, (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getPointX("")) + (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getWidth()), 0, 0);
}
}
{for(var i = 0, len = gdjs.CopyCode.GDEffectSP2Objects4.length ;i < len;++i) {
    gdjs.CopyCode.GDEffectSP2Objects4[i].drawLineV2(0, (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getPointY("")), 0, (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getPointY("")) + (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getHeight()), 0);
}
}
}

}


};gdjs.CopyCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.CopyCode.GDButtonFlashSPObjects3.length = 0;

gdjs.CopyCode.GDEffectSPObjects3.length = 0;

gdjs.CopyCode.GDEffectSP2Objects3.length = 0;

gdjs.CopyCode.GDInputFontObjects3.length = 0;

gdjs.CopyCode.GDOutputFontObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.CopyCode.mapOfGDgdjs_9546CopyCode_9546GDInputFontObjects3Objects, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) + 20, "");
}
{for(var i = 0, len = gdjs.CopyCode.GDInputFontObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDInputFontObjects3[i].setTextAlignment("right");
}
}
{for(var i = 0, len = gdjs.CopyCode.GDInputFontObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDInputFontObjects3[i].getBehavior("Scale").setScale(1.5);
}
}
{for(var i = 0, len = gdjs.CopyCode.GDInputFontObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDInputFontObjects3[i].getBehavior("Text").setText("0");
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.CopyCode.mapOfGDgdjs_9546CopyCode_9546GDOutputFontObjects3Objects, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) + 20, "");
}
{for(var i = 0, len = gdjs.CopyCode.GDOutputFontObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDOutputFontObjects3[i].setTextAlignment("right");
}
}
{for(var i = 0, len = gdjs.CopyCode.GDOutputFontObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDOutputFontObjects3[i].getBehavior("Scale").setScale(0.5);
}
}
{for(var i = 0, len = gdjs.CopyCode.GDOutputFontObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDOutputFontObjects3[i].getBehavior("Text").setText("");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sound\\Click.aac", false, 0, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousInput").setString("");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").setString("");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").setString("");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").setString("");
}
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("SP2Thinkness").setNumber(3);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ParenthesesL").setString("");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ParenthesesR").setString("");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Result").setString("");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.CopyCode.mapOfGDgdjs_9546CopyCode_9546GDEffectSPObjects3Objects, 1, 1, "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.CopyCode.mapOfGDgdjs_9546CopyCode_9546GDEffectSP2Objects3Objects, 1, 1, "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.CopyCode.mapOfGDgdjs_9546CopyCode_9546GDButtonFlashSPObjects3Objects, 1, 1, "");
}

{ //Subevents
gdjs.CopyCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects2);

for (gdjs.CopyCode.forEachIndex3 = 0;gdjs.CopyCode.forEachIndex3 < gdjs.CopyCode.GDButtonObjects2.length;++gdjs.CopyCode.forEachIndex3) {
gdjs.CopyCode.GDButtonObjects3.length = 0;


gdjs.CopyCode.forEachTemporary3 = gdjs.CopyCode.GDButtonObjects2[gdjs.CopyCode.forEachIndex3];
gdjs.CopyCode.GDButtonObjects3.push(gdjs.CopyCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.CopyCode.eventsList2(runtimeScene);} //Subevents end.
}
}

}


};gdjs.CopyCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.CopyCode.GDButtonObjects3, gdjs.CopyCode.GDButtonObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects4.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects4[i].getVariableString(gdjs.CopyCode.GDButtonObjects4[i].getVariables().getFromIndex(1)) == "Clear" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects4[k] = gdjs.CopyCode.GDButtonObjects4[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects4.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").setString("0");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousInput").setString("");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").setString("");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").setString("");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").setString("");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Result").setString("");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousResult").setString("");
}
}

}


};gdjs.CopyCode.eventsList5 = function(runtimeScene) {

};gdjs.CopyCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString() == "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").getAsString() != "");
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").setString("");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString() != "");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").setString(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString(), 0, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()) - 1) + " ");
}
}

}


};gdjs.CopyCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").getAsString()).endsWith("+"));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").getAsString()).endsWith("-"));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").getAsString()).endsWith("*"));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").getAsString()).endsWith("/"));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").setString(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").getAsString(), 0, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").getAsString()) - 1));
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").setString(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").getAsString(), gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").getAsString()) - gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString(), gdjs.evtTools.string.strFindLast(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString(), ".") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString()) - gdjs.evtTools.string.strFindLast(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString(), ".") - 1)), gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString(), gdjs.evtTools.string.strFindLast(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString(), ".") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString()) - gdjs.evtTools.string.strFindLast(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString(), ".") - 1))));
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").setString(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").getAsString(), 0, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").getAsString()) - gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString(), gdjs.evtTools.string.strFindLast(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString(), ".") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString()) - gdjs.evtTools.string.strFindLast(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString(), ".") - 1))));
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").setString(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").getAsString(), gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").getAsString()) - 1, 1));
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").setString(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString(), 0, gdjs.evtTools.string.strFindLast(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString(), ".")));
}
}

}


};gdjs.CopyCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").getAsString() == "+");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()) == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString() != "0");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString() != "-");
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CopyCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()).endsWith(" "));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CopyCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()).endsWith(" "));
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").setString(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString(), 0, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()) - 1));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString() == "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").getAsString() == "");
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CopyCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString() == "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").getAsString() == "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").getAsString() == "");
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").setString("0");
}
}

}


};gdjs.CopyCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.CopyCode.GDButtonObjects3, gdjs.CopyCode.GDButtonObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects4.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects4[i].getVariableString(gdjs.CopyCode.GDButtonObjects4[i].getVariables().getFromIndex(1)) == "Backspace" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects4[k] = gdjs.CopyCode.GDButtonObjects4[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.CopyCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.CopyCode.eventsList10 = function(runtimeScene) {

};gdjs.CopyCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString() != "-0");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.CopyCode.GDButtonObjects5, gdjs.CopyCode.GDButtonObjects7);

{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").concatenateString(((gdjs.CopyCode.GDButtonObjects7.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CopyCode.GDButtonObjects7[0].getVariables()).getFromIndex(0).getAsString() + " ");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString() == "-0");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.CopyCode.GDButtonObjects5, gdjs.CopyCode.GDButtonObjects6);

{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").setString("-" + ((gdjs.CopyCode.GDButtonObjects6.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CopyCode.GDButtonObjects6[0].getVariables()).getFromIndex(0).getAsString() + " ");
}
}

}


};gdjs.CopyCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString() != "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString() != "0");
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CopyCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString() == "");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.CopyCode.GDButtonObjects5, gdjs.CopyCode.GDButtonObjects6);

{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").setString(((gdjs.CopyCode.GDButtonObjects6.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CopyCode.GDButtonObjects6[0].getVariables()).getFromIndex(0).getAsString() + " ");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString() == "0");
}
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects5 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").setString(((gdjs.CopyCode.GDButtonObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CopyCode.GDButtonObjects5[0].getVariables()).getFromIndex(0).getAsString() + " ");
}
}

}


};gdjs.CopyCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.CopyCode.GDButtonObjects4, gdjs.CopyCode.GDButtonObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects6.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects6[i].getVariableString(gdjs.CopyCode.GDButtonObjects6[i].getVariables().getFromIndex(0)) == "." ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects6[k] = gdjs.CopyCode.GDButtonObjects6[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()).includes("."));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString() != "");
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects6 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").concatenateString(((gdjs.CopyCode.GDButtonObjects6.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CopyCode.GDButtonObjects6[0].getVariables()).getFromIndex(0).getAsString() + " ");
}
}

}


{

gdjs.copyArray(gdjs.CopyCode.GDButtonObjects4, gdjs.CopyCode.GDButtonObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects5.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects5[i].getVariableString(gdjs.CopyCode.GDButtonObjects5[i].getVariables().getFromIndex(0)) != "." ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects5[k] = gdjs.CopyCode.GDButtonObjects5[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects5.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.CopyCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.CopyCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString() == "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").getAsString() != "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strFindLast(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString(), ".") != 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strFindLast(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString(), ".") != -1);
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CopyCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()).endsWith(" "));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CopyCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()).endsWith(" "));
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").setString(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString(), 0, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()) - 1));
}
}

}


};gdjs.CopyCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.CopyCode.GDButtonObjects3, gdjs.CopyCode.GDButtonObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects4.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects4[i].getVariableString(gdjs.CopyCode.GDButtonObjects4[i].getVariables().getFromIndex(1)) == "Number" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects4[k] = gdjs.CopyCode.GDButtonObjects4[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.CopyCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.CopyCode.eventsList16 = function(runtimeScene) {

};gdjs.CopyCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousInput").getAsString() == "");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CopyCode.eventsList16(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()).endsWith("."));
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.CopyCode.GDButtonObjects4, gdjs.CopyCode.GDButtonObjects6);

{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").setString(((gdjs.CopyCode.GDButtonObjects6.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CopyCode.GDButtonObjects6[0].getVariables()).getFromIndex(0).getAsString() + " ");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousInput").setString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").setString("");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()).endsWith("."));
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.CopyCode.GDButtonObjects4, gdjs.CopyCode.GDButtonObjects6);

{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").setString(((gdjs.CopyCode.GDButtonObjects6.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CopyCode.GDButtonObjects6[0].getVariables()).getFromIndex(0).getAsString() + " ");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousInput").setString(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString(), 0, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()) - 1));
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").setString("");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousInput").getAsString()).startsWith("-"));
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").concatenateString("." + gdjs.evtTools.common.toString(gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousInput").getAsString()) + 2));
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").concatenateString("(" + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousInput").getAsString() + ")" + gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").getAsString(), 0, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").getAsString()) - 1));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousInput").getAsString()).startsWith("-"));
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").concatenateString("." + gdjs.evtTools.common.toString(gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousInput").getAsString())));
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").concatenateString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousInput").getAsString() + gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").getAsString(), 0, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").getAsString()) - 1));
}
}

}


};gdjs.CopyCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString() != "");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CopyCode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.CopyCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString() == "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousInput").getAsString() != "");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.CopyCode.GDButtonObjects4, gdjs.CopyCode.GDButtonObjects6);

{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").setString(((gdjs.CopyCode.GDButtonObjects6.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CopyCode.GDButtonObjects6[0].getVariables()).getFromIndex(0).getAsString() + " ");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").setString(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").getAsString(), 0, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").getAsString()) - 1) + gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").getAsString(), 0, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").getAsString()) - 1));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()).includes("1"));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()).includes("2"));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()).includes("3"));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()).includes("4"));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()).includes("5"));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()).includes("6"));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()).includes("7"));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()).includes("8"));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()).includes("9"));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CopyCode.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.CopyCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").getAsString()).endsWith(" "));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CopyCode.eventsList19(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").getAsString()).endsWith(" "));
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").setString(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").getAsString(), 0, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").getAsString()) - 1));
}
}

}


};gdjs.CopyCode.eventsList21 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.CopyCode.GDButtonObjects3, gdjs.CopyCode.GDButtonObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects4.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects4[i].getVariableString(gdjs.CopyCode.GDButtonObjects4[i].getVariables().getFromIndex(1)) == "Operator" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects4[k] = gdjs.CopyCode.GDButtonObjects4[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects4.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects4[i].getVariableString(gdjs.CopyCode.GDButtonObjects4[i].getVariables().getFromIndex(0)) != "$" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects4[k] = gdjs.CopyCode.GDButtonObjects4[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects4.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CopyCode.eventsList20(runtimeScene);} //End of subevents
}

}


};gdjs.CopyCode.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getChild("StartsWithMinus").getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").setString("-" + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getChild("StartsWithMinus").getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").setString(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString(), 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString())));
}
}

}


};gdjs.CopyCode.eventsList23 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString() != "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").getAsString() != "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousInput").getAsString() != "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Result").getAsString() == "0");
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Result").setString("");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()).startsWith("-"));
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("StartsWithMinus").setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()).startsWith("-"));
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("StartsWithMinus").setBoolean(false);
}
}

}


{

gdjs.copyArray(gdjs.CopyCode.GDButtonObjects3, gdjs.CopyCode.GDButtonObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects5.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects5[i].getVariableString(gdjs.CopyCode.GDButtonObjects5[i].getVariables().getFromIndex(0)) == "$" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects5[k] = gdjs.CopyCode.GDButtonObjects5[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects5.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.CopyCode.eventsList22(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousInput").getAsString()).includes("("));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousInput").getAsString()).includes("-"));
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousInput").setString("(" + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousInput").getAsString() + ")");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()).includes("("));
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").setString(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString(), 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString())));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()).includes(")"));
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").setString(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString(), 0, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()) - 1));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()).includes("-"));
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ParenthesesL").setString("");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ParenthesesR").setString("");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString()).includes("-"));
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ParenthesesL").setString("(");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ParenthesesR").setString(")");
}
}

}


};gdjs.CopyCode.eventsList24 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousResult").getAsString()).endsWith(")"));
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Result").setString(" = " + gdjs.evtTools.common.toString(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousResult").getAsString(), 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousResult").getAsString()) - 2)) + gdjs.evtTools.common.toNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString())));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousResult").getAsString()).endsWith(")"));
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Result").setString(" = " + gdjs.evtTools.common.toString(gdjs.evtTools.common.toNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousResult").getAsString()) + gdjs.evtTools.common.toNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString())));
}
}

}


};gdjs.CopyCode.eventsList25 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousResult").getAsString()).endsWith(")"));
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Result").setString(" = " + gdjs.evtTools.common.toString(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousResult").getAsString(), 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousResult").getAsString()) - 2)) - gdjs.evtTools.common.toNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString())));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousResult").getAsString()).endsWith(")"));
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Result").setString(" = " + gdjs.evtTools.common.toString(gdjs.evtTools.common.toNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousResult").getAsString()) - gdjs.evtTools.common.toNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString())));
}
}

}


};gdjs.CopyCode.eventsList26 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousResult").getAsString()).endsWith(")"));
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Result").setString(" = " + gdjs.evtTools.common.toString(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousResult").getAsString(), 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousResult").getAsString()) - 2)) * gdjs.evtTools.common.toNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString())));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousResult").getAsString()).endsWith(")"));
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Result").setString(" = " + gdjs.evtTools.common.toString(gdjs.evtTools.common.toNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousResult").getAsString()) * gdjs.evtTools.common.toNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString())));
}
}

}


};gdjs.CopyCode.eventsList27 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousResult").getAsString()).endsWith(")"));
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Result").setString(" = " + gdjs.evtTools.common.toString(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousResult").getAsString(), 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousResult").getAsString()) - 2)) / gdjs.evtTools.common.toNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString())));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousResult").getAsString()).endsWith(")"));
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Result").setString(" = " + gdjs.evtTools.common.toString(gdjs.evtTools.common.toNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousResult").getAsString()) / gdjs.evtTools.common.toNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString())));
}
}

}


};gdjs.CopyCode.eventsList28 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").getAsString() == "+");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CopyCode.eventsList24(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").getAsString() == "-");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CopyCode.eventsList25(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").getAsString() == "*");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CopyCode.eventsList26(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").getAsString() == "/");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CopyCode.eventsList27(runtimeScene);} //End of subevents
}

}


};gdjs.CopyCode.eventsList29 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString() != "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString() != "-");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousResult").getAsString() != "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").getAsString() != "");
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CopyCode.eventsList28(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString() == "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strFindLast(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString(), ".") == 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Result").setString("");
}
}

}


};gdjs.CopyCode.eventsList30 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.CopyCode.GDButtonObjects3, gdjs.CopyCode.GDButtonObjects4);

gdjs.copyArray(runtimeScene.getObjects("ButtonFlashSP"), gdjs.CopyCode.GDButtonFlashSPObjects4);
{for(var i = 0, len = gdjs.CopyCode.GDButtonFlashSPObjects4.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonFlashSPObjects4[i].setFillColor("0;0;0");
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonFlashSPObjects4.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonFlashSPObjects4[i].setFillOpacity(255);
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonFlashSPObjects4.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonFlashSPObjects4[i].setOutlineOpacity(0);
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonFlashSPObjects4.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonFlashSPObjects4[i].drawRectangle((( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getPointX("")), (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getPointY("")), (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getPointX("")) + (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getWidth()), (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getPointY("")) + (( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getHeight()));
}
}
}

}


{


gdjs.CopyCode.eventsList4(runtimeScene);
}


{


gdjs.CopyCode.eventsList9(runtimeScene);
}


{


gdjs.CopyCode.eventsList15(runtimeScene);
}


{


gdjs.CopyCode.eventsList21(runtimeScene);
}


{


gdjs.CopyCode.eventsList23(runtimeScene);
}


{


gdjs.CopyCode.eventsList29(runtimeScene);
}


};gdjs.CopyCode.eventsList31 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects3[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects3[k] = gdjs.CopyCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24786516);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sound\\Click.aac", false, 100, 1);
}
{gdjs.deviceVibration.startVibration(125);
}

{ //Subevents
gdjs.CopyCode.eventsList30(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("InputFont"), gdjs.CopyCode.GDInputFontObjects2);
{for(var i = 0, len = gdjs.CopyCode.GDInputFontObjects2.length ;i < len;++i) {
    gdjs.CopyCode.GDInputFontObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").getAsString() + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ParenthesesL").getAsString() + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString() + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ParenthesesR").getAsString());
}
}
}

}


};gdjs.CopyCode.mapOfGDgdjs_9546CopyCode_9546GDDebugTextObjects2Objects = Hashtable.newFrom({"DebugText": gdjs.CopyCode.GDDebugTextObjects2});
gdjs.CopyCode.eventsList32 = function(runtimeScene) {

{


gdjs.CopyCode.eventsList3(runtimeScene);
}


{


gdjs.CopyCode.eventsList31(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("OutputFont"), gdjs.CopyCode.GDOutputFontObjects2);
{for(var i = 0, len = gdjs.CopyCode.GDOutputFontObjects2.length ;i < len;++i) {
    gdjs.CopyCode.GDOutputFontObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").getAsString() + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ParenthesesL").getAsString() + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString() + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ParenthesesR").getAsString() + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Result").getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.CopyCode.GDDebugTextObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.CopyCode.mapOfGDgdjs_9546CopyCode_9546GDDebugTextObjects2Objects, 1, 1, "");
}
{for(var i = 0, len = gdjs.CopyCode.GDDebugTextObjects2.length ;i < len;++i) {
    gdjs.CopyCode.GDDebugTextObjects2[i].getBehavior("Scale").setScale(0.5);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DebugText"), gdjs.CopyCode.GDDebugTextObjects1);
{for(var i = 0, len = gdjs.CopyCode.GDDebugTextObjects1.length ;i < len;++i) {
    gdjs.CopyCode.GDDebugTextObjects1[i].getBehavior("Text").setText("Input " + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CurrentInput").getAsString() + "\nOutput " + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").getAsString() + "\nLength " + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString() + "\nOperator " + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Operator").getAsString() + "\nPrevInput " + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousInput").getAsString() + "\nLength " + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString() + "\nPrevResult " + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PreviousResult").getAsString() + "\nLast . " + gdjs.evtTools.common.toString(gdjs.evtTools.string.strFindLast(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString(), ".")) + "\nResult " + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Result").getAsString() + "\nz " + gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").getAsString(), gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Text").getAsString()) - gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString(), gdjs.evtTools.string.strFindLast(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString(), ".") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString()) - gdjs.evtTools.string.strFindLast(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString(), ".") - 1)) - 1, gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString(), gdjs.evtTools.string.strFindLast(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString(), ".") + 1, gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString()) - gdjs.evtTools.string.strFindLast(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Output").getChild("Length").getAsString(), ".") - 1))));
}
}
}

}


};gdjs.CopyCode.eventsList33 = function(runtimeScene) {

};gdjs.CopyCode.eventsList34 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonFont"), gdjs.CopyCode.GDButtonFontObjects3);

for (gdjs.CopyCode.forEachIndex4 = 0;gdjs.CopyCode.forEachIndex4 < gdjs.CopyCode.GDButtonFontObjects3.length;++gdjs.CopyCode.forEachIndex4) {
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects4);
gdjs.CopyCode.GDButtonFontObjects4.length = 0;


gdjs.CopyCode.forEachTemporary4 = gdjs.CopyCode.GDButtonFontObjects3[gdjs.CopyCode.forEachIndex4];
gdjs.CopyCode.GDButtonFontObjects4.push(gdjs.CopyCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects4.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects4[i].getVariableString(gdjs.CopyCode.GDButtonObjects4[i].getVariables().getFromIndex(0)) == (( gdjs.CopyCode.GDButtonFontObjects4.length === 0 ) ? "" :gdjs.CopyCode.GDButtonFontObjects4[0].getBehavior("Text").getText()) ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects4[k] = gdjs.CopyCode.GDButtonObjects4[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects4.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.CopyCode.GDButtonFontObjects4.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonFontObjects4[i].setCenterPositionInScene((( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getCenterXInScene()),(( gdjs.CopyCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.CopyCode.GDButtonObjects4[0].getCenterYInScene()) - 10);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects3[i].getVariableString(gdjs.CopyCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == "SYS" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects3[k] = gdjs.CopyCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].getBehavior("Resizable").setSize((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5) * 2, (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9));
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9) * 5);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects3[i].getVariableString(gdjs.CopyCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == "C" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects3[k] = gdjs.CopyCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].getBehavior("Resizable").setSize((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5), (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9));
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5) * 2,gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9) * 5);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects3[i].getVariableString(gdjs.CopyCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == "<" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects3[k] = gdjs.CopyCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].getBehavior("Resizable").setSize((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5) * 2, (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9));
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5) * 3,gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9) * 5);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects3[i].getVariableString(gdjs.CopyCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == "/" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects3[k] = gdjs.CopyCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].getBehavior("Resizable").setSize((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5), (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9));
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5) * 3,gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9) * 4);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects3[i].getVariableString(gdjs.CopyCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == "*" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects3[k] = gdjs.CopyCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].getBehavior("Resizable").setSize((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5), (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9));
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5) * 3,gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9) * 3);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects3[i].getVariableString(gdjs.CopyCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == "$" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects3[k] = gdjs.CopyCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].getBehavior("Resizable").setSize((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5), (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9));
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5) * 4,gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9) * 4);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects3[i].getVariableString(gdjs.CopyCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == "-" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects3[k] = gdjs.CopyCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].getBehavior("Resizable").setSize((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5), (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9));
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5) * 3,gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9) * 2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects3[i].getVariableString(gdjs.CopyCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == "+" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects3[k] = gdjs.CopyCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].getBehavior("Resizable").setSize((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5), (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9) * 2);
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5) * 4,gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9) * 3);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects3[i].getVariableString(gdjs.CopyCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == "=" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects3[k] = gdjs.CopyCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].getBehavior("Resizable").setSize((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5) * 2, (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9));
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5) * 3,gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects3[i].getVariableString(gdjs.CopyCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == "." ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects3[k] = gdjs.CopyCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].getBehavior("Resizable").setSize((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5), (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9));
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5) * 2,gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects3[i].getVariableString(gdjs.CopyCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == "0" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects3[k] = gdjs.CopyCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].getBehavior("Resizable").setSize((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5) * 2, (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9));
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects3[i].getVariableString(gdjs.CopyCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == "1" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects3[k] = gdjs.CopyCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].getBehavior("Resizable").setSize((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5), (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9));
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9) * 2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects3[i].getVariableString(gdjs.CopyCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == "2" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects3[k] = gdjs.CopyCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].getBehavior("Resizable").setSize((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5), (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9));
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5),gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9) * 2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects3[i].getVariableString(gdjs.CopyCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == "3" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects3[k] = gdjs.CopyCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].getBehavior("Resizable").setSize((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5), (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9));
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5) * 2,gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9) * 2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects3[i].getVariableString(gdjs.CopyCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == "4" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects3[k] = gdjs.CopyCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].getBehavior("Resizable").setSize((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5), (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9));
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9) * 3);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects3[i].getVariableString(gdjs.CopyCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == "5" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects3[k] = gdjs.CopyCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].getBehavior("Resizable").setSize((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5), (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9));
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5),gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9) * 3);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects3[i].getVariableString(gdjs.CopyCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == "6" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects3[k] = gdjs.CopyCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].getBehavior("Resizable").setSize((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5), (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9));
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5) * 2,gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9) * 3);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects3[i].getVariableString(gdjs.CopyCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == "7" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects3[k] = gdjs.CopyCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].getBehavior("Resizable").setSize((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5), (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9));
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9) * 4);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects3[i].getVariableString(gdjs.CopyCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == "8" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects3[k] = gdjs.CopyCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].getBehavior("Resizable").setSize((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5), (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9));
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects3[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5),gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9) * 4);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.CopyCode.GDButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDButtonObjects2.length;i<l;++i) {
    if ( gdjs.CopyCode.GDButtonObjects2[i].getVariableString(gdjs.CopyCode.GDButtonObjects2[i].getVariables().getFromIndex(0)) == "9" ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDButtonObjects2[k] = gdjs.CopyCode.GDButtonObjects2[i];
        ++k;
    }
}
gdjs.CopyCode.GDButtonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDButtonObjects2 */
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects2.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects2[i].getBehavior("Resizable").setSize((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5), (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9));
}
}
{for(var i = 0, len = gdjs.CopyCode.GDButtonObjects2.length ;i < len;++i) {
    gdjs.CopyCode.GDButtonObjects2[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 5) * 2,gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 9) * 4);
}
}
}

}


};gdjs.CopyCode.eventsList35 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.CopyCode.eventsList34(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("InputFont"), gdjs.CopyCode.GDInputFontObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDInputFontObjects2.length;i<l;++i) {
    if ( gdjs.CopyCode.GDInputFontObjects2[i].getBehavior("Scale").getScale() > 1 ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDInputFontObjects2[k] = gdjs.CopyCode.GDInputFontObjects2[i];
        ++k;
    }
}
gdjs.CopyCode.GDInputFontObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.CopyCode.GDInputFontObjects2.length === 0 ) ? 0 :gdjs.CopyCode.GDInputFontObjects2[0].getWidth()) > gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) - 40);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDInputFontObjects2 */
{for(var i = 0, len = gdjs.CopyCode.GDInputFontObjects2.length ;i < len;++i) {
    gdjs.CopyCode.GDInputFontObjects2[i].getBehavior("Scale").setScale(gdjs.CopyCode.GDInputFontObjects2[i].getBehavior("Scale").getScale() - (0.02));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("InputFont"), gdjs.CopyCode.GDInputFontObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CopyCode.GDInputFontObjects2.length;i<l;++i) {
    if ( gdjs.CopyCode.GDInputFontObjects2[i].getBehavior("Scale").getScale() < 1.5 ) {
        isConditionTrue_0 = true;
        gdjs.CopyCode.GDInputFontObjects2[k] = gdjs.CopyCode.GDInputFontObjects2[i];
        ++k;
    }
}
gdjs.CopyCode.GDInputFontObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.CopyCode.GDInputFontObjects2.length === 0 ) ? 0 :gdjs.CopyCode.GDInputFontObjects2[0].getWidth()) < gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) - 50);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CopyCode.GDInputFontObjects2 */
{for(var i = 0, len = gdjs.CopyCode.GDInputFontObjects2.length ;i < len;++i) {
    gdjs.CopyCode.GDInputFontObjects2[i].getBehavior("Scale").setScale(gdjs.CopyCode.GDInputFontObjects2[i].getBehavior("Scale").getScale() + (0.02));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("InputFont"), gdjs.CopyCode.GDInputFontObjects1);
gdjs.copyArray(runtimeScene.getObjects("OutputFont"), gdjs.CopyCode.GDOutputFontObjects1);
{for(var i = 0, len = gdjs.CopyCode.GDInputFontObjects1.length ;i < len;++i) {
    gdjs.CopyCode.GDInputFontObjects1[i].setPosition(gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, "", 0) - (gdjs.CopyCode.GDInputFontObjects1[i].getWidth()) - 20,gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) + 100);
}
}
{for(var i = 0, len = gdjs.CopyCode.GDOutputFontObjects1.length ;i < len;++i) {
    gdjs.CopyCode.GDOutputFontObjects1[i].setPosition(gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, "", 0) - (gdjs.CopyCode.GDOutputFontObjects1[i].getWidth()) - 20,gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) + 450);
}
}
}

}


};gdjs.CopyCode.eventsList36 = function(runtimeScene) {

{


gdjs.CopyCode.eventsList32(runtimeScene);
}


{


gdjs.CopyCode.eventsList35(runtimeScene);
}


};

gdjs.CopyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CopyCode.GDButtonObjects1.length = 0;
gdjs.CopyCode.GDButtonObjects2.length = 0;
gdjs.CopyCode.GDButtonObjects3.length = 0;
gdjs.CopyCode.GDButtonObjects4.length = 0;
gdjs.CopyCode.GDButtonObjects5.length = 0;
gdjs.CopyCode.GDButtonObjects6.length = 0;
gdjs.CopyCode.GDButtonObjects7.length = 0;
gdjs.CopyCode.GDButtonObjects8.length = 0;
gdjs.CopyCode.GDButtonFlashSPObjects1.length = 0;
gdjs.CopyCode.GDButtonFlashSPObjects2.length = 0;
gdjs.CopyCode.GDButtonFlashSPObjects3.length = 0;
gdjs.CopyCode.GDButtonFlashSPObjects4.length = 0;
gdjs.CopyCode.GDButtonFlashSPObjects5.length = 0;
gdjs.CopyCode.GDButtonFlashSPObjects6.length = 0;
gdjs.CopyCode.GDButtonFlashSPObjects7.length = 0;
gdjs.CopyCode.GDButtonFlashSPObjects8.length = 0;
gdjs.CopyCode.GDEffectSPObjects1.length = 0;
gdjs.CopyCode.GDEffectSPObjects2.length = 0;
gdjs.CopyCode.GDEffectSPObjects3.length = 0;
gdjs.CopyCode.GDEffectSPObjects4.length = 0;
gdjs.CopyCode.GDEffectSPObjects5.length = 0;
gdjs.CopyCode.GDEffectSPObjects6.length = 0;
gdjs.CopyCode.GDEffectSPObjects7.length = 0;
gdjs.CopyCode.GDEffectSPObjects8.length = 0;
gdjs.CopyCode.GDInputFontObjects1.length = 0;
gdjs.CopyCode.GDInputFontObjects2.length = 0;
gdjs.CopyCode.GDInputFontObjects3.length = 0;
gdjs.CopyCode.GDInputFontObjects4.length = 0;
gdjs.CopyCode.GDInputFontObjects5.length = 0;
gdjs.CopyCode.GDInputFontObjects6.length = 0;
gdjs.CopyCode.GDInputFontObjects7.length = 0;
gdjs.CopyCode.GDInputFontObjects8.length = 0;
gdjs.CopyCode.GDEffectSP2Objects1.length = 0;
gdjs.CopyCode.GDEffectSP2Objects2.length = 0;
gdjs.CopyCode.GDEffectSP2Objects3.length = 0;
gdjs.CopyCode.GDEffectSP2Objects4.length = 0;
gdjs.CopyCode.GDEffectSP2Objects5.length = 0;
gdjs.CopyCode.GDEffectSP2Objects6.length = 0;
gdjs.CopyCode.GDEffectSP2Objects7.length = 0;
gdjs.CopyCode.GDEffectSP2Objects8.length = 0;
gdjs.CopyCode.GDButtonFontObjects1.length = 0;
gdjs.CopyCode.GDButtonFontObjects2.length = 0;
gdjs.CopyCode.GDButtonFontObjects3.length = 0;
gdjs.CopyCode.GDButtonFontObjects4.length = 0;
gdjs.CopyCode.GDButtonFontObjects5.length = 0;
gdjs.CopyCode.GDButtonFontObjects6.length = 0;
gdjs.CopyCode.GDButtonFontObjects7.length = 0;
gdjs.CopyCode.GDButtonFontObjects8.length = 0;
gdjs.CopyCode.GDOutputFontObjects1.length = 0;
gdjs.CopyCode.GDOutputFontObjects2.length = 0;
gdjs.CopyCode.GDOutputFontObjects3.length = 0;
gdjs.CopyCode.GDOutputFontObjects4.length = 0;
gdjs.CopyCode.GDOutputFontObjects5.length = 0;
gdjs.CopyCode.GDOutputFontObjects6.length = 0;
gdjs.CopyCode.GDOutputFontObjects7.length = 0;
gdjs.CopyCode.GDOutputFontObjects8.length = 0;
gdjs.CopyCode.GDDebugTextObjects1.length = 0;
gdjs.CopyCode.GDDebugTextObjects2.length = 0;
gdjs.CopyCode.GDDebugTextObjects3.length = 0;
gdjs.CopyCode.GDDebugTextObjects4.length = 0;
gdjs.CopyCode.GDDebugTextObjects5.length = 0;
gdjs.CopyCode.GDDebugTextObjects6.length = 0;
gdjs.CopyCode.GDDebugTextObjects7.length = 0;
gdjs.CopyCode.GDDebugTextObjects8.length = 0;

gdjs.CopyCode.eventsList36(runtimeScene);
gdjs.CopyCode.GDButtonObjects1.length = 0;
gdjs.CopyCode.GDButtonObjects2.length = 0;
gdjs.CopyCode.GDButtonObjects3.length = 0;
gdjs.CopyCode.GDButtonObjects4.length = 0;
gdjs.CopyCode.GDButtonObjects5.length = 0;
gdjs.CopyCode.GDButtonObjects6.length = 0;
gdjs.CopyCode.GDButtonObjects7.length = 0;
gdjs.CopyCode.GDButtonObjects8.length = 0;
gdjs.CopyCode.GDButtonFlashSPObjects1.length = 0;
gdjs.CopyCode.GDButtonFlashSPObjects2.length = 0;
gdjs.CopyCode.GDButtonFlashSPObjects3.length = 0;
gdjs.CopyCode.GDButtonFlashSPObjects4.length = 0;
gdjs.CopyCode.GDButtonFlashSPObjects5.length = 0;
gdjs.CopyCode.GDButtonFlashSPObjects6.length = 0;
gdjs.CopyCode.GDButtonFlashSPObjects7.length = 0;
gdjs.CopyCode.GDButtonFlashSPObjects8.length = 0;
gdjs.CopyCode.GDEffectSPObjects1.length = 0;
gdjs.CopyCode.GDEffectSPObjects2.length = 0;
gdjs.CopyCode.GDEffectSPObjects3.length = 0;
gdjs.CopyCode.GDEffectSPObjects4.length = 0;
gdjs.CopyCode.GDEffectSPObjects5.length = 0;
gdjs.CopyCode.GDEffectSPObjects6.length = 0;
gdjs.CopyCode.GDEffectSPObjects7.length = 0;
gdjs.CopyCode.GDEffectSPObjects8.length = 0;
gdjs.CopyCode.GDInputFontObjects1.length = 0;
gdjs.CopyCode.GDInputFontObjects2.length = 0;
gdjs.CopyCode.GDInputFontObjects3.length = 0;
gdjs.CopyCode.GDInputFontObjects4.length = 0;
gdjs.CopyCode.GDInputFontObjects5.length = 0;
gdjs.CopyCode.GDInputFontObjects6.length = 0;
gdjs.CopyCode.GDInputFontObjects7.length = 0;
gdjs.CopyCode.GDInputFontObjects8.length = 0;
gdjs.CopyCode.GDEffectSP2Objects1.length = 0;
gdjs.CopyCode.GDEffectSP2Objects2.length = 0;
gdjs.CopyCode.GDEffectSP2Objects3.length = 0;
gdjs.CopyCode.GDEffectSP2Objects4.length = 0;
gdjs.CopyCode.GDEffectSP2Objects5.length = 0;
gdjs.CopyCode.GDEffectSP2Objects6.length = 0;
gdjs.CopyCode.GDEffectSP2Objects7.length = 0;
gdjs.CopyCode.GDEffectSP2Objects8.length = 0;
gdjs.CopyCode.GDButtonFontObjects1.length = 0;
gdjs.CopyCode.GDButtonFontObjects2.length = 0;
gdjs.CopyCode.GDButtonFontObjects3.length = 0;
gdjs.CopyCode.GDButtonFontObjects4.length = 0;
gdjs.CopyCode.GDButtonFontObjects5.length = 0;
gdjs.CopyCode.GDButtonFontObjects6.length = 0;
gdjs.CopyCode.GDButtonFontObjects7.length = 0;
gdjs.CopyCode.GDButtonFontObjects8.length = 0;
gdjs.CopyCode.GDOutputFontObjects1.length = 0;
gdjs.CopyCode.GDOutputFontObjects2.length = 0;
gdjs.CopyCode.GDOutputFontObjects3.length = 0;
gdjs.CopyCode.GDOutputFontObjects4.length = 0;
gdjs.CopyCode.GDOutputFontObjects5.length = 0;
gdjs.CopyCode.GDOutputFontObjects6.length = 0;
gdjs.CopyCode.GDOutputFontObjects7.length = 0;
gdjs.CopyCode.GDOutputFontObjects8.length = 0;
gdjs.CopyCode.GDDebugTextObjects1.length = 0;
gdjs.CopyCode.GDDebugTextObjects2.length = 0;
gdjs.CopyCode.GDDebugTextObjects3.length = 0;
gdjs.CopyCode.GDDebugTextObjects4.length = 0;
gdjs.CopyCode.GDDebugTextObjects5.length = 0;
gdjs.CopyCode.GDDebugTextObjects6.length = 0;
gdjs.CopyCode.GDDebugTextObjects7.length = 0;
gdjs.CopyCode.GDDebugTextObjects8.length = 0;


return;

}

gdjs['CopyCode'] = gdjs.CopyCode;
