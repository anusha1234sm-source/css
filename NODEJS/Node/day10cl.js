var fs = require("fs");

var data = "Books are a uniquely portable magic.";

var wrStream = fs.createWriteStream("book.txt");

wrStream.write(data, "utf8");
wrStream.end();

wrStream.on("finish", function () {
  console.log("Writing has completed.");

  var rdStream = fs.createReadStream("book.txt");

  console.log("File Content:");

  rdStream.on("data", function (chunk) {
    console.log(chunk);
  });

  rdStream.on("end", function () {
    console.log("Writing and reading are completed.");
  });

  rdStream.on("error", function (err) {
    console.log(err);
  });
});

wrStream.on("error", function (err) {
  console.log(err);
});
