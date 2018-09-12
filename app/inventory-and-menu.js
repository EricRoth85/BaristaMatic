let inventory = {
  coffee: {
    name: 'Coffee',
    unitCost: 0.75,
    available: 10
  },
  decafCoffee: {
    name: 'Decaf Coffee',
    unitCost: 0.75,
    available: 10
  },
  sugar: {
    name: 'Sugar',
    unitCost: 0.25,
    available: 10
  },
  cream: {
    name: 'Cream',
    unitCost: 0.25,
    available: 10
  },
  steamedMilk: {
    name: 'Steamed Milk',
    unitCost: 0.35,
    available: 10
  },
  foamedMilk: {
    name: 'Foamed Milk',
    unitCost: 0.35,
    available: 10
  },
  espresso: {
    name: 'Espresso',
    unitCost: 1.10,
    available: 10
  },
  cocoa: {
    name: 'Cocoa',
    unitCost: 0.90,
    available: 10
  },
  whippedCream: {
    name: 'Whipped Cream',
    unitCost: 1.00,
    available: 10
  },
}

let menu = {
  coffee: {
    name: 'Coffee',
    ingredients: {
      coffee: 3,
      sugar: 1,
      cream: 1
    },
    price: 2.75,
    isAvailable: true
  },
  decafCoffee: {
    name: 'Decaf Coffee',
    ingredients: {
        decafCoffee: 3,
        sugar: 1,
        cream: 1
    },
    price: 2.75,
    isAvailable: true
  },
  caffeLatte: {
    name: 'Caffe Latte',
    ingredients: {
        espresso: 2,
        steamedMilk: 1
    },
    price: 2.55,
    isAvailable: true
  },
  caffeAmericano: {
    name: 'Caffe Americano',
    ingredients: {
      espresso: 3
    },
    price: 3.30,
    isAvailable: true
  },
  caffeMocha: {
    name: 'Caffe Mocha',
    ingredients: {
      espresso: 1,
      cocoa: 1,
      steamedMilk: 1,
      whippedCream: 1
    },
    price: 2.70,
    isAvailable: true
  },
  cappuccino: {
    name: 'Cappuccino',
    ingredients: {
      espresso: 2,
      steamedMilk: 1,
      foamedMilk: 1
    },
    price: 2.90,
    isAvailable: true
  }
}

module.exports = {
  inventory,
  menu
}
