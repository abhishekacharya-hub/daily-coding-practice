# daily-coding-practice
in this repo contain all the daily javascript code practices of diffrent topics with  well structured and maintained code.

constructor function

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
Remember - The prototype of a subclass is the superclass.
this refers to the object currently within the scope of the Person function. It sets it’s own property name as the value of the parameter passed into the function.

While creating an object with construtor pattern, without using this keyword function and variables are private.

A new object person is created using the constructor function. When you use new , it binds a newly created object to the this keyword within the called constructor function. This binding allows the person object to reference all the functionality from within the constructor function.

The object we just created has a property called prototype, and the value is just the Person object template! So when you call a function like greet() from the person object, the browser checks the person object for the function. If it’s not in that object, the browser checks to see if it’s declared within the prototype object that is a property of the person object. It goes up the “chain” of objects and their prototype properties until it either finds the function or doesn’t find it, which means the function is undefined. The prototype property is the place where inherited members are defined.

MOST IMPORTANT KEY POINT OF PROTOTYPE as benefitting memory leask- Method delegation can preserve memory resources because you only need one copy of each method to be shared by all instances. So, under the regular function construction way of defining (like in Prototypes-Prevents-Memory-Leaks-1-Good-Explanation.js), each new instance of function Person will have a copy of the same methods defined withing function Person. But with prototype, that method will be shared among all the instance of the Person function.
Every JavaScript object has an internal property called [[Prototype]]. If you look up a property via obj.propName or obj['propName'] and the object does not have such a property - which can be checked via obj.hasOwnProperty('propName') - the runtime looks up the property in the object referenced by [[Prototype]] instead. If the prototype-object also doesn't have such a property, its prototype is checked in turn, thus walking the original object's prototype-chain until a match is found or its end is reached. If you create a new object via new Func(), the object's [[Prototype]] property will be set to the object referenced by Func.prototype.
When you try to access a property on the new object, it checks the object’s own properties first. If it doesn’t find it there, it checks the [[Prototype]], and so on up the prototype chain until it gets back to Object.prototype, which is the root delegate for most objects.
The prototype is a property on a constructor function that sets what will become the proto property on the constructed object.
Every object can have another object as its prototype. Then the former object inherits all of its prototype’s properties. An object specifies its prototype via the internal property [[Prototype]]. The chain of objects connected by the [[Prototype]] property is called the prototype chain: