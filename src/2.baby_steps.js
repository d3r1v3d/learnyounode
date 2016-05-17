'use strict';

const summed_args = process.argv.slice(2)
  .map(elem => Number(elem))
  .filter(elem => !Number.isNaN(elem))
  .reduce(
    (result, elem) => result + elem, 0
  );

console.log(summed_args);

