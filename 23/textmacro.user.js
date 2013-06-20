// ==UserScript==
// @name          TextMacro
// @namespace     http://www.thickbook.com/
// @description   expands macros in text areas as you type
// @include       *
// ==/UserScript==
// this function handles the macro replacements
function textmacro(e) {
   // define your macros here
   zmacros = [
     [".jd", "Jane Doe"],
     [".js", "JavaScript"],
     [".cu", "See you later."]
   ];
   if (!e) var e = window.event;
   // which textarea are we in?
   thisarea= (e.target) ? e.target : e.srcElement;
   // replace text
   for (i=0; i<zmacros.length; i++) {
      vv = thisarea.value;
      vv = vv.replace(zmacros[i][0],zmacros[i][1]);
      thisarea.value=vv;
   }
}
// install the event handlers
var zTextAreas = document.getElementsByTagName("textarea");
for (var i=0; i<zTextAreas.length; i++) {
   if (zTextAreas[i].addEventListener)
      zTextAreas[i].addEventListener("keydown",textmacro,0);
   else if (zTextAreas[i].attachEvent)
      zTextAreas[i].attachEvent("onkeydown",textmacro); 
}
