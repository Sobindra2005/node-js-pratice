var uc = require('upper-case');
var http = require('http');

http.createServer(function (req, res) 
{
    res.writeHead(200, {'content-type':'text/html'});
    res.write(uc.upperCase("hello world"));
    res.end();

}).listen(8000);
