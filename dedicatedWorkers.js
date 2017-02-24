  
self.onmessage = function(e) {
  self.postMessage("Hello " + e.data);

  // this sentence could cause error and trigger the pagescript's onerror()
  //alert('haha1');
  if (e.data == "STOP!") self.close();
};

importScripts("lib1.js");
