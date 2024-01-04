function greet(name) {
  name = name || "Guest";
  console.log("Hello, " + name + "!");
}

greet();
greet('Ram');

function add(a, b) {
  return a + b;
}
console.log (add(7,9));

////callback functions
function doSomethingAsync(callback) {
  setTimeout(function() {
      console.log("Async operation complete!");
      callback();
  }, 1000);
}

function afterAsyncOperation() {
  console.log("After async operation!");
}

// Usage
doSomethingAsync(afterAsyncOperation);
