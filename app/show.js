const chalk = require('chalk');

const printInventory = (inv) => {
  console.log(chalk.redBright('Inventory:'));
  Object.keys(inv).sort().forEach(ingr => {
    console.log(`${inv[ingr].name}` + ',' + `${inv[ingr].stock}`);
  });
}

const printMenu = (menu) => {
  console.log(chalk.redBright('Menu:'));
  let drinks = Object.keys(menu).sort();
  drinks.forEach(drink => {
    if(menu.hasOwnProperty(drink)) {
      let i = drinks.indexOf(drink);
      console.log(`${i+1}` + '.' + `${menu[drink].name}` + ',$' + `${menu[drink].price.toFixed(2)}` + ',' + `${menu[drink].inStock}`);
    }
  });
}


module.exports = {
  printInventory,
  printMenu
}

