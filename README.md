# daily-coding-practice
in this repo contain all the daily javascript code practices of diffrent topics with  well structured and maintained code.

__constructor function

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
__Remember - The prototype of a subclass is the superclass.
this refers to the object currently within the scope of the Person function. It sets it’s own property name as the value of the parameter passed into the function.

While creating an object with construtor pattern, without using this keyword function and variables are private.

A new object person is created using the constructor function. When you use new , it binds a newly created object to the this keyword within the called constructor function. This binding allows the person object to reference all the functionality from within the constructor function.

The object we just created has a property called prototype, and the value is just the Person object template! So when you call a function like greet() from the person object, the browser checks the person object for the function. If it’s not in that object, the browser checks to see if it’s declared within the prototype object that is a property of the person object. It goes up the “chain” of objects and their prototype properties until it either finds the function or doesn’t find it, which means the function is undefined. The prototype property is the place where inherited members are defined.

__Debounce:
Debounce functions in JavaScript are higher-order functions that limit the rate at which another function gets called.
a higher order function a function that takes another function as an argument or return as a function as a part of return statement.here the debounce does the both.
the most common way to use debounce is to in an eventlistener attach to a html element.
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