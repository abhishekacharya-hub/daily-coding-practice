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

//=========================================================================================

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
let teacher5 = {firstName: "sherya", lastName: "chopra"}
let teacher6 = {firstName: "madhu", lastName: "shree"}
function invite(greeting1,greeting2) {
    console.log(
        greeting1 + " " + this.firstName + this.lastName + " " + greeting2
    );
}
let inviteTeacher1 = invite.bind(teacher5);
let inviteTeacher2 = invite.bind(teacher6);
inviteTeacher1( "hey", "how are you?");
inviteTeacher2( "hey", "hwo are you?");

//====================================================================================

//what is json
//json is javascript object notation it mostly knows for transmit data across netwroks
//JSON.parse(text);
//JSON.stringify(object);

//====================================================================================

//purpose of array slice() method
//it returned the selected items from an array as a new array
let arrayInteger = [1,2,3,4,5];
let arrayInt1 = arrayInteger.slice(0,2); // [1,2]
let arrayInt2 = arrayInteger.slice(1,3); // [2,3,4]
let arrayInt3 = arrayInteger.slice(4); // [5]

//purpose of splice() method
//it either add or remove items and return the removed item
let arrayInt4 = arrayInteger.splice(0,2); //return [1,2] original array [3,4,5]
let arrayInt5 = arrayInteger.splice(3); //return [4,5] original array [1,2,3]
let arrayInt6 = arrayInteger.splice(3, 1, "a", "b", "c") //return [4] orginal array [1,2,3,"a","b","c",5]

//========================================================================================================

//difference btween slice and splice
//slice : it does nt change the original array. it is immutable. it is subset of original array
//splice : it change the original array. it is mutable. insert or delete element from an array

//====================================================================================================

//what is first class function
//function which is used as a variable in that language later
const handler = () => {
    console.log("this is a click handler");
}
document.addEventListener("click", handler);

//what is first order function
//the function which does nt accept another function as an argument. doesnt return a funciton as a value
const firstOrder = () => {
    console.log("this is first order function");
}

//what is higher order function
const firstOrderFunc = () =>
  console.log("Hello, I am a First order function");
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);
