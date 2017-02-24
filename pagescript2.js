
// second Shared Workers's connection
var sharedWorker2 = new SharedWorker("sharedWorkers.js");

sharedWorker2.port.addEventListener("message", function(e) {
  alert(e.data);
}, false);

sharedWorker2.port.start();

// post a message to the shared web worker
sharedWorker2.port.postMessage("Bohr");