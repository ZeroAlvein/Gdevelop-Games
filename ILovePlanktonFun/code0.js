gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDNewBitmapTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewBitmapTextObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewBitmapText"), gdjs.Untitled_32sceneCode.GDNewBitmapTextObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDNewBitmapTextObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDNewBitmapTextObjects1[0] : null), true, "", 0);
}
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewBitmapTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewBitmapTextObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDNewBitmapTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewBitmapTextObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
