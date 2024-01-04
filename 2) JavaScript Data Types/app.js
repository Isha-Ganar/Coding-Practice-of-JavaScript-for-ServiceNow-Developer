var un_defined = undefined;
console.log('1) undefined Data type => ', typeof un_defined);

var a;
console.log('1) undefined Data type => ',typeof a);

var exampleNull = null;
console.log('2) null Data type => ',typeof exampleNull); 

var exampleBoolean = true;
console.log('3) Boolean Data type => ',typeof exampleBoolean); 

var exampleNumber = 387;
console.log('4) number Data type => ', typeof exampleNumber); 

var exampleString = "Hello, World!";
console.log('5) String Data type =>', typeof exampleString);

var exampleObject = { key: "value" };
console.log('6) Object Data type =>', typeof exampleObject); 

var exampleArray = [1, 2, 3];
console.log('7) Array Data type =>', typeof exampleArray); 

var exampleFunction = function() {
    console.log("Hello from the function!");
  };
  
  exampleFunction();

  console.log('8) Function Data type =>', typeof exampleFunction);