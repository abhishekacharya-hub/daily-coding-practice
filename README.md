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
__array methods__

__map()__

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