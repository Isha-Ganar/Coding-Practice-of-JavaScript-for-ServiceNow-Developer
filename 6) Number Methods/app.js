console.log('Learning Number Methods !');


// toFixed method is used to convert a number to a string, 
// rounding it to the specified number of decimal places.

var num = 123.456789;
var roundedNum = num.toFixed(2); // 123.46
console.log('roundedNum => ', roundedNum);

//parseInt function parses a string and returns an integer
var parsedInt = parseInt("123"); // 123
console.log('parsedInt => ', parsedInt);
console.log('Type', typeof parsedInt);

//isFinite function checks if a given value is a finite number
console.log('is Finite?  => ', isFinite(- Infinity)); // false
console.log('is Finite?  => ', isFinite(Infinity)); // false
console.log('is Finite?  => ', isFinite(736)); // true

// toExponential method converts a number to exponential notation 
// with a specified number of digits after the decimal point
var num = 736.000325;
console.log('toExponential => ',num.toExponential(2));