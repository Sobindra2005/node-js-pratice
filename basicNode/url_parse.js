var http = require("http");
var url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    var q = url.parse(req.url, true).query;
    var txt = q.year + "<br>" + q.month +"<br> " +q.day;
    res.end(txt);
  })
  .listen(8080);
