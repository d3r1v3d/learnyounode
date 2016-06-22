'use strict';

var http = require('http');

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

  var http_response = '';
  response.on('data', function (data) {
    http_response += data;
  }).on('end', function () {
    console.log(http_response.length);
    console.log(http_response);
  }).on('error', console.error);
}).on('error', console.error);