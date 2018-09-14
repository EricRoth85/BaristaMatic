const { printMenu, printInventory } = require('./show');
const readline = require('readline');


const prepareOrder = (menu, inv, input) => {
  input = Number(input);
  const drinks = Object.keys(menu).sort();
  if(input > 0 && input <= drinks.length && !isNaN(input)) {
    let order = menu[drinks[input - 1]]
    if(order.inStock) {
      console.log('DISPENSING: ', `${order.name}`);
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
      printInventory(inv);
      printMenu(menu);
    } else {
      console.log('OUT OF STOCK: ', `${order.name}`);
    }
  } else {
    console.log('INVALID SELECTION: ', `${input}`);
  }
}

const checkIfInStock = (menu, inv) => {
  for(let drink in menu) {
    if(menu.hasOwnProperty(drink)) {
      let ingredients = menu[drink].ingredients
        for(let ingredient in ingredients) {
          if(ingredients.hasOwnProperty(ingredient) && ingredients[ingredient] <= inv[ingredient].stock) {
            menu[drink].inStock = true;
          } else {
            menu[drink].inStock = false;
            break;
          }
        }
    }
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
      printMenu(menu);
      printInventory(inv);
    } else if(input === 'Q' || input === 'q') {
      console.log('Closing BaristaMatic...');
      process.exit(0);
    } else {
      prepareOrder(menu, inv, input)
      checkIfInStock(menu, inv)
    }
    rl.prompt();
  }).on('close', () => {
    process.exit(0);
  });
}

const restockInventory = (menu, inv) => {
  for(let ingredient in inv) {
    if(inv.hasOwnProperty(ingredient)) {
      inv[ingredient].stock = 10;
    }
  }
  checkIfInStock(menu, inv)
}


module.exports = {
  operateMachine
};
