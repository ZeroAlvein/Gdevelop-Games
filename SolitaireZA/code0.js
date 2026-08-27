gdjs.TestCode = {};
gdjs.TestCode.localVariables = [];
gdjs.TestCode.idToCallbackMap = new Map();
gdjs.TestCode.GDButtonObjects1_1final = [];

gdjs.TestCode.GDButtonObjects2_1final = [];

gdjs.TestCode.forEachIndex2 = 0;

gdjs.TestCode.forEachIndex3 = 0;

gdjs.TestCode.forEachIndex4 = 0;

gdjs.TestCode.forEachIndex5 = 0;

gdjs.TestCode.forEachIndex7 = 0;

gdjs.TestCode.forEachLimit3 = 0;

gdjs.TestCode.forEachLimit4 = 0;

gdjs.TestCode.forEachLimit5 = 0;

gdjs.TestCode.forEachLimit7 = 0;

gdjs.TestCode.forEachObjects2 = [];

gdjs.TestCode.forEachObjects3 = [];

gdjs.TestCode.forEachObjects4 = [];

gdjs.TestCode.forEachObjects5 = [];

gdjs.TestCode.forEachObjects7 = [];

gdjs.TestCode.forEachSortKeys3 = [];

gdjs.TestCode.forEachSortKeys4 = [];

gdjs.TestCode.forEachSortKeys5 = [];

gdjs.TestCode.forEachSortKeys7 = [];

gdjs.TestCode.forEachSorted3 = [];

gdjs.TestCode.forEachSorted4 = [];

gdjs.TestCode.forEachSorted5 = [];

gdjs.TestCode.forEachSorted7 = [];

gdjs.TestCode.forEachTemporary2 = null;

gdjs.TestCode.forEachTemporary3 = null;

gdjs.TestCode.forEachTemporary4 = null;

gdjs.TestCode.forEachTemporary5 = null;

gdjs.TestCode.forEachTemporary7 = null;

gdjs.TestCode.forEachTotalCount2 = 0;

gdjs.TestCode.forEachTotalCount3 = 0;

gdjs.TestCode.forEachTotalCount4 = 0;

gdjs.TestCode.forEachTotalCount5 = 0;

gdjs.TestCode.forEachTotalCount7 = 0;

gdjs.TestCode.GDHandObjects1= [];
gdjs.TestCode.GDHandObjects2= [];
gdjs.TestCode.GDHandObjects3= [];
gdjs.TestCode.GDHandObjects4= [];
gdjs.TestCode.GDHandObjects5= [];
gdjs.TestCode.GDHandObjects6= [];
gdjs.TestCode.GDHandObjects7= [];
gdjs.TestCode.GDHandObjects8= [];
gdjs.TestCode.GDTextObjects1= [];
gdjs.TestCode.GDTextObjects2= [];
gdjs.TestCode.GDTextObjects3= [];
gdjs.TestCode.GDTextObjects4= [];
gdjs.TestCode.GDTextObjects5= [];
gdjs.TestCode.GDTextObjects6= [];
gdjs.TestCode.GDTextObjects7= [];
gdjs.TestCode.GDTextObjects8= [];
gdjs.TestCode.GDBackgroundObjects1= [];
gdjs.TestCode.GDBackgroundObjects2= [];
gdjs.TestCode.GDBackgroundObjects3= [];
gdjs.TestCode.GDBackgroundObjects4= [];
gdjs.TestCode.GDBackgroundObjects5= [];
gdjs.TestCode.GDBackgroundObjects6= [];
gdjs.TestCode.GDBackgroundObjects7= [];
gdjs.TestCode.GDBackgroundObjects8= [];
gdjs.TestCode.GDSlotObjects1= [];
gdjs.TestCode.GDSlotObjects2= [];
gdjs.TestCode.GDSlotObjects3= [];
gdjs.TestCode.GDSlotObjects4= [];
gdjs.TestCode.GDSlotObjects5= [];
gdjs.TestCode.GDSlotObjects6= [];
gdjs.TestCode.GDSlotObjects7= [];
gdjs.TestCode.GDSlotObjects8= [];
gdjs.TestCode.GDButtonObjects1= [];
gdjs.TestCode.GDButtonObjects2= [];
gdjs.TestCode.GDButtonObjects3= [];
gdjs.TestCode.GDButtonObjects4= [];
gdjs.TestCode.GDButtonObjects5= [];
gdjs.TestCode.GDButtonObjects6= [];
gdjs.TestCode.GDButtonObjects7= [];
gdjs.TestCode.GDButtonObjects8= [];
gdjs.TestCode.GDCardsObjects1= [];
gdjs.TestCode.GDCardsObjects2= [];
gdjs.TestCode.GDCardsObjects3= [];
gdjs.TestCode.GDCardsObjects4= [];
gdjs.TestCode.GDCardsObjects5= [];
gdjs.TestCode.GDCardsObjects6= [];
gdjs.TestCode.GDCardsObjects7= [];
gdjs.TestCode.GDCardsObjects8= [];
gdjs.TestCode.GDFakeCardObjects1= [];
gdjs.TestCode.GDFakeCardObjects2= [];
gdjs.TestCode.GDFakeCardObjects3= [];
gdjs.TestCode.GDFakeCardObjects4= [];
gdjs.TestCode.GDFakeCardObjects5= [];
gdjs.TestCode.GDFakeCardObjects6= [];
gdjs.TestCode.GDFakeCardObjects7= [];
gdjs.TestCode.GDFakeCardObjects8= [];


gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDBackgroundObjects3Objects = Hashtable.newFrom({"Background": gdjs.TestCode.GDBackgroundObjects3});
gdjs.TestCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.TestCode.GDBackgroundObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDBackgroundObjects3Objects, 1, 1, "");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.TestCode.GDBackgroundObjects2);
{for(var i = 0, len = gdjs.TestCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDBackgroundObjects2[i].getBehavior("Resizable").setSize(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.TestCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDBackgroundObjects2[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}
}

}


};gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDSlotObjects4Objects = Hashtable.newFrom({"Slot": gdjs.TestCode.GDSlotObjects4});
gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDButtonObjects3Objects = Hashtable.newFrom({"Button": gdjs.TestCode.GDButtonObjects3});
gdjs.TestCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("SlotDistH").setNumber(Math.round((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 7)));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.TestCode.GDSlotObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDSlotObjects4Objects, 1, 1, "");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardW").setNumber((( gdjs.TestCode.GDSlotObjects4.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects4[0].getWidth()));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardH").setNumber((( gdjs.TestCode.GDSlotObjects4.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects4[0].getHeight()));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardOffsetY").setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardH").getAsNumber() / 3);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("SlotDistV").setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardH").getAsNumber() * 2);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardOffsetYBackface").setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardOffsetY").getAsNumber() / 4);
}
{for(var i = 0, len = gdjs.TestCode.GDSlotObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDSlotObjects4[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.TestCode.GDButtonObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDButtonObjects3Objects, 1, 1, "");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("ButtonH").setNumber((( gdjs.TestCode.GDButtonObjects3.length === 0 ) ? 0 :gdjs.TestCode.GDButtonObjects3[0].getHeight()));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("ButtonW").setNumber((( gdjs.TestCode.GDButtonObjects3.length === 0 ) ? 0 :gdjs.TestCode.GDButtonObjects3[0].getWidth()));
}
{for(var i = 0, len = gdjs.TestCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDButtonObjects3[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.TestCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(9).setBoolean(false);
}
}

}


};gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDTextObjects2Objects = Hashtable.newFrom({"Text": gdjs.TestCode.GDTextObjects2});
gdjs.TestCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Tilde");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button3").getAsNumber() > 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(10).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 10);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Tilde"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button3").getAsNumber() < 2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() > 10);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Test", false);
}
}

}


};gdjs.TestCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.TestCode.GDTextObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDTextObjects2Objects, 1, 1, "");
}
{for(var i = 0, len = gdjs.TestCode.GDTextObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDTextObjects2[i].setZOrder(200);
}
}
{for(var i = 0, len = gdjs.TestCode.GDTextObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDTextObjects2[i].getBehavior("Scale").setScale(4);
}
}
{for(var i = 0, len = gdjs.TestCode.GDTextObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDTextObjects2[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 16);
}
}
{for(var i = 0, len = gdjs.TestCode.GDTextObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDTextObjects2[i].setY(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - 128);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.TestCode.GDTextObjects2);
{for(var i = 0, len = gdjs.TestCode.GDTextObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDTextObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}
}
}

}


{


gdjs.TestCode.eventsList3(runtimeScene);
}


};gdjs.TestCode.eventsList5 = function(runtimeScene) {

{


gdjs.TestCode.eventsList0(runtimeScene);
}


{


gdjs.TestCode.eventsList2(runtimeScene);
}


{


gdjs.TestCode.eventsList4(runtimeScene);
}


};gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDSlotObjects6Objects = Hashtable.newFrom({"Slot": gdjs.TestCode.GDSlotObjects6});
gdjs.TestCode.eventsList6 = function(runtimeScene) {

};gdjs.TestCode.eventsList7 = function(runtimeScene) {

{


const repeatCount6 = 7;
for (let repeatIndex6 = 0;repeatIndex6 < repeatCount6;++repeatIndex6) {
gdjs.TestCode.GDSlotObjects6.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDSlotObjects6Objects, gdjs.TestCode.localVariables[0].getFromIndex(3).getAsNumber() + (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("SlotDistH").getAsNumber() * gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber()), Math.round(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardH").getAsNumber() / 8 + ((runtimeScene.getScene().getVariables().getFromIndex(2).getChild("SlotDistV").getAsNumber() / 1.6) * gdjs.TestCode.localVariables[0].getFromIndex(1).getAsNumber())), "");
}
{for(var i = 0, len = gdjs.TestCode.GDSlotObjects6.length ;i < len;++i) {
    gdjs.TestCode.GDSlotObjects6[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.TestCode.GDSlotObjects6.length ;i < len;++i) {
    gdjs.TestCode.GDSlotObjects6[i].returnVariable(gdjs.TestCode.GDSlotObjects6[i].getVariables().getFromIndex(0)).setNumber(gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber() + (7 * gdjs.TestCode.localVariables[0].getFromIndex(1).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.TestCode.GDSlotObjects6.length ;i < len;++i) {
    gdjs.TestCode.GDSlotObjects6[i].returnVariable(gdjs.TestCode.GDSlotObjects6[i].getVariables().getFromIndex(1)).setNumber(-1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild(gdjs.TestCode.localVariables[0].getFromIndex(2).getAsNumber()).getChild("X").setNumber((( gdjs.TestCode.GDSlotObjects6.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects6[0].getPointX("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild(gdjs.TestCode.localVariables[0].getFromIndex(2).getAsNumber()).getChild("Y").setNumber((( gdjs.TestCode.GDSlotObjects6.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects6[0].getPointY("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild(gdjs.TestCode.localVariables[0].getFromIndex(2).getAsNumber()).getChild("Z").setNumber(1);
}
{gdjs.TestCode.localVariables[0].getFromIndex(0).add(1);
}
{gdjs.TestCode.localVariables[0].getFromIndex(2).add(1);
}
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.TestCode.localVariables[0].getFromIndex(0).setNumber(0);
}
{gdjs.TestCode.localVariables[0].getFromIndex(1).add(1);
}
}

}


};gdjs.TestCode.eventsList8 = function(runtimeScene) {

{


const repeatCount4 = 2;
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.TestCode.eventsList7(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects3[i].getVariableNumber(gdjs.TestCode.GDSlotObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects3[k] = gdjs.TestCode.GDSlotObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDSlotObjects3 */
{for(var i = 0, len = gdjs.TestCode.GDSlotObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDSlotObjects3[i].returnVariable(gdjs.TestCode.GDSlotObjects3[i].getVariables().getFromIndex(1)).setNumber(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects3[i].getVariableNumber(gdjs.TestCode.GDSlotObjects3[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects3[k] = gdjs.TestCode.GDSlotObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDSlotObjects3 */
{for(var i = 0, len = gdjs.TestCode.GDSlotObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDSlotObjects3[i].returnVariable(gdjs.TestCode.GDSlotObjects3[i].getVariables().getFromIndex(1)).setNumber(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects3[i].getVariableNumber(gdjs.TestCode.GDSlotObjects3[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects3[k] = gdjs.TestCode.GDSlotObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDSlotObjects3 */
{for(var i = 0, len = gdjs.TestCode.GDSlotObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDSlotObjects3[i].returnVariable(gdjs.TestCode.GDSlotObjects3[i].getVariables().getFromIndex(1)).setNumber(2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects2[i].getVariableNumber(gdjs.TestCode.GDSlotObjects2[i].getVariables().getFromIndex(0)) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects2[k] = gdjs.TestCode.GDSlotObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDSlotObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDSlotObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDSlotObjects2[i].returnVariable(gdjs.TestCode.GDSlotObjects2[i].getVariables().getFromIndex(1)).setNumber(3);
}
}
}

}


};gdjs.TestCode.eventsList9 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("AdvX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("AdvY", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Distance", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{gdjs.TestCode.localVariables[0].getFromIndex(3).setNumber(Math.round((runtimeScene.getScene().getVariables().getFromIndex(2).getChild("SlotDistH").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardW").getAsNumber()) / 2));
}

{ //Subevents
gdjs.TestCode.eventsList8(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


{

gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects2[i].getVariableNumber(gdjs.TestCode.GDSlotObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects2[k] = gdjs.TestCode.GDSlotObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDSlotObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDSlotObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDSlotObjects2[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects1[i].getVariableNumber(gdjs.TestCode.GDSlotObjects1[i].getVariables().getFromIndex(0)) >= 3 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects1[k] = gdjs.TestCode.GDSlotObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects1[i].getVariableNumber(gdjs.TestCode.GDSlotObjects1[i].getVariables().getFromIndex(0)) <= 6 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects1[k] = gdjs.TestCode.GDSlotObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDSlotObjects1 */
{for(var i = 0, len = gdjs.TestCode.GDSlotObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDSlotObjects1[i].setAnimationFrame(gdjs.TestCode.GDSlotObjects1[i].getVariables().getFromIndex(0).getAsNumber() - 2);
}
}
}

}


};gdjs.TestCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList11 = function(runtimeScene) {

};gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDCardsObjects5Objects = Hashtable.newFrom({"Cards": gdjs.TestCode.GDCardsObjects5});
gdjs.TestCode.eventsList12 = function(runtimeScene) {

};gdjs.TestCode.eventsList13 = function(runtimeScene) {

{


const repeatCount5 = 13;
for (let repeatIndex5 = 0;repeatIndex5 < repeatCount5;++repeatIndex5) {
gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects5);
gdjs.TestCode.GDCardsObjects5.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects5.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects5[i].getVariableNumber(gdjs.TestCode.GDSlotObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects5[k] = gdjs.TestCode.GDSlotObjects5[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects5.length = k;
if (isConditionTrue_0)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDCardsObjects5Objects, (( gdjs.TestCode.GDSlotObjects5.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects5[0].getPointX("")), (( gdjs.TestCode.GDSlotObjects5.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects5[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects5[i].getBehavior("Animation").setAnimationIndex(1 + gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber() + (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("SelectedSkin").getAsNumber() * 4));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects5[i].setAnimationFrame(12 - gdjs.TestCode.localVariables[0].getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects5[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects5[i].returnVariable(gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(0)).setNumber(gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects5[i].returnVariable(gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(1)).setNumber((gdjs.TestCode.GDCardsObjects5[i].getAnimationFrame()));
}
}
{gdjs.TestCode.localVariables[0].getFromIndex(1).add(1);
}
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.TestCode.localVariables[0].getFromIndex(1).setNumber(0);
}
{gdjs.TestCode.localVariables[0].getFromIndex(0).add(1);
}
}

}


};gdjs.TestCode.eventsList14 = function(runtimeScene) {

{


const repeatCount3 = 4;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.TestCode.eventsList13(runtimeScene);} //Subevents end.
}
}

}


};gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDCardsObjects3Objects = Hashtable.newFrom({"Cards": gdjs.TestCode.GDCardsObjects3});
gdjs.TestCode.eventsList15 = function(runtimeScene) {

};gdjs.TestCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


const repeatCount3 = 52;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getBehavior("Opacity").getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDCardsObjects3Objects);
}
if (isConditionTrue_0)
{
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].getBehavior("Opacity").setOpacity(254);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].setZOrder(10 + gdjs.TestCode.localVariables[0].getFromIndex(1).getAsNumber());
}
}
{gdjs.TestCode.localVariables[0].getFromIndex(1).add(1);
}
}
}

}


};gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDCardsObjects7Objects = Hashtable.newFrom({"Cards": gdjs.TestCode.GDCardsObjects7});
gdjs.TestCode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects7);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects7.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects7[i].getBehavior("Opacity").getOpacity() == 254 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects7[k] = gdjs.TestCode.GDCardsObjects7[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects7.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDCardsObjects7Objects);
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects7 */
gdjs.copyArray(gdjs.TestCode.GDSlotObjects6, gdjs.TestCode.GDSlotObjects7);

{for(var i = 0, len = gdjs.TestCode.GDCardsObjects7.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects7[i].setPosition((( gdjs.TestCode.GDSlotObjects7.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects7[0].getPointX("")),(( gdjs.TestCode.GDSlotObjects7.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects7[0].getPointY("")) + ((runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardOffsetYBackface").getAsNumber()) * gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects7.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects7[i].setZOrder((gdjs.TestCode.GDCardsObjects7[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects7.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects7[i].getBehavior("Opacity").setOpacity(253);
}
}
{gdjs.TestCode.localVariables[0].getFromIndex(0).add(1);
}
}

}


};gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDCardsObjects5Objects = Hashtable.newFrom({"Cards": gdjs.TestCode.GDCardsObjects5});
gdjs.TestCode.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects6);
gdjs.copyArray(gdjs.TestCode.GDSlotObjects5, gdjs.TestCode.GDSlotObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects6.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects6[i].getY() > (( gdjs.TestCode.GDSlotObjects6.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects6[0].getPointY("")) - 10 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects6[k] = gdjs.TestCode.GDCardsObjects6[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects6.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects6[i].getX() == (( gdjs.TestCode.GDSlotObjects6.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects6[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects6[k] = gdjs.TestCode.GDCardsObjects6[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects6.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects6 */
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects6.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects6[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects6.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects6[i].setAnimationFrame(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Backface").getAsNumber());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects5);
/* Reuse gdjs.TestCode.GDSlotObjects5 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects5[i].getX() == (( gdjs.TestCode.GDSlotObjects5.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects5[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects5[k] = gdjs.TestCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDCardsObjects5Objects, (( gdjs.TestCode.GDSlotObjects5.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects5[0].getPointX("")), gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0), false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects5 */
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects5[i].getBehavior("Animation").setAnimationIndex(1 + gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(0).getAsNumber() + (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("SelectedSkin").getAsNumber() * 4));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects5[i].setAnimationFrame(gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(1).getAsNumber());
}
}
}

}


};gdjs.TestCode.eventsList19 = function(runtimeScene) {

{


const repeatCount6 = 1 + gdjs.TestCode.localVariables[0].getFromIndex(1).getAsNumber();
for (let repeatIndex6 = 0;repeatIndex6 < repeatCount6;++repeatIndex6) {
gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects6);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects6.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects6[i].getVariableNumber(gdjs.TestCode.GDSlotObjects6[i].getVariables().getFromIndex(0)) == 7 + gdjs.TestCode.localVariables[0].getFromIndex(1).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects6[k] = gdjs.TestCode.GDSlotObjects6[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects6.length = k;
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.TestCode.eventsList17(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects5.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects5[i].getVariableNumber(gdjs.TestCode.GDSlotObjects5[i].getVariables().getFromIndex(0)) == 7 + gdjs.TestCode.localVariables[0].getFromIndex(1).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects5[k] = gdjs.TestCode.GDSlotObjects5[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects5.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList18(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.TestCode.localVariables[0].getFromIndex(0).setNumber(0);
}
{gdjs.TestCode.localVariables[0].getFromIndex(1).add(1);
}
}

}


};gdjs.TestCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.TestCode.localVariables[0].getFromIndex(0).setNumber(0);
}
{gdjs.TestCode.localVariables[0].getFromIndex(1).setNumber(0);
}
}

}


{


const repeatCount4 = 7;
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.TestCode.eventsList19(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects2[i].getVariableNumber(gdjs.TestCode.GDSlotObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects2[k] = gdjs.TestCode.GDSlotObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getY() == (( gdjs.TestCode.GDSlotObjects2.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects2[0].getPointY("")) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getX() == (( gdjs.TestCode.GDSlotObjects2.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects2[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects2[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects2[i].setAnimationFrame(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Backface").getAsNumber());
}
}
}

}


};gdjs.TestCode.eventsList21 = function(runtimeScene) {

};gdjs.TestCode.eventsList22 = function(runtimeScene) {

{

/* Reuse gdjs.TestCode.GDCardsObjects1 */

for (gdjs.TestCode.forEachIndex2 = 0;gdjs.TestCode.forEachIndex2 < gdjs.TestCode.GDCardsObjects1.length;++gdjs.TestCode.forEachIndex2) {
gdjs.TestCode.GDCardsObjects2.length = 0;


gdjs.TestCode.forEachTemporary2 = gdjs.TestCode.GDCardsObjects1[gdjs.TestCode.forEachIndex2];
gdjs.TestCode.GDCardsObjects2.push(gdjs.TestCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects2[i].returnVariable(gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(2)).setNumber((gdjs.TestCode.GDCardsObjects2[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects2[i].returnVariable(gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(3)).setNumber((gdjs.TestCode.GDCardsObjects2[i].getPointY("")));
}
}
}
}

}


};gdjs.TestCode.eventsList23 = function(runtimeScene) {

{


gdjs.TestCode.eventsList14(runtimeScene);
}


{


gdjs.TestCode.eventsList16(runtimeScene);
}


{


gdjs.TestCode.eventsList20(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects2);
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects1[i].getY() > runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects1[k] = gdjs.TestCode.GDCardsObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList22(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList24 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Suit", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Value", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestCode.eventsList23(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


};gdjs.TestCode.eventsList25 = function(runtimeScene) {

{


gdjs.TestCode.eventsList11(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("SelectedSkin").setNumber(2);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Backface").setNumber(0);
}

{ //Subevents
gdjs.TestCode.eventsList24(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDButtonObjects4Objects = Hashtable.newFrom({"Button": gdjs.TestCode.GDButtonObjects4});
gdjs.TestCode.eventsList26 = function(runtimeScene) {

};gdjs.TestCode.eventsList27 = function(runtimeScene) {

{


const repeatCount4 = 9;
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.TestCode.GDButtonObjects4.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDButtonObjects4Objects, 1, 1, "");
}
{for(var i = 0, len = gdjs.TestCode.GDButtonObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDButtonObjects4[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.TestCode.GDButtonObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDButtonObjects4[i].returnVariable(gdjs.TestCode.GDButtonObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}
{gdjs.TestCode.localVariables[0].getFromIndex(0).add(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getVariableNumber(gdjs.TestCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) <= 2 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.TestCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDButtonObjects3[i].setCenterPositionInScene(Math.round(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + ((gdjs.TestCode.GDButtonObjects3[i].getVariables().getFromIndex(0).getAsNumber() - 1) * (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("ButtonW").getAsNumber() * gdjs.TestCode.localVariables[0].getFromIndex(2).getAsNumber()))),gdjs.TestCode.localVariables[0].getFromIndex(1).getAsNumber() * 6);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getVariableNumber(gdjs.TestCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) > 2 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getVariableNumber(gdjs.TestCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) <= 5 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDButtonObjects3 */
{for(var i = 0, len = gdjs.TestCode.GDButtonObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDButtonObjects3[i].setCenterPositionInScene(Math.round(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + ((gdjs.TestCode.GDButtonObjects3[i].getVariables().getFromIndex(0).getAsNumber() - 4) * (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("ButtonW").getAsNumber() * gdjs.TestCode.localVariables[0].getFromIndex(2).getAsNumber()))),Math.round(gdjs.TestCode.localVariables[0].getFromIndex(1).getAsNumber() * 6 + (1 * (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("ButtonH").getAsNumber() * gdjs.TestCode.localVariables[0].getFromIndex(2).getAsNumber()))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestCode.GDButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects2[i].getVariableNumber(gdjs.TestCode.GDButtonObjects2[i].getVariables().getFromIndex(0)) > 5 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects2[k] = gdjs.TestCode.GDButtonObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDButtonObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDButtonObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDButtonObjects2[i].setCenterPositionInScene(Math.round(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + ((gdjs.TestCode.GDButtonObjects2[i].getVariables().getFromIndex(0).getAsNumber() - 7) * (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("ButtonW").getAsNumber() * gdjs.TestCode.localVariables[0].getFromIndex(2).getAsNumber()))),Math.round(gdjs.TestCode.localVariables[0].getFromIndex(1).getAsNumber() * 6 + (2 * (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("ButtonH").getAsNumber() * gdjs.TestCode.localVariables[0].getFromIndex(2).getAsNumber()))));
}
}
}

}


};gdjs.TestCode.eventsList28 = function(runtimeScene) {

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
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{gdjs.TestCode.localVariables[0].getFromIndex(1).setNumber(Math.round(gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 10));
}
{gdjs.TestCode.localVariables[0].getFromIndex(2).setNumber(1.1);
}

{ //Subevents
gdjs.TestCode.eventsList27(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


};gdjs.TestCode.eventsList29 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList28(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestCode.GDButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects2.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDButtonObjects2[i].getBehavior("ButtonFSM").IsPressed(null)) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects2[k] = gdjs.TestCode.GDButtonObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDButtonObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDButtonObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDButtonObjects2[i].setAnimationFrame(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestCode.GDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects1[k] = gdjs.TestCode.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDButtonObjects1 */
{for(var i = 0, len = gdjs.TestCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDButtonObjects1[i].setAnimationFrame(1);
}
}
}

}


};gdjs.TestCode.eventsList30 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber(), null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber(), "Left", "Any", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber(), "Right", "Any", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").setNumber(gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}

}


};gdjs.TestCode.eventsList31 = function(runtimeScene) {

{


const repeatCount3 = 4;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{
{gdjs.TestCode.localVariables[0].getFromIndex(0).add(1);
}

{ //Subevents: 
gdjs.TestCode.eventsList30(runtimeScene);} //Subevents end.
}
}

}


};gdjs.TestCode.eventsList32 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("ID", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestCode.eventsList31(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


};gdjs.TestCode.eventsList33 = function(runtimeScene) {

};gdjs.TestCode.eventsList34 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25250444);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Up").setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Up").sub(1);
}
}

}


};gdjs.TestCode.eventsList35 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25252604);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Down").setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Down").sub(1);
}
}

}


};gdjs.TestCode.eventsList36 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25255860);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Left").setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Left").sub(1);
}
}

}


};gdjs.TestCode.eventsList37 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25259316);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Right").setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Right").sub(1);
}
}

}


};gdjs.TestCode.eventsList38 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25263180);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button1").setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button1").sub(1);
}
}

}


};gdjs.TestCode.eventsList39 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25265900);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button3").setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button3").sub(1);
}
}

}


};gdjs.TestCode.eventsList40 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25268636);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button5").setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button5").sub(1);
}
}

}


};gdjs.TestCode.eventsList41 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25271372);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button7").setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button7").sub(1);
}
}

}


};gdjs.TestCode.eventsList42 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25274196);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button9").setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button9").sub(1);
}
}

}


};gdjs.TestCode.eventsList43 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Up").getAsNumber() == 0);
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
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Up", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Left", "Up", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Right", "Up", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getVariableNumber(gdjs.TestCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDButtonObjects3[i].getAnimationFrame() == 1) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
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
gdjs.TestCode.eventsList34(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Down").getAsNumber() == 0);
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
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Down", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Left", "Down", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Right", "Down", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getVariableNumber(gdjs.TestCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDButtonObjects3[i].getAnimationFrame() == 1) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
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
gdjs.TestCode.eventsList35(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Left").getAsNumber() == 0);
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
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Left", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Left", "Left", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Right", "Left", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getVariableNumber(gdjs.TestCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDButtonObjects3[i].getAnimationFrame() == 1) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
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
gdjs.TestCode.eventsList36(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Right").getAsNumber() == 0);
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
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Right", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Left", "Right", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Right", "Right", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getVariableNumber(gdjs.TestCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDButtonObjects3[i].getAnimationFrame() == 1) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
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
gdjs.TestCode.eventsList37(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button1").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "z"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad1"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Square", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getVariableNumber(gdjs.TestCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDButtonObjects3[i].getAnimationFrame() == 1) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList38(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button3").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "c"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad3"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Options", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getVariableNumber(gdjs.TestCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDButtonObjects3[i].getAnimationFrame() == 1) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList39(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button5").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad5"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Cross", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getVariableNumber(gdjs.TestCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDButtonObjects3[i].getAnimationFrame() == 1) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList40(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestCode.GDButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button7").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "q"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad7"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Triangle", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getVariableNumber(gdjs.TestCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDButtonObjects3[i].getAnimationFrame() == 1) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList41(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestCode.GDButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button9").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "e"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad9"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Circle", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects2[i].getVariableNumber(gdjs.TestCode.GDButtonObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects2[k] = gdjs.TestCode.GDButtonObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects2.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDButtonObjects2[i].getAnimationFrame() == 1) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDButtonObjects2[k] = gdjs.TestCode.GDButtonObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects2.length = k;
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList42(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList44 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25279924);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Up").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Up").getAsNumber() < 3);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Up").add(1);
}
}

}


};gdjs.TestCode.eventsList45 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25284244);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Down").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Down").getAsNumber() < 3);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Down").add(1);
}
}

}


};gdjs.TestCode.eventsList46 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25288540);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Left").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Left").getAsNumber() < 3);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Left").add(1);
}
}

}


};gdjs.TestCode.eventsList47 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25292548);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Right").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Right").getAsNumber() < 3);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Right").add(1);
}
}

}


};gdjs.TestCode.eventsList48 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24772844);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button1").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button1").getAsNumber() < 3);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button1").add(1);
}
}

}


};gdjs.TestCode.eventsList49 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25302420);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button3").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button3").getAsNumber() < 3);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button3").add(1);
}
}

}


};gdjs.TestCode.eventsList50 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25305660);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button5").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button5").getAsNumber() < 3);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button5").add(1);
}
}

}


};gdjs.TestCode.eventsList51 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25309380);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button7").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button7").getAsNumber() < 3);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button7").add(1);
}
}

}


};gdjs.TestCode.eventsList52 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25312572);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button9").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button9").getAsNumber() < 3);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button9").add(1);
}
}

}


};gdjs.TestCode.eventsList53 = function(runtimeScene) {

{

gdjs.TestCode.GDButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.TestCode.GDButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestCode.GDButtonObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getVariableNumber(gdjs.TestCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_2 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getAnimationFrame() == 1 ) {
        isConditionTrue_2 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.TestCode.GDButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.TestCode.GDButtonObjects2_1final.indexOf(gdjs.TestCode.GDButtonObjects3[j]) === -1 )
            gdjs.TestCode.GDButtonObjects2_1final.push(gdjs.TestCode.GDButtonObjects3[j]);
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
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Up", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Left", "Up", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Right", "Up", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.TestCode.GDButtonObjects2_1final, gdjs.TestCode.GDButtonObjects2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList44(runtimeScene);} //End of subevents
}

}


{

gdjs.TestCode.GDButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.TestCode.GDButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestCode.GDButtonObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getVariableNumber(gdjs.TestCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 7 ) {
        isConditionTrue_2 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getAnimationFrame() == 1 ) {
        isConditionTrue_2 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.TestCode.GDButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.TestCode.GDButtonObjects2_1final.indexOf(gdjs.TestCode.GDButtonObjects3[j]) === -1 )
            gdjs.TestCode.GDButtonObjects2_1final.push(gdjs.TestCode.GDButtonObjects3[j]);
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
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Down", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Left", "Down", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Right", "Down", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.TestCode.GDButtonObjects2_1final, gdjs.TestCode.GDButtonObjects2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList45(runtimeScene);} //End of subevents
}

}


{

gdjs.TestCode.GDButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.TestCode.GDButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestCode.GDButtonObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getVariableNumber(gdjs.TestCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_2 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getAnimationFrame() == 1 ) {
        isConditionTrue_2 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.TestCode.GDButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.TestCode.GDButtonObjects2_1final.indexOf(gdjs.TestCode.GDButtonObjects3[j]) === -1 )
            gdjs.TestCode.GDButtonObjects2_1final.push(gdjs.TestCode.GDButtonObjects3[j]);
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
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Left", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Left", "Left", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Right", "Left", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.TestCode.GDButtonObjects2_1final, gdjs.TestCode.GDButtonObjects2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList46(runtimeScene);} //End of subevents
}

}


{

gdjs.TestCode.GDButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.TestCode.GDButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestCode.GDButtonObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getVariableNumber(gdjs.TestCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_2 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getAnimationFrame() == 1 ) {
        isConditionTrue_2 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.TestCode.GDButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.TestCode.GDButtonObjects2_1final.indexOf(gdjs.TestCode.GDButtonObjects3[j]) === -1 )
            gdjs.TestCode.GDButtonObjects2_1final.push(gdjs.TestCode.GDButtonObjects3[j]);
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
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Right", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Left", "Right", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Right", "Right", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.TestCode.GDButtonObjects2_1final, gdjs.TestCode.GDButtonObjects2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList47(runtimeScene);} //End of subevents
}

}


{

gdjs.TestCode.GDButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.TestCode.GDButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestCode.GDButtonObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getVariableNumber(gdjs.TestCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 6 ) {
        isConditionTrue_2 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getAnimationFrame() == 1 ) {
        isConditionTrue_2 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.TestCode.GDButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.TestCode.GDButtonObjects2_1final.indexOf(gdjs.TestCode.GDButtonObjects3[j]) === -1 )
            gdjs.TestCode.GDButtonObjects2_1final.push(gdjs.TestCode.GDButtonObjects3[j]);
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
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Square", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.TestCode.GDButtonObjects2_1final, gdjs.TestCode.GDButtonObjects2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList48(runtimeScene);} //End of subevents
}

}


{

gdjs.TestCode.GDButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.TestCode.GDButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestCode.GDButtonObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getVariableNumber(gdjs.TestCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 8 ) {
        isConditionTrue_2 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getAnimationFrame() == 1 ) {
        isConditionTrue_2 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.TestCode.GDButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.TestCode.GDButtonObjects2_1final.indexOf(gdjs.TestCode.GDButtonObjects3[j]) === -1 )
            gdjs.TestCode.GDButtonObjects2_1final.push(gdjs.TestCode.GDButtonObjects3[j]);
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
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Options", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.TestCode.GDButtonObjects2_1final, gdjs.TestCode.GDButtonObjects2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList49(runtimeScene);} //End of subevents
}

}


{

gdjs.TestCode.GDButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.TestCode.GDButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestCode.GDButtonObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getVariableNumber(gdjs.TestCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_2 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getAnimationFrame() == 1 ) {
        isConditionTrue_2 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.TestCode.GDButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.TestCode.GDButtonObjects2_1final.indexOf(gdjs.TestCode.GDButtonObjects3[j]) === -1 )
            gdjs.TestCode.GDButtonObjects2_1final.push(gdjs.TestCode.GDButtonObjects3[j]);
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
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Cross", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.TestCode.GDButtonObjects2_1final, gdjs.TestCode.GDButtonObjects2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList50(runtimeScene);} //End of subevents
}

}


{

gdjs.TestCode.GDButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.TestCode.GDButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestCode.GDButtonObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getVariableNumber(gdjs.TestCode.GDButtonObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_2 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects3[i].getAnimationFrame() == 1 ) {
        isConditionTrue_2 = true;
        gdjs.TestCode.GDButtonObjects3[k] = gdjs.TestCode.GDButtonObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.TestCode.GDButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.TestCode.GDButtonObjects2_1final.indexOf(gdjs.TestCode.GDButtonObjects3[j]) === -1 )
            gdjs.TestCode.GDButtonObjects2_1final.push(gdjs.TestCode.GDButtonObjects3[j]);
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
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Triangle", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.TestCode.GDButtonObjects2_1final, gdjs.TestCode.GDButtonObjects2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList51(runtimeScene);} //End of subevents
}

}


{

gdjs.TestCode.GDButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.TestCode.GDButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TestCode.GDButtonObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects2[i].getVariableNumber(gdjs.TestCode.GDButtonObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_2 = true;
        gdjs.TestCode.GDButtonObjects2[k] = gdjs.TestCode.GDButtonObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDButtonObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDButtonObjects2[i].getAnimationFrame() == 1 ) {
        isConditionTrue_2 = true;
        gdjs.TestCode.GDButtonObjects2[k] = gdjs.TestCode.GDButtonObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDButtonObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.TestCode.GDButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.TestCode.GDButtonObjects1_1final.indexOf(gdjs.TestCode.GDButtonObjects2[j]) === -1 )
            gdjs.TestCode.GDButtonObjects1_1final.push(gdjs.TestCode.GDButtonObjects2[j]);
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
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("PadID").getAsNumber(), "Circle", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.TestCode.GDButtonObjects1_1final, gdjs.TestCode.GDButtonObjects1);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList52(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList54 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25240780);
}
if (isConditionTrue_0) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}
}

}


{


gdjs.TestCode.eventsList32(runtimeScene);
}


{


gdjs.TestCode.eventsList33(runtimeScene);
}


{


gdjs.TestCode.eventsList43(runtimeScene);
}


{


gdjs.TestCode.eventsList53(runtimeScene);
}


};gdjs.TestCode.eventsList55 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
{
const variable1 = new gdjs.Variable();
variable1.setString("Empty");
variable._pushVariable(variable1);
}
{
const variable1 = new gdjs.Variable();
variable1.setString("One");
variable._pushVariable(variable1);
}
{
const variable1 = new gdjs.Variable();
variable1.setString("Many");
variable._pushVariable(variable1);
}
variables._declare("StateName", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(5).setString(gdjs.TestCode.localVariables[0].getFromIndex(0).getChild(gdjs.evtTools.common.clamp(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber(), 0, 2)).getAsString());
}
}
gdjs.TestCode.localVariables.pop();

}


};gdjs.TestCode.eventsList56 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}

{ //Subevents
gdjs.TestCode.eventsList55(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList57 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects6);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects6.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects6[i].getVariableNumber(gdjs.TestCode.GDSlotObjects6[i].getVariables().getFromIndex(0)) == 7 + gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects6[k] = gdjs.TestCode.GDSlotObjects6[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects6.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDSlotObjects6 */
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("X"), (( gdjs.TestCode.GDSlotObjects6.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects6[0].getPointX("")));
}
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("One").getChild("X"), (( gdjs.TestCode.GDSlotObjects6.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects6[0].getPointX("")));
}
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Many").getChild("X"), (( gdjs.TestCode.GDSlotObjects6.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects6[0].getPointX("")));
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.TestCode.localVariables[0].getFromIndex(0).add(1);
}
}

}


};gdjs.TestCode.eventsList58 = function(runtimeScene) {

{


const repeatCount5 = 7;
for (let repeatIndex5 = 0;repeatIndex5 < repeatCount5;++repeatIndex5) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.TestCode.eventsList57(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects4[i].getVariableNumber(gdjs.TestCode.GDSlotObjects4[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects4[k] = gdjs.TestCode.GDSlotObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDSlotObjects4 */
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("Y").getChild(0), (( gdjs.TestCode.GDSlotObjects4.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects4[0].getPointY("")));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects4[i].getVariableNumber(gdjs.TestCode.GDSlotObjects4[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects4[k] = gdjs.TestCode.GDSlotObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDSlotObjects4 */
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("Y").getChild(1), (( gdjs.TestCode.GDSlotObjects4.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects4[0].getPointY("")));
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("Y").getChild(2), 0);
}
}

}


};gdjs.TestCode.eventsList59 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects5);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects5[i].isCollidingWithPoint(runtimeScene.getScene().getVariables().getFromIndex(1).getChild(3 + gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber()).getChild("X").getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getChild(3 + gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber()).getChild("Y").getAsNumber()) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects5[k] = gdjs.TestCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects5 */
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("Y").getChild(3 + gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber()), (( gdjs.TestCode.GDCardsObjects5.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects5[0].getPointY("")));
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("Y").getChild(3 + gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber()), 0);
}
elseEventsChainSatisfied = true;
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.TestCode.localVariables[0].getFromIndex(0).add(1);
}
}

}

}

};gdjs.TestCode.eventsList60 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.TestCode.localVariables[0].getFromIndex(0).setNumber(0);
}
}

}


{


const repeatCount4 = 4;
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.TestCode.eventsList59(runtimeScene);} //Subevents end.
}
}

}


};gdjs.TestCode.eventsList61 = function(runtimeScene) {

};gdjs.TestCode.eventsList62 = function(runtimeScene) {

{

/* Reuse gdjs.TestCode.GDCardsObjects4 */

gdjs.TestCode.forEachObjects5.length = 0;
gdjs.TestCode.forEachObjects5.push.apply(gdjs.TestCode.forEachObjects5,gdjs.TestCode.GDCardsObjects4);
gdjs.TestCode.forEachTotalCount5 = gdjs.TestCode.forEachObjects5.length;
gdjs.TestCode.forEachSortKeys5.length = 0;
for (gdjs.TestCode.forEachIndex5 = 0;gdjs.TestCode.forEachIndex5 < gdjs.TestCode.forEachTotalCount5;++gdjs.TestCode.forEachIndex5) {
gdjs.TestCode.GDCardsObjects5.length = 0;


gdjs.TestCode.GDCardsObjects5.push(gdjs.TestCode.forEachObjects5[gdjs.TestCode.forEachIndex5]);
gdjs.TestCode.forEachSortKeys5.push((( gdjs.TestCode.GDCardsObjects5.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects5[0].getPointY("")));
}
gdjs.TestCode.forEachSorted5.length = 0;
for (gdjs.TestCode.forEachIndex5 = 0;gdjs.TestCode.forEachIndex5 < gdjs.TestCode.forEachTotalCount5;++gdjs.TestCode.forEachIndex5) gdjs.TestCode.forEachSorted5.push(gdjs.TestCode.forEachIndex5);
gdjs.TestCode.forEachSorted5.sort(function(a, b) { return false ? gdjs.TestCode.forEachSortKeys5[b] - gdjs.TestCode.forEachSortKeys5[a] : gdjs.TestCode.forEachSortKeys5[a] - gdjs.TestCode.forEachSortKeys5[b]; });
for (gdjs.TestCode.forEachIndex5 = 0;gdjs.TestCode.forEachIndex5 < gdjs.TestCode.forEachSorted5.length;++gdjs.TestCode.forEachIndex5) {
gdjs.TestCode.GDCardsObjects5.length = 0;


gdjs.TestCode.forEachTemporary5 = gdjs.TestCode.forEachObjects5[gdjs.TestCode.forEachSorted5[gdjs.TestCode.forEachIndex5]];
gdjs.TestCode.GDCardsObjects5.push(gdjs.TestCode.forEachTemporary5);
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("Y").getChild(gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber()), (( gdjs.TestCode.GDCardsObjects5.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects5[0].getPointY("")));
}
}
}

}


};gdjs.TestCode.eventsList63 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects4);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects4.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDCardsObjects4[i].getBehavior("Animation").getAnimationName() == "Backface") ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects4[k] = gdjs.TestCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects4[i].getX() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("X").getChild(gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects4[k] = gdjs.TestCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects4[i].getY() > runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects4[k] = gdjs.TestCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects4.length = k;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList62(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects4);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects4[i].getVariableNumber(gdjs.TestCode.GDSlotObjects4[i].getVariables().getFromIndex(0)) == 7 + gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects4[k] = gdjs.TestCode.GDSlotObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects4.length = k;
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDSlotObjects4 */
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("Y").getChild(gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber()), (( gdjs.TestCode.GDSlotObjects4.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects4[0].getPointY("")));
}
elseEventsChainSatisfied = true;
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.TestCode.localVariables[0].getFromIndex(0).add(1);
}
}

}

}

};gdjs.TestCode.eventsList64 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.TestCode.localVariables[0].getFromIndex(0).setNumber(0);
}
}

}


{


const repeatCount3 = 7;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.TestCode.eventsList63(runtimeScene);} //Subevents end.
}
}

}


};gdjs.TestCode.eventsList65 = function(runtimeScene) {

{


gdjs.TestCode.eventsList58(runtimeScene);
}


{


gdjs.TestCode.eventsList60(runtimeScene);
}


{


gdjs.TestCode.eventsList64(runtimeScene);
}


};gdjs.TestCode.eventsList66 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestCode.eventsList65(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(false);
}
}

}


};gdjs.TestCode.eventsList67 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Empty");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("Y"));
}

{ //Subevents
gdjs.TestCode.eventsList66(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList68 = function(runtimeScene) {

};gdjs.TestCode.eventsList69 = function(runtimeScene) {

{


let stopDoWhile_0 = false;
do {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber() - 1, 7)).getChild(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").setNumber(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber() - 1, 7));
}

{ //Subevents: 
gdjs.TestCode.eventsList68(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber() - 1, 7)).getChild(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").setNumber(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber() - 1, 7));
}
}

}


};gdjs.TestCode.eventsList70 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber());
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList69(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList71 = function(runtimeScene) {

};gdjs.TestCode.eventsList72 = function(runtimeScene) {

{


let stopDoWhile_0 = false;
do {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber() - 1, 7)).getChild(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber() - 1, 7))) - 1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").setNumber(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber() - 1, 7));
}

{ //Subevents: 
gdjs.TestCode.eventsList71(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber() - 1, 7)).getChild(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber() - 1, 7))) - 1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").setNumber(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber() - 1, 7));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("PreviousX").getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").setNumber(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber())) - 1);
}
}

}


};gdjs.TestCode.eventsList73 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber());
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList72(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList74 = function(runtimeScene) {

{


gdjs.TestCode.eventsList70(runtimeScene);
}


{


gdjs.TestCode.eventsList73(runtimeScene);
}


};gdjs.TestCode.eventsList75 = function(runtimeScene) {

};gdjs.TestCode.eventsList76 = function(runtimeScene) {

{


let stopDoWhile_0 = false;
do {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber() + 1, 7)).getChild(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").setNumber(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber() + 1, 7));
}

{ //Subevents: 
gdjs.TestCode.eventsList75(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber() + 1, 7)).getChild(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").setNumber(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber() + 1, 7));
}
}

}


};gdjs.TestCode.eventsList77 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber());
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList76(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList78 = function(runtimeScene) {

};gdjs.TestCode.eventsList79 = function(runtimeScene) {

{


let stopDoWhile_0 = false;
do {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber() + 1, 7)).getChild(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber() + 1, 7))) - 1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").setNumber(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber() + 1, 7));
}

{ //Subevents: 
gdjs.TestCode.eventsList78(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber() + 1, 7)).getChild(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber() + 1, 7))) - 1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").setNumber(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber() + 1, 7));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("PreviousX").getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").setNumber(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber())) - 1);
}
}

}


};gdjs.TestCode.eventsList80 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber());
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList79(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList81 = function(runtimeScene) {

{


gdjs.TestCode.eventsList77(runtimeScene);
}


{


gdjs.TestCode.eventsList80(runtimeScene);
}


};gdjs.TestCode.eventsList82 = function(runtimeScene) {

};gdjs.TestCode.eventsList83 = function(runtimeScene) {

{


let stopDoWhile_0 = false;
do {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber() - 1, gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber())))).getAsNumber() == 0);
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").setNumber(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber() - 1, gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()))));
}

{ //Subevents: 
gdjs.TestCode.eventsList82(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber() - 1, gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber())))).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").setNumber(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber() - 1, gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()))));
}
}

}


};gdjs.TestCode.eventsList84 = function(runtimeScene) {

};gdjs.TestCode.eventsList85 = function(runtimeScene) {

{


let stopDoWhile_0 = false;
do {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber() + 1, gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber())))).getAsNumber() == 0);
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").setNumber(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber() + 1, gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()))));
}

{ //Subevents: 
gdjs.TestCode.eventsList84(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber() + 1, gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber())))).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").setNumber(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber() + 1, gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()))));
}
}

}


};gdjs.TestCode.eventsList86 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Left").getAsNumber() == 2);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList74(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Right").getAsNumber() == 2);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList81(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Up").getAsNumber() == 2);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList83(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Down").getAsNumber() == 2);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList85(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList87 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects4);
gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects4[i].getAnimationFrame() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects4[k] = gdjs.TestCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects4[i].getZOrder() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(1).getChild("Z").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects4[k] = gdjs.TestCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects4[i].getX() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects4[k] = gdjs.TestCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects4[i].getY() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects4[k] = gdjs.TestCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects4[i].getVariableNumber(gdjs.TestCode.GDSlotObjects4[i].getVariables().getFromIndex(1)) == ((gdjs.TestCode.GDCardsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TestCode.GDCardsObjects4[0].getVariables()).getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects4[k] = gdjs.TestCode.GDSlotObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects4[i].getVariableNumber(gdjs.TestCode.GDSlotObjects4[i].getVariables().getFromIndex(2)) == ((gdjs.TestCode.GDCardsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TestCode.GDCardsObjects4[0].getVariables()).getFromIndex(1).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects4[k] = gdjs.TestCode.GDSlotObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects4.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects4 */
/* Reuse gdjs.TestCode.GDSlotObjects4 */
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].setPosition((( gdjs.TestCode.GDSlotObjects4.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects4[0].getPointX("")),(( gdjs.TestCode.GDSlotObjects4.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects4[0].getPointY("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(2)).setNumber((gdjs.TestCode.GDCardsObjects4[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(3)).setNumber((gdjs.TestCode.GDCardsObjects4[i].getPointY("")));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
}

}


};gdjs.TestCode.eventsList88 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("X").getAsNumber());
}
if (isConditionTrue_0) {
{gdjs.TestCode.localVariables[0].getFromIndex(0).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = gdjs.TestCode.localVariables[0].getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList87(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList89 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button5").getAsNumber() >= 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects5[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(4), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects5[k] = gdjs.TestCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects5.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects5 */
gdjs.copyArray(runtimeScene.getObjects("FakeCard"), gdjs.TestCode.GDFakeCardObjects5);
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects5[i].setPosition(gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(7).getAsNumber(),gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(8).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects5[i].returnVariable(gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(4)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects5[i].returnVariable(gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(2)).setNumber((gdjs.TestCode.GDCardsObjects5[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects5[i].returnVariable(gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(3)).setNumber((gdjs.TestCode.GDCardsObjects5[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects5[i].returnVariable(gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(5)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects5[i].setZOrder(gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(10).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").setNumber(0);
}
{for(var i = 0, len = gdjs.TestCode.GDFakeCardObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDFakeCardObjects5[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setBoolean(false);
variables._declare("NotSlot0", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestCode.eventsList88(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


};gdjs.TestCode.eventsList90 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button5").getAsNumber() == 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button9").getAsNumber() == 2);
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
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(9).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber());
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList89(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList91 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button5").getAsNumber() >= 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects4[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(4), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects4[k] = gdjs.TestCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects4 */
gdjs.copyArray(runtimeScene.getObjects("FakeCard"), gdjs.TestCode.GDFakeCardObjects4);
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].setPosition(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(7).getAsNumber(),gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(8).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(4)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(2)).setNumber((gdjs.TestCode.GDCardsObjects4[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(3)).setNumber((gdjs.TestCode.GDCardsObjects4[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(5)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].setZOrder(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(10).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").setNumber(0);
}
{for(var i = 0, len = gdjs.TestCode.GDFakeCardObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDFakeCardObjects4[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects3);
gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber() == gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber())) - 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getAnimationFrame() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getX() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getY() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects3[i].getVariableNumber(gdjs.TestCode.GDSlotObjects3[i].getVariables().getFromIndex(1)) == ((gdjs.TestCode.GDCardsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TestCode.GDCardsObjects3[0].getVariables()).getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects3[k] = gdjs.TestCode.GDSlotObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects3[i].getVariableNumber(gdjs.TestCode.GDSlotObjects3[i].getVariables().getFromIndex(2)) == ((gdjs.TestCode.GDCardsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TestCode.GDCardsObjects3[0].getVariables()).getFromIndex(1).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects3[k] = gdjs.TestCode.GDSlotObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects3.length = k;
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects3 */
/* Reuse gdjs.TestCode.GDSlotObjects3 */
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].setPosition((( gdjs.TestCode.GDSlotObjects3.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects3[0].getPointX("")),(( gdjs.TestCode.GDSlotObjects3.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects3[0].getPointY("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(2)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(3)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getPointY("")));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
}

}


};gdjs.TestCode.eventsList92 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button5").getAsNumber() == 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button9").getAsNumber() == 2);
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
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(9).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber());
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList91(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList93 = function(runtimeScene) {

{


gdjs.TestCode.eventsList90(runtimeScene);
}


{


gdjs.TestCode.eventsList92(runtimeScene);
}


};gdjs.TestCode.eventsList94 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FakeCard"), gdjs.TestCode.GDFakeCardObjects3);
{for(var i = 0, len = gdjs.TestCode.GDFakeCardObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDFakeCardObjects3[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").setNumber(0);
}
}

}


};gdjs.TestCode.eventsList95 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects3);
gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button9").getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(9).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(4), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getAnimationFrame() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects3[i].getVariableNumber(gdjs.TestCode.GDSlotObjects3[i].getVariables().getFromIndex(1)) == ((gdjs.TestCode.GDCardsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TestCode.GDCardsObjects3[0].getVariables()).getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects3[k] = gdjs.TestCode.GDSlotObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects3[i].getVariableNumber(gdjs.TestCode.GDSlotObjects3[i].getVariables().getFromIndex(2)) == ((gdjs.TestCode.GDCardsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TestCode.GDCardsObjects3[0].getVariables()).getFromIndex(1).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects3[k] = gdjs.TestCode.GDSlotObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects3.length = k;
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects3 */
/* Reuse gdjs.TestCode.GDSlotObjects3 */
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].setPosition((( gdjs.TestCode.GDSlotObjects3.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects3[0].getPointX("")),(( gdjs.TestCode.GDSlotObjects3.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects3[0].getPointY("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(4)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(2)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(3)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(5)).setNumber(0);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}

{ //Subevents
gdjs.TestCode.eventsList94(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList96 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("X").getAsNumber());
}
if (isConditionTrue_0) {
{gdjs.TestCode.localVariables[0].getFromIndex(0).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = gdjs.TestCode.localVariables[0].getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
}

}


};gdjs.TestCode.eventsList97 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects4[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(4), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects4[k] = gdjs.TestCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects4 */
gdjs.copyArray(runtimeScene.getObjects("FakeCard"), gdjs.TestCode.GDFakeCardObjects4);
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].setPosition(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(7).getAsNumber(),gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(8).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(4)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(2)).setNumber((gdjs.TestCode.GDCardsObjects4[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(3)).setNumber((gdjs.TestCode.GDCardsObjects4[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(5)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].setZOrder(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(10).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").setNumber(0);
}
{for(var i = 0, len = gdjs.TestCode.GDFakeCardObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDFakeCardObjects4[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setBoolean(false);
variables._declare("NotSlot0", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestCode.eventsList96(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects3);
gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getAnimationFrame() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getZOrder() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(1).getChild("Z").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("X").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getX() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getY() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects3[i].getVariableNumber(gdjs.TestCode.GDSlotObjects3[i].getVariables().getFromIndex(1)) == ((gdjs.TestCode.GDCardsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TestCode.GDCardsObjects3[0].getVariables()).getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects3[k] = gdjs.TestCode.GDSlotObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects3[i].getVariableNumber(gdjs.TestCode.GDSlotObjects3[i].getVariables().getFromIndex(2)) == ((gdjs.TestCode.GDCardsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TestCode.GDCardsObjects3[0].getVariables()).getFromIndex(1).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects3[k] = gdjs.TestCode.GDSlotObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects3.length = k;
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects3 */
/* Reuse gdjs.TestCode.GDSlotObjects3 */
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].setPosition((( gdjs.TestCode.GDSlotObjects3.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects3[0].getPointX("")),(( gdjs.TestCode.GDSlotObjects3.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects3[0].getPointY("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(2)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(3)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getPointY("")));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setBoolean(true);
}
}

}


};gdjs.TestCode.eventsList98 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button9").getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(9).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList97(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList99 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(4), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects3 */
gdjs.copyArray(runtimeScene.getObjects("FakeCard"), gdjs.TestCode.GDFakeCardObjects3);
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].setPosition(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(7).getAsNumber(),gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(8).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(4)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(2)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(3)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(5)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].setZOrder(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(10).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").setNumber(0);
}
{for(var i = 0, len = gdjs.TestCode.GDFakeCardObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDFakeCardObjects3[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber() == gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber())) - 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getAnimationFrame() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getX() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getY() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects2[i].getVariableNumber(gdjs.TestCode.GDSlotObjects2[i].getVariables().getFromIndex(1)) == ((gdjs.TestCode.GDCardsObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TestCode.GDCardsObjects2[0].getVariables()).getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects2[k] = gdjs.TestCode.GDSlotObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects2[i].getVariableNumber(gdjs.TestCode.GDSlotObjects2[i].getVariables().getFromIndex(2)) == ((gdjs.TestCode.GDCardsObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TestCode.GDCardsObjects2[0].getVariables()).getFromIndex(1).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects2[k] = gdjs.TestCode.GDSlotObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects2.length = k;
}
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects2 */
/* Reuse gdjs.TestCode.GDSlotObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects2[i].setPosition((( gdjs.TestCode.GDSlotObjects2.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects2[0].getPointX("")),(( gdjs.TestCode.GDSlotObjects2.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects2[0].getPointY("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects2[i].returnVariable(gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(2)).setNumber((gdjs.TestCode.GDCardsObjects2[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects2[i].returnVariable(gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(3)).setNumber((gdjs.TestCode.GDCardsObjects2[i].getPointY("")));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
}

}


};gdjs.TestCode.eventsList100 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button9").getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(9).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList99(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList101 = function(runtimeScene) {

{


gdjs.TestCode.eventsList95(runtimeScene);
}


{


gdjs.TestCode.eventsList98(runtimeScene);
}


{


gdjs.TestCode.eventsList100(runtimeScene);
}


};gdjs.TestCode.eventsList102 = function(runtimeScene) {

{


gdjs.TestCode.eventsList93(runtimeScene);
}


{


gdjs.TestCode.eventsList101(runtimeScene);
}


};gdjs.TestCode.eventsList103 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(4), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects2 */
gdjs.copyArray(runtimeScene.getObjects("FakeCard"), gdjs.TestCode.GDFakeCardObjects2);
{for(var i = 0, len = gdjs.TestCode.GDFakeCardObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDFakeCardObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects2[i].setPosition(gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(7).getAsNumber(),gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(8).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects2[i].returnVariable(gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(4)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects2[i].returnVariable(gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(2)).setNumber((gdjs.TestCode.GDCardsObjects2[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects2[i].returnVariable(gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(3)).setNumber((gdjs.TestCode.GDCardsObjects2[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects2[i].returnVariable(gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(5)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects2[i].setZOrder(gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(10).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
}

}


};gdjs.TestCode.eventsList104 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button1").getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(9).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("X").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber());
}
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList103(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDFakeCardObjects6Objects = Hashtable.newFrom({"FakeCard": gdjs.TestCode.GDFakeCardObjects6});
gdjs.TestCode.eventsList105 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.TestCode.GDCardsObjects5, gdjs.TestCode.GDCardsObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects6.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects6[i].getAnimationFrame() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects6[k] = gdjs.TestCode.GDCardsObjects6[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects6.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects6 */
gdjs.copyArray(runtimeScene.getObjects("FakeCard"), gdjs.TestCode.GDFakeCardObjects6);
{gdjs.TestCode.localVariables[0].getFromIndex(0).setNumber((( gdjs.TestCode.GDCardsObjects6.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects6[0].getPointX("")));
}
{gdjs.TestCode.localVariables[0].getFromIndex(1).setNumber((( gdjs.TestCode.GDCardsObjects6.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects6[0].getPointY("")));
}
{for(var i = 0, len = gdjs.TestCode.GDFakeCardObjects6.length ;i < len;++i) {
    gdjs.TestCode.GDFakeCardObjects6[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDFakeCardObjects6Objects, gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber(), gdjs.TestCode.localVariables[0].getFromIndex(1).getAsNumber(), "");
}
{for(var i = 0, len = gdjs.TestCode.GDFakeCardObjects6.length ;i < len;++i) {
    gdjs.TestCode.GDFakeCardObjects6[i].setZOrder((( gdjs.TestCode.GDCardsObjects6.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects6[0].getZOrder()) + 1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setBoolean(true);
}
{gdjs.TestCode.localVariables[0].getFromIndex(2).setBoolean(true);
}
}

}


};gdjs.TestCode.eventsList106 = function(runtimeScene) {

{

/* Reuse gdjs.TestCode.GDCardsObjects4 */

gdjs.TestCode.forEachObjects5.length = 0;
gdjs.TestCode.forEachObjects5.push.apply(gdjs.TestCode.forEachObjects5,gdjs.TestCode.GDCardsObjects4);
gdjs.TestCode.forEachTotalCount5 = gdjs.TestCode.forEachObjects5.length;
gdjs.TestCode.forEachSortKeys5.length = 0;
for (gdjs.TestCode.forEachIndex5 = 0;gdjs.TestCode.forEachIndex5 < gdjs.TestCode.forEachTotalCount5;++gdjs.TestCode.forEachIndex5) {
gdjs.TestCode.GDCardsObjects5.length = 0;


gdjs.TestCode.GDCardsObjects5.push(gdjs.TestCode.forEachObjects5[gdjs.TestCode.forEachIndex5]);
gdjs.TestCode.forEachSortKeys5.push((( gdjs.TestCode.GDCardsObjects5.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects5[0].getZOrder()));
}
gdjs.TestCode.forEachSorted5.length = 0;
for (gdjs.TestCode.forEachIndex5 = 0;gdjs.TestCode.forEachIndex5 < gdjs.TestCode.forEachTotalCount5;++gdjs.TestCode.forEachIndex5) gdjs.TestCode.forEachSorted5.push(gdjs.TestCode.forEachIndex5);
gdjs.TestCode.forEachSorted5.sort(function(a, b) { return true ? gdjs.TestCode.forEachSortKeys5[b] - gdjs.TestCode.forEachSortKeys5[a] : gdjs.TestCode.forEachSortKeys5[a] - gdjs.TestCode.forEachSortKeys5[b]; });
gdjs.TestCode.forEachLimit5 = 1;
if (gdjs.TestCode.forEachLimit5 >= 0 && gdjs.TestCode.forEachSorted5.length > gdjs.TestCode.forEachLimit5) gdjs.TestCode.forEachSorted5.length = gdjs.TestCode.forEachLimit5;
for (gdjs.TestCode.forEachIndex5 = 0;gdjs.TestCode.forEachIndex5 < gdjs.TestCode.forEachSorted5.length;++gdjs.TestCode.forEachIndex5) {
gdjs.TestCode.GDCardsObjects5.length = 0;


gdjs.TestCode.forEachTemporary5 = gdjs.TestCode.forEachObjects5[gdjs.TestCode.forEachSorted5[gdjs.TestCode.forEachIndex5]];
gdjs.TestCode.GDCardsObjects5.push(gdjs.TestCode.forEachTemporary5);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.TestCode.eventsList105(runtimeScene);} //Subevents end.
}
}

}


};gdjs.TestCode.eventsList107 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(4), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects3 */
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].setPosition(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(7).getAsNumber(),gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(8).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(4)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(2)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(3)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(5)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].setZOrder(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(10).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
}

}


};gdjs.TestCode.eventsList108 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects4[i].getX() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects4[k] = gdjs.TestCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects4[i].getY() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects4[k] = gdjs.TestCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects4.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList106(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = gdjs.TestCode.localVariables[0].getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList107(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList109 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("PosX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("PosY", variable);
}
{
const variable = new gdjs.Variable();
variable.setBoolean(false);
variables._declare("CardDetected", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestCode.eventsList108(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(1).getChild("X").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(1).getChild("Y").getAsNumber());
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FakeCard"), gdjs.TestCode.GDFakeCardObjects2);
{for(var i = 0, len = gdjs.TestCode.GDFakeCardObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDFakeCardObjects2[i].setZOrder(runtimeScene.getScene().getVariables().getFromIndex(1).getChild(1).getChild("Z").getAsNumber() + 1);
}
}
}

}


};gdjs.TestCode.eventsList110 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button1").getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(9).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("X").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber());
}
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList109(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList111 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects4[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(4), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects4[k] = gdjs.TestCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects4 */
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].setPosition(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(7).getAsNumber(),gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(8).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(4)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(2)).setNumber((gdjs.TestCode.GDCardsObjects4[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(3)).setNumber((gdjs.TestCode.GDCardsObjects4[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(5)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].setZOrder(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(10).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.TestCode.GDFakeCardObjects3, gdjs.TestCode.GDFakeCardObjects4);

{for(var i = 0, len = gdjs.TestCode.GDFakeCardObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDFakeCardObjects4[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(11).setBoolean(true);
}
}

}


};gdjs.TestCode.eventsList112 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FakeCard"), gdjs.TestCode.GDFakeCardObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDFakeCardObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDFakeCardObjects3[i].getX() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDFakeCardObjects3[k] = gdjs.TestCode.GDFakeCardObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDFakeCardObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDFakeCardObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDFakeCardObjects3[i].getY() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDFakeCardObjects3[k] = gdjs.TestCode.GDFakeCardObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDFakeCardObjects3.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList111(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList113 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button5").getAsNumber() == 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button7").getAsNumber() == 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button9").getAsNumber() == 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button1").getAsNumber() == 2);
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
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(9).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber() > 0);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList112(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList114 = function(runtimeScene) {

};gdjs.TestCode.eventsList115 = function(runtimeScene) {

{

/* Reuse gdjs.TestCode.GDCardsObjects4 */

gdjs.TestCode.forEachObjects5.length = 0;
gdjs.TestCode.forEachObjects5.push.apply(gdjs.TestCode.forEachObjects5,gdjs.TestCode.GDCardsObjects4);
gdjs.TestCode.forEachTotalCount5 = gdjs.TestCode.forEachObjects5.length;
gdjs.TestCode.forEachSortKeys5.length = 0;
for (gdjs.TestCode.forEachIndex5 = 0;gdjs.TestCode.forEachIndex5 < gdjs.TestCode.forEachTotalCount5;++gdjs.TestCode.forEachIndex5) {
gdjs.TestCode.GDCardsObjects5.length = 0;


gdjs.TestCode.GDCardsObjects5.push(gdjs.TestCode.forEachObjects5[gdjs.TestCode.forEachIndex5]);
gdjs.TestCode.forEachSortKeys5.push((( gdjs.TestCode.GDCardsObjects5.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects5[0].getZOrder()));
}
gdjs.TestCode.forEachSorted5.length = 0;
for (gdjs.TestCode.forEachIndex5 = 0;gdjs.TestCode.forEachIndex5 < gdjs.TestCode.forEachTotalCount5;++gdjs.TestCode.forEachIndex5) gdjs.TestCode.forEachSorted5.push(gdjs.TestCode.forEachIndex5);
gdjs.TestCode.forEachSorted5.sort(function(a, b) { return true ? gdjs.TestCode.forEachSortKeys5[b] - gdjs.TestCode.forEachSortKeys5[a] : gdjs.TestCode.forEachSortKeys5[a] - gdjs.TestCode.forEachSortKeys5[b]; });
gdjs.TestCode.forEachLimit5 = 1;
if (gdjs.TestCode.forEachLimit5 >= 0 && gdjs.TestCode.forEachSorted5.length > gdjs.TestCode.forEachLimit5) gdjs.TestCode.forEachSorted5.length = gdjs.TestCode.forEachLimit5;
for (gdjs.TestCode.forEachIndex5 = 0;gdjs.TestCode.forEachIndex5 < gdjs.TestCode.forEachSorted5.length;++gdjs.TestCode.forEachIndex5) {
gdjs.TestCode.GDCardsObjects5.length = 0;


gdjs.TestCode.forEachTemporary5 = gdjs.TestCode.forEachObjects5[gdjs.TestCode.forEachSorted5[gdjs.TestCode.forEachIndex5]];
gdjs.TestCode.GDCardsObjects5.push(gdjs.TestCode.forEachTemporary5);
let isConditionTrue_0 = false;
if (true) {
{gdjs.TestCode.localVariables[0].getFromIndex(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber());
}
{gdjs.TestCode.localVariables[0].getFromIndex(3).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber());
}
{gdjs.TestCode.localVariables[0].getFromIndex(1).setBoolean(true);
}
{gdjs.TestCode.localVariables[0].getFromIndex(4).setNumber(((gdjs.TestCode.GDCardsObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TestCode.GDCardsObjects5[0].getVariables()).getFromIndex(0).getAsNumber());
}
{gdjs.TestCode.localVariables[0].getFromIndex(5).setNumber(((gdjs.TestCode.GDCardsObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TestCode.GDCardsObjects5[0].getVariables()).getFromIndex(1).getAsNumber());
}
}
}

}


};gdjs.TestCode.eventsList116 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.TestCode.GDCardsObjects4 */
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].setPosition(gdjs.TestCode.localVariables[0].getFromIndex(2).getAsNumber(),gdjs.TestCode.localVariables[0].getFromIndex(3).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(4)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(2)).setNumber((gdjs.TestCode.GDCardsObjects4[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(3)).setNumber((gdjs.TestCode.GDCardsObjects4[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(5)).setNumber(0);
}
}
}

}


};gdjs.TestCode.eventsList117 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects4[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(4), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects4[k] = gdjs.TestCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList116(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FakeCard"), gdjs.TestCode.GDFakeCardObjects3);
{for(var i = 0, len = gdjs.TestCode.GDFakeCardObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDFakeCardObjects3[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setBoolean(true);
}
}

}


};gdjs.TestCode.eventsList118 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(1).getChild(3).getChild("X").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(3).getChild("Y").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects4[i].getX() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects4[k] = gdjs.TestCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects4[i].getY() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects4[k] = gdjs.TestCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects4.length = k;
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList115(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.TestCode.localVariables[0].getFromIndex(4).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(2).getChild("TopSuit").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.TestCode.localVariables[0].getFromIndex(5).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(2).getChild("TopValue").getAsNumber() - 1);
}
}
if (isConditionTrue_0) {
{gdjs.TestCode.localVariables[0].getFromIndex(0).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = gdjs.TestCode.localVariables[0].getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = gdjs.TestCode.localVariables[0].getFromIndex(1).getAsBoolean();
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(11).setBoolean(true);
}

{ //Subevents
gdjs.TestCode.eventsList117(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList119 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setBoolean(false);
variables._declare("CanDropNewPosition", variable);
}
{
const variable = new gdjs.Variable();
variable.setBoolean(false);
variables._declare("CardMatch", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("PosX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("PosY", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("TempSuit", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("TempValue", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestCode.eventsList118(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


};gdjs.TestCode.eventsList120 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button5").getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(9).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber() > 0);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList119(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList121 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.TestCode.GDCardsObjects4 */
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].setPosition(gdjs.TestCode.localVariables[0].getFromIndex(2).getAsNumber(),gdjs.TestCode.localVariables[0].getFromIndex(3).getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardOffsetY").getAsNumber() * ((runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber() + 1) - gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(9).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(4)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(2)).setNumber((gdjs.TestCode.GDCardsObjects4[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(3)).setNumber((gdjs.TestCode.GDCardsObjects4[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(5)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].setZOrder((gdjs.TestCode.GDCardsObjects4[i].getPointY("")));
}
}
}

}


};gdjs.TestCode.eventsList122 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects4[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(4), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects4[k] = gdjs.TestCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList121(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FakeCard"), gdjs.TestCode.GDFakeCardObjects3);
{for(var i = 0, len = gdjs.TestCode.GDFakeCardObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDFakeCardObjects3[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setBoolean(true);
}
}

}


};gdjs.TestCode.eventsList123 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects4.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDCardsObjects4[i].getVariableNumber(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(1)) == 0) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects4[k] = gdjs.TestCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects4[i].getVariableNumber(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(1)) == runtimeScene.getScene().getVariables().getFromIndex(2).getChild("TopValue").getAsNumber() + 1 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects4[k] = gdjs.TestCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects4[i].getX() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects4[k] = gdjs.TestCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects4[i].getY() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects4[k] = gdjs.TestCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects4.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects4 */
{gdjs.TestCode.localVariables[0].getFromIndex(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber());
}
{gdjs.TestCode.localVariables[0].getFromIndex(3).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber());
}
{gdjs.TestCode.localVariables[0].getFromIndex(1).setBoolean(true);
}
{gdjs.TestCode.localVariables[0].getFromIndex(4).setNumber(((gdjs.TestCode.GDCardsObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TestCode.GDCardsObjects4[0].getVariables()).getFromIndex(0).getAsNumber());
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FakeCard"), gdjs.TestCode.GDFakeCardObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDFakeCardObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDFakeCardObjects4[i].isCollidingWithPoint(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber()) ) {
        isConditionTrue_1 = true;
        gdjs.TestCode.GDFakeCardObjects4[k] = gdjs.TestCode.GDFakeCardObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDFakeCardObjects4.length = k;
isConditionTrue_0 = !isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (gdjs.TestCode.localVariables[0].getFromIndex(4).getAsNumber() == gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("TopSuit").getAsNumber() - 1, 4));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (gdjs.TestCode.localVariables[0].getFromIndex(4).getAsNumber() == gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("TopSuit").getAsNumber() + 1, 4));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
{gdjs.TestCode.localVariables[0].getFromIndex(0).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = gdjs.TestCode.localVariables[0].getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = gdjs.TestCode.localVariables[0].getFromIndex(1).getAsBoolean();
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList122(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList124 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setBoolean(false);
variables._declare("CanDropNewPosition", variable);
}
{
const variable = new gdjs.Variable();
variable.setBoolean(false);
variables._declare("CardMatch", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("PosX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("PosY", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("TempSuit", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestCode.eventsList123(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


};gdjs.TestCode.eventsList125 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button5").getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(9).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber() > 0);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList124(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList126 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.TestCode.GDCardsObjects3 */
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].setPosition(gdjs.TestCode.localVariables[0].getFromIndex(2).getAsNumber(),gdjs.TestCode.localVariables[0].getFromIndex(3).getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardOffsetY").getAsNumber() * ((runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber() + 1) - gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(9).getAsNumber()) - runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardOffsetY").getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(4)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(2)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(3)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(5)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].setZOrder((gdjs.TestCode.GDCardsObjects3[i].getPointY("")));
}
}
}

}


};gdjs.TestCode.eventsList127 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(4), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList126(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FakeCard"), gdjs.TestCode.GDFakeCardObjects2);
{for(var i = 0, len = gdjs.TestCode.GDFakeCardObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDFakeCardObjects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setBoolean(true);
}
}

}


};gdjs.TestCode.eventsList128 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].isCollidingWithPoint(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber()) ) {
        isConditionTrue_1 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
isConditionTrue_0 = !isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.TestCode.localVariables[0].getFromIndex(1).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("TopValue").getAsNumber() == 12);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() != runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects3[i].getX() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects3[k] = gdjs.TestCode.GDSlotObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects3[i].getY() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects3[k] = gdjs.TestCode.GDSlotObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects3.length = k;
}
}
}
if (isConditionTrue_0) {
{gdjs.TestCode.localVariables[0].getFromIndex(0).setBoolean(true);
}
{gdjs.TestCode.localVariables[0].getFromIndex(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber());
}
{gdjs.TestCode.localVariables[0].getFromIndex(3).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = gdjs.TestCode.localVariables[0].getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = gdjs.TestCode.localVariables[0].getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList127(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList129 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setBoolean(false);
variables._declare("CanDropNewPosition", variable);
}
{
const variable = new gdjs.Variable();
variable.setBoolean(false);
variables._declare("SlotSpot", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("PosX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("PosY", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestCode.eventsList128(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


};gdjs.TestCode.eventsList130 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button5").getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(9).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber() > 0);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList129(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList131 = function(runtimeScene) {

{


gdjs.TestCode.eventsList113(runtimeScene);
}


{


gdjs.TestCode.eventsList120(runtimeScene);
}


{


gdjs.TestCode.eventsList125(runtimeScene);
}


{


gdjs.TestCode.eventsList130(runtimeScene);
}


};gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDFakeCardObjects3Objects = Hashtable.newFrom({"FakeCard": gdjs.TestCode.GDFakeCardObjects3});
gdjs.TestCode.eventsList132 = function(runtimeScene) {

};gdjs.TestCode.eventsList133 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.TestCode.GDCardsObjects3, gdjs.TestCode.GDCardsObjects4);


gdjs.TestCode.forEachObjects5.length = 0;
gdjs.TestCode.forEachObjects5.push.apply(gdjs.TestCode.forEachObjects5,gdjs.TestCode.GDCardsObjects4);
gdjs.TestCode.forEachTotalCount5 = gdjs.TestCode.forEachObjects5.length;
gdjs.TestCode.forEachSortKeys5.length = 0;
for (gdjs.TestCode.forEachIndex5 = 0;gdjs.TestCode.forEachIndex5 < gdjs.TestCode.forEachTotalCount5;++gdjs.TestCode.forEachIndex5) {
gdjs.TestCode.GDCardsObjects5.length = 0;


gdjs.TestCode.GDCardsObjects5.push(gdjs.TestCode.forEachObjects5[gdjs.TestCode.forEachIndex5]);
gdjs.TestCode.forEachSortKeys5.push((( gdjs.TestCode.GDCardsObjects5.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects5[0].getZOrder()));
}
gdjs.TestCode.forEachSorted5.length = 0;
for (gdjs.TestCode.forEachIndex5 = 0;gdjs.TestCode.forEachIndex5 < gdjs.TestCode.forEachTotalCount5;++gdjs.TestCode.forEachIndex5) gdjs.TestCode.forEachSorted5.push(gdjs.TestCode.forEachIndex5);
gdjs.TestCode.forEachSorted5.sort(function(a, b) { return true ? gdjs.TestCode.forEachSortKeys5[b] - gdjs.TestCode.forEachSortKeys5[a] : gdjs.TestCode.forEachSortKeys5[a] - gdjs.TestCode.forEachSortKeys5[b]; });
gdjs.TestCode.forEachLimit5 = 1;
if (gdjs.TestCode.forEachLimit5 >= 0 && gdjs.TestCode.forEachSorted5.length > gdjs.TestCode.forEachLimit5) gdjs.TestCode.forEachSorted5.length = gdjs.TestCode.forEachLimit5;
for (gdjs.TestCode.forEachIndex5 = 0;gdjs.TestCode.forEachIndex5 < gdjs.TestCode.forEachSorted5.length;++gdjs.TestCode.forEachIndex5) {
gdjs.TestCode.GDCardsObjects5.length = 0;


gdjs.TestCode.forEachTemporary5 = gdjs.TestCode.forEachObjects5[gdjs.TestCode.forEachSorted5[gdjs.TestCode.forEachIndex5]];
gdjs.TestCode.GDCardsObjects5.push(gdjs.TestCode.forEachTemporary5);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects5[i].returnVariable(gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(7)).setNumber((gdjs.TestCode.GDCardsObjects5[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects5[i].returnVariable(gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(8)).setNumber((gdjs.TestCode.GDCardsObjects5[i].getPointY("")) - gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(5).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects5[i].returnVariable(gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(10)).setNumber((gdjs.TestCode.GDCardsObjects5[i].getZOrder()));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects5[i].returnVariable(gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(2)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects5[i].returnVariable(gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(3)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects5[i].returnVariable(gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(4)).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects5[i].returnVariable(gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(9)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects5[i].setZOrder((gdjs.TestCode.GDCardsObjects5[i].getHeight()) * 20 - gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(9).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("TopValue").setNumber(((gdjs.TestCode.GDCardsObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TestCode.GDCardsObjects5[0].getVariables()).getFromIndex(1).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("TopSuit").setNumber(((gdjs.TestCode.GDCardsObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TestCode.GDCardsObjects5[0].getVariables()).getFromIndex(0).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setBoolean(true);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.TestCode.eventsList134 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("X").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getAnimationFrame() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getX() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getY() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects3 */
gdjs.TestCode.GDFakeCardObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDFakeCardObjects3Objects, runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber(), "");
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
{for(var i = 0, len = gdjs.TestCode.GDFakeCardObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDFakeCardObjects3[i].setZOrder((( gdjs.TestCode.GDCardsObjects3.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects3[0].getZOrder()) + 1);
}
}

{ //Subevents
gdjs.TestCode.eventsList133(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDFakeCardObjects2Objects = Hashtable.newFrom({"FakeCard": gdjs.TestCode.GDFakeCardObjects2});
gdjs.TestCode.eventsList135 = function(runtimeScene) {

};gdjs.TestCode.eventsList136 = function(runtimeScene) {

{

/* Reuse gdjs.TestCode.GDCardsObjects2 */

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
gdjs.TestCode.forEachObjects3.length = 0;
gdjs.TestCode.forEachObjects3.push.apply(gdjs.TestCode.forEachObjects3,gdjs.TestCode.GDCardsObjects2);
gdjs.TestCode.forEachTotalCount3 = gdjs.TestCode.forEachObjects3.length;
gdjs.TestCode.forEachSortKeys3.length = 0;
for (gdjs.TestCode.forEachIndex3 = 0;gdjs.TestCode.forEachIndex3 < gdjs.TestCode.forEachTotalCount3;++gdjs.TestCode.forEachIndex3) {
gdjs.TestCode.GDCardsObjects3.length = 0;


gdjs.TestCode.GDCardsObjects3.push(gdjs.TestCode.forEachObjects3[gdjs.TestCode.forEachIndex3]);
gdjs.TestCode.forEachSortKeys3.push((( gdjs.TestCode.GDCardsObjects3.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects3[0].getZOrder()));
}
gdjs.TestCode.forEachSorted3.length = 0;
for (gdjs.TestCode.forEachIndex3 = 0;gdjs.TestCode.forEachIndex3 < gdjs.TestCode.forEachTotalCount3;++gdjs.TestCode.forEachIndex3) gdjs.TestCode.forEachSorted3.push(gdjs.TestCode.forEachIndex3);
gdjs.TestCode.forEachSorted3.sort(function(a, b) { return true ? gdjs.TestCode.forEachSortKeys3[b] - gdjs.TestCode.forEachSortKeys3[a] : gdjs.TestCode.forEachSortKeys3[a] - gdjs.TestCode.forEachSortKeys3[b]; });
for (gdjs.TestCode.forEachIndex3 = 0;gdjs.TestCode.forEachIndex3 < gdjs.TestCode.forEachSorted3.length;++gdjs.TestCode.forEachIndex3) {
gdjs.TestCode.GDCardsObjects3.length = 0;


gdjs.TestCode.forEachTemporary3 = gdjs.TestCode.forEachObjects3[gdjs.TestCode.forEachSorted3[gdjs.TestCode.forEachIndex3]];
gdjs.TestCode.GDCardsObjects3.push(gdjs.TestCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{gdjs.TestCode.localVariables[1].getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(9)).setNumber(gdjs.TestCode.localVariables[1].getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(7)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(8)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getPointY("")) - gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(5).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(10)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getZOrder()));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(2)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(4)).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].setZOrder((gdjs.TestCode.GDCardsObjects3[i].getHeight()) * 20 - gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(9).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").setNumber(gdjs.TestCode.localVariables[1].getFromIndex(0).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("TopValue").setNumber(((gdjs.TestCode.GDCardsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TestCode.GDCardsObjects3[0].getVariables()).getFromIndex(1).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("TopSuit").setNumber(((gdjs.TestCode.GDCardsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TestCode.GDCardsObjects3[0].getVariables()).getFromIndex(0).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setBoolean(true);
}
}
}
gdjs.TestCode.localVariables.pop();

}


};gdjs.TestCode.eventsList137 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button5").getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getX() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getY() >= runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getAnimationFrame() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects2 */
gdjs.TestCode.GDFakeCardObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDFakeCardObjects2Objects, runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber(), "");
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
{for(var i = 0, len = gdjs.TestCode.GDFakeCardObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDFakeCardObjects2[i].setZOrder((( gdjs.TestCode.GDCardsObjects2.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects2[0].getZOrder()));
}
}

{ //Subevents
gdjs.TestCode.eventsList136(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList138 = function(runtimeScene) {

{


gdjs.TestCode.eventsList134(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(1).getChild("X").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(1).getChild("Y").getAsNumber());
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FakeCard"), gdjs.TestCode.GDFakeCardObjects3);
{for(var i = 0, len = gdjs.TestCode.GDFakeCardObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDFakeCardObjects3[i].setZOrder(runtimeScene.getScene().getVariables().getFromIndex(1).getChild(1).getChild("Z").getAsNumber() + 1);
}
}
}

}


{


gdjs.TestCode.eventsList137(runtimeScene);
}


};gdjs.TestCode.eventsList139 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("X").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber());
}
}
if (isConditionTrue_0) {
{gdjs.TestCode.localVariables[0].getFromIndex(0).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !gdjs.TestCode.localVariables[0].getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList138(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList140 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setBoolean(false);
variables._declare("TopLeftSlot", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestCode.eventsList139(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


};gdjs.TestCode.eventsList141 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button1").getAsNumber() == 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button5").getAsNumber() == 2);
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
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(9).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() == 0);
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList140(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList142 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(4), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects3 */
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].setPosition(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(7).getAsNumber(),gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(8).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(4)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(2)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(3)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(5)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].setZOrder(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(10).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
}

}


};gdjs.TestCode.eventsList143 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(4), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects3 */
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].setPosition(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(7).getAsNumber(),gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(8).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(4)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(2)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(3)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(5)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].setZOrder(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(10).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
{gdjs.TestCode.localVariables[0].getFromIndex(0).setBoolean(true);
}
}

}


};gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDCardsObjects4Objects = Hashtable.newFrom({"Cards": gdjs.TestCode.GDCardsObjects4});
gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDFakeCardObjects4Objects = Hashtable.newFrom({"FakeCard": gdjs.TestCode.GDFakeCardObjects4});
gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDFakeCardObjects3Objects = Hashtable.newFrom({"FakeCard": gdjs.TestCode.GDFakeCardObjects3});
gdjs.TestCode.eventsList144 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects4);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects4[i].getBehavior("Animation").getAnimationName() == "Backface" ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects4[k] = gdjs.TestCode.GDCardsObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.raycastObject(gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDCardsObjects4Objects, runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardH").getAsNumber() * 20, -90, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardH").getAsNumber() * 20, gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects4 */
gdjs.TestCode.GDFakeCardObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDFakeCardObjects4Objects, runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber(), (( gdjs.TestCode.GDCardsObjects4.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects4[0].getPointY("")), "");
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
{for(var i = 0, len = gdjs.TestCode.GDFakeCardObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDFakeCardObjects4[i].setZOrder((( gdjs.TestCode.GDCardsObjects4.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects4[0].getZOrder()));
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects3);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects3[i].getX() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects3[k] = gdjs.TestCode.GDSlotObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects3[i].getY() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects3[k] = gdjs.TestCode.GDSlotObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects3.length = k;
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects3);
/* Reuse gdjs.TestCode.GDSlotObjects3 */
gdjs.TestCode.GDFakeCardObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDFakeCardObjects3Objects, (( gdjs.TestCode.GDSlotObjects3.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects3[0].getPointX("")), (( gdjs.TestCode.GDSlotObjects3.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects3[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.TestCode.GDFakeCardObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDFakeCardObjects3[i].setZOrder((( gdjs.TestCode.GDCardsObjects3.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects3[0].getZOrder()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.TestCode.eventsList145 = function(runtimeScene) {

};gdjs.TestCode.eventsList146 = function(runtimeScene) {

{

/* Reuse gdjs.TestCode.GDCardsObjects2 */

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
gdjs.TestCode.forEachObjects3.length = 0;
gdjs.TestCode.forEachObjects3.push.apply(gdjs.TestCode.forEachObjects3,gdjs.TestCode.GDCardsObjects2);
gdjs.TestCode.forEachTotalCount3 = gdjs.TestCode.forEachObjects3.length;
gdjs.TestCode.forEachSortKeys3.length = 0;
for (gdjs.TestCode.forEachIndex3 = 0;gdjs.TestCode.forEachIndex3 < gdjs.TestCode.forEachTotalCount3;++gdjs.TestCode.forEachIndex3) {
gdjs.TestCode.GDCardsObjects3.length = 0;


gdjs.TestCode.GDCardsObjects3.push(gdjs.TestCode.forEachObjects3[gdjs.TestCode.forEachIndex3]);
gdjs.TestCode.forEachSortKeys3.push((( gdjs.TestCode.GDCardsObjects3.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects3[0].getZOrder()));
}
gdjs.TestCode.forEachSorted3.length = 0;
for (gdjs.TestCode.forEachIndex3 = 0;gdjs.TestCode.forEachIndex3 < gdjs.TestCode.forEachTotalCount3;++gdjs.TestCode.forEachIndex3) gdjs.TestCode.forEachSorted3.push(gdjs.TestCode.forEachIndex3);
gdjs.TestCode.forEachSorted3.sort(function(a, b) { return true ? gdjs.TestCode.forEachSortKeys3[b] - gdjs.TestCode.forEachSortKeys3[a] : gdjs.TestCode.forEachSortKeys3[a] - gdjs.TestCode.forEachSortKeys3[b]; });
for (gdjs.TestCode.forEachIndex3 = 0;gdjs.TestCode.forEachIndex3 < gdjs.TestCode.forEachSorted3.length;++gdjs.TestCode.forEachIndex3) {
gdjs.TestCode.GDCardsObjects3.length = 0;


gdjs.TestCode.forEachTemporary3 = gdjs.TestCode.forEachObjects3[gdjs.TestCode.forEachSorted3[gdjs.TestCode.forEachIndex3]];
gdjs.TestCode.GDCardsObjects3.push(gdjs.TestCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{gdjs.TestCode.localVariables[1].getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(9)).setNumber(gdjs.TestCode.localVariables[1].getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(7)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(8)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getPointY("")) - gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(5).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(10)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getZOrder()));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(2)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(4)).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].setZOrder((gdjs.TestCode.GDCardsObjects3[i].getHeight()) * 20 - gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(9).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").setNumber(gdjs.TestCode.localVariables[1].getFromIndex(0).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("TopValue").setNumber(((gdjs.TestCode.GDCardsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TestCode.GDCardsObjects3[0].getVariables()).getFromIndex(1).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("TopSuit").setNumber(((gdjs.TestCode.GDCardsObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TestCode.GDCardsObjects3[0].getVariables()).getFromIndex(0).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
}
}
gdjs.TestCode.localVariables.pop();

}


};gdjs.TestCode.eventsList147 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestCode.eventsList144(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDCardsObjects2[i].getBehavior("Animation").getAnimationName() == "Backface") ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getX() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getY() >= runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList146(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList148 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FakeCard"), gdjs.TestCode.GDFakeCardObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDFakeCardObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDFakeCardObjects3[i].isCollidingWithPoint(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber()) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDFakeCardObjects3[k] = gdjs.TestCode.GDFakeCardObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDFakeCardObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList143(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FakeCard"), gdjs.TestCode.GDFakeCardObjects3);
{for(var i = 0, len = gdjs.TestCode.GDFakeCardObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDFakeCardObjects3[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !gdjs.TestCode.localVariables[0].getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber() == 0);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList147(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList149 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FakeCard"), gdjs.TestCode.GDFakeCardObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDFakeCardObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDFakeCardObjects3[i].isCollidingWithPoint(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber()) ) {
        isConditionTrue_1 = true;
        gdjs.TestCode.GDFakeCardObjects3[k] = gdjs.TestCode.GDFakeCardObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDFakeCardObjects3.length = k;
isConditionTrue_0 = !isConditionTrue_1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList142(runtimeScene);} //End of subevents
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setBoolean(false);
variables._declare("BlockPickingCards", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestCode.eventsList148(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


};gdjs.TestCode.eventsList150 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button1").getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(9).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber());
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList149(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList151 = function(runtimeScene) {

{


gdjs.TestCode.eventsList150(runtimeScene);
}


};gdjs.TestCode.asyncCallback25507732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.TestCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Cards"), gdjs.TestCode.GDCardsObjects7);

{runtimeScene.getScene().getVariables().getFromIndex(1).getChild(1).getChild("Z").add(1);
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects7.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects7[i].setZOrder(runtimeScene.getScene().getVariables().getFromIndex(1).getChild(1).getChild("Z").getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).sub(1);
}
gdjs.TestCode.localVariables.length = 0;
}
gdjs.TestCode.idToCallbackMap.set(25507732, gdjs.TestCode.asyncCallback25507732);
gdjs.TestCode.eventsList152 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.TestCode.localVariables);
for (const obj of gdjs.TestCode.GDCardsObjects6) asyncObjectsList.addObject("Cards", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.11), (runtimeScene) => (gdjs.TestCode.asyncCallback25507732(runtimeScene, asyncObjectsList)), 25507732, asyncObjectsList);
}
}

}


};gdjs.TestCode.asyncCallback25508100 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.TestCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Cards"), gdjs.TestCode.GDCardsObjects6);

{for(var i = 0, len = gdjs.TestCode.GDCardsObjects6.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects6[i].getBehavior("Animation").setAnimationIndex(1 + gdjs.TestCode.GDCardsObjects6[i].getVariables().getFromIndex(0).getAsNumber() + (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("SelectedSkin").getAsNumber() * 4));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects6.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects6[i].setAnimationFrame(gdjs.TestCode.GDCardsObjects6[i].getVariables().getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects6.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects6[i].getBehavior("Tween").addObjectWidthTween2("WidthShrink", runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardW").getAsNumber(), "linear", 0.1, false);
}
}

{ //Subevents
gdjs.TestCode.eventsList152(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.TestCode.localVariables.length = 0;
}
gdjs.TestCode.idToCallbackMap.set(25508100, gdjs.TestCode.asyncCallback25508100);
gdjs.TestCode.eventsList153 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.TestCode.localVariables);
for (const obj of gdjs.TestCode.GDCardsObjects4) asyncObjectsList.addObject("Cards", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.11), (runtimeScene) => (gdjs.TestCode.asyncCallback25508100(runtimeScene, asyncObjectsList)), 25508100, asyncObjectsList);
}
}

}


};gdjs.TestCode.eventsList154 = function(runtimeScene) {

{

/* Reuse gdjs.TestCode.GDCardsObjects3 */

gdjs.TestCode.forEachObjects4.length = 0;
gdjs.TestCode.forEachObjects4.push.apply(gdjs.TestCode.forEachObjects4,gdjs.TestCode.GDCardsObjects3);
gdjs.TestCode.forEachTotalCount4 = gdjs.TestCode.forEachObjects4.length;
gdjs.TestCode.forEachSortKeys4.length = 0;
for (gdjs.TestCode.forEachIndex4 = 0;gdjs.TestCode.forEachIndex4 < gdjs.TestCode.forEachTotalCount4;++gdjs.TestCode.forEachIndex4) {
gdjs.TestCode.GDCardsObjects4.length = 0;


gdjs.TestCode.GDCardsObjects4.push(gdjs.TestCode.forEachObjects4[gdjs.TestCode.forEachIndex4]);
gdjs.TestCode.forEachSortKeys4.push((( gdjs.TestCode.GDCardsObjects4.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects4[0].getZOrder()));
}
gdjs.TestCode.forEachSorted4.length = 0;
for (gdjs.TestCode.forEachIndex4 = 0;gdjs.TestCode.forEachIndex4 < gdjs.TestCode.forEachTotalCount4;++gdjs.TestCode.forEachIndex4) gdjs.TestCode.forEachSorted4.push(gdjs.TestCode.forEachIndex4);
gdjs.TestCode.forEachSorted4.sort(function(a, b) { return true ? gdjs.TestCode.forEachSortKeys4[b] - gdjs.TestCode.forEachSortKeys4[a] : gdjs.TestCode.forEachSortKeys4[a] - gdjs.TestCode.forEachSortKeys4[b]; });
gdjs.TestCode.forEachLimit4 = 1;
if (gdjs.TestCode.forEachLimit4 >= 0 && gdjs.TestCode.forEachSorted4.length > gdjs.TestCode.forEachLimit4) gdjs.TestCode.forEachSorted4.length = gdjs.TestCode.forEachLimit4;
for (gdjs.TestCode.forEachIndex4 = 0;gdjs.TestCode.forEachIndex4 < gdjs.TestCode.forEachSorted4.length;++gdjs.TestCode.forEachIndex4) {
gdjs.TestCode.GDCardsObjects4.length = 0;


gdjs.TestCode.forEachTemporary4 = gdjs.TestCode.forEachObjects4[gdjs.TestCode.forEachSorted4[gdjs.TestCode.forEachIndex4]];
gdjs.TestCode.GDCardsObjects4.push(gdjs.TestCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().getFromIndex(7).add(1);
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].getBehavior("Tween").addObjectPositionXTween2("MoveRight", runtimeScene.getScene().getVariables().getFromIndex(1).getChild(1).getChild("X").getAsNumber(), "linear", 0.2, false);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].setZOrder(90);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].getBehavior("Tween").addObjectWidthTween2("WidthShrink", 0, "linear", 0.1, false);
}
}

{ //Subevents: 
gdjs.TestCode.eventsList153(runtimeScene);} //Subevents end.
}
}

}


};gdjs.TestCode.eventsList155 = function(runtimeScene) {

{

/* Reuse gdjs.TestCode.GDCardsObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getX() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("X").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getY() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList154(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList156 = function(runtimeScene) {

};gdjs.TestCode.eventsList157 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.TestCode.GDCardsObjects2, gdjs.TestCode.GDCardsObjects3);


gdjs.TestCode.forEachObjects4.length = 0;
gdjs.TestCode.forEachObjects4.push.apply(gdjs.TestCode.forEachObjects4,gdjs.TestCode.GDCardsObjects3);
gdjs.TestCode.forEachTotalCount4 = gdjs.TestCode.forEachObjects4.length;
gdjs.TestCode.forEachSortKeys4.length = 0;
for (gdjs.TestCode.forEachIndex4 = 0;gdjs.TestCode.forEachIndex4 < gdjs.TestCode.forEachTotalCount4;++gdjs.TestCode.forEachIndex4) {
gdjs.TestCode.GDCardsObjects4.length = 0;


gdjs.TestCode.GDCardsObjects4.push(gdjs.TestCode.forEachObjects4[gdjs.TestCode.forEachIndex4]);
gdjs.TestCode.forEachSortKeys4.push((( gdjs.TestCode.GDCardsObjects4.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects4[0].getZOrder()));
}
gdjs.TestCode.forEachSorted4.length = 0;
for (gdjs.TestCode.forEachIndex4 = 0;gdjs.TestCode.forEachIndex4 < gdjs.TestCode.forEachTotalCount4;++gdjs.TestCode.forEachIndex4) gdjs.TestCode.forEachSorted4.push(gdjs.TestCode.forEachIndex4);
gdjs.TestCode.forEachSorted4.sort(function(a, b) { return true ? gdjs.TestCode.forEachSortKeys4[b] - gdjs.TestCode.forEachSortKeys4[a] : gdjs.TestCode.forEachSortKeys4[a] - gdjs.TestCode.forEachSortKeys4[b]; });
for (gdjs.TestCode.forEachIndex4 = 0;gdjs.TestCode.forEachIndex4 < gdjs.TestCode.forEachSorted4.length;++gdjs.TestCode.forEachIndex4) {
gdjs.TestCode.GDCardsObjects4.length = 0;


gdjs.TestCode.forEachTemporary4 = gdjs.TestCode.forEachObjects4[gdjs.TestCode.forEachSorted4[gdjs.TestCode.forEachIndex4]];
gdjs.TestCode.GDCardsObjects4.push(gdjs.TestCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{gdjs.TestCode.localVariables[0].getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].setX(runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("X").getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].getBehavior("Animation").setAnimationName("Backface");
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].setZOrder(gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(8).setBoolean(false);
}
}

}


};gdjs.TestCode.eventsList158 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(4), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects3 */
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].setPosition(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(7).getAsNumber(),gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(8).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(4)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(2)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getPointX("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(3)).setNumber((gdjs.TestCode.GDCardsObjects3[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(5)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].setZOrder(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(10).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FakeCard"), gdjs.TestCode.GDFakeCardObjects3);
{for(var i = 0, len = gdjs.TestCode.GDFakeCardObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDFakeCardObjects3[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].isCollidingWithPoint(runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("X").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardW").getAsNumber() / 2, runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardH").getAsNumber() / 2) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList155(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].isCollidingWithPoint(runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("X").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardW").getAsNumber() / 2, runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardH").getAsNumber() / 2) ) {
        isConditionTrue_1 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
isConditionTrue_0 = !isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(8).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects2);

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getX() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(1).getChild("X").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getY() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(1).getChild("Y").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild(1).getChild("Z").setNumber(1);
}

{ //Subevents
gdjs.TestCode.eventsList157(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


};gdjs.TestCode.eventsList159 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button7").getAsNumber() == 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("X").getAsNumber());
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber());
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button5").getAsNumber() == 2);
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("Y").getChild(1).getChild(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild(1).getChild("Y").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("One").getChild("Y").getChild(1).getChild(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild(1).getChild("Y").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Many").getChild("Y").getChild(1).getChild(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild(1).getChild("Y").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").setNumber(0);
}

{ //Subevents
gdjs.TestCode.eventsList158(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList160 = function(runtimeScene) {

{


gdjs.TestCode.eventsList102(runtimeScene);
}


{


gdjs.TestCode.eventsList104(runtimeScene);
}


{


gdjs.TestCode.eventsList110(runtimeScene);
}


{


gdjs.TestCode.eventsList131(runtimeScene);
}


{


gdjs.TestCode.eventsList141(runtimeScene);
}


{


gdjs.TestCode.eventsList151(runtimeScene);
}


{


gdjs.TestCode.eventsList159(runtimeScene);
}


};gdjs.TestCode.eventsList161 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button9").getAsNumber() == 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button1").getAsNumber() == 2);
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber());
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(11).setBoolean(true);
}
}

}


};gdjs.TestCode.eventsList162 = function(runtimeScene) {

};gdjs.TestCode.eventsList163 = function(runtimeScene) {

{

/* Reuse gdjs.TestCode.GDCardsObjects2 */

for (gdjs.TestCode.forEachIndex3 = 0;gdjs.TestCode.forEachIndex3 < gdjs.TestCode.GDCardsObjects2.length;++gdjs.TestCode.forEachIndex3) {
gdjs.TestCode.GDCardsObjects3.length = 0;


gdjs.TestCode.forEachTemporary3 = gdjs.TestCode.GDCardsObjects2[gdjs.TestCode.forEachIndex3];
gdjs.TestCode.GDCardsObjects3.push(gdjs.TestCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].setY(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(3).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(5)).setNumber(0);
}
}
}
}

}


};gdjs.TestCode.eventsList164 = function(runtimeScene) {

{

/* Reuse gdjs.TestCode.GDCardsObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDCardsObjects2[i].getBehavior("Animation").getAnimationName() == "Backface") ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getY() > runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList163(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList165 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(4), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Left").getAsNumber() == 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Right").getAsNumber() == 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button7").getAsNumber() == 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList164(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList166 = function(runtimeScene) {

};gdjs.TestCode.eventsList167 = function(runtimeScene) {

{

/* Reuse gdjs.TestCode.GDCardsObjects3 */

for (gdjs.TestCode.forEachIndex4 = 0;gdjs.TestCode.forEachIndex4 < gdjs.TestCode.GDCardsObjects3.length;++gdjs.TestCode.forEachIndex4) {
gdjs.TestCode.GDCardsObjects4.length = 0;


gdjs.TestCode.forEachTemporary4 = gdjs.TestCode.GDCardsObjects3[gdjs.TestCode.forEachIndex4];
gdjs.TestCode.GDCardsObjects4.push(gdjs.TestCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(3)).setNumber((gdjs.TestCode.GDCardsObjects4[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(5)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardOffsetY").getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].setY(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(3).getAsNumber() + gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(5).getAsNumber());
}
}
}
}

}


};gdjs.TestCode.eventsList168 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.TestCode.GDCardsObjects2, gdjs.TestCode.GDCardsObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDCardsObjects3[i].getBehavior("Animation").getAnimationName() == "Backface") ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getX() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getY() > runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getY() > runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getVariableNumber(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(5)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList167(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList169 = function(runtimeScene) {

};gdjs.TestCode.eventsList170 = function(runtimeScene) {

{

/* Reuse gdjs.TestCode.GDCardsObjects3 */

for (gdjs.TestCode.forEachIndex4 = 0;gdjs.TestCode.forEachIndex4 < gdjs.TestCode.GDCardsObjects3.length;++gdjs.TestCode.forEachIndex4) {
gdjs.TestCode.GDCardsObjects4.length = 0;


gdjs.TestCode.forEachTemporary4 = gdjs.TestCode.GDCardsObjects3[gdjs.TestCode.forEachIndex4];
gdjs.TestCode.GDCardsObjects4.push(gdjs.TestCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].setY(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(3).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(5)).setNumber(0);
}
}
}
}

}


};gdjs.TestCode.eventsList171 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.TestCode.GDCardsObjects2, gdjs.TestCode.GDCardsObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDCardsObjects3[i].getBehavior("Animation").getAnimationName() == "Backface") ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getX() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getY() > runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getVariableNumber(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(3)) <= runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDCardsObjects3[i].getVariableNumber(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(5)) == 0) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList170(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList172 = function(runtimeScene) {

};gdjs.TestCode.eventsList173 = function(runtimeScene) {

{

/* Reuse gdjs.TestCode.GDCardsObjects2 */

for (gdjs.TestCode.forEachIndex3 = 0;gdjs.TestCode.forEachIndex3 < gdjs.TestCode.GDCardsObjects2.length;++gdjs.TestCode.forEachIndex3) {
gdjs.TestCode.GDCardsObjects3.length = 0;


gdjs.TestCode.forEachTemporary3 = gdjs.TestCode.GDCardsObjects2[gdjs.TestCode.forEachIndex3];
gdjs.TestCode.GDCardsObjects3.push(gdjs.TestCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].setY(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(3).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(5)).setNumber(0);
}
}
}
}

}


};gdjs.TestCode.eventsList174 = function(runtimeScene) {

{

/* Reuse gdjs.TestCode.GDCardsObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDCardsObjects2[i].getBehavior("Animation").getAnimationName() == "Backface") ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getX() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getVariableNumber(gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(3)) > runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList173(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList175 = function(runtimeScene) {

{


gdjs.TestCode.eventsList168(runtimeScene);
}


{


gdjs.TestCode.eventsList171(runtimeScene);
}


{


gdjs.TestCode.eventsList174(runtimeScene);
}


};gdjs.TestCode.eventsList176 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(4), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(11), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Up").getAsNumber() == 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Down").getAsNumber() == 2);
}
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
gdjs.TestCode.eventsList175(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList177 = function(runtimeScene) {

};gdjs.TestCode.eventsList178 = function(runtimeScene) {

{

/* Reuse gdjs.TestCode.GDCardsObjects2 */

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
for (gdjs.TestCode.forEachIndex3 = 0;gdjs.TestCode.forEachIndex3 < gdjs.TestCode.GDCardsObjects2.length;++gdjs.TestCode.forEachIndex3) {
gdjs.TestCode.GDCardsObjects3.length = 0;


gdjs.TestCode.forEachTemporary3 = gdjs.TestCode.GDCardsObjects2[gdjs.TestCode.forEachIndex3];
gdjs.TestCode.GDCardsObjects3.push(gdjs.TestCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{gdjs.TestCode.localVariables[0].getFromIndex(0).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild(1).getChild("Z").setNumber(gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber() + 1);
}
}
}
gdjs.TestCode.localVariables.pop();

}


};gdjs.TestCode.eventsList179 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button5").getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button9").getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects2[i].getVariableNumber(gdjs.TestCode.GDSlotObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects2[k] = gdjs.TestCode.GDSlotObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getX() == (( gdjs.TestCode.GDSlotObjects2.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects2[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getY() == (( gdjs.TestCode.GDSlotObjects2.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects2[0].getPointY("")) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(1).getChild("X").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(1).getChild("Y").getAsNumber());
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
gdjs.TestCode.eventsList178(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList180 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
{
const variable1 = new gdjs.Variable();
variable1.setString("Empty");
variable._pushVariable(variable1);
}
{
const variable1 = new gdjs.Variable();
variable1.setString("One");
variable._pushVariable(variable1);
}
{
const variable1 = new gdjs.Variable();
variable1.setString("Many");
variable._pushVariable(variable1);
}
variables._declare("StateName", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(5).setString(gdjs.TestCode.localVariables[0].getFromIndex(0).getChild(gdjs.evtTools.common.clamp(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber(), 0, 2)).getAsString());
}
}
gdjs.TestCode.localVariables.pop();

}


};gdjs.TestCode.eventsList181 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList180(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDSlotObjects5ObjectsGDgdjs_9546TestCode_9546GDCardsObjects5ObjectsGDgdjs_9546TestCode_9546GDFakeCardObjects5Objects = Hashtable.newFrom({"Slot": gdjs.TestCode.GDSlotObjects5, "Cards": gdjs.TestCode.GDCardsObjects5, "FakeCard": gdjs.TestCode.GDFakeCardObjects5});
gdjs.TestCode.eventsList182 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects5.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects5[i].isCollidingWithPoint(runtimeScene.getScene().getVariables().getFromIndex(1).getChild(gdjs.TestCode.localVariables[1].getFromIndex(0).getAsNumber()).getChild("X").getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber()) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects5[k] = gdjs.TestCode.GDSlotObjects5[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDSlotObjects5 */
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(gdjs.TestCode.localVariables[1].getFromIndex(0).getAsNumber()), (( gdjs.TestCode.GDSlotObjects5.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects5[0].getPointY("")));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects5);
gdjs.copyArray(runtimeScene.getObjects("FakeCard"), gdjs.TestCode.GDFakeCardObjects5);
gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects5.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects5[i].getVariableBoolean(gdjs.TestCode.GDSlotObjects5[i].getVariables().get("Picked"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects5[k] = gdjs.TestCode.GDSlotObjects5[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects5.length = k;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects5[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects5[i].getVariables().get("Picked"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects5[k] = gdjs.TestCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects5.length = k;
for (var i = 0, k = 0, l = gdjs.TestCode.GDFakeCardObjects5.length;i<l;++i) {
    if ( gdjs.TestCode.GDFakeCardObjects5[i].getVariableBoolean(gdjs.TestCode.GDFakeCardObjects5[i].getVariables().get("Picked"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDFakeCardObjects5[k] = gdjs.TestCode.GDFakeCardObjects5[i];
        ++k;
    }
}
gdjs.TestCode.GDFakeCardObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects5.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDCardsObjects5[i].getBehavior("Animation").getAnimationName() == "Backface") ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects5[k] = gdjs.TestCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.raycastObject(gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDSlotObjects5ObjectsGDgdjs_9546TestCode_9546GDCardsObjects5ObjectsGDgdjs_9546TestCode_9546GDFakeCardObjects5Objects, runtimeScene.getScene().getVariables().getFromIndex(1).getChild(gdjs.TestCode.localVariables[1].getFromIndex(0).getAsNumber()).getChild("X").getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardH").getAsNumber() * 20, -90, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardH").getAsNumber() * 20, gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable, false);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects5 */
/* Reuse gdjs.TestCode.GDFakeCardObjects5 */
/* Reuse gdjs.TestCode.GDSlotObjects5 */
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(gdjs.TestCode.localVariables[1].getFromIndex(0).getAsNumber()), (( gdjs.TestCode.GDFakeCardObjects5.length === 0 ) ? (( gdjs.TestCode.GDCardsObjects5.length === 0 ) ? (( gdjs.TestCode.GDSlotObjects5.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects5[0].getPointY("")) :gdjs.TestCode.GDCardsObjects5[0].getPointY("")) :gdjs.TestCode.GDFakeCardObjects5[0].getPointY("")));
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.TestCode.localVariables[1].getFromIndex(0).add(1);
}
}

}


};gdjs.TestCode.eventsList183 = function(runtimeScene) {

{


const repeatCount4 = 7;
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.TestCode.eventsList182(runtimeScene);} //Subevents end.
}
}

}


};gdjs.TestCode.eventsList184 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber());
}
if (isConditionTrue_0) {
{gdjs.TestCode.localVariables[0].getFromIndex(0).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber());
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("One").getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber());
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Many").getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber());
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.TestCode.localVariables[0].getFromIndex(0).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y"));
}
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestCode.eventsList183(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(2).getChild(0).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").setNumber(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber())) - 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(11).getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(false);
}
}

}


};gdjs.TestCode.eventsList185 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("TempZY", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestCode.eventsList184(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


};gdjs.TestCode.eventsList186 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "One");
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList185(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDSlotObjects5ObjectsGDgdjs_9546TestCode_9546GDCardsObjects5ObjectsGDgdjs_9546TestCode_9546GDFakeCardObjects5Objects = Hashtable.newFrom({"Slot": gdjs.TestCode.GDSlotObjects5, "Cards": gdjs.TestCode.GDCardsObjects5, "FakeCard": gdjs.TestCode.GDFakeCardObjects5});
gdjs.TestCode.eventsList187 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects5);
gdjs.copyArray(runtimeScene.getObjects("FakeCard"), gdjs.TestCode.GDFakeCardObjects5);
gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects5.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects5[i].getVariableBoolean(gdjs.TestCode.GDSlotObjects5[i].getVariables().get("Picked"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects5[k] = gdjs.TestCode.GDSlotObjects5[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects5.length = k;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects5[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects5[i].getVariables().get("Picked"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects5[k] = gdjs.TestCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects5.length = k;
for (var i = 0, k = 0, l = gdjs.TestCode.GDFakeCardObjects5.length;i<l;++i) {
    if ( gdjs.TestCode.GDFakeCardObjects5[i].getVariableBoolean(gdjs.TestCode.GDFakeCardObjects5[i].getVariables().get("Picked"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDFakeCardObjects5[k] = gdjs.TestCode.GDFakeCardObjects5[i];
        ++k;
    }
}
gdjs.TestCode.GDFakeCardObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.raycastObject(gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDSlotObjects5ObjectsGDgdjs_9546TestCode_9546GDCardsObjects5ObjectsGDgdjs_9546TestCode_9546GDFakeCardObjects5Objects, runtimeScene.getScene().getVariables().getFromIndex(1).getChild(gdjs.TestCode.localVariables[1].getFromIndex(0).getAsNumber()).getChild("X").getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardH").getAsNumber() * 20, -90, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardH").getAsNumber() * 20, gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects5 */
/* Reuse gdjs.TestCode.GDFakeCardObjects5 */
/* Reuse gdjs.TestCode.GDSlotObjects5 */
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(gdjs.TestCode.localVariables[1].getFromIndex(0).getAsNumber()), (( gdjs.TestCode.GDFakeCardObjects5.length === 0 ) ? (( gdjs.TestCode.GDCardsObjects5.length === 0 ) ? (( gdjs.TestCode.GDSlotObjects5.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects5[0].getPointY("")) :gdjs.TestCode.GDCardsObjects5[0].getPointY("")) :gdjs.TestCode.GDFakeCardObjects5[0].getPointY("")));
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.TestCode.localVariables[1].getFromIndex(0).add(1);
}
}

}


};gdjs.TestCode.eventsList188 = function(runtimeScene) {

{


const repeatCount4 = 7;
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.TestCode.eventsList187(runtimeScene);} //Subevents end.
}
}

}


};gdjs.TestCode.eventsList189 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber());
}
if (isConditionTrue_0) {
{gdjs.TestCode.localVariables[0].getFromIndex(0).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber());
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("One").getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber());
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Many").getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber());
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.TestCode.localVariables[0].getFromIndex(0).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y"));
}
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestCode.eventsList188(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").setNumber(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber())) - 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(false);
}
}

}


};gdjs.TestCode.eventsList190 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("TempZY", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestCode.eventsList189(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


};gdjs.TestCode.eventsList191 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Many");
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList190(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDCardsObjects5Objects = Hashtable.newFrom({"Cards": gdjs.TestCode.GDCardsObjects5});
gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDCardsObjects5Objects = Hashtable.newFrom({"Cards": gdjs.TestCode.GDCardsObjects5});
gdjs.TestCode.eventsList192 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects5);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects5[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(4), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects5[k] = gdjs.TestCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects5.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDCardsObjects5[i].getBehavior("Animation").getAnimationName() == "Backface") ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects5[k] = gdjs.TestCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.raycastObject(gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDCardsObjects5Objects, runtimeScene.getScene().getVariables().getFromIndex(1).getChild(gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber()).getChild("X").getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardH").getAsNumber() * 20, -90, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardH").getAsNumber() * 20, gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable, false);
}
}
if (isConditionTrue_0) {
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects5);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects5[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(4), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects5[k] = gdjs.TestCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects5.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects5[i].getBehavior("Animation").getAnimationName() == "Backface" ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects5[k] = gdjs.TestCode.GDCardsObjects5[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.raycastObject(gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDCardsObjects5Objects, runtimeScene.getScene().getVariables().getFromIndex(1).getChild(gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber()).getChild("X").getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardH").getAsNumber() * 20, -90, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardH").getAsNumber() * 20, gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable, false);
}
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects5 */
{gdjs.TestCode.localVariables[0].getFromIndex(1).setNumber((( gdjs.TestCode.GDCardsObjects5.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects5[0].getPointX("")));
}
{gdjs.TestCode.localVariables[0].getFromIndex(2).setNumber((( gdjs.TestCode.GDCardsObjects5.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects5[0].getPointY("")));
}
{gdjs.TestCode.localVariables[0].getFromIndex(3).setBoolean(true);
}
elseEventsChainSatisfied = true;
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.TestCode.localVariables[0].getFromIndex(0).add(1);
}
}

}

}

};gdjs.TestCode.asyncCallback25567924 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.TestCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Cards"), gdjs.TestCode.GDCardsObjects5);

{for(var i = 0, len = gdjs.TestCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects5[i].setPosition(gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(2).getAsNumber(),gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(3).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects5.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects5[i].returnVariable(gdjs.TestCode.GDCardsObjects5[i].getVariables().getFromIndex(11)).setBoolean(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).sub(1);
}
gdjs.TestCode.localVariables.length = 0;
}
gdjs.TestCode.idToCallbackMap.set(25567924, gdjs.TestCode.asyncCallback25567924);
gdjs.TestCode.eventsList193 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.TestCode.localVariables);
for (const obj of gdjs.TestCode.GDCardsObjects4) asyncObjectsList.addObject("Cards", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(gdjs.TestCode.localVariables[1].getFromIndex(0).getAsNumber() + 0.05), (runtimeScene) => (gdjs.TestCode.asyncCallback25567924(runtimeScene, asyncObjectsList)), 25567924, asyncObjectsList);
}
}

}


};gdjs.TestCode.asyncCallback25566780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.TestCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Cards"), gdjs.TestCode.GDCardsObjects4);

{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].getBehavior("Animation").setAnimationIndex(1 + gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(0).getAsNumber() + (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("SelectedSkin").getAsNumber() * 4));
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].returnVariable(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(6)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].setAnimationFrame(gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].getBehavior("Tween").addObjectPositionTween2("RevealLeft", gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(2).getAsNumber(), gdjs.TestCode.GDCardsObjects4[i].getVariables().getFromIndex(3).getAsNumber(), "linear", gdjs.TestCode.localVariables[1].getFromIndex(0).getAsNumber(), false);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects4.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects4[i].getBehavior("Tween").addObjectWidthTween2("RevealWidth", runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardW").getAsNumber(), "linear", gdjs.TestCode.localVariables[1].getFromIndex(0).getAsNumber(), false);
}
}

{ //Subevents
gdjs.TestCode.eventsList193(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.TestCode.localVariables.length = 0;
}
gdjs.TestCode.idToCallbackMap.set(25566780, gdjs.TestCode.asyncCallback25566780);
gdjs.TestCode.eventsList194 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.TestCode.localVariables);
for (const obj of gdjs.TestCode.GDCardsObjects3) asyncObjectsList.addObject("Cards", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(gdjs.TestCode.localVariables[1].getFromIndex(0).getAsNumber() + 0.01), (runtimeScene) => (gdjs.TestCode.asyncCallback25566780(runtimeScene, asyncObjectsList)), 25566780, asyncObjectsList);
}
}

}


};gdjs.TestCode.eventsList195 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getX() == gdjs.TestCode.localVariables[0].getFromIndex(1).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getY() == gdjs.TestCode.localVariables[0].getFromIndex(2).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects3 */
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(2)).setNumber(gdjs.TestCode.localVariables[0].getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].returnVariable(gdjs.TestCode.GDCardsObjects3[i].getVariables().getFromIndex(3)).setNumber(gdjs.TestCode.localVariables[0].getFromIndex(2).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).add(1);
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].getBehavior("Tween").addObjectPositionTween2("RevealRight", (gdjs.TestCode.GDCardsObjects3[i].getPointX("")) + gdjs.TestCode.localVariables[1].getFromIndex(1).getAsNumber(), (gdjs.TestCode.GDCardsObjects3[i].getPointY("")) + gdjs.TestCode.localVariables[1].getFromIndex(2).getAsNumber(), "linear", gdjs.TestCode.localVariables[1].getFromIndex(0).getAsNumber(), false);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].getBehavior("Tween").addObjectWidthTween2("RevealWidth", 0, "linear", gdjs.TestCode.localVariables[1].getFromIndex(0).getAsNumber(), false);
}
}

{ //Subevents
gdjs.TestCode.eventsList194(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDCardsObjects2Objects = Hashtable.newFrom({"Cards": gdjs.TestCode.GDCardsObjects2});
gdjs.TestCode.eventsList196 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Speed", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("OffsetX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("OffsetY", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{gdjs.TestCode.localVariables[1].getFromIndex(1).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardW").getAsNumber() * 1.2);
}
{gdjs.TestCode.localVariables[1].getFromIndex(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardH").getAsNumber() / 4);
}
{gdjs.TestCode.localVariables[1].getFromIndex(0).setNumber(0.1);
}

{ //Subevents
gdjs.TestCode.eventsList195(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
{
gdjs.TestCode.GDCardsObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDCardsObjects2Objects, gdjs.TestCode.localVariables[0].getFromIndex(1).getAsNumber(), gdjs.TestCode.localVariables[0].getFromIndex(2).getAsNumber(), "");
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects2[i].returnVariable(gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(0)).setNumber(-2);
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects2[i].returnVariable(gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(1)).setNumber(-2);
}
}
}

}


};gdjs.TestCode.eventsList197 = function(runtimeScene) {

{


const repeatCount4 = 7;
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.TestCode.eventsList192(runtimeScene);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = gdjs.TestCode.localVariables[0].getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList196(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList198 = function(runtimeScene) {

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
variables._declare("TempX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("TempY", variable);
}
{
const variable = new gdjs.Variable();
variable.setBoolean(false);
variables._declare("CreateCard", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestCode.eventsList197(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


};gdjs.TestCode.eventsList199 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Empty");
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList198(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList200 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects5.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects5[i].getVariableNumber(gdjs.TestCode.GDSlotObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects5[k] = gdjs.TestCode.GDSlotObjects5[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDSlotObjects5 */
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("Y").getChild(0), (( gdjs.TestCode.GDSlotObjects5.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects5[0].getPointY("")));
}
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("Y").getChild(2), 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects4.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects4[i].getVariableNumber(gdjs.TestCode.GDSlotObjects4[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects4[k] = gdjs.TestCode.GDSlotObjects4[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDSlotObjects4 */
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("Y").getChild(1), (( gdjs.TestCode.GDSlotObjects4.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects4[0].getPointY("")));
}
}

}


};gdjs.TestCode.eventsList201 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects6);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects6.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects6[i].isCollidingWithPoint(runtimeScene.getScene().getVariables().getFromIndex(1).getChild(3 + gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber()).getChild("X").getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getChild(3 + gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber()).getChild("Y").getAsNumber()) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects6[k] = gdjs.TestCode.GDCardsObjects6[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects6.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects6 */
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("Y").getChild(3 + gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber()), (( gdjs.TestCode.GDCardsObjects6.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects6[0].getPointY("")));
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("Y").getChild(3 + gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber()), 0);
}
elseEventsChainSatisfied = true;
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.TestCode.localVariables[0].getFromIndex(0).add(1);
}
}

}

}

};gdjs.TestCode.eventsList202 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.TestCode.localVariables[0].getFromIndex(0).setNumber(0);
}
}

}


{


const repeatCount5 = 4;
for (let repeatIndex5 = 0;repeatIndex5 < repeatCount5;++repeatIndex5) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.TestCode.eventsList201(runtimeScene);} //Subevents end.
}
}

}


};gdjs.TestCode.eventsList203 = function(runtimeScene) {

};gdjs.TestCode.eventsList204 = function(runtimeScene) {

{

/* Reuse gdjs.TestCode.GDCardsObjects6 */

gdjs.TestCode.forEachObjects7.length = 0;
gdjs.TestCode.forEachObjects7.push.apply(gdjs.TestCode.forEachObjects7,gdjs.TestCode.GDCardsObjects6);
gdjs.TestCode.forEachTotalCount7 = gdjs.TestCode.forEachObjects7.length;
gdjs.TestCode.forEachSortKeys7.length = 0;
for (gdjs.TestCode.forEachIndex7 = 0;gdjs.TestCode.forEachIndex7 < gdjs.TestCode.forEachTotalCount7;++gdjs.TestCode.forEachIndex7) {
gdjs.TestCode.GDCardsObjects7.length = 0;


gdjs.TestCode.GDCardsObjects7.push(gdjs.TestCode.forEachObjects7[gdjs.TestCode.forEachIndex7]);
gdjs.TestCode.forEachSortKeys7.push((( gdjs.TestCode.GDCardsObjects7.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects7[0].getPointY("")));
}
gdjs.TestCode.forEachSorted7.length = 0;
for (gdjs.TestCode.forEachIndex7 = 0;gdjs.TestCode.forEachIndex7 < gdjs.TestCode.forEachTotalCount7;++gdjs.TestCode.forEachIndex7) gdjs.TestCode.forEachSorted7.push(gdjs.TestCode.forEachIndex7);
gdjs.TestCode.forEachSorted7.sort(function(a, b) { return false ? gdjs.TestCode.forEachSortKeys7[b] - gdjs.TestCode.forEachSortKeys7[a] : gdjs.TestCode.forEachSortKeys7[a] - gdjs.TestCode.forEachSortKeys7[b]; });
for (gdjs.TestCode.forEachIndex7 = 0;gdjs.TestCode.forEachIndex7 < gdjs.TestCode.forEachSorted7.length;++gdjs.TestCode.forEachIndex7) {
gdjs.TestCode.GDCardsObjects7.length = 0;


gdjs.TestCode.forEachTemporary7 = gdjs.TestCode.forEachObjects7[gdjs.TestCode.forEachSorted7[gdjs.TestCode.forEachIndex7]];
gdjs.TestCode.GDCardsObjects7.push(gdjs.TestCode.forEachTemporary7);
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("Y").getChild(gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber()), (( gdjs.TestCode.GDCardsObjects7.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects7[0].getPointY("")));
}
}
}

}


};gdjs.TestCode.eventsList205 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects6);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects6.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDCardsObjects6[i].getBehavior("Animation").getAnimationName() == "Backface") ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects6[k] = gdjs.TestCode.GDCardsObjects6[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects6.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects6[i].getX() == runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("X").getChild(gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber()).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects6[k] = gdjs.TestCode.GDCardsObjects6[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects6.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects6[i].getY() > runtimeScene.getScene().getVariables().getFromIndex(1).getChild(0).getChild("Y").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects6[k] = gdjs.TestCode.GDCardsObjects6[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects6.length = k;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList204(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects6);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects6.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects6[i].getVariableNumber(gdjs.TestCode.GDSlotObjects6[i].getVariables().getFromIndex(0)) == 7 + gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects6[k] = gdjs.TestCode.GDSlotObjects6[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects6.length = k;
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDSlotObjects6 */
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("Y").getChild(gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber()), (( gdjs.TestCode.GDSlotObjects6.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects6[0].getPointY("")));
}
elseEventsChainSatisfied = true;
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.TestCode.localVariables[0].getFromIndex(0).add(1);
}
}

}

}

};gdjs.TestCode.eventsList206 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.TestCode.localVariables[0].getFromIndex(0).setNumber(0);
}
}

}


{


const repeatCount5 = 7;
for (let repeatIndex5 = 0;repeatIndex5 < repeatCount5;++repeatIndex5) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.TestCode.eventsList205(runtimeScene);} //Subevents end.
}
}

}


};gdjs.TestCode.eventsList207 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.TestCode.localVariables[0].getFromIndex(1).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber());
}
{gdjs.TestCode.localVariables[0].getFromIndex(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("One").getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber());
}
{gdjs.TestCode.localVariables[0].getFromIndex(3).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Many").getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("Y"));
}
}

}


{


gdjs.TestCode.eventsList200(runtimeScene);
}


{


gdjs.TestCode.eventsList202(runtimeScene);
}


{


gdjs.TestCode.eventsList206(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (gdjs.TestCode.localVariables[0].getFromIndex(1).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber());
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (gdjs.TestCode.localVariables[0].getFromIndex(2).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber());
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (gdjs.TestCode.localVariables[0].getFromIndex(3).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(1).getChild(7).getChild("Y").getAsNumber());
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").setNumber(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Empty").getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber())) - 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(11).getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setBoolean(false);
}
}

}


};gdjs.TestCode.eventsList208 = function(runtimeScene) {

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
variables._declare("Y0", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Y1", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Y2", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestCode.eventsList207(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects3[i].getBehavior("Opacity").getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects3[k] = gdjs.TestCode.GDCardsObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects3 */
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(false);
}
}

}


};gdjs.TestCode.eventsList209 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() == "Empty");
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList208(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList210 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandPickedOffsetY").setNumber((runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardH").getAsNumber() / 2));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandPickedOffsetY").setNumber((runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardH").getAsNumber() / 1.2) + (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardOffsetY").getAsNumber()));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(4), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDCardsObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Hand"), gdjs.TestCode.GDHandObjects2);
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects2[i].setPosition((( gdjs.TestCode.GDHandObjects2.length === 0 ) ? 0 :gdjs.TestCode.GDHandObjects2[0].getPointX("")) - (gdjs.TestCode.GDCardsObjects2[i].getWidth()) / 2.2,(( gdjs.TestCode.GDHandObjects2.length === 0 ) ? 0 :gdjs.TestCode.GDHandObjects2[0].getPointY("")) - (gdjs.TestCode.GDCardsObjects2[i].getHeight()) / 2 - (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardOffsetY").getAsNumber() * gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(9).getAsNumber() - 1));
}
}
}

}


};gdjs.TestCode.eventsList211 = function(runtimeScene) {

};gdjs.TestCode.eventsList212 = function(runtimeScene) {

{

/* Reuse gdjs.TestCode.GDCardsObjects2 */

for (gdjs.TestCode.forEachIndex3 = 0;gdjs.TestCode.forEachIndex3 < gdjs.TestCode.GDCardsObjects2.length;++gdjs.TestCode.forEachIndex3) {
gdjs.TestCode.GDCardsObjects3.length = 0;


gdjs.TestCode.forEachTemporary3 = gdjs.TestCode.GDCardsObjects2[gdjs.TestCode.forEachIndex3];
gdjs.TestCode.GDCardsObjects3.push(gdjs.TestCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{gdjs.TestCode.localVariables[0].getFromIndex(0).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild(1).getChild("Z").setNumber(gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber() + 1);
}
}
}

}


};gdjs.TestCode.eventsList213 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects2[i].getVariableNumber(gdjs.TestCode.GDSlotObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects2[k] = gdjs.TestCode.GDSlotObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(4), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getX() == (( gdjs.TestCode.GDSlotObjects2.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects2[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getY() == (( gdjs.TestCode.GDSlotObjects2.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects2[0].getPointY("")) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList212(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList214 = function(runtimeScene) {

};gdjs.TestCode.eventsList215 = function(runtimeScene) {

{

/* Reuse gdjs.TestCode.GDCardsObjects2 */

for (gdjs.TestCode.forEachIndex3 = 0;gdjs.TestCode.forEachIndex3 < gdjs.TestCode.GDCardsObjects2.length;++gdjs.TestCode.forEachIndex3) {
gdjs.copyArray(gdjs.TestCode.GDSlotObjects2, gdjs.TestCode.GDSlotObjects3);

gdjs.TestCode.GDCardsObjects3.length = 0;


gdjs.TestCode.forEachTemporary3 = gdjs.TestCode.GDCardsObjects2[gdjs.TestCode.forEachIndex3];
gdjs.TestCode.GDCardsObjects3.push(gdjs.TestCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{gdjs.TestCode.localVariables[0].getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.TestCode.GDSlotObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDSlotObjects3[i].returnVariable(gdjs.TestCode.GDSlotObjects3[i].getVariables().getFromIndex(2)).setNumber(gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].setZOrder((gdjs.TestCode.GDCardsObjects3[i].getAnimationFrame()) + 1);
}
}
}
}

}


};gdjs.TestCode.eventsList216 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects2[i].getVariableNumber(gdjs.TestCode.GDSlotObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects2[k] = gdjs.TestCode.GDSlotObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(4), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getX() == (( gdjs.TestCode.GDSlotObjects2.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects2[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getY() == (( gdjs.TestCode.GDSlotObjects2.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects2[0].getPointY("")) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList215(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList217 = function(runtimeScene) {

};gdjs.TestCode.eventsList218 = function(runtimeScene) {

{

/* Reuse gdjs.TestCode.GDCardsObjects2 */

for (gdjs.TestCode.forEachIndex3 = 0;gdjs.TestCode.forEachIndex3 < gdjs.TestCode.GDCardsObjects2.length;++gdjs.TestCode.forEachIndex3) {
gdjs.copyArray(gdjs.TestCode.GDSlotObjects2, gdjs.TestCode.GDSlotObjects3);

gdjs.TestCode.GDCardsObjects3.length = 0;


gdjs.TestCode.forEachTemporary3 = gdjs.TestCode.GDCardsObjects2[gdjs.TestCode.forEachIndex3];
gdjs.TestCode.GDCardsObjects3.push(gdjs.TestCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{gdjs.TestCode.localVariables[0].getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.TestCode.GDSlotObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDSlotObjects3[i].returnVariable(gdjs.TestCode.GDSlotObjects3[i].getVariables().getFromIndex(2)).setNumber(gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].setZOrder((gdjs.TestCode.GDCardsObjects3[i].getAnimationFrame()) + 1);
}
}
}
}

}


};gdjs.TestCode.eventsList219 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects2[i].getVariableNumber(gdjs.TestCode.GDSlotObjects2[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects2[k] = gdjs.TestCode.GDSlotObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(4), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getX() == (( gdjs.TestCode.GDSlotObjects2.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects2[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getY() == (( gdjs.TestCode.GDSlotObjects2.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects2[0].getPointY("")) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList218(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList220 = function(runtimeScene) {

};gdjs.TestCode.eventsList221 = function(runtimeScene) {

{

/* Reuse gdjs.TestCode.GDCardsObjects2 */

for (gdjs.TestCode.forEachIndex3 = 0;gdjs.TestCode.forEachIndex3 < gdjs.TestCode.GDCardsObjects2.length;++gdjs.TestCode.forEachIndex3) {
gdjs.copyArray(gdjs.TestCode.GDSlotObjects2, gdjs.TestCode.GDSlotObjects3);

gdjs.TestCode.GDCardsObjects3.length = 0;


gdjs.TestCode.forEachTemporary3 = gdjs.TestCode.GDCardsObjects2[gdjs.TestCode.forEachIndex3];
gdjs.TestCode.GDCardsObjects3.push(gdjs.TestCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{gdjs.TestCode.localVariables[0].getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.TestCode.GDSlotObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDSlotObjects3[i].returnVariable(gdjs.TestCode.GDSlotObjects3[i].getVariables().getFromIndex(2)).setNumber(gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects3[i].setZOrder((gdjs.TestCode.GDCardsObjects3[i].getAnimationFrame()) + 1);
}
}
}
}

}


};gdjs.TestCode.eventsList222 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects2[i].getVariableNumber(gdjs.TestCode.GDSlotObjects2[i].getVariables().getFromIndex(0)) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects2[k] = gdjs.TestCode.GDSlotObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects2[i].getVariables().getFromIndex(4), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getX() == (( gdjs.TestCode.GDSlotObjects2.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects2[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects2[i].getY() == (( gdjs.TestCode.GDSlotObjects2.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects2[0].getPointY("")) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects2[k] = gdjs.TestCode.GDCardsObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects2.length = k;
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList221(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList223 = function(runtimeScene) {

};gdjs.TestCode.eventsList224 = function(runtimeScene) {

{

/* Reuse gdjs.TestCode.GDCardsObjects1 */

for (gdjs.TestCode.forEachIndex2 = 0;gdjs.TestCode.forEachIndex2 < gdjs.TestCode.GDCardsObjects1.length;++gdjs.TestCode.forEachIndex2) {
gdjs.copyArray(gdjs.TestCode.GDSlotObjects1, gdjs.TestCode.GDSlotObjects2);

gdjs.TestCode.GDCardsObjects2.length = 0;


gdjs.TestCode.forEachTemporary2 = gdjs.TestCode.GDCardsObjects1[gdjs.TestCode.forEachIndex2];
gdjs.TestCode.GDCardsObjects2.push(gdjs.TestCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{gdjs.TestCode.localVariables[0].getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.TestCode.GDSlotObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDSlotObjects2[i].returnVariable(gdjs.TestCode.GDSlotObjects2[i].getVariables().getFromIndex(2)).setNumber(gdjs.TestCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.TestCode.GDCardsObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDCardsObjects2[i].setZOrder((gdjs.TestCode.GDCardsObjects2[i].getAnimationFrame()) + 1);
}
}
}
}

}


};gdjs.TestCode.eventsList225 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects1[i].getVariableNumber(gdjs.TestCode.GDSlotObjects1[i].getVariables().getFromIndex(0)) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects1[k] = gdjs.TestCode.GDSlotObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects1[i].getVariableBoolean(gdjs.TestCode.GDCardsObjects1[i].getVariables().getFromIndex(4), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects1[k] = gdjs.TestCode.GDCardsObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects1[i].getX() == (( gdjs.TestCode.GDSlotObjects1.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects1[k] = gdjs.TestCode.GDCardsObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDCardsObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDCardsObjects1[i].getY() == (( gdjs.TestCode.GDSlotObjects1.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects1[0].getPointY("")) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDCardsObjects1[k] = gdjs.TestCode.GDCardsObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDCardsObjects1.length = k;
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList224(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList226 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestCode.eventsList213(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestCode.eventsList216(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestCode.eventsList219(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestCode.eventsList222(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Adv", variable);
}
gdjs.TestCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TestCode.eventsList225(runtimeScene);} //End of subevents
}
gdjs.TestCode.localVariables.pop();

}


};gdjs.TestCode.eventsList227 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button1").getAsNumber() == 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button5").getAsNumber() == 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button7").getAsNumber() == 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Button9").getAsNumber() == 2);
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
gdjs.TestCode.eventsList226(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList228 = function(runtimeScene) {

{


gdjs.TestCode.eventsList161(runtimeScene);
}


{


gdjs.TestCode.eventsList165(runtimeScene);
}


{


gdjs.TestCode.eventsList176(runtimeScene);
}


{


gdjs.TestCode.eventsList179(runtimeScene);
}


{


gdjs.TestCode.eventsList181(runtimeScene);
}


{


gdjs.TestCode.eventsList186(runtimeScene);
}


{


gdjs.TestCode.eventsList191(runtimeScene);
}


{


gdjs.TestCode.eventsList199(runtimeScene);
}


{


gdjs.TestCode.eventsList209(runtimeScene);
}


{


gdjs.TestCode.eventsList210(runtimeScene);
}


{


gdjs.TestCode.eventsList227(runtimeScene);
}


};gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDHandObjects3Objects = Hashtable.newFrom({"Hand": gdjs.TestCode.GDHandObjects3});
gdjs.TestCode.eventsList229 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects3.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects3[i].getVariableNumber(gdjs.TestCode.GDSlotObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects3[k] = gdjs.TestCode.GDSlotObjects3[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cards"), gdjs.TestCode.GDCardsObjects3);
/* Reuse gdjs.TestCode.GDSlotObjects3 */
gdjs.TestCode.GDHandObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.TestCode.mapOfGDgdjs_9546TestCode_9546GDHandObjects3Objects, (( gdjs.TestCode.GDSlotObjects3.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects3[0].getCenterXInScene()), (( gdjs.TestCode.GDSlotObjects3.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects3[0].getCenterYInScene()), "");
}
{for(var i = 0, len = gdjs.TestCode.GDHandObjects3.length ;i < len;++i) {
    gdjs.TestCode.GDHandObjects3[i].setZOrder((( gdjs.TestCode.GDCardsObjects3.length === 0 ) ? 0 :gdjs.TestCode.GDCardsObjects3[0].getHeight()) * 40);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slot"), gdjs.TestCode.GDSlotObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDSlotObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDSlotObjects2[i].getVariableNumber(gdjs.TestCode.GDSlotObjects2[i].getVariables().getFromIndex(0)) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDSlotObjects2[k] = gdjs.TestCode.GDSlotObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDSlotObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hand"), gdjs.TestCode.GDHandObjects2);
/* Reuse gdjs.TestCode.GDSlotObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDHandObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDHandObjects2[i].getBehavior("Tween").addObjectPositionTween2("Move", (( gdjs.TestCode.GDSlotObjects2.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects2[0].getCenterXInScene()), (( gdjs.TestCode.GDSlotObjects2.length === 0 ) ? 0 :gdjs.TestCode.GDSlotObjects2[0].getCenterYInScene()), "linear", 0.2, false);
}
}
}

}


};gdjs.TestCode.eventsList230 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.TestCode.GDHandObjects1, gdjs.TestCode.GDHandObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDHandObjects2.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDHandObjects2[i].getBehavior("Tween").isPlaying("Down")) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDHandObjects2[k] = gdjs.TestCode.GDHandObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDHandObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25613004);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDHandObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDHandObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDHandObjects2[i].getBehavior("Tween").addObjectPositionTween2("Up", runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CurrentPosX").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardW").getAsNumber() / 2, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CurrentPosY").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardH").getAsNumber() / 4 + runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandPickedOffsetY").getAsNumber(), "linear", 0.5, false);
}
}
}

}


{

/* Reuse gdjs.TestCode.GDHandObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDHandObjects1.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDHandObjects1[i].getBehavior("Tween").isPlaying("Up")) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDHandObjects1[k] = gdjs.TestCode.GDHandObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDHandObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(25614244);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDHandObjects1 */
{for(var i = 0, len = gdjs.TestCode.GDHandObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDHandObjects1[i].getBehavior("Tween").addObjectPositionTween2("Down", runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CurrentPosX").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardW").getAsNumber() / 2, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CurrentPosY").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandPickedOffsetY").getAsNumber(), "linear", 0.5, false);
}
}
}

}


};gdjs.TestCode.eventsList231 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").setNumber(1);
}

{ //Subevents
gdjs.TestCode.eventsList229(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CurrentPosX").setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CurrentPosY").setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = !(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("PreviousX").getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber());
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = !(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("PreviousY").getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber());
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = !(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandPreviousCardsCount").getAsNumber());
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hand"), gdjs.TestCode.GDHandObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("PreviousX").setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("PreviousY").setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandPreviousCardsCount").setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandCardsCount").getAsNumber());
}
{for(var i = 0, len = gdjs.TestCode.GDHandObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDHandObjects2[i].getBehavior("Tween").removeTween("Down");
}
}
{for(var i = 0, len = gdjs.TestCode.GDHandObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDHandObjects2[i].getBehavior("Tween").removeTween("Up");
}
}
{for(var i = 0, len = gdjs.TestCode.GDHandObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDHandObjects2[i].getBehavior("Tween").addObjectPositionTween2("Move", runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CurrentPosX").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CardW").getAsNumber() / 2, runtimeScene.getScene().getVariables().getFromIndex(2).getChild("CurrentPosY").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(2).getChild("HandPickedOffsetY").getAsNumber(), "linear", 0.1, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hand"), gdjs.TestCode.GDHandObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDHandObjects1.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDHandObjects1[i].getBehavior("Tween").isPlaying("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDHandObjects1[k] = gdjs.TestCode.GDHandObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDHandObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.TestCode.eventsList230(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList232 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


gdjs.TestCode.eventsList5(runtimeScene);
}


{


gdjs.TestCode.eventsList10(runtimeScene);
}


{


gdjs.TestCode.eventsList25(runtimeScene);
}


{


gdjs.TestCode.eventsList29(runtimeScene);
}


{


gdjs.TestCode.eventsList54(runtimeScene);
}


{


gdjs.TestCode.eventsList56(runtimeScene);
}


{


gdjs.TestCode.eventsList67(runtimeScene);
}


{


gdjs.TestCode.eventsList86(runtimeScene);
}


{


gdjs.TestCode.eventsList160(runtimeScene);
}


{


gdjs.TestCode.eventsList228(runtimeScene);
}


{


gdjs.TestCode.eventsList231(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FakeCard"), gdjs.TestCode.GDFakeCardObjects1);
{for(var i = 0, len = gdjs.TestCode.GDFakeCardObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDFakeCardObjects1[i].hide();
}
}
}

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("X").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(1).getChild("X").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString()).getChild("Y").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("X").getAsNumber()).getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Y").getAsNumber()).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getChild(1).getChild("Y").getAsNumber());
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hand"), gdjs.TestCode.GDHandObjects1);
{for(var i = 0, len = gdjs.TestCode.GDHandObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDHandObjects1[i].getBehavior("Opacity").setOpacity(100);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("Hand"), gdjs.TestCode.GDHandObjects1);
{for(var i = 0, len = gdjs.TestCode.GDHandObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDHandObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};

gdjs.TestCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TestCode.GDHandObjects1.length = 0;
gdjs.TestCode.GDHandObjects2.length = 0;
gdjs.TestCode.GDHandObjects3.length = 0;
gdjs.TestCode.GDHandObjects4.length = 0;
gdjs.TestCode.GDHandObjects5.length = 0;
gdjs.TestCode.GDHandObjects6.length = 0;
gdjs.TestCode.GDHandObjects7.length = 0;
gdjs.TestCode.GDHandObjects8.length = 0;
gdjs.TestCode.GDTextObjects1.length = 0;
gdjs.TestCode.GDTextObjects2.length = 0;
gdjs.TestCode.GDTextObjects3.length = 0;
gdjs.TestCode.GDTextObjects4.length = 0;
gdjs.TestCode.GDTextObjects5.length = 0;
gdjs.TestCode.GDTextObjects6.length = 0;
gdjs.TestCode.GDTextObjects7.length = 0;
gdjs.TestCode.GDTextObjects8.length = 0;
gdjs.TestCode.GDBackgroundObjects1.length = 0;
gdjs.TestCode.GDBackgroundObjects2.length = 0;
gdjs.TestCode.GDBackgroundObjects3.length = 0;
gdjs.TestCode.GDBackgroundObjects4.length = 0;
gdjs.TestCode.GDBackgroundObjects5.length = 0;
gdjs.TestCode.GDBackgroundObjects6.length = 0;
gdjs.TestCode.GDBackgroundObjects7.length = 0;
gdjs.TestCode.GDBackgroundObjects8.length = 0;
gdjs.TestCode.GDSlotObjects1.length = 0;
gdjs.TestCode.GDSlotObjects2.length = 0;
gdjs.TestCode.GDSlotObjects3.length = 0;
gdjs.TestCode.GDSlotObjects4.length = 0;
gdjs.TestCode.GDSlotObjects5.length = 0;
gdjs.TestCode.GDSlotObjects6.length = 0;
gdjs.TestCode.GDSlotObjects7.length = 0;
gdjs.TestCode.GDSlotObjects8.length = 0;
gdjs.TestCode.GDButtonObjects1.length = 0;
gdjs.TestCode.GDButtonObjects2.length = 0;
gdjs.TestCode.GDButtonObjects3.length = 0;
gdjs.TestCode.GDButtonObjects4.length = 0;
gdjs.TestCode.GDButtonObjects5.length = 0;
gdjs.TestCode.GDButtonObjects6.length = 0;
gdjs.TestCode.GDButtonObjects7.length = 0;
gdjs.TestCode.GDButtonObjects8.length = 0;
gdjs.TestCode.GDCardsObjects1.length = 0;
gdjs.TestCode.GDCardsObjects2.length = 0;
gdjs.TestCode.GDCardsObjects3.length = 0;
gdjs.TestCode.GDCardsObjects4.length = 0;
gdjs.TestCode.GDCardsObjects5.length = 0;
gdjs.TestCode.GDCardsObjects6.length = 0;
gdjs.TestCode.GDCardsObjects7.length = 0;
gdjs.TestCode.GDCardsObjects8.length = 0;
gdjs.TestCode.GDFakeCardObjects1.length = 0;
gdjs.TestCode.GDFakeCardObjects2.length = 0;
gdjs.TestCode.GDFakeCardObjects3.length = 0;
gdjs.TestCode.GDFakeCardObjects4.length = 0;
gdjs.TestCode.GDFakeCardObjects5.length = 0;
gdjs.TestCode.GDFakeCardObjects6.length = 0;
gdjs.TestCode.GDFakeCardObjects7.length = 0;
gdjs.TestCode.GDFakeCardObjects8.length = 0;

gdjs.TestCode.eventsList232(runtimeScene);
gdjs.TestCode.GDHandObjects1.length = 0;
gdjs.TestCode.GDHandObjects2.length = 0;
gdjs.TestCode.GDHandObjects3.length = 0;
gdjs.TestCode.GDHandObjects4.length = 0;
gdjs.TestCode.GDHandObjects5.length = 0;
gdjs.TestCode.GDHandObjects6.length = 0;
gdjs.TestCode.GDHandObjects7.length = 0;
gdjs.TestCode.GDHandObjects8.length = 0;
gdjs.TestCode.GDTextObjects1.length = 0;
gdjs.TestCode.GDTextObjects2.length = 0;
gdjs.TestCode.GDTextObjects3.length = 0;
gdjs.TestCode.GDTextObjects4.length = 0;
gdjs.TestCode.GDTextObjects5.length = 0;
gdjs.TestCode.GDTextObjects6.length = 0;
gdjs.TestCode.GDTextObjects7.length = 0;
gdjs.TestCode.GDTextObjects8.length = 0;
gdjs.TestCode.GDBackgroundObjects1.length = 0;
gdjs.TestCode.GDBackgroundObjects2.length = 0;
gdjs.TestCode.GDBackgroundObjects3.length = 0;
gdjs.TestCode.GDBackgroundObjects4.length = 0;
gdjs.TestCode.GDBackgroundObjects5.length = 0;
gdjs.TestCode.GDBackgroundObjects6.length = 0;
gdjs.TestCode.GDBackgroundObjects7.length = 0;
gdjs.TestCode.GDBackgroundObjects8.length = 0;
gdjs.TestCode.GDSlotObjects1.length = 0;
gdjs.TestCode.GDSlotObjects2.length = 0;
gdjs.TestCode.GDSlotObjects3.length = 0;
gdjs.TestCode.GDSlotObjects4.length = 0;
gdjs.TestCode.GDSlotObjects5.length = 0;
gdjs.TestCode.GDSlotObjects6.length = 0;
gdjs.TestCode.GDSlotObjects7.length = 0;
gdjs.TestCode.GDSlotObjects8.length = 0;
gdjs.TestCode.GDButtonObjects1.length = 0;
gdjs.TestCode.GDButtonObjects2.length = 0;
gdjs.TestCode.GDButtonObjects3.length = 0;
gdjs.TestCode.GDButtonObjects4.length = 0;
gdjs.TestCode.GDButtonObjects5.length = 0;
gdjs.TestCode.GDButtonObjects6.length = 0;
gdjs.TestCode.GDButtonObjects7.length = 0;
gdjs.TestCode.GDButtonObjects8.length = 0;
gdjs.TestCode.GDCardsObjects1.length = 0;
gdjs.TestCode.GDCardsObjects2.length = 0;
gdjs.TestCode.GDCardsObjects3.length = 0;
gdjs.TestCode.GDCardsObjects4.length = 0;
gdjs.TestCode.GDCardsObjects5.length = 0;
gdjs.TestCode.GDCardsObjects6.length = 0;
gdjs.TestCode.GDCardsObjects7.length = 0;
gdjs.TestCode.GDCardsObjects8.length = 0;
gdjs.TestCode.GDFakeCardObjects1.length = 0;
gdjs.TestCode.GDFakeCardObjects2.length = 0;
gdjs.TestCode.GDFakeCardObjects3.length = 0;
gdjs.TestCode.GDFakeCardObjects4.length = 0;
gdjs.TestCode.GDFakeCardObjects5.length = 0;
gdjs.TestCode.GDFakeCardObjects6.length = 0;
gdjs.TestCode.GDFakeCardObjects7.length = 0;
gdjs.TestCode.GDFakeCardObjects8.length = 0;


return;

}

gdjs['TestCode'] = gdjs.TestCode;
