/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.


If strict mode is enabled, return undefined.
Otherwise, return the global object, ie: window.
1. Window/Global Object Binding
2. Implicit Binding
3. New Binding
4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayPlace(place){
    console.log(this);
    return place;
}
sayPlace("Florida");
// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Shya');
// Principle 3
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();
// code example for New Binding

// Principle 4
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak.call(Newman);
  newman.speak.apply(Jerry);
// code example for Explicit Binding