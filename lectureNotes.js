// Classes and Inheritance
// OOP
// Everything is a self contained object.
// The object has every tool it needs to function. One of the tenants of OOP is inheritance.

// Java, C++, C#, all are OOP languages

// Classes talking to each other is the pattern.

// Class Review
// Class (template)
// constructor (what happens to make it)
// new (make an instance of the class -- calls the constructor)
// pass parameterss to constructor, use said parameters
// default parameters constructor(param = "something")
// multiple instances
// class methods
// Then Inheritance
// Inheritance
// We can extend the functionality from one class to the next by using the extend keyword. This will cause the subclass (orchildclass) to inherit its functionality from the superclass (or parentclass). You get more specific as you drill down.

// super() actually creates the thing it extends -- Actually calls constructor from parent!
// can send parameters in super
// using inherited methods
// Let's take a look at an example below:

// console.log('client sourced');

// object literal syntax
// let Animal = {
//     this.makeNoise: function() {

//     }
// }

// Class syntax with ES6

// class is the template (and base class)
class Animal {
    constructor(color = 'yellow', weight = 2, noise = 'howl') {
        this.isAlive = true;
        this.color = color;
        this.weight = weight;
        this.noise = noise;        
    }

    makeNoise() {
        return this.noise;
    }
}

// Animal class is the Parent class of Bird
// Bird is a sublcass of Animal
class Bird extends Animal {
    constructor(weight = 10, color = 'purple') {
        console.log('hi from bird class');
        // super calls the constructor on the parent class
        // we can optionally send values up to the constructor method
        super(color);
        
        // could also override Animal.weight here
        this.weight = weight;

        // define bird properties        
        this.inFlight = false;
        this.hasFeathers = true;
    }

    // polymorphism
    // override of a parent's method definition
    makeNoise() {
        console.log(super.makeNoise());
        // return `${this.noise} is the bird noise`;        
    }
}

// only after using 'new' do we have an Instance of the Animal class
let yellowAnimal = new Animal();    // with default values
let redAnimal = new Animal('red', 4, 'ribbit'); // with given values

console.log(redAnimal);

let defaultBird = new Bird('pink');

// Bird inherits from Animal and so has the makeNoise method
console.log(defaultBird.makeNoise());