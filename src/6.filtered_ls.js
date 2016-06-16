'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function(ls_dir, filter_ext, ls_cb){
  const ext_to_match = `.${filter_ext}`;
  fs.readdir(ls_dir, function(err, files){
    if (err) return ls_cb(err);

    return ls_cb(null, files.filter(
      file => path.extname(file) === ext_to_match
    ));
  });
};

