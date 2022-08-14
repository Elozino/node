const fs = require("fs");


const readStream = fs.createReadStream("./docs/blog3.txt", "utf8");
const writeStream = fs.createWriteStream("./docs/blog4.txt");
const writeStream1 = fs.createWriteStream("./docs/blog5.txt");

// readStream.on("data", (chunk) => {
//   console.log("NEW CHUNK")
//   // console.log(chunk)
//   // console.log(chunk.toString());
//   writeStream.write("NEW CHUNK\n");
//   writeStream.write(chunk);
// })


// writeStream.on("finish", () => {
//   console.log("file finished writing");
// })

// Piping
readStream.pipe(writeStream1);