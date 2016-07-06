'use strict';

var net = require('net');
var strftime = require('strftime');

var listen_port = process.argv[2];

function usage() {
  console.log('Usage: ' + process.argv[0] + ' ' + process.argv[1] + ' <port>');
}
if (!listen_port) {
  usage();
  process.exit(1);
}

var time_server = net.createServer(function (socket) {
  socket.end(strftime("%Y-%m-%d %H:%M") + '\n');
});
time_server.listen(Number(listen_port));