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
// the function which takes or accepts another function as an argument
const randomNumbers = [4, 11, 42, 14, 39];

const filteredArray = randomNumbers.filter((number) => {
  return number > 15;
});
console.log(filteredArray); // [42, 39]

//what is unary function
//this function takes excatly one arg
const unary = (a) => console.log(a+20);

//what is currying funcion
//it takes multiple arg turning into a sequence of function.each functions takes one arg.
//normal fun
const addTotal = (a,b,c) => {
    return a+b+c;
}
console.log(addTotal(12,23,34));
//currying fun
const addCurry = (a) => {
    return (b) => {
      return (c) => {
        return a + b + c;
      };
    };
  };
  console.log(addCurry(20)(20)(20));

//what is pure function
//pure function is nothing but this function gives the same output for the same input for no. of times  
function morning(name) {
    return `hello ${name}`
}
console.log(morning("world")); //hello world
//=======================================================================================================

//difference btween let and var 
//let: it is block scope, introduced in es6 and it hoisted but not initialised
//var: it is global scope and has function scope and variables are hoisted

let counter = 30;
if(counter === 30) {
    let counter =31;
    console.log(counter); //31
}
console.log(counter); //30

//temporal deadzone
//when you declare a variable with let and const and not been in initialized yet the
//time period between this is called temporal deadzone.
//function someMethod() {
 //   console.log(counterr); //undefined
//  console.log(count); //reference error
//}
//var counterr = 10;
//let count = 20;

//====================================================================================

//what is IIFE
//IIFE stands for immediate involked function expression and it is excecued immediatly.
//it is mostly used for data privacy. 
//you can not access to the variables that present inside this function in outer world
//=======================================================================================

//what is memoization
//memoization is a technique that improves your function perfomance by giving your previous caching values
const memoizAddition = () => {
    let cache = {};
    return (value) => {
      if (value in cache) {
        console.log("Fetching from cache");
        return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
      } else {
        console.log("Calculating result");
        let result = value + 20;
        cache[value] = result;
        return result;
      }
    };
  };
  // returned function from memoizAddition
  const addition = memoizAddition();
  console.log(addition(20)); //output: 40 calculated
  console.log(addition(20)); //output: 40 cached