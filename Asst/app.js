console.log("Hii Isha");

var myDate = new Date();

console.log('Date ',myDate.setMonth(12).toLocaleString());

var myArr = [2,3,56,34,32];

myArr[2] = 43;

console.log(myArr);

myArr.unshift(23);

console.log(myArr);

function mySort(Arr){
    
   var arr1 = Arr.sort();
   console.log(arr1);
}

mySort(myArr);

function Average(arr){
var sum = 0;
for(i=0;i<arr.length;i++){
    sum = sum + i
}
var avg = sum/(arr.length);
console.log(avg);
}

Average(myArr);

setTimeout(function () {
    console.log('Hello');
},3000)