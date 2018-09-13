const { printMenu, printInventory } = require('./show');
const readline = require('readline');

const operateMachine = (menu, inv) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on('line', (input) => {
    input = input.trim();
    if(input === 'r' || input === 'R') {
      console.log('Restocking BaristaMatic');
      printMenu(menu);
      printInventory(inv);
    } else if(input === 'Q' || input === 'q') {
      console.log('Closing BaristaMatic');
      process.exit(0);
    } else {
      prepareOrder()
    }
    rl.prompt();
  }).on('close', () => {
    process.exit(0);
  });
}

const prepareOrder = (menu, inv, orderInput) => {

}


module.exports = {
  operateMachine
};
