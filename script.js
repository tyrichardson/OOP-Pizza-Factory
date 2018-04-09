console.log('js is locked and loaded');

class Pizza {
  constructor(topping1 = '', topping2 = '') {
  this.cheese = true;
  this.price = 10;
  this.topping1 = topping1;
  this.topping2 = topping2;
}

topOne() {
  return this.topping1;
}

pizzaPrice() {
  let yourPrice = this.price;
  let oneTopping = this.topping1;  
  let twoToppings = this.topping2;
  if (twoToppings.length > 0) {
    return yourPrice += (.99 * 2);
  } else if (oneTopping.length > 0) {
    return yourPrice += .99;
  } else {
    console.log('basic cheese pizza');
    return yourPrice;
}
}
}

let cheesePizza = new Pizza();
console.log('new cheese pizza object', cheesePizza);
console.log(cheesePizza.pizzaPrice());

let sausagePizza = new Pizza('sausage');
console.log('new sausage pizza object', sausagePizza);
console.log('sausagePizza price =', sausagePizza.pizzaPrice());

let pnpPizza = new Pizza('pepperoni', 'peppers');
console.log('new pnp pizza object', pnpPizza);
console.log('sausagePizza price =', pnpPizza.pizzaPrice());