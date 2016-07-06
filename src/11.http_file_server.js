'use strict';

const http = require('http');
const fs = require('fs');

const listen_port = process.argv[2];
const file_to_serve = process.argv[3];

function usage(){
  console.log(`Usage: ${process.argv[0]} ${process.argv[1]} <port> <file to serve>`);
}
if (!listen_port || !file_to_serve){
  usage();
  process.exit(1);
}

const file_server = http.createServer(function(request, response){
  response.writeHead(200, {
    'content-type': 'text/plain'
  });
  fs.createReadStream(file_to_serve).pipe(response);
});
file_server.listen(Number(listen_port));

