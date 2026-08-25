gdjs.StairsSceneCode = {};
gdjs.StairsSceneCode.localVariables = [];
gdjs.StairsSceneCode.idToCallbackMap = new Map();
gdjs.StairsSceneCode.forEachIndex3 = 0;

gdjs.StairsSceneCode.forEachIndex4 = 0;

gdjs.StairsSceneCode.forEachObjects3 = [];

gdjs.StairsSceneCode.forEachObjects4 = [];

gdjs.StairsSceneCode.forEachTemporary3 = null;

gdjs.StairsSceneCode.forEachTemporary4 = null;

gdjs.StairsSceneCode.forEachTotalCount3 = 0;

gdjs.StairsSceneCode.forEachTotalCount4 = 0;

gdjs.StairsSceneCode.GDStairsObjects1= [];
gdjs.StairsSceneCode.GDStairsObjects2= [];
gdjs.StairsSceneCode.GDStairsObjects3= [];
gdjs.StairsSceneCode.GDStairsObjects4= [];
gdjs.StairsSceneCode.GDStairsObjects5= [];
gdjs.StairsSceneCode.GDPlayerObjectObjects1= [];
gdjs.StairsSceneCode.GDPlayerObjectObjects2= [];
gdjs.StairsSceneCode.GDPlayerObjectObjects3= [];
gdjs.StairsSceneCode.GDPlayerObjectObjects4= [];
gdjs.StairsSceneCode.GDPlayerObjectObjects5= [];
gdjs.StairsSceneCode.GDStairsBackWallObjects1= [];
gdjs.StairsSceneCode.GDStairsBackWallObjects2= [];
gdjs.StairsSceneCode.GDStairsBackWallObjects3= [];
gdjs.StairsSceneCode.GDStairsBackWallObjects4= [];
gdjs.StairsSceneCode.GDStairsBackWallObjects5= [];
gdjs.StairsSceneCode.GDCandleObjects1= [];
gdjs.StairsSceneCode.GDCandleObjects2= [];
gdjs.StairsSceneCode.GDCandleObjects3= [];
gdjs.StairsSceneCode.GDCandleObjects4= [];
gdjs.StairsSceneCode.GDCandleObjects5= [];
gdjs.StairsSceneCode.GDFlameObjects1= [];
gdjs.StairsSceneCode.GDFlameObjects2= [];
gdjs.StairsSceneCode.GDFlameObjects3= [];
gdjs.StairsSceneCode.GDFlameObjects4= [];
gdjs.StairsSceneCode.GDFlameObjects5= [];
gdjs.StairsSceneCode.GDFrameObjects1= [];
gdjs.StairsSceneCode.GDFrameObjects2= [];
gdjs.StairsSceneCode.GDFrameObjects3= [];
gdjs.StairsSceneCode.GDFrameObjects4= [];
gdjs.StairsSceneCode.GDFrameObjects5= [];
gdjs.StairsSceneCode.GDBlackBGObjects1= [];
gdjs.StairsSceneCode.GDBlackBGObjects2= [];
gdjs.StairsSceneCode.GDBlackBGObjects3= [];
gdjs.StairsSceneCode.GDBlackBGObjects4= [];
gdjs.StairsSceneCode.GDBlackBGObjects5= [];
gdjs.StairsSceneCode.GDBitmapYouDiedObjects1= [];
gdjs.StairsSceneCode.GDBitmapYouDiedObjects2= [];
gdjs.StairsSceneCode.GDBitmapYouDiedObjects3= [];
gdjs.StairsSceneCode.GDBitmapYouDiedObjects4= [];
gdjs.StairsSceneCode.GDBitmapYouDiedObjects5= [];
gdjs.StairsSceneCode.GDJoystickObjects1= [];
gdjs.StairsSceneCode.GDJoystickObjects2= [];
gdjs.StairsSceneCode.GDJoystickObjects3= [];
gdjs.StairsSceneCode.GDJoystickObjects4= [];
gdjs.StairsSceneCode.GDJoystickObjects5= [];
gdjs.StairsSceneCode.GDDpadUpObjects1= [];
gdjs.StairsSceneCode.GDDpadUpObjects2= [];
gdjs.StairsSceneCode.GDDpadUpObjects3= [];
gdjs.StairsSceneCode.GDDpadUpObjects4= [];
gdjs.StairsSceneCode.GDDpadUpObjects5= [];
gdjs.StairsSceneCode.GDDpadDownObjects1= [];
gdjs.StairsSceneCode.GDDpadDownObjects2= [];
gdjs.StairsSceneCode.GDDpadDownObjects3= [];
gdjs.StairsSceneCode.GDDpadDownObjects4= [];
gdjs.StairsSceneCode.GDDpadDownObjects5= [];
gdjs.StairsSceneCode.GDDpadLeftObjects1= [];
gdjs.StairsSceneCode.GDDpadLeftObjects2= [];
gdjs.StairsSceneCode.GDDpadLeftObjects3= [];
gdjs.StairsSceneCode.GDDpadLeftObjects4= [];
gdjs.StairsSceneCode.GDDpadLeftObjects5= [];
gdjs.StairsSceneCode.GDDpadRightObjects1= [];
gdjs.StairsSceneCode.GDDpadRightObjects2= [];
gdjs.StairsSceneCode.GDDpadRightObjects3= [];
gdjs.StairsSceneCode.GDDpadRightObjects4= [];
gdjs.StairsSceneCode.GDDpadRightObjects5= [];
gdjs.StairsSceneCode.GDButtonObjects1= [];
gdjs.StairsSceneCode.GDButtonObjects2= [];
gdjs.StairsSceneCode.GDButtonObjects3= [];
gdjs.StairsSceneCode.GDButtonObjects4= [];
gdjs.StairsSceneCode.GDButtonObjects5= [];
gdjs.StairsSceneCode.GDLandscapeBlackObjects1= [];
gdjs.StairsSceneCode.GDLandscapeBlackObjects2= [];
gdjs.StairsSceneCode.GDLandscapeBlackObjects3= [];
gdjs.StairsSceneCode.GDLandscapeBlackObjects4= [];
gdjs.StairsSceneCode.GDLandscapeBlackObjects5= [];
gdjs.StairsSceneCode.GDLandscapeObjects1= [];
gdjs.StairsSceneCode.GDLandscapeObjects2= [];
gdjs.StairsSceneCode.GDLandscapeObjects3= [];
gdjs.StairsSceneCode.GDLandscapeObjects4= [];
gdjs.StairsSceneCode.GDLandscapeObjects5= [];
gdjs.StairsSceneCode.GDSettingsButtonObjects1= [];
gdjs.StairsSceneCode.GDSettingsButtonObjects2= [];
gdjs.StairsSceneCode.GDSettingsButtonObjects3= [];
gdjs.StairsSceneCode.GDSettingsButtonObjects4= [];
gdjs.StairsSceneCode.GDSettingsButtonObjects5= [];
gdjs.StairsSceneCode.GDCloseButtonObjects1= [];
gdjs.StairsSceneCode.GDCloseButtonObjects2= [];
gdjs.StairsSceneCode.GDCloseButtonObjects3= [];
gdjs.StairsSceneCode.GDCloseButtonObjects4= [];
gdjs.StairsSceneCode.GDCloseButtonObjects5= [];
gdjs.StairsSceneCode.GDOpacityButtonObjects1= [];
gdjs.StairsSceneCode.GDOpacityButtonObjects2= [];
gdjs.StairsSceneCode.GDOpacityButtonObjects3= [];
gdjs.StairsSceneCode.GDOpacityButtonObjects4= [];
gdjs.StairsSceneCode.GDOpacityButtonObjects5= [];
gdjs.StairsSceneCode.GDSizeButtonObjects1= [];
gdjs.StairsSceneCode.GDSizeButtonObjects2= [];
gdjs.StairsSceneCode.GDSizeButtonObjects3= [];
gdjs.StairsSceneCode.GDSizeButtonObjects4= [];
gdjs.StairsSceneCode.GDSizeButtonObjects5= [];


gdjs.StairsSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SaveLoadEasy__SaveExist.func(runtimeScene, "Save", "MyStorage", null);
if (isConditionTrue_0) {
{gdjs.evtsExt__SaveLoadEasy__Load.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3), "Save", "MyStorage", null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__SaveLoadEasy__SaveExist.func(runtimeScene, "Save", "MyStorage", null));
if (isConditionTrue_0) {
{gdjs.evtsExt__SaveLoadEasy__Save.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3), "Save", "MyStorage", null);
}
}

}


};gdjs.StairsSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.StairsSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.StairsSceneCode.eventsList2 = function(runtimeScene) {

{


gdjs.StairsSceneCode.eventsList1(runtimeScene);
}


};gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDLandscapeBlackObjects2Objects = Hashtable.newFrom({"LandscapeBlack": gdjs.StairsSceneCode.GDLandscapeBlackObjects2});
gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDLandscapeObjects2Objects = Hashtable.newFrom({"Landscape": gdjs.StairsSceneCode.GDLandscapeObjects2});
gdjs.StairsSceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32192972);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.StairsSceneCode.GDLandscapeObjects2, gdjs.StairsSceneCode.GDLandscapeObjects3);

{for(var i = 0, len = gdjs.StairsSceneCode.GDLandscapeObjects3.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDLandscapeObjects3[i].getBehavior("Scale").setScale(4);
}
}
}

}


{

/* Reuse gdjs.StairsSceneCode.GDLandscapeObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) < (( gdjs.StairsSceneCode.GDLandscapeObjects2.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDLandscapeObjects2[0].getWidth()) / 2);
}
if (isConditionTrue_0) {
/* Reuse gdjs.StairsSceneCode.GDLandscapeObjects2 */
{for(var i = 0, len = gdjs.StairsSceneCode.GDLandscapeObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDLandscapeObjects2[i].getBehavior("Scale").setScale(gdjs.StairsSceneCode.GDLandscapeObjects2[i].getBehavior("Scale").getScale() - (1));
}
}
}

}


};gdjs.StairsSceneCode.eventsList4 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.StairsSceneCode.GDLandscapeObjects2.length = 0;

gdjs.StairsSceneCode.GDLandscapeBlackObjects2.length = 0;

{gdjs.evtTools.camera.hideLayer(runtimeScene, "LandscapeLayer");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDLandscapeBlackObjects2Objects, -9999, -9999, "LandscapeLayer");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDLandscapeObjects2Objects, -9999, -9999, "LandscapeLayer");
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDLandscapeObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDLandscapeObjects2[i].getBehavior("Scale").setScale(4);
}
}
}

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) < gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Landscape"), gdjs.StairsSceneCode.GDLandscapeObjects2);
gdjs.copyArray(runtimeScene.getObjects("LandscapeBlack"), gdjs.StairsSceneCode.GDLandscapeBlackObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "LandscapeLayer");
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDLandscapeBlackObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDLandscapeBlackObjects2[i].getBehavior("Resizable").setSize(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "LandscapeLayer", 0) + 16, gdjs.evtTools.camera.getCameraHeight(runtimeScene, "LandscapeLayer", 0) + 16);
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDLandscapeBlackObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDLandscapeBlackObjects2[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "LandscapeLayer", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "LandscapeLayer", 0));
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDLandscapeObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDLandscapeObjects2[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "LandscapeLayer", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "LandscapeLayer", 0));
}
}

{ //Subevents
gdjs.StairsSceneCode.eventsList3(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32195860);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "LandscapeLayer");
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.StairsSceneCode.eventsList5 = function(runtimeScene) {

{


gdjs.StairsSceneCode.eventsList4(runtimeScene);
}


};gdjs.StairsSceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, gdjs.StairsSceneCode.localVariables[0].getFromIndex(0).getAsNumber(), null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.StairsSceneCode.localVariables[0].getFromIndex(0).getAsNumber(), "Left", "Any", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.StairsSceneCode.localVariables[0].getFromIndex(0).getAsNumber(), "Right", "Any", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("PadID").setNumber(gdjs.StairsSceneCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.StairsSceneCode.localVariables[0].getFromIndex(0).add(1);
}
}

}


};gdjs.StairsSceneCode.eventsList7 = function(runtimeScene) {

{


const repeatCount3 = 4;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.StairsSceneCode.eventsList6(runtimeScene);} //Subevents end.
}
}

}


};gdjs.StairsSceneCode.eventsList8 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("ID", variable);
}
gdjs.StairsSceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{gdjs.StairsSceneCode.localVariables[0].getFromIndex(0).setNumber(1);
}

{ //Subevents
gdjs.StairsSceneCode.eventsList7(runtimeScene);} //End of subevents
}
gdjs.StairsSceneCode.localVariables.pop();

}


};gdjs.StairsSceneCode.asyncCallback30976228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.StairsSceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}
gdjs.StairsSceneCode.localVariables.length = 0;
}
gdjs.StairsSceneCode.idToCallbackMap.set(30976228, gdjs.StairsSceneCode.asyncCallback30976228);
gdjs.StairsSceneCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.StairsSceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StairsSceneCode.asyncCallback30976228(runtimeScene, asyncObjectsList)), 30976228, asyncObjectsList);
}
}

}


};gdjs.StairsSceneCode.eventsList10 = function(runtimeScene) {

{


gdjs.StairsSceneCode.eventsList8(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("BlackBG"), gdjs.StairsSceneCode.GDBlackBGObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) > 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Level").getAsNumber() == 31);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StairsSceneCode.GDBlackBGObjects1.length;i<l;++i) {
    if ( !(gdjs.StairsSceneCode.GDBlackBGObjects1[i].getBehavior("Tween").isPlaying("Hide")) ) {
        isConditionTrue_0 = true;
        gdjs.StairsSceneCode.GDBlackBGObjects1[k] = gdjs.StairsSceneCode.GDBlackBGObjects1[i];
        ++k;
    }
}
gdjs.StairsSceneCode.GDBlackBGObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getChild("PadID").getAsNumber(), null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getChild("PadID").getAsNumber(), "Left", "Any", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getChild("PadID").getAsNumber(), "Right", "Any", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.StairsSceneCode.GDBlackBGObjects1 */
{for(var i = 0, len = gdjs.StairsSceneCode.GDBlackBGObjects1.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBlackBGObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Hide", 255, "linear", 1, false);
}
}

{ //Subevents
gdjs.StairsSceneCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDStairsBackWallObjects3Objects = Hashtable.newFrom({"StairsBackWall": gdjs.StairsSceneCode.GDStairsBackWallObjects3});
gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDStairsObjects3Objects = Hashtable.newFrom({"Stairs": gdjs.StairsSceneCode.GDStairsObjects3});
gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDPlayerObjectObjects3Objects = Hashtable.newFrom({"PlayerObject": gdjs.StairsSceneCode.GDPlayerObjectObjects3});
gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDFrameObjects3Objects = Hashtable.newFrom({"Frame": gdjs.StairsSceneCode.GDFrameObjects3});
gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDBitmapYouDiedObjects2Objects = Hashtable.newFrom({"BitmapYouDied": gdjs.StairsSceneCode.GDBitmapYouDiedObjects2});
gdjs.StairsSceneCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.StairsSceneCode.GDFrameObjects3.length = 0;

gdjs.StairsSceneCode.GDPlayerObjectObjects3.length = 0;

gdjs.StairsSceneCode.GDStairsObjects3.length = 0;

gdjs.StairsSceneCode.GDStairsBackWallObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDStairsBackWallObjects3Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDStairsBackWallObjects3.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDStairsBackWallObjects3[i].setColor("54;54;54");
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDStairsObjects3Objects, 0, 0, "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDPlayerObjectObjects3Objects, (( gdjs.StairsSceneCode.GDStairsObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDStairsObjects3[0].getPointX("Start")), (( gdjs.StairsSceneCode.GDStairsObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDStairsObjects3[0].getPointY("Start")) - 42, "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDFrameObjects3Objects, (( gdjs.StairsSceneCode.GDStairsObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDStairsObjects3[0].getPointX("Start")), (( gdjs.StairsSceneCode.GDStairsObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDStairsObjects3[0].getPointY("Start")) - 42, "");
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDPlayerObjectObjects3.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDPlayerObjectObjects3[i].activateBehavior("RemapForTopdown", false);
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDPlayerObjectObjects3.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDPlayerObjectObjects3[i].getBehavior("Animation").setAnimationName("WalkRight");
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDPlayerObjectObjects3.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDPlayerObjectObjects3[i].getBehavior("TopDownMovement").ignoreDefaultControls(true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.angleBetweenPositions((( gdjs.StairsSceneCode.GDStairsObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDStairsObjects3[0].getPointX("AngleA")), (( gdjs.StairsSceneCode.GDStairsObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDStairsObjects3[0].getPointY("AngleA")), (( gdjs.StairsSceneCode.GDStairsObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDStairsObjects3[0].getPointX("AngleB")), (( gdjs.StairsSceneCode.GDStairsObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDStairsObjects3[0].getPointY("AngleB"))));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.StairsSceneCode.GDBitmapYouDiedObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDBitmapYouDiedObjects2Objects, 1, -9999, "Layer2");
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDBitmapYouDiedObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBitmapYouDiedObjects2[i].returnVariable(gdjs.StairsSceneCode.GDBitmapYouDiedObjects2[i].getVariables().getFromIndex(0)).setNumber(2);
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDBitmapYouDiedObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBitmapYouDiedObjects2[i].getBehavior("Scale").setScale(0.05);
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDBitmapYouDiedObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBitmapYouDiedObjects2[i].setZOrder(8);
}
}
}

}


};gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDCandleObjects3Objects = Hashtable.newFrom({"Candle": gdjs.StairsSceneCode.GDCandleObjects3});
gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDFlameObjects3Objects = Hashtable.newFrom({"Flame": gdjs.StairsSceneCode.GDFlameObjects3});
gdjs.StairsSceneCode.eventsList12 = function(runtimeScene) {

};gdjs.StairsSceneCode.eventsList13 = function(runtimeScene) {

{


const repeatCount3 = 10;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.copyArray(runtimeScene.getObjects("Stairs"), gdjs.StairsSceneCode.GDStairsObjects3);
gdjs.StairsSceneCode.GDCandleObjects3.length = 0;

gdjs.StairsSceneCode.GDFlameObjects3.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDCandleObjects3Objects, (( gdjs.StairsSceneCode.GDStairsObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDStairsObjects3[0].getPointX("Start")) + 20, (( gdjs.StairsSceneCode.GDStairsObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDStairsObjects3[0].getPointY("Start")) - 52, "");
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDCandleObjects3.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDCandleObjects3[i].returnVariable(gdjs.StairsSceneCode.GDCandleObjects3[i].getVariables().getFromIndex(0)).setNumber(gdjs.StairsSceneCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDCandleObjects3.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDCandleObjects3[i].putAround((( gdjs.StairsSceneCode.GDStairsObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDStairsObjects3[0].getPointX("A")), (( gdjs.StairsSceneCode.GDStairsObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDStairsObjects3[0].getPointY("A")), 40 * gdjs.StairsSceneCode.GDCandleObjects3[i].getVariables().getFromIndex(0).getAsNumber(), gdjs.evtTools.common.angleBetweenPositions((( gdjs.StairsSceneCode.GDStairsObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDStairsObjects3[0].getPointX("A")), (( gdjs.StairsSceneCode.GDStairsObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDStairsObjects3[0].getPointY("A")), (( gdjs.StairsSceneCode.GDStairsObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDStairsObjects3[0].getPointX("B")), (( gdjs.StairsSceneCode.GDStairsObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDStairsObjects3[0].getPointY("B"))));
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDFlameObjects3Objects, (( gdjs.StairsSceneCode.GDCandleObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDCandleObjects3[0].getPointX("")), (( gdjs.StairsSceneCode.GDCandleObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDCandleObjects3[0].getPointY("")) - 7, "");
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDFlameObjects3.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDFlameObjects3[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.common.mod(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Level").getAsNumber() - 1, 6));
}
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.StairsSceneCode.GDCandleObjects3.length !== 0 ? gdjs.StairsSceneCode.GDCandleObjects3[0] : null), (gdjs.StairsSceneCode.GDFlameObjects3.length !== 0 ? gdjs.StairsSceneCode.GDFlameObjects3[0] : null));
}
{gdjs.StairsSceneCode.localVariables[0].getFromIndex(0).add(1);
}
}
}

}


};gdjs.StairsSceneCode.eventsList14 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
gdjs.StairsSceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{gdjs.StairsSceneCode.localVariables[0].getFromIndex(0).setNumber(1);
}

{ //Subevents
gdjs.StairsSceneCode.eventsList13(runtimeScene);} //End of subevents
}
gdjs.StairsSceneCode.localVariables.pop();

}


};gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDBlackBGObjects3Objects = Hashtable.newFrom({"BlackBG": gdjs.StairsSceneCode.GDBlackBGObjects3});
gdjs.StairsSceneCode.eventsList15 = function(runtimeScene) {

};gdjs.StairsSceneCode.eventsList16 = function(runtimeScene) {

{


const repeatCount3 = 5;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.StairsSceneCode.GDBlackBGObjects3.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDBlackBGObjects3Objects, 1, 1, "Layer2");
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDBlackBGObjects3.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBlackBGObjects3[i].returnVariable(gdjs.StairsSceneCode.GDBlackBGObjects3[i].getVariables().getFromIndex(0)).setNumber(gdjs.StairsSceneCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}
{gdjs.StairsSceneCode.localVariables[0].getFromIndex(0).add(1);
}
}
}

}


};gdjs.StairsSceneCode.eventsList17 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
gdjs.StairsSceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.StairsSceneCode.eventsList16(runtimeScene);} //End of subevents
}
gdjs.StairsSceneCode.localVariables.pop();

}


};gdjs.StairsSceneCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BlackBG"), gdjs.StairsSceneCode.GDBlackBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("Candle"), gdjs.StairsSceneCode.GDCandleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Flame"), gdjs.StairsSceneCode.GDFlameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Frame"), gdjs.StairsSceneCode.GDFrameObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerObject"), gdjs.StairsSceneCode.GDPlayerObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Stairs"), gdjs.StairsSceneCode.GDStairsObjects1);
gdjs.copyArray(runtimeScene.getObjects("StairsBackWall"), gdjs.StairsSceneCode.GDStairsBackWallObjects1);
{for(var i = 0, len = gdjs.StairsSceneCode.GDStairsBackWallObjects1.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDStairsBackWallObjects1[i].setZOrder(0);
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDStairsObjects1.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDStairsObjects1[i].setZOrder(1);
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDCandleObjects1.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDCandleObjects1[i].setZOrder(2);
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDFlameObjects1.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDFlameObjects1[i].setZOrder(3);
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDPlayerObjectObjects1.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDPlayerObjectObjects1[i].setZOrder(4);
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDBlackBGObjects1.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBlackBGObjects1[i].setZOrder(5);
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDFrameObjects1.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDFrameObjects1[i].setZOrder(6);
}
}
}

}


};gdjs.StairsSceneCode.eventsList19 = function(runtimeScene) {

{


gdjs.StairsSceneCode.eventsList11(runtimeScene);
}


{


gdjs.StairsSceneCode.eventsList14(runtimeScene);
}


{


gdjs.StairsSceneCode.eventsList17(runtimeScene);
}


{


gdjs.StairsSceneCode.eventsList18(runtimeScene);
}


};gdjs.StairsSceneCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 6, "", 0);
}
{gdjs.evtTools.advancedWindow.maximize(true, runtimeScene);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 4000, "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 4000, "", 0);
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}

{ //Subevents
gdjs.StairsSceneCode.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.StairsSceneCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Frame"), gdjs.StairsSceneCode.GDFrameObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerObject"), gdjs.StairsSceneCode.GDPlayerObjectObjects2);
gdjs.copyArray(runtimeScene.getObjects("StairsBackWall"), gdjs.StairsSceneCode.GDStairsBackWallObjects2);
{for(var i = 0, len = gdjs.StairsSceneCode.GDFrameObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDFrameObjects2[i].getBehavior("Resizable").setSize(128, 80);
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDStairsBackWallObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDStairsBackWallObjects2[i].getBehavior("Resizable").setSize(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) + 32, gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) + 32);
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDStairsBackWallObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDStairsBackWallObjects2[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) - 16,gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) - 16);
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDFrameObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDFrameObjects2[i].setCenterPositionInScene((( gdjs.StairsSceneCode.GDPlayerObjectObjects2.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDPlayerObjectObjects2[0].getCenterXInScene()),(( gdjs.StairsSceneCode.GDPlayerObjectObjects2.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDPlayerObjectObjects2[0].getCenterYInScene()));
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDStairsBackWallObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDStairsBackWallObjects2[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDStairsBackWallObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDStairsBackWallObjects2[i].setYOffset(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}
}

}


};gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDStairsObjects2Objects = Hashtable.newFrom({"Stairs": gdjs.StairsSceneCode.GDStairsObjects2});
gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDCandleObjects3Objects = Hashtable.newFrom({"Candle": gdjs.StairsSceneCode.GDCandleObjects3});
gdjs.StairsSceneCode.eventsList22 = function(runtimeScene) {

};gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDCandleObjects3Objects = Hashtable.newFrom({"Candle": gdjs.StairsSceneCode.GDCandleObjects3});
gdjs.StairsSceneCode.eventsList23 = function(runtimeScene) {

};gdjs.StairsSceneCode.eventsList24 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Candle"), gdjs.StairsSceneCode.GDCandleObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDCandleObjects3Objects, gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0), false);
if (isConditionTrue_0) {
/* Reuse gdjs.StairsSceneCode.GDCandleObjects3 */
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber((( gdjs.StairsSceneCode.GDCandleObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDCandleObjects3[0].getPointX("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber((( gdjs.StairsSceneCode.GDCandleObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDCandleObjects3[0].getPointY("")) + 8);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Candle"), gdjs.StairsSceneCode.GDCandleObjects3);

for (gdjs.StairsSceneCode.forEachIndex4 = 0;gdjs.StairsSceneCode.forEachIndex4 < gdjs.StairsSceneCode.GDCandleObjects3.length;++gdjs.StairsSceneCode.forEachIndex4) {
gdjs.copyArray(gdjs.StairsSceneCode.GDStairsObjects2, gdjs.StairsSceneCode.GDStairsObjects4);

gdjs.StairsSceneCode.GDCandleObjects4.length = 0;


gdjs.StairsSceneCode.forEachTemporary4 = gdjs.StairsSceneCode.GDCandleObjects3[gdjs.StairsSceneCode.forEachIndex4];
gdjs.StairsSceneCode.GDCandleObjects4.push(gdjs.StairsSceneCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.StairsSceneCode.GDCandleObjects4.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDCandleObjects4[i].putAround(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + 8, runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber(), 40 * gdjs.StairsSceneCode.GDCandleObjects4[i].getVariables().getFromIndex(0).getAsNumber(), gdjs.evtTools.common.angleBetweenPositions((( gdjs.StairsSceneCode.GDStairsObjects4.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDStairsObjects4[0].getPointX("A")), (( gdjs.StairsSceneCode.GDStairsObjects4.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDStairsObjects4[0].getPointY("A")), (( gdjs.StairsSceneCode.GDStairsObjects4.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDStairsObjects4[0].getPointX("B")), (( gdjs.StairsSceneCode.GDStairsObjects4.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDStairsObjects4[0].getPointY("B"))));
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flame"), gdjs.StairsSceneCode.GDFlameObjects2);

for (gdjs.StairsSceneCode.forEachIndex3 = 0;gdjs.StairsSceneCode.forEachIndex3 < gdjs.StairsSceneCode.GDFlameObjects2.length;++gdjs.StairsSceneCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("Candle"), gdjs.StairsSceneCode.GDCandleObjects3);
gdjs.StairsSceneCode.GDFlameObjects3.length = 0;


gdjs.StairsSceneCode.forEachTemporary3 = gdjs.StairsSceneCode.GDFlameObjects2[gdjs.StairsSceneCode.forEachIndex3];
gdjs.StairsSceneCode.GDFlameObjects3.push(gdjs.StairsSceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDCandleObjects3Objects, (gdjs.StairsSceneCode.GDFlameObjects3.length !== 0 ? gdjs.StairsSceneCode.GDFlameObjects3[0] : null), null);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.StairsSceneCode.GDFlameObjects3.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDFlameObjects3[i].setPosition((( gdjs.StairsSceneCode.GDCandleObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDCandleObjects3[0].getPointX("")),(( gdjs.StairsSceneCode.GDCandleObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDCandleObjects3[0].getPointY("")) - 7);
}
}
}
}

}


};gdjs.StairsSceneCode.eventsList25 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayerObject"), gdjs.StairsSceneCode.GDPlayerObjectObjects2);
gdjs.copyArray(runtimeScene.getObjects("Stairs"), gdjs.StairsSceneCode.GDStairsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StairsSceneCode.GDStairsObjects2.length;i<l;++i) {
    if ( gdjs.StairsSceneCode.GDStairsObjects2[i].getCenterXInScene() < (( gdjs.StairsSceneCode.GDPlayerObjectObjects2.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDPlayerObjectObjects2[0].getCenterXInScene()) ) {
        isConditionTrue_0 = true;
        gdjs.StairsSceneCode.GDStairsObjects2[k] = gdjs.StairsSceneCode.GDStairsObjects2[i];
        ++k;
    }
}
gdjs.StairsSceneCode.GDStairsObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StairsSceneCode.GDStairsObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber((( gdjs.StairsSceneCode.GDStairsObjects2.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDStairsObjects2[0].getPointX("NewStart")));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber((( gdjs.StairsSceneCode.GDStairsObjects2.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDStairsObjects2[0].getCenterYInScene()));
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDStairsObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDStairsObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDStairsObjects2Objects, runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - 188.5, "");
}

{ //Subevents
gdjs.StairsSceneCode.eventsList24(runtimeScene);} //End of subevents
}

}


};gdjs.StairsSceneCode.eventsList26 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(30987996);
}
if (isConditionTrue_0) {
/* Reuse gdjs.StairsSceneCode.GDBlackBGObjects2 */
{for(var i = 0, len = gdjs.StairsSceneCode.GDBlackBGObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBlackBGObjects2[i].getBehavior("Tween").addObjectOpacityTween2("Show", 0, "linear", 0.5, false);
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDBlackBGObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBlackBGObjects2[i].setLayer("TransitionLayer");
}
}
}

}


};gdjs.StairsSceneCode.eventsList27 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackBG"), gdjs.StairsSceneCode.GDBlackBGObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StairsSceneCode.GDBlackBGObjects3.length;i<l;++i) {
    if ( gdjs.StairsSceneCode.GDBlackBGObjects3[i].getVariableNumber(gdjs.StairsSceneCode.GDBlackBGObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.StairsSceneCode.GDBlackBGObjects3[k] = gdjs.StairsSceneCode.GDBlackBGObjects3[i];
        ++k;
    }
}
gdjs.StairsSceneCode.GDBlackBGObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StairsSceneCode.GDBlackBGObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Frame"), gdjs.StairsSceneCode.GDFrameObjects3);
{for(var i = 0, len = gdjs.StairsSceneCode.GDBlackBGObjects3.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBlackBGObjects3[i].getBehavior("Resizable").setSize(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) + 32, gdjs.evtTools.common.distanceBetweenPositions(0, gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) - 16, 0, (( gdjs.StairsSceneCode.GDFrameObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDFrameObjects3[0].getY()) + 2));
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDBlackBGObjects3.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBlackBGObjects3[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) - 16,gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) - 16);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackBG"), gdjs.StairsSceneCode.GDBlackBGObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StairsSceneCode.GDBlackBGObjects3.length;i<l;++i) {
    if ( gdjs.StairsSceneCode.GDBlackBGObjects3[i].getVariableNumber(gdjs.StairsSceneCode.GDBlackBGObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.StairsSceneCode.GDBlackBGObjects3[k] = gdjs.StairsSceneCode.GDBlackBGObjects3[i];
        ++k;
    }
}
gdjs.StairsSceneCode.GDBlackBGObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StairsSceneCode.GDBlackBGObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Frame"), gdjs.StairsSceneCode.GDFrameObjects3);
{for(var i = 0, len = gdjs.StairsSceneCode.GDBlackBGObjects3.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBlackBGObjects3[i].getBehavior("Resizable").setSize(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) + 32, gdjs.evtTools.common.distanceBetweenPositions(0, gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) + 16, 0, (( gdjs.StairsSceneCode.GDFrameObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDFrameObjects3[0].getAABBBottom()) - 2));
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDBlackBGObjects3.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBlackBGObjects3[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) - 16,(( gdjs.StairsSceneCode.GDFrameObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDFrameObjects3[0].getAABBBottom()) - 2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackBG"), gdjs.StairsSceneCode.GDBlackBGObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StairsSceneCode.GDBlackBGObjects3.length;i<l;++i) {
    if ( gdjs.StairsSceneCode.GDBlackBGObjects3[i].getVariableNumber(gdjs.StairsSceneCode.GDBlackBGObjects3[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.StairsSceneCode.GDBlackBGObjects3[k] = gdjs.StairsSceneCode.GDBlackBGObjects3[i];
        ++k;
    }
}
gdjs.StairsSceneCode.GDBlackBGObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StairsSceneCode.GDBlackBGObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Frame"), gdjs.StairsSceneCode.GDFrameObjects3);
{for(var i = 0, len = gdjs.StairsSceneCode.GDBlackBGObjects3.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBlackBGObjects3[i].getBehavior("Resizable").setSize(gdjs.evtTools.common.distanceBetweenPositions(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) - 16, 0, (( gdjs.StairsSceneCode.GDFrameObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDFrameObjects3[0].getX()) + 2, 0), gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) + 32);
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDBlackBGObjects3.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBlackBGObjects3[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) - 16,gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) - 16);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackBG"), gdjs.StairsSceneCode.GDBlackBGObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StairsSceneCode.GDBlackBGObjects3.length;i<l;++i) {
    if ( gdjs.StairsSceneCode.GDBlackBGObjects3[i].getVariableNumber(gdjs.StairsSceneCode.GDBlackBGObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.StairsSceneCode.GDBlackBGObjects3[k] = gdjs.StairsSceneCode.GDBlackBGObjects3[i];
        ++k;
    }
}
gdjs.StairsSceneCode.GDBlackBGObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StairsSceneCode.GDBlackBGObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Frame"), gdjs.StairsSceneCode.GDFrameObjects3);
{for(var i = 0, len = gdjs.StairsSceneCode.GDBlackBGObjects3.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBlackBGObjects3[i].getBehavior("Resizable").setSize(gdjs.evtTools.common.distanceBetweenPositions((( gdjs.StairsSceneCode.GDFrameObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDFrameObjects3[0].getAABBRight()) - 2, 0, gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, "", 0) + 16, 0), gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) + 32);
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDBlackBGObjects3.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBlackBGObjects3[i].setPosition((( gdjs.StairsSceneCode.GDFrameObjects3.length === 0 ) ? 0 :gdjs.StairsSceneCode.GDFrameObjects3[0].getAABBRight()) - 2,gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) - 16);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackBG"), gdjs.StairsSceneCode.GDBlackBGObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StairsSceneCode.GDBlackBGObjects2.length;i<l;++i) {
    if ( gdjs.StairsSceneCode.GDBlackBGObjects2[i].getVariableNumber(gdjs.StairsSceneCode.GDBlackBGObjects2[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.StairsSceneCode.GDBlackBGObjects2[k] = gdjs.StairsSceneCode.GDBlackBGObjects2[i];
        ++k;
    }
}
gdjs.StairsSceneCode.GDBlackBGObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StairsSceneCode.GDBlackBGObjects2 */
{for(var i = 0, len = gdjs.StairsSceneCode.GDBlackBGObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBlackBGObjects2[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDBlackBGObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBlackBGObjects2[i].getBehavior("Resizable").setSize(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) + 32, gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) + 32);
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDBlackBGObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBlackBGObjects2[i].setPosition(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) - 16,gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) - 16);
}
}

{ //Subevents
gdjs.StairsSceneCode.eventsList26(runtimeScene);} //End of subevents
}

}


};gdjs.StairsSceneCode.asyncCallback31571596 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.StairsSceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}
gdjs.StairsSceneCode.localVariables.length = 0;
}
gdjs.StairsSceneCode.idToCallbackMap.set(31571596, gdjs.StairsSceneCode.asyncCallback31571596);
gdjs.StairsSceneCode.eventsList28 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.StairsSceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StairsSceneCode.asyncCallback31571596(runtimeScene, asyncObjectsList)), 31571596, asyncObjectsList);
}
}

}


};gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDBitmapYouDiedObjects3Objects = Hashtable.newFrom({"BitmapYouDied": gdjs.StairsSceneCode.GDBitmapYouDiedObjects3});
gdjs.StairsSceneCode.eventsList29 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.mod(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), 1) > 0.5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(30615284);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.StairsSceneCode.GDBitmapYouDiedObjects2, gdjs.StairsSceneCode.GDBitmapYouDiedObjects3);

{for(var i = 0, len = gdjs.StairsSceneCode.GDBitmapYouDiedObjects3.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBitmapYouDiedObjects3[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.mod(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), 1) < 0.5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(30775156);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.StairsSceneCode.GDBitmapYouDiedObjects2 */
{for(var i = 0, len = gdjs.StairsSceneCode.GDBitmapYouDiedObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBitmapYouDiedObjects2[i].hide(false);
}
}
}

}


};gdjs.StairsSceneCode.eventsList30 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(31582796);
}
if (isConditionTrue_0) {
gdjs.StairsSceneCode.GDBitmapYouDiedObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.StairsSceneCode.mapOfGDgdjs_9546StairsSceneCode_9546GDBitmapYouDiedObjects3Objects, 1, 1, "Layer2");
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDBitmapYouDiedObjects3.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBitmapYouDiedObjects3[i].returnVariable(gdjs.StairsSceneCode.GDBitmapYouDiedObjects3[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDBitmapYouDiedObjects3.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBitmapYouDiedObjects3[i].getBehavior("Scale").setScale(0.05);
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDBitmapYouDiedObjects3.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBitmapYouDiedObjects3[i].setZOrder(8);
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDBitmapYouDiedObjects3.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBitmapYouDiedObjects3[i].getBehavior("Text").setText("(Press any key to skip)");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BitmapYouDied"), gdjs.StairsSceneCode.GDBitmapYouDiedObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StairsSceneCode.GDBitmapYouDiedObjects2.length;i<l;++i) {
    if ( gdjs.StairsSceneCode.GDBitmapYouDiedObjects2[i].getVariableNumber(gdjs.StairsSceneCode.GDBitmapYouDiedObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.StairsSceneCode.GDBitmapYouDiedObjects2[k] = gdjs.StairsSceneCode.GDBitmapYouDiedObjects2[i];
        ++k;
    }
}
gdjs.StairsSceneCode.GDBitmapYouDiedObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StairsSceneCode.GDBitmapYouDiedObjects2 */
{for(var i = 0, len = gdjs.StairsSceneCode.GDBitmapYouDiedObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBitmapYouDiedObjects2[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) - 10);
}
}

{ //Subevents
gdjs.StairsSceneCode.eventsList29(runtimeScene);} //End of subevents
}

}


};gdjs.StairsSceneCode.eventsList31 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Level").getAsNumber() == 31);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Level").getAsNumber() == 31);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameFinish_Cinematic", false);
}
}

}


};gdjs.StairsSceneCode.eventsList32 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlayerObject"), gdjs.StairsSceneCode.GDPlayerObjectObjects2);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.StairsSceneCode.GDPlayerObjectObjects2.length !== 0 ? gdjs.StairsSceneCode.GDPlayerObjectObjects2[0] : null), true, "", 0);
}
{gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.func(runtimeScene, "", 0, "Layer2", 0, true, true, true, true, null);
}
{gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.func(runtimeScene, "", 0, "TransitionLayer", 0, true, true, true, true, null);
}
}

}


{


gdjs.StairsSceneCode.eventsList21(runtimeScene);
}


{


gdjs.StairsSceneCode.eventsList25(runtimeScene);
}


{


gdjs.StairsSceneCode.eventsList27(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Frame"), gdjs.StairsSceneCode.GDFrameObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDFrameObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDFrameObjects2[i].setLayer("Layer2");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(31280244);
}
}
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlayerObject"), gdjs.StairsSceneCode.GDPlayerObjectObjects2);
{for(var i = 0, len = gdjs.StairsSceneCode.GDPlayerObjectObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDPlayerObjectObjects2[i].addPolarForce(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), 50, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackBG"), gdjs.StairsSceneCode.GDBlackBGObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) > 9);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StairsSceneCode.GDBlackBGObjects2.length;i<l;++i) {
    if ( gdjs.StairsSceneCode.GDBlackBGObjects2[i].getVariableNumber(gdjs.StairsSceneCode.GDBlackBGObjects2[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.StairsSceneCode.GDBlackBGObjects2[k] = gdjs.StairsSceneCode.GDBlackBGObjects2[i];
        ++k;
    }
}
gdjs.StairsSceneCode.GDBlackBGObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StairsSceneCode.GDBlackBGObjects2.length;i<l;++i) {
    if ( !(gdjs.StairsSceneCode.GDBlackBGObjects2[i].getBehavior("Tween").isPlaying("Hide")) ) {
        isConditionTrue_0 = true;
        gdjs.StairsSceneCode.GDBlackBGObjects2[k] = gdjs.StairsSceneCode.GDBlackBGObjects2[i];
        ++k;
    }
}
gdjs.StairsSceneCode.GDBlackBGObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.StairsSceneCode.GDBlackBGObjects2 */
{for(var i = 0, len = gdjs.StairsSceneCode.GDBlackBGObjects2.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBlackBGObjects2[i].getBehavior("Tween").addObjectOpacityTween2("Hide", 255, "linear", 1, false);
}
}

{ //Subevents
gdjs.StairsSceneCode.eventsList28(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) > 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.StairsSceneCode.eventsList30(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackBG"), gdjs.StairsSceneCode.GDBlackBGObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StairsSceneCode.GDBlackBGObjects2.length;i<l;++i) {
    if ( gdjs.StairsSceneCode.GDBlackBGObjects2[i].getVariableNumber(gdjs.StairsSceneCode.GDBlackBGObjects2[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.StairsSceneCode.GDBlackBGObjects2[k] = gdjs.StairsSceneCode.GDBlackBGObjects2[i];
        ++k;
    }
}
gdjs.StairsSceneCode.GDBlackBGObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StairsSceneCode.GDBlackBGObjects2.length;i<l;++i) {
    if ( gdjs.StairsSceneCode.GDBlackBGObjects2[i].getBehavior("Tween").hasFinished("Hide") ) {
        isConditionTrue_0 = true;
        gdjs.StairsSceneCode.GDBlackBGObjects2[k] = gdjs.StairsSceneCode.GDBlackBGObjects2[i];
        ++k;
    }
}
gdjs.StairsSceneCode.GDBlackBGObjects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.StairsSceneCode.eventsList31(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BitmapYouDied"), gdjs.StairsSceneCode.GDBitmapYouDiedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StairsSceneCode.GDBitmapYouDiedObjects1.length;i<l;++i) {
    if ( gdjs.StairsSceneCode.GDBitmapYouDiedObjects1[i].getVariableNumber(gdjs.StairsSceneCode.GDBitmapYouDiedObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.StairsSceneCode.GDBitmapYouDiedObjects1[k] = gdjs.StairsSceneCode.GDBitmapYouDiedObjects1[i];
        ++k;
    }
}
gdjs.StairsSceneCode.GDBitmapYouDiedObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.StairsSceneCode.GDBitmapYouDiedObjects1 */
{for(var i = 0, len = gdjs.StairsSceneCode.GDBitmapYouDiedObjects1.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBitmapYouDiedObjects1[i].getBehavior("Text").setText("Floor " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Level").getAsNumber() - 1) + " Completed!!!");
}
}
{for(var i = 0, len = gdjs.StairsSceneCode.GDBitmapYouDiedObjects1.length ;i < len;++i) {
    gdjs.StairsSceneCode.GDBitmapYouDiedObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) + 10);
}
}
}

}


};gdjs.StairsSceneCode.eventsList33 = function(runtimeScene) {

{


gdjs.StairsSceneCode.eventsList2(runtimeScene);
}


{


gdjs.StairsSceneCode.eventsList5(runtimeScene);
}


{


gdjs.StairsSceneCode.eventsList10(runtimeScene);
}


{


gdjs.StairsSceneCode.eventsList20(runtimeScene);
}


{


gdjs.StairsSceneCode.eventsList32(runtimeScene);
}


};

gdjs.StairsSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StairsSceneCode.GDStairsObjects1.length = 0;
gdjs.StairsSceneCode.GDStairsObjects2.length = 0;
gdjs.StairsSceneCode.GDStairsObjects3.length = 0;
gdjs.StairsSceneCode.GDStairsObjects4.length = 0;
gdjs.StairsSceneCode.GDStairsObjects5.length = 0;
gdjs.StairsSceneCode.GDPlayerObjectObjects1.length = 0;
gdjs.StairsSceneCode.GDPlayerObjectObjects2.length = 0;
gdjs.StairsSceneCode.GDPlayerObjectObjects3.length = 0;
gdjs.StairsSceneCode.GDPlayerObjectObjects4.length = 0;
gdjs.StairsSceneCode.GDPlayerObjectObjects5.length = 0;
gdjs.StairsSceneCode.GDStairsBackWallObjects1.length = 0;
gdjs.StairsSceneCode.GDStairsBackWallObjects2.length = 0;
gdjs.StairsSceneCode.GDStairsBackWallObjects3.length = 0;
gdjs.StairsSceneCode.GDStairsBackWallObjects4.length = 0;
gdjs.StairsSceneCode.GDStairsBackWallObjects5.length = 0;
gdjs.StairsSceneCode.GDCandleObjects1.length = 0;
gdjs.StairsSceneCode.GDCandleObjects2.length = 0;
gdjs.StairsSceneCode.GDCandleObjects3.length = 0;
gdjs.StairsSceneCode.GDCandleObjects4.length = 0;
gdjs.StairsSceneCode.GDCandleObjects5.length = 0;
gdjs.StairsSceneCode.GDFlameObjects1.length = 0;
gdjs.StairsSceneCode.GDFlameObjects2.length = 0;
gdjs.StairsSceneCode.GDFlameObjects3.length = 0;
gdjs.StairsSceneCode.GDFlameObjects4.length = 0;
gdjs.StairsSceneCode.GDFlameObjects5.length = 0;
gdjs.StairsSceneCode.GDFrameObjects1.length = 0;
gdjs.StairsSceneCode.GDFrameObjects2.length = 0;
gdjs.StairsSceneCode.GDFrameObjects3.length = 0;
gdjs.StairsSceneCode.GDFrameObjects4.length = 0;
gdjs.StairsSceneCode.GDFrameObjects5.length = 0;
gdjs.StairsSceneCode.GDBlackBGObjects1.length = 0;
gdjs.StairsSceneCode.GDBlackBGObjects2.length = 0;
gdjs.StairsSceneCode.GDBlackBGObjects3.length = 0;
gdjs.StairsSceneCode.GDBlackBGObjects4.length = 0;
gdjs.StairsSceneCode.GDBlackBGObjects5.length = 0;
gdjs.StairsSceneCode.GDBitmapYouDiedObjects1.length = 0;
gdjs.StairsSceneCode.GDBitmapYouDiedObjects2.length = 0;
gdjs.StairsSceneCode.GDBitmapYouDiedObjects3.length = 0;
gdjs.StairsSceneCode.GDBitmapYouDiedObjects4.length = 0;
gdjs.StairsSceneCode.GDBitmapYouDiedObjects5.length = 0;
gdjs.StairsSceneCode.GDJoystickObjects1.length = 0;
gdjs.StairsSceneCode.GDJoystickObjects2.length = 0;
gdjs.StairsSceneCode.GDJoystickObjects3.length = 0;
gdjs.StairsSceneCode.GDJoystickObjects4.length = 0;
gdjs.StairsSceneCode.GDJoystickObjects5.length = 0;
gdjs.StairsSceneCode.GDDpadUpObjects1.length = 0;
gdjs.StairsSceneCode.GDDpadUpObjects2.length = 0;
gdjs.StairsSceneCode.GDDpadUpObjects3.length = 0;
gdjs.StairsSceneCode.GDDpadUpObjects4.length = 0;
gdjs.StairsSceneCode.GDDpadUpObjects5.length = 0;
gdjs.StairsSceneCode.GDDpadDownObjects1.length = 0;
gdjs.StairsSceneCode.GDDpadDownObjects2.length = 0;
gdjs.StairsSceneCode.GDDpadDownObjects3.length = 0;
gdjs.StairsSceneCode.GDDpadDownObjects4.length = 0;
gdjs.StairsSceneCode.GDDpadDownObjects5.length = 0;
gdjs.StairsSceneCode.GDDpadLeftObjects1.length = 0;
gdjs.StairsSceneCode.GDDpadLeftObjects2.length = 0;
gdjs.StairsSceneCode.GDDpadLeftObjects3.length = 0;
gdjs.StairsSceneCode.GDDpadLeftObjects4.length = 0;
gdjs.StairsSceneCode.GDDpadLeftObjects5.length = 0;
gdjs.StairsSceneCode.GDDpadRightObjects1.length = 0;
gdjs.StairsSceneCode.GDDpadRightObjects2.length = 0;
gdjs.StairsSceneCode.GDDpadRightObjects3.length = 0;
gdjs.StairsSceneCode.GDDpadRightObjects4.length = 0;
gdjs.StairsSceneCode.GDDpadRightObjects5.length = 0;
gdjs.StairsSceneCode.GDButtonObjects1.length = 0;
gdjs.StairsSceneCode.GDButtonObjects2.length = 0;
gdjs.StairsSceneCode.GDButtonObjects3.length = 0;
gdjs.StairsSceneCode.GDButtonObjects4.length = 0;
gdjs.StairsSceneCode.GDButtonObjects5.length = 0;
gdjs.StairsSceneCode.GDLandscapeBlackObjects1.length = 0;
gdjs.StairsSceneCode.GDLandscapeBlackObjects2.length = 0;
gdjs.StairsSceneCode.GDLandscapeBlackObjects3.length = 0;
gdjs.StairsSceneCode.GDLandscapeBlackObjects4.length = 0;
gdjs.StairsSceneCode.GDLandscapeBlackObjects5.length = 0;
gdjs.StairsSceneCode.GDLandscapeObjects1.length = 0;
gdjs.StairsSceneCode.GDLandscapeObjects2.length = 0;
gdjs.StairsSceneCode.GDLandscapeObjects3.length = 0;
gdjs.StairsSceneCode.GDLandscapeObjects4.length = 0;
gdjs.StairsSceneCode.GDLandscapeObjects5.length = 0;
gdjs.StairsSceneCode.GDSettingsButtonObjects1.length = 0;
gdjs.StairsSceneCode.GDSettingsButtonObjects2.length = 0;
gdjs.StairsSceneCode.GDSettingsButtonObjects3.length = 0;
gdjs.StairsSceneCode.GDSettingsButtonObjects4.length = 0;
gdjs.StairsSceneCode.GDSettingsButtonObjects5.length = 0;
gdjs.StairsSceneCode.GDCloseButtonObjects1.length = 0;
gdjs.StairsSceneCode.GDCloseButtonObjects2.length = 0;
gdjs.StairsSceneCode.GDCloseButtonObjects3.length = 0;
gdjs.StairsSceneCode.GDCloseButtonObjects4.length = 0;
gdjs.StairsSceneCode.GDCloseButtonObjects5.length = 0;
gdjs.StairsSceneCode.GDOpacityButtonObjects1.length = 0;
gdjs.StairsSceneCode.GDOpacityButtonObjects2.length = 0;
gdjs.StairsSceneCode.GDOpacityButtonObjects3.length = 0;
gdjs.StairsSceneCode.GDOpacityButtonObjects4.length = 0;
gdjs.StairsSceneCode.GDOpacityButtonObjects5.length = 0;
gdjs.StairsSceneCode.GDSizeButtonObjects1.length = 0;
gdjs.StairsSceneCode.GDSizeButtonObjects2.length = 0;
gdjs.StairsSceneCode.GDSizeButtonObjects3.length = 0;
gdjs.StairsSceneCode.GDSizeButtonObjects4.length = 0;
gdjs.StairsSceneCode.GDSizeButtonObjects5.length = 0;

gdjs.StairsSceneCode.eventsList33(runtimeScene);
gdjs.StairsSceneCode.GDStairsObjects1.length = 0;
gdjs.StairsSceneCode.GDStairsObjects2.length = 0;
gdjs.StairsSceneCode.GDStairsObjects3.length = 0;
gdjs.StairsSceneCode.GDStairsObjects4.length = 0;
gdjs.StairsSceneCode.GDStairsObjects5.length = 0;
gdjs.StairsSceneCode.GDPlayerObjectObjects1.length = 0;
gdjs.StairsSceneCode.GDPlayerObjectObjects2.length = 0;
gdjs.StairsSceneCode.GDPlayerObjectObjects3.length = 0;
gdjs.StairsSceneCode.GDPlayerObjectObjects4.length = 0;
gdjs.StairsSceneCode.GDPlayerObjectObjects5.length = 0;
gdjs.StairsSceneCode.GDStairsBackWallObjects1.length = 0;
gdjs.StairsSceneCode.GDStairsBackWallObjects2.length = 0;
gdjs.StairsSceneCode.GDStairsBackWallObjects3.length = 0;
gdjs.StairsSceneCode.GDStairsBackWallObjects4.length = 0;
gdjs.StairsSceneCode.GDStairsBackWallObjects5.length = 0;
gdjs.StairsSceneCode.GDCandleObjects1.length = 0;
gdjs.StairsSceneCode.GDCandleObjects2.length = 0;
gdjs.StairsSceneCode.GDCandleObjects3.length = 0;
gdjs.StairsSceneCode.GDCandleObjects4.length = 0;
gdjs.StairsSceneCode.GDCandleObjects5.length = 0;
gdjs.StairsSceneCode.GDFlameObjects1.length = 0;
gdjs.StairsSceneCode.GDFlameObjects2.length = 0;
gdjs.StairsSceneCode.GDFlameObjects3.length = 0;
gdjs.StairsSceneCode.GDFlameObjects4.length = 0;
gdjs.StairsSceneCode.GDFlameObjects5.length = 0;
gdjs.StairsSceneCode.GDFrameObjects1.length = 0;
gdjs.StairsSceneCode.GDFrameObjects2.length = 0;
gdjs.StairsSceneCode.GDFrameObjects3.length = 0;
gdjs.StairsSceneCode.GDFrameObjects4.length = 0;
gdjs.StairsSceneCode.GDFrameObjects5.length = 0;
gdjs.StairsSceneCode.GDBlackBGObjects1.length = 0;
gdjs.StairsSceneCode.GDBlackBGObjects2.length = 0;
gdjs.StairsSceneCode.GDBlackBGObjects3.length = 0;
gdjs.StairsSceneCode.GDBlackBGObjects4.length = 0;
gdjs.StairsSceneCode.GDBlackBGObjects5.length = 0;
gdjs.StairsSceneCode.GDBitmapYouDiedObjects1.length = 0;
gdjs.StairsSceneCode.GDBitmapYouDiedObjects2.length = 0;
gdjs.StairsSceneCode.GDBitmapYouDiedObjects3.length = 0;
gdjs.StairsSceneCode.GDBitmapYouDiedObjects4.length = 0;
gdjs.StairsSceneCode.GDBitmapYouDiedObjects5.length = 0;
gdjs.StairsSceneCode.GDJoystickObjects1.length = 0;
gdjs.StairsSceneCode.GDJoystickObjects2.length = 0;
gdjs.StairsSceneCode.GDJoystickObjects3.length = 0;
gdjs.StairsSceneCode.GDJoystickObjects4.length = 0;
gdjs.StairsSceneCode.GDJoystickObjects5.length = 0;
gdjs.StairsSceneCode.GDDpadUpObjects1.length = 0;
gdjs.StairsSceneCode.GDDpadUpObjects2.length = 0;
gdjs.StairsSceneCode.GDDpadUpObjects3.length = 0;
gdjs.StairsSceneCode.GDDpadUpObjects4.length = 0;
gdjs.StairsSceneCode.GDDpadUpObjects5.length = 0;
gdjs.StairsSceneCode.GDDpadDownObjects1.length = 0;
gdjs.StairsSceneCode.GDDpadDownObjects2.length = 0;
gdjs.StairsSceneCode.GDDpadDownObjects3.length = 0;
gdjs.StairsSceneCode.GDDpadDownObjects4.length = 0;
gdjs.StairsSceneCode.GDDpadDownObjects5.length = 0;
gdjs.StairsSceneCode.GDDpadLeftObjects1.length = 0;
gdjs.StairsSceneCode.GDDpadLeftObjects2.length = 0;
gdjs.StairsSceneCode.GDDpadLeftObjects3.length = 0;
gdjs.StairsSceneCode.GDDpadLeftObjects4.length = 0;
gdjs.StairsSceneCode.GDDpadLeftObjects5.length = 0;
gdjs.StairsSceneCode.GDDpadRightObjects1.length = 0;
gdjs.StairsSceneCode.GDDpadRightObjects2.length = 0;
gdjs.StairsSceneCode.GDDpadRightObjects3.length = 0;
gdjs.StairsSceneCode.GDDpadRightObjects4.length = 0;
gdjs.StairsSceneCode.GDDpadRightObjects5.length = 0;
gdjs.StairsSceneCode.GDButtonObjects1.length = 0;
gdjs.StairsSceneCode.GDButtonObjects2.length = 0;
gdjs.StairsSceneCode.GDButtonObjects3.length = 0;
gdjs.StairsSceneCode.GDButtonObjects4.length = 0;
gdjs.StairsSceneCode.GDButtonObjects5.length = 0;
gdjs.StairsSceneCode.GDLandscapeBlackObjects1.length = 0;
gdjs.StairsSceneCode.GDLandscapeBlackObjects2.length = 0;
gdjs.StairsSceneCode.GDLandscapeBlackObjects3.length = 0;
gdjs.StairsSceneCode.GDLandscapeBlackObjects4.length = 0;
gdjs.StairsSceneCode.GDLandscapeBlackObjects5.length = 0;
gdjs.StairsSceneCode.GDLandscapeObjects1.length = 0;
gdjs.StairsSceneCode.GDLandscapeObjects2.length = 0;
gdjs.StairsSceneCode.GDLandscapeObjects3.length = 0;
gdjs.StairsSceneCode.GDLandscapeObjects4.length = 0;
gdjs.StairsSceneCode.GDLandscapeObjects5.length = 0;
gdjs.StairsSceneCode.GDSettingsButtonObjects1.length = 0;
gdjs.StairsSceneCode.GDSettingsButtonObjects2.length = 0;
gdjs.StairsSceneCode.GDSettingsButtonObjects3.length = 0;
gdjs.StairsSceneCode.GDSettingsButtonObjects4.length = 0;
gdjs.StairsSceneCode.GDSettingsButtonObjects5.length = 0;
gdjs.StairsSceneCode.GDCloseButtonObjects1.length = 0;
gdjs.StairsSceneCode.GDCloseButtonObjects2.length = 0;
gdjs.StairsSceneCode.GDCloseButtonObjects3.length = 0;
gdjs.StairsSceneCode.GDCloseButtonObjects4.length = 0;
gdjs.StairsSceneCode.GDCloseButtonObjects5.length = 0;
gdjs.StairsSceneCode.GDOpacityButtonObjects1.length = 0;
gdjs.StairsSceneCode.GDOpacityButtonObjects2.length = 0;
gdjs.StairsSceneCode.GDOpacityButtonObjects3.length = 0;
gdjs.StairsSceneCode.GDOpacityButtonObjects4.length = 0;
gdjs.StairsSceneCode.GDOpacityButtonObjects5.length = 0;
gdjs.StairsSceneCode.GDSizeButtonObjects1.length = 0;
gdjs.StairsSceneCode.GDSizeButtonObjects2.length = 0;
gdjs.StairsSceneCode.GDSizeButtonObjects3.length = 0;
gdjs.StairsSceneCode.GDSizeButtonObjects4.length = 0;
gdjs.StairsSceneCode.GDSizeButtonObjects5.length = 0;


return;

}

gdjs['StairsSceneCode'] = gdjs.StairsSceneCode;
