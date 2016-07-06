'use strict';

const http = require('http');
const url = require('url');

const listen_port = process.argv[2];

function usage(){
  console.log(`Usage: ${process.argv[0]} ${process.argv[1]} <port>`);
}
if (!listen_port){
  usage();
  process.exit(1);
}

const api_server = http.createServer(function(request, response){  
  const request_url = url.parse(request.url, true);
  let api_response = '';
  
  if (request_url.query.iso){
    const iso_date = new Date(request_url.query.iso);

    switch (request_url.pathname){
    case '/api/parsetime':    
      api_response = {
        'hour': iso_date.getHours(),
        'minute': iso_date.getMinutes(),
        'second': iso_date.getSeconds()
      };
      break;
    case '/api/unixtime':
      api_response = {
        'unixtime': iso_date.getTime()
      };
      break;
    default:
      response.writeHead(404);
      response.end();
      return;
    }

    response.writeHead(200, {
      'content-type': 'application/json'
    });
    response.end(
      JSON.stringify(api_response)
    );
  }
  else {
    response.writeHead(404);
    response.end();
  }
});
api_server.listen(Number(listen_port));

