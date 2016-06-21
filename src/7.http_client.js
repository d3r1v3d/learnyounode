'use strict';

const http = require('http');

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
  response.on('data', function(data){
    console.log(data);
  }).on('error', console.error);
}).on('error', console.error);

