'use strict';

const http = require('http');
const map = require('through2-map');

const listen_port = process.argv[2];

function usage(){
  console.log(`Usage: ${process.argv[0]} ${process.argv[1]} <port>`);
}
if (!listen_port){
  usage();
  process.exit(1);
}

const uppercaserer_server = http.createServer(function(request, response){
  response.writeHead(200, {
    'content-type': 'text/plain'
  });
  request.pipe(map(function(chunk){
    return chunk.toString().toUpperCase();
  })).pipe(response);
});
uppercaserer_server.listen(Number(listen_port));

