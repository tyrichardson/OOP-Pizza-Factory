console.log('js is locked and loaded');

class Pizza {
  constructor(name, toppings) {
    if (!toppings) {
      this.name = name;
      this.toppings = [];
    } else {
      this.name = name;
      this.toppings = toppings;
    }
  }
    price () {
      if (this.name === 'cheesePizza') {
        return 10.00;
      } else if (this.toppings.includes('pineapple')) {
        let number = this.toppings.length;
        return 11.00 + (number * 0.99);
      } else {
        let number = this.toppings.length;
        return 10.00 + (number * 0.99);
      }
  }
}

class Size extends Pizza {
  constructor(name, toppings, size) {
    super(name, toppings);
    this.size = size;
  }
    price () {
      if (this.size === 'small') {
        if (this.name === 'cheesePizza') {
          return 8.00;
        } else if (this.toppings.includes('pineapple')) {
          let number = this.toppings.length;
          return 9.00 + number * 0.79;
        } else {
          let number = this.toppings.length;
          return 8.00 + number * 0.79;
        }
      }
      if (this.size === 'large') {
        if (this.name === 'cheesePizza') {
          return 12.0;
        } else if (this.toppings.includes('pineapple')) {
          let number = this.toppings.length;
          return 14.0 + number * 1.19;
        } else {
          let number = this.toppings.length;
          return 12.0 + number * 1.19;
        }
      }
    }
}

class Order {
  constructor(name, pizzaName) {
    this.name = name;
    this.pizzas = [pizzaName];
    }
    addPizza (pizzaName) {
      this.pizzas.push(pizzaName);
    }
    printOrder (coupon) {
      //call out to the global variable environment (glabal scope)
      let orderTotal = 0;
      let regularCounter = 0;
      let largeCounter = 0;
      for (let i = 0; i < this.pizzas.length; i++) {
        if (this.pizzas[i] === 'cheesePizza') {
          orderTotal += cheesePizza.price();
            regularCounter++;
          } else if (this.pizzas[i] === 'pepbacPizza') {
            orderTotal += pepbacPizza.price();
            regularCounter++;
          } else if (this.pizzas[i] === 'brocPizza') {
            orderTotal += brocPizza.price();
            regularCounter++;
          } else if (this.pizzas[i] === 'pinePizza') {
            orderTotal += pinePizza.price();
            regularCounter++;
          } else if (this.pizzas[i] === 'smallCheesePizza') {
            orderTotal += smallCheesePizza.price();
          } else if (this.pizzas[i] === 'smallPepbacPizza') {
            orderTotal += smallPepbacPizza.price();
          } else if (this.pizzas[i] === 'smallBrocPizza') {
            orderTotal += smallBrocPizza.price();
          } else if (this.pizzas[i] === 'smallPinePizza') {
            orderTotal += smallPinePizza.price();
          } else if (this.pizzas[i] === 'largeCheesePizza') {
            orderTotal += largeCheesePizza.price();
            largeCounter++;
          } else if (this.pizzas[i] === 'largePepbacPizza') {
            orderTotal += largePepbacPizza.price();
            largeCounter++;
          } else if (this.pizzas[i] === 'largeBrocPizza') {
            orderTotal += largeBrocPizza.price();
            largeCounter++;
          } else if (this.pizzas[i] === 'largePinePizza') {
            orderTotal += largePinePizza.price();
            largeCounter++;
          }
      }
    if (coupon === 'PIZZA25') {
      orderTotal -= (orderTotal * 0.25);
          return {discount25percent: orderTotal.toFixed(2)};
      } else if (largeCounter >= 2 && regularCounter >= 1) {
          orderTotal -= 5.00;
          return {discount5dollars: orderTotal.toFixed(2)};
      } else {
          return orderTotal.toFixed(2);
   }
  }
}

let cheesePizza = new Pizza ('cheesePizza', []);
console.log(cheesePizza.name, cheesePizza.toppings, cheesePizza.price());

let pepbacPizza = new Pizza ('pepbacPizza', ['pepperoni', 'bacon', 'cheese']);
console.log(pepbacPizza.name, pepbacPizza.toppings, pepbacPizza.price());

let brocPizza = new Pizza ('brocPizza', ['broccoli']);
console.log(brocPizza.name, brocPizza.toppings, brocPizza.price());

let pinePizza = new Pizza ('pinePizza', ['pineapple', 'canadian bacon']);
console.log(pinePizza.name, pinePizza.toppings, pinePizza.price());

let order1 = new Order ('order1', 'cheesePizza');
console.log('order1 ', order1.name, order1.pizzas);
console.log(order1.printOrder());

order1.addPizza('brocPizza');
console.log('order1 ', order1.name, order1.pizzas);
console.log(order1.printOrder());

order1.addPizza('pinePizza');
console.log('order1 ', order1.name, order1.pizzas);
console.log(order1.printOrder('PIZZA25'));

order1.addPizza('pepbacPizza');
console.log('order1 ', order1.name, order1.pizzas);
console.log(order1.printOrder());

let smallCheesePizza = new Size ('cheesePizza', [], 'small');
console.log(smallCheesePizza.name, smallCheesePizza.toppings, smallCheesePizza.size, smallCheesePizza.price());

let smallBrocPizza = new Size('brocPizza', ['broccoli'], 'small');
console.log(
  smallBrocPizza.name,
  smallBrocPizza.toppings,
  smallBrocPizza.size,
  smallBrocPizza.price()
);

let smallPinePizza = new Size(
  'pinePizza',
  ['pineapple', 'canadian bacon'],
  'small'
);
console.log(
  smallPinePizza.name,
  smallPinePizza.toppings,
  smallPinePizza.size,
  smallPinePizza.price()
);

let smallPepbacPizza = new Size(
  'pepbacPizza',
  ['pepperoni', 'bacon', 'cheese'],
  'small'
);
console.log(
  smallPepbacPizza.name,
  smallPepbacPizza.toppings,
  smallPepbacPizza.size,
  smallPepbacPizza.price()
);

let order2 = new Order('order2', 'smallCheesePizza');
console.log('order2 ', order2.name, order2.pizzas);
console.log(order2.printOrder());

order2.addPizza('smallBrocPizza');
console.log('order2 ', order2.name, order2.pizzas);
console.log(order2.printOrder());

order2.addPizza('smallPinePizza');
console.log('order2 ', order2.name, order2.pizzas);
console.log(order2.printOrder('PIZZA25'));

order2.addPizza('smallPepbacPizza');
console.log('order2 ', order2.name, order2.pizzas);
console.log(order2.printOrder());

let largeCheesePizza = new Size('cheesePizza', [], 'large');
console.log(
  largeCheesePizza.name,
  largeCheesePizza.toppings,
  largeCheesePizza.size,
  largeCheesePizza.price()
);

let largeBrocPizza = new Size('brocPizza', ['broccoli'], 'large');
console.log(
  largeBrocPizza.name,
  largeBrocPizza.toppings,
  largeBrocPizza.size,
  largeBrocPizza.price()
);

let largePinePizza = new Size(
  'pinePizza',
  ['pineapple', 'canadian bacon'],
  'large'
);
console.log(
  largePinePizza.name,
  largePinePizza.toppings,
  largePinePizza.size,
  largePinePizza.price()
);

let largePepbacPizza = new Size(
  'pepbacPizza',
  ['pepperoni', 'bacon', 'cheese'],
  'large'
);
console.log(
  largePepbacPizza.name,
  largePepbacPizza.toppings,
  largePepbacPizza.size,
  largePepbacPizza.price()
);

let order3 = new Order('order3', 'largeCheesePizza');
console.log('order3 ', order3.name, order3.pizzas);
console.log(order3.printOrder());

order3.addPizza('largeBrocPizza');
console.log('order3 ', order3.name, order3.pizzas);
console.log(order3.printOrder());

order3.addPizza('largePinePizza');
console.log('order3 ', order3.name, order3.pizzas);
console.log(order3.printOrder('PIZZA25'));

order3.addPizza('largePepbacPizza');
console.log('order3 ', order3.name, order3.pizzas);
console.log(order3.printOrder());

let order4 = new Order('order4', 'cheesePizza');
console.log('order4 ', order4.name, order4.pizzas);
console.log(order4.printOrder());

order4.addPizza('largeBrocPizza');
console.log('order4 ', order4.name, order4.pizzas);
console.log(order4.printOrder());

order4.addPizza('largePinePizza');
console.log('order4 ', order4.name, order4.pizzas);
console.log(order4.printOrder('PIZZA25'));

order4.addPizza('smallPepbacPizza');
console.log('order4 ', order4.name, order4.pizzas);
console.log(order4.printOrder());
