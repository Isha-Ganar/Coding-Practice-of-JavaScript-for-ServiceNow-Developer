// JSON is a text format for storing and transporting data

//This example is a JSON string:
//In JavaScript, you can write string values with double or single quotes:
var jsonExample = {
    Name: "Divya",
    Age: "26",
    Occupation: "IT Engineer"
}

console.log(jsonExample);
console.log(jsonExample.Name);
console.log(jsonExample.Occupation);
console.log(jsonExample.Age);

jsonExample["Name"] = "Isha";
console.log(jsonExample);
jsonExample.Name = "Isha Ganar";
console.log(jsonExample);

var myJSON = '["Ford", "BMW", "Fiat"]';
var myArray = JSON.parse(myJSON);
console.log(myArray);


//Converting JSON Text to JavaScript Object:
var jsonString = '{"name": "John", "age": 30, "isStudent": false}';
var jsonObject = JSON.parse(jsonString);
console.log('jsonObject => ', jsonObject);

// Accessing properties of the object
console.log("Name: " + jsonObject.name);
console.log("Age: " + jsonObject.age);
console.log("Is Student: " + jsonObject.isStudent);

// Converting JavaScript Object to JSON Text:
// JavaScript object
var myObject = { name: "Alice", age: 25, isStudent: true };

// Convert JavaScript object to JSON string
var myjsonString = JSON.stringify(myObject);

// Display the JSON string
console.log(myjsonString);
