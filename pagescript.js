
// Dedicated Workers
var dedicatedWorker = new Worker("dedicatedWorkers.js");

// receive messages from web worker
dedicatedWorker.onmessage = function(e) {
  alert(e.data);
};

// send message to web worker
dedicatedWorker.postMessage("Jennifer");

dedicatedWorker.onerror = function(e) {
  alert("Error in file: "+e.filename+"nline: "+e.lineno+"nDescription: "+e.message);
};

// send stop message to web worker
setTimeout(function (){
  dedicatedWorker.postMessage("STOP!");
}, 1000);

setTimeout(function (){
  dedicatedWorker.postMessage("Jennifer");
}, 2000);


// first Shared Workers's connection
var sharedWorker = new SharedWorker("sharedWorkers.js");

sharedWorker.port.addEventListener("message", function(e) {
  alert(e.data);
}, false);

sharedWorker.port.start();

// post a message to the shared web worker
sharedWorker.port.postMessage("Alyssa");