const fs = require('fs');
const util = require('util');
const chalk = require('chalk');
const mathErfc = require( 'math-erfc' );

const TAG = '[utils]';

const printMessage = (type, TAG, text) => {
  switch(type) {
    case 'error':
      console.log(chalk.red(`${TAG} ${text}`));
      break;
    case 'warning':
      console.log(chalk.yellow(`${TAG} ${text}`));
      break;
    case 'info':
      console.log(chalk.blue(`${TAG} ${text}`));
      break;
    case 'success':
      console.log(chalk.green(`${TAG} ${text}`));
      break;
    default:
      console.log(chalk.grey(`${TAG} ${text}`));
  }
};

const erfc = (num) => (mathErfc(num));

const conclusion = (message, Pval) => {
  if(Pval > 0.01) {
    printMessage('info', message.TAG, `${message.type} conclusion`);
    printMessage('success', message.TAG, 'The sequence is random.')
  } else {
    printMessage('warning', message.TAG, 'The sequence is NON-random.')
  }
};

const dec2bin = (dec) => ((dec >>> 0).toString(2));

module.exports = {
  printMessage,
  erfc,
  conclusion,
  dec2bin
};