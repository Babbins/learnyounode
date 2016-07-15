var fs = require('fs');
var dirName = process.argv[2];
var extType = process.argv[3];
var extPattern = new RegExp("\.+" + extType + "$");

var file = fs.readdir(dirName,function(error,files){
  for (var i = 0; i < files.length; i++) {
    if(extPattern.test(files[i])){
      console.log(files[i]);
    }
  }
});
