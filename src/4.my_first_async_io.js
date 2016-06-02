'use strict';

const fs = require('fs');
const input_file = process.argv.slice(2, 3)[0];

fs.readFile(input_file, {
  encoding: 'utf8'
}, function(err, file_contents){
  if (err) throw err;

  const num_lines = !file_contents.length ? 0 : Math.max(
    file_contents.split('\n').length - 1,
    1
  );
  console.log(num_lines);
});

