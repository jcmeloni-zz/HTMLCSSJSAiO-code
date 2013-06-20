function graphicBox(box) {
   // be unobtrusive
   if (!document.getElementById) return;
   // find the object and its parent
   obj = document.getElementById(box);
   parentobj = obj.parentNode;
   // hide the regular checkbox
   obj.style.visibility = "hidden";
   // create the image element and set its onclick event
   img = document.createElement("img");
   img.onclick = Toggle;
   img.src = "unchecked.gif";
   // save the checkbox id within the image ID
   img.id = "img" + box;
   // display the graphic checkbox
   parentobj.insertBefore(img,obj);
}
function Toggle(e) {
   if (!e) var e=window.event;
   // find the image ID
   img = (e.target) ? e.target : e.srcElement;
   // find the checkbox by removing "img" from the image ID
   checkid = img.id.substring(3);
   checkbox = document.getElementById(checkid);
   // "click" the checkbox
   checkbox.click();
   // display the right image for the clicked or unclicked state
   if (checkbox.checked) file = "checked.gif";
      else file="unchecked.gif";
   img.src=file;
}
//replace the second checkbox with a graphic
graphicBox("check2");
