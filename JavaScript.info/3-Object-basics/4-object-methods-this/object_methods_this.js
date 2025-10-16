// Object methods, 'this'

// Objects are usually created to represent entities of the real world, like users, orders and so on:

let user = {
  name: "John",
  age:30
};

/**
 * And, in the real world, a user can act: select something from the shopping cart, 
 * login, logout etc.
 * 
 * Actions are represented in JavaScript by functions in properties.
 */

// ======================== Method examples ========================//

// For a start, let's teach the 'user' to say hello:

user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("Hello!");
};

user.sayHi(); // Hello!

/**
 * Here we’ve just used a Function Expression to create a function and assign it to 
 * the property 'user.sayHi' of the object.
 * 
 * Then we can call it as 'user.sayHi()'. The user can now speak!
 * 
 * A function that is a property of an object is called its "method".
 * 
 * So, here we’ve got a method sayHi of the object 'user'.
 * 
 * Of course, we could use a pre-declared function as a method, like this:
 */

let user = {
  // ...
};

// first, declare
function sayHi() {
  alert("Hello!");
}

// then add as a method
user.sayHi = sayHi;

user.sayHi(); // Hello!

// ** Method shorthand **

// these objects do the same

let user = {
  sayHi: function() {
    alert('Hello');
  }
};

// method shorthand looks better, right?
let user = {
  sayHi() { // same as "sayHi: function(){...}"
    alert('Hello');
  }
};

// ** 'this' in methods

let user = {
  name: "John",
  age: 30,

  sayHi(){
    // "this" is the "current object"
    alert(this.name);
  }

};

user.sayHi(); // John

/**
 * Here during the execution of user.sayHi(), the value of this will be user.
 * 
 * Technically, it’s also possible to access the object without this, by referencing 
 * it via the outer variable:
 */

let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert(user.name); // "user" instead of "this"
  }

};

/**
 * …But such code is unreliable. If we decide to copy 'user' to another variable, 
 * e.g. 'admin = user' and overwrite 'user' with something else, then it will access 
 * the wrong object.
 * 
 * That's demonstrated below:
 */

let user = {
  name: "John",
  age: 20,

  sayHi() {
    alert(user.name); // leads to an error
  }

};

let admin = user;
user = null; // overwrite to make things obvious

admin.sayHi(); // TypeError: Cannot read property 'name' of null

// If we used this.name instead of user.name inside the alert, then the code would work.

// ** 'this' is not bound

// There’s no syntax error in the following example:
function sayHi() {
  alert( this.name);
}

// The value of this is evaluated during the run-time, depending on the context.

user = {name: "John"};
admin = {name: "Admin"};

function sayHi() {
  alert( this.name);
}

// use the same function in towo objects
user.f = sayHi;
admin.f = sayHi;

// thes calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John (this == user)
admin.f(); // Admin (this == admin)

admin['f'](); // Admin (dot or square brackets access the method _ doesn't matter)

// Calling without an object: 'this == undefined'
function sayHi() {
  alert(this);
}

sayHi(); // undefined

// ======================== Arrow functions have no "this" ========================//

/**
 * Arrow functions are special: they don’t have their “own” 'this'. If we reference 'this' 
 * from such a function, it’s taken from the outer “normal” function.
 * 
 * For instance, here 'arrow()' uses 'this' from the outer 'user.sayHi()' method:
 */

let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya

/**
 * ** Summary **
 * - Functions that are stored in object properties are called “methods”.
 * - Methods allow objects to “act” like object.doSomething().
 * - Methods can reference the object as this.

 * The value of this is defined at run-time.
 *

 * - When a function is declared, it may use this, but that this has no value until 
 *   the function is called.
 * - A function can be copied between objects.
 * - When a function is called in the “method” syntax: object.method(), the value 
 *   of this during the call is object.
 * 
 * Please note that arrow functions are special: they have no this. When this is 
 * accessed inside an arrow function, it is taken from outside.
 */
