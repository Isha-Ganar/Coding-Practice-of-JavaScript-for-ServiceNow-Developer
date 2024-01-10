function fetchData(callback) {
  // Simulating an asynchronous operation (e.g., fetching data from a server)
  setTimeout(function () {
    const data = "Hello, World!";
    callback(data);
  }, 3000);
}

function processData(data) {
  console.log("Processed data:", data);
}

fetchData(processData);
