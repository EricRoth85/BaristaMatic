const { printMenu, printInventory } = require('./show');
const readline = require('readline');
const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');

const checkIfInStock = (menu, inv) => {
  for(let drink in menu) {
    if(menu.hasOwnProperty(drink)) {
      let ingredients = menu[drink].ingredients
        for(let ingredient in ingredients) {
          if(ingredients.hasOwnProperty(ingredient)) {
            if(ingredients[ingredient] <= inv[ingredient].stock) {
              menu[drink].inStock = true;
            } else {
              menu[drink].inStock = false;
              break;
            }
          }
        }
    }
  }
}

const restockInventory = (menu, inv) => {
  for(let ingredient in inv) {
    if(inv.hasOwnProperty(ingredient)) {
      inv[ingredient].stock = 10;
    }
  }
  checkIfInStock(menu, inv)
}

const updateStockAfterOrder = (menu, inv, drink) => {
  let ingredients = menu[drink].ingredients;
  for(let ingredient in ingredients) {
    if(ingredients.hasOwnProperty(ingredient)) {
      inv[ingredient].stock = inv[ingredient].stock - ingredients[ingredient]
    }
  }
  checkIfInStock(menu, inv)
}

const prepareOrder = (menu, inv, input) => {
  input = Number(input);
  const drinks = Object.keys(menu).sort();
  if(input > 0 && input <= drinks.length && !isNaN(input)) {
    let order = menu[drinks[input - 1]]
    if(order.inStock) {
      console.log(chalk.bgCyan('DISPENSING: ', `${order.name}`));
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
      updateStockAfterOrder(menu, inv, drinks[input - 1])
      printInventory(inv);
      printMenu(menu);
    } else {
      console.log(chalk.red('OUT OF STOCK: ', `${order.name}`));
    }
  } else {
    console.log(chalk.red('INVALID SELECTION: ', `${input}`));
  }
}

const operateMachine = (menu, inv) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on('line', (input) => {
    input = input.trim();
    if(input === 'r' || input === 'R') {
      console.log('Restocking BaristaMatic...');
      restockInventory(menu, inv);
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
      console.log(chalk.blueBright('Welcome BACK to the RESTOCKED BaristaMatic!'));
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
      console.log(chalk.greenBright('Please Enter an Order Below'));
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
      console.log('"Q" to quit');
      console.log('"R" to restock inventory')
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
      printMenu(menu);
      printInventory(inv);
    } else if(input === 'Q' || input === 'q') {
      console.log('Closing BaristaMatic...');
      process.exit(0);
    } else {
      prepareOrder(menu, inv, input)
    }
    rl.prompt();
  }).on('close', () => {
    process.exit(0);
  });
}

module.exports = {
  operateMachine,
  checkIfInStock,
  restockInventory,
  updateStockAfterOrder
};
