var express = require('express');
var fs=require('fs');
var buf = new buffer(50);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
   buf = fs.readFileSync('index.html');
//  response.send('Hello World2!');
  response.send (buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
