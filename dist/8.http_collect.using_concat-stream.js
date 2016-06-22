'use strict';

var http = require('http');
var concat = require('concat-stream');

var url = process.argv[2];

function usage() {
  console.log('Usage: ' + process.argv[0] + ' ' + process.argv[1] + ' <url to GET>');
}
if (!url) {
  usage();
  process.exit(1);
}

http.get(url, function (response) {
  response.setEncoding('utf8');
  response.pipe(concat(function (http_response) {
    console.log(http_response.length);
    console.log(http_response);
  }));
}).on('error', console.error);