const { printInventory, printMenu } = require('./show.js');
const { inventory, menu } = require('./inventory-and-menu');
const { operateMachine, checkIfInStock, restockInventory } = require('./operation');
const chalk = require('chalk');

const start = () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(chalk.blueBright('Welcome to the BaristaMatic!'));
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(chalk.greenBright('Please Enter an Order Below'));
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('"Q" to quit');
  console.log('"R" to restock inventory')
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  printInventory(inventory)
  printMenu(menu)
  checkIfInStock(menu, inventory)
  restockInventory(menu, inventory)
  operateMachine(menu, inventory)
}

start();
