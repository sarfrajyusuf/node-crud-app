const fs = require("fs");
let content = "Hello therI am sarfraj";
const writeStream = fs.createWriteStream("output.txt");
writeStream.write(content, "utf-8");
writeStream.end();

writeStream.on("finish", () => {
  console.log("writing completed");
});
