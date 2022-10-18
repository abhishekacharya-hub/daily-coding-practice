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
//===================================================================================================================================================================================================================

//what is hoisting
//in js variables functions class are hoisted to top of the code or top of their scope.
//remember in js only declartion is hoisted not initialization.

console.log(sms); //undefined
var sms = "hey how you doing today"

console.log(countt); //undefined
var countt = 1;
//function scope:
let p = 10;
let q = 23;
let totResult = adds(p,q);
console.log(totResult);
function adds(a, b)  {
  return a + b;
}
//=========================================================================================

//what is ES6 classes
//classes are the sytactic sugar over js existing prototype based inhertence
function Bike(model,price) {
  this.model = model;
  this.price = price;
}
let detail = new Bike("CBR", 120000);
Bike.prototype.getDetails = function() {
  return this.model + " "  + "has the price is" + " " + this.price;
}
console.log(detail.getDetails());

//ES6 class
/*class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
  
  getDetail() {
    return this.model + " car has" + this.color + " color";
  }
}*/
//=====================================================================================

//what is clouser
//clouser is the combination of function and its lexical environment.
//a function can access to its lexical env and variables. means the the inner function can acess to its outer function variable
function random() {
  let sigma = "wassupppp dude"
  function anyMethod() {
    console.log(sigma);
  }
  return anyMethod();
}
random();

function marvel() {
  let arya= "hey this your captain"
  function dc() {
    console.log(arya);
  }
  return dc()
}
marvel();

//==================================================================================
//what is moduel
//modules are just reusable codes and we export and import where do need to repeat our code
//maintainbily , resusabilities , namespacing

//what is webstorage
//it is an browser api the store data in the client side.
// local storage and session storage
//local storage can store data for no expiration of time
//session storage can data emit once the tab is closed or internet goes off

//what is cookies
//cookies are piece of data that store inside your computer and access by the browser
//it remember your id and password when you visit next time to a website
//====================================================================================

//spread operator
function sumNumbers(x,y,z) {
  return x+y+z;
}
const n = [13,54,56];
console.log(sumNumbers(...n)); //123

let abi = [123,342,54];
let shek = [23,45,756];
let answer = [...abi, ...shek];
console.log(answer); 
//====================================================================================

//promise
const promises = new Promise(
  (resolve) => {
    setTimeout(() => {
      resolve("I'm a Promise!");
    }, 3000);
  },
  (reject) => {}
);

promise.then((value) => console.log(value))
//=====================================================================================

//calllback function
//callback function is a function passes into an another function as an argumant.
function callbackFunction(name) {
  console.log("Hello " + name);
}

function outerFunction(callback) {
  let name = prompt("Please enter your name.");
  callback(name);
}

outerFunction(callbackFunction);
//=======================================================================================

//what is callback hell
//callback hells is deeply nested callbacks which is hard to read and debug when dealing with the asynchronous logics
//which is looks likes this like a pyramid
async(function() {
  async(function() {
    async(function() {
      async(function() {
         
      });
    });
  });
});

//==============================================================================================================================

//why do we need callback function
function firstFunction() {
  setTimeout(function() {
    console.log("first function called")
  },2000)
}
function secondFunction() {
  console.log("this is second function called")
}
firstFunction();
secondFunction();

//============================================================================================
//debounce:
/* in js we use function in so many ways like in high order function we pass the 
   function inside another function as an argument and also we retun a fucntion 
   as the part of the function. but here in debounce does both.
   it has mostly work with eventlistener and let say we want to execute a function name myFunc.
   and we want to exec the funtion with a 2000ms delay. so here debounce comes to the picture.
   so insted passing the function to the event listener we can pass in to the debounce 
   and we can give it a time of 2000ms as well.*/

function debounce(callback, delay) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  }
}
//now the ideal way to use debounce is to in an event listener
 function helloWorld() {
  console.log("hello universe");
 }
 const myInput = document.getElementById("myInput");
 myInput.addEventListener("keyup", debounce(helloWorld, 2000));
