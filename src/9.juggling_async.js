'use strict';

const http = require('http');
const concat = require('concat-stream');

const urls = process.argv.slice(2);

function usage(){
  console.log(`Usage: ${process.argv[0]} ${process.argv[1]} <url to GET> ...`);
}
if (!urls.length){
  usage();
  process.exit(1);
}

var http_responses = {};
urls.forEach(url => {
  http.get(url, function(response){
    response.setEncoding('utf8');
    response.pipe(concat(function(http_response){
      http_responses[url] = http_response;
      if (Object.keys(http_responses).length >= urls.length){
        urls.forEach(url_index => {
          console.log(http_responses[url_index]);
        });
      }
    }));
  }).on('error', console.error);
});

