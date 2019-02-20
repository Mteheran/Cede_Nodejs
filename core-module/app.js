var fs = require('fs');

fs.writeFileSync("corn.txt", "Corn is good, corn is life");
console.log(fs.readFileSync("corn.txt").toString());

var path = require('path');
var websiteHome = "Desktop/Bucky//thenewboston/index.html";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteHome));
console.log(path.basename(websiteHome));
console.log(path.extname(websiteHome));

console.log(__dirname);
console.log(__filename);