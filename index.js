const fs = require("fs");

let myStream = fs.createReadStream("data.txt", "utf8");
// let word = process.argv[2];
// let path = process.argv[3];
let [word, path] = process.argv.slice(2);

let chunkCounter = 0;
let wordTotal = 0;

myStream.on("data", chunk => {
  console.log(`I am reading ${chunkCounter}`);
  chunkCounter++;
  let arr = chunk.split(word);
  let res = arr.length - 1;
  wordTotal += res;
});

myStream.on("end", () => {
  console.log(`End of data`);
  console.log(`Number of chunks: ${chunkCounter}`);
  console.log(`Found ${word} ${wordTotal} times`);
});

myStream.on("error", err => {
  console.log(`Something went wrong`);
  console.log(err);
});
