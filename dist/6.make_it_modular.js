'use strict';

var filtered_ls = require('./6.filtered_ls.js');

var ls_dir = process.argv[2];
var filter_ext = process.argv[3];

function usage() {
  console.log('Usage: ' + process.argv[0] + ' ' + process.argv[1] + ' <dir to ls> <ext to filter>');
}
if (!ls_dir || !filter_ext) {
  usage();
  process.exit(1);
}

filtered_ls(ls_dir, filter_ext, function (err, files) {
  if (err) throw err;

  files.forEach(function (file) {
    return console.log(file);
  });
});