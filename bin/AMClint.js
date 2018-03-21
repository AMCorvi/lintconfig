#!/usr/bin/env node

const config = require('../lib/outputHelper.js')

const animChalk = require("chalk-animation");
const chalk = require("chalk");
const clear = require("cli-clear");

// Clear terminal
clear();

const initFlag = process.argv.indexOf("--init") > -1;
const addFlag = process.argv.indexOf("--add") > -1;

// Completely End Script Execution if no arguments are sent.
if (!initFlag && !addFlag)
  return console.log(chalk.yellow("no arguments provided!"));

/*
 * Determine if executes with 'init' argument
 *   & if so write eslintrc to directory
 */
if (initFlag) {
  const initMessage = animChalk.neon;
  initConfig(initMessage("Setting up eslint-config",4));
}

// Determine if exec with 'add' argument & if so install dependencies
if (addFlag) {
  const addMessage = animChalk.rainbow;
  installDependencies(addMessage("installing dependencies"));
}


function initConfig(Message) {
  const fs = require("fs");

  // write eslintrc File
  return fs.writeFile(".eslintrc.js", AMConfig(config), err => {
    if (err) throw err;

    setTimeout(function() {
      Message.stop();
      console.log(chalk.blue(".eslintrc.js has been created and saved!"));
    }, 2000);
  });
}

// Contents of eslintrc.js file
function AMConfig(config) {
  return config.configText
}


function installDependencies(Message) {
  const exec = require("child_process").exec;

  // run npm install in child process
  return exec(
    "npm install eslint eslint-plugin-react -D",
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }

      Message.stop();
      stderr ? console.log(chalk.red(`${stderr}`)) : null;
      stdout ? console.log(chalk.green(`${stdout}`)) : null;
    }
  );
}
