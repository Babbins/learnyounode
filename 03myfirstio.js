var fs = require('fs');
var filename = process.argv[2];

fileContents = fs.readFileSync(filename).toString();

console.log(fileContents.split('\n').length - 1);
