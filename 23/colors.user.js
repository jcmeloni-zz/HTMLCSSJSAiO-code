// ==UserScript==
// @name          WhiteOnBlack
// @namespace     http://www.thickbook.com/
// @description   Display paragraphs in white text on black
// @include       *
// ==/UserScript==
//
// Change the color of each paragraph
var zParagraphs = document.getElementsByTagName("p");
for (var i=0; i<zParagraphs.length; i++) {
   zParagraphs[i].style.backgroundColor="#000000";
   zParagraphs[i].style.color="#FFFFFF";
}
