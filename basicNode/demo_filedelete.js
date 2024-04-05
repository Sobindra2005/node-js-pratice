var fs = require('fs');

// fs.appendFile("mynewfile2.txt",'hello iets me sobhindra budhathoki i am from nepL', function (err) 
fs.unlink("mynewfile2.txt", function (err){
  if (err) throw err;
//   console.log("file successfully CREATED!");
console.log("file successfully deleted!");
});
