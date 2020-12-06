"use strict";

var http = require('http');

var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url === '/') {
    fs.readFile('index.html', function (data) {
      res.write(data);
      res.end();
    });
  } else if (req.url === '/dist/style.css') {
    fs.readFile('dist/style.css', function (data) {
      res.write(data);
      res.end();
    });
  } else if (req.url === '/js.js') {
    fs.readFile('js.js', function (data) {
      res.write(data);
      res.end();
    });
  } else if (req.url === '/hangman.png') {
    var img = fs.readFileSync('./hangman.png');
    res.end(img, 'binary');
  }
}).listen(8080, function () {
  console.log('server listen on port 8080');
});