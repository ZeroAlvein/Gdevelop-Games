gdjs.GameFinish_95CinematicCode = {};
gdjs.GameFinish_95CinematicCode.localVariables = [];
gdjs.GameFinish_95CinematicCode.idToCallbackMap = new Map();
gdjs.GameFinish_95CinematicCode.GDBitmapAnotherCastleObjects1= [];
gdjs.GameFinish_95CinematicCode.GDBitmapAnotherCastleObjects2= [];
gdjs.GameFinish_95CinematicCode.GDBitmapAnotherCastleObjects3= [];
gdjs.GameFinish_95CinematicCode.GDBitmapAnotherCastleObjects4= [];
gdjs.GameFinish_95CinematicCode.GDJoystickObjects1= [];
gdjs.GameFinish_95CinematicCode.GDJoystickObjects2= [];
gdjs.GameFinish_95CinematicCode.GDJoystickObjects3= [];
gdjs.GameFinish_95CinematicCode.GDJoystickObjects4= [];
gdjs.GameFinish_95CinematicCode.GDDpadUpObjects1= [];
gdjs.GameFinish_95CinematicCode.GDDpadUpObjects2= [];
gdjs.GameFinish_95CinematicCode.GDDpadUpObjects3= [];
gdjs.GameFinish_95CinematicCode.GDDpadUpObjects4= [];
gdjs.GameFinish_95CinematicCode.GDDpadDownObjects1= [];
gdjs.GameFinish_95CinematicCode.GDDpadDownObjects2= [];
gdjs.GameFinish_95CinematicCode.GDDpadDownObjects3= [];
gdjs.GameFinish_95CinematicCode.GDDpadDownObjects4= [];
gdjs.GameFinish_95CinematicCode.GDDpadLeftObjects1= [];
gdjs.GameFinish_95CinematicCode.GDDpadLeftObjects2= [];
gdjs.GameFinish_95CinematicCode.GDDpadLeftObjects3= [];
gdjs.GameFinish_95CinematicCode.GDDpadLeftObjects4= [];
gdjs.GameFinish_95CinematicCode.GDDpadRightObjects1= [];
gdjs.GameFinish_95CinematicCode.GDDpadRightObjects2= [];
gdjs.GameFinish_95CinematicCode.GDDpadRightObjects3= [];
gdjs.GameFinish_95CinematicCode.GDDpadRightObjects4= [];
gdjs.GameFinish_95CinematicCode.GDButtonObjects1= [];
gdjs.GameFinish_95CinematicCode.GDButtonObjects2= [];
gdjs.GameFinish_95CinematicCode.GDButtonObjects3= [];
gdjs.GameFinish_95CinematicCode.GDButtonObjects4= [];
gdjs.GameFinish_95CinematicCode.GDLandscapeBlackObjects1= [];
gdjs.GameFinish_95CinematicCode.GDLandscapeBlackObjects2= [];
gdjs.GameFinish_95CinematicCode.GDLandscapeBlackObjects3= [];
gdjs.GameFinish_95CinematicCode.GDLandscapeBlackObjects4= [];
gdjs.GameFinish_95CinematicCode.GDLandscapeObjects1= [];
gdjs.GameFinish_95CinematicCode.GDLandscapeObjects2= [];
gdjs.GameFinish_95CinematicCode.GDLandscapeObjects3= [];
gdjs.GameFinish_95CinematicCode.GDLandscapeObjects4= [];
gdjs.GameFinish_95CinematicCode.GDSettingsButtonObjects1= [];
gdjs.GameFinish_95CinematicCode.GDSettingsButtonObjects2= [];
gdjs.GameFinish_95CinematicCode.GDSettingsButtonObjects3= [];
gdjs.GameFinish_95CinematicCode.GDSettingsButtonObjects4= [];
gdjs.GameFinish_95CinematicCode.GDCloseButtonObjects1= [];
gdjs.GameFinish_95CinematicCode.GDCloseButtonObjects2= [];
gdjs.GameFinish_95CinematicCode.GDCloseButtonObjects3= [];
gdjs.GameFinish_95CinematicCode.GDCloseButtonObjects4= [];
gdjs.GameFinish_95CinematicCode.GDOpacityButtonObjects1= [];
gdjs.GameFinish_95CinematicCode.GDOpacityButtonObjects2= [];
gdjs.GameFinish_95CinematicCode.GDOpacityButtonObjects3= [];
gdjs.GameFinish_95CinematicCode.GDOpacityButtonObjects4= [];
gdjs.GameFinish_95CinematicCode.GDSizeButtonObjects1= [];
gdjs.GameFinish_95CinematicCode.GDSizeButtonObjects2= [];
gdjs.GameFinish_95CinematicCode.GDSizeButtonObjects3= [];
gdjs.GameFinish_95CinematicCode.GDSizeButtonObjects4= [];


gdjs.GameFinish_95CinematicCode.eventsList0 = function(runtimeScene) {

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


};gdjs.GameFinish_95CinematicCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameFinish_95CinematicCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.GameFinish_95CinematicCode.eventsList2 = function(runtimeScene) {

{


gdjs.GameFinish_95CinematicCode.eventsList1(runtimeScene);
}


};gdjs.GameFinish_95CinematicCode.mapOfGDgdjs_9546GameFinish_959595CinematicCode_9546GDLandscapeBlackObjects2Objects = Hashtable.newFrom({"LandscapeBlack": gdjs.GameFinish_95CinematicCode.GDLandscapeBlackObjects2});
gdjs.GameFinish_95CinematicCode.mapOfGDgdjs_9546GameFinish_959595CinematicCode_9546GDLandscapeObjects2Objects = Hashtable.newFrom({"Landscape": gdjs.GameFinish_95CinematicCode.GDLandscapeObjects2});
gdjs.GameFinish_95CinematicCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32192972);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameFinish_95CinematicCode.GDLandscapeObjects2, gdjs.GameFinish_95CinematicCode.GDLandscapeObjects3);

{for(var i = 0, len = gdjs.GameFinish_95CinematicCode.GDLandscapeObjects3.length ;i < len;++i) {
    gdjs.GameFinish_95CinematicCode.GDLandscapeObjects3[i].getBehavior("Scale").setScale(4);
}
}
}

}


{

/* Reuse gdjs.GameFinish_95CinematicCode.GDLandscapeObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) < (( gdjs.GameFinish_95CinematicCode.GDLandscapeObjects2.length === 0 ) ? 0 :gdjs.GameFinish_95CinematicCode.GDLandscapeObjects2[0].getWidth()) / 2);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameFinish_95CinematicCode.GDLandscapeObjects2 */
{for(var i = 0, len = gdjs.GameFinish_95CinematicCode.GDLandscapeObjects2.length ;i < len;++i) {
    gdjs.GameFinish_95CinematicCode.GDLandscapeObjects2[i].getBehavior("Scale").setScale(gdjs.GameFinish_95CinematicCode.GDLandscapeObjects2[i].getBehavior("Scale").getScale() - (1));
}
}
}

}


};gdjs.GameFinish_95CinematicCode.eventsList4 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.GameFinish_95CinematicCode.GDLandscapeObjects2.length = 0;

gdjs.GameFinish_95CinematicCode.GDLandscapeBlackObjects2.length = 0;

{gdjs.evtTools.camera.hideLayer(runtimeScene, "LandscapeLayer");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameFinish_95CinematicCode.mapOfGDgdjs_9546GameFinish_959595CinematicCode_9546GDLandscapeBlackObjects2Objects, -9999, -9999, "LandscapeLayer");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameFinish_95CinematicCode.mapOfGDgdjs_9546GameFinish_959595CinematicCode_9546GDLandscapeObjects2Objects, -9999, -9999, "LandscapeLayer");
}
{for(var i = 0, len = gdjs.GameFinish_95CinematicCode.GDLandscapeObjects2.length ;i < len;++i) {
    gdjs.GameFinish_95CinematicCode.GDLandscapeObjects2[i].getBehavior("Scale").setScale(4);
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
gdjs.copyArray(runtimeScene.getObjects("Landscape"), gdjs.GameFinish_95CinematicCode.GDLandscapeObjects2);
gdjs.copyArray(runtimeScene.getObjects("LandscapeBlack"), gdjs.GameFinish_95CinematicCode.GDLandscapeBlackObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "LandscapeLayer");
}
{for(var i = 0, len = gdjs.GameFinish_95CinematicCode.GDLandscapeBlackObjects2.length ;i < len;++i) {
    gdjs.GameFinish_95CinematicCode.GDLandscapeBlackObjects2[i].getBehavior("Resizable").setSize(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "LandscapeLayer", 0) + 16, gdjs.evtTools.camera.getCameraHeight(runtimeScene, "LandscapeLayer", 0) + 16);
}
}
{for(var i = 0, len = gdjs.GameFinish_95CinematicCode.GDLandscapeBlackObjects2.length ;i < len;++i) {
    gdjs.GameFinish_95CinematicCode.GDLandscapeBlackObjects2[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "LandscapeLayer", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "LandscapeLayer", 0));
}
}
{for(var i = 0, len = gdjs.GameFinish_95CinematicCode.GDLandscapeObjects2.length ;i < len;++i) {
    gdjs.GameFinish_95CinematicCode.GDLandscapeObjects2[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "LandscapeLayer", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "LandscapeLayer", 0));
}
}

{ //Subevents
gdjs.GameFinish_95CinematicCode.eventsList3(runtimeScene);} //End of subevents
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

};gdjs.GameFinish_95CinematicCode.eventsList5 = function(runtimeScene) {

{


gdjs.GameFinish_95CinematicCode.eventsList4(runtimeScene);
}


};gdjs.GameFinish_95CinematicCode.eventsList6 = function(runtimeScene) {

{


gdjs.GameFinish_95CinematicCode.eventsList2(runtimeScene);
}


{


gdjs.GameFinish_95CinematicCode.eventsList5(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/FinalWin.aac", false, runtimeScene.getGame().getVariables().getFromIndex(3).getChild("VolMusic").getAsNumber(), 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "repeat");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BitmapAnotherCastle"), gdjs.GameFinish_95CinematicCode.GDBitmapAnotherCastleObjects1);
{for(var i = 0, len = gdjs.GameFinish_95CinematicCode.GDBitmapAnotherCastleObjects1.length ;i < len;++i) {
    gdjs.GameFinish_95CinematicCode.GDBitmapAnotherCastleObjects1[i].getBehavior("Text").setText("SORRY!!!\n\nBUT YOUR TREASURE\nIS ON ANOTHER CASTLE");
}
}
{for(var i = 0, len = gdjs.GameFinish_95CinematicCode.GDBitmapAnotherCastleObjects1.length ;i < len;++i) {
    gdjs.GameFinish_95CinematicCode.GDBitmapAnotherCastleObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) + 140);
}
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameFinish_95CinematicCode.GDBitmapAnotherCastleObjects1.length !== 0 ? gdjs.GameFinish_95CinematicCode.GDBitmapAnotherCastleObjects1[0] : null), true, "", 0);
}
}

}


};

gdjs.GameFinish_95CinematicCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameFinish_95CinematicCode.GDBitmapAnotherCastleObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDBitmapAnotherCastleObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDBitmapAnotherCastleObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDBitmapAnotherCastleObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDJoystickObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDJoystickObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDJoystickObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDJoystickObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadUpObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadUpObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadUpObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadUpObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadDownObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadDownObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadDownObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadDownObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadLeftObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadLeftObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadLeftObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadLeftObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadRightObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadRightObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadRightObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadRightObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDButtonObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDButtonObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDButtonObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDButtonObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDLandscapeBlackObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDLandscapeBlackObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDLandscapeBlackObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDLandscapeBlackObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDLandscapeObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDLandscapeObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDLandscapeObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDLandscapeObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDSettingsButtonObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDSettingsButtonObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDSettingsButtonObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDSettingsButtonObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDCloseButtonObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDCloseButtonObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDCloseButtonObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDCloseButtonObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDOpacityButtonObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDOpacityButtonObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDOpacityButtonObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDOpacityButtonObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDSizeButtonObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDSizeButtonObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDSizeButtonObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDSizeButtonObjects4.length = 0;

gdjs.GameFinish_95CinematicCode.eventsList6(runtimeScene);
gdjs.GameFinish_95CinematicCode.GDBitmapAnotherCastleObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDBitmapAnotherCastleObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDBitmapAnotherCastleObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDBitmapAnotherCastleObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDJoystickObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDJoystickObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDJoystickObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDJoystickObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadUpObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadUpObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadUpObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadUpObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadDownObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadDownObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadDownObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadDownObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadLeftObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadLeftObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadLeftObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadLeftObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadRightObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadRightObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadRightObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDDpadRightObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDButtonObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDButtonObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDButtonObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDButtonObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDLandscapeBlackObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDLandscapeBlackObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDLandscapeBlackObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDLandscapeBlackObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDLandscapeObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDLandscapeObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDLandscapeObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDLandscapeObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDSettingsButtonObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDSettingsButtonObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDSettingsButtonObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDSettingsButtonObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDCloseButtonObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDCloseButtonObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDCloseButtonObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDCloseButtonObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDOpacityButtonObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDOpacityButtonObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDOpacityButtonObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDOpacityButtonObjects4.length = 0;
gdjs.GameFinish_95CinematicCode.GDSizeButtonObjects1.length = 0;
gdjs.GameFinish_95CinematicCode.GDSizeButtonObjects2.length = 0;
gdjs.GameFinish_95CinematicCode.GDSizeButtonObjects3.length = 0;
gdjs.GameFinish_95CinematicCode.GDSizeButtonObjects4.length = 0;


return;

}

gdjs['GameFinish_95CinematicCode'] = gdjs.GameFinish_95CinematicCode;
