console.warn('(1) All Arithmetic Operators !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
var result = 5 + 15;
console.log('result of Addition operator =>', result);
result = 13 - 3;
console.log('result of Subtraction operator =>', result);
result = 5 * 8;
console.log('result of Multiplication operator =>', result);
result = 166 / 2;
console.log('result of Division operator =>', result);
result = 165 % 4;
console.log('result of modulus operator =>', result);
var demo = 6;
demo = ++demo;
console.log('result of pre-Increment operator =>', demo);
demo = --demo;
console.log('result of pre-Decrement operator =>', demo);


console.warn('(2) All Assignment Operators !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
var AssOps;
AssOps = 39;
console.log('Assignment operator value =>', AssOps);
AssOps += 1;
console.log('Addition Assignment operator value =>', AssOps);
AssOps -= 5;
console.log('Subtraction Assignment operator value =>', AssOps);
AssOps *= 10;
console.log('Multiplication Assignment operator value =>', AssOps);
AssOps /= 3;
console.log('Division Assignment operator value =>', AssOps);
AssOps %= 7;
console.log('modulus Assignment operator value =>', AssOps);


console.warn('(3) All Comparison Operators !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
var x = 5;
var y = "5";
var z = 9;
console.log('Equality operator value =>', x == y);
console.log('Strict Equality operator value =>', x === y);
console.log('Inequality operator value =>', x != y);
console.log('Strict Inequality operator value =>', x !== y);
console.log('Less Than operator value =>',x<z);
console.log('Greater Than operator value =>',x>z);
console.log('Less Than or Equal to operator value =>',y<=z);
console.log('Greater Than or Equal to operator value =>',y>=z);


console.warn('(4) All logical Operators !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
var val1 = true;
var val2 = false;
console.log('Logical AND && operator value =>', val1 && val2);
console.log('Logical OR || operator value =>', val1 || val2);
console.log('Logical NOT ! operator value =>', !val2);

console.warn('(5) All Bitwise Operators !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
var a = 15;  
var b = 38;
console.log('bitwise AND operation value =>',a & b);
console.log('bitwise OR operation value =>',a | b);
console.log(' bitwise XOR (exclusive OR) operation value =>',a ^ b);
console.log('bitwise NOT operation value =>',~a);
console.log('Left Shift << operation value =>', a<<b);
console.log('Right Shift >> operation value =>', 753>>72);
console.log('Unsigned Right Shift >>>', -223>>>78);

console.warn('(6) All Unary Operators !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
console.log('Unary Plus + operator =>', +y);
console.log('Unary Minus - operator =>', -a);
console.log('Unary Prefix Increment ++ operator =>', ++a);
console.log('Unary Prefix Decrement -- operator =>', --a);
console.log('Unary Postfix Increment ++ operator =>', a++);
console.log('Unary Postfix Decrement -- operator =>', a--);
console.log('Unary Typeof "typeof" operator =>', typeof y);
var result = void 42; // returns undefined 
console.log('Unary Void void operator =>',result);  
var obj = { prop: "value", name: "Tom"};
delete obj.prop;
console.log('Unary Delete delete: operator =>', obj); // {} (property is deleted)

console.warn('(7) Ternary Operator !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
var age = 60;
var state = (age >= 18) ? "Adult" : "Minor";
console.log('Ternary Operator result=>',state); 

console.warn('(8) Miscellaneous Operator !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
var p = 1, q = 2, r = 3;
console.log('Comma , Operator =>', p, q, r);

var person = { name: "John", age: 30 };
console.log('Property Existence Check in Operator =>');
console.log('name exist? ',"name" in person);  //returns true
console.log('gender exist? ',"gender" in person); //returns false

console.log('Instanceof instanceof Operator =>'); 
//Checks if an object is an instance of a particular class or constructor function.
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

var myCar = new Car("Toyota", "Camry");

console.log('myCar is an instance of the Car constructor? =>', myCar instanceof Car);