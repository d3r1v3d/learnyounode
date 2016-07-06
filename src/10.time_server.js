'use strict';

const net = require('net');
const strftime = require('strftime');

const listen_port = process.argv[2];

function usage(){
  console.log(`Usage: ${process.argv[0]} ${process.argv[1]} <port>`);
}
if (!listen_port){
  usage();
  process.exit(1);
}

const time_server = net.createServer(function(socket){
  socket.end(`${strftime("%Y-%m-%d %H:%M")}\n`);
});
time_server.listen(Number(listen_port));

