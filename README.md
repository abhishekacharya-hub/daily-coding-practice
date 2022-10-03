# daily-coding-practice
in this repo contain all the daily javascript code practices of diffrent topics with  well structured and maintained code.

These functions are the most conventional way to create objects that use functionality from each other using prototypal inheritance.

```function Person(name) {
	// 1
	this.name = name;
	this.greet = function() {
		console.log("Hello, I'm " + this.name);
	};
}
//2
var person = new Person("Jack Johnson");

//3
console.log(Object.getPrototypeOf(person)); // Person {}```