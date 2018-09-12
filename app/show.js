const printInventory = (inv) => {
  console.log("Inventory:");
  Object.keys(inv).sort().forEach(ingr => {
    console.log(`${inv[ingr].name}` + "," + `${inv[ingr].available}`);
  });
}

const printMenu = (menu) => {
  console.log("Menu:");
  let drinks = Object.keys(menu).sort();
  drinks.forEach(drink => {
    if(menu.hasOwnProperty(drink)) {
      let i = drinks.indexOf(drink);
      console.log(`${i+1}` + "." + `${menu[drink].name}` + ",$" + `${menu[drink].price.toFixed(2)}` + "," + `${menu[drink].isAvailable}`);
    }
  });
}

module.exports = {
  printInventory,
  printMenu
}

