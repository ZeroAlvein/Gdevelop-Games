gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.idToCallbackMap = new Map();
gdjs.GameCode.GDButtonObjects1_1final = [];

gdjs.GameCode.GDButtonObjects2_1final = [];

gdjs.GameCode.forEachIndex2 = 0;

gdjs.GameCode.forEachIndex3 = 0;

gdjs.GameCode.forEachIndex4 = 0;

gdjs.GameCode.forEachIndex5 = 0;

gdjs.GameCode.forEachLimit2 = 0;

gdjs.GameCode.forEachLimit3 = 0;

gdjs.GameCode.forEachLimit4 = 0;

gdjs.GameCode.forEachLimit5 = 0;

gdjs.GameCode.forEachObjects2 = [];

gdjs.GameCode.forEachObjects3 = [];

gdjs.GameCode.forEachObjects4 = [];

gdjs.GameCode.forEachObjects5 = [];

gdjs.GameCode.forEachSortKeys2 = [];

gdjs.GameCode.forEachSortKeys3 = [];

gdjs.GameCode.forEachSortKeys4 = [];

gdjs.GameCode.forEachSortKeys5 = [];

gdjs.GameCode.forEachSorted2 = [];

gdjs.GameCode.forEachSorted3 = [];

gdjs.GameCode.forEachSorted4 = [];

gdjs.GameCode.forEachSorted5 = [];

gdjs.GameCode.forEachTemporary2 = null;

gdjs.GameCode.forEachTemporary3 = null;

gdjs.GameCode.forEachTemporary4 = null;

gdjs.GameCode.forEachTemporary5 = null;

gdjs.GameCode.forEachTotalCount2 = 0;

gdjs.GameCode.forEachTotalCount3 = 0;

gdjs.GameCode.forEachTotalCount4 = 0;

gdjs.GameCode.forEachTotalCount5 = 0;

gdjs.GameCode.GDCardsObjects1= [];
gdjs.GameCode.GDCardsObjects2= [];
gdjs.GameCode.GDCardsObjects3= [];
gdjs.GameCode.GDCardsObjects4= [];
gdjs.GameCode.GDCardsObjects5= [];
gdjs.GameCode.GDCardsObjects6= [];
gdjs.GameCode.GDCardsObjects7= [];
gdjs.GameCode.GDCardsObjects8= [];
gdjs.GameCode.GDTextObjects1= [];
gdjs.GameCode.GDTextObjects2= [];
gdjs.GameCode.GDTextObjects3= [];
gdjs.GameCode.GDTextObjects4= [];
gdjs.GameCode.GDTextObjects5= [];
gdjs.GameCode.GDTextObjects6= [];
gdjs.GameCode.GDTextObjects7= [];
gdjs.GameCode.GDTextObjects8= [];
gdjs.GameCode.GDHandObjects1= [];
gdjs.GameCode.GDHandObjects2= [];
gdjs.GameCode.GDHandObjects3= [];
gdjs.GameCode.GDHandObjects4= [];
gdjs.GameCode.GDHandObjects5= [];
gdjs.GameCode.GDHandObjects6= [];
gdjs.GameCode.GDHandObjects7= [];
gdjs.GameCode.GDHandObjects8= [];
gdjs.GameCode.GDButtonObjects1= [];
gdjs.GameCode.GDButtonObjects2= [];
gdjs.GameCode.GDButtonObjects3= [];
gdjs.GameCode.GDButtonObjects4= [];
gdjs.GameCode.GDButtonObjects5= [];
gdjs.GameCode.GDButtonObjects6= [];
gdjs.GameCode.GDButtonObjects7= [];
gdjs.GameCode.GDButtonObjects8= [];
gdjs.GameCode.GDColorPickerObjects1= [];
gdjs.GameCode.GDColorPickerObjects2= [];
gdjs.GameCode.GDColorPickerObjects3= [];
gdjs.GameCode.GDColorPickerObjects4= [];
gdjs.GameCode.GDColorPickerObjects5= [];
gdjs.GameCode.GDColorPickerObjects6= [];
gdjs.GameCode.GDColorPickerObjects7= [];
gdjs.GameCode.GDColorPickerObjects8= [];


gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTextObjects3Objects = Hashtable.newFrom({"Text": gdjs.GameCode.GDTextObjects3});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Tilde");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.GameCode.GDTextObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTextObjects3Objects, 1, 1, "");
}
{for(var i = 0, len = gdjs.GameCode.GDTextObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects3[i].setZOrder(999999);
}
}
{for(var i = 0, len = gdjs.GameCode.GDTextObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects3[i].returnVariable(gdjs.GameCode.GDTextObjects3[i].getVariables().getFromIndex(0)).setString("Debug");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.GameCode.GDTextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTextObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDTextObjects2[i].getVariableString(gdjs.GameCode.GDTextObjects2[i].getVariables().getFromIndex(0)) == "Debug" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTextObjects2[k] = gdjs.GameCode.GDTextObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDTextObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDTextObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}
}
{for(var i = 0, len = gdjs.GameCode.GDTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects2[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 10,gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) + 10);
}
}
}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.advancedWindow.maximize(true, runtimeScene);
}
}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, gdjs.evtTools.window.getWindowInnerWidth(), gdjs.evtTools.window.getWindowInnerHeight());
}
{gdjs.evtTools.window.setWindowSize(runtimeScene, gdjs.evtTools.window.getWindowInnerWidth(), gdjs.evtTools.window.getWindowInnerHeight(), true);
}
}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempScreenHeight").getAsNumber() == gdjs.evtTools.window.getWindowInnerHeight());
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempScreenWidth").getAsNumber() == gdjs.evtTools.window.getWindowInnerWidth());
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
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempScreenHeight").setNumber(gdjs.evtTools.window.getWindowInnerHeight());
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempScreenWidth").setNumber(gdjs.evtTools.window.getWindowInnerWidth());
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects1Objects = Hashtable.newFrom({"Cards": gdjs.GameCode.GDCardsObjects1});
gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.GameCode.GDCardsObjects1, gdjs.GameCode.GDCardsObjects2);

{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardMoveWaitTime").setNumber(0.2);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardSelectWaitTime").setNumber(0.1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CamCenterY").setNumber((( gdjs.GameCode.GDCardsObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCardsObjects2[0].getCenterYInScene()));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("DimColor").setString("100;100;100");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("HandFloatRange").setNumber(6);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("HandFloatSpeed").setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("FanTime").setNumber(0.35);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("FanHoldTime").setNumber(0.2);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("PickerGap").setNumber(20);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("PickStepTime").setNumber(0.2);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("ColorShowTime").setNumber(0.8);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("ReshuffleStep").setNumber(0.004);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("DrawHoldTime").setNumber(0.8);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(11).getChild("1").setNumber(gdjs.evtTools.common.mod(gdjs.random(100), 3));
}
{runtimeScene.getScene().getVariables().getFromIndex(11).getChild("2").setNumber(gdjs.evtTools.common.mod(gdjs.random(100), 3));
}
{runtimeScene.getScene().getVariables().getFromIndex(11).getChild("3").setNumber(gdjs.evtTools.common.mod(gdjs.random(100), 3));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("PlayerAIDecisionWaitTime").setNumber(0.2);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("PlayerAIDecisionRandomTime").setNumber(0.3);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.GameCode.GDCardsObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects1Objects, 0, 0, "");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").setNumber((( gdjs.GameCode.GDCardsObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCardsObjects1[0].getWidth()));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").setNumber((( gdjs.GameCode.GDCardsObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCardsObjects1[0].getHeight()));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CamCenterX").setNumber((( gdjs.GameCode.GDCardsObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCardsObjects1[0].getCenterXInScene()));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CamCenterY").setNumber((( gdjs.GameCode.GDCardsObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCardsObjects1[0].getCenterYInScene()));
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.GameCode.GDCardsObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCardsObjects1[0].getPointX("")) + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() * 3, "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.GameCode.GDCardsObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCardsObjects1[0].getCenterYInScene()), "", 0);
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

};gdjs.GameCode.eventsList8 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCardsObjects2 */

gdjs.GameCode.forEachObjects3.length = 0;
gdjs.GameCode.forEachObjects3.push.apply(gdjs.GameCode.forEachObjects3,gdjs.GameCode.GDCardsObjects2);
gdjs.GameCode.forEachTotalCount3 = gdjs.GameCode.forEachObjects3.length;
gdjs.GameCode.forEachSortKeys3.length = 0;
for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.forEachTotalCount3;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDCardsObjects3.length = 0;


gdjs.GameCode.GDCardsObjects3.push(gdjs.GameCode.forEachObjects3[gdjs.GameCode.forEachIndex3]);
gdjs.GameCode.forEachSortKeys3.push((( gdjs.GameCode.GDCardsObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDCardsObjects3[0].getZOrder()));
}
gdjs.GameCode.forEachSorted3.length = 0;
for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.forEachTotalCount3;++gdjs.GameCode.forEachIndex3) gdjs.GameCode.forEachSorted3.push(gdjs.GameCode.forEachIndex3);
gdjs.GameCode.forEachSorted3.sort(function(a, b) { return false ? gdjs.GameCode.forEachSortKeys3[b] - gdjs.GameCode.forEachSortKeys3[a] : gdjs.GameCode.forEachSortKeys3[a] - gdjs.GameCode.forEachSortKeys3[b]; });
for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.forEachSorted3.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDCardsObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.forEachObjects3[gdjs.GameCode.forEachSorted3[gdjs.GameCode.forEachIndex3]];
gdjs.GameCode.GDCardsObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() * 2) + ((runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() / 2) * gdjs.GameCode.localVariables[0].getFromIndex(0).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].getBehavior("Animation").setAnimationName("FrontFace");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].setAnimationFrame(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(0).getAsNumber() + gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(1).getAsNumber() * 16);
}
}
{gdjs.GameCode.localVariables[0].getFromIndex(0).add(1);
}
}
}

}


};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
gdjs.GameCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.GameCode.eventsList8(runtimeScene);} //End of subevents
}
gdjs.GameCode.localVariables.pop();

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CardsOnStart").setNumber(20);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "e");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects2[i].getVariableNumber(gdjs.GameCode.GDCardsObjects2[i].getVariables().getFromIndex(2)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects2[k] = gdjs.GameCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDButtonObjects2Objects = Hashtable.newFrom({"Button": gdjs.GameCode.GDButtonObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDButtonObjects3Objects = Hashtable.newFrom({"Button": gdjs.GameCode.GDButtonObjects3});
gdjs.GameCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.GameCode.GDButtonObjects3, gdjs.GameCode.GDButtonObjects4);

{for(var i = 0, len = gdjs.GameCode.GDButtonObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDButtonObjects4[i].hide();
}
}
}

}


};gdjs.GameCode.eventsList12 = function(runtimeScene) {

{


const repeatCount3 = 9;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.GameCode.GDButtonObjects3.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDButtonObjects3Objects, 1, 1, "");
}
{for(var i = 0, len = gdjs.GameCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDButtonObjects3[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.GameCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDButtonObjects3[i].returnVariable(gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0)).setNumber(gdjs.GameCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}
{gdjs.GameCode.localVariables[0].getFromIndex(0).add(1);
}

{ //Subevents: 
gdjs.GameCode.eventsList11(runtimeScene);} //Subevents end.
}
}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Height", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Spacing", variable);
}
gdjs.GameCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{gdjs.GameCode.localVariables[0].getFromIndex(1).setNumber(Math.round(gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 10 + 6));
}
{gdjs.GameCode.localVariables[0].getFromIndex(2).setNumber(1.04);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempHeight").setNumber(Math.round(gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("ButtonH").getAsNumber() * 5 - 20));
}

{ //Subevents
gdjs.GameCode.eventsList12(runtimeScene);} //End of subevents
}
gdjs.GameCode.localVariables.pop();

}


};gdjs.GameCode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getVariableNumber(gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) <= 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDButtonObjects3[i].setCenterPositionInScene(Math.round(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempMargin").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("ButtonW").getAsNumber() / 2 + gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0).getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempSpacing").getAsNumber() + (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonPosX").getAsNumber() / 20) * (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) - (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempMargin").getAsNumber() * 2) - (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("ButtonW").getAsNumber() + 2 * runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempSpacing").getAsNumber()))),runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempHeight").getAsNumber());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getVariableNumber(gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) > 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getVariableNumber(gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) <= 5 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDButtonObjects3[i].setCenterPositionInScene(Math.round(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempMargin").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("ButtonW").getAsNumber() / 2 + (gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0).getAsNumber() - 3) * runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempSpacing").getAsNumber() + (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonPosX").getAsNumber() / 20) * (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) - (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempMargin").getAsNumber() * 2) - (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("ButtonW").getAsNumber() + 2 * runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempSpacing").getAsNumber()))),Math.round(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempHeight").getAsNumber() + 2 + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("ButtonH").getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getVariableNumber(gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) > 5 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDButtonObjects3[i].setCenterPositionInScene(Math.round(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempMargin").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("ButtonW").getAsNumber() / 2 + (gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0).getAsNumber() - 6) * runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempSpacing").getAsNumber() + (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonPosX").getAsNumber() / 20) * (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) - (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempMargin").getAsNumber() * 2) - (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("ButtonW").getAsNumber() + 2 * runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempSpacing").getAsNumber()))),Math.round(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempHeight").getAsNumber() + 4 + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("ButtonH").getAsNumber() * 2));
}
}
}

}


};gdjs.GameCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDButtonObjects3, gdjs.GameCode.GDButtonObjects4);

gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.GameCode.GDTextObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTextObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDTextObjects4[i].getVariableString(gdjs.GameCode.GDTextObjects4[i].getVariables().getFromIndex(0)) == "ButtonNumber" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTextObjects4[k] = gdjs.GameCode.GDTextObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDTextObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTextObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDTextObjects4[i].getVariableNumber(gdjs.GameCode.GDTextObjects4[i].getVariables().getFromIndex(2)) == ((gdjs.GameCode.GDButtonObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDButtonObjects4[0].getVariables()).getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTextObjects4[k] = gdjs.GameCode.GDTextObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDTextObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDButtonObjects4 */
/* Reuse gdjs.GameCode.GDTextObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDTextObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects4[i].setCenterPositionInScene((( gdjs.GameCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDButtonObjects4[0].getCenterXInScene()) + 3,(( gdjs.GameCode.GDButtonObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDButtonObjects4[0].getCenterYInScene()) - 16);
}
}
{for(var i = 0, len = gdjs.GameCode.GDTextObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects4[i].getBehavior("Opacity").setOpacity(150);
}
}
}

}


};gdjs.GameCode.eventsList16 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDButtonObjects2 */

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDButtonObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDButtonObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDButtonObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDButtonObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.GameCode.eventsList15(runtimeScene);} //Subevents end.
}
}

}


};gdjs.GameCode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDButtonObjects2, gdjs.GameCode.GDButtonObjects3);

gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.GameCode.GDTextObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTextObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDTextObjects3[i].getVariableString(gdjs.GameCode.GDTextObjects3[i].getVariables().getFromIndex(0)) == "ButtonNumber" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTextObjects3[k] = gdjs.GameCode.GDTextObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDTextObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTextObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDTextObjects3[i].getVariableNumber(gdjs.GameCode.GDTextObjects3[i].getVariables().getFromIndex(2)) == ((gdjs.GameCode.GDButtonObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDButtonObjects3[0].getVariables()).getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTextObjects3[k] = gdjs.GameCode.GDTextObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDTextObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDButtonObjects3 */
/* Reuse gdjs.GameCode.GDTextObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDTextObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects3[i].setCenterPositionInScene((( gdjs.GameCode.GDButtonObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDButtonObjects3[0].getCenterXInScene()) + 3,(( gdjs.GameCode.GDButtonObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDButtonObjects3[0].getCenterYInScene()) - 6);
}
}
{for(var i = 0, len = gdjs.GameCode.GDTextObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects3[i].getBehavior("Opacity").setOpacity(200);
}
}
}

}


};gdjs.GameCode.eventsList18 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDButtonObjects1 */

for (gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDButtonObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDButtonObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDButtonObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDButtonObjects2.push(gdjs.GameCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.GameCode.eventsList17(runtimeScene);} //Subevents end.
}
}

}


};gdjs.GameCode.eventsList19 = function(runtimeScene) {

{

gdjs.GameCode.GDButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("ButtonState").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.GameCode.GDButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects3);
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getAnimationFrame() == runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonSkin").getAsNumber() * 2 ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDButtonObjects2_1final.indexOf(gdjs.GameCode.GDButtonObjects3[j]) === -1 )
            gdjs.GameCode.GDButtonObjects2_1final.push(gdjs.GameCode.GDButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDButtonObjects2_1final, gdjs.GameCode.GDButtonObjects2);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("ButtonState").getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects1[i].getAnimationFrame() == runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonSkin").getAsNumber() * 2 + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects1[k] = gdjs.GameCode.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.GameCode.GDButtonObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDButtonObjects2Objects, 1, 1, "");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("ButtonH").setNumber((( gdjs.GameCode.GDButtonObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDButtonObjects2[0].getHeight()));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("ButtonW").setNumber((( gdjs.GameCode.GDButtonObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDButtonObjects2[0].getWidth()));
}
{for(var i = 0, len = gdjs.GameCode.GDButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDButtonObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempFrame").getAsNumber() < 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempSpacing").setNumber(Math.round(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("ButtonW").getAsNumber() + 2));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempMargin").setNumber(20);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempHeight").setNumber(Math.round(gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("ButtonH").getAsNumber() * 5 + (20 - (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonPosY").getAsNumber() * 4))));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("TempFrame").add(1);
}

{ //Subevents
gdjs.GameCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("ButtonState").setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("ButtonState").setNumber(Math.max(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("ButtonState").getAsNumber() - 1, 0));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDButtonObjects2[i].getBehavior("ButtonFSM").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects2[k] = gdjs.GameCode.GDButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDButtonObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDButtonObjects2[i].setAnimationFrame(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonSkin").getAsNumber() * 2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects2[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects2[k] = gdjs.GameCode.GDButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDButtonObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDButtonObjects2[i].setAnimationFrame(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonSkin").getAsNumber() * 2 + 1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("ButtonState").setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0).getChild("ButtonState").add(1);
}
}

}


{


gdjs.GameCode.eventsList19(runtimeScene);
}


};gdjs.GameCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, gdjs.GameCode.localVariables[0].getFromIndex(0).getAsNumber(), null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.GameCode.localVariables[0].getFromIndex(0).getAsNumber(), "Left", "Any", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.GameCode.localVariables[0].getFromIndex(0).getAsNumber(), "Right", "Any", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").setNumber(gdjs.GameCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}

}


};gdjs.GameCode.eventsList22 = function(runtimeScene) {

{


const repeatCount3 = 4;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{
{gdjs.GameCode.localVariables[0].getFromIndex(0).add(1);
}

{ //Subevents: 
gdjs.GameCode.eventsList21(runtimeScene);} //Subevents end.
}
}

}


};gdjs.GameCode.eventsList23 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("ID", variable);
}
gdjs.GameCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.GameCode.eventsList22(runtimeScene);} //End of subevents
}
gdjs.GameCode.localVariables.pop();

}


};gdjs.GameCode.eventsList24 = function(runtimeScene) {

};gdjs.GameCode.eventsList25 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17634940);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Up").setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Up").sub(1);
}
}

}


};gdjs.GameCode.eventsList26 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17637140);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Down").setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Down").sub(1);
}
}

}


};gdjs.GameCode.eventsList27 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17641908);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Left").setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Left").sub(1);
}
}

}


};gdjs.GameCode.eventsList28 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17645372);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Right").setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Right").sub(1);
}
}

}


};gdjs.GameCode.eventsList29 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17648100);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button1").setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button1").sub(1);
}
}

}


};gdjs.GameCode.eventsList30 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17650892);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button3").setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button3").sub(1);
}
}

}


};gdjs.GameCode.eventsList31 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17653684);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Action").setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Action").sub(1);
}
}

}


};gdjs.GameCode.eventsList32 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17656476);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button7").setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button7").sub(1);
}
}

}


};gdjs.GameCode.eventsList33 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17659300);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button9").setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button9").sub(1);
}
}

}


};gdjs.GameCode.eventsList34 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Up").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "w"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad8"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Up", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Left", "Up", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Right", "Up", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getVariableNumber(gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDButtonObjects3[i].getAnimationFrame() == runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonSkin").getAsNumber() * 2 + 1) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList25(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Down").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "s"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad2"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Down", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Left", "Down", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Right", "Down", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getVariableNumber(gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDButtonObjects3[i].getAnimationFrame() == runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonSkin").getAsNumber() * 2 + 1) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList26(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Left").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "a"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad4"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Left", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Left", "Left", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Right", "Left", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getVariableNumber(gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDButtonObjects3[i].getAnimationFrame() == runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonSkin").getAsNumber() * 2 + 1) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList27(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Right").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "d"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad6"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Right", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Left", "Right", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Right", "Right", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getVariableNumber(gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDButtonObjects3[i].getAnimationFrame() == runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonSkin").getAsNumber() * 2 + 1) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList28(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button1").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "z"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad1"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Square", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getVariableNumber(gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDButtonObjects3[i].getAnimationFrame() == runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonSkin").getAsNumber() * 2 + 1) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList29(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button3").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "c"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad3"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Options", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getVariableNumber(gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDButtonObjects3[i].getAnimationFrame() == runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonSkin").getAsNumber() * 2 + 1) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList30(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Action").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad5"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Cross", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getVariableNumber(gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDButtonObjects3[i].getAnimationFrame() == runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonSkin").getAsNumber() * 2 + 1) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList31(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button7").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "q"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad7"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Triangle", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getVariableNumber(gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDButtonObjects3[i].getAnimationFrame() == runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonSkin").getAsNumber() * 2 + 1) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList32(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button9").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "e"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad9"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Circle", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects2[i].getVariableNumber(gdjs.GameCode.GDButtonObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects2[k] = gdjs.GameCode.GDButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDButtonObjects2[i].getAnimationFrame() == runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonSkin").getAsNumber() * 2 + 1) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDButtonObjects2[k] = gdjs.GameCode.GDButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects2.length = k;
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList33(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList35 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17666988);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Up").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Up").getAsNumber() < 3);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Up").add(1);
}
}

}


};gdjs.GameCode.eventsList36 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17671132);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Down").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Down").getAsNumber() < 3);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Down").add(1);
}
}

}


};gdjs.GameCode.eventsList37 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17675708);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Left").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Left").getAsNumber() < 3);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Left").add(1);
}
}

}


};gdjs.GameCode.eventsList38 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17679796);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Right").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Right").getAsNumber() < 3);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Right").add(1);
}
}

}


};gdjs.GameCode.eventsList39 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17682692);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button1").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button1").getAsNumber() < 3);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button1").add(1);
}
}

}


};gdjs.GameCode.eventsList40 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17686740);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button3").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button3").getAsNumber() < 3);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button3").add(1);
}
}

}


};gdjs.GameCode.eventsList41 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17376652);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Action").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button5").getAsNumber() < 3);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Action").add(1);
}
}

}


};gdjs.GameCode.eventsList42 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17694572);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button7").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button7").getAsNumber() < 3);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button7").add(1);
}
}

}


};gdjs.GameCode.eventsList43 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17698180);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button9").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button9").getAsNumber() < 3);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Button9").add(1);
}
}

}


};gdjs.GameCode.eventsList44 = function(runtimeScene) {

{

gdjs.GameCode.GDButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getVariableNumber(gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getAnimationFrame() == runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonSkin").getAsNumber() * 2 + 1 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDButtonObjects2_1final.indexOf(gdjs.GameCode.GDButtonObjects3[j]) === -1 )
            gdjs.GameCode.GDButtonObjects2_1final.push(gdjs.GameCode.GDButtonObjects3[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad8");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Up", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Left", "Up", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Right", "Up", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.GameCode.GDButtonObjects2_1final, gdjs.GameCode.GDButtonObjects2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList35(runtimeScene);} //End of subevents
}

}


{

gdjs.GameCode.GDButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getVariableNumber(gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 7 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getAnimationFrame() == runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonSkin").getAsNumber() * 2 + 1 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDButtonObjects2_1final.indexOf(gdjs.GameCode.GDButtonObjects3[j]) === -1 )
            gdjs.GameCode.GDButtonObjects2_1final.push(gdjs.GameCode.GDButtonObjects3[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad2");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Down", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Left", "Down", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Right", "Down", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.GameCode.GDButtonObjects2_1final, gdjs.GameCode.GDButtonObjects2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList36(runtimeScene);} //End of subevents
}

}


{

gdjs.GameCode.GDButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getVariableNumber(gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getAnimationFrame() == runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonSkin").getAsNumber() * 2 + 1 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDButtonObjects2_1final.indexOf(gdjs.GameCode.GDButtonObjects3[j]) === -1 )
            gdjs.GameCode.GDButtonObjects2_1final.push(gdjs.GameCode.GDButtonObjects3[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad4");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Left", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Left", "Left", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Right", "Left", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.GameCode.GDButtonObjects2_1final, gdjs.GameCode.GDButtonObjects2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList37(runtimeScene);} //End of subevents
}

}


{

gdjs.GameCode.GDButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getVariableNumber(gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getAnimationFrame() == runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonSkin").getAsNumber() * 2 + 1 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDButtonObjects2_1final.indexOf(gdjs.GameCode.GDButtonObjects3[j]) === -1 )
            gdjs.GameCode.GDButtonObjects2_1final.push(gdjs.GameCode.GDButtonObjects3[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad6");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Right", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Left", "Right", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Right", "Right", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.GameCode.GDButtonObjects2_1final, gdjs.GameCode.GDButtonObjects2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList38(runtimeScene);} //End of subevents
}

}


{

gdjs.GameCode.GDButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getVariableNumber(gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 6 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getAnimationFrame() == runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonSkin").getAsNumber() * 2 + 1 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDButtonObjects2_1final.indexOf(gdjs.GameCode.GDButtonObjects3[j]) === -1 )
            gdjs.GameCode.GDButtonObjects2_1final.push(gdjs.GameCode.GDButtonObjects3[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad1");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Square", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.GameCode.GDButtonObjects2_1final, gdjs.GameCode.GDButtonObjects2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList39(runtimeScene);} //End of subevents
}

}


{

gdjs.GameCode.GDButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getVariableNumber(gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 8 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getAnimationFrame() == runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonSkin").getAsNumber() * 2 + 1 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDButtonObjects2_1final.indexOf(gdjs.GameCode.GDButtonObjects3[j]) === -1 )
            gdjs.GameCode.GDButtonObjects2_1final.push(gdjs.GameCode.GDButtonObjects3[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad3");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Options", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.GameCode.GDButtonObjects2_1final, gdjs.GameCode.GDButtonObjects2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList40(runtimeScene);} //End of subevents
}

}


{

gdjs.GameCode.GDButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getVariableNumber(gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getAnimationFrame() == runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonSkin").getAsNumber() * 2 + 1 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDButtonObjects2_1final.indexOf(gdjs.GameCode.GDButtonObjects3[j]) === -1 )
            gdjs.GameCode.GDButtonObjects2_1final.push(gdjs.GameCode.GDButtonObjects3[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad5");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Cross", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.GameCode.GDButtonObjects2_1final, gdjs.GameCode.GDButtonObjects2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList41(runtimeScene);} //End of subevents
}

}


{

gdjs.GameCode.GDButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getVariableNumber(gdjs.GameCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects3[i].getAnimationFrame() == runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonSkin").getAsNumber() * 2 + 1 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDButtonObjects3[k] = gdjs.GameCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDButtonObjects2_1final.indexOf(gdjs.GameCode.GDButtonObjects3[j]) === -1 )
            gdjs.GameCode.GDButtonObjects2_1final.push(gdjs.GameCode.GDButtonObjects3[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad7");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Triangle", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.GameCode.GDButtonObjects2_1final, gdjs.GameCode.GDButtonObjects2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList42(runtimeScene);} //End of subevents
}

}


{

gdjs.GameCode.GDButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.GameCode.GDButtonObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects2[i].getVariableNumber(gdjs.GameCode.GDButtonObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDButtonObjects2[k] = gdjs.GameCode.GDButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDButtonObjects2[i].getAnimationFrame() == runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ButtonSkin").getAsNumber() * 2 + 1 ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDButtonObjects2[k] = gdjs.GameCode.GDButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDButtonObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDButtonObjects1_1final.indexOf(gdjs.GameCode.GDButtonObjects2[j]) === -1 )
            gdjs.GameCode.GDButtonObjects1_1final.push(gdjs.GameCode.GDButtonObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad9");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PadID").getAsNumber(), "Circle", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.GameCode.GDButtonObjects1_1final, gdjs.GameCode.GDButtonObjects1);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList43(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList45 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17624764);
}
if (isConditionTrue_0) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}
}

}


{


gdjs.GameCode.eventsList23(runtimeScene);
}


{


gdjs.GameCode.eventsList24(runtimeScene);
}


{


gdjs.GameCode.eventsList34(runtimeScene);
}


{


gdjs.GameCode.eventsList44(runtimeScene);
}


};gdjs.GameCode.eventsList46 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild(0).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild(1).setNumber(-1);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild(2).setNumber(-1);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild(3).setNumber(-1);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).getChild(1).setNumber(-1);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).getChild(2).setNumber(-1);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).getChild(3).setNumber(-1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Act").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PlayerCount").getAsNumber() > 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getChild(1).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(7).getChild(1).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Act").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Act").add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PlayerCount").getAsNumber() > 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getChild(2).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(7).getChild(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Act").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Act").add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PlayerCount").getAsNumber() > 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getChild(3).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(7).getChild(3).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Act").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Act").add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Act").getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild(1).setNumber(2);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild(2).setNumber(2);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild(3).setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Act").getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild(1).setNumber(1 + 2 * runtimeScene.getScene().getVariables().getFromIndex(7).getChild(1).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild(2).setNumber(1 + 2 * runtimeScene.getScene().getVariables().getFromIndex(7).getChild(2).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild(3).setNumber(1 + 2 * runtimeScene.getScene().getVariables().getFromIndex(7).getChild(3).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Act").getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild(1).setNumber(1 + runtimeScene.getScene().getVariables().getFromIndex(7).getChild(1).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild(2).setNumber(1 + runtimeScene.getScene().getVariables().getFromIndex(7).getChild(2).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild(3).setNumber(1 + runtimeScene.getScene().getVariables().getFromIndex(7).getChild(3).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getChild(1).getAsNumber() < 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild(1).setNumber(-1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getChild(2).getAsNumber() < 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild(2).setNumber(-1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getChild(3).getAsNumber() < 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild(3).setNumber(-1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getScene().getVariables().getFromIndex(6).getChild(1).getAsNumber() + 1) + (runtimeScene.getScene().getVariables().getFromIndex(6).getChild(2).getAsNumber() + 1) * 5 + (runtimeScene.getScene().getVariables().getFromIndex(6).getChild(3).getAsNumber() + 1) * 25 != runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LastSig").getAsNumber());
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LastSig").setNumber((runtimeScene.getScene().getVariables().getFromIndex(6).getChild(1).getAsNumber() + 1) + (runtimeScene.getScene().getVariables().getFromIndex(6).getChild(2).getAsNumber() + 1) * 5 + (runtimeScene.getScene().getVariables().getFromIndex(6).getChild(3).getAsNumber() + 1) * 25);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LayoutAll").setNumber(1);
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects7Objects = Hashtable.newFrom({"Cards": gdjs.GameCode.GDCardsObjects7});
gdjs.GameCode.eventsList47 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.GameCode.GDCardsObjects7.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects7Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects7.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects7[i].returnVariable(gdjs.GameCode.GDCardsObjects7[i].getVariables().getFromIndex(0)).setNumber(gdjs.GameCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects7.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects7[i].returnVariable(gdjs.GameCode.GDCardsObjects7[i].getVariables().getFromIndex(1)).setNumber(gdjs.GameCode.localVariables[0].getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects7.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects7[i].getBehavior("Animation").setAnimationName("BackFace");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects7.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects7[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects7.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects7[i].setAnimationFrame(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("BackFace").getAsNumber());
}
}
{gdjs.GameCode.localVariables[0].getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects7.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects7[i].returnVariable(gdjs.GameCode.GDCardsObjects7[i].getVariables().getFromIndex(3)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardIDAdv").getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardIDAdv").add(1);
}
}

}


};gdjs.GameCode.eventsList48 = function(runtimeScene) {

{


const repeatCount6 = 10;
for (let repeatIndex6 = 0;repeatIndex6 < repeatCount6;++repeatIndex6) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.GameCode.eventsList47(runtimeScene);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.GameCode.localVariables[0].getFromIndex(0).setNumber(0);
}
{gdjs.GameCode.localVariables[0].getFromIndex(1).add(1);
}
}

}


};gdjs.GameCode.eventsList49 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("AdvColor", variable);
}
gdjs.GameCode.localVariables.push(variables);
}
const repeatCount4 = 4;
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.GameCode.eventsList48(runtimeScene);} //Subevents end.
}
}
gdjs.GameCode.localVariables.pop();

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects7Objects = Hashtable.newFrom({"Cards": gdjs.GameCode.GDCardsObjects7});
gdjs.GameCode.eventsList50 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.GameCode.GDCardsObjects7.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects7Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects7.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects7[i].returnVariable(gdjs.GameCode.GDCardsObjects7[i].getVariables().getFromIndex(0)).setNumber(10 + gdjs.evtTools.common.trunc(gdjs.GameCode.localVariables[0].getFromIndex(0).getAsNumber() / 2));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects7.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects7[i].returnVariable(gdjs.GameCode.GDCardsObjects7[i].getVariables().getFromIndex(1)).setNumber(gdjs.GameCode.localVariables[0].getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects7.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects7[i].getBehavior("Animation").setAnimationName("BackFace");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects7.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects7[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects7.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects7[i].setAnimationFrame(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("BackFace").getAsNumber());
}
}
{gdjs.GameCode.localVariables[0].getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects7.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects7[i].returnVariable(gdjs.GameCode.GDCardsObjects7[i].getVariables().getFromIndex(3)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardIDAdv").getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardIDAdv").add(1);
}
}

}


};gdjs.GameCode.eventsList51 = function(runtimeScene) {

{


const repeatCount6 = 10;
for (let repeatIndex6 = 0;repeatIndex6 < repeatCount6;++repeatIndex6) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.GameCode.eventsList50(runtimeScene);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.GameCode.localVariables[0].getFromIndex(0).setNumber(0);
}
{gdjs.GameCode.localVariables[0].getFromIndex(1).add(1);
}
}

}


};gdjs.GameCode.eventsList52 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("AdvColor", variable);
}
gdjs.GameCode.localVariables.push(variables);
}
const repeatCount4 = 4;
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.GameCode.eventsList51(runtimeScene);} //Subevents end.
}
}
gdjs.GameCode.localVariables.pop();

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects5Objects = Hashtable.newFrom({"Cards": gdjs.GameCode.GDCardsObjects5});
gdjs.GameCode.eventsList53 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.GameCode.GDCardsObjects5.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects5Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].returnVariable(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(0)).setNumber(12);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].returnVariable(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(1)).setNumber(4);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].getBehavior("Animation").setAnimationName("BackFace");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].setAnimationFrame(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("BackFace").getAsNumber());
}
}
{gdjs.GameCode.localVariables[0].getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].returnVariable(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(3)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardIDAdv").getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardIDAdv").add(1);
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects4Objects = Hashtable.newFrom({"Cards": gdjs.GameCode.GDCardsObjects4});
gdjs.GameCode.eventsList54 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.GameCode.GDCardsObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects4Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(0)).setNumber(14);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(1)).setNumber(4);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].getBehavior("Animation").setAnimationName("BackFace");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].setAnimationFrame(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("BackFace").getAsNumber());
}
}
{gdjs.GameCode.localVariables[0].getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(3)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardIDAdv").getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardIDAdv").add(1);
}
}

}


};gdjs.GameCode.eventsList55 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("AdvColor", variable);
}
gdjs.GameCode.localVariables.push(variables);
}
const repeatCount4 = 4;
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.GameCode.eventsList53(runtimeScene);} //Subevents end.
}
}
gdjs.GameCode.localVariables.pop();

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("AdvColor", variable);
}
gdjs.GameCode.localVariables.push(variables);
}
const repeatCount3 = 4;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.GameCode.eventsList54(runtimeScene);} //Subevents end.
}
}
gdjs.GameCode.localVariables.pop();

}


};gdjs.GameCode.eventsList56 = function(runtimeScene) {

{


gdjs.GameCode.eventsList49(runtimeScene);
}


{


gdjs.GameCode.eventsList52(runtimeScene);
}


{


gdjs.GameCode.eventsList55(runtimeScene);
}


};gdjs.GameCode.eventsList57 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList56(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfEmptyGDCardsObjects = Hashtable.newFrom({"Cards": []});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects4Objects = Hashtable.newFrom({"Cards": gdjs.GameCode.GDCardsObjects4});
gdjs.GameCode.eventsList58 = function(runtimeScene) {

};gdjs.GameCode.eventsList59 = function(runtimeScene) {

{


const repeatCount4 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.GameCode.mapOfEmptyGDCardsObjects);
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects4[i].getBehavior("Opacity").getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects4[k] = gdjs.GameCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects4Objects);
}
if (isConditionTrue_0)
{
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].getBehavior("Opacity").setOpacity(254);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].setZOrder(gdjs.GameCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}
{gdjs.GameCode.localVariables[0].getFromIndex(0).add(1);
}
}
}

}


};gdjs.GameCode.eventsList60 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
gdjs.GameCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.GameCode.eventsList59(runtimeScene);} //End of subevents
}
gdjs.GameCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects2);
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


};gdjs.GameCode.eventsList61 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList60(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects6Objects = Hashtable.newFrom({"Cards": gdjs.GameCode.GDCardsObjects6});
gdjs.GameCode.eventsList62 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.GameCode.GDCardsObjects6.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects6Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects6.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects6[i].returnVariable(gdjs.GameCode.GDCardsObjects6[i].getVariables().getFromIndex(0)).setNumber(gdjs.GameCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects6.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects6[i].returnVariable(gdjs.GameCode.GDCardsObjects6[i].getVariables().getFromIndex(1)).setNumber(gdjs.GameCode.localVariables[0].getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects6.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects6[i].returnVariable(gdjs.GameCode.GDCardsObjects6[i].getVariables().getFromIndex(2)).setNumber(8);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects6.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects6[i].setZOrder(-100);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects6.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects6[i].getBehavior("Animation").setAnimationName("BackFace");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects6.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects6[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects6.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects6[i].setAnimationFrame(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("BackFace").getAsNumber());
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects6.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects6[i].hide();
}
}
{gdjs.GameCode.localVariables[0].getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects6.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects6[i].returnVariable(gdjs.GameCode.GDCardsObjects6[i].getVariables().getFromIndex(3)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardIDAdv").getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardIDAdv").add(1);
}
}

}


};gdjs.GameCode.eventsList63 = function(runtimeScene) {

{


const repeatCount5 = 10;
for (let repeatIndex5 = 0;repeatIndex5 < repeatCount5;++repeatIndex5) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.GameCode.eventsList62(runtimeScene);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.GameCode.localVariables[0].getFromIndex(0).setNumber(0);
}
{gdjs.GameCode.localVariables[0].getFromIndex(1).add(1);
}
}

}


};gdjs.GameCode.eventsList64 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("AdvColor", variable);
}
gdjs.GameCode.localVariables.push(variables);
}
const repeatCount3 = 4;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.GameCode.eventsList63(runtimeScene);} //Subevents end.
}
}
gdjs.GameCode.localVariables.pop();

}


};gdjs.GameCode.eventsList65 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList64(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList66 = function(runtimeScene) {

};gdjs.GameCode.eventsList67 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCardsObjects3 */

gdjs.GameCode.forEachObjects4.length = 0;
gdjs.GameCode.forEachObjects4.push.apply(gdjs.GameCode.forEachObjects4,gdjs.GameCode.GDCardsObjects3);
gdjs.GameCode.forEachTotalCount4 = gdjs.GameCode.forEachObjects4.length;
gdjs.GameCode.forEachSortKeys4.length = 0;
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachTotalCount4;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDCardsObjects4.length = 0;


gdjs.GameCode.GDCardsObjects4.push(gdjs.GameCode.forEachObjects4[gdjs.GameCode.forEachIndex4]);
gdjs.GameCode.forEachSortKeys4.push((( gdjs.GameCode.GDCardsObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCardsObjects4[0].getZOrder()));
}
gdjs.GameCode.forEachSorted4.length = 0;
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachTotalCount4;++gdjs.GameCode.forEachIndex4) gdjs.GameCode.forEachSorted4.push(gdjs.GameCode.forEachIndex4);
gdjs.GameCode.forEachSorted4.sort(function(a, b) { return true ? gdjs.GameCode.forEachSortKeys4[b] - gdjs.GameCode.forEachSortKeys4[a] : gdjs.GameCode.forEachSortKeys4[a] - gdjs.GameCode.forEachSortKeys4[b]; });
gdjs.GameCode.forEachLimit4 = runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CardsOnStart").getAsNumber();
if (gdjs.GameCode.forEachLimit4 >= 0 && gdjs.GameCode.forEachSorted4.length > gdjs.GameCode.forEachLimit4) gdjs.GameCode.forEachSorted4.length = gdjs.GameCode.forEachLimit4;
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachSorted4.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDCardsObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.forEachObjects4[gdjs.GameCode.forEachSorted4[gdjs.GameCode.forEachIndex4]];
gdjs.GameCode.GDCardsObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(2)).setNumber(-1);
}
}
}
}

}


};gdjs.GameCode.eventsList68 = function(runtimeScene) {

};gdjs.GameCode.eventsList69 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCardsObjects3 */

gdjs.GameCode.forEachObjects4.length = 0;
gdjs.GameCode.forEachObjects4.push.apply(gdjs.GameCode.forEachObjects4,gdjs.GameCode.GDCardsObjects3);
gdjs.GameCode.forEachTotalCount4 = gdjs.GameCode.forEachObjects4.length;
gdjs.GameCode.forEachSortKeys4.length = 0;
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachTotalCount4;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDCardsObjects4.length = 0;


gdjs.GameCode.GDCardsObjects4.push(gdjs.GameCode.forEachObjects4[gdjs.GameCode.forEachIndex4]);
gdjs.GameCode.forEachSortKeys4.push((( gdjs.GameCode.GDCardsObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCardsObjects4[0].getZOrder()));
}
gdjs.GameCode.forEachSorted4.length = 0;
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachTotalCount4;++gdjs.GameCode.forEachIndex4) gdjs.GameCode.forEachSorted4.push(gdjs.GameCode.forEachIndex4);
gdjs.GameCode.forEachSorted4.sort(function(a, b) { return true ? gdjs.GameCode.forEachSortKeys4[b] - gdjs.GameCode.forEachSortKeys4[a] : gdjs.GameCode.forEachSortKeys4[a] - gdjs.GameCode.forEachSortKeys4[b]; });
gdjs.GameCode.forEachLimit4 = runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CardsOnStart").getAsNumber();
if (gdjs.GameCode.forEachLimit4 >= 0 && gdjs.GameCode.forEachSorted4.length > gdjs.GameCode.forEachLimit4) gdjs.GameCode.forEachSorted4.length = gdjs.GameCode.forEachLimit4;
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachSorted4.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDCardsObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.forEachObjects4[gdjs.GameCode.forEachSorted4[gdjs.GameCode.forEachIndex4]];
gdjs.GameCode.GDCardsObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(2)).setNumber(-2);
}
}
}
}

}


};gdjs.GameCode.eventsList70 = function(runtimeScene) {

};gdjs.GameCode.eventsList71 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCardsObjects3 */

gdjs.GameCode.forEachObjects4.length = 0;
gdjs.GameCode.forEachObjects4.push.apply(gdjs.GameCode.forEachObjects4,gdjs.GameCode.GDCardsObjects3);
gdjs.GameCode.forEachTotalCount4 = gdjs.GameCode.forEachObjects4.length;
gdjs.GameCode.forEachSortKeys4.length = 0;
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachTotalCount4;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDCardsObjects4.length = 0;


gdjs.GameCode.GDCardsObjects4.push(gdjs.GameCode.forEachObjects4[gdjs.GameCode.forEachIndex4]);
gdjs.GameCode.forEachSortKeys4.push((( gdjs.GameCode.GDCardsObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCardsObjects4[0].getZOrder()));
}
gdjs.GameCode.forEachSorted4.length = 0;
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachTotalCount4;++gdjs.GameCode.forEachIndex4) gdjs.GameCode.forEachSorted4.push(gdjs.GameCode.forEachIndex4);
gdjs.GameCode.forEachSorted4.sort(function(a, b) { return true ? gdjs.GameCode.forEachSortKeys4[b] - gdjs.GameCode.forEachSortKeys4[a] : gdjs.GameCode.forEachSortKeys4[a] - gdjs.GameCode.forEachSortKeys4[b]; });
gdjs.GameCode.forEachLimit4 = runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CardsOnStart").getAsNumber();
if (gdjs.GameCode.forEachLimit4 >= 0 && gdjs.GameCode.forEachSorted4.length > gdjs.GameCode.forEachLimit4) gdjs.GameCode.forEachSorted4.length = gdjs.GameCode.forEachLimit4;
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachSorted4.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDCardsObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.forEachObjects4[gdjs.GameCode.forEachSorted4[gdjs.GameCode.forEachIndex4]];
gdjs.GameCode.GDCardsObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(2)).setNumber(-3);
}
}
}
}

}


};gdjs.GameCode.eventsList72 = function(runtimeScene) {

};gdjs.GameCode.eventsList73 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCardsObjects2 */

gdjs.GameCode.forEachObjects3.length = 0;
gdjs.GameCode.forEachObjects3.push.apply(gdjs.GameCode.forEachObjects3,gdjs.GameCode.GDCardsObjects2);
gdjs.GameCode.forEachTotalCount3 = gdjs.GameCode.forEachObjects3.length;
gdjs.GameCode.forEachSortKeys3.length = 0;
for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.forEachTotalCount3;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDCardsObjects3.length = 0;


gdjs.GameCode.GDCardsObjects3.push(gdjs.GameCode.forEachObjects3[gdjs.GameCode.forEachIndex3]);
gdjs.GameCode.forEachSortKeys3.push((( gdjs.GameCode.GDCardsObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDCardsObjects3[0].getZOrder()));
}
gdjs.GameCode.forEachSorted3.length = 0;
for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.forEachTotalCount3;++gdjs.GameCode.forEachIndex3) gdjs.GameCode.forEachSorted3.push(gdjs.GameCode.forEachIndex3);
gdjs.GameCode.forEachSorted3.sort(function(a, b) { return true ? gdjs.GameCode.forEachSortKeys3[b] - gdjs.GameCode.forEachSortKeys3[a] : gdjs.GameCode.forEachSortKeys3[a] - gdjs.GameCode.forEachSortKeys3[b]; });
gdjs.GameCode.forEachLimit3 = runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CardsOnStart").getAsNumber();
if (gdjs.GameCode.forEachLimit3 >= 0 && gdjs.GameCode.forEachSorted3.length > gdjs.GameCode.forEachLimit3) gdjs.GameCode.forEachSorted3.length = gdjs.GameCode.forEachLimit3;
for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.forEachSorted3.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDCardsObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.forEachObjects3[gdjs.GameCode.forEachSorted3[gdjs.GameCode.forEachIndex3]];
gdjs.GameCode.GDCardsObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].returnVariable(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)).setNumber(-4);
}
}
}
}

}


};gdjs.GameCode.eventsList74 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PlayerCount").getAsNumber() >= 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList67(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PlayerCount").getAsNumber() >= 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList69(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PlayerCount").getAsNumber() >= 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList71(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PlayerCount").getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects2[i].getVariableNumber(gdjs.GameCode.GDCardsObjects2[i].getVariables().getFromIndex(2)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects2[k] = gdjs.GameCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects2.length = k;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList73(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.asyncCallback17784380 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Cards"), gdjs.GameCode.GDCardsObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].getBehavior("Animation").setAnimationName("FrontFace");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].setAnimationFrame(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(0).getAsNumber() + gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(1).getAsNumber() * 16);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").sub(1);
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(17784380, gdjs.GameCode.asyncCallback17784380);
gdjs.GameCode.eventsList75 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDCardsObjects4) asyncObjectsList.addObject("Cards", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SortWaitTime").getAsNumber()), (runtimeScene) => (gdjs.GameCode.asyncCallback17784380(runtimeScene, asyncObjectsList)), 17784380, asyncObjectsList);
}
}

}


};gdjs.GameCode.eventsList76 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.GameCode.GDCardsObjects3, gdjs.GameCode.GDCardsObjects4);

{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].setZOrder(100 + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Adv").getAsNumber());
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].getBehavior("Tween").addObjectPositionTween2("Move", gdjs.evtTools.common.trunc(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("StartX").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("TempWidthSize").getAsNumber() * (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Adv").getAsNumber() - 1) - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() / 2), gdjs.evtTools.common.trunc(gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginY").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() / 2), "linear", runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SortWaitTime").getAsNumber(), false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(2)).setNumber(1);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Assets/Audio/RevealCard2.aac", false, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("VolSound").getAsNumber(), 1);
}

{ //Subevents
gdjs.GameCode.eventsList75(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList77 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCardsObjects2 */

gdjs.GameCode.forEachObjects3.length = 0;
gdjs.GameCode.forEachObjects3.push.apply(gdjs.GameCode.forEachObjects3,gdjs.GameCode.GDCardsObjects2);
gdjs.GameCode.forEachTotalCount3 = gdjs.GameCode.forEachObjects3.length;
gdjs.GameCode.forEachSortKeys3.length = 0;
for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.forEachTotalCount3;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDCardsObjects3.length = 0;


gdjs.GameCode.GDCardsObjects3.push(gdjs.GameCode.forEachObjects3[gdjs.GameCode.forEachIndex3]);
gdjs.GameCode.forEachSortKeys3.push(((gdjs.GameCode.GDCardsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects3[0].getVariables()).getFromIndex(0).getAsNumber() + ((gdjs.GameCode.GDCardsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects3[0].getVariables()).getFromIndex(1).getAsNumber() * 16);
}
gdjs.GameCode.forEachSorted3.length = 0;
for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.forEachTotalCount3;++gdjs.GameCode.forEachIndex3) gdjs.GameCode.forEachSorted3.push(gdjs.GameCode.forEachIndex3);
gdjs.GameCode.forEachSorted3.sort(function(a, b) { return false ? gdjs.GameCode.forEachSortKeys3[b] - gdjs.GameCode.forEachSortKeys3[a] : gdjs.GameCode.forEachSortKeys3[a] - gdjs.GameCode.forEachSortKeys3[b]; });
gdjs.GameCode.forEachLimit3 = 1;
if (gdjs.GameCode.forEachLimit3 >= 0 && gdjs.GameCode.forEachSorted3.length > gdjs.GameCode.forEachLimit3) gdjs.GameCode.forEachSorted3.length = gdjs.GameCode.forEachLimit3;
for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.forEachSorted3.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDCardsObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.forEachObjects3[gdjs.GameCode.forEachSorted3[gdjs.GameCode.forEachIndex3]];
gdjs.GameCode.GDCardsObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.GameCode.eventsList76(runtimeScene);} //Subevents end.
}
}

}


};gdjs.GameCode.eventsList78 = function(runtimeScene) {

};gdjs.GameCode.asyncCallback17806524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").sub(1);
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(17806524, gdjs.GameCode.asyncCallback17806524);
gdjs.GameCode.eventsList79 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SortWaitTime").getAsNumber()), (runtimeScene) => (gdjs.GameCode.asyncCallback17806524(runtimeScene, asyncObjectsList)), 17806524, asyncObjectsList);
}
}

}


};gdjs.GameCode.eventsList80 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.GameCode.GDCardsObjects3, gdjs.GameCode.GDCardsObjects4);

{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].setZOrder(100 * (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SortTurn").getAsNumber() + 1) + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Adv").getAsNumber());
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].getBehavior("Tween").addObjectPositionTween2("Move", gdjs.evtTools.common.trunc(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("OX").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SX").getAsNumber() * (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Adv").getAsNumber() - 1) - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() / 2), gdjs.evtTools.common.trunc(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("OY").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SY").getAsNumber() * (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Adv").getAsNumber() - 1) - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() / 2), "linear", runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SortWaitTime").getAsNumber(), false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(2)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SortTurn").getAsNumber() + 1);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Assets/Audio/RevealCard2.aac", false, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("VolSound").getAsNumber(), 1);
}

{ //Subevents
gdjs.GameCode.eventsList79(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList81 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Seat").getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("OX").setNumber(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("GapH").getAsNumber() * (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("N").getAsNumber() - 1) / 2);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("OY").setNumber(gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginY").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SX").setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("GapH").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SY").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Seat").getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("OX").setNumber(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginX").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("OY").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("GapV").getAsNumber() * (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("N").getAsNumber() - 1) / 2);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SX").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SY").setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("GapV").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Seat").getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("OX").setNumber(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("GapH").getAsNumber() * (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("N").getAsNumber() - 1) / 2);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("OY").setNumber(gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginY").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SX").setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("GapH").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SY").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Seat").getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("OX").setNumber(gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginX").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("OY").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("GapV").getAsNumber() * (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("N").getAsNumber() - 1) / 2);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SX").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SY").setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("GapV").getAsNumber());
}
}

}


{

/* Reuse gdjs.GameCode.GDCardsObjects2 */

gdjs.GameCode.forEachObjects3.length = 0;
gdjs.GameCode.forEachObjects3.push.apply(gdjs.GameCode.forEachObjects3,gdjs.GameCode.GDCardsObjects2);
gdjs.GameCode.forEachTotalCount3 = gdjs.GameCode.forEachObjects3.length;
gdjs.GameCode.forEachSortKeys3.length = 0;
for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.forEachTotalCount3;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDCardsObjects3.length = 0;


gdjs.GameCode.GDCardsObjects3.push(gdjs.GameCode.forEachObjects3[gdjs.GameCode.forEachIndex3]);
gdjs.GameCode.forEachSortKeys3.push(((gdjs.GameCode.GDCardsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects3[0].getVariables()).getFromIndex(0).getAsNumber() + ((gdjs.GameCode.GDCardsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects3[0].getVariables()).getFromIndex(1).getAsNumber() * 16);
}
gdjs.GameCode.forEachSorted3.length = 0;
for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.forEachTotalCount3;++gdjs.GameCode.forEachIndex3) gdjs.GameCode.forEachSorted3.push(gdjs.GameCode.forEachIndex3);
gdjs.GameCode.forEachSorted3.sort(function(a, b) { return false ? gdjs.GameCode.forEachSortKeys3[b] - gdjs.GameCode.forEachSortKeys3[a] : gdjs.GameCode.forEachSortKeys3[a] - gdjs.GameCode.forEachSortKeys3[b]; });
gdjs.GameCode.forEachLimit3 = 1;
if (gdjs.GameCode.forEachLimit3 >= 0 && gdjs.GameCode.forEachSorted3.length > gdjs.GameCode.forEachLimit3) gdjs.GameCode.forEachSorted3.length = gdjs.GameCode.forEachLimit3;
for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.forEachSorted3.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDCardsObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.forEachObjects3[gdjs.GameCode.forEachSorted3[gdjs.GameCode.forEachIndex3]];
gdjs.GameCode.GDCardsObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.GameCode.eventsList80(runtimeScene);} //Subevents end.
}
}

}


};gdjs.GameCode.asyncCallback17816452 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Cards"), gdjs.GameCode.GDCardsObjects5);

{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").sub(1);
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].setZOrder(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Direction").setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PlayerCount").setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PlayerCount").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Color").setNumber(((gdjs.GameCode.GDCardsObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects5[0].getVariables()).getFromIndex(1).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Value").setNumber(((gdjs.GameCode.GDCardsObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects5[0].getVariables()).getFromIndex(0).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Draw").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Skip").setNumber(0);
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(17816452, gdjs.GameCode.asyncCallback17816452);
gdjs.GameCode.eventsList82 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDCardsObjects4) asyncObjectsList.addObject("Cards", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SortWaitTime").getAsNumber() / 2), (runtimeScene) => (gdjs.GameCode.asyncCallback17816452(runtimeScene, asyncObjectsList)), 17816452, asyncObjectsList);
}
}

}


};gdjs.GameCode.eventsList83 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.GameCode.GDCardsObjects4, gdjs.GameCode.GDCardsObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].getBehavior("Animation").setAnimationName("FrontFace");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].setAnimationFrame(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(0).getAsNumber() + gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(1).getAsNumber() * 16);
}
}
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.GameCode.eventsList82(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.GameCode.asyncCallback17814324 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Cards"), gdjs.GameCode.GDCardsObjects4);

{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].getBehavior("Tween").addObjectWidthTween2("Flip", runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber(), "linear", runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SortWaitTime").getAsNumber() / 2, false);
}
}

{ //Subevents
gdjs.GameCode.eventsList83(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(17814324, gdjs.GameCode.asyncCallback17814324);
gdjs.GameCode.eventsList84 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDCardsObjects3) asyncObjectsList.addObject("Cards", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SortWaitTime").getAsNumber() / 2), (runtimeScene) => (gdjs.GameCode.asyncCallback17814324(runtimeScene, asyncObjectsList)), 17814324, asyncObjectsList);
}
}

}


};gdjs.GameCode.eventsList85 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.GameCode.GDCardsObjects2, gdjs.GameCode.GDCardsObjects3);

{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].setZOrder(500);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].getBehavior("Tween").addObjectPositionTween2("Move", gdjs.evtTools.common.trunc(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CamCenterX").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() * 2), gdjs.evtTools.common.trunc(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CamCenterY").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() / 2), "linear", runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SortWaitTime").getAsNumber(), false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].getBehavior("Tween").addObjectWidthTween2("Flip", 0, "linear", runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SortWaitTime").getAsNumber() / 2, false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Assets/Audio/RevealCard2.aac", false, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("VolSound").getAsNumber(), 1);
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].returnVariable(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)).setNumber(9);
}
}

{ //Subevents
gdjs.GameCode.eventsList84(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList86 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCardsObjects1 */

gdjs.GameCode.forEachObjects2.length = 0;
gdjs.GameCode.forEachObjects2.push.apply(gdjs.GameCode.forEachObjects2,gdjs.GameCode.GDCardsObjects1);
gdjs.GameCode.forEachTotalCount2 = gdjs.GameCode.forEachObjects2.length;
gdjs.GameCode.forEachSortKeys2.length = 0;
for (gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachTotalCount2;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDCardsObjects2.length = 0;


gdjs.GameCode.GDCardsObjects2.push(gdjs.GameCode.forEachObjects2[gdjs.GameCode.forEachIndex2]);
gdjs.GameCode.forEachSortKeys2.push((( gdjs.GameCode.GDCardsObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCardsObjects2[0].getZOrder()));
}
gdjs.GameCode.forEachSorted2.length = 0;
for (gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachTotalCount2;++gdjs.GameCode.forEachIndex2) gdjs.GameCode.forEachSorted2.push(gdjs.GameCode.forEachIndex2);
gdjs.GameCode.forEachSorted2.sort(function(a, b) { return true ? gdjs.GameCode.forEachSortKeys2[b] - gdjs.GameCode.forEachSortKeys2[a] : gdjs.GameCode.forEachSortKeys2[a] - gdjs.GameCode.forEachSortKeys2[b]; });
gdjs.GameCode.forEachLimit2 = 1;
if (gdjs.GameCode.forEachLimit2 >= 0 && gdjs.GameCode.forEachSorted2.length > gdjs.GameCode.forEachLimit2) gdjs.GameCode.forEachSorted2.length = gdjs.GameCode.forEachLimit2;
for (gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachSorted2.length;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDCardsObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.forEachObjects2[gdjs.GameCode.forEachSorted2[gdjs.GameCode.forEachIndex2]];
gdjs.GameCode.GDCardsObjects2.push(gdjs.GameCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.GameCode.eventsList85(runtimeScene);} //Subevents end.
}
}

}


};gdjs.GameCode.eventsList87 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects1[i].getVariableNumber(gdjs.GameCode.GDCardsObjects1[i].getVariables().getFromIndex(2)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects1[k] = gdjs.GameCode.GDCardsObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects1[i].getVariableNumber(gdjs.GameCode.GDCardsObjects1[i].getVariables().getFromIndex(0)) < 10 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects1[k] = gdjs.GameCode.GDCardsObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList86(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList88 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Adv").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects2[i].getVariableNumber(gdjs.GameCode.GDCardsObjects2[i].getVariables().getFromIndex(2)) == -1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects2[k] = gdjs.GameCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList77(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.eventsList78(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Adv").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SortTurn").getAsNumber() >= 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects2[i].getVariableNumber(gdjs.GameCode.GDCardsObjects2[i].getVariables().getFromIndex(2)) == -((runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SortTurn").getAsNumber() + 1)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects2[k] = gdjs.GameCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects2.length = k;
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("N").setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CardsOnStart").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Seat").setNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SortTurn").getAsNumberOrString()).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("GapH").setNumber(Math.min(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() / 2, (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() * 7) / Math.max(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("N").getAsNumber() - 1, 1)));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("GapV").setNumber(Math.min(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() / 4, (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() * 1.5) / Math.max(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("N").getAsNumber() - 1, 1)));
}

{ //Subevents
gdjs.GameCode.eventsList81(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SortTurn").getAsNumber() == runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PlayerCount").getAsNumber() - 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Adv").getAsNumber() == runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CardsOnStart").getAsNumber());
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LastDealt").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SortTurn").getAsNumber() < runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PlayerCount").getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Adv").add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SortTurn").getAsNumber() < runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PlayerCount").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Adv").getAsNumber() > runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CardsOnStart").getAsNumber());
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Adv").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SortTurn").add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SortTurn").getAsNumber() == runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PlayerCount").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HandIntro").setNumber(1);
}

{ //Subevents
gdjs.GameCode.eventsList87(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList89 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("TempWidthSize").setNumber(Math.min(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() / 2, (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() * 7) / Math.max(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CardsOnStart").getAsNumber() - 1, 1)));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("TempHeightSize").setNumber(Math.min(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() / 4, (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() * 1.5) / Math.max(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CardsOnStart").getAsNumber() - 1, 1)));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginX").setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginY").setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() * 0.85);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("StartX").setNumber(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("TempWidthSize").getAsNumber() * (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CardsOnStart").getAsNumber() - 1) / 2);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("StartY").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("TempHeightSize").getAsNumber() * (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CardsOnStart").getAsNumber() - 1) / 2);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SortWaitTime").setNumber(0.5);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("FrameCounter").getAsNumber() == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList88(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList90 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").setNumber(-1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() == -1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Adv").getAsNumber() < runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CardsOnStart").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PlayerCount").getAsNumber() + 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("FrameCounter").setNumber(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("FrameCounter").getAsNumber() + 1, 3));
}

{ //Subevents
gdjs.GameCode.eventsList89(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList91 = function(runtimeScene) {

{


gdjs.GameCode.eventsList57(runtimeScene);
}


{


gdjs.GameCode.eventsList61(runtimeScene);
}


{


gdjs.GameCode.eventsList65(runtimeScene);
}


{


gdjs.GameCode.eventsList74(runtimeScene);
}


{


gdjs.GameCode.eventsList90(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDHandObjects2Objects = Hashtable.newFrom({"Hand": gdjs.GameCode.GDHandObjects2});
gdjs.GameCode.eventsList92 = function(runtimeScene) {

};gdjs.GameCode.eventsList93 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.GameCode.GDHandObjects2.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SortTurn").setNumber(0);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDHandObjects2Objects, 0, runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() * 1.5, "");
}
{for(var i = 0, len = gdjs.GameCode.GDHandObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHandObjects2[i].setZOrder(1000000);
}
}
{for(var i = 0, len = gdjs.GameCode.GDHandObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHandObjects2[i].getBehavior("Animation").pauseAnimation();
}
}
}

}


{


gdjs.GameCode.eventsList92(runtimeScene);
}


};gdjs.GameCode.eventsList94 = function(runtimeScene) {

};gdjs.GameCode.eventsList95 = function(runtimeScene) {

};gdjs.GameCode.eventsList96 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCardsObjects3 */

gdjs.GameCode.forEachObjects4.length = 0;
gdjs.GameCode.forEachObjects4.push.apply(gdjs.GameCode.forEachObjects4,gdjs.GameCode.GDCardsObjects3);
gdjs.GameCode.forEachTotalCount4 = gdjs.GameCode.forEachObjects4.length;
gdjs.GameCode.forEachSortKeys4.length = 0;
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachTotalCount4;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDCardsObjects4.length = 0;


gdjs.GameCode.GDCardsObjects4.push(gdjs.GameCode.forEachObjects4[gdjs.GameCode.forEachIndex4]);
gdjs.GameCode.forEachSortKeys4.push(((gdjs.GameCode.GDCardsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects4[0].getVariables()).getFromIndex(0).getAsNumber() + ((gdjs.GameCode.GDCardsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects4[0].getVariables()).getFromIndex(1).getAsNumber() * 16);
}
gdjs.GameCode.forEachSorted4.length = 0;
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachTotalCount4;++gdjs.GameCode.forEachIndex4) gdjs.GameCode.forEachSorted4.push(gdjs.GameCode.forEachIndex4);
gdjs.GameCode.forEachSorted4.sort(function(a, b) { return false ? gdjs.GameCode.forEachSortKeys4[b] - gdjs.GameCode.forEachSortKeys4[a] : gdjs.GameCode.forEachSortKeys4[a] - gdjs.GameCode.forEachSortKeys4[b]; });
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachSorted4.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDCardsObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.forEachObjects4[gdjs.GameCode.forEachSorted4[gdjs.GameCode.forEachIndex4]];
gdjs.GameCode.GDCardsObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().getFromIndex(8).getChild(gdjs.GameCode.localVariables[0].getFromIndex(0).getAsNumber()).getChild("Color").setNumber(((gdjs.GameCode.GDCardsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects4[0].getVariables()).getFromIndex(1).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(8).getChild(gdjs.GameCode.localVariables[0].getFromIndex(0).getAsNumber()).getChild("Value").setNumber(((gdjs.GameCode.GDCardsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects4[0].getVariables()).getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(7)).setNumber(gdjs.GameCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(5)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(6)).setNumber(0);
}
}
{gdjs.GameCode.localVariables[0].getFromIndex(0).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("HandCount").add(1);
}
}
}

}


};gdjs.GameCode.eventsList97 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
gdjs.GameCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList96(runtimeScene);} //End of subevents
}
gdjs.GameCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Hand").setNumber(gdjs.evtTools.common.trunc(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("HandCount").getAsNumber() / 2));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").add(1);
}
}

}


};gdjs.GameCode.eventsList98 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(8));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Hand").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Drew").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Timer").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("HandCount").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LayoutPlayer").setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1);
}

{ //Subevents
gdjs.GameCode.eventsList97(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList99 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber()).getAsNumber() > 0);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber()).sub(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(11);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber()).getAsNumber() <= 0);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(19);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("HandPlayer").setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber());
}
}

}


};gdjs.GameCode.eventsList100 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDCardsObjects3, gdjs.GameCode.GDCardsObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects4[i].getVariableNumber(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(1)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects4[k] = gdjs.GameCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(6)).setNumber(1);
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDCardsObjects3, gdjs.GameCode.GDCardsObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects4[i].getVariableNumber(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(1)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Color").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects4[k] = gdjs.GameCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(6)).setNumber(1);
}
}
}

}


{

/* Reuse gdjs.GameCode.GDCardsObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(0)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Value").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].returnVariable(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(6)).setNumber(1);
}
}
}

}


};gdjs.GameCode.eventsList101 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCardsObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(0)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Value").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].returnVariable(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(6)).setNumber(1);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects3Objects = Hashtable.newFrom({"Cards": gdjs.GameCode.GDCardsObjects3});
gdjs.GameCode.eventsList102 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].returnVariable(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(6)).setNumber(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Pending").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList100(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Pending").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList101(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(6)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Playable").setNumber(gdjs.evtTools.object.getPickedInstancesCount(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects3Objects));
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").add(1);
}
}

}


};gdjs.GameCode.eventsList103 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Playable").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Pending").setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Draw").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Skip").getAsNumber());
}

{ //Subevents
gdjs.GameCode.eventsList102(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList104 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Pending").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Playable").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Draw").getAsNumber() > 0);
}
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Need").setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Draw").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("ShowP").setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("ShowN").setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Draw").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Draw").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("AfterDraw").setNumber(11);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(4);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Pending").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Playable").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Skip").getAsNumber() > 0);
}
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber()).setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Skip").getAsNumber() - 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Skip").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(11);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Pending").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Playable").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Drew").getAsNumber() == 0);
}
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Need").setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Drew").setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("AfterDraw").setNumber(2);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(4);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Playable").getAsNumber() > 0);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(8);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Pending").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Playable").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Drew").getAsNumber() == 1);
}
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(11);
}
}

}


};gdjs.GameCode.eventsList105 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Req").setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Need").getAsNumber() + 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("DeckRet").setNumber(5);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(20);
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects4Objects = Hashtable.newFrom({"Cards": gdjs.GameCode.GDCardsObjects4});
gdjs.GameCode.asyncCallback17907956 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Shown").add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").sub(1);
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(17907956, gdjs.GameCode.asyncCallback17907956);
gdjs.GameCode.eventsList106 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardMoveWaitTime").getAsNumber()), (runtimeScene) => (gdjs.GameCode.asyncCallback17907956(runtimeScene, asyncObjectsList)), 17907956, asyncObjectsList);
}
}

}


};gdjs.GameCode.asyncCallback17907436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Cards"), gdjs.GameCode.GDCardsObjects7);

{gdjs.evtTools.sound.playSound(runtimeScene, "Assets/Audio/RevealCard2.aac", false, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("VolSound").getAsNumber(), 1);
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects7.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects7[i].getBehavior("Tween").addObjectPositionTween2("Move", runtimeScene.getScene().getVariables().getFromIndex(1).getChild("DrawX").getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getChild("DrawY").getAsNumber(), "linear", runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardMoveWaitTime").getAsNumber(), false);
}
}

{ //Subevents
gdjs.GameCode.eventsList106(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(17907436, gdjs.GameCode.asyncCallback17907436);
gdjs.GameCode.eventsList107 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDCardsObjects5) asyncObjectsList.addObject("Cards", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(gdjs.GameCode.localVariables[0].getFromIndex(0).getAsNumber() * 0.12), (runtimeScene) => (gdjs.GameCode.asyncCallback17907436(runtimeScene, asyncObjectsList)), 17907436, asyncObjectsList);
}
}

}


};gdjs.GameCode.eventsList108 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCardsObjects4 */

gdjs.GameCode.forEachObjects5.length = 0;
gdjs.GameCode.forEachObjects5.push.apply(gdjs.GameCode.forEachObjects5,gdjs.GameCode.GDCardsObjects4);
gdjs.GameCode.forEachTotalCount5 = gdjs.GameCode.forEachObjects5.length;
gdjs.GameCode.forEachSortKeys5.length = 0;
for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.forEachTotalCount5;++gdjs.GameCode.forEachIndex5) {
gdjs.GameCode.GDCardsObjects5.length = 0;


gdjs.GameCode.GDCardsObjects5.push(gdjs.GameCode.forEachObjects5[gdjs.GameCode.forEachIndex5]);
gdjs.GameCode.forEachSortKeys5.push((( gdjs.GameCode.GDCardsObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDCardsObjects5[0].getZOrder()));
}
gdjs.GameCode.forEachSorted5.length = 0;
for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.forEachTotalCount5;++gdjs.GameCode.forEachIndex5) gdjs.GameCode.forEachSorted5.push(gdjs.GameCode.forEachIndex5);
gdjs.GameCode.forEachSorted5.sort(function(a, b) { return true ? gdjs.GameCode.forEachSortKeys5[b] - gdjs.GameCode.forEachSortKeys5[a] : gdjs.GameCode.forEachSortKeys5[a] - gdjs.GameCode.forEachSortKeys5[b]; });
gdjs.GameCode.forEachLimit5 = runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Need").getAsNumber();
if (gdjs.GameCode.forEachLimit5 >= 0 && gdjs.GameCode.forEachSorted5.length > gdjs.GameCode.forEachLimit5) gdjs.GameCode.forEachSorted5.length = gdjs.GameCode.forEachLimit5;
for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.forEachSorted5.length;++gdjs.GameCode.forEachIndex5) {
gdjs.GameCode.GDCardsObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.forEachObjects5[gdjs.GameCode.forEachSorted5[gdjs.GameCode.forEachIndex5]];
gdjs.GameCode.GDCardsObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].returnVariable(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(2)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].setZOrder(20000);
}
}
{gdjs.GameCode.localVariables[0].getFromIndex(0).add(1);
}

{ //Subevents: 
gdjs.GameCode.eventsList107(runtimeScene);} //Subevents end.
}
}

}


};gdjs.GameCode.eventsList109 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects4[i].getVariableNumber(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(2)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects4[k] = gdjs.GameCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("DeckCount").setNumber(gdjs.evtTools.object.getPickedInstancesCount(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects4Objects));
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Need").setNumber(Math.min(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Need").getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(3).getChild("DeckCount").getAsNumber()));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber()).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("DrawX").setNumber(gdjs.evtTools.common.trunc(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() / 2));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("DrawY").setNumber(gdjs.evtTools.common.trunc(gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginY").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber()));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber()).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("DrawX").setNumber(gdjs.evtTools.common.trunc(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginX").getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("DrawY").setNumber(gdjs.evtTools.common.trunc(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() / 2));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber()).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("DrawX").setNumber(gdjs.evtTools.common.trunc(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() / 2));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("DrawY").setNumber(gdjs.evtTools.common.trunc(gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginY").getAsNumber()));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber()).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("DrawX").setNumber(gdjs.evtTools.common.trunc(gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginX").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("DrawY").setNumber(gdjs.evtTools.common.trunc(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() / 2));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects4);

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
gdjs.GameCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Need").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects4[i].getVariableNumber(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(2)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects4[k] = gdjs.GameCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects4.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList108(runtimeScene);} //End of subevents
}
gdjs.GameCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").add(1);
}
}

}


};gdjs.GameCode.eventsList110 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("DeckCount").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Timer").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Shown").setNumber(0);
}

{ //Subevents
gdjs.GameCode.eventsList109(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList111 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 6);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LayoutPlayer").setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").add(1);
}
}

}


};gdjs.GameCode.eventsList112 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("AfterDraw").getAsNumber() == 11);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(11);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("AfterDraw").getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(2);
}
}

}


};gdjs.GameCode.eventsList113 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Timer").getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(0).getChild("DrawHoldTime").getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("ShowP").setNumber(-1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("ShowN").setNumber(0);
}

{ //Subevents
gdjs.GameCode.eventsList112(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList114 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 7);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LayoutPlayer").getAsNumber() == 0);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Timer").add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}

{ //Subevents
gdjs.GameCode.eventsList113(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects3Objects = Hashtable.newFrom({"Cards": gdjs.GameCode.GDCardsObjects3});
gdjs.GameCode.eventsList115 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Drew").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(6)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].returnVariable(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(5)).setNumber(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelValue").setNumber(((gdjs.GameCode.GDCardsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects3[0].getVariables()).getFromIndex(0).getAsNumber());
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Drew").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(0)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelValue").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Same").setNumber(gdjs.evtTools.object.getPickedInstancesCount(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects3Objects));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Drew").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Same").getAsNumber() == 1);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(13);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Drew").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Same").getAsNumber() != 1);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(9);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Drew").getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(9);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() > 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(12);
}
}

}


};gdjs.GameCode.eventsList116 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 8);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Same").setNumber(0);
}

{ //Subevents
gdjs.GameCode.eventsList115(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects3Objects = Hashtable.newFrom({"Cards": gdjs.GameCode.GDCardsObjects3});
gdjs.GameCode.eventsList117 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDCardsObjects3, gdjs.GameCode.GDCardsObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects4[i].getVariableNumber(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(1)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects4[k] = gdjs.GameCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(6)).setNumber(1);
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDCardsObjects3, gdjs.GameCode.GDCardsObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects4[i].getVariableNumber(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(1)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Color").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects4[k] = gdjs.GameCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(6)).setNumber(1);
}
}
}

}


{

/* Reuse gdjs.GameCode.GDCardsObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(0)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Value").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].returnVariable(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(6)).setNumber(1);
}
}
}

}


};gdjs.GameCode.eventsList118 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects5[i].getVariableNumber(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects5[k] = gdjs.GameCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects5[i].getVariableNumber(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(7)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Hand").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects5[k] = gdjs.GameCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects5[i].getVariableNumber(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(6)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects5[k] = gdjs.GameCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects5.length = k;
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CanPick").setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects4[i].getVariableNumber(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects4[k] = gdjs.GameCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects4[i].getVariableNumber(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(7)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Hand").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects4[k] = gdjs.GameCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects4[i].getVariableNumber(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(5)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects4[k] = gdjs.GameCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects4.length = k;
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("IsPicked").setNumber(1);
}
}

}


};gdjs.GameCode.eventsList119 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects5[i].getVariableNumber(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects5[k] = gdjs.GameCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects5[i].getVariableNumber(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(5)) > runtimeScene.getScene().getVariables().getFromIndex(1).getChild("K").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects5[k] = gdjs.GameCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects5 */
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].returnVariable(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(5)).sub(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("K").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Pending").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects5[i].getVariableNumber(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects5[k] = gdjs.GameCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects5[i].getVariableNumber(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(5)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects5[k] = gdjs.GameCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects5[i].getVariableNumber(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(1)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects5[k] = gdjs.GameCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects5.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Ok").setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("K").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Pending").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects5[i].getVariableNumber(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects5[k] = gdjs.GameCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects5[i].getVariableNumber(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(5)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects5[k] = gdjs.GameCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects5[i].getVariableNumber(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(1)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Color").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects5[k] = gdjs.GameCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects5.length = k;
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Ok").setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("K").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects5[i].getVariableNumber(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects5[k] = gdjs.GameCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects5[i].getVariableNumber(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(5)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects5[k] = gdjs.GameCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects5[i].getVariableNumber(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(0)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Value").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects5[k] = gdjs.GameCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects5.length = k;
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Ok").setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("K").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Ok").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects5[i].getVariableNumber(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects5[k] = gdjs.GameCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects5.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects5 */
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].returnVariable(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(5)).setNumber(0);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("K").setNumber(0);
}
}

}


};gdjs.GameCode.eventsList120 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Up").getAsNumber() > 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Down").getAsNumber() > 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Right").getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Hand").setNumber(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Hand").getAsNumber() + 3, runtimeScene.getScene().getVariables().getFromIndex(3).getChild("HandCount").getAsNumber()));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Up").getAsNumber() > 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Down").getAsNumber() > 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Left").getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Hand").setNumber(gdjs.evtTools.common.mod(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Hand").getAsNumber() - 3, runtimeScene.getScene().getVariables().getFromIndex(3).getChild("HandCount").getAsNumber()) + runtimeScene.getScene().getVariables().getFromIndex(3).getChild("HandCount").getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(3).getChild("HandCount").getAsNumber()));
}
}

}


};gdjs.GameCode.eventsList121 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CanPick").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("IsPicked").setNumber(0);
}

{ //Subevents
gdjs.GameCode.eventsList118(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Left").getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Hand").setNumber(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Hand").getAsNumber() - 1 + runtimeScene.getScene().getVariables().getFromIndex(3).getChild("HandCount").getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(3).getChild("HandCount").getAsNumber()));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Right").getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Hand").setNumber(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Hand").getAsNumber() + 1, runtimeScene.getScene().getVariables().getFromIndex(3).getChild("HandCount").getAsNumber()));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Up").getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects4[i].getVariableNumber(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects4[k] = gdjs.GameCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects4[i].getVariableNumber(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(7)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Hand").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects4[k] = gdjs.GameCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects4[i].getVariableNumber(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(6)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects4[k] = gdjs.GameCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects4.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects4 */
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(5)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelValue").setNumber(((gdjs.GameCode.GDCardsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects4[0].getVariables()).getFromIndex(0).getAsNumber());
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Down").getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects4[i].getVariableNumber(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects4[k] = gdjs.GameCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects4[i].getVariableNumber(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(7)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Hand").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects4[k] = gdjs.GameCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects4[i].getVariableNumber(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(5)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects4[k] = gdjs.GameCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects4.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects4 */
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("K").setNumber(((gdjs.GameCode.GDCardsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects4[0].getVariables()).getFromIndex(5).getAsNumber());
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(5)).setNumber(0);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").sub(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("K").getAsNumber() > 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Ok").setNumber(0);
}

{ //Subevents
gdjs.GameCode.eventsList119(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Action").getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").getAsNumber() > 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(13);
}
}

}


{


gdjs.GameCode.eventsList120(runtimeScene);
}


};gdjs.GameCode.asyncCallback17981340 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").sub(1);
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(17981340, gdjs.GameCode.asyncCallback17981340);
gdjs.GameCode.eventsList122 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardSelectWaitTime").getAsNumber()), (runtimeScene) => (gdjs.GameCode.asyncCallback17981340(runtimeScene, asyncObjectsList)), 17981340, asyncObjectsList);
}
}

}


};gdjs.GameCode.eventsList123 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCardsObjects3 */

gdjs.GameCode.forEachObjects4.length = 0;
gdjs.GameCode.forEachObjects4.push.apply(gdjs.GameCode.forEachObjects4,gdjs.GameCode.GDCardsObjects3);
gdjs.GameCode.forEachTotalCount4 = gdjs.GameCode.forEachObjects4.length;
gdjs.GameCode.forEachSortKeys4.length = 0;
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachTotalCount4;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDCardsObjects4.length = 0;


gdjs.GameCode.GDCardsObjects4.push(gdjs.GameCode.forEachObjects4[gdjs.GameCode.forEachIndex4]);
gdjs.GameCode.forEachSortKeys4.push((( gdjs.GameCode.GDCardsObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCardsObjects4[0].getZOrder()));
}
gdjs.GameCode.forEachSorted4.length = 0;
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachTotalCount4;++gdjs.GameCode.forEachIndex4) gdjs.GameCode.forEachSorted4.push(gdjs.GameCode.forEachIndex4);
gdjs.GameCode.forEachSorted4.sort(function(a, b) { return false ? gdjs.GameCode.forEachSortKeys4[b] - gdjs.GameCode.forEachSortKeys4[a] : gdjs.GameCode.forEachSortKeys4[a] - gdjs.GameCode.forEachSortKeys4[b]; });
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachSorted4.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDCardsObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.forEachObjects4[gdjs.GameCode.forEachSorted4[gdjs.GameCode.forEachIndex4]];
gdjs.GameCode.GDCardsObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(8)).setNumber(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].getBehavior("Tween").addObjectPositionTween2("Move", (gdjs.GameCode.GDCardsObjects4[i].getPointX("")), gdjs.evtTools.common.trunc(gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginY").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() / 2 - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() / 4), "linear", runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardSelectWaitTime").getAsNumber(), false);
}
}

{ //Subevents: 
gdjs.GameCode.eventsList122(runtimeScene);} //Subevents end.
}
}

}


};gdjs.GameCode.asyncCallback17984244 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").sub(1);
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(17984244, gdjs.GameCode.asyncCallback17984244);
gdjs.GameCode.eventsList124 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardSelectWaitTime").getAsNumber()), (runtimeScene) => (gdjs.GameCode.asyncCallback17984244(runtimeScene, asyncObjectsList)), 17984244, asyncObjectsList);
}
}

}


};gdjs.GameCode.eventsList125 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCardsObjects2 */

gdjs.GameCode.forEachObjects3.length = 0;
gdjs.GameCode.forEachObjects3.push.apply(gdjs.GameCode.forEachObjects3,gdjs.GameCode.GDCardsObjects2);
gdjs.GameCode.forEachTotalCount3 = gdjs.GameCode.forEachObjects3.length;
gdjs.GameCode.forEachSortKeys3.length = 0;
for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.forEachTotalCount3;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDCardsObjects3.length = 0;


gdjs.GameCode.GDCardsObjects3.push(gdjs.GameCode.forEachObjects3[gdjs.GameCode.forEachIndex3]);
gdjs.GameCode.forEachSortKeys3.push((( gdjs.GameCode.GDCardsObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDCardsObjects3[0].getZOrder()));
}
gdjs.GameCode.forEachSorted3.length = 0;
for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.forEachTotalCount3;++gdjs.GameCode.forEachIndex3) gdjs.GameCode.forEachSorted3.push(gdjs.GameCode.forEachIndex3);
gdjs.GameCode.forEachSorted3.sort(function(a, b) { return false ? gdjs.GameCode.forEachSortKeys3[b] - gdjs.GameCode.forEachSortKeys3[a] : gdjs.GameCode.forEachSortKeys3[a] - gdjs.GameCode.forEachSortKeys3[b]; });
for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.forEachSorted3.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDCardsObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.forEachObjects3[gdjs.GameCode.forEachSorted3[gdjs.GameCode.forEachIndex3]];
gdjs.GameCode.GDCardsObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].returnVariable(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(8)).setNumber(0);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].getBehavior("Tween").addObjectPositionTween2("Move", (gdjs.GameCode.GDCardsObjects3[i].getPointX("")), gdjs.evtTools.common.trunc(gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginY").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() / 2), "linear", runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardSelectWaitTime").getAsNumber(), false);
}
}

{ //Subevents: 
gdjs.GameCode.eventsList124(runtimeScene);} //Subevents end.
}
}

}


};gdjs.GameCode.eventsList126 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].returnVariable(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(6)).setNumber(0);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("HandCount").setNumber(gdjs.evtTools.object.getPickedInstancesCount(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects3Objects));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Hand").setNumber(Math.min(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Hand").getAsNumber(), Math.max(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("HandCount").getAsNumber() - 1, 0)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Pending").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList117(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Pending").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(0)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Value").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].returnVariable(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(6)).setNumber(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(5)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(0)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelValue").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].returnVariable(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(6)).setNumber(1);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList121(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(5)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(8)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList123(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects2[i].getVariableNumber(gdjs.GameCode.GDCardsObjects2[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects2[k] = gdjs.GameCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects2[i].getVariableNumber(gdjs.GameCode.GDCardsObjects2[i].getVariables().getFromIndex(5)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects2[k] = gdjs.GameCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects2[i].getVariableNumber(gdjs.GameCode.GDCardsObjects2[i].getVariables().getFromIndex(8)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects2[k] = gdjs.GameCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects2.length = k;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList125(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList127 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 9);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() == 0);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList126(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects3Objects = Hashtable.newFrom({"Cards": gdjs.GameCode.GDCardsObjects3});
gdjs.GameCode.eventsList128 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HandN").setNumber(gdjs.evtTools.object.getPickedInstancesCount(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects3Objects));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HandN").getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber()).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber()).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("AIDone").setNumber(runtimeScene.getScene().getVariables().getFromIndex(5).getChild(1).getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(5).getChild(2).getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(5).getChild(3).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("AIDone").getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PlayerCount").getAsNumber() - 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(11);
}
}

}


};gdjs.GameCode.eventsList129 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() == 0);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HandN").setNumber(0);
}

{ //Subevents
gdjs.GameCode.eventsList128(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList130 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber()).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(0);
}
}

}


};gdjs.GameCode.eventsList131 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 11);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").setNumber(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Direction").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PlayerCount").getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PlayerCount").getAsNumber()));
}

{ //Subevents
gdjs.GameCode.eventsList130(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList132 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 12);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("AIWait").setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("PlayerAIDecisionWaitTime").getAsNumber() + gdjs.randomFloat(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("PlayerAIDecisionRandomTime").getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Timer").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(17);
}
}

}


};gdjs.GameCode.asyncCallback18000244 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").sub(1);
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(18000244, gdjs.GameCode.asyncCallback18000244);
gdjs.GameCode.eventsList133 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("FanTime").getAsNumber()), (runtimeScene) => (gdjs.GameCode.asyncCallback18000244(runtimeScene, asyncObjectsList)), 18000244, asyncObjectsList);
}
}

}


};gdjs.GameCode.eventsList134 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCardsObjects4 */

for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.GDCardsObjects4.length;++gdjs.GameCode.forEachIndex5) {
gdjs.GameCode.GDCardsObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.GDCardsObjects4[gdjs.GameCode.forEachIndex5];
gdjs.GameCode.GDCardsObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].setZOrder(2000 + gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(5).getAsNumber());
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].getBehavior("Tween").addObjectPositionTween2("Move", gdjs.evtTools.common.trunc(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("FanStart").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("FanGap").getAsNumber() * (gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(5).getAsNumber() - 1)), gdjs.evtTools.common.trunc(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber()), "linear", runtimeScene.getScene().getVariables().getFromIndex(0).getChild("FanTime").getAsNumber(), false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].getBehavior("Tween").addObjectWidthTween2("Flip", runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() * 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(0).getChild("FanTime").getAsNumber(), false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].getBehavior("Tween").addObjectHeightTween2("FlipH", runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() * 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(0).getChild("FanTime").getAsNumber(), false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Assets/Audio/RevealCard2.aac", false, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("VolSound").getAsNumber(), 1);
}

{ //Subevents: 
gdjs.GameCode.eventsList133(runtimeScene);} //Subevents end.
}
}

}


};gdjs.GameCode.asyncCallback18006948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").sub(1);
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(18006948, gdjs.GameCode.asyncCallback18006948);
gdjs.GameCode.eventsList135 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("FanTime").getAsNumber() / 2), (runtimeScene) => (gdjs.GameCode.asyncCallback18006948(runtimeScene, asyncObjectsList)), 18006948, asyncObjectsList);
}
}

}


};gdjs.GameCode.eventsList136 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(asyncObjectsList.getObjects("Cards"), gdjs.GameCode.GDCardsObjects7);

{for(var i = 0, len = gdjs.GameCode.GDCardsObjects7.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects7[i].getBehavior("Animation").setAnimationName("FrontFace");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects7.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects7[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects7.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects7[i].setAnimationFrame(gdjs.GameCode.GDCardsObjects7[i].getVariables().getFromIndex(0).getAsNumber() + gdjs.GameCode.GDCardsObjects7[i].getVariables().getFromIndex(1).getAsNumber() * 16);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects7.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects7[i].getBehavior("Tween").addObjectWidthTween2("Flip", runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() * 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(0).getChild("FanTime").getAsNumber() / 2, false);
}
}
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.GameCode.eventsList135(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.GameCode.asyncCallback18005060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);

{ //Subevents
gdjs.GameCode.eventsList136(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(18005060, gdjs.GameCode.asyncCallback18005060);
gdjs.GameCode.eventsList137 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDCardsObjects4) asyncObjectsList.addObject("Cards", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("FanTime").getAsNumber() / 2), (runtimeScene) => (gdjs.GameCode.asyncCallback18005060(runtimeScene, asyncObjectsList)), 18005060, asyncObjectsList);
}
}

}


};gdjs.GameCode.eventsList138 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCardsObjects3 */

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDCardsObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDCardsObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDCardsObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDCardsObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].setZOrder(2000 + gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(5).getAsNumber());
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].getBehavior("Tween").addObjectPositionTween2("Move", gdjs.evtTools.common.trunc(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("FanStart").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("FanGap").getAsNumber() * (gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(5).getAsNumber() - 1)), gdjs.evtTools.common.trunc(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber()), "linear", runtimeScene.getScene().getVariables().getFromIndex(0).getChild("FanTime").getAsNumber(), false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].getBehavior("Tween").addObjectHeightTween2("FlipH", runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() * 2, "linear", runtimeScene.getScene().getVariables().getFromIndex(0).getChild("FanTime").getAsNumber(), false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].getBehavior("Tween").addObjectWidthTween2("Flip", 0, "linear", runtimeScene.getScene().getVariables().getFromIndex(0).getChild("FanTime").getAsNumber() / 2, false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Assets/Audio/RevealCard2.aac", false, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("VolSound").getAsNumber(), 1);
}

{ //Subevents: 
gdjs.GameCode.eventsList137(runtimeScene);} //Subevents end.
}
}

}


};gdjs.GameCode.eventsList139 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects4[i].getVariableNumber(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects4[k] = gdjs.GameCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects4[i].getVariableNumber(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(5)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects4[k] = gdjs.GameCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects4.length = k;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList134(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(5)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList138(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList140 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Timer").getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(0).getChild("FanHoldTime").getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Fan").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(14);
}
}

}


};gdjs.GameCode.eventsList141 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 13);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Fan").getAsNumber() == 0);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Fan").setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Timer").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("FanGap").setNumber(Math.min(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() * 2.2, (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() * 2.4) / Math.max(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").getAsNumber() - 1, 1)));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("FanStart").setNumber(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("FanGap").getAsNumber() * (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").getAsNumber() - 1) + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() * 2) / 2);
}

{ //Subevents
gdjs.GameCode.eventsList139(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 13);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Fan").getAsNumber() == 1);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Timer").add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}

{ //Subevents
gdjs.GameCode.eventsList140(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.asyncCallback18022108 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").sub(1);
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(18022108, gdjs.GameCode.asyncCallback18022108);
gdjs.GameCode.eventsList142 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("FanTime").getAsNumber()), (runtimeScene) => (gdjs.GameCode.asyncCallback18022108(runtimeScene, asyncObjectsList)), 18022108, asyncObjectsList);
}
}

}


};gdjs.GameCode.eventsList143 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCardsObjects3 */

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDCardsObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDCardsObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDCardsObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDCardsObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].setZOrder(1000 + runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PileZ").getAsNumber() + gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(5).getAsNumber());
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(2)).setNumber(9);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(5)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(6)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(8)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].getBehavior("Tween").addObjectPositionTween2("Move", gdjs.evtTools.common.trunc(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CamCenterX").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() * 2), gdjs.evtTools.common.trunc(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CamCenterY").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() / 2), "linear", runtimeScene.getScene().getVariables().getFromIndex(0).getChild("FanTime").getAsNumber(), false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].getBehavior("Tween").addObjectWidthTween2("Flip", runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber(), "linear", runtimeScene.getScene().getVariables().getFromIndex(0).getChild("FanTime").getAsNumber(), false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].getBehavior("Tween").addObjectHeightTween2("FlipH", runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber(), "linear", runtimeScene.getScene().getVariables().getFromIndex(0).getChild("FanTime").getAsNumber(), false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Assets/Audio/RevealCard2.aac", false, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("VolSound").getAsNumber(), 1);
}

{ //Subevents: 
gdjs.GameCode.eventsList142(runtimeScene);} //Subevents end.
}
}

}


};gdjs.GameCode.eventsList144 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(5)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects3 */
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Value").setNumber(((gdjs.GameCode.GDCardsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects3[0].getVariables()).getFromIndex(0).getAsNumber());
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(5)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(1)) < 4 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects3 */
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Color").setNumber(((gdjs.GameCode.GDCardsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects3[0].getVariables()).getFromIndex(1).getAsNumber());
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(5)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(1)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("NeedColor").setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(5)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(0)) == 12 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("NeedColor").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Value").getAsNumber() == 13);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Draw").add(2 * runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Value").getAsNumber() == 14);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Draw").add(4 * runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Value").getAsNumber() == 11);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Skip").add(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Value").getAsNumber() == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PlayerCount").getAsNumber() > 2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Direction").mul(-1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Value").getAsNumber() == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PlayerCount").getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Skip").add(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(5)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList143(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PileZ").add(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LayoutPlayer").setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(15);
}
}

}


};gdjs.GameCode.eventsList145 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 14);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("NeedColor").setNumber(0);
}

{ //Subevents
gdjs.GameCode.eventsList144(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList146 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("NeedColor").getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(16);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("NeedColor").getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(10);
}
}

}


};gdjs.GameCode.eventsList147 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 15);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LayoutPlayer").getAsNumber() == 0);
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList146(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList148 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Timer").getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(3).getChild("AIWait").getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(18);
}
}

}


};gdjs.GameCode.eventsList149 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 17);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Timer").add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}

{ //Subevents
gdjs.GameCode.eventsList148(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList150 = function(runtimeScene) {

};gdjs.GameCode.eventsList151 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCardsObjects3 */

gdjs.GameCode.forEachObjects4.length = 0;
gdjs.GameCode.forEachObjects4.push.apply(gdjs.GameCode.forEachObjects4,gdjs.GameCode.GDCardsObjects3);
gdjs.GameCode.forEachTotalCount4 = gdjs.GameCode.forEachObjects4.length;
gdjs.GameCode.forEachSortKeys4.length = 0;
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachTotalCount4;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDCardsObjects4.length = 0;


gdjs.GameCode.GDCardsObjects4.push(gdjs.GameCode.forEachObjects4[gdjs.GameCode.forEachIndex4]);
gdjs.GameCode.forEachSortKeys4.push(((gdjs.GameCode.GDCardsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects4[0].getVariables()).getFromIndex(7).getAsNumber());
}
gdjs.GameCode.forEachSorted4.length = 0;
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachTotalCount4;++gdjs.GameCode.forEachIndex4) gdjs.GameCode.forEachSorted4.push(gdjs.GameCode.forEachIndex4);
gdjs.GameCode.forEachSorted4.sort(function(a, b) { return false ? gdjs.GameCode.forEachSortKeys4[b] - gdjs.GameCode.forEachSortKeys4[a] : gdjs.GameCode.forEachSortKeys4[a] - gdjs.GameCode.forEachSortKeys4[b]; });
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachSorted4.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDCardsObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.forEachObjects4[gdjs.GameCode.forEachSorted4[gdjs.GameCode.forEachIndex4]];
gdjs.GameCode.GDCardsObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().getFromIndex(9).getChild(gdjs.evtTools.common.toString(((gdjs.GameCode.GDCardsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects4[0].getVariables()).getFromIndex(0).getAsNumber())).add(1);
}
}
}

}


};gdjs.GameCode.eventsList152 = function(runtimeScene) {

};gdjs.GameCode.eventsList153 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCardsObjects3 */

gdjs.GameCode.forEachObjects4.length = 0;
gdjs.GameCode.forEachObjects4.push.apply(gdjs.GameCode.forEachObjects4,gdjs.GameCode.GDCardsObjects3);
gdjs.GameCode.forEachTotalCount4 = gdjs.GameCode.forEachObjects4.length;
gdjs.GameCode.forEachSortKeys4.length = 0;
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachTotalCount4;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDCardsObjects4.length = 0;


gdjs.GameCode.GDCardsObjects4.push(gdjs.GameCode.forEachObjects4[gdjs.GameCode.forEachIndex4]);
gdjs.GameCode.forEachSortKeys4.push(((gdjs.GameCode.GDCardsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects4[0].getVariables()).getFromIndex(10).getAsNumber());
}
gdjs.GameCode.forEachSorted4.length = 0;
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachTotalCount4;++gdjs.GameCode.forEachIndex4) gdjs.GameCode.forEachSorted4.push(gdjs.GameCode.forEachIndex4);
gdjs.GameCode.forEachSorted4.sort(function(a, b) { return true ? gdjs.GameCode.forEachSortKeys4[b] - gdjs.GameCode.forEachSortKeys4[a] : gdjs.GameCode.forEachSortKeys4[a] - gdjs.GameCode.forEachSortKeys4[b]; });
gdjs.GameCode.forEachLimit4 = 1;
if (gdjs.GameCode.forEachLimit4 >= 0 && gdjs.GameCode.forEachSorted4.length > gdjs.GameCode.forEachLimit4) gdjs.GameCode.forEachSorted4.length = gdjs.GameCode.forEachLimit4;
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachSorted4.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDCardsObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.forEachObjects4[gdjs.GameCode.forEachSorted4[gdjs.GameCode.forEachIndex4]];
gdjs.GameCode.GDCardsObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(5)).setNumber(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("AIValue").setNumber(((gdjs.GameCode.GDCardsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects4[0].getVariables()).getFromIndex(0).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("AICount").setNumber(((gdjs.GameCode.GDCardsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects4[0].getVariables()).getFromIndex(9).getAsNumber());
}
}
}

}


};gdjs.GameCode.eventsList154 = function(runtimeScene) {

};gdjs.GameCode.eventsList155 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCardsObjects3 */

gdjs.GameCode.forEachObjects4.length = 0;
gdjs.GameCode.forEachObjects4.push.apply(gdjs.GameCode.forEachObjects4,gdjs.GameCode.GDCardsObjects3);
gdjs.GameCode.forEachTotalCount4 = gdjs.GameCode.forEachObjects4.length;
gdjs.GameCode.forEachSortKeys4.length = 0;
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachTotalCount4;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDCardsObjects4.length = 0;


gdjs.GameCode.GDCardsObjects4.push(gdjs.GameCode.forEachObjects4[gdjs.GameCode.forEachIndex4]);
gdjs.GameCode.forEachSortKeys4.push(((gdjs.GameCode.GDCardsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects4[0].getVariables()).getFromIndex(1).getAsNumber());
}
gdjs.GameCode.forEachSorted4.length = 0;
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachTotalCount4;++gdjs.GameCode.forEachIndex4) gdjs.GameCode.forEachSorted4.push(gdjs.GameCode.forEachIndex4);
gdjs.GameCode.forEachSorted4.sort(function(a, b) { return true ? gdjs.GameCode.forEachSortKeys4[b] - gdjs.GameCode.forEachSortKeys4[a] : gdjs.GameCode.forEachSortKeys4[a] - gdjs.GameCode.forEachSortKeys4[b]; });
gdjs.GameCode.forEachLimit4 = runtimeScene.getScene().getVariables().getFromIndex(3).getChild("AICount").getAsNumber() - 1;
if (gdjs.GameCode.forEachLimit4 >= 0 && gdjs.GameCode.forEachSorted4.length > gdjs.GameCode.forEachLimit4) gdjs.GameCode.forEachSorted4.length = gdjs.GameCode.forEachLimit4;
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachSorted4.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDCardsObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.forEachObjects4[gdjs.GameCode.forEachSorted4[gdjs.GameCode.forEachIndex4]];
gdjs.GameCode.GDCardsObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(5)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").getAsNumber());
}
}
}
}

}


};gdjs.GameCode.eventsList156 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList151(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].returnVariable(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(9)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(9).getChild(gdjs.evtTools.common.toString(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(0).getAsNumber())).getAsNumber());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(6)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].returnVariable(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(10)).setNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(9).getAsNumber() * 10);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(11).getChild(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber())).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(6)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(0)) == 11 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].returnVariable(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(10)).add(30);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(11).getChild(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber())).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(6)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(0)) == 13 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].returnVariable(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(10)).add(30);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(11).getChild(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber())).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(6)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(0)) == 14 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].returnVariable(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(10)).add(30);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(11).getChild(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber())).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(6)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(1)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].returnVariable(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(10)).sub(100);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(6)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList153(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(11).getChild(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber())).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("AICount").getAsNumber() > 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("AIValue").getAsNumber() >= 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("AIValue").getAsNumber() != 12);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("AICount").sub(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("AICount").getAsNumber() > 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(0)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("AIValue").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(5)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList155(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(13);
}
}

}


};gdjs.GameCode.eventsList157 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 18);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(9));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("SelCount").setNumber(0);
}

{ //Subevents
gdjs.GameCode.eventsList156(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList158 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(7)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Hand").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Hand"), gdjs.GameCode.GDHandObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HX").setNumber((( gdjs.GameCode.GDCardsObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDCardsObjects3[0].getPointX("")) + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() / 2);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HY").setNumber((( gdjs.GameCode.GDCardsObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDCardsObjects3[0].getPointY("")) - (( gdjs.GameCode.GDHandObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDHandObjects3[0].getHeight()) / 2 - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("HandDistance").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Fl").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HA").setNumber(180);
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTextObjects3Objects = Hashtable.newFrom({"Text": gdjs.GameCode.GDTextObjects3});
gdjs.GameCode.eventsList159 = function(runtimeScene) {

};gdjs.GameCode.eventsList160 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCardsObjects2 */

gdjs.GameCode.forEachObjects3.length = 0;
gdjs.GameCode.forEachObjects3.push.apply(gdjs.GameCode.forEachObjects3,gdjs.GameCode.GDCardsObjects2);
gdjs.GameCode.forEachTotalCount3 = gdjs.GameCode.forEachObjects3.length;
gdjs.GameCode.forEachSortKeys3.length = 0;
for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.forEachTotalCount3;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDCardsObjects3.length = 0;


gdjs.GameCode.GDCardsObjects3.push(gdjs.GameCode.forEachObjects3[gdjs.GameCode.forEachIndex3]);
gdjs.GameCode.forEachSortKeys3.push(((gdjs.GameCode.GDCardsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects3[0].getVariables()).getFromIndex(5).getAsNumber());
}
gdjs.GameCode.forEachSorted3.length = 0;
for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.forEachTotalCount3;++gdjs.GameCode.forEachIndex3) gdjs.GameCode.forEachSorted3.push(gdjs.GameCode.forEachIndex3);
gdjs.GameCode.forEachSorted3.sort(function(a, b) { return false ? gdjs.GameCode.forEachSortKeys3[b] - gdjs.GameCode.forEachSortKeys3[a] : gdjs.GameCode.forEachSortKeys3[a] - gdjs.GameCode.forEachSortKeys3[b]; });
for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.forEachSorted3.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDTextObjects3.length = 0;

gdjs.GameCode.GDCardsObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.forEachObjects3[gdjs.GameCode.forEachSorted3[gdjs.GameCode.forEachIndex3]];
gdjs.GameCode.GDCardsObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTextObjects3Objects, (( gdjs.GameCode.GDCardsObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDCardsObjects3[0].getPointX("")) + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() / 2, (( gdjs.GameCode.GDCardsObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDCardsObjects3[0].getPointY("")) - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("OrderNumberDistance").getAsNumber(), "");
}
{for(var i = 0, len = gdjs.GameCode.GDTextObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects3[i].returnVariable(gdjs.GameCode.GDTextObjects3[i].getVariables().getFromIndex(0)).setString("OrderNumber");
}
}
{for(var i = 0, len = gdjs.GameCode.GDTextObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects3[i].returnVariable(gdjs.GameCode.GDTextObjects3[i].getVariables().getFromIndex(1)).setNumber(((gdjs.GameCode.GDCardsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects3[0].getVariables()).getFromIndex(5).getAsNumber());
}
}
{for(var i = 0, len = gdjs.GameCode.GDTextObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects3[i].setZOrder(99999);
}
}
{for(var i = 0, len = gdjs.GameCode.GDTextObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects3[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(((gdjs.GameCode.GDCardsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects3[0].getVariables()).getFromIndex(5).getAsNumber()));
}
}
}
}

}


};gdjs.GameCode.eventsList161 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("HandDistance").setNumber(30);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("OrderNumberDistance").setNumber(30);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("HandSmooth").setNumber(8);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("HandTurnSmooth").setNumber(14);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("HandCardSmooth").setNumber(25);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PlayerCount").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HandIntro").setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LastDealt").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Fl").setNumber(Math.sin(gdjs.toRad(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 360 * runtimeScene.getScene().getVariables().getFromIndex(0).getChild("HandFloatSpeed").getAsNumber())) * runtimeScene.getScene().getVariables().getFromIndex(0).getChild("HandFloatRange").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HKM").setNumber(Math.min(1, runtimeScene.getScene().getVariables().getFromIndex(0).getChild("HandSmooth").getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HKT").setNumber(Math.min(1, runtimeScene.getScene().getVariables().getFromIndex(0).getChild("HandTurnSmooth").getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HKC").setNumber(Math.min(1, runtimeScene.getScene().getVariables().getFromIndex(0).getChild("HandCardSmooth").getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("HandSmooth").getAsNumber() <= 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HKM").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("HandTurnSmooth").getAsNumber() <= 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HKT").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("HandCardSmooth").getAsNumber() <= 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HKC").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].setColor("255;255;255");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 9);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(6)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(5)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].setColor(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("DimColor").getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HandIntro").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PlayerCount").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() >= 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() <= 9);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HandIntro").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HandIntro").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PlayerCount").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() > 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HandIntro").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PlayerCount").getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Mode").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("TSeat").setNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(Math.min(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SortTurn").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PlayerCount").getAsNumber() - 1)).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PlayerCount").getAsNumber() > 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Mode").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("TSeat").setNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("HandPlayer").getAsNumber()).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HandIntro").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LastDealt").getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Mode").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PlayerCount").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() <= 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Mode").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PlayerCount").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() >= 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() <= 11);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Mode").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PlayerCount").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() >= 14);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() <= 15);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Mode").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PlayerCount").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 13);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Mode").setNumber(3);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PlayerCount").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 16);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Mode").setNumber(4);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PlayerCount").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 9);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Mode").setNumber(2);
}

{ //Subevents
gdjs.GameCode.eventsList158(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Mode").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("TSeat").getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hand"), gdjs.GameCode.GDHandObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HX").setNumber(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HY").setNumber(gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginY").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() / 2 - (( gdjs.GameCode.GDHandObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDHandObjects3[0].getHeight()) / 2 - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("HandDistance").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Fl").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HA").setNumber(180);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Mode").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("TSeat").getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hand"), gdjs.GameCode.GDHandObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HX").setNumber(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginX").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() / 2 + (( gdjs.GameCode.GDHandObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDHandObjects3[0].getHeight()) / 2 + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("HandDistance").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Fl").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HY").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HA").setNumber(270);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Mode").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("TSeat").getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hand"), gdjs.GameCode.GDHandObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HX").setNumber(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HY").setNumber(gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginY").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() / 2 + (( gdjs.GameCode.GDHandObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDHandObjects3[0].getHeight()) / 2 + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("HandDistance").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Fl").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HA").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Mode").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("TSeat").getAsNumber() == 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hand"), gdjs.GameCode.GDHandObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HX").setNumber(gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginX").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() / 2 - (( gdjs.GameCode.GDHandObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDHandObjects3[0].getHeight()) / 2 - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("HandDistance").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Fl").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HY").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HA").setNumber(90);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Mode").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hand"), gdjs.GameCode.GDHandObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HX").setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CamCenterX").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() * 2.5);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HY").setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CamCenterY").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() / 2 - (( gdjs.GameCode.GDHandObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDHandObjects3[0].getHeight()) / 2 - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("HandDistance").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Fl").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HA").setNumber(180);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Mode").getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hand"), gdjs.GameCode.GDHandObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HX").setNumber(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HY").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() - (( gdjs.GameCode.GDHandObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDHandObjects3[0].getHeight()) / 2 - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("HandDistance").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Fl").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HA").setNumber(180);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Mode").getAsNumber() == 4);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HX").setNumber(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HY").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HA").setNumber(180);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HP").setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HKM").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Mode").getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HP").setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HKC").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Hand"), gdjs.GameCode.GDHandObjects3);
{for(var i = 0, len = gdjs.GameCode.GDHandObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDHandObjects3[i].setPosition((gdjs.GameCode.GDHandObjects3[i].getPointX("")) + (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HX").getAsNumber() - (gdjs.GameCode.GDHandObjects3[i].getPointX(""))) * runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HP").getAsNumber(),(gdjs.GameCode.GDHandObjects3[i].getPointY("")) + (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HY").getAsNumber() - (gdjs.GameCode.GDHandObjects3[i].getPointY(""))) * runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HP").getAsNumber());
}
}
{for(var i = 0, len = gdjs.GameCode.GDHandObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDHandObjects3[i].setAngle((gdjs.GameCode.GDHandObjects3[i].getAngle()) + (gdjs.evtTools.common.mod(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HA").getAsNumber() - (gdjs.GameCode.GDHandObjects3[i].getAngle()) + 540, 360) + 360, 360) - 180) * runtimeScene.getScene().getVariables().getFromIndex(1).getChild("HKT").getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Mode").getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickPhase").getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hand"), gdjs.GameCode.GDHandObjects3);
{for(var i = 0, len = gdjs.GameCode.GDHandObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDHandObjects3[i].setAngle(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickShow").getAsNumber() * 90);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.GameCode.GDTextObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTextObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDTextObjects3[i].getVariableString(gdjs.GameCode.GDTextObjects3[i].getVariables().getFromIndex(0)) == "OrderNumber" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTextObjects3[k] = gdjs.GameCode.GDTextObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDTextObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDTextObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDTextObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects3[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 9);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects2[i].getVariableNumber(gdjs.GameCode.GDCardsObjects2[i].getVariables().getFromIndex(2)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects2[k] = gdjs.GameCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects2[i].getVariableNumber(gdjs.GameCode.GDCardsObjects2[i].getVariables().getFromIndex(5)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects2[k] = gdjs.GameCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects2.length = k;
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList160(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDColorPickerObjects3Objects = Hashtable.newFrom({"ColorPicker": gdjs.GameCode.GDColorPickerObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDColorPickerObjects3Objects = Hashtable.newFrom({"ColorPicker": gdjs.GameCode.GDColorPickerObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDColorPickerObjects3Objects = Hashtable.newFrom({"ColorPicker": gdjs.GameCode.GDColorPickerObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDColorPickerObjects3Objects = Hashtable.newFrom({"ColorPicker": gdjs.GameCode.GDColorPickerObjects3});
gdjs.GameCode.eventsList162 = function(runtimeScene) {

};gdjs.GameCode.eventsList163 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCardsObjects4 */

gdjs.GameCode.forEachObjects5.length = 0;
gdjs.GameCode.forEachObjects5.push.apply(gdjs.GameCode.forEachObjects5,gdjs.GameCode.GDCardsObjects4);
gdjs.GameCode.forEachTotalCount5 = gdjs.GameCode.forEachObjects5.length;
gdjs.GameCode.forEachSortKeys5.length = 0;
for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.forEachTotalCount5;++gdjs.GameCode.forEachIndex5) {
gdjs.GameCode.GDCardsObjects5.length = 0;


gdjs.GameCode.GDCardsObjects5.push(gdjs.GameCode.forEachObjects5[gdjs.GameCode.forEachIndex5]);
gdjs.GameCode.forEachSortKeys5.push(((gdjs.GameCode.GDCardsObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects5[0].getVariables()).getFromIndex(7).getAsNumber());
}
gdjs.GameCode.forEachSorted5.length = 0;
for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.forEachTotalCount5;++gdjs.GameCode.forEachIndex5) gdjs.GameCode.forEachSorted5.push(gdjs.GameCode.forEachIndex5);
gdjs.GameCode.forEachSorted5.sort(function(a, b) { return false ? gdjs.GameCode.forEachSortKeys5[b] - gdjs.GameCode.forEachSortKeys5[a] : gdjs.GameCode.forEachSortKeys5[a] - gdjs.GameCode.forEachSortKeys5[b]; });
for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.forEachSorted5.length;++gdjs.GameCode.forEachIndex5) {
gdjs.GameCode.GDCardsObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.forEachObjects5[gdjs.GameCode.forEachSorted5[gdjs.GameCode.forEachIndex5]];
gdjs.GameCode.GDCardsObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().getFromIndex(10).getChild(gdjs.evtTools.common.toString(((gdjs.GameCode.GDCardsObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects5[0].getVariables()).getFromIndex(1).getAsNumber())).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CSum").add(1);
}
}
}

}


};gdjs.GameCode.eventsList164 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDColorPickerObjects3, gdjs.GameCode.GDColorPickerObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDColorPickerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDColorPickerObjects4[i].getVariableNumber(gdjs.GameCode.GDColorPickerObjects4[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDColorPickerObjects4[k] = gdjs.GameCode.GDColorPickerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDColorPickerObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDColorPickerObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects4[i].setPosition(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (gdjs.GameCode.GDColorPickerObjects4[i].getWidth()) / 2,gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (gdjs.GameCode.GDColorPickerObjects4[i].getHeight()) * 1.5 - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("PickerGap").getAsNumber());
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDColorPickerObjects3, gdjs.GameCode.GDColorPickerObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDColorPickerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDColorPickerObjects4[i].getVariableNumber(gdjs.GameCode.GDColorPickerObjects4[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDColorPickerObjects4[k] = gdjs.GameCode.GDColorPickerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDColorPickerObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDColorPickerObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects4[i].setPosition(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (gdjs.GameCode.GDColorPickerObjects4[i].getWidth()) / 2 + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("PickerGap").getAsNumber(),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (gdjs.GameCode.GDColorPickerObjects4[i].getHeight()) / 2);
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDColorPickerObjects3, gdjs.GameCode.GDColorPickerObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDColorPickerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDColorPickerObjects4[i].getVariableNumber(gdjs.GameCode.GDColorPickerObjects4[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDColorPickerObjects4[k] = gdjs.GameCode.GDColorPickerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDColorPickerObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDColorPickerObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects4[i].setPosition(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (gdjs.GameCode.GDColorPickerObjects4[i].getWidth()) / 2,gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (gdjs.GameCode.GDColorPickerObjects4[i].getHeight()) / 2 + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("PickerGap").getAsNumber());
}
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDColorPickerObjects3, gdjs.GameCode.GDColorPickerObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDColorPickerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDColorPickerObjects4[i].getVariableNumber(gdjs.GameCode.GDColorPickerObjects4[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDColorPickerObjects4[k] = gdjs.GameCode.GDColorPickerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDColorPickerObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDColorPickerObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects4[i].setPosition(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - (gdjs.GameCode.GDColorPickerObjects4[i].getWidth()) * 1.5 - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("PickerGap").getAsNumber(),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (gdjs.GameCode.GDColorPickerObjects4[i].getHeight()) / 2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects4[i].getVariableNumber(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects4[k] = gdjs.GameCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects4[i].getVariableNumber(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(1)) < 4 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects4[k] = gdjs.GameCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects4.length = k;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList163(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() > 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickColor").setNumber(gdjs.evtTools.common.mod(gdjs.random(100), 4));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CSum").getAsNumber() > 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickColor").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getChild("1").getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(10).getChild(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickColor").getAsNumber())).getAsNumber());
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickColor").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getChild("2").getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(10).getChild(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickColor").getAsNumber())).getAsNumber());
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickColor").setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getChild("3").getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(10).getChild(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickColor").getAsNumber())).getAsNumber());
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickColor").setNumber(3);
}
}

}


};gdjs.GameCode.eventsList165 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Up").getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickColor").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Right").getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickColor").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Down").getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickColor").setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Left").getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickColor").setNumber(3);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Action").getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickPhase").setNumber(2);
}
}

}


};gdjs.GameCode.eventsList166 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickDone").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Timer").getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(0).getChild("PickStepTime").getAsNumber());
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Timer").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickSteps").add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickShow").setNumber(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickShow").getAsNumber() + 1, 4));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickDone").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickSteps").getAsNumber() >= 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickShow").getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickColor").getAsNumber());
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickDone").setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Timer").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickDone").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Timer").getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(0).getChild("ColorShowTime").getAsNumber());
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickPhase").setNumber(2);
}
}

}


};gdjs.GameCode.eventsList167 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDColorPickerObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDColorPickerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDColorPickerObjects3[i].getVariableNumber(gdjs.GameCode.GDColorPickerObjects3[i].getVariables().getFromIndex(0)) != runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickShow").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDColorPickerObjects3[k] = gdjs.GameCode.GDColorPickerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDColorPickerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDColorPickerObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects3[i].setColor(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("DimColor").getAsString());
}
}
}

}


};gdjs.GameCode.eventsList168 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.GameCode.GDColorPickerObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDColorPickerObjects3Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects3[i].returnVariable(gdjs.GameCode.GDColorPickerObjects3[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects3[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects3[i].setZOrder(30000);
}
}
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects3[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.GameCode.GDColorPickerObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDColorPickerObjects3Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects3[i].returnVariable(gdjs.GameCode.GDColorPickerObjects3[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects3[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects3[i].setZOrder(30000);
}
}
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects3[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.GameCode.GDColorPickerObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDColorPickerObjects3Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects3[i].returnVariable(gdjs.GameCode.GDColorPickerObjects3[i].getVariables().getFromIndex(0)).setNumber(2);
}
}
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects3[i].getBehavior("Animation").setAnimationIndex(2);
}
}
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects3[i].setZOrder(30000);
}
}
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects3[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.GameCode.GDColorPickerObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDColorPickerObjects3Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects3[i].returnVariable(gdjs.GameCode.GDColorPickerObjects3[i].getVariables().getFromIndex(0)).setNumber(3);
}
}
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects3[i].getBehavior("Animation").setAnimationIndex(3);
}
}
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects3[i].setZOrder(30000);
}
}
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects3[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 16);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickPhase").getAsNumber() == 0);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ColorPicker"), gdjs.GameCode.GDColorPickerObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickPhase").setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Timer").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickColor").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickShow").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickSteps").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickDone").setNumber(0);
}
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(10));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CSum").setNumber(0);
}
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects3[i].getBehavior("Opacity").setOpacity(255);
}
}

{ //Subevents
gdjs.GameCode.eventsList164(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 16);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickPhase").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList165(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 16);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickPhase").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickShow").setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickColor").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 16);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickPhase").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Timer").add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}

{ //Subevents
gdjs.GameCode.eventsList166(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 16);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickPhase").getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ColorPicker"), gdjs.GameCode.GDColorPickerObjects3);
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects3[i].setColor("255;255;255");
}
}

{ //Subevents
gdjs.GameCode.eventsList167(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 16);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickPhase").getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ColorPicker"), gdjs.GameCode.GDColorPickerObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Color").setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickColor").getAsNumber());
}
{for(var i = 0, len = gdjs.GameCode.GDColorPickerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDColorPickerObjects2[i].getBehavior("Tween").addObjectOpacityTween2("Fade", 0, "linear", 0.2, false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PickPhase").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(10);
}
}

}


};gdjs.GameCode.eventsList169 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 19);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Req").setNumber(Math.max(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Draw").getAsNumber(), 1) + 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("DeckRet").setNumber(2);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(20);
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects3Objects = Hashtable.newFrom({"Cards": gdjs.GameCode.GDCardsObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects3Objects = Hashtable.newFrom({"Cards": gdjs.GameCode.GDCardsObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects3Objects = Hashtable.newFrom({"Cards": gdjs.GameCode.GDCardsObjects3});
gdjs.GameCode.eventsList170 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.GameCode.localVariables[0].getFromIndex(0).getAsNumber() > 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCardsObjects4, gdjs.GameCode.GDCardsObjects5);

{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].returnVariable(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(2)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].setPosition(0,0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].setZOrder(2 + gdjs.random(70));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].getBehavior("Animation").setAnimationName("BackFace");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].setAnimationFrame(0);
}
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.GameCode.localVariables[0].getFromIndex(0).add(1);
}
}

}


};gdjs.GameCode.eventsList171 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDCardsObjects3 */

gdjs.GameCode.forEachObjects4.length = 0;
gdjs.GameCode.forEachObjects4.push.apply(gdjs.GameCode.forEachObjects4,gdjs.GameCode.GDCardsObjects3);
gdjs.GameCode.forEachTotalCount4 = gdjs.GameCode.forEachObjects4.length;
gdjs.GameCode.forEachSortKeys4.length = 0;
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachTotalCount4;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDCardsObjects4.length = 0;


gdjs.GameCode.GDCardsObjects4.push(gdjs.GameCode.forEachObjects4[gdjs.GameCode.forEachIndex4]);
gdjs.GameCode.forEachSortKeys4.push((( gdjs.GameCode.GDCardsObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDCardsObjects4[0].getZOrder()));
}
gdjs.GameCode.forEachSorted4.length = 0;
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachTotalCount4;++gdjs.GameCode.forEachIndex4) gdjs.GameCode.forEachSorted4.push(gdjs.GameCode.forEachIndex4);
gdjs.GameCode.forEachSorted4.sort(function(a, b) { return true ? gdjs.GameCode.forEachSortKeys4[b] - gdjs.GameCode.forEachSortKeys4[a] : gdjs.GameCode.forEachSortKeys4[a] - gdjs.GameCode.forEachSortKeys4[b]; });
for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.forEachSorted4.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDCardsObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.forEachObjects4[gdjs.GameCode.forEachSorted4[gdjs.GameCode.forEachIndex4]];
gdjs.GameCode.GDCardsObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.GameCode.eventsList170(runtimeScene);} //Subevents end.
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects4Objects = Hashtable.newFrom({"Cards": gdjs.GameCode.GDCardsObjects4});
gdjs.GameCode.eventsList172 = function(runtimeScene) {

};gdjs.GameCode.eventsList173 = function(runtimeScene) {

{


const repeatCount4 = runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Short").getAsNumber();
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects4[i].getVariableNumber(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(2)) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects4[k] = gdjs.GameCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects4Objects);
}
if (isConditionTrue_0)
{
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].returnVariable(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(2)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].hide(false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].setPosition(0,0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].setZOrder(-1 - gdjs.random(50));
}
}
}
}

}


};gdjs.GameCode.eventsList174 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("DeckCount").setNumber(gdjs.evtTools.object.getPickedInstancesCount(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects3Objects));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == 9 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PileCount").setNumber(gdjs.evtTools.object.getPickedInstancesCount(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects3Objects));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("ResCount").setNumber(gdjs.evtTools.object.getPickedInstancesCount(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects3Objects));
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Short").setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Req").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(3).getChild("DeckCount").getAsNumber() - Math.max(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PileCount").getAsNumber() - 1, 0));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
gdjs.GameCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("DeckCount").getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Req").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PileCount").getAsNumber() > 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == 9 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList171(runtimeScene);} //End of subevents
}
gdjs.GameCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Short").getAsNumber() > 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList173(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("DeckRet").getAsNumber());
}
}

}


};gdjs.GameCode.eventsList175 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("State").getAsNumber() == 20);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("DeckCount").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PileCount").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("ResCount").setNumber(0);
}

{ //Subevents
gdjs.GameCode.eventsList174(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTextObjects4Objects = Hashtable.newFrom({"Text": gdjs.GameCode.GDTextObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTextObjects5Objects = Hashtable.newFrom({"Text": gdjs.GameCode.GDTextObjects5});
gdjs.GameCode.eventsList176 = function(runtimeScene) {

};gdjs.GameCode.eventsList177 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.GameCode.GDTextObjects4.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("I").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("ShowP").setNumber(-1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("ShowN").setNumber(0);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTextObjects4Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.GameCode.GDTextObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects4[i].returnVariable(gdjs.GameCode.GDTextObjects4[i].getVariables().getFromIndex(0)).setString("PileText");
}
}
{for(var i = 0, len = gdjs.GameCode.GDTextObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects4[i].returnVariable(gdjs.GameCode.GDTextObjects4[i].getVariables().getFromIndex(1)).setNumber(9);
}
}
{for(var i = 0, len = gdjs.GameCode.GDTextObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects4[i].getBehavior("Scale").setScale(4);
}
}
{for(var i = 0, len = gdjs.GameCode.GDTextObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects4[i].setTextAlignment("center");
}
}
{for(var i = 0, len = gdjs.GameCode.GDTextObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects4[i].setZOrder(1000);
}
}
{for(var i = 0, len = gdjs.GameCode.GDTextObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects4[i].getBehavior("Text").setText("");
}
}
}

}


{


const repeatCount5 = 4;
for (let repeatIndex5 = 0;repeatIndex5 < repeatCount5;++repeatIndex5) {
gdjs.GameCode.GDTextObjects5.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTextObjects5Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.GameCode.GDTextObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects5[i].returnVariable(gdjs.GameCode.GDTextObjects5[i].getVariables().getFromIndex(0)).setString("PText");
}
}
{for(var i = 0, len = gdjs.GameCode.GDTextObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects5[i].returnVariable(gdjs.GameCode.GDTextObjects5[i].getVariables().getFromIndex(1)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("I").getAsNumber());
}
}
{for(var i = 0, len = gdjs.GameCode.GDTextObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects5[i].getBehavior("Scale").setScale(4);
}
}
{for(var i = 0, len = gdjs.GameCode.GDTextObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects5[i].setTextAlignment("center");
}
}
{for(var i = 0, len = gdjs.GameCode.GDTextObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects5[i].setZOrder(99998);
}
}
{for(var i = 0, len = gdjs.GameCode.GDTextObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects5[i].getBehavior("Text").setText("");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("I").add(1);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.GameCode.eventsList178 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("P").getAsNumberOrString()).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("P").getAsNumberOrString()).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDTextObjects5, gdjs.GameCode.GDTextObjects6);

{for(var i = 0, len = gdjs.GameCode.GDTextObjects6.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects6[i].getBehavior("Text").setText("WAIT" + gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(4).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("P").getAsNumberOrString()).getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("ShowP").getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild("P").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("ShowN").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("P").getAsNumberOrString()).getAsNumber() <= 0);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDTextObjects5, gdjs.GameCode.GDTextObjects6);

{for(var i = 0, len = gdjs.GameCode.GDTextObjects6.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects6[i].getBehavior("Text").setText("+" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Shown").getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameCode.GDTextObjects5 */
{for(var i = 0, len = gdjs.GameCode.GDTextObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects5[i].setTextAlignment("center");
}
}
{for(var i = 0, len = gdjs.GameCode.GDTextObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects5[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("TX").getAsNumber() - (gdjs.GameCode.GDTextObjects5[i].getWidth()) / 2,runtimeScene.getScene().getVariables().getFromIndex(1).getChild("TY").getAsNumber() - (gdjs.GameCode.GDTextObjects5[i].getHeight()) / 1.7);
}
}
}

}


};gdjs.GameCode.eventsList179 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("P").getAsNumberOrString()).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("TX").setNumber(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("TY").setNumber(gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginY").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("P").getAsNumberOrString()).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("TX").setNumber(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginX").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("TY").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("P").getAsNumberOrString()).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("TX").setNumber(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("TY").setNumber(gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginY").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("P").getAsNumberOrString()).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("TX").setNumber(gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginX").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("TY").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("P").getAsNumberOrString()).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("P").getAsNumberOrString()).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects5[i].getVariableNumber(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(1).getChild("P").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects5[k] = gdjs.GameCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects5.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects5 */
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].setColor(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("DimColor").getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.GameCode.GDTextObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTextObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDTextObjects5[i].getVariableString(gdjs.GameCode.GDTextObjects5[i].getVariables().getFromIndex(0)) == "PText" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTextObjects5[k] = gdjs.GameCode.GDTextObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDTextObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTextObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDTextObjects5[i].getVariableNumber(gdjs.GameCode.GDTextObjects5[i].getVariables().getFromIndex(1)) == runtimeScene.getScene().getVariables().getFromIndex(1).getChild("P").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTextObjects5[k] = gdjs.GameCode.GDTextObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDTextObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDTextObjects5 */
{for(var i = 0, len = gdjs.GameCode.GDTextObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects5[i].getBehavior("Text").setText("");
}
}

{ //Subevents
gdjs.GameCode.eventsList178(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("P").add(1);
}
}

}


};gdjs.GameCode.eventsList180 = function(runtimeScene) {

{


const repeatCount4 = runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PlayerCount").getAsNumber();
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {

let isConditionTrue_0 = false;
if (true)
{
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("TX").setNumber(-10000);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("TY").setNumber(-10000);
}

{ //Subevents: 
gdjs.GameCode.eventsList179(runtimeScene);} //Subevents end.
}
}

}


};gdjs.GameCode.eventsList181 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Draw").getAsNumber() > 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDTextObjects2, gdjs.GameCode.GDTextObjects3);

{for(var i = 0, len = gdjs.GameCode.GDTextObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects3[i].getBehavior("Text").setText("Draw" + gdjs.evtTools.string.newLine() + "+" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Draw").getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Draw").getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("ShowN").getAsNumber() > 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDTextObjects2, gdjs.GameCode.GDTextObjects3);

{for(var i = 0, len = gdjs.GameCode.GDTextObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects3[i].getBehavior("Text").setText("Draw" + gdjs.evtTools.string.newLine() + "+" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("ShowN").getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Draw").getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("ShowN").getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Skip").getAsNumber() > 0);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDTextObjects2, gdjs.GameCode.GDTextObjects3);

{for(var i = 0, len = gdjs.GameCode.GDTextObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects3[i].getBehavior("Text").setText("WAIT" + gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Skip").getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameCode.GDTextObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects2[i].setTextAlignment("center");
}
}
{for(var i = 0, len = gdjs.GameCode.GDTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects2[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CamCenterX").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() * 4.6,runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CamCenterY").getAsNumber() - (gdjs.GameCode.GDTextObjects2[i].getHeight()) / 2);
}
}
}

}


};gdjs.GameCode.eventsList182 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList177(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("P").setNumber(0);
}

{ //Subevents
gdjs.GameCode.eventsList180(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.GameCode.GDTextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTextObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDTextObjects2[i].getVariableString(gdjs.GameCode.GDTextObjects2[i].getVariables().getFromIndex(0)) == "PileText" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTextObjects2[k] = gdjs.GameCode.GDTextObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDTextObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDTextObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTextObjects2[i].getBehavior("Text").setText("");
}
}

{ //Subevents
gdjs.GameCode.eventsList181(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList183 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Player").getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LastW").getAsNumber()) + Math.abs(gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LastH").getAsNumber()) > 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LastW").setNumber(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LastH").setNumber(gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LayoutAll").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LayoutAll").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LayoutPlayer").getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LayoutPlayer").setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LayoutAll").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LayoutAll").add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LayoutAll").getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(3).getChild("PlayerCount").getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LayoutAll").setNumber(0);
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects3Objects = Hashtable.newFrom({"Cards": gdjs.GameCode.GDCardsObjects3});
gdjs.GameCode.asyncCallback18277836 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").sub(1);
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(18277836, gdjs.GameCode.asyncCallback18277836);
gdjs.GameCode.eventsList184 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardMoveWaitTime").getAsNumber()), (runtimeScene) => (gdjs.GameCode.asyncCallback18277836(runtimeScene, asyncObjectsList)), 18277836, asyncObjectsList);
}
}

}


};gdjs.GameCode.eventsList185 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Seat").getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("OX").setNumber(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("GapH").getAsNumber() * (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("N").getAsNumber() - 1) / 2);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("OY").setNumber(gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginY").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SX").setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("GapH").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SY").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Seat").getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("OX").setNumber(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginX").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("OY").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("GapV").getAsNumber() * (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("N").getAsNumber() - 1) / 2);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SX").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SY").setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("GapV").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Seat").getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("OX").setNumber(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("GapH").getAsNumber() * (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("N").getAsNumber() - 1) / 2);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("OY").setNumber(gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginY").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SX").setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("GapH").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SY").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Seat").getAsNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("OX").setNumber(gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("MarginX").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("OY").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getChild("GapV").getAsNumber() * (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("N").getAsNumber() - 1) / 2);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SX").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SY").setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("GapV").getAsNumber());
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDCardsObjects3, gdjs.GameCode.GDCardsObjects4);


gdjs.GameCode.forEachObjects5.length = 0;
gdjs.GameCode.forEachObjects5.push.apply(gdjs.GameCode.forEachObjects5,gdjs.GameCode.GDCardsObjects4);
gdjs.GameCode.forEachTotalCount5 = gdjs.GameCode.forEachObjects5.length;
gdjs.GameCode.forEachSortKeys5.length = 0;
for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.forEachTotalCount5;++gdjs.GameCode.forEachIndex5) {
gdjs.GameCode.GDCardsObjects5.length = 0;


gdjs.GameCode.GDCardsObjects5.push(gdjs.GameCode.forEachObjects5[gdjs.GameCode.forEachIndex5]);
gdjs.GameCode.forEachSortKeys5.push(((gdjs.GameCode.GDCardsObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects5[0].getVariables()).getFromIndex(0).getAsNumber() + ((gdjs.GameCode.GDCardsObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCardsObjects5[0].getVariables()).getFromIndex(1).getAsNumber() * 16);
}
gdjs.GameCode.forEachSorted5.length = 0;
for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.forEachTotalCount5;++gdjs.GameCode.forEachIndex5) gdjs.GameCode.forEachSorted5.push(gdjs.GameCode.forEachIndex5);
gdjs.GameCode.forEachSorted5.sort(function(a, b) { return false ? gdjs.GameCode.forEachSortKeys5[b] - gdjs.GameCode.forEachSortKeys5[a] : gdjs.GameCode.forEachSortKeys5[a] - gdjs.GameCode.forEachSortKeys5[b]; });
for (gdjs.GameCode.forEachIndex5 = 0;gdjs.GameCode.forEachIndex5 < gdjs.GameCode.forEachSorted5.length;++gdjs.GameCode.forEachIndex5) {
gdjs.GameCode.GDCardsObjects5.length = 0;


gdjs.GameCode.forEachTemporary5 = gdjs.GameCode.forEachObjects5[gdjs.GameCode.forEachSorted5[gdjs.GameCode.forEachIndex5]];
gdjs.GameCode.GDCardsObjects5.push(gdjs.GameCode.forEachTemporary5);
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("CardMove").add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].returnVariable(gdjs.GameCode.GDCardsObjects5[i].getVariables().getFromIndex(7)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Adv").getAsNumber());
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].setZOrder(100 * runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LayoutPlayer").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Adv").getAsNumber());
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects5[i].getBehavior("Tween").addObjectPositionTween2("Move", gdjs.evtTools.common.trunc(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("OX").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SX").getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Adv").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() / 2), gdjs.evtTools.common.trunc(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("OY").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("SY").getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Adv").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() / 2), "linear", runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardMoveWaitTime").getAsNumber(), false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Adv").add(1);
}

{ //Subevents: 
gdjs.GameCode.eventsList184(runtimeScene);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Seat").getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCardsObjects3, gdjs.GameCode.GDCardsObjects4);

{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].getBehavior("Animation").setAnimationName("FrontFace");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects4[i].setAnimationFrame(gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(0).getAsNumber() + gdjs.GameCode.GDCardsObjects4[i].getVariables().getFromIndex(1).getAsNumber() * 16);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Seat").getAsNumber() != 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCardsObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].getBehavior("Animation").setAnimationName("BackFace");
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.GameCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCardsObjects3[i].setAnimationFrame(0);
}
}
}

}


};gdjs.GameCode.eventsList186 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.GameCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LayoutPlayer").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCardsObjects3[i].getVariableNumber(gdjs.GameCode.GDCardsObjects3[i].getVariables().getFromIndex(2)) == runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LayoutPlayer").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCardsObjects3[k] = gdjs.GameCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCardsObjects3.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("N").setNumber(gdjs.evtTools.object.getPickedInstancesCount(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCardsObjects3Objects));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Seat").setNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LayoutPlayer").getAsNumber() - 1).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("GapH").setNumber(Math.min(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() / 2, (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardWidth").getAsNumber() * 7) / Math.max(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("N").getAsNumber() - 1, 1)));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("GapV").setNumber(Math.min(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() / 4, (gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CardHeight").getAsNumber() * 1.5) / Math.max(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("N").getAsNumber() - 1, 1)));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Adv").setNumber(0);
}

{ //Subevents
gdjs.GameCode.eventsList185(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LayoutPlayer").getAsNumber() > 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("LayoutPlayer").setNumber(0);
}
}

}


};gdjs.GameCode.eventsList187 = function(runtimeScene) {

{


gdjs.GameCode.eventsList98(runtimeScene);
}


{


gdjs.GameCode.eventsList99(runtimeScene);
}


{


gdjs.GameCode.eventsList103(runtimeScene);
}


{


gdjs.GameCode.eventsList104(runtimeScene);
}


{


gdjs.GameCode.eventsList105(runtimeScene);
}


{


gdjs.GameCode.eventsList110(runtimeScene);
}


{


gdjs.GameCode.eventsList111(runtimeScene);
}


{


gdjs.GameCode.eventsList114(runtimeScene);
}


{


gdjs.GameCode.eventsList116(runtimeScene);
}


{


gdjs.GameCode.eventsList127(runtimeScene);
}


{


gdjs.GameCode.eventsList129(runtimeScene);
}


{


gdjs.GameCode.eventsList131(runtimeScene);
}


{


gdjs.GameCode.eventsList132(runtimeScene);
}


{


gdjs.GameCode.eventsList141(runtimeScene);
}


{


gdjs.GameCode.eventsList145(runtimeScene);
}


{


gdjs.GameCode.eventsList147(runtimeScene);
}


{


gdjs.GameCode.eventsList149(runtimeScene);
}


{


gdjs.GameCode.eventsList157(runtimeScene);
}


{


gdjs.GameCode.eventsList161(runtimeScene);
}


{


gdjs.GameCode.eventsList168(runtimeScene);
}


{


gdjs.GameCode.eventsList169(runtimeScene);
}


{


gdjs.GameCode.eventsList175(runtimeScene);
}


{


gdjs.GameCode.eventsList182(runtimeScene);
}


{


gdjs.GameCode.eventsList183(runtimeScene);
}


{


gdjs.GameCode.eventsList186(runtimeScene);
}


};gdjs.GameCode.eventsList188 = function(runtimeScene) {

{


gdjs.GameCode.eventsList6(runtimeScene);
}


{


gdjs.GameCode.eventsList10(runtimeScene);
}


{


gdjs.GameCode.eventsList20(runtimeScene);
}


{


gdjs.GameCode.eventsList45(runtimeScene);
}


{


gdjs.GameCode.eventsList46(runtimeScene);
}


{


gdjs.GameCode.eventsList91(runtimeScene);
}


{


gdjs.GameCode.eventsList93(runtimeScene);
}


{


gdjs.GameCode.eventsList94(runtimeScene);
}


{


gdjs.GameCode.eventsList187(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDCardsObjects1.length = 0;
gdjs.GameCode.GDCardsObjects2.length = 0;
gdjs.GameCode.GDCardsObjects3.length = 0;
gdjs.GameCode.GDCardsObjects4.length = 0;
gdjs.GameCode.GDCardsObjects5.length = 0;
gdjs.GameCode.GDCardsObjects6.length = 0;
gdjs.GameCode.GDCardsObjects7.length = 0;
gdjs.GameCode.GDCardsObjects8.length = 0;
gdjs.GameCode.GDTextObjects1.length = 0;
gdjs.GameCode.GDTextObjects2.length = 0;
gdjs.GameCode.GDTextObjects3.length = 0;
gdjs.GameCode.GDTextObjects4.length = 0;
gdjs.GameCode.GDTextObjects5.length = 0;
gdjs.GameCode.GDTextObjects6.length = 0;
gdjs.GameCode.GDTextObjects7.length = 0;
gdjs.GameCode.GDTextObjects8.length = 0;
gdjs.GameCode.GDHandObjects1.length = 0;
gdjs.GameCode.GDHandObjects2.length = 0;
gdjs.GameCode.GDHandObjects3.length = 0;
gdjs.GameCode.GDHandObjects4.length = 0;
gdjs.GameCode.GDHandObjects5.length = 0;
gdjs.GameCode.GDHandObjects6.length = 0;
gdjs.GameCode.GDHandObjects7.length = 0;
gdjs.GameCode.GDHandObjects8.length = 0;
gdjs.GameCode.GDButtonObjects1.length = 0;
gdjs.GameCode.GDButtonObjects2.length = 0;
gdjs.GameCode.GDButtonObjects3.length = 0;
gdjs.GameCode.GDButtonObjects4.length = 0;
gdjs.GameCode.GDButtonObjects5.length = 0;
gdjs.GameCode.GDButtonObjects6.length = 0;
gdjs.GameCode.GDButtonObjects7.length = 0;
gdjs.GameCode.GDButtonObjects8.length = 0;
gdjs.GameCode.GDColorPickerObjects1.length = 0;
gdjs.GameCode.GDColorPickerObjects2.length = 0;
gdjs.GameCode.GDColorPickerObjects3.length = 0;
gdjs.GameCode.GDColorPickerObjects4.length = 0;
gdjs.GameCode.GDColorPickerObjects5.length = 0;
gdjs.GameCode.GDColorPickerObjects6.length = 0;
gdjs.GameCode.GDColorPickerObjects7.length = 0;
gdjs.GameCode.GDColorPickerObjects8.length = 0;

gdjs.GameCode.eventsList188(runtimeScene);
gdjs.GameCode.GDCardsObjects1.length = 0;
gdjs.GameCode.GDCardsObjects2.length = 0;
gdjs.GameCode.GDCardsObjects3.length = 0;
gdjs.GameCode.GDCardsObjects4.length = 0;
gdjs.GameCode.GDCardsObjects5.length = 0;
gdjs.GameCode.GDCardsObjects6.length = 0;
gdjs.GameCode.GDCardsObjects7.length = 0;
gdjs.GameCode.GDCardsObjects8.length = 0;
gdjs.GameCode.GDTextObjects1.length = 0;
gdjs.GameCode.GDTextObjects2.length = 0;
gdjs.GameCode.GDTextObjects3.length = 0;
gdjs.GameCode.GDTextObjects4.length = 0;
gdjs.GameCode.GDTextObjects5.length = 0;
gdjs.GameCode.GDTextObjects6.length = 0;
gdjs.GameCode.GDTextObjects7.length = 0;
gdjs.GameCode.GDTextObjects8.length = 0;
gdjs.GameCode.GDHandObjects1.length = 0;
gdjs.GameCode.GDHandObjects2.length = 0;
gdjs.GameCode.GDHandObjects3.length = 0;
gdjs.GameCode.GDHandObjects4.length = 0;
gdjs.GameCode.GDHandObjects5.length = 0;
gdjs.GameCode.GDHandObjects6.length = 0;
gdjs.GameCode.GDHandObjects7.length = 0;
gdjs.GameCode.GDHandObjects8.length = 0;
gdjs.GameCode.GDButtonObjects1.length = 0;
gdjs.GameCode.GDButtonObjects2.length = 0;
gdjs.GameCode.GDButtonObjects3.length = 0;
gdjs.GameCode.GDButtonObjects4.length = 0;
gdjs.GameCode.GDButtonObjects5.length = 0;
gdjs.GameCode.GDButtonObjects6.length = 0;
gdjs.GameCode.GDButtonObjects7.length = 0;
gdjs.GameCode.GDButtonObjects8.length = 0;
gdjs.GameCode.GDColorPickerObjects1.length = 0;
gdjs.GameCode.GDColorPickerObjects2.length = 0;
gdjs.GameCode.GDColorPickerObjects3.length = 0;
gdjs.GameCode.GDColorPickerObjects4.length = 0;
gdjs.GameCode.GDColorPickerObjects5.length = 0;
gdjs.GameCode.GDColorPickerObjects6.length = 0;
gdjs.GameCode.GDColorPickerObjects7.length = 0;
gdjs.GameCode.GDColorPickerObjects8.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
