console.log('Learning Arrays !');

//  You can create an array in JavaScript using the following methods:

//  1) Array Literal:
var fruits = ['Apple', 'Orange', 'Banana', 'Orange'];
console.log(fruits);

//  2)Array Constructor:
var fruit = new Array('Kivi', 'Lichi', 'Dragonfruit');
console.log(fruit);

// Elements in an array are accessed using zero-based indices.
var firstFruit = fruits[0];  // Access the first element ('Apple')
console.log('firstFruit => ', firstFruit);

var secondFruit = fruit[1]; // Access the second element ('Banana')
console.log('secondFruit => ', secondFruit);


// Array Methods:
fruits.push('Grapes') // Add 'Grapes' to the end of the array
console.log(fruits);

var lastFruit = fruit.pop();  // Remove and return the last element 
console.log(lastFruit);
console.log(fruit);

fruits.unshift('pomegranate'); // Add 'pomegranate' to the beginning of the array
console.log(fruits);

var temp = fruits.shift(); // Remove and return the first element ('pomegranate')
console.log(temp);
console.log(fruits);

var orangeIndex = fruits.indexOf('Orange'); // Find the index of 'Orange'
var lastIndexOfOrange = fruits.lastIndexOf('Orange'); // Find the last index of 'Orange'
console.log('orangeIndex => ', orangeIndex, ' lastIndexOfOrange => ', lastIndexOfOrange);

fruits.splice(3, 2, 'Mango', 'Pineapple', 'Berry', 'Watermelon'); //starting from 3rd index removes 2 values and adds next mentinoed values.
console.log(fruits);

var slicedFruits = fruits.slice(3, 5); // Returns a new array containing elements from index 3 to 5 (excluding 5)
console.log(slicedFruits);

fruits.sort();
console.log(fruits);

var allFruits = fruit.concat(fruits);
console.log(allFruits);


// Iterating through Arrays:
console.warn('Iterating using for loop');
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.warn('Iterating using forEach loop & function');
fruits.forEach(function(fr) {
  console.log(fr);
});

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const arr4 = ["Isha","Disha"];
const myChildren = arr1.concat(arr2, arr3,arr4);
console.log(myChildren);