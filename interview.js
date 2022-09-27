console.log("hey hello world");

//what are the posssible way to create object in js
let object = new Object();

class man1{
    constructor(name) {
        this.name = name;
    }
}
let object1 = new Object("sudhakr patro"); 
console.log(object1);

//what is prototype chain
//prototype chain is this is usually build a new object on the top of existing obejct.

//differrence between call apply and blind
//call()
let teacher1 = {firstName: "priya", lastName: "sachdeva"}
let teacher2 = {firstName: "lakshmi", lastName: "satpathy"}
function invite(greeting1,greeting2) {
   console.log( 
       greeting1 + "  " + this.firstName + " " + this.lastName + " " + greeting2
   );  
}
invite.call(teacher1, "hey", "how are you?");
invite.call(teacher2, "hey", "how are you?");

//apply()
let teacher3 = {firstName: "sarmista", lastName: "mishra"}
let teacher4 = {firstName: "rutuoarna", lastName: "routray"}
function invite(greeting1,greeting2) {
    console.log(
        greeting1 + " " + this.firstName + " " + this.lastName + " " + greeting2 
    );
}
invite.apply(teacher3, ["hey", "how are you?"]);
invite.apply(teacher4, ["hey", "how are you?"]);

//bind()