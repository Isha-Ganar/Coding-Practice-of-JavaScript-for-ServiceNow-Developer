// Constructor Function as a Parent 
function Person(name) {
  this.name = name;
}
// Adding method to the parent function
Person.prototype.printMyName = function () {
  console.log("My Name is :- ", this.name);
}
// creating objects
var isha = new Person("isha");
var nisha = new Person("nisha");

// accessing methods of parent function
isha.printMyName();
nisha.printMyName();

function Student(name, Standard, classTeacher) {
  Person.call(this, name);
  this.Standard = Standard;
  this.classTeacher = classTeacher;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.printMyDetails = function () {
  console.log('My name is ' + this.name + ' I am in ' + this.Standard + 'th Standard' + ' My ClassTeacher is ' + this.classTeacher);
}

var stud1 = new Student("Priti", "6", "Latadevi");
stud1.printMyName();
stud1.printMyDetails();
