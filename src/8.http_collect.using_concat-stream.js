'use strict';

const http = require('http');
const concat = require('concat-stream');

const url = process.argv[2];

function usage(){
  console.log(`Usage: ${process.argv[0]} ${process.argv[1]} <url to GET>`);
}
if (!url){
  usage();
  process.exit(1);
}

http.get(url, function(response){
  response.setEncoding('utf8');
  response.pipe(concat(function(http_response){
    console.log(http_response.length);
    console.log(http_response);
  }));
}).on('error', console.error);

