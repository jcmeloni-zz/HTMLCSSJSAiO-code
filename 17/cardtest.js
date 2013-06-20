// define the functions
function PrintCard() {
line1 = "<strong>Name: </strong>" + this.name + "<br/>\n";
line2 = "<strong>Address: </strong>" + this.address + "<br/>\n";
line3 = "<strong>Work Phone: </strong>" + this.workphone + "<br/>\n";
line4 = "<strong>Home Phone: </strong>" + this.homephone + "<hr/>\n";
document.write(line1, line2, line3, line4);
}
function Card(name,address,work,home) {
   this.name = name;
   this.address = address;
   this.workphone = work;
   this.homephone = home;
   this.PrintCard = PrintCard;
}
// Create the objects
sue = new Card("Sue Suthers", "123 Elm Street", "555-1234", "555-9876");
phred = new Card("Phred Madsen", "233 Oak Lane", "555-2222", "555-4444");
henry = new Card("Henry Tillman", "233 Walnut Circle", "555-1299", "555-1344");
// And print them
sue.PrintCard();
phred.PrintCard();
henry.PrintCard();

