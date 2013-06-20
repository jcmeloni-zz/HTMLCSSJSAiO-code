// ==UserScript==
// @name          AutoForm
// @namespace     http://www.thickbook.com/
// @description   Fills in forms automatically
// @include       *
// ==/UserScript==
// this function fills out form fields
//
var zTextFields = document.getElementsByTagName("input");
for (var i=0; i<zTextFields.length; i++) {
  thefield=zTextFields[i].name;
  if (!thefield) thefield=zTextFields[i].id;
  // Set up your auto-fill values here
  if (thefield == "yourname") zTextFields[i].value="Your Name Here";
  if (thefield == "phone") zTextFields[i].value="(xxx) xxx-xxxx";
  alert("field:" + thefield + " value: " + zTextFields[i].value);
}
