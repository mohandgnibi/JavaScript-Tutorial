// Constructor, operator "new"


/**
 * The regular {...} syntax allows us to create one object. But often we need to 
 * create many similar objects, like multiple users or menu items and so on.
 * 
 * That can be done using constructor functions and the "new" operator.
 */

// ======================== Constructor function ========================//

/**
 * Constructor functions technically are regular functions. There are two 
 * conventions though:
 * 
 * 1. They are named with capital letter first.
 * 2. They should be executed only with "new" operator.
 * 
 * For instance
 */

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false

// 
/**
 * When a function is executed with 'new', it does the following steps:
 * 
 * 1. A new empty object is created and assigned to 'this'.
 * 2. The function body executes. Usually it modifies 'this', adds new properties to it.
 * 3. The value of this is returned.
 */ 

function User(name) {
  // this = {}; (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this; (implicitly)
}

// So 'let user = new User("Jack")' gives the same result as:

user = {
  name: "Jack",
  isAdmin: false
};

// ======================== Constructor mode test: new.target ========================//

function User(name) {
  if (!new.target) {  // if you run me without new
    return new User(name); // ...I will add new for you
  }

  this.name = name;
}

let john = User("John"); // redirects call to new User
alert(john.name); // John

// ======================== Return from constructors ========================//

/**
 * Usually, constructors do not have a 'return' statement. Their task is to write all 
 * necessary stuff into 'this', and it automatically becomes the result.
 * 
 * But if there is a 'return' statement, then the rule is simple:
 * 
 * - If 'return' is called with an object, then the object is returned instead of 'this'.
 * - If 'return' is called with a primitive, it’s ignored.
 * 
 * In other words, 'return' with an object returns that object, in all other cases 
 * 'this' is returned.
 * 
 * For instance, here 'return' overrides 'this' by returning an object:
 */

function BigUser() {
  this.name = "John";

  return { name: "Godzilla"}; // <-- returns this object
}

alert( new BigUser().name ); // Godzilla, got that object

// And here’s an example with an empty 'return' (or we could place a primitive after it, doesn’t matter):

function SmallUser() {

  this.name = "John";

  return; // <-- returns this
}

alert( new SmallUser().name ); // John

// Omitting parentheses

user = new User; // <-- no parentheses
//same as
user = new User();

// Omitting parentheses here is not considered a “good style”, but the syntax is 
// permitted by specification.

// ======================== Methods in constructor ========================//

/**
 * Using constructor functions to create objects gives a great deal of flexibility. 
 * The constructor function may have parameters that define how to construct 
 * the object, and what to put in it.
 * 
 * Of course, we can add to 'this' not only properties, but methods as well.
 * 
 * For instance, 'new User(name)' below creates an object with the given 'name' 
 * and the method 'sayHi':
 */

function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name);
  };
}

john = new User("John");

john.sayHi(); // My name is: John

/*
john = {
  name: "John",
  sayHI: function() { ...}
}
*/

// To create complex objects, there’s a more advanced syntax, classes, 
// that we’ll cover later.

/*
Summary: Constructors and the "new" operator

- Constructor functions:
  - Are regular functions by implementation, but by convention start with a capital letter.
  - Intended to be called with the "new" operator to create objects.

- What "new" does (conceptually):
  1. Creates a fresh empty object.
  2. Sets "this" inside the function to that object.
  3. Executes the function body (usually adding properties/methods to "this").
  4. Returns "this" implicitly, unless an object is explicitly returned.

- new.target:
  - Allows a constructor to detect whether it was called with "new".
  - Can be used to auto-correct a call (e.g., call new internally if omitted).

- Return behavior:
  - If the constructor returns an object explicitly, that object is the result.
  - If it returns a primitive or nothing, the newly created "this" is returned.

- Other notes:
  - Constructors can attach methods directly to "this", but for memory efficiency
    methods are often placed on the prototype (or use ES6 classes).
  - Parentheses after the constructor name are optional when there are no arguments:
    new Constructor  is allowed, though not recommended style.
*/
