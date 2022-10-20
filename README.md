# daily-coding-practice
in this repo contain all the daily javascript code practices of diffrent topics with  well structured and maintained code.

__spread operator and rest operator__

spread operator expand the elements of an iterable while rest operator is the rest last element of the arg.

```javascript
//spread opertor

function sum(x,y,z) {
    return x+y+z;
}
const numbers = [12,23,34]
console.log(sum(...numbers));
```
```javascript
//rest opertor

function xyz(x, y, ...z) {
  console.log(x, " ", y) // hey hello

  console.log(z) // ["wassup", "goodmorning", "hi", "howdy"]
  console.log(z[0]) // wassup
  console.log(z.length) // 4
}

xyz("hey", "hello", "wassup", "goodmorning", "hi", "howdy")
```
__array methods__:

__slice()__

It takes two parameters:starting and ending position. It doesn't include the ending position.

```javascript
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.slice(1,4)); //[2,3,4]

```

__splice()__

it takes three parameters: starting postion, number of times to removed and numbers of times to removed.

```javascript
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.splice()) //remove all the items
console.log(numbers.splice(0,1)) // remove the first item
console.log(numbers.splice(3,3,7,8,9)) // [1,2,3,7,8,9] it removes the 3 items and and replace 3 items
```

__push()__

adding item to the end of the list

```javascript
const fruits = ["apple","banana","mango","cheery"]
console.log(fruits.push("grapes")); // 5
console.log(fruits) // ["apple","banana","mango","cheery","grapes"]
```
__pop()__

removing item to end item from the end

```javascript
const fruits = ["apple","banana","mango","cheery"]
fruits.pop();
console.log(fruits); // ["apple","banana","mango"]
```

__shift()__

removing one item from the begining

```javascript
const numbers = [1, 2, 3, 4, 5]
numbers.shift();
console.log(numbers);
```

__unshift()__

adding one item in the beginning of the array

```javascript
const numbers = [1, 2, 3, 4, 5]
numbers.unshift(0);
console.log(numbers);
```

__sort()__

```javascript
const numbers = [12,45,23,43,241]
const arr = numbers.sort(function(a,b) {return (b-a)});
console.log(arr); //[241,45,43,23,12]

const numbers = [23,45,243,345,22]
const arr = numbers.sort(function(a,b) {return (a-b)});
console.log(arr); //[22, 23, 45, 243, 345]

```
__map()__

inshort it iterate through the array and returns a new array and it does nt touches the original array at all.

```javascript
//with arrow function

let array1 = [12,34,54,23]
let mapResult = array1.map((x) => x*2);
console.log(mapResult);

//without arrow function

let array2 = [12,24,45,22]
let mapResult = array2.map(function(number){
    return number*4;
});
console.log(mapResult);
```

__forEach()__

foreach method also iterate through the array but it does nt return a new array. it basicaly replace the original array.

```javascript
//without arrow function

let array1 = [45,23,65,22]
array1.forEach(function(number,index){
    console.log(number + " " + "comes at " + index)
});

```

__filter()__

filter method creates a new array and do the function test that has given

```javascript
//with arrow function

let words = ["predestination", "burn", "finally", "demonstalk", "uninterupt"]
let result = words.filter((word) => word.length>7);
console.log(result);

//with out arrow function

let words = ["predestination", "burn", "finally", "demonstalk", "uninterupt"]
let result = words.filter(function(word){
    return word.length>7
})
console.log(result);
```

__every()__

every method checks the function actually fulfils the each element and return the output in boolean meaning,
The every() method returns true if the function returns true for all elements.
the every() method returns false if the function returns false for one elements

```javascript
//without arrow function

function isBelowThreshold(currentValue) {
    return currentValue>40;
}
let array = [23,34,12,26]
console.log(array.every(isBelowThreshold))

```

__reduce()__

We use the reduce method to sum all numbers in an array together, or to multiply items in an array or to concatenate items in an array. Let us see the following different example to make this explanation more clear.

```javascript
//with arrow function

let array = [12,34,45,65,34]
let reducer = (accumlator,currentValue) => accumlator+currentValue;
console.log(array.reduce(reducer));
console.log(array.reduce(reducer,23));

//with out arrow function

let array = [12,43,5,65,44]
let result = array.reduce(function(number,sum){
    return sum = number + sum;
});
console.log(result);
```


__closure__

closer is a combination of funtion and its lextcal environment. a function can access to its lexical environment and its variable. meaing the innerfunction can have access to its outer function varibales

```javascript  
  function marvel() {
    let capt = "hey this is your captain"
    function dc() {
        console.log(capt);
    }
    return dc();
  }
  marvel();

```

__function__ :

__function with a parameter__

in a function we can pass different datatypes like numbers, string, boolean, object,functions as a parameter

```javascript
function areaofCircle(r) {
    let area = 2*3.14*r
    return area;
}
console.log(areaofCircle(10));
```

__function with two parameter__

```javascript
function sum(num1,num2) {
    let result = num1+num2
    return result;
}
console.log(sum(12,34));


function printFullName(firstName,lastName) {
    return `${firstName} ${lastName}`
}
console.log(printFullName("abhishek", "acharya"));
```

__function with multiple parameter__

```javascript
function sumOfArrValue(arr) {
    let sum = 0;
    for(i = 0; i< arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
const numbers = [12,23,34,4,45] //128
console.log(sumOfArrValue(numbers));


//with function declaration
function sumAllNum() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum+= arguments[i];
    }
    return sum;
}
console.log(sumAllNum(1,2,3,4,5,6)); //21
console.log(sumAllNum(21,34,45,6)); //106
```

```javascript
//with multiple arg using spread operator
const sumAllNum = (...args) => {
    let sum = 0;
    for(const element of args) {
        sum += element
    }
    return sum;
}
console.log(sumAllNum(12,23,45,64)); //144
console.log(sumAllNum(32,12,5,23)); //72
```

__anonymous function__

a function with out name is called anonymous function

```javascript
const anonymousFun = function() {
    console.log("i am anonymous function my value is stored in anonymouFun")
}
```

__expression function__

expression function are anonymous function and we assign that to a variable and to return a value from the function we must call the variable

```javascript
const square = function (n) {
    return n*n;
}
console.log(square(3)); //6
```

__self involking functions__

self involking functions are anonymous function which do not need to call to return a value

```javascript
const squaredNum = (function(n) {
    return n*n
})(10);
console.log(squaredNum); //100
```

__arrow function__

arrow function is an alternative to write function and these two has some minor diffrence between them. 
arrow function dont have function key word it has the arrow key instead

```javascript

//this is normal function
function square(n) {
    return n*n
}
console.log(square(5)); //25

//this is with arrow function
const square = (n) => {
    return n*n;
}
console.log(square(2)); //4

//if we have one line then we can explicits return
const square = (n) => n*n  
```

__function with diffrent parameter__

sometimes we pass default value to parameters. when we invokes the function if we do not pass an argument the default value will be used. Both function declaration and arrow function can have a default value or values.

```javascript
function greeting(name = "peter") {
    let message = `${name}, welcome to our universe!`
    return message;
}
console.log(greeting());           //peter wwlcome to our universe!
console.log(greeting("abhishek"));  //abhishek welcome to our universe!

//with aroow function
const greeting = (name = "peter") => {
    let message = `${name}, welcome to our universe!`
    return message;
} 

console.log(greeting());           //peter wwlcome to our universe!
console.log(greeting("abhishek"));  //abhishek welcome to our universe!
```

```javascript
function calculateAge(birthYear, currentYear = 2022) {
    let age = currentYear - birthYear
    return age;
}
console.log('age:', calculateAge(1997)); //22

//with arrow function 
const calculateAge = (birthYear, currentYear = 2022) => {
    let age = currentYear - birthYear
    return age;
}
console.log('age:', calculateAge(1997)); //22
```

```javascript
function weightOfObject(mass, gravity = 9.81) {
    let weight = mass * gravity + 'n'
    return weight;
}
console.log("weight of an object in newton", weightOfObject(100)) //981n

//with arrow function
const weightOFobject = (mass, gravity = 9.81) => {
    let weight = mass * gravity + 'n'
    return weight;
}
console.log("weight of an object in newton", weightOfObject(100)) //981n
```

__currying function__

__unary function__

__higher order function__

a function that takes another funtion as a parameter and return a function as a value, the functio that pass as a parameter is called as callback.


__call stack__

1.firstly the code get executed inside an environment is called as code execution contexts this follows the synchronous code execution pattern
2.code execute single threaded it means the code executes one by one
3.funciton invocation creates a stack frame and that occupy temporary memory 
4.it works and follow the principle of LIFO

in summery, we have an empy callstack and then when we invokes a function it get push inside the callstack and poped out automatically when the function get executed  and the call stack get empty again.

__stack overflow__

when the stack takes more space then it was assign it gets an error called stackoverfilow.

this is comes to the picture when we deal with recursive functions, it is a fucntion that call itself multiple times with out any exit point . so when we call a recursive function the browser throws an error "maximum call size exceeds" this is what we call stack overflow

__constructor function__

These functions are the most conventional way to create objects that use functionality from each other using prototypal inheritance.

```javascript

function Person(name) {
	// 1
	this.name = name;
	this.greet = function() {
		console.log("Hello, I'm " + this.name);
	};
}
//2
var person = new Person("Jack Johnson");

//3
console.log(Object.getPrototypeOf(person)); // Person {}

```
__Remember__ - The prototype of a subclass is the superclass.
this refers to the object currently within the scope of the Person function. It sets it’s own property name as the value of the parameter passed into the function.

While creating an object with construtor pattern, without using this keyword function and variables are private.

A new object person is created using the constructor function. When you use new , it binds a newly created object to the this keyword within the called constructor function. This binding allows the person object to reference all the functionality from within the constructor function.

The object we just created has a property called prototype, and the value is just the Person object template! So when you call a function like greet() from the person object, the browser checks the person object for the function. If it’s not in that object, the browser checks to see if it’s declared within the prototype object that is a property of the person object. It goes up the “chain” of objects and their prototype properties until it either finds the function or doesn’t find it, which means the function is undefined. The prototype property is the place where inherited members are defined.

__Debounce__:


Debounce functions in JavaScript are higher-order functions that limit the rate at which another function gets called.

a higher order function a function that takes another function as an argument or return as a function as a part of return statement.here the debounce does the both.
the most common way to use debounce is to in an eventlistener attach to a html element.

Say that you have a function named myFunc that gets called each time you type something into an input field. After going through the requirements for your project, you decide that you want to change the experience.

Instead, you want myFunc to execute when at least 2 seconds have passed since the last time you typed something in.

This is where a debounce can comes into play. Instead of passing myFunc to the event listener, you would pass in the debounce. The debounce itself would then take myFunc as an argument, along with the number 2000.
```javascript

function debounce( callback, delay ) {
    let timeout;
    return function() {
        clearTimeout( timeout );
        timeout = setTimeout( callback, delay );
    }
}

```
Debounce funtion is simple yet more powerful, function that can have noticeable impact on most javascript applications while it is fun to use it but most organisation use debounce as to increase the performance of their applications.

__throttling__

throttling returns a function and invokes the callback function with a x ms time interval of time only the first time it invoked imediatly.

the main difference btween the debounce and throttling is both returns the function n number of times but only invokes the callback  and where debounce wait for x ms after the last call where as the throttling invokes the callback function on each x ms interval of time.
it prevent the frequent calling of the funciton.