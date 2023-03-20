const fs = require("fs");
const path = require("path");
const utils = require("./utils.js");


const fileName = process.argv[2];
const inputFilePath = path.join("input",fileName);
const outputFilepath = path.join("output",fileName);



console.log("Processing file:",inputFilePath);
if (fs.existsSync(inputFilePath)){
const data =  fs.readFileSync("input/cart1.json","utf-8");
const jsonData = JSON.parse(data);
console.log(jsonData);



console.log(jsonData[0]);
let result = utils.calculateTotalPrice(jsonData);
console.log("result:",result);

console.log("Writing to file:",outputFilepath);
fs.writeFileSync(outputFilepath,JSON.stringify(result));
}

else {
    console.log("File not found", inputFilePath)
}