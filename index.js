#!/usr/bin/env node

'use strict';

const program = require('commander');
const ncp = require('ncp');

function fullproject(name) {
  let dirname = name;
  ncp(__dirname + '/boilerplate/', process.cwd() + '/' + name, function(err) {
    if (err) {
      return console.error(err);
    }
    console.log(dirname + ' has been created! Happy frontend-ing!');
  });
}

program
  .version('0.0.1')
  .usage('[options]')
  .option('-c, --create <name>', 'Create a full boilerplate project', fullproject)
  .parse(process.argv);
