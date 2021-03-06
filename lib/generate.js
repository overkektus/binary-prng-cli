const chalk = require('chalk');
const fs = require('fs');

const utils = require('./utils');
const TAG = '[generate]';

exports.command = ['gen [type] [length] [pathTo]', 'generate', 'g'];

exports.describe = 'Generate random binary sequence';

exports.handler = function(argv) {
  switch(argv.type) {
    case 'marsaglia': {

    }
      break;
    case 'linear': {
      const seq = generateSequence(argv.length, 64, 13, 3, 23).join('');
      fs.writeFile(argv.pathTo, seq, err => {
        if(err) utils.printMessage('error', TAG, 'Error in write file.');
      });
    }
      break;
    default:
      utils.printMessage('error', TAG, 'unknown generator type');
      utils.printMessage('info', TAG, `valid types: 'linear' or 'marsaglia'`)
  }
};

const generateSequence = (len, a, k, b, mod) => {
  const seq = [];

  const generateNum = (a, k, b, mod) => {
    return (a * k + b) % mod;
  };

  for (let index = 0; index < len; index++) {
    var k = generateNum(a, k, b, mod);
    console.log(k);
    seq.push(utils.dec2bin(k));
  };

  return seq;
};

const commonMarsagliaGenerator = (b, c, K, m, n) => {
  const seq = [];


};