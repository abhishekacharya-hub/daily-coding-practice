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

//hoisting:
//function hoisting
getName("abhishek acharya");
function getName(name) {
  console.log("hello" +  " " + name )
}
// Output Hello abhishek acharya

//variable hoisting
console.log(message);
var message = "hey this is abhishek acharya how you doing"

//hositing with let and const
//console.log(x);
//let x = 10;
// Output: ReferenceError: x is not defined

//-------------------------------------------------------------------------------------------------------------

//arrays:
//array of numbers
const numberss = [1,2,3,4,5];
//array of strings
const personn = ["sameer", "abhishek", "raghav", "rocky", "vaibav"];
//array of keyword
//const nums = new Array[10, 20, 30, 40, 50];

//accessing array element
let fruitss = ["banana", "apple", "cherry", "orange", "grapes", "coconut"];
console.log(fruitss[3]); // orange
console.log(fruitss[fruitss.length-1]); //cocnut

//itrate in array
for(let i=0; i<fruitss; i++) {
  console.log(fruitss[i]);
}

//adding new array
let per = ["ravi", "roy", "sameer", "hardik", "ritvik"];
per.push("sami");

//associative arrays

const employ = {name: "jatin setty", id: "12345", email: "jatin@gmail.com"};
console.log(employ.id);
console.log(employ.name);
console.log(employ.email);
//console.log(Object.key(employ).length);

//retrive the elements
for(let key in employ) {
  console.log(key + " = " +employ[key]);
}

//caculate the length of associate array
const books = {name: "back in old days", author: "abhishek", email: "abhishek@gmail.com"};
console.log(Object.keys(books).length);

//iterate through the array
let outfits = ["jeans", "shirts", "hoodies", "shorts"];
for(let i=0; i< outfits.length; i++){
  console.log(outfits[i]);
}
//array of object
const employees = [
  { id: 101, name: "Sakshi Memon", email: "sakshi.memon@email.com" },
  { id: 102, name: "Subhash Shukla", email: "subhash.shukla@email.com" },
  { id: 103, name: "Mohini Karpe", email: "mohini.karpe@email.com" }
];

// Using DOT notation
console.log(employees[0].name);

// Using delete keyword
delete employees[0];

// Iterating using for..in loop
for (let key in employees) {
  console.log(employees[key]);
}

//------------------------------------------------------------------------------------------------------

//array methods: 
//array.join()
let elements = ["air", "fire", "water"];
console.log(elements.join());
console.log(elements.join(""));
console.log(elements.join("-"));

//array.pop()
let vegies = ['broccoli', 'cauliflower', 'kale'];
console.log(vegies.pop());
console.log(vegies);

//array.push()
let animals = ["tiger", "lion", "goat"];
let counts = animals.push("cow");
console.log(counts);
console.log(animals);

//array.shift()
let nonveg = ["chicken", "mutton", "fish", "crab"];
console.log(nonveg.shift());
console.log(nonveg);

//array.unshift()
let parties = ["club", "home", "terace"];
parties.unshift("street", "beaches");
console.log(parties);

//array.concat()
let alf1 = ["a","b","c"];
let alf2 = ["d","e","f"];
console.log(alf1.concat(alf2));

//array.map()
let array = [1, 2, 3];
let map1 = array.map(x => x*4);
console.log(array); // 1.2.3
console.log(map1); //4, 8, 12

//arrray.filter()
let words = ["final", "destination", "horror", "basement", "synthwave", "retro"];
let resultt = words.filter(word => word.length>7);
console.log(resultt);

//array.reduce()
let array2 = [12, 23, 34];
let reducer = (accumlator, currentValue) => accumlator+ currentValue;
console.log((array2).reduce(reducer)); //69
console.log((array2).reduce(reducer, 6)); //75

//array.reducerRight()
let array3 = [[0,1], [2,3], [4,5]].reduceRight(
  (accumlator, currentValue) => accumlator.concat(currentValue)
);
console.log(array3); //[4,5,2,3,0,1]

//array.every()
function isBelowThreshold(currentValue) {
  return currentValue<40;
}
array4 = [4,26,23,36,35];
console.log(array4.every(isBelowThreshold)); //true// returns a boolean result if all condtion fulfil

//array.some()
let array5 = [1,3,4,5,6];
let even = function(element) {
  return element% 2 === 0;
}
console.log(array5.some(even)); // true //even if one conditon comes out to be true 

//array.indexOf()
let array6 = ["camila", "ariana", "weeknd", "justin"];
console.log(array6.indexOf("ariana")); //  it will return 1
console.log(array6.indexOf("abel")); //it does nt exist so it will return -1

//array.lastIndexOfIndex()
let paragraph = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
let searchTerm = "dog";
console.log('The index of the first "' + searchTerm + '" from the end is ' + paragraph.lastIndexOf(searchTerm));

//array.find()
let array7 = [2,34,65,56,36,109,233];
let found = array7.find(function(element) {
  return element>100;
});
console.log(found);

//array.inludes()
let array8 = [1,2,3,4,5,6];
console.log(array8.includes(2)); //output : true
let ani = ["cat","dog","rabiit"];
console.log(ani.includes("ca")); //false
//---------------------------------------------------------------------------------------------------------------------

//for..in and for..off
let list = [10,20,30,40];
for(let i in list) {
  console.log(i); //0,1,2,3,4
}
for(let i of list) {
  console.log(i); // 10,20,30,40
}
//---------------------------------------------------------------------------------------

//destructuring of array
const numb = [12, 23, 34, 45];
const [one, two, three, four] = numb;
console.log(two); // 23
console.log(one); // 12

//swapping varibales
let a =89;
let b =45;
[a,b] = [b,a];
console.log(b); //89
console.log(a); //45
//-----------------------------------------------------------------------------------------------

//forEach();
let array9 = [12,34,54,53];
array9.forEach (function(number,index) {
  console.log(number + " " + "comes at " + index);
});
//12 comes at 0
//34 comes at 1
//54 comes at 2

//filter();
let array10 = [20,30,40];
let res = array10.filter(function(number) {
  return number> 25;
});
console.log(res); //30,40

//map();
let map2 = [12,13,14];
let mapped = map2.map(function(number){
  return number*2;
});
console.log(mapped); //24,26,28

//reduce();
let array11 = [23,45,65];
let reduce = array11.reduce(function(number,sum){
  return sum = number + sum; 
});
console.log(reduce); //133

//-------------------------------------------------------------------------------------
//json:

//empty json array
const empty = [];
//json array of numbers
const numbs = [12,23,43,54];
//josn array of objects
let emp = [{ "name": "Kabir Dixit", "email": "kabir.dixit@gmail.com", "age": 23 },
{ "name": "Mukta Bhagat", "email": "mukta.bhagat@gmail.com", "age": 28 },
{ "name": "Sakshi Ramakrishnan", "email": "sakshi.ramakrishnan@gmail.com", "age": 33 }
];

console.log(emp[1].name); //mukta bhagat

//how to validate json object in javascript
function isValidJson(json) {
  try{
    JSON.parse(json)
    return true;
  }catch (e) {
    return false;
  }
}
console.log(isValidJson("{}")); //TRUE
console.log(isValidJson("abc")); //FALSE

//JSON stringify
const user = {'name': 'Shashi Meda', 'email': 'shashi.meda@email.com', 'age': 28};
console.log(JSON.stringify(user));

//JSON parse
const user1 = '{"name": "Shashi Meda", "email": "shashi.meda@email.com", "age": 28}'
console.log(JSON.parse(user1));

//----------------------------------------------------------------------------------------

//sort():
//sorting the array in higher order to lower order
const array12 = [2,4,7,34,56,3];
array12.sort((a,b) => b-a);
console.log(array12);

//sorting the array in lower to higher order
const array13 = [23,45,25,54,65];
array13.sort((a,b) => a-b);
console.log(array13);
//-------------------------------------------------------------------------------------

//rest parameter:
function sum(...args){
  return args.reduce((previous,current) => {
    return previous + current;
  });
}
  console.log(sum(12,23)); //35
  console.log(sum(34,45,67)); //146
//--------------------------------------------------------------------------------------

//regular expression
//test();
let exp = /hello/;
let res1 = exp.test("hello world");
let res2 = exp.test("how are you");
console.log(res1); //true
console.log(res2); //false

//exec();
let ress1 = exp.exec("hello world");
let ress2 = exp.exec("how are you");
console.log(ress1); // ['Hello', index: 0, input: 'Hello World', groups: undefined]
console.log(ress2); //null

//-------------------------------------------------------------------------------------

//arrow function:
let greet = () => console.log("hello world");
greet();
//arrow function as expression:
let age = 25;
let welcome = (age<18) ?
  () => console.log('baby') : 
  () => console.log('adult');
welcome();
//arrow function in one argument
let greeting = x => console.log(x);
greeting ("hello world");
//arraow function as multiple arg
let area = (r) => {
  const pi = 3.14;
  return pi*r*r;
}
let ans = area(10);
console.log(ans);

//------------------------------------------------------------------------------------

// clearTimeout()

var messages;
function greetin() {
  console.log("Hello World!");
  stop();
}
function start() {
  console.log("start");
  messages = setTimeout(greetin, 3000);
}
function stop() {
  console.log("stop");
  clearTimeout(msg);
}

start();

// Output
//Start
//Hello World!
//Stop
//-------------------------------------------------------------------------------------
//example of destructuring of an object
let man = {name: "abhishek", agee:25, email:"abhishek@gamil,com", country:"india"};
let name = man.name;
let agee = man.agee;
let country = man.country;
let email = man.email;
console.log(name);
console.log(agee);
console.log(country);
console.log(email);

//how to check if on object is array or not
//creating some variable
let v1 = {name:"ajay", age:25};
let v2 = ["red","blue","pink","purple"];
let v3 = [12, 34, 53, 45];
let v4= null
//testing the variable datatypes
typeof(v1); // returns "object"
typeof(v2); // returns "object"
typeof(v3); // returns "object"
typeof(v4); // returns "object"
//testing the variable is an array
Array.isArray(v1); //false
Array.isArray(v2); //true
Array.isArray(v3); //true
Array.isArray(v4); //false
//---------------------------------------------------------------------------------------

//clone an object with spread opertor
const obj = {a: 10, b: 20 };
const cloneObject = {...obj};

//clone an object with object.assign()
const person1 = {name:"vijay", city:"mumbai"};
const clonePerson = Object.assign({},person1);
console.log(clonePerson);
//changing the name of person in clonePerson
clonePerson.name = "hritik";

console.log(clonePerson.name);
console.log(person1.name);

//clone the object with using spread operator
const person2 = {name: "shankar", city:"pune"};
const clonePerson2 = {...person2};
console.log(clonePerson2);

clonePerson.name = "shatis";
console.log(clonePerson.name);
console.log(person2.name);