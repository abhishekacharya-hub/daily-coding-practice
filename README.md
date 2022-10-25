# daily-coding-practice
in this repo contain all the daily javascript code practices of diffrent topics with  well structured and maintained code.


__object__ :

in javascript everything can be an object and object have a properties and properties have values. to create object literal we us two curly braces,

```javascript
//creating an empty object
const person = {}
```

__creating object with two values__

```javascript
const rectangle = {
    length : 20
    width : 10
}
console.log(rectangle);

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 25,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  isMarried: true,
}
console.log(person)
```

__getting value from an object__

we can access values from object using two methods 
1. using dot method
2. using square bracket

```javascript
const person = {
    firstName : 'abhsiehek',
    lastName : 'acharya',
    age : 25,
    country : 'india',
    city : 'berhampur',
    skills : [
        'HTML',
        'css',
        'javascript',
        'react',
        'nodejs',
        'express',
        'mongodb',
        'python',
        'd3.js'
    ],
    isMarried : false,
    getFullName : function() {
        return `${this.firstName} ${this.lastName}`
    },
    'phone number' : +1234355444,
}

//access values using . 
console.log(person.age);        //25
console.log(person.firstName);  //abhishek
console.log(person.lastName);   //acharya
console.log(person.getFullName());  //abhishek acharya

//access values using square bracket and key name
console.log(person['age']);       
console.log(person['firstName']);
console.log(person['lastName']);

```

__setting a new key for an object__

object is a mutable datastructure and we can manipulate after we create it

```javascript
const person = {
    firstName : 'abhishek',
    lastName : 'acharya',
    age : 26,
    country : 'india',
    city : 'berhampur',
    skills : [
        'HTML',
        'css',
        'javascript',
        'react',
        'nodejs',
        'express',
        'mongodb',
        'python',
        'd3.js'
    ],
    getFullName : function() {
        return `${this.firstName} ${this.lastName}`
    },
}

person.nationality = "Ethiopian";
person.country = "Finland";
person.title = "teacher";
person.skills.push("Meteor");
person.skills.push("SasS");
person.isMarried = true;

person.getPersonalInfo = function() {
    let skillsWithoutLastSkill = this.skills
        .slice(0, this.skills.length -1)
        .join(",")
    let lastSkill = this.skills.slice(this.skills.length-1)[0]

    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName =this.getFullName();
    let stateMent = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return stateMent;
}
console.log(person);
console.log(person.getPersonalInfo());

/*Asabeneh Yetayeh is a teacher.
He lives in Finland.
He teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS. 
```

__object methods__

there are few methods to manipulate diffrent objects
1. Object.assign
2. Object.keys
3. Object.values
4. Object.entries

```javascript

//Object.assign for copying the object
const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki',
    },
    getPersonInfo : function() {
        return `I am ${this.firstNAme}  and i live in ${this.country},${this.city} i am ${this.age}`
    }
}
const copyPerson = Object.assign({},person)
console.log(copyPerson);
```

Getting object keys using Object.keys()
_Object.keys_: To get the keys or properties of an object as an array

```javascript

//Object.keys for getting the keys of object
const key = Object.keys(copyPerson)
console.log(key);
const address = Object.keys(copyPerson.address)
console.log(address);
```

Getting object keys and values using Object.entries()
*Object.entries*:To get the keys and values in an array

```javascript

//here you will get both key and value of an object
const entry = Object.entries(copyPerson)
console.log(entry)
```

Checking properties using hasOwnProperty()
*hasOwnProperty*: To check if a specific key or property exist in an object

```javascript

//it checks wheither a specific property exist or not
console.log(copyPerson.hasOwnProperty('name'));
console.log(copyPerson.hasOwnProperty('score'));
```




__spread operator and rest operator__

spread operator expand the elements of an iterable while rest operator is the rest last element of the arg.

```javascript
//spread opertor

function sum(x,y,z) {
    return x+y+z;
}
const numbers = [12,23,34]
console.log(sum(...numbers));


const numbers = [1,2,3,4,5,6,7,8,9,10]
const [one,two,three, ...rest] = numbers
console.log(one,two,three);  //[1,2,3]
console.log(...rest);        //[4,5,6,7,8,9,10]


const frontend = ['html','css','javascript','react']
const backend = ['nodejs','express','mongodb']
const fullStack = [...frontend, ...backend]
console.log(fullStack);

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

it is a process that a function takes multiple arguments and turning in to a sequence of function each with one argument.

inshort instead of passing all argument with the same time, takes fist one and return a function, that takes the second one and return a another function and that takes third arg and return another function so on so forth untill all arg have been fulfilled.

```javascript
//normak function
function addNum(a,b,c) {
    return a+b+c;
}
console.log(addNum(12,23,34)) //69

//with currying function
const addCurry = (a) => {
    return (b) => {
        return (c) => {
            return a+ b+ c;
        }
    }
}
console.log(addCurry(10)(20)(30)); //60
```

__unary function__

unary function is a function that takes only single argument.

```javascript
function add(number) {
    return 10 + number;
}
console.log(add(20));
```

__higher order function__

higher order function is a function that takes another function as an argument and retrn a function as a value. 
that function that has pass into this is called as callback.

```javascript
const higherOrder = (a) => {
    const doSomething = (b) => {
        const doWhatEver = (c) => {
            return 2*a + 3*b + c;
        }
        return doWhatEver;
    }
    return doSomething;
}
console.log(higherOrder(3)(2)(10)); //22
```




__setting time__ :

in javascript we can execute something with in a time interval or after a delay ot time.
settimeout , setinterval

__setTimeout__

in js settimeout is higherorder function that takes a delay of time to execute the code, it takes a callback function and a duration as a parameter, the duration will be in millisecond and the callback wait for the amount of time

```javascript
function greeting() {
    console,log("hey universe");
}
setTimeout(greeting, 2000);
```
__setInterval__

in js setinterval is a highorder function that execute the function or code with an interval of time. the function takes a callback and a duration for the time interval.

```javascript
function greeting() {
    console.log("hey universe");
}
setInteval(greeting, 2000);
```




__Destructuring__ :

destructuring is unpacking array and object to distinct variables, it is allow to write cleaner and readable code.

1.array
2.object

```javascript
const numbers = [1,2,3,4]
const [numb1,num2,num3,num4] = numbers;
console.log(num3,num1); //3,1

const countries = ["norway","finland","italy","india"]
const [nor,fin,ita,ind,den = "denmark"]; = countries;
console.log(nor,fin,ind,den);
```
__destructuring nexted array__

```javascript
const fullStack = [
    ["html","css","javascript","react"],
     ["nodejs","express","mongodb"]
]
const [frontend,backend] = fullStack;
console.log(frontend,backend);
```
Getting the rest of the array using the spread operator We use three dots(...) to spread or get the rest of an array during destructuring.

```javascript
const numbers = [1,2,3,4,5,6,7,8,9,10]
const [num1,num2,num3, ...rest ] = numbers;
console.log(num1,num2,num3,...rest);

```

__destructuring when loop through array__

```javascript
const countries = [
  ["finland" , "hesinki"],
  ["swedan" , "stockhom"],
  ["norway" , "olso"]
]
for(const [country,city] of countries) {
  console.log(country,city);
}

const fullStack = [
  ['html','css','javascript','react'],
  ['nodejs','express','mongodb']
]
for(const [first,second,third,fourth] of fullStack) {
  console.log(first,second,third,fourth);
}
```
```javascript
const languages = [
    { lang: 'English', count: 91 },
  { lang: 'French', count: 45 },
  { lang: 'Arabic', count: 25 },
  { lang: 'Spanish', count: 24 },
  { lang: 'Russian', count: 9 },
  { lang: 'Portuguese', count: 9 },
  { lang: 'Dutch', count: 8 },
  { lang: 'German', count: 7 },
  { lang: 'Chinese', count: 5 },
  { lang: 'Swahili', count: 4 },
  { lang: 'Serbian', count: 4 },
]

for(const {lang,count} of languages) {
    console.log(`the ${lang} is spoken in ${count} countries`)
}
```

__destructuring object__

```javascript
const { title, price, description } = {
  title: "iPhone",
  price: 999,
  description: "The iPhone is a smartphone developed by Apple"
};
console.log(title); // iPhone
console.log(price); // 999
console.log(description); // The iPhone is a smartphone developed by Apple
```




__promise__

a function that takes another funtion as a parameter and return a function as a value, the function that pass as a parameter is called as callback.


__async and await__

__call stack__

1.firstly the code get executed inside an environment is called as code execution contexts this follows the synchronous code execution pattern
2.code execute single threaded it means the code executes one by one
3.funciton invocation creates a stack frame and that occupy temporary memory 
4.it works and follow the principle of LIFO

in summery, we have an empy callstack and then when we invokes a function it get push inside the callstack and poped out automatically when the function get executed  and the call stack get empty again.

__stack overflow__

when the stack takes more space then it was assign it gets an error called stackoverfilow.

this is comes to the picture when we deal with recursive functions, it is a fucntion that call itself multiple times with out any exit point . so when we call a recursive function the browser throws an error "maximum call size exceeds" this is what we call stack overflow.

__json__

```javascript
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
```

```javascript
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
```

```javascript
//JSON stringify
const user = {'name': 'Shashi Meda', 'email': 'shashi.meda@email.com', 'age': 28};
console.log(JSON.stringify(user));

//JSON parse
const user1 = '{"name": "Shashi Meda", "email": "shashi.meda@email.com", "age": 28}'
console.log(JSON.parse(user1));
```
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