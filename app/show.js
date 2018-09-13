const printInventory = (inv) => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('Welcome to the BaristaMatic!');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('Please Enter an Order Below');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('"Q" to quit');
  console.log('"R" to restock inventory')
  console.log('~~~~~~~~~~~~~~~~~~~~~~HELLO~~~~~~');
  console.log('Inventory:');
  Object.keys(inv).sort().forEach(ingr => {
    console.log(`${inv[ingr].name}` + ',' + `${inv[ingr].stock}`);
  });
}

const printMenu = (menu) => {
  console.log('Menu:');
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

