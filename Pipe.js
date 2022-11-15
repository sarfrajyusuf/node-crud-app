const fs = require("fs");
let readStram = fs.createReadStream("input.txt");
let writeStram = fs.createWriteStream("output.txt");

readStram.pipe(writeStram);
