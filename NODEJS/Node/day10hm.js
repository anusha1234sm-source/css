const fs = require("fs");

// Create a writable stream for the final file
const writeStream = fs.createWriteStream("full_report.txt");

// Stream 1: Read intro.txt
const stream1 = fs.createReadStream("intro.txt");

// Stream 2: Read conclusion.txt
const stream2 = fs.createReadStream("conclusion.txt");

// Pipe Stream 1 into write stream (do not end yet)
stream1.pipe(writeStream, { end: false });

// When Stream 1 finishes, pipe Stream 2
stream1.on("end", () => {
  stream2.pipe(writeStream);
});

// When Stream 2 finishes, close file and show message
stream2.on("end", () => {
  console.log("Merging complete!");
});

// Error handling
stream1.on("error", console.error);
stream2.on("error", console.error);
writeStream.on("error", console.error);
