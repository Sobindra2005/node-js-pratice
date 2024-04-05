var url = require('url');
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    fs.readFile(filename, function (err, data) 
    {

        if (err) 
        {
         res.writeHead(404, { 'content-type': 'text/html' });
         res.end("404 not found");
        }

        else
        { 
          res.writeHead(200, { 'content-type': 'text/html'});
          res.write(data);
          res.end();
        }

    });
  })
  .listen(8000);
