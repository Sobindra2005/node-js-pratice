var fs = require('fs');

fs.open('demo-appendfile', 'w', function (err, file) {
  if (err) throw err;

  var contentToWrite ='hellki!!';

  fs.appendFile(file, contentToWrite, function (err) {
    if (err) throw err;
  });

  fs.close(file, function (err) {
    if (err) throw err;
    console.log('file successfully written and saved!!');
  });
});
