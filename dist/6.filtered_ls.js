'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function (ls_dir, filter_ext, ls_cb) {
  var ext_to_match = '.' + filter_ext;
  fs.readdir(ls_dir, function (err, files) {
    if (err) return ls_cb(err);

    return ls_cb(null, files.filter(function (file) {
      return path.extname(file) === ext_to_match;
    }));
  });
};