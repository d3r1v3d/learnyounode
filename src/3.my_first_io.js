'use strict';

const fs = require('fs');

const input_file = process.argv.slice(2, 3)[0];
if (input_file && fs.existsSync(input_file)){
  const input_string = fs.readFileSync(input_file, 'utf8');
  const num_lines = !input_string.length ? 0 : Math.max(
    input_string.split('\n').length - 1,
    1
  );
  console.log(num_lines);
}

