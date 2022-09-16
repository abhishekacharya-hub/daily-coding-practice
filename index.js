//array splice method
let arrayIntegersOriginals1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginals2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginals3 = [1, 2, 3, 4, 5];
let arrayIntegerso1 = arrayIntegersOriginals1.splice(0,2);// return [1,2] original array [3,4,5]
let arrayIntegerso2 = arrayIntegersOriginals2.splice(3);//return [4,5] original array [1,2,3]
let arrayIntegerso3 = arrayIntegersOriginals3.splice(3, 1, "a", "b", "c");//return [4] original array [1, 2, 3, "a", "b", "c", 5]


//array slice method
let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0,2);// return [1,2]
let arrayintegers2 = arrayIntegers.slice(2,3);// return [3]
let arrayIntegers3 = arrayIntegers.slice(4)// return [5]

//------------------------------------------------------------------------------------------------------------

//pure function
//Impure
let numberArray = [];
const impureAddNumber = (number) => numberArray.push(number);
//Pure
const pureAddNumber = (number) => (argNumberArray) =>
  argNumberArray.concat({number});


//Display the results
console.log(impureAddNumber(6)); // returns 1
console.log(numberArray); // returns [6]
console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
console.log(numberArray); // returns [6]

//---------------------------------------------------------------------------------------------------------------

//unary function
const unaryFunction= (a) => console.log(a+ 10);// Add 10 to the given argument and display the value

//currying function
const multiArgFunction = (a, b, c) => a + b + c;
console.log(multiArgFunction(1, 2, 3)); // 6

const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
curryUnaryFunction(1)(2); // returns a function: c => 3 + c
curryUnaryFunction(1)(2)(3); // returns the number 6

//------------------------------------------------------------------------------------------------------------

//higher order function
const firstOrderFunc = () =>
  console.log("Hello, I am a First order function");
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);

//--------------------------------------------------------------------------------------------------------------

// diffrence between call apply and bind methods

// call() method
   //it invokes the function with this value and allow to pass in arguments as one by one.
var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?

//--------------------------------------------------------------------------------------------------------------

//apply() method
    //it invokes the function with this value and allows ro pass in arguments as an array.   
var employee1 = { firstName: "john", lastName: "radson" };
var employee2 = { firstName: "jimmy", lastName: "bally" };

 function invite(greeting1, greeting2 ) {
    console.log(
        greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
    );
 }
invite.apply(employee1, ["hello", "how are you?"]); //hello john radson, how are you?
invite.apply(employee2, ["hello", "how are you?"]); //hello jimmy bally, how are you?

//---------------------------------------------------------------------------------------------------------------

//bind() method
    //it returns a new function and allows you to pass number of arguments
var employee1 = {firstName: "john", lastName: "radson" };
var employee2 = {firstName: "jimmy", lastName: "bally" };

function invite(greeting1, greeting2) {
    console.log(
        greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2 
    );
}
var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);

inviteEmployee1("hello", "how are you?"); // hello John Rodson, How are you?
inviteEmployee2("hello", "how are you?"); // hello jimmy bally, how are you?

//-------------------------------------------------------------------------------------------------------------

//closures
function Welcome(name) {
    var greetingInfo = function (message) {
      console.log(message + " " + name);
    };
    return greetingInfo;
  }
  var myFunction = Welcome("John");
  myFunction("Welcome "); //Output: Welcome John
  myFunction("Hello Mr."); //output: Hello Mr.John

//----------------------------------------------------------------------------------------------------------
//clousers
/**
 * Lexical Scope
 **/

 function init() {
  let name = "JavaScript closures"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  return displayName;
}
init();

var closure = init();
closure();
//----------------------------------------------------------------------------------------------------------------

//spread operaot 
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [10, 20, 30];

// Using Spread Operator
console.log(sum(...numbers)); // 60

// Using Apply (ES5)
console.log(sum.apply(null, numbers)); // 60

//------------------------------------------------------------------------------------------------------------

//copying an array 
let fruits = ["banana", "orange", "apple"];
let newFruits = [...fruits];
console.log(newFruits);

//-------------------------------------------------------------------------------------------------------------

//concatinate of array
let arr1 = ["A", "B", "C"];
let arr2 = ["X", "Y", "Z"];

let result = [...arr1, ...arr2];

console.log(result); 

// Output
['A', 'B', 'C', 'X', 'Y', 'Z']

//---------------------------------------------------------------------------------------------------------------

//spreading elements together with an individual element:
let fruit = ["banana" , "orange", "apple"];
let newFruitss = ["cherry", ...fruit];
console.log(newFruitss);

// Output
['Cherry', 'Apple','Orange','Banana']

//----------------------------------------------------------------------------------------------------------------

//spread operator for object literals 
let obj1 = { id: 101, name: 'Rajiv Sandal' }
let obj2 = { age: 35, country: 'INDIA'}

const employee = { ...obj1, ...obj2 }

console.log(employee); // { "id": 101, "name": "Rajiv Sandal", "age": 35, "country": "INDIA" }

//-------------------------------------------------------------------------------------------------------------

//sets()
let num = new Set([10, 20, 20, 30, 40, 50]);

console.log(num); // Set(5) {10, 20, 30, 40, 50}
console.log(typeof num); // Object

//-----------------------------------------------------------------------------------------------------------------

//repeat()
const msg = "Hello World \n";

console.log(`${msg.repeat(3)}`);

// Output: Hello World Hello World Hello World

//-------------------------------------------------------------------------------------------------------------

//arrow function

let add = (x, y) => x + y;

console.log(add(10, 20)); // 30

//-------------------------------------------------------------------------------------------------------------

//arrow function with this 
/**
 * Using ES5
 * 
 **/
 /*var person = {
  name: "Diksha",
  actions: ["bike", "hike", "ski", "surf"],
  printActions: function() {
    var _this = this;
    this.actions.forEach(function(action) {
      var str = _this.name + " likes to " + action;
      console.log(str);
    });
  }
};
person.printActions();

/**
 * Using Arrow function
 * 
 **/
/*et person = {
  name: "Diksha",
  actions: ["bike", "hike", "ski", "surf"],
  printActions() {
    this.actions.forEach((action) => {
      let str = this.name + " likes to " + action;
      console.log(str);
    });
  }
};*/

//person.printActions();

// Output:
//Diksha likes to bike 
//Diksha likes to hike 
//Diksha likes to ski 
//Diksha likes to surf

//-------------------------------------------------------------------------------------------------------------

//Destructing Assignment:
const phone = {
  title: "iPhone",
  price: 999,
  description: "The iPhone is a smartphone developed by Apple"
};
console.log(phone.title);


// Destructing Assignment
const { title, price, description } = {
  title: "iPhone",
  price: 999,
  description: "The iPhone is a smartphone developed by Apple"
};
console.log(title); // iPhone
console.log(price); // 999
console.log(description); // The iPhone is a smartphone developed by Apple

//------------------------------------------------------------------------------------------------------------

//generators
function* generator(num) {
  yield num + 10;
  yield num + 20;
  yield num + 30;
}
let gen = generator(10);

console.log(gen.next().value); // 20
console.log(gen.next().value); // 30
console.log(gen.next().value); // 40

//------------------------------------------------------------------------------------------------------------

//symbols
const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol("Hi");

console.log(typeof symbol1); // symbol
console.log(symbol3.toString()); // Symbol(Hi)
console.log(Symbol("Hi") === Symbol("Hi")); // false

//--------------------------------------------------------------------------------------------------------------

//global variable
var x = 10;

if (x === 10) {
  var x = 20;

  console.log(x);
  // expected output: 20
}

console.log(x);
// expected output: 20

//-------------------------------------------------------------------------------------------------------------

//declare a global variable with a funcion 

window.value = 90;

// Declaring global variable by window object
function setValue() {
  window.value = 100;
}

// Accessing global variable from other function
function getValue() {
  setValue();
  return window.value;
}

console.log(getValue()); // 100

//-------------------------------------------------------------------------------------------------------------

//template leterals in string
const person = {name : "abhishek" , age : 25 };
console.log(`hy my name is ${person.name} and my age is ${person.age}`)

//--------------------------------------------------------------------------------------------------------------


