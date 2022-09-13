//currying function
const multiArgFunction = (a, b, c) => a + b + c;
console.log(multiArgFunction(1, 2, 3)); // 6

const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
curryUnaryFunction(1)(2); // returns a function: c => 3 + c
curryUnaryFunction(1)(2)(3); // returns the number 6

//higher order function
const firstOrderFunc = () =>
  console.log("Hello, I am a First order function");
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);

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