gdjs.StartingSceneCode = {};
gdjs.StartingSceneCode.localVariables = [];
gdjs.StartingSceneCode.idToCallbackMap = new Map();
gdjs.StartingSceneCode.forEachIndex2 = 0;

gdjs.StartingSceneCode.forEachObjects2 = [];

gdjs.StartingSceneCode.forEachTemporary2 = null;

gdjs.StartingSceneCode.forEachTotalCount2 = 0;

gdjs.StartingSceneCode.GDTextObjects1= [];
gdjs.StartingSceneCode.GDTextObjects2= [];
gdjs.StartingSceneCode.GDTextObjects3= [];
gdjs.StartingSceneCode.GDTextObjects4= [];
gdjs.StartingSceneCode.GDBlackBGObjects1= [];
gdjs.StartingSceneCode.GDBlackBGObjects2= [];
gdjs.StartingSceneCode.GDBlackBGObjects3= [];
gdjs.StartingSceneCode.GDBlackBGObjects4= [];
gdjs.StartingSceneCode.GDFrameObjects1= [];
gdjs.StartingSceneCode.GDFrameObjects2= [];
gdjs.StartingSceneCode.GDFrameObjects3= [];
gdjs.StartingSceneCode.GDFrameObjects4= [];
gdjs.StartingSceneCode.GDOrbObjects1= [];
gdjs.StartingSceneCode.GDOrbObjects2= [];
gdjs.StartingSceneCode.GDOrbObjects3= [];
gdjs.StartingSceneCode.GDOrbObjects4= [];
gdjs.StartingSceneCode.GDTransitionBGObjects1= [];
gdjs.StartingSceneCode.GDTransitionBGObjects2= [];
gdjs.StartingSceneCode.GDTransitionBGObjects3= [];
gdjs.StartingSceneCode.GDTransitionBGObjects4= [];
gdjs.StartingSceneCode.GDPlayerObjectObjects1= [];
gdjs.StartingSceneCode.GDPlayerObjectObjects2= [];
gdjs.StartingSceneCode.GDPlayerObjectObjects3= [];
gdjs.StartingSceneCode.GDPlayerObjectObjects4= [];
gdjs.StartingSceneCode.GDFlameObjects1= [];
gdjs.StartingSceneCode.GDFlameObjects2= [];
gdjs.StartingSceneCode.GDFlameObjects3= [];
gdjs.StartingSceneCode.GDFlameObjects4= [];
gdjs.StartingSceneCode.GDJoystickObjects1= [];
gdjs.StartingSceneCode.GDJoystickObjects2= [];
gdjs.StartingSceneCode.GDJoystickObjects3= [];
gdjs.StartingSceneCode.GDJoystickObjects4= [];
gdjs.StartingSceneCode.GDDpadUpObjects1= [];
gdjs.StartingSceneCode.GDDpadUpObjects2= [];
gdjs.StartingSceneCode.GDDpadUpObjects3= [];
gdjs.StartingSceneCode.GDDpadUpObjects4= [];
gdjs.StartingSceneCode.GDDpadDownObjects1= [];
gdjs.StartingSceneCode.GDDpadDownObjects2= [];
gdjs.StartingSceneCode.GDDpadDownObjects3= [];
gdjs.StartingSceneCode.GDDpadDownObjects4= [];
gdjs.StartingSceneCode.GDDpadLeftObjects1= [];
gdjs.StartingSceneCode.GDDpadLeftObjects2= [];
gdjs.StartingSceneCode.GDDpadLeftObjects3= [];
gdjs.StartingSceneCode.GDDpadLeftObjects4= [];
gdjs.StartingSceneCode.GDDpadRightObjects1= [];
gdjs.StartingSceneCode.GDDpadRightObjects2= [];
gdjs.StartingSceneCode.GDDpadRightObjects3= [];
gdjs.StartingSceneCode.GDDpadRightObjects4= [];
gdjs.StartingSceneCode.GDButtonObjects1= [];
gdjs.StartingSceneCode.GDButtonObjects2= [];
gdjs.StartingSceneCode.GDButtonObjects3= [];
gdjs.StartingSceneCode.GDButtonObjects4= [];
gdjs.StartingSceneCode.GDLandscapeBlackObjects1= [];
gdjs.StartingSceneCode.GDLandscapeBlackObjects2= [];
gdjs.StartingSceneCode.GDLandscapeBlackObjects3= [];
gdjs.StartingSceneCode.GDLandscapeBlackObjects4= [];
gdjs.StartingSceneCode.GDLandscapeObjects1= [];
gdjs.StartingSceneCode.GDLandscapeObjects2= [];
gdjs.StartingSceneCode.GDLandscapeObjects3= [];
gdjs.StartingSceneCode.GDLandscapeObjects4= [];
gdjs.StartingSceneCode.GDSettingsButtonObjects1= [];
gdjs.StartingSceneCode.GDSettingsButtonObjects2= [];
gdjs.StartingSceneCode.GDSettingsButtonObjects3= [];
gdjs.StartingSceneCode.GDSettingsButtonObjects4= [];
gdjs.StartingSceneCode.GDCloseButtonObjects1= [];
gdjs.StartingSceneCode.GDCloseButtonObjects2= [];
gdjs.StartingSceneCode.GDCloseButtonObjects3= [];
gdjs.StartingSceneCode.GDCloseButtonObjects4= [];
gdjs.StartingSceneCode.GDOpacityButtonObjects1= [];
gdjs.StartingSceneCode.GDOpacityButtonObjects2= [];
gdjs.StartingSceneCode.GDOpacityButtonObjects3= [];
gdjs.StartingSceneCode.GDOpacityButtonObjects4= [];
gdjs.StartingSceneCode.GDSizeButtonObjects1= [];
gdjs.StartingSceneCode.GDSizeButtonObjects2= [];
gdjs.StartingSceneCode.GDSizeButtonObjects3= [];
gdjs.StartingSceneCode.GDSizeButtonObjects4= [];


gdjs.StartingSceneCode.mapOfGDgdjs_9546StartingSceneCode_9546GDLandscapeBlackObjects2Objects = Hashtable.newFrom({"LandscapeBlack": gdjs.StartingSceneCode.GDLandscapeBlackObjects2});
gdjs.StartingSceneCode.mapOfGDgdjs_9546StartingSceneCode_9546GDLandscapeObjects2Objects = Hashtable.newFrom({"Landscape": gdjs.StartingSceneCode.GDLandscapeObjects2});
gdjs.StartingSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32192972);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.StartingSceneCode.GDLandscapeObjects2, gdjs.StartingSceneCode.GDLandscapeObjects3);

{for(var i = 0, len = gdjs.StartingSceneCode.GDLandscapeObjects3.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDLandscapeObjects3[i].getBehavior("Scale").setScale(4);
}
}
}

}


{

/* Reuse gdjs.StartingSceneCode.GDLandscapeObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) < (( gdjs.StartingSceneCode.GDLandscapeObjects2.length === 0 ) ? 0 :gdjs.StartingSceneCode.GDLandscapeObjects2[0].getWidth()) / 2);
}
if (isConditionTrue_0) {
/* Reuse gdjs.StartingSceneCode.GDLandscapeObjects2 */
{for(var i = 0, len = gdjs.StartingSceneCode.GDLandscapeObjects2.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDLandscapeObjects2[i].getBehavior("Scale").setScale(gdjs.StartingSceneCode.GDLandscapeObjects2[i].getBehavior("Scale").getScale() - (1));
}
}
}

}


};gdjs.StartingSceneCode.eventsList1 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.StartingSceneCode.GDLandscapeObjects2.length = 0;

gdjs.StartingSceneCode.GDLandscapeBlackObjects2.length = 0;

{gdjs.evtTools.camera.hideLayer(runtimeScene, "LandscapeLayer");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.StartingSceneCode.mapOfGDgdjs_9546StartingSceneCode_9546GDLandscapeBlackObjects2Objects, -9999, -9999, "LandscapeLayer");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.StartingSceneCode.mapOfGDgdjs_9546StartingSceneCode_9546GDLandscapeObjects2Objects, -9999, -9999, "LandscapeLayer");
}
{for(var i = 0, len = gdjs.StartingSceneCode.GDLandscapeObjects2.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDLandscapeObjects2[i].getBehavior("Scale").setScale(4);
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
gdjs.copyArray(runtimeScene.getObjects("Landscape"), gdjs.StartingSceneCode.GDLandscapeObjects2);
gdjs.copyArray(runtimeScene.getObjects("LandscapeBlack"), gdjs.StartingSceneCode.GDLandscapeBlackObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "LandscapeLayer");
}
{for(var i = 0, len = gdjs.StartingSceneCode.GDLandscapeBlackObjects2.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDLandscapeBlackObjects2[i].getBehavior("Resizable").setSize(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "LandscapeLayer", 0) + 16, gdjs.evtTools.camera.getCameraHeight(runtimeScene, "LandscapeLayer", 0) + 16);
}
}
{for(var i = 0, len = gdjs.StartingSceneCode.GDLandscapeBlackObjects2.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDLandscapeBlackObjects2[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "LandscapeLayer", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "LandscapeLayer", 0));
}
}
{for(var i = 0, len = gdjs.StartingSceneCode.GDLandscapeObjects2.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDLandscapeObjects2[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "LandscapeLayer", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "LandscapeLayer", 0));
}
}

{ //Subevents
gdjs.StartingSceneCode.eventsList0(runtimeScene);} //End of subevents
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

};gdjs.StartingSceneCode.eventsList2 = function(runtimeScene) {

{


gdjs.StartingSceneCode.eventsList1(runtimeScene);
}


};gdjs.StartingSceneCode.mapOfGDgdjs_9546StartingSceneCode_9546GDTransitionBGObjects1Objects = Hashtable.newFrom({"TransitionBG": gdjs.StartingSceneCode.GDTransitionBGObjects1});
gdjs.StartingSceneCode.mapOfGDgdjs_9546StartingSceneCode_9546GDTextObjects1Objects = Hashtable.newFrom({"Text": gdjs.StartingSceneCode.GDTextObjects1});
gdjs.StartingSceneCode.mapOfGDgdjs_9546StartingSceneCode_9546GDFrameObjects1Objects = Hashtable.newFrom({"Frame": gdjs.StartingSceneCode.GDFrameObjects1});
gdjs.StartingSceneCode.mapOfGDgdjs_9546StartingSceneCode_9546GDPlayerObjectObjects1Objects = Hashtable.newFrom({"PlayerObject": gdjs.StartingSceneCode.GDPlayerObjectObjects1});
gdjs.StartingSceneCode.mapOfGDgdjs_9546StartingSceneCode_9546GDOrbObjects2Objects = Hashtable.newFrom({"Orb": gdjs.StartingSceneCode.GDOrbObjects2});
gdjs.StartingSceneCode.eventsList3 = function(runtimeScene) {

};gdjs.StartingSceneCode.eventsList4 = function(runtimeScene) {

{


const repeatCount2 = 12;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.StartingSceneCode.GDOrbObjects2.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.StartingSceneCode.mapOfGDgdjs_9546StartingSceneCode_9546GDOrbObjects2Objects, -9999, -9999, "");
}
{for(var i = 0, len = gdjs.StartingSceneCode.GDOrbObjects2.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDOrbObjects2[i].getBehavior("Scale").setScale(1.5);
}
}
{for(var i = 0, len = gdjs.StartingSceneCode.GDOrbObjects2.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDOrbObjects2[i].returnVariable(gdjs.StartingSceneCode.GDOrbObjects2[i].getVariables().getFromIndex(6)).setNumber(gdjs.StartingSceneCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}
{gdjs.StartingSceneCode.localVariables[0].getFromIndex(0).add(1);
}
}
}

}


};gdjs.StartingSceneCode.eventsList5 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
gdjs.StartingSceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.StartingSceneCode.eventsList4(runtimeScene);} //End of subevents
}
gdjs.StartingSceneCode.localVariables.pop();

}


};gdjs.StartingSceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.StartingSceneCode.GDFrameObjects1.length = 0;

gdjs.StartingSceneCode.GDPlayerObjectObjects1.length = 0;

gdjs.StartingSceneCode.GDTextObjects1.length = 0;

gdjs.StartingSceneCode.GDTransitionBGObjects1.length = 0;

{gdjs.evtTools.advancedWindow.maximize(true, runtimeScene);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "TransitionLayer", 0);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.StartingSceneCode.mapOfGDgdjs_9546StartingSceneCode_9546GDTransitionBGObjects1Objects, -9999, -9999, "TransitionLayer");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.StartingSceneCode.mapOfGDgdjs_9546StartingSceneCode_9546GDTextObjects1Objects, 1, -9999, "");
}
{for(var i = 0, len = gdjs.StartingSceneCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDTextObjects1[i].getBehavior("Scale").setScale(0.1);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Message").setString("!!! TOUCH SCREEN DETECTED !!!");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.StartingSceneCode.mapOfGDgdjs_9546StartingSceneCode_9546GDFrameObjects1Objects, 1, -9999, "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.StartingSceneCode.mapOfGDgdjs_9546StartingSceneCode_9546GDPlayerObjectObjects1Objects, 1, -9999, "");
}
{for(var i = 0, len = gdjs.StartingSceneCode.GDPlayerObjectObjects1.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDPlayerObjectObjects1[i].getBehavior("Scale").setScale(2);
}
}
{for(var i = 0, len = gdjs.StartingSceneCode.GDPlayerObjectObjects1.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDPlayerObjectObjects1[i].activateBehavior("TopDownMovement", false);
}
}
{for(var i = 0, len = gdjs.StartingSceneCode.GDPlayerObjectObjects1.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDPlayerObjectObjects1[i].getBehavior("Animation").setAnimationName("Happy");
}
}

{ //Subevents
gdjs.StartingSceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.StartingSceneCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(31910308);
}
if (isConditionTrue_0) {
/* Reuse gdjs.StartingSceneCode.GDTransitionBGObjects2 */
{for(var i = 0, len = gdjs.StartingSceneCode.GDTransitionBGObjects2.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDTransitionBGObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FadeOut", 0, "linear", 1, false);
}
}
}

}


};gdjs.StartingSceneCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Frame"), gdjs.StartingSceneCode.GDFrameObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerObject"), gdjs.StartingSceneCode.GDPlayerObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.StartingSceneCode.GDTextObjects1);
{for(var i = 0, len = gdjs.StartingSceneCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDTextObjects1[i].getBehavior("Text").setText("CREATED BY\n\n\nPLANKTONFUN JAK957 ZEROX4\n\n2026\n\n\nINTERACT TO CONTINUE");
}
}
{for(var i = 0, len = gdjs.StartingSceneCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDTextObjects1[i].setTextAlignment("center");
}
}
{for(var i = 0, len = gdjs.StartingSceneCode.GDFrameObjects1.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDFrameObjects1[i].getBehavior("Resizable").setSize((( gdjs.StartingSceneCode.GDTextObjects1.length === 0 ) ? 0 :gdjs.StartingSceneCode.GDTextObjects1[0].getWidth()) + 32, (( gdjs.StartingSceneCode.GDTextObjects1.length === 0 ) ? 0 :gdjs.StartingSceneCode.GDTextObjects1[0].getHeight()) + 32);
}
}
{for(var i = 0, len = gdjs.StartingSceneCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDTextObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + 50);
}
}
{for(var i = 0, len = gdjs.StartingSceneCode.GDFrameObjects1.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDFrameObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + 50);
}
}
{for(var i = 0, len = gdjs.StartingSceneCode.GDPlayerObjectObjects1.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDPlayerObjectObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),(( gdjs.StartingSceneCode.GDFrameObjects1.length === 0 ) ? 0 :gdjs.StartingSceneCode.GDFrameObjects1[0].getY()) - (gdjs.StartingSceneCode.GDPlayerObjectObjects1[i].getHeight()) - 6);
}
}
}

}


};gdjs.StartingSceneCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TransitionBG"), gdjs.StartingSceneCode.GDTransitionBGObjects2);
{for(var i = 0, len = gdjs.StartingSceneCode.GDTransitionBGObjects2.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDTransitionBGObjects2[i].getBehavior("Resizable").setSize(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) + 16, gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) + 16);
}
}
{for(var i = 0, len = gdjs.StartingSceneCode.GDTransitionBGObjects2.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDTransitionBGObjects2[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}

{ //Subevents
gdjs.StartingSceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "LandscapeLayer"));
if (isConditionTrue_0) {

{ //Subevents
gdjs.StartingSceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.StartingSceneCode.mapOfGDgdjs_9546StartingSceneCode_9546GDFlameObjects3Objects = Hashtable.newFrom({"Flame": gdjs.StartingSceneCode.GDFlameObjects3});
gdjs.StartingSceneCode.mapOfGDgdjs_9546StartingSceneCode_9546GDFlameObjects3Objects = Hashtable.newFrom({"Flame": gdjs.StartingSceneCode.GDFlameObjects3});
gdjs.StartingSceneCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.StartingSceneCode.GDOrbObjects3 */
{for(var i = 0, len = gdjs.StartingSceneCode.GDOrbObjects3.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDOrbObjects3[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.common.mod(gdjs.StartingSceneCode.GDOrbObjects3[i].getVariables().getFromIndex(6).getAsNumber(), 6));
}
}
}

}


};gdjs.StartingSceneCode.mapOfGDgdjs_9546StartingSceneCode_9546GDFlameObjects3Objects = Hashtable.newFrom({"Flame": gdjs.StartingSceneCode.GDFlameObjects3});
gdjs.StartingSceneCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Flame"), gdjs.StartingSceneCode.GDFlameObjects3);
gdjs.copyArray(gdjs.StartingSceneCode.GDOrbObjects2, gdjs.StartingSceneCode.GDOrbObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.StartingSceneCode.mapOfGDgdjs_9546StartingSceneCode_9546GDFlameObjects3Objects, (gdjs.StartingSceneCode.GDOrbObjects3.length !== 0 ? gdjs.StartingSceneCode.GDOrbObjects3[0] : null), null));
if (isConditionTrue_0) {
/* Reuse gdjs.StartingSceneCode.GDOrbObjects3 */
/* Reuse gdjs.StartingSceneCode.GDFlameObjects3 */
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.StartingSceneCode.mapOfGDgdjs_9546StartingSceneCode_9546GDFlameObjects3Objects, -9999, -9999, "");
}
{for(var i = 0, len = gdjs.StartingSceneCode.GDFlameObjects3.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDFlameObjects3[i].getBehavior("Scale").setScale(1.5);
}
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.StartingSceneCode.GDOrbObjects3.length !== 0 ? gdjs.StartingSceneCode.GDOrbObjects3[0] : null), (gdjs.StartingSceneCode.GDFlameObjects3.length !== 0 ? gdjs.StartingSceneCode.GDFlameObjects3[0] : null));
}

{ //Subevents
gdjs.StartingSceneCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flame"), gdjs.StartingSceneCode.GDFlameObjects3);
gdjs.copyArray(gdjs.StartingSceneCode.GDOrbObjects2, gdjs.StartingSceneCode.GDOrbObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.StartingSceneCode.mapOfGDgdjs_9546StartingSceneCode_9546GDFlameObjects3Objects, (gdjs.StartingSceneCode.GDOrbObjects3.length !== 0 ? gdjs.StartingSceneCode.GDOrbObjects3[0] : null), null);
if (isConditionTrue_0) {
/* Reuse gdjs.StartingSceneCode.GDFlameObjects3 */
/* Reuse gdjs.StartingSceneCode.GDOrbObjects3 */
{for(var i = 0, len = gdjs.StartingSceneCode.GDFlameObjects3.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDFlameObjects3[i].getBehavior("Animation").setAnimationIndex((( gdjs.StartingSceneCode.GDOrbObjects3.length === 0 ) ? 0 :gdjs.StartingSceneCode.GDOrbObjects3[0].getBehavior("Animation").getAnimationIndex()));
}
}
{for(var i = 0, len = gdjs.StartingSceneCode.GDFlameObjects3.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDFlameObjects3[i].setCenterPositionInScene((( gdjs.StartingSceneCode.GDOrbObjects3.length === 0 ) ? 0 :gdjs.StartingSceneCode.GDOrbObjects3[0].getCenterXInScene()),(( gdjs.StartingSceneCode.GDOrbObjects3.length === 0 ) ? 0 :gdjs.StartingSceneCode.GDOrbObjects3[0].getCenterYInScene()) - 10);
}
}
}

}


};gdjs.StartingSceneCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Orb"), gdjs.StartingSceneCode.GDOrbObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerObject"), gdjs.StartingSceneCode.GDPlayerObjectObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("SpinToWin").add(64 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
{for(var i = 0, len = gdjs.StartingSceneCode.GDOrbObjects2.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDOrbObjects2[i].putAround((( gdjs.StartingSceneCode.GDPlayerObjectObjects2.length === 0 ) ? 0 :gdjs.StartingSceneCode.GDPlayerObjectObjects2[0].getCenterXInScene()), (( gdjs.StartingSceneCode.GDPlayerObjectObjects2.length === 0 ) ? 0 :gdjs.StartingSceneCode.GDPlayerObjectObjects2[0].getCenterYInScene()) + 15, 40, ((360 / 12) * gdjs.StartingSceneCode.GDOrbObjects2[i].getVariables().getFromIndex(6).getAsNumber()) + runtimeScene.getGame().getVariables().getFromIndex(4).getChild("SpinToWin").getAsNumber());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Orb"), gdjs.StartingSceneCode.GDOrbObjects1);

for (gdjs.StartingSceneCode.forEachIndex2 = 0;gdjs.StartingSceneCode.forEachIndex2 < gdjs.StartingSceneCode.GDOrbObjects1.length;++gdjs.StartingSceneCode.forEachIndex2) {
gdjs.StartingSceneCode.GDOrbObjects2.length = 0;


gdjs.StartingSceneCode.forEachTemporary2 = gdjs.StartingSceneCode.GDOrbObjects1[gdjs.StartingSceneCode.forEachIndex2];
gdjs.StartingSceneCode.GDOrbObjects2.push(gdjs.StartingSceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.StartingSceneCode.eventsList11(runtimeScene);} //Subevents end.
}
}

}


};gdjs.StartingSceneCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__SaveLoadEasy__SaveExist.func(runtimeScene, "Save", "MyStorage", null));
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).getChild("TouchOpacity").setNumber(0);
}
{gdjs.evtsExt__SaveLoadEasy__Save.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3), "Save", "MyStorage", null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SaveLoadEasy__SaveExist.func(runtimeScene, "Save", "MyStorage", null);
if (isConditionTrue_0) {
{gdjs.evtsExt__SaveLoadEasy__Load.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3), "Save", "MyStorage", null);
}
}

}


};gdjs.StartingSceneCode.asyncCallback31925636 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.StartingSceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}
gdjs.StartingSceneCode.localVariables.length = 0;
}
gdjs.StartingSceneCode.idToCallbackMap.set(31925636, gdjs.StartingSceneCode.asyncCallback31925636);
gdjs.StartingSceneCode.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.StartingSceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.2), (runtimeScene) => (gdjs.StartingSceneCode.asyncCallback31925636(runtimeScene, asyncObjectsList)), 31925636, asyncObjectsList);
}
}

}


};gdjs.StartingSceneCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {

{ //Subevents
gdjs.StartingSceneCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SaveLoadEasy__SaveExist.func(runtimeScene, "Save", "MyStorage", null);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__SaveLoadEasy__Load.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3), "Save", "MyStorage", null);
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.StartingSceneCode.GDTransitionBGObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/FloorAdvance.aac", false, runtimeScene.getGame().getVariables().getFromIndex(3).getChild("VolSound").getAsNumber(), 1);
}
{for(var i = 0, len = gdjs.StartingSceneCode.GDTransitionBGObjects1.length ;i < len;++i) {
    gdjs.StartingSceneCode.GDTransitionBGObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 255, "linear", 1.2, false);
}
}

{ //Subevents
gdjs.StartingSceneCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.StartingSceneCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransitionBG"), gdjs.StartingSceneCode.GDTransitionBGObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartingSceneCode.GDTransitionBGObjects1.length;i<l;++i) {
    if ( !(gdjs.StartingSceneCode.GDTransitionBGObjects1[i].getBehavior("Tween").isPlaying("FadeOut")) ) {
        isConditionTrue_0 = true;
        gdjs.StartingSceneCode.GDTransitionBGObjects1[k] = gdjs.StartingSceneCode.GDTransitionBGObjects1[i];
        ++k;
    }
}
gdjs.StartingSceneCode.GDTransitionBGObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartingSceneCode.GDTransitionBGObjects1.length;i<l;++i) {
    if ( !(gdjs.StartingSceneCode.GDTransitionBGObjects1[i].getBehavior("Tween").isPlaying("FadeIn")) ) {
        isConditionTrue_0 = true;
        gdjs.StartingSceneCode.GDTransitionBGObjects1[k] = gdjs.StartingSceneCode.GDTransitionBGObjects1[i];
        ++k;
    }
}
gdjs.StartingSceneCode.GDTransitionBGObjects1.length = k;
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
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 1, null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 2, null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 3, null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 4, null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.StartingSceneCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.StartingSceneCode.eventsList17 = function(runtimeScene) {

{


gdjs.StartingSceneCode.eventsList2(runtimeScene);
}


{


gdjs.StartingSceneCode.eventsList6(runtimeScene);
}


{


gdjs.StartingSceneCode.eventsList9(runtimeScene);
}


{


gdjs.StartingSceneCode.eventsList12(runtimeScene);
}


{


gdjs.StartingSceneCode.eventsList16(runtimeScene);
}


};

gdjs.StartingSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartingSceneCode.GDTextObjects1.length = 0;
gdjs.StartingSceneCode.GDTextObjects2.length = 0;
gdjs.StartingSceneCode.GDTextObjects3.length = 0;
gdjs.StartingSceneCode.GDTextObjects4.length = 0;
gdjs.StartingSceneCode.GDBlackBGObjects1.length = 0;
gdjs.StartingSceneCode.GDBlackBGObjects2.length = 0;
gdjs.StartingSceneCode.GDBlackBGObjects3.length = 0;
gdjs.StartingSceneCode.GDBlackBGObjects4.length = 0;
gdjs.StartingSceneCode.GDFrameObjects1.length = 0;
gdjs.StartingSceneCode.GDFrameObjects2.length = 0;
gdjs.StartingSceneCode.GDFrameObjects3.length = 0;
gdjs.StartingSceneCode.GDFrameObjects4.length = 0;
gdjs.StartingSceneCode.GDOrbObjects1.length = 0;
gdjs.StartingSceneCode.GDOrbObjects2.length = 0;
gdjs.StartingSceneCode.GDOrbObjects3.length = 0;
gdjs.StartingSceneCode.GDOrbObjects4.length = 0;
gdjs.StartingSceneCode.GDTransitionBGObjects1.length = 0;
gdjs.StartingSceneCode.GDTransitionBGObjects2.length = 0;
gdjs.StartingSceneCode.GDTransitionBGObjects3.length = 0;
gdjs.StartingSceneCode.GDTransitionBGObjects4.length = 0;
gdjs.StartingSceneCode.GDPlayerObjectObjects1.length = 0;
gdjs.StartingSceneCode.GDPlayerObjectObjects2.length = 0;
gdjs.StartingSceneCode.GDPlayerObjectObjects3.length = 0;
gdjs.StartingSceneCode.GDPlayerObjectObjects4.length = 0;
gdjs.StartingSceneCode.GDFlameObjects1.length = 0;
gdjs.StartingSceneCode.GDFlameObjects2.length = 0;
gdjs.StartingSceneCode.GDFlameObjects3.length = 0;
gdjs.StartingSceneCode.GDFlameObjects4.length = 0;
gdjs.StartingSceneCode.GDJoystickObjects1.length = 0;
gdjs.StartingSceneCode.GDJoystickObjects2.length = 0;
gdjs.StartingSceneCode.GDJoystickObjects3.length = 0;
gdjs.StartingSceneCode.GDJoystickObjects4.length = 0;
gdjs.StartingSceneCode.GDDpadUpObjects1.length = 0;
gdjs.StartingSceneCode.GDDpadUpObjects2.length = 0;
gdjs.StartingSceneCode.GDDpadUpObjects3.length = 0;
gdjs.StartingSceneCode.GDDpadUpObjects4.length = 0;
gdjs.StartingSceneCode.GDDpadDownObjects1.length = 0;
gdjs.StartingSceneCode.GDDpadDownObjects2.length = 0;
gdjs.StartingSceneCode.GDDpadDownObjects3.length = 0;
gdjs.StartingSceneCode.GDDpadDownObjects4.length = 0;
gdjs.StartingSceneCode.GDDpadLeftObjects1.length = 0;
gdjs.StartingSceneCode.GDDpadLeftObjects2.length = 0;
gdjs.StartingSceneCode.GDDpadLeftObjects3.length = 0;
gdjs.StartingSceneCode.GDDpadLeftObjects4.length = 0;
gdjs.StartingSceneCode.GDDpadRightObjects1.length = 0;
gdjs.StartingSceneCode.GDDpadRightObjects2.length = 0;
gdjs.StartingSceneCode.GDDpadRightObjects3.length = 0;
gdjs.StartingSceneCode.GDDpadRightObjects4.length = 0;
gdjs.StartingSceneCode.GDButtonObjects1.length = 0;
gdjs.StartingSceneCode.GDButtonObjects2.length = 0;
gdjs.StartingSceneCode.GDButtonObjects3.length = 0;
gdjs.StartingSceneCode.GDButtonObjects4.length = 0;
gdjs.StartingSceneCode.GDLandscapeBlackObjects1.length = 0;
gdjs.StartingSceneCode.GDLandscapeBlackObjects2.length = 0;
gdjs.StartingSceneCode.GDLandscapeBlackObjects3.length = 0;
gdjs.StartingSceneCode.GDLandscapeBlackObjects4.length = 0;
gdjs.StartingSceneCode.GDLandscapeObjects1.length = 0;
gdjs.StartingSceneCode.GDLandscapeObjects2.length = 0;
gdjs.StartingSceneCode.GDLandscapeObjects3.length = 0;
gdjs.StartingSceneCode.GDLandscapeObjects4.length = 0;
gdjs.StartingSceneCode.GDSettingsButtonObjects1.length = 0;
gdjs.StartingSceneCode.GDSettingsButtonObjects2.length = 0;
gdjs.StartingSceneCode.GDSettingsButtonObjects3.length = 0;
gdjs.StartingSceneCode.GDSettingsButtonObjects4.length = 0;
gdjs.StartingSceneCode.GDCloseButtonObjects1.length = 0;
gdjs.StartingSceneCode.GDCloseButtonObjects2.length = 0;
gdjs.StartingSceneCode.GDCloseButtonObjects3.length = 0;
gdjs.StartingSceneCode.GDCloseButtonObjects4.length = 0;
gdjs.StartingSceneCode.GDOpacityButtonObjects1.length = 0;
gdjs.StartingSceneCode.GDOpacityButtonObjects2.length = 0;
gdjs.StartingSceneCode.GDOpacityButtonObjects3.length = 0;
gdjs.StartingSceneCode.GDOpacityButtonObjects4.length = 0;
gdjs.StartingSceneCode.GDSizeButtonObjects1.length = 0;
gdjs.StartingSceneCode.GDSizeButtonObjects2.length = 0;
gdjs.StartingSceneCode.GDSizeButtonObjects3.length = 0;
gdjs.StartingSceneCode.GDSizeButtonObjects4.length = 0;

gdjs.StartingSceneCode.eventsList17(runtimeScene);
gdjs.StartingSceneCode.GDTextObjects1.length = 0;
gdjs.StartingSceneCode.GDTextObjects2.length = 0;
gdjs.StartingSceneCode.GDTextObjects3.length = 0;
gdjs.StartingSceneCode.GDTextObjects4.length = 0;
gdjs.StartingSceneCode.GDBlackBGObjects1.length = 0;
gdjs.StartingSceneCode.GDBlackBGObjects2.length = 0;
gdjs.StartingSceneCode.GDBlackBGObjects3.length = 0;
gdjs.StartingSceneCode.GDBlackBGObjects4.length = 0;
gdjs.StartingSceneCode.GDFrameObjects1.length = 0;
gdjs.StartingSceneCode.GDFrameObjects2.length = 0;
gdjs.StartingSceneCode.GDFrameObjects3.length = 0;
gdjs.StartingSceneCode.GDFrameObjects4.length = 0;
gdjs.StartingSceneCode.GDOrbObjects1.length = 0;
gdjs.StartingSceneCode.GDOrbObjects2.length = 0;
gdjs.StartingSceneCode.GDOrbObjects3.length = 0;
gdjs.StartingSceneCode.GDOrbObjects4.length = 0;
gdjs.StartingSceneCode.GDTransitionBGObjects1.length = 0;
gdjs.StartingSceneCode.GDTransitionBGObjects2.length = 0;
gdjs.StartingSceneCode.GDTransitionBGObjects3.length = 0;
gdjs.StartingSceneCode.GDTransitionBGObjects4.length = 0;
gdjs.StartingSceneCode.GDPlayerObjectObjects1.length = 0;
gdjs.StartingSceneCode.GDPlayerObjectObjects2.length = 0;
gdjs.StartingSceneCode.GDPlayerObjectObjects3.length = 0;
gdjs.StartingSceneCode.GDPlayerObjectObjects4.length = 0;
gdjs.StartingSceneCode.GDFlameObjects1.length = 0;
gdjs.StartingSceneCode.GDFlameObjects2.length = 0;
gdjs.StartingSceneCode.GDFlameObjects3.length = 0;
gdjs.StartingSceneCode.GDFlameObjects4.length = 0;
gdjs.StartingSceneCode.GDJoystickObjects1.length = 0;
gdjs.StartingSceneCode.GDJoystickObjects2.length = 0;
gdjs.StartingSceneCode.GDJoystickObjects3.length = 0;
gdjs.StartingSceneCode.GDJoystickObjects4.length = 0;
gdjs.StartingSceneCode.GDDpadUpObjects1.length = 0;
gdjs.StartingSceneCode.GDDpadUpObjects2.length = 0;
gdjs.StartingSceneCode.GDDpadUpObjects3.length = 0;
gdjs.StartingSceneCode.GDDpadUpObjects4.length = 0;
gdjs.StartingSceneCode.GDDpadDownObjects1.length = 0;
gdjs.StartingSceneCode.GDDpadDownObjects2.length = 0;
gdjs.StartingSceneCode.GDDpadDownObjects3.length = 0;
gdjs.StartingSceneCode.GDDpadDownObjects4.length = 0;
gdjs.StartingSceneCode.GDDpadLeftObjects1.length = 0;
gdjs.StartingSceneCode.GDDpadLeftObjects2.length = 0;
gdjs.StartingSceneCode.GDDpadLeftObjects3.length = 0;
gdjs.StartingSceneCode.GDDpadLeftObjects4.length = 0;
gdjs.StartingSceneCode.GDDpadRightObjects1.length = 0;
gdjs.StartingSceneCode.GDDpadRightObjects2.length = 0;
gdjs.StartingSceneCode.GDDpadRightObjects3.length = 0;
gdjs.StartingSceneCode.GDDpadRightObjects4.length = 0;
gdjs.StartingSceneCode.GDButtonObjects1.length = 0;
gdjs.StartingSceneCode.GDButtonObjects2.length = 0;
gdjs.StartingSceneCode.GDButtonObjects3.length = 0;
gdjs.StartingSceneCode.GDButtonObjects4.length = 0;
gdjs.StartingSceneCode.GDLandscapeBlackObjects1.length = 0;
gdjs.StartingSceneCode.GDLandscapeBlackObjects2.length = 0;
gdjs.StartingSceneCode.GDLandscapeBlackObjects3.length = 0;
gdjs.StartingSceneCode.GDLandscapeBlackObjects4.length = 0;
gdjs.StartingSceneCode.GDLandscapeObjects1.length = 0;
gdjs.StartingSceneCode.GDLandscapeObjects2.length = 0;
gdjs.StartingSceneCode.GDLandscapeObjects3.length = 0;
gdjs.StartingSceneCode.GDLandscapeObjects4.length = 0;
gdjs.StartingSceneCode.GDSettingsButtonObjects1.length = 0;
gdjs.StartingSceneCode.GDSettingsButtonObjects2.length = 0;
gdjs.StartingSceneCode.GDSettingsButtonObjects3.length = 0;
gdjs.StartingSceneCode.GDSettingsButtonObjects4.length = 0;
gdjs.StartingSceneCode.GDCloseButtonObjects1.length = 0;
gdjs.StartingSceneCode.GDCloseButtonObjects2.length = 0;
gdjs.StartingSceneCode.GDCloseButtonObjects3.length = 0;
gdjs.StartingSceneCode.GDCloseButtonObjects4.length = 0;
gdjs.StartingSceneCode.GDOpacityButtonObjects1.length = 0;
gdjs.StartingSceneCode.GDOpacityButtonObjects2.length = 0;
gdjs.StartingSceneCode.GDOpacityButtonObjects3.length = 0;
gdjs.StartingSceneCode.GDOpacityButtonObjects4.length = 0;
gdjs.StartingSceneCode.GDSizeButtonObjects1.length = 0;
gdjs.StartingSceneCode.GDSizeButtonObjects2.length = 0;
gdjs.StartingSceneCode.GDSizeButtonObjects3.length = 0;
gdjs.StartingSceneCode.GDSizeButtonObjects4.length = 0;


return;

}

gdjs['StartingSceneCode'] = gdjs.StartingSceneCode;
