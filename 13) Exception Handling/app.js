console.log('Exception Handling ! ');

function divideNumbers(a, b) {
    try {
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
      }
  
      if (b === 0) {
        throw new Error('Cannot divide by zero');
      }
  
      var result = a / b;
      console.log('Result:', result);
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      console.log('Division operation completed');
    }
  }
  
  // Example usages
  divideNumbers(10, 2);   // Result: 5, Division operation completed
  divideNumbers('abc', 2); // Error: Both arguments must be numbers, Division operation completed
  divideNumbers(8, 0);     // Error: Cannot divide by zero, Division operation completed
  