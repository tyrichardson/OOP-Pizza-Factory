# OOP-Pizza-Factory
Introduction to Object Oriented Programming concept of inheritance, class, subclass, extends... in preparation for learning React.

We'll be focusing on the code, so this program will not need any DOM or UI. A script.js sourced into an HTML page will suffice.

Please console.log your code so that we can see what you are making, and how you are interacting with these classes.

Things to Consider:
~You'll need a way to create new pizzas. Consider that many pizza restaurants have a menu of pre-configured pizzas. How could you mimic this in code?

~You'll need a way to add pizza objects to an order object.

~After pizzas are added, you need a way to calculate the total for the order.

Classes
The pizza factory should contain the following classes:

- [x] A base pizza class that takes in one or many ingredients and returns a new pizza. If no ingredients are passed in, the class should default to a single ingredient of cheese.

- [ ] Add a method to the pizza class to calculate the cost of the pizza. $10.00 per pizza plus $0.99 per each ingredient beyond cheese. Extra cheese counts as an additional topping. The cheese pizza costs $10.00 to start.

- [ ] An order class that will keep track of the pizzas in the order and have a method to calculate the cost for an entire order.


###Hard Mode
- [ ] Extend your base Pizza class -- Add an ability to create pizzas with multiple sizes (small, medium, large). Base prices are $8.99, $10.99 and $12.99 respectively.

- [ ] If you have two or more large pizzas AND a medium pizza in your current order, the medium pizza should be 50% off.

###More!
- [ ] Process order should take in an optional argument of coupon code. If the code is PIZZA25, the total cost should be reduced by 25%. All discounts should be applied pre tax.

- [ ] Pineapple as an ingredient should cost $1.99.