var fs = require("fs");
var rdata = '';

// Creating a readable stream
var rdStream = fs.createReadStream('sample.txt');

// Setting the encoding to utf8. 
rdStream.setEncoding('UTF8');

// Handle stream events 
rdStream.on('data', function(chunk) {
   rdata += chunk;
});

rdStream.on('end',function() {
   console.log(rdata);
});

rdStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program has Ended");