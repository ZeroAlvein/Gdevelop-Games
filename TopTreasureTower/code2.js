gdjs.Death_95CinematicCode = {};
gdjs.Death_95CinematicCode.localVariables = [];
gdjs.Death_95CinematicCode.idToCallbackMap = new Map();
gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects1= [];
gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects2= [];
gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects3= [];
gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects4= [];
gdjs.Death_95CinematicCode.GDBitmapRetryObjects1= [];
gdjs.Death_95CinematicCode.GDBitmapRetryObjects2= [];
gdjs.Death_95CinematicCode.GDBitmapRetryObjects3= [];
gdjs.Death_95CinematicCode.GDBitmapRetryObjects4= [];
gdjs.Death_95CinematicCode.GDPlayerObjectObjects1= [];
gdjs.Death_95CinematicCode.GDPlayerObjectObjects2= [];
gdjs.Death_95CinematicCode.GDPlayerObjectObjects3= [];
gdjs.Death_95CinematicCode.GDPlayerObjectObjects4= [];
gdjs.Death_95CinematicCode.GDJoystickObjects1= [];
gdjs.Death_95CinematicCode.GDJoystickObjects2= [];
gdjs.Death_95CinematicCode.GDJoystickObjects3= [];
gdjs.Death_95CinematicCode.GDJoystickObjects4= [];
gdjs.Death_95CinematicCode.GDDpadUpObjects1= [];
gdjs.Death_95CinematicCode.GDDpadUpObjects2= [];
gdjs.Death_95CinematicCode.GDDpadUpObjects3= [];
gdjs.Death_95CinematicCode.GDDpadUpObjects4= [];
gdjs.Death_95CinematicCode.GDDpadDownObjects1= [];
gdjs.Death_95CinematicCode.GDDpadDownObjects2= [];
gdjs.Death_95CinematicCode.GDDpadDownObjects3= [];
gdjs.Death_95CinematicCode.GDDpadDownObjects4= [];
gdjs.Death_95CinematicCode.GDDpadLeftObjects1= [];
gdjs.Death_95CinematicCode.GDDpadLeftObjects2= [];
gdjs.Death_95CinematicCode.GDDpadLeftObjects3= [];
gdjs.Death_95CinematicCode.GDDpadLeftObjects4= [];
gdjs.Death_95CinematicCode.GDDpadRightObjects1= [];
gdjs.Death_95CinematicCode.GDDpadRightObjects2= [];
gdjs.Death_95CinematicCode.GDDpadRightObjects3= [];
gdjs.Death_95CinematicCode.GDDpadRightObjects4= [];
gdjs.Death_95CinematicCode.GDButtonObjects1= [];
gdjs.Death_95CinematicCode.GDButtonObjects2= [];
gdjs.Death_95CinematicCode.GDButtonObjects3= [];
gdjs.Death_95CinematicCode.GDButtonObjects4= [];
gdjs.Death_95CinematicCode.GDLandscapeBlackObjects1= [];
gdjs.Death_95CinematicCode.GDLandscapeBlackObjects2= [];
gdjs.Death_95CinematicCode.GDLandscapeBlackObjects3= [];
gdjs.Death_95CinematicCode.GDLandscapeBlackObjects4= [];
gdjs.Death_95CinematicCode.GDLandscapeObjects1= [];
gdjs.Death_95CinematicCode.GDLandscapeObjects2= [];
gdjs.Death_95CinematicCode.GDLandscapeObjects3= [];
gdjs.Death_95CinematicCode.GDLandscapeObjects4= [];
gdjs.Death_95CinematicCode.GDSettingsButtonObjects1= [];
gdjs.Death_95CinematicCode.GDSettingsButtonObjects2= [];
gdjs.Death_95CinematicCode.GDSettingsButtonObjects3= [];
gdjs.Death_95CinematicCode.GDSettingsButtonObjects4= [];
gdjs.Death_95CinematicCode.GDCloseButtonObjects1= [];
gdjs.Death_95CinematicCode.GDCloseButtonObjects2= [];
gdjs.Death_95CinematicCode.GDCloseButtonObjects3= [];
gdjs.Death_95CinematicCode.GDCloseButtonObjects4= [];
gdjs.Death_95CinematicCode.GDOpacityButtonObjects1= [];
gdjs.Death_95CinematicCode.GDOpacityButtonObjects2= [];
gdjs.Death_95CinematicCode.GDOpacityButtonObjects3= [];
gdjs.Death_95CinematicCode.GDOpacityButtonObjects4= [];
gdjs.Death_95CinematicCode.GDSizeButtonObjects1= [];
gdjs.Death_95CinematicCode.GDSizeButtonObjects2= [];
gdjs.Death_95CinematicCode.GDSizeButtonObjects3= [];
gdjs.Death_95CinematicCode.GDSizeButtonObjects4= [];


gdjs.Death_95CinematicCode.eventsList0 = function(runtimeScene) {

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


};gdjs.Death_95CinematicCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Death_95CinematicCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Death_95CinematicCode.eventsList2 = function(runtimeScene) {

{


gdjs.Death_95CinematicCode.eventsList1(runtimeScene);
}


};gdjs.Death_95CinematicCode.mapOfGDgdjs_9546Death_959595CinematicCode_9546GDLandscapeBlackObjects2Objects = Hashtable.newFrom({"LandscapeBlack": gdjs.Death_95CinematicCode.GDLandscapeBlackObjects2});
gdjs.Death_95CinematicCode.mapOfGDgdjs_9546Death_959595CinematicCode_9546GDLandscapeObjects2Objects = Hashtable.newFrom({"Landscape": gdjs.Death_95CinematicCode.GDLandscapeObjects2});
gdjs.Death_95CinematicCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32192972);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Death_95CinematicCode.GDLandscapeObjects2, gdjs.Death_95CinematicCode.GDLandscapeObjects3);

{for(var i = 0, len = gdjs.Death_95CinematicCode.GDLandscapeObjects3.length ;i < len;++i) {
    gdjs.Death_95CinematicCode.GDLandscapeObjects3[i].getBehavior("Scale").setScale(4);
}
}
}

}


{

/* Reuse gdjs.Death_95CinematicCode.GDLandscapeObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) < (( gdjs.Death_95CinematicCode.GDLandscapeObjects2.length === 0 ) ? 0 :gdjs.Death_95CinematicCode.GDLandscapeObjects2[0].getWidth()) / 2);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Death_95CinematicCode.GDLandscapeObjects2 */
{for(var i = 0, len = gdjs.Death_95CinematicCode.GDLandscapeObjects2.length ;i < len;++i) {
    gdjs.Death_95CinematicCode.GDLandscapeObjects2[i].getBehavior("Scale").setScale(gdjs.Death_95CinematicCode.GDLandscapeObjects2[i].getBehavior("Scale").getScale() - (1));
}
}
}

}


};gdjs.Death_95CinematicCode.eventsList4 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.Death_95CinematicCode.GDLandscapeObjects2.length = 0;

gdjs.Death_95CinematicCode.GDLandscapeBlackObjects2.length = 0;

{gdjs.evtTools.camera.hideLayer(runtimeScene, "LandscapeLayer");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Death_95CinematicCode.mapOfGDgdjs_9546Death_959595CinematicCode_9546GDLandscapeBlackObjects2Objects, -9999, -9999, "LandscapeLayer");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Death_95CinematicCode.mapOfGDgdjs_9546Death_959595CinematicCode_9546GDLandscapeObjects2Objects, -9999, -9999, "LandscapeLayer");
}
{for(var i = 0, len = gdjs.Death_95CinematicCode.GDLandscapeObjects2.length ;i < len;++i) {
    gdjs.Death_95CinematicCode.GDLandscapeObjects2[i].getBehavior("Scale").setScale(4);
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
gdjs.copyArray(runtimeScene.getObjects("Landscape"), gdjs.Death_95CinematicCode.GDLandscapeObjects2);
gdjs.copyArray(runtimeScene.getObjects("LandscapeBlack"), gdjs.Death_95CinematicCode.GDLandscapeBlackObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "LandscapeLayer");
}
{for(var i = 0, len = gdjs.Death_95CinematicCode.GDLandscapeBlackObjects2.length ;i < len;++i) {
    gdjs.Death_95CinematicCode.GDLandscapeBlackObjects2[i].getBehavior("Resizable").setSize(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "LandscapeLayer", 0) + 16, gdjs.evtTools.camera.getCameraHeight(runtimeScene, "LandscapeLayer", 0) + 16);
}
}
{for(var i = 0, len = gdjs.Death_95CinematicCode.GDLandscapeBlackObjects2.length ;i < len;++i) {
    gdjs.Death_95CinematicCode.GDLandscapeBlackObjects2[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "LandscapeLayer", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "LandscapeLayer", 0));
}
}
{for(var i = 0, len = gdjs.Death_95CinematicCode.GDLandscapeObjects2.length ;i < len;++i) {
    gdjs.Death_95CinematicCode.GDLandscapeObjects2[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "LandscapeLayer", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "LandscapeLayer", 0));
}
}

{ //Subevents
gdjs.Death_95CinematicCode.eventsList3(runtimeScene);} //End of subevents
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

};gdjs.Death_95CinematicCode.eventsList5 = function(runtimeScene) {

{


gdjs.Death_95CinematicCode.eventsList4(runtimeScene);
}


};gdjs.Death_95CinematicCode.mapOfGDgdjs_9546Death_959595CinematicCode_9546GDPlayerObjectObjects1Objects = Hashtable.newFrom({"PlayerObject": gdjs.Death_95CinematicCode.GDPlayerObjectObjects1});
gdjs.Death_95CinematicCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, gdjs.Death_95CinematicCode.localVariables[0].getFromIndex(0).getAsNumber(), null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.Death_95CinematicCode.localVariables[0].getFromIndex(0).getAsNumber(), "Left", "Any", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.Death_95CinematicCode.localVariables[0].getFromIndex(0).getAsNumber(), "Right", "Any", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("PadID").setNumber(gdjs.Death_95CinematicCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.Death_95CinematicCode.localVariables[0].getFromIndex(0).add(1);
}
}

}


};gdjs.Death_95CinematicCode.eventsList7 = function(runtimeScene) {

{


const repeatCount2 = 4;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.Death_95CinematicCode.eventsList6(runtimeScene);} //Subevents end.
}
}

}


};gdjs.Death_95CinematicCode.eventsList8 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("ID", variable);
}
gdjs.Death_95CinematicCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{gdjs.Death_95CinematicCode.localVariables[0].getFromIndex(0).setNumber(1);
}

{ //Subevents
gdjs.Death_95CinematicCode.eventsList7(runtimeScene);} //End of subevents
}
gdjs.Death_95CinematicCode.localVariables.pop();

}


};gdjs.Death_95CinematicCode.eventsList9 = function(runtimeScene) {

{


gdjs.Death_95CinematicCode.eventsList2(runtimeScene);
}


{


gdjs.Death_95CinematicCode.eventsList5(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BitmapRetry"), gdjs.Death_95CinematicCode.GDBitmapRetryObjects1);
gdjs.copyArray(runtimeScene.getObjects("BitmapYouDied"), gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects1);
gdjs.Death_95CinematicCode.GDPlayerObjectObjects1.length = 0;

{for(var i = 0, len = gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects1.length ;i < len;++i) {
    gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects1[i].getBehavior("Tween").addObjectOpacityTween2("dead", 255, "linear", 3, false);
}
}
{for(var i = 0, len = gdjs.Death_95CinematicCode.GDBitmapRetryObjects1.length ;i < len;++i) {
    gdjs.Death_95CinematicCode.GDBitmapRetryObjects1[i].setTint("248;231;28");
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets/audio/sfx_death.aac", 2, false, runtimeScene.getGame().getVariables().getFromIndex(3).getChild("VolSound").getAsNumber(), 1);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets/audio/you-died.aac", 3, false, runtimeScene.getGame().getVariables().getFromIndex(3).getChild("VolSound").getAsNumber(), 1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Death_95CinematicCode.mapOfGDgdjs_9546Death_959595CinematicCode_9546GDPlayerObjectObjects1Objects, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "");
}
{for(var i = 0, len = gdjs.Death_95CinematicCode.GDPlayerObjectObjects1.length ;i < len;++i) {
    gdjs.Death_95CinematicCode.GDPlayerObjectObjects1[i].getBehavior("Scale").setScale(6);
}
}
{for(var i = 0, len = gdjs.Death_95CinematicCode.GDPlayerObjectObjects1.length ;i < len;++i) {
    gdjs.Death_95CinematicCode.GDPlayerObjectObjects1[i].activateBehavior("TopDownMovement", false);
}
}
{for(var i = 0, len = gdjs.Death_95CinematicCode.GDPlayerObjectObjects1.length ;i < len;++i) {
    gdjs.Death_95CinematicCode.GDPlayerObjectObjects1[i].getBehavior("Animation").setAnimationName("Cry");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlayerObject"), gdjs.Death_95CinematicCode.GDPlayerObjectObjects1);
{for(var i = 0, len = gdjs.Death_95CinematicCode.GDPlayerObjectObjects1.length ;i < len;++i) {
    gdjs.Death_95CinematicCode.GDPlayerObjectObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BitmapRetry"), gdjs.Death_95CinematicCode.GDBitmapRetryObjects1);
gdjs.copyArray(runtimeScene.getObjects("BitmapYouDied"), gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects1);
{for(var i = 0, len = gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects1.length ;i < len;++i) {
    gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 4);
}
}
{for(var i = 0, len = gdjs.Death_95CinematicCode.GDBitmapRetryObjects1.length ;i < len;++i) {
    gdjs.Death_95CinematicCode.GDBitmapRetryObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 4);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BitmapYouDied"), gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects1.length;i<l;++i) {
    if ( gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects1[i].getBehavior("Tween").hasFinished("dead") ) {
        isConditionTrue_0 = true;
        gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects1[k] = gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects1[i];
        ++k;
    }
}
gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(31671220);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BitmapRetry"), gdjs.Death_95CinematicCode.GDBitmapRetryObjects1);
{for(var i = 0, len = gdjs.Death_95CinematicCode.GDBitmapRetryObjects1.length ;i < len;++i) {
    gdjs.Death_95CinematicCode.GDBitmapRetryObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.Death_95CinematicCode.eventsList8(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getChild("PadID").getAsNumber(), null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getChild("PadID").getAsNumber(), "Left", "Any", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getChild("PadID").getAsNumber(), "Right", "Any", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.hasTouchEnded(runtimeScene, 1));
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
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
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}
}

}


};

gdjs.Death_95CinematicCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects1.length = 0;
gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects2.length = 0;
gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects3.length = 0;
gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects4.length = 0;
gdjs.Death_95CinematicCode.GDBitmapRetryObjects1.length = 0;
gdjs.Death_95CinematicCode.GDBitmapRetryObjects2.length = 0;
gdjs.Death_95CinematicCode.GDBitmapRetryObjects3.length = 0;
gdjs.Death_95CinematicCode.GDBitmapRetryObjects4.length = 0;
gdjs.Death_95CinematicCode.GDPlayerObjectObjects1.length = 0;
gdjs.Death_95CinematicCode.GDPlayerObjectObjects2.length = 0;
gdjs.Death_95CinematicCode.GDPlayerObjectObjects3.length = 0;
gdjs.Death_95CinematicCode.GDPlayerObjectObjects4.length = 0;
gdjs.Death_95CinematicCode.GDJoystickObjects1.length = 0;
gdjs.Death_95CinematicCode.GDJoystickObjects2.length = 0;
gdjs.Death_95CinematicCode.GDJoystickObjects3.length = 0;
gdjs.Death_95CinematicCode.GDJoystickObjects4.length = 0;
gdjs.Death_95CinematicCode.GDDpadUpObjects1.length = 0;
gdjs.Death_95CinematicCode.GDDpadUpObjects2.length = 0;
gdjs.Death_95CinematicCode.GDDpadUpObjects3.length = 0;
gdjs.Death_95CinematicCode.GDDpadUpObjects4.length = 0;
gdjs.Death_95CinematicCode.GDDpadDownObjects1.length = 0;
gdjs.Death_95CinematicCode.GDDpadDownObjects2.length = 0;
gdjs.Death_95CinematicCode.GDDpadDownObjects3.length = 0;
gdjs.Death_95CinematicCode.GDDpadDownObjects4.length = 0;
gdjs.Death_95CinematicCode.GDDpadLeftObjects1.length = 0;
gdjs.Death_95CinematicCode.GDDpadLeftObjects2.length = 0;
gdjs.Death_95CinematicCode.GDDpadLeftObjects3.length = 0;
gdjs.Death_95CinematicCode.GDDpadLeftObjects4.length = 0;
gdjs.Death_95CinematicCode.GDDpadRightObjects1.length = 0;
gdjs.Death_95CinematicCode.GDDpadRightObjects2.length = 0;
gdjs.Death_95CinematicCode.GDDpadRightObjects3.length = 0;
gdjs.Death_95CinematicCode.GDDpadRightObjects4.length = 0;
gdjs.Death_95CinematicCode.GDButtonObjects1.length = 0;
gdjs.Death_95CinematicCode.GDButtonObjects2.length = 0;
gdjs.Death_95CinematicCode.GDButtonObjects3.length = 0;
gdjs.Death_95CinematicCode.GDButtonObjects4.length = 0;
gdjs.Death_95CinematicCode.GDLandscapeBlackObjects1.length = 0;
gdjs.Death_95CinematicCode.GDLandscapeBlackObjects2.length = 0;
gdjs.Death_95CinematicCode.GDLandscapeBlackObjects3.length = 0;
gdjs.Death_95CinematicCode.GDLandscapeBlackObjects4.length = 0;
gdjs.Death_95CinematicCode.GDLandscapeObjects1.length = 0;
gdjs.Death_95CinematicCode.GDLandscapeObjects2.length = 0;
gdjs.Death_95CinematicCode.GDLandscapeObjects3.length = 0;
gdjs.Death_95CinematicCode.GDLandscapeObjects4.length = 0;
gdjs.Death_95CinematicCode.GDSettingsButtonObjects1.length = 0;
gdjs.Death_95CinematicCode.GDSettingsButtonObjects2.length = 0;
gdjs.Death_95CinematicCode.GDSettingsButtonObjects3.length = 0;
gdjs.Death_95CinematicCode.GDSettingsButtonObjects4.length = 0;
gdjs.Death_95CinematicCode.GDCloseButtonObjects1.length = 0;
gdjs.Death_95CinematicCode.GDCloseButtonObjects2.length = 0;
gdjs.Death_95CinematicCode.GDCloseButtonObjects3.length = 0;
gdjs.Death_95CinematicCode.GDCloseButtonObjects4.length = 0;
gdjs.Death_95CinematicCode.GDOpacityButtonObjects1.length = 0;
gdjs.Death_95CinematicCode.GDOpacityButtonObjects2.length = 0;
gdjs.Death_95CinematicCode.GDOpacityButtonObjects3.length = 0;
gdjs.Death_95CinematicCode.GDOpacityButtonObjects4.length = 0;
gdjs.Death_95CinematicCode.GDSizeButtonObjects1.length = 0;
gdjs.Death_95CinematicCode.GDSizeButtonObjects2.length = 0;
gdjs.Death_95CinematicCode.GDSizeButtonObjects3.length = 0;
gdjs.Death_95CinematicCode.GDSizeButtonObjects4.length = 0;

gdjs.Death_95CinematicCode.eventsList9(runtimeScene);
gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects1.length = 0;
gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects2.length = 0;
gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects3.length = 0;
gdjs.Death_95CinematicCode.GDBitmapYouDiedObjects4.length = 0;
gdjs.Death_95CinematicCode.GDBitmapRetryObjects1.length = 0;
gdjs.Death_95CinematicCode.GDBitmapRetryObjects2.length = 0;
gdjs.Death_95CinematicCode.GDBitmapRetryObjects3.length = 0;
gdjs.Death_95CinematicCode.GDBitmapRetryObjects4.length = 0;
gdjs.Death_95CinematicCode.GDPlayerObjectObjects1.length = 0;
gdjs.Death_95CinematicCode.GDPlayerObjectObjects2.length = 0;
gdjs.Death_95CinematicCode.GDPlayerObjectObjects3.length = 0;
gdjs.Death_95CinematicCode.GDPlayerObjectObjects4.length = 0;
gdjs.Death_95CinematicCode.GDJoystickObjects1.length = 0;
gdjs.Death_95CinematicCode.GDJoystickObjects2.length = 0;
gdjs.Death_95CinematicCode.GDJoystickObjects3.length = 0;
gdjs.Death_95CinematicCode.GDJoystickObjects4.length = 0;
gdjs.Death_95CinematicCode.GDDpadUpObjects1.length = 0;
gdjs.Death_95CinematicCode.GDDpadUpObjects2.length = 0;
gdjs.Death_95CinematicCode.GDDpadUpObjects3.length = 0;
gdjs.Death_95CinematicCode.GDDpadUpObjects4.length = 0;
gdjs.Death_95CinematicCode.GDDpadDownObjects1.length = 0;
gdjs.Death_95CinematicCode.GDDpadDownObjects2.length = 0;
gdjs.Death_95CinematicCode.GDDpadDownObjects3.length = 0;
gdjs.Death_95CinematicCode.GDDpadDownObjects4.length = 0;
gdjs.Death_95CinematicCode.GDDpadLeftObjects1.length = 0;
gdjs.Death_95CinematicCode.GDDpadLeftObjects2.length = 0;
gdjs.Death_95CinematicCode.GDDpadLeftObjects3.length = 0;
gdjs.Death_95CinematicCode.GDDpadLeftObjects4.length = 0;
gdjs.Death_95CinematicCode.GDDpadRightObjects1.length = 0;
gdjs.Death_95CinematicCode.GDDpadRightObjects2.length = 0;
gdjs.Death_95CinematicCode.GDDpadRightObjects3.length = 0;
gdjs.Death_95CinematicCode.GDDpadRightObjects4.length = 0;
gdjs.Death_95CinematicCode.GDButtonObjects1.length = 0;
gdjs.Death_95CinematicCode.GDButtonObjects2.length = 0;
gdjs.Death_95CinematicCode.GDButtonObjects3.length = 0;
gdjs.Death_95CinematicCode.GDButtonObjects4.length = 0;
gdjs.Death_95CinematicCode.GDLandscapeBlackObjects1.length = 0;
gdjs.Death_95CinematicCode.GDLandscapeBlackObjects2.length = 0;
gdjs.Death_95CinematicCode.GDLandscapeBlackObjects3.length = 0;
gdjs.Death_95CinematicCode.GDLandscapeBlackObjects4.length = 0;
gdjs.Death_95CinematicCode.GDLandscapeObjects1.length = 0;
gdjs.Death_95CinematicCode.GDLandscapeObjects2.length = 0;
gdjs.Death_95CinematicCode.GDLandscapeObjects3.length = 0;
gdjs.Death_95CinematicCode.GDLandscapeObjects4.length = 0;
gdjs.Death_95CinematicCode.GDSettingsButtonObjects1.length = 0;
gdjs.Death_95CinematicCode.GDSettingsButtonObjects2.length = 0;
gdjs.Death_95CinematicCode.GDSettingsButtonObjects3.length = 0;
gdjs.Death_95CinematicCode.GDSettingsButtonObjects4.length = 0;
gdjs.Death_95CinematicCode.GDCloseButtonObjects1.length = 0;
gdjs.Death_95CinematicCode.GDCloseButtonObjects2.length = 0;
gdjs.Death_95CinematicCode.GDCloseButtonObjects3.length = 0;
gdjs.Death_95CinematicCode.GDCloseButtonObjects4.length = 0;
gdjs.Death_95CinematicCode.GDOpacityButtonObjects1.length = 0;
gdjs.Death_95CinematicCode.GDOpacityButtonObjects2.length = 0;
gdjs.Death_95CinematicCode.GDOpacityButtonObjects3.length = 0;
gdjs.Death_95CinematicCode.GDOpacityButtonObjects4.length = 0;
gdjs.Death_95CinematicCode.GDSizeButtonObjects1.length = 0;
gdjs.Death_95CinematicCode.GDSizeButtonObjects2.length = 0;
gdjs.Death_95CinematicCode.GDSizeButtonObjects3.length = 0;
gdjs.Death_95CinematicCode.GDSizeButtonObjects4.length = 0;


return;

}

gdjs['Death_95CinematicCode'] = gdjs.Death_95CinematicCode;
