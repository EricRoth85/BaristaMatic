// const chalk = require('clalk');
// const clear = require('clear');

const { printInventory, printMenu } = require('./show.js');
const { inventory, menu } = require('./inventory-and-menu');
const { operateMachine } = require('./operation');


const start = () => {
  printInventory(inventory)
  printMenu(menu)
  operateMachine(menu, inventory)
}

start();
