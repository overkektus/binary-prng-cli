#!/usr/bin/env node
'use strict';

const chalk = require('chalk');
const argv = require('yargs')
  .version()
  .usage('Usage: binary-prng <command> [options]')
  .demandCommand(1, chalk.blue('You need at least one command before moving on'))
  .command(require('./lib/generate'))
  .command(require('./lib/tests'))
  .help('h')
  .alias('h', 'help')
  .argv;
