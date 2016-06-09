'use strict';

const fs = require('fs');
const path = require('path');

const ls_dir = process.argv[2];
const filter_ext = process.argv[3];

function usage(){
  console.log(`Usage: ${process.argv[0]} ${process.argv[1]} <dir to ls> <ext to filter>`);
}
if (!ls_dir || !filter_ext){
  usage();
  process.exit(1);
}

const ext_to_match = `.${filter_ext}`;
fs.readdir(ls_dir, function(err, files){
  if (err) throw err;

  files.forEach(file => {
    if (path.extname(file) === ext_to_match) console.log(file);
  });
});

