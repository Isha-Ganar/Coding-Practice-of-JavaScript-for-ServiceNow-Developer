console.log('Learning Objects');

var car = { type: "Fiat", model: "500", color: "white" };

console.log('Car object value', car);

var obj = {
  "employee": {
    "name": "sonoo",
    "salary": 56000,
    "married": true
  }
}

console.log('Obj', obj);

// Creating an object using object literal syntax
var person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  sayHello: function () {
    console.log('Hello, my name is ' + this.firstName + ' ' + this.lastName + '.');
  }
};
// Accessing object properties
console.log(person.firstName); // Output: John
console.log(person['lastName']); // Output: Doe

// Calling a method
person.sayHello(); // Output: Hello, my name is John Doe.

// Constructor function  // for ES5
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  this.sayHello = function () {
    console.log('Hello, my name is ' + this.firstName + ' ' + this.lastName + '.');
  };
}

// Creating an instance of the Person object
var person1 = new Person('John', 'Doe', 30);

// Accessing properties and calling a method
console.log(person1.firstName); // Output: John
person1.sayHello(); // Output: Hello, my name is John Doe.