const fs = require("fs");
const data = fs.readFileSync("index.js","utf-8");
console.log(data)
const path = require("path");
let newpath = path.join("my-folder","utilis","index.js";
console.log(newpath);