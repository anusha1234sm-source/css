var fs = require("fs");
var data = 'Learn Simple with Mashupstack';

// Creating a writable stream
var wrStream = fs.createWriteStream('result.txt');

// Write the data to stream with encoding set to utf8
wrStream.write(data,'UTF8');

// Marking the end of file
wrStream.end();

// Handling stream events
wrStream.on('finish', function() {
   console.log("Writing has completed.");
});

wrStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program has Ended");