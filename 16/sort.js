// initialize the counter and the array
var numnames=0;
var names = new Array();
function SortNames() {
   // Get the name from the text field
   thename=document.theform.newname.value;
   // Add the name to the array
   names[numnames]=thename;
   // Increment the counter
   numnames++;
   // Sort the array
   names.sort();
   document.theform.sorted.value=names.join("\n");
}

