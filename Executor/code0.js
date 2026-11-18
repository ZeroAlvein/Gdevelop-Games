gdjs.ExecutorCode = {};
gdjs.ExecutorCode.localVariables = [];
gdjs.ExecutorCode.idToCallbackMap = new Map();
gdjs.ExecutorCode.GDExecutorObjects1= [];
gdjs.ExecutorCode.GDExecutorObjects2= [];
gdjs.ExecutorCode.GDExecutorObjects3= [];
gdjs.ExecutorCode.GDExecutorObjects4= [];
gdjs.ExecutorCode.GDButton1Objects1= [];
gdjs.ExecutorCode.GDButton1Objects2= [];
gdjs.ExecutorCode.GDButton1Objects3= [];
gdjs.ExecutorCode.GDButton1Objects4= [];
gdjs.ExecutorCode.GDButton2Objects1= [];
gdjs.ExecutorCode.GDButton2Objects2= [];
gdjs.ExecutorCode.GDButton2Objects3= [];
gdjs.ExecutorCode.GDButton2Objects4= [];
gdjs.ExecutorCode.GDButton3Objects1= [];
gdjs.ExecutorCode.GDButton3Objects2= [];
gdjs.ExecutorCode.GDButton3Objects3= [];
gdjs.ExecutorCode.GDButton3Objects4= [];
gdjs.ExecutorCode.GDButton4Objects1= [];
gdjs.ExecutorCode.GDButton4Objects2= [];
gdjs.ExecutorCode.GDButton4Objects3= [];
gdjs.ExecutorCode.GDButton4Objects4= [];
gdjs.ExecutorCode.GDButton5Objects1= [];
gdjs.ExecutorCode.GDButton5Objects2= [];
gdjs.ExecutorCode.GDButton5Objects3= [];
gdjs.ExecutorCode.GDButton5Objects4= [];
gdjs.ExecutorCode.GDButton6Objects1= [];
gdjs.ExecutorCode.GDButton6Objects2= [];
gdjs.ExecutorCode.GDButton6Objects3= [];
gdjs.ExecutorCode.GDButton6Objects4= [];
gdjs.ExecutorCode.GDButton7Objects1= [];
gdjs.ExecutorCode.GDButton7Objects2= [];
gdjs.ExecutorCode.GDButton7Objects3= [];
gdjs.ExecutorCode.GDButton7Objects4= [];
gdjs.ExecutorCode.GDButton8Objects1= [];
gdjs.ExecutorCode.GDButton8Objects2= [];
gdjs.ExecutorCode.GDButton8Objects3= [];
gdjs.ExecutorCode.GDButton8Objects4= [];
gdjs.ExecutorCode.GDNewTextObjects1= [];
gdjs.ExecutorCode.GDNewTextObjects2= [];
gdjs.ExecutorCode.GDNewTextObjects3= [];
gdjs.ExecutorCode.GDNewTextObjects4= [];
gdjs.ExecutorCode.GDRButtonObjects1= [];
gdjs.ExecutorCode.GDRButtonObjects2= [];
gdjs.ExecutorCode.GDRButtonObjects3= [];
gdjs.ExecutorCode.GDRButtonObjects4= [];
gdjs.ExecutorCode.GDLButtonObjects1= [];
gdjs.ExecutorCode.GDLButtonObjects2= [];
gdjs.ExecutorCode.GDLButtonObjects3= [];
gdjs.ExecutorCode.GDLButtonObjects4= [];
gdjs.ExecutorCode.GDSettingsObjects1= [];
gdjs.ExecutorCode.GDSettingsObjects2= [];
gdjs.ExecutorCode.GDSettingsObjects3= [];
gdjs.ExecutorCode.GDSettingsObjects4= [];
gdjs.ExecutorCode.GDResetObjects1= [];
gdjs.ExecutorCode.GDResetObjects2= [];
gdjs.ExecutorCode.GDResetObjects3= [];
gdjs.ExecutorCode.GDResetObjects4= [];


gdjs.ExecutorCode.eventsList0 = function(runtimeScene) {

};gdjs.ExecutorCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) < gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Executor"), gdjs.ExecutorCode.GDExecutorObjects3);
{for(var i = 0, len = gdjs.ExecutorCode.GDExecutorObjects3.length ;i < len;++i) {
    gdjs.ExecutorCode.GDExecutorObjects3[i].getBehavior("Resizable").setSize(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.ExecutorCode.GDExecutorObjects3.length ;i < len;++i) {
    gdjs.ExecutorCode.GDExecutorObjects3[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) >= gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Executor"), gdjs.ExecutorCode.GDExecutorObjects3);
{for(var i = 0, len = gdjs.ExecutorCode.GDExecutorObjects3.length ;i < len;++i) {
    gdjs.ExecutorCode.GDExecutorObjects3[i].getBehavior("Resizable").setSize(gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 1.5, gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.ExecutorCode.GDExecutorObjects3.length ;i < len;++i) {
    gdjs.ExecutorCode.GDExecutorObjects3[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Button1"), gdjs.ExecutorCode.GDButton1Objects3);
gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.ExecutorCode.GDButton2Objects3);
gdjs.copyArray(runtimeScene.getObjects("Button3"), gdjs.ExecutorCode.GDButton3Objects3);
gdjs.copyArray(runtimeScene.getObjects("Button4"), gdjs.ExecutorCode.GDButton4Objects3);
gdjs.copyArray(runtimeScene.getObjects("Button5"), gdjs.ExecutorCode.GDButton5Objects3);
gdjs.copyArray(runtimeScene.getObjects("Button6"), gdjs.ExecutorCode.GDButton6Objects3);
gdjs.copyArray(runtimeScene.getObjects("Button7"), gdjs.ExecutorCode.GDButton7Objects3);
gdjs.copyArray(runtimeScene.getObjects("Button8"), gdjs.ExecutorCode.GDButton8Objects3);
gdjs.copyArray(runtimeScene.getObjects("Executor"), gdjs.ExecutorCode.GDExecutorObjects3);
{for(var i = 0, len = gdjs.ExecutorCode.GDButton1Objects3.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton1Objects3[i].getBehavior("Resizable").setSize((( gdjs.ExecutorCode.GDExecutorObjects3.length === 0 ) ? 0 :gdjs.ExecutorCode.GDExecutorObjects3[0].getWidth()) / 4.13 + runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), (( gdjs.ExecutorCode.GDExecutorObjects3.length === 0 ) ? 0 :gdjs.ExecutorCode.GDExecutorObjects3[0].getHeight()) / 7.2 + runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton2Objects3.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton2Objects3[i].getBehavior("Resizable").setSize((( gdjs.ExecutorCode.GDExecutorObjects3.length === 0 ) ? 0 :gdjs.ExecutorCode.GDExecutorObjects3[0].getWidth()) / 4.73 + runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), (( gdjs.ExecutorCode.GDExecutorObjects3.length === 0 ) ? 0 :gdjs.ExecutorCode.GDExecutorObjects3[0].getHeight()) / 7.2 + runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton3Objects3.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton3Objects3[i].getBehavior("Resizable").setSize((( gdjs.ExecutorCode.GDExecutorObjects3.length === 0 ) ? 0 :gdjs.ExecutorCode.GDExecutorObjects3[0].getWidth()) / 4.51 + runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), (( gdjs.ExecutorCode.GDExecutorObjects3.length === 0 ) ? 0 :gdjs.ExecutorCode.GDExecutorObjects3[0].getHeight()) / 7.2 + runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton4Objects3.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton4Objects3[i].getBehavior("Resizable").setSize((( gdjs.ExecutorCode.GDExecutorObjects3.length === 0 ) ? 0 :gdjs.ExecutorCode.GDExecutorObjects3[0].getWidth()) / 4.32 + runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), (( gdjs.ExecutorCode.GDExecutorObjects3.length === 0 ) ? 0 :gdjs.ExecutorCode.GDExecutorObjects3[0].getHeight()) / 7.2 + runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton5Objects3.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton5Objects3[i].getBehavior("Resizable").setSize((( gdjs.ExecutorCode.GDExecutorObjects3.length === 0 ) ? 0 :gdjs.ExecutorCode.GDExecutorObjects3[0].getWidth()) / 4.13 + runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), (( gdjs.ExecutorCode.GDExecutorObjects3.length === 0 ) ? 0 :gdjs.ExecutorCode.GDExecutorObjects3[0].getHeight()) / 7.42 + runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton6Objects3.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton6Objects3[i].getBehavior("Resizable").setSize((( gdjs.ExecutorCode.GDExecutorObjects3.length === 0 ) ? 0 :gdjs.ExecutorCode.GDExecutorObjects3[0].getWidth()) / 4.73 + runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), (( gdjs.ExecutorCode.GDExecutorObjects3.length === 0 ) ? 0 :gdjs.ExecutorCode.GDExecutorObjects3[0].getHeight()) / 7.42 + runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton7Objects3.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton7Objects3[i].getBehavior("Resizable").setSize((( gdjs.ExecutorCode.GDExecutorObjects3.length === 0 ) ? 0 :gdjs.ExecutorCode.GDExecutorObjects3[0].getWidth()) / 4.51 + runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), (( gdjs.ExecutorCode.GDExecutorObjects3.length === 0 ) ? 0 :gdjs.ExecutorCode.GDExecutorObjects3[0].getHeight()) / 7.42 + runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton8Objects3.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton8Objects3[i].getBehavior("Resizable").setSize((( gdjs.ExecutorCode.GDExecutorObjects3.length === 0 ) ? 0 :gdjs.ExecutorCode.GDExecutorObjects3[0].getWidth()) / 4.32 + runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), (( gdjs.ExecutorCode.GDExecutorObjects3.length === 0 ) ? 0 :gdjs.ExecutorCode.GDExecutorObjects3[0].getHeight()) / 7.42 + runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Button1"), gdjs.ExecutorCode.GDButton1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.ExecutorCode.GDButton2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Button3"), gdjs.ExecutorCode.GDButton3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Button4"), gdjs.ExecutorCode.GDButton4Objects2);
gdjs.copyArray(runtimeScene.getObjects("Button5"), gdjs.ExecutorCode.GDButton5Objects2);
gdjs.copyArray(runtimeScene.getObjects("Button6"), gdjs.ExecutorCode.GDButton6Objects2);
gdjs.copyArray(runtimeScene.getObjects("Button7"), gdjs.ExecutorCode.GDButton7Objects2);
gdjs.copyArray(runtimeScene.getObjects("Button8"), gdjs.ExecutorCode.GDButton8Objects2);
gdjs.copyArray(runtimeScene.getObjects("Executor"), gdjs.ExecutorCode.GDExecutorObjects2);
{for(var i = 0, len = gdjs.ExecutorCode.GDButton1Objects2.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton1Objects2[i].setPosition((( gdjs.ExecutorCode.GDExecutorObjects2.length === 0 ) ? 0 :gdjs.ExecutorCode.GDExecutorObjects2[0].getAABBLeft()) + (( gdjs.ExecutorCode.GDExecutorObjects2.length === 0 ) ? 0 :gdjs.ExecutorCode.GDExecutorObjects2[0].getWidth()) / runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(),(( gdjs.ExecutorCode.GDExecutorObjects2.length === 0 ) ? 0 :gdjs.ExecutorCode.GDExecutorObjects2[0].getAABBTop()) + (( gdjs.ExecutorCode.GDExecutorObjects2.length === 0 ) ? 0 :gdjs.ExecutorCode.GDExecutorObjects2[0].getHeight()) / runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton2Objects2.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton2Objects2[i].setPosition((( gdjs.ExecutorCode.GDButton1Objects2.length === 0 ) ? 0 :gdjs.ExecutorCode.GDButton1Objects2[0].getAABBRight()),(( gdjs.ExecutorCode.GDButton1Objects2.length === 0 ) ? 0 :gdjs.ExecutorCode.GDButton1Objects2[0].getPointY("")));
}
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton3Objects2.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton3Objects2[i].setPosition((( gdjs.ExecutorCode.GDButton2Objects2.length === 0 ) ? 0 :gdjs.ExecutorCode.GDButton2Objects2[0].getAABBRight()),(( gdjs.ExecutorCode.GDButton1Objects2.length === 0 ) ? 0 :gdjs.ExecutorCode.GDButton1Objects2[0].getPointY("")));
}
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton4Objects2.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton4Objects2[i].setPosition((( gdjs.ExecutorCode.GDButton3Objects2.length === 0 ) ? 0 :gdjs.ExecutorCode.GDButton3Objects2[0].getAABBRight()),(( gdjs.ExecutorCode.GDButton1Objects2.length === 0 ) ? 0 :gdjs.ExecutorCode.GDButton1Objects2[0].getPointY("")));
}
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton5Objects2.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton5Objects2[i].setPosition((( gdjs.ExecutorCode.GDButton1Objects2.length === 0 ) ? 0 :gdjs.ExecutorCode.GDButton1Objects2[0].getPointX("")),(( gdjs.ExecutorCode.GDButton1Objects2.length === 0 ) ? 0 :gdjs.ExecutorCode.GDButton1Objects2[0].getAABBBottom()));
}
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton6Objects2.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton6Objects2[i].setPosition((( gdjs.ExecutorCode.GDButton1Objects2.length === 0 ) ? 0 :gdjs.ExecutorCode.GDButton1Objects2[0].getAABBRight()),(( gdjs.ExecutorCode.GDButton1Objects2.length === 0 ) ? 0 :gdjs.ExecutorCode.GDButton1Objects2[0].getAABBBottom()));
}
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton7Objects2.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton7Objects2[i].setPosition((( gdjs.ExecutorCode.GDButton2Objects2.length === 0 ) ? 0 :gdjs.ExecutorCode.GDButton2Objects2[0].getAABBRight()),(( gdjs.ExecutorCode.GDButton1Objects2.length === 0 ) ? 0 :gdjs.ExecutorCode.GDButton1Objects2[0].getAABBBottom()));
}
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton8Objects2.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton8Objects2[i].setPosition((( gdjs.ExecutorCode.GDButton3Objects2.length === 0 ) ? 0 :gdjs.ExecutorCode.GDButton3Objects2[0].getAABBRight()),(( gdjs.ExecutorCode.GDButton1Objects2.length === 0 ) ? 0 :gdjs.ExecutorCode.GDButton1Objects2[0].getAABBBottom()));
}
}
}

}


};gdjs.ExecutorCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.ExecutorCode.eventsList0(runtimeScene);} //End of subevents
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
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(20.7);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1.9);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = !(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("W").getAsNumber() == gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = !(runtimeScene.getScene().getVariables().getFromIndex(8).getChild("H").getAsNumber() == gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0));
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
gdjs.ExecutorCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("W").setNumber(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(8).getChild("H").setNumber(gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0));
}
}

}


};gdjs.ExecutorCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button1"), gdjs.ExecutorCode.GDButton1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ExecutorCode.GDButton1Objects2.length;i<l;++i) {
    if ( gdjs.ExecutorCode.GDButton1Objects2[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.ExecutorCode.GDButton1Objects2[k] = gdjs.ExecutorCode.GDButton1Objects2[i];
        ++k;
    }
}
gdjs.ExecutorCode.GDButton1Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(43138492);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ExecutorCode.GDButton1Objects2 */
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ogg\\1.ogg", 1, true, 100, 1);
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton1Objects2.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton1Objects2[i].setAnimation(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.ExecutorCode.GDButton2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ExecutorCode.GDButton2Objects2.length;i<l;++i) {
    if ( gdjs.ExecutorCode.GDButton2Objects2[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.ExecutorCode.GDButton2Objects2[k] = gdjs.ExecutorCode.GDButton2Objects2[i];
        ++k;
    }
}
gdjs.ExecutorCode.GDButton2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(39251948);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ExecutorCode.GDButton2Objects2 */
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ogg\\2.ogg", 2, true, 100, 1);
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton2Objects2.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton2Objects2[i].setAnimation(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button3"), gdjs.ExecutorCode.GDButton3Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ExecutorCode.GDButton3Objects2.length;i<l;++i) {
    if ( gdjs.ExecutorCode.GDButton3Objects2[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.ExecutorCode.GDButton3Objects2[k] = gdjs.ExecutorCode.GDButton3Objects2[i];
        ++k;
    }
}
gdjs.ExecutorCode.GDButton3Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(58308988);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ExecutorCode.GDButton3Objects2 */
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ogg\\3.ogg", 3, true, 100, 1);
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton3Objects2.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton3Objects2[i].setAnimation(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button4"), gdjs.ExecutorCode.GDButton4Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ExecutorCode.GDButton4Objects2.length;i<l;++i) {
    if ( gdjs.ExecutorCode.GDButton4Objects2[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.ExecutorCode.GDButton4Objects2[k] = gdjs.ExecutorCode.GDButton4Objects2[i];
        ++k;
    }
}
gdjs.ExecutorCode.GDButton4Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(52327516);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ExecutorCode.GDButton4Objects2 */
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ogg\\4.ogg", 4, true, 100, 1);
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton4Objects2.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton4Objects2[i].setAnimation(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button5"), gdjs.ExecutorCode.GDButton5Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ExecutorCode.GDButton5Objects2.length;i<l;++i) {
    if ( gdjs.ExecutorCode.GDButton5Objects2[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.ExecutorCode.GDButton5Objects2[k] = gdjs.ExecutorCode.GDButton5Objects2[i];
        ++k;
    }
}
gdjs.ExecutorCode.GDButton5Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(38547276);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ExecutorCode.GDButton5Objects2 */
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ogg\\5.ogg", 5, true, 100, 1);
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton5Objects2.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton5Objects2[i].setAnimation(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button6"), gdjs.ExecutorCode.GDButton6Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ExecutorCode.GDButton6Objects2.length;i<l;++i) {
    if ( gdjs.ExecutorCode.GDButton6Objects2[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.ExecutorCode.GDButton6Objects2[k] = gdjs.ExecutorCode.GDButton6Objects2[i];
        ++k;
    }
}
gdjs.ExecutorCode.GDButton6Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15415068);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ExecutorCode.GDButton6Objects2 */
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ogg\\6.ogg", 6, true, 100, 1);
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton6Objects2.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton6Objects2[i].setAnimation(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button7"), gdjs.ExecutorCode.GDButton7Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ExecutorCode.GDButton7Objects2.length;i<l;++i) {
    if ( gdjs.ExecutorCode.GDButton7Objects2[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.ExecutorCode.GDButton7Objects2[k] = gdjs.ExecutorCode.GDButton7Objects2[i];
        ++k;
    }
}
gdjs.ExecutorCode.GDButton7Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(40589908);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ExecutorCode.GDButton7Objects2 */
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ogg\\7.ogg", 7, true, 100, 1);
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton7Objects2.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton7Objects2[i].setAnimation(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button8"), gdjs.ExecutorCode.GDButton8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ExecutorCode.GDButton8Objects1.length;i<l;++i) {
    if ( gdjs.ExecutorCode.GDButton8Objects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.ExecutorCode.GDButton8Objects1[k] = gdjs.ExecutorCode.GDButton8Objects1[i];
        ++k;
    }
}
gdjs.ExecutorCode.GDButton8Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(44006524);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ExecutorCode.GDButton8Objects1 */
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "ogg\\8.ogg", 8, true, 100, 1);
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton8Objects1.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton8Objects1[i].setAnimation(1);
}
}
}

}


};gdjs.ExecutorCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ExecutorCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.ExecutorCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button1"), gdjs.ExecutorCode.GDButton1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ExecutorCode.GDButton1Objects2.length;i<l;++i) {
    if ( !(gdjs.ExecutorCode.GDButton1Objects2[i].getBehavior("ButtonFSM").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.ExecutorCode.GDButton1Objects2[k] = gdjs.ExecutorCode.GDButton1Objects2[i];
        ++k;
    }
}
gdjs.ExecutorCode.GDButton1Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(41432724);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ExecutorCode.GDButton1Objects2 */
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton1Objects2.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton1Objects2[i].setAnimation(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.ExecutorCode.GDButton2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ExecutorCode.GDButton2Objects2.length;i<l;++i) {
    if ( !(gdjs.ExecutorCode.GDButton2Objects2[i].getBehavior("ButtonFSM").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.ExecutorCode.GDButton2Objects2[k] = gdjs.ExecutorCode.GDButton2Objects2[i];
        ++k;
    }
}
gdjs.ExecutorCode.GDButton2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(42614356);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ExecutorCode.GDButton2Objects2 */
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton2Objects2.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton2Objects2[i].setAnimation(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button3"), gdjs.ExecutorCode.GDButton3Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ExecutorCode.GDButton3Objects2.length;i<l;++i) {
    if ( !(gdjs.ExecutorCode.GDButton3Objects2[i].getBehavior("ButtonFSM").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.ExecutorCode.GDButton3Objects2[k] = gdjs.ExecutorCode.GDButton3Objects2[i];
        ++k;
    }
}
gdjs.ExecutorCode.GDButton3Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(58302804);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ExecutorCode.GDButton3Objects2 */
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3);
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton3Objects2.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton3Objects2[i].setAnimation(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button4"), gdjs.ExecutorCode.GDButton4Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ExecutorCode.GDButton4Objects2.length;i<l;++i) {
    if ( !(gdjs.ExecutorCode.GDButton4Objects2[i].getBehavior("ButtonFSM").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.ExecutorCode.GDButton4Objects2[k] = gdjs.ExecutorCode.GDButton4Objects2[i];
        ++k;
    }
}
gdjs.ExecutorCode.GDButton4Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(52437708);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ExecutorCode.GDButton4Objects2 */
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 4);
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton4Objects2.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton4Objects2[i].setAnimation(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button5"), gdjs.ExecutorCode.GDButton5Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ExecutorCode.GDButton5Objects2.length;i<l;++i) {
    if ( !(gdjs.ExecutorCode.GDButton5Objects2[i].getBehavior("ButtonFSM").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.ExecutorCode.GDButton5Objects2[k] = gdjs.ExecutorCode.GDButton5Objects2[i];
        ++k;
    }
}
gdjs.ExecutorCode.GDButton5Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14065116);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ExecutorCode.GDButton5Objects2 */
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 5);
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton5Objects2.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton5Objects2[i].setAnimation(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button6"), gdjs.ExecutorCode.GDButton6Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ExecutorCode.GDButton6Objects2.length;i<l;++i) {
    if ( !(gdjs.ExecutorCode.GDButton6Objects2[i].getBehavior("ButtonFSM").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.ExecutorCode.GDButton6Objects2[k] = gdjs.ExecutorCode.GDButton6Objects2[i];
        ++k;
    }
}
gdjs.ExecutorCode.GDButton6Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(55637892);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ExecutorCode.GDButton6Objects2 */
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 6);
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton6Objects2.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton6Objects2[i].setAnimation(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button7"), gdjs.ExecutorCode.GDButton7Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ExecutorCode.GDButton7Objects2.length;i<l;++i) {
    if ( !(gdjs.ExecutorCode.GDButton7Objects2[i].getBehavior("ButtonFSM").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.ExecutorCode.GDButton7Objects2[k] = gdjs.ExecutorCode.GDButton7Objects2[i];
        ++k;
    }
}
gdjs.ExecutorCode.GDButton7Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(58324308);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ExecutorCode.GDButton7Objects2 */
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 7);
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton7Objects2.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton7Objects2[i].setAnimation(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button8"), gdjs.ExecutorCode.GDButton8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ExecutorCode.GDButton8Objects1.length;i<l;++i) {
    if ( !(gdjs.ExecutorCode.GDButton8Objects1[i].getBehavior("ButtonFSM").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.ExecutorCode.GDButton8Objects1[k] = gdjs.ExecutorCode.GDButton8Objects1[i];
        ++k;
    }
}
gdjs.ExecutorCode.GDButton8Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(58367908);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ExecutorCode.GDButton8Objects1 */
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 8);
}
{for(var i = 0, len = gdjs.ExecutorCode.GDButton8Objects1.length ;i < len;++i) {
    gdjs.ExecutorCode.GDButton8Objects1[i].setAnimation(0);
}
}
}

}


};gdjs.ExecutorCode.eventsList6 = function(runtimeScene) {

{


gdjs.ExecutorCode.eventsList2(runtimeScene);
}


{


gdjs.ExecutorCode.eventsList4(runtimeScene);
}


{


gdjs.ExecutorCode.eventsList5(runtimeScene);
}


};

gdjs.ExecutorCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ExecutorCode.GDExecutorObjects1.length = 0;
gdjs.ExecutorCode.GDExecutorObjects2.length = 0;
gdjs.ExecutorCode.GDExecutorObjects3.length = 0;
gdjs.ExecutorCode.GDExecutorObjects4.length = 0;
gdjs.ExecutorCode.GDButton1Objects1.length = 0;
gdjs.ExecutorCode.GDButton1Objects2.length = 0;
gdjs.ExecutorCode.GDButton1Objects3.length = 0;
gdjs.ExecutorCode.GDButton1Objects4.length = 0;
gdjs.ExecutorCode.GDButton2Objects1.length = 0;
gdjs.ExecutorCode.GDButton2Objects2.length = 0;
gdjs.ExecutorCode.GDButton2Objects3.length = 0;
gdjs.ExecutorCode.GDButton2Objects4.length = 0;
gdjs.ExecutorCode.GDButton3Objects1.length = 0;
gdjs.ExecutorCode.GDButton3Objects2.length = 0;
gdjs.ExecutorCode.GDButton3Objects3.length = 0;
gdjs.ExecutorCode.GDButton3Objects4.length = 0;
gdjs.ExecutorCode.GDButton4Objects1.length = 0;
gdjs.ExecutorCode.GDButton4Objects2.length = 0;
gdjs.ExecutorCode.GDButton4Objects3.length = 0;
gdjs.ExecutorCode.GDButton4Objects4.length = 0;
gdjs.ExecutorCode.GDButton5Objects1.length = 0;
gdjs.ExecutorCode.GDButton5Objects2.length = 0;
gdjs.ExecutorCode.GDButton5Objects3.length = 0;
gdjs.ExecutorCode.GDButton5Objects4.length = 0;
gdjs.ExecutorCode.GDButton6Objects1.length = 0;
gdjs.ExecutorCode.GDButton6Objects2.length = 0;
gdjs.ExecutorCode.GDButton6Objects3.length = 0;
gdjs.ExecutorCode.GDButton6Objects4.length = 0;
gdjs.ExecutorCode.GDButton7Objects1.length = 0;
gdjs.ExecutorCode.GDButton7Objects2.length = 0;
gdjs.ExecutorCode.GDButton7Objects3.length = 0;
gdjs.ExecutorCode.GDButton7Objects4.length = 0;
gdjs.ExecutorCode.GDButton8Objects1.length = 0;
gdjs.ExecutorCode.GDButton8Objects2.length = 0;
gdjs.ExecutorCode.GDButton8Objects3.length = 0;
gdjs.ExecutorCode.GDButton8Objects4.length = 0;
gdjs.ExecutorCode.GDNewTextObjects1.length = 0;
gdjs.ExecutorCode.GDNewTextObjects2.length = 0;
gdjs.ExecutorCode.GDNewTextObjects3.length = 0;
gdjs.ExecutorCode.GDNewTextObjects4.length = 0;
gdjs.ExecutorCode.GDRButtonObjects1.length = 0;
gdjs.ExecutorCode.GDRButtonObjects2.length = 0;
gdjs.ExecutorCode.GDRButtonObjects3.length = 0;
gdjs.ExecutorCode.GDRButtonObjects4.length = 0;
gdjs.ExecutorCode.GDLButtonObjects1.length = 0;
gdjs.ExecutorCode.GDLButtonObjects2.length = 0;
gdjs.ExecutorCode.GDLButtonObjects3.length = 0;
gdjs.ExecutorCode.GDLButtonObjects4.length = 0;
gdjs.ExecutorCode.GDSettingsObjects1.length = 0;
gdjs.ExecutorCode.GDSettingsObjects2.length = 0;
gdjs.ExecutorCode.GDSettingsObjects3.length = 0;
gdjs.ExecutorCode.GDSettingsObjects4.length = 0;
gdjs.ExecutorCode.GDResetObjects1.length = 0;
gdjs.ExecutorCode.GDResetObjects2.length = 0;
gdjs.ExecutorCode.GDResetObjects3.length = 0;
gdjs.ExecutorCode.GDResetObjects4.length = 0;

gdjs.ExecutorCode.eventsList6(runtimeScene);
gdjs.ExecutorCode.GDExecutorObjects1.length = 0;
gdjs.ExecutorCode.GDExecutorObjects2.length = 0;
gdjs.ExecutorCode.GDExecutorObjects3.length = 0;
gdjs.ExecutorCode.GDExecutorObjects4.length = 0;
gdjs.ExecutorCode.GDButton1Objects1.length = 0;
gdjs.ExecutorCode.GDButton1Objects2.length = 0;
gdjs.ExecutorCode.GDButton1Objects3.length = 0;
gdjs.ExecutorCode.GDButton1Objects4.length = 0;
gdjs.ExecutorCode.GDButton2Objects1.length = 0;
gdjs.ExecutorCode.GDButton2Objects2.length = 0;
gdjs.ExecutorCode.GDButton2Objects3.length = 0;
gdjs.ExecutorCode.GDButton2Objects4.length = 0;
gdjs.ExecutorCode.GDButton3Objects1.length = 0;
gdjs.ExecutorCode.GDButton3Objects2.length = 0;
gdjs.ExecutorCode.GDButton3Objects3.length = 0;
gdjs.ExecutorCode.GDButton3Objects4.length = 0;
gdjs.ExecutorCode.GDButton4Objects1.length = 0;
gdjs.ExecutorCode.GDButton4Objects2.length = 0;
gdjs.ExecutorCode.GDButton4Objects3.length = 0;
gdjs.ExecutorCode.GDButton4Objects4.length = 0;
gdjs.ExecutorCode.GDButton5Objects1.length = 0;
gdjs.ExecutorCode.GDButton5Objects2.length = 0;
gdjs.ExecutorCode.GDButton5Objects3.length = 0;
gdjs.ExecutorCode.GDButton5Objects4.length = 0;
gdjs.ExecutorCode.GDButton6Objects1.length = 0;
gdjs.ExecutorCode.GDButton6Objects2.length = 0;
gdjs.ExecutorCode.GDButton6Objects3.length = 0;
gdjs.ExecutorCode.GDButton6Objects4.length = 0;
gdjs.ExecutorCode.GDButton7Objects1.length = 0;
gdjs.ExecutorCode.GDButton7Objects2.length = 0;
gdjs.ExecutorCode.GDButton7Objects3.length = 0;
gdjs.ExecutorCode.GDButton7Objects4.length = 0;
gdjs.ExecutorCode.GDButton8Objects1.length = 0;
gdjs.ExecutorCode.GDButton8Objects2.length = 0;
gdjs.ExecutorCode.GDButton8Objects3.length = 0;
gdjs.ExecutorCode.GDButton8Objects4.length = 0;
gdjs.ExecutorCode.GDNewTextObjects1.length = 0;
gdjs.ExecutorCode.GDNewTextObjects2.length = 0;
gdjs.ExecutorCode.GDNewTextObjects3.length = 0;
gdjs.ExecutorCode.GDNewTextObjects4.length = 0;
gdjs.ExecutorCode.GDRButtonObjects1.length = 0;
gdjs.ExecutorCode.GDRButtonObjects2.length = 0;
gdjs.ExecutorCode.GDRButtonObjects3.length = 0;
gdjs.ExecutorCode.GDRButtonObjects4.length = 0;
gdjs.ExecutorCode.GDLButtonObjects1.length = 0;
gdjs.ExecutorCode.GDLButtonObjects2.length = 0;
gdjs.ExecutorCode.GDLButtonObjects3.length = 0;
gdjs.ExecutorCode.GDLButtonObjects4.length = 0;
gdjs.ExecutorCode.GDSettingsObjects1.length = 0;
gdjs.ExecutorCode.GDSettingsObjects2.length = 0;
gdjs.ExecutorCode.GDSettingsObjects3.length = 0;
gdjs.ExecutorCode.GDSettingsObjects4.length = 0;
gdjs.ExecutorCode.GDResetObjects1.length = 0;
gdjs.ExecutorCode.GDResetObjects2.length = 0;
gdjs.ExecutorCode.GDResetObjects3.length = 0;
gdjs.ExecutorCode.GDResetObjects4.length = 0;


return;

}

gdjs['ExecutorCode'] = gdjs.ExecutorCode;
