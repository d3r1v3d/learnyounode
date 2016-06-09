'use strict';

var fs = require('fs');
var path = require('path');

var ls_dir = process.argv[2];
var filter_ext = process.argv[3];

function usage() {
  console.log('Usage: ' + process.argv[0] + ' ' + process.argv[1] + ' <dir to ls> <ext to filter>');
}
if (!ls_dir || !filter_ext) {
  usage();
  process.exit(1);
}

var ext_to_match = '.' + filter_ext;
fs.readdir(ls_dir, function (err, files) {
  if (err) throw err;

  files.forEach(function (file) {
    if (path.extname(file) === ext_to_match) console.log(file);
  });
});