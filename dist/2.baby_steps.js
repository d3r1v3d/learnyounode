'use strict';

var summed_args = process.argv.slice(2).map(function (elem) {
  return Number(elem);
}).filter(function (elem) {
  return !Number.isNaN(elem);
}).reduce(function (result, elem) {
  return result + elem;
}, 0);

console.log(summed_args);