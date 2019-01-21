#!/usr/bin/env node

'use strict';
var program = require('commander');
const chalk = require('chalk');
var figlet = require('figlet');
const terminalLink = require('terminal-link');

// Display Ascii
function displayAscii() {
  figlet('HOWTO CLI', function (err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(chalk.yellow(data))
  });
}


//  Data
var profile = {
  name: "Jeff Shomali",
  contacts: {
    website: 'Jeffshomali.com',
    github: 'github.com/JeffShomali ',
    email: 'info@jeffshomali.com',
    phone: '(415) 504-1135',
    location: 'San Francisco, Bay Area',
    twitter: '@jeffshomali',
    linkedin: 'in/jeffshomali',
    skype: 'jeffshomali'
  }
}



function start() {
  displayAscii()
}




// Command
program
  .version('0.0.1', '-v, --version')
  .option('-a, --all', 'Display All Options')
  .parse(process.argv);


// if (program.args.length == 0) program.help();

if (program.all) {
  start()
}else {
  program.help()
}
