// const chalk = require('clalk');
// const clear = require('clear');

const { printInventory, printMenu } = require('./show.js');
const { inventory, menu } = require('./inventory-and-menu')


const start = () => {
  printInventory(inventory)
  printMenu(menu)
}

start();
