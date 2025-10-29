// Optional chaining '?.'

/**
 * This is a recent addition to the language. Old browsers may need polyfills.
 * 
 * The optional chaining ?. is a safe way to access nested object properties, 
 * even if an intermediate property doesn’t exist.
 */

// ======================== The "non-existing property" problem ========================//

/**
 * If you’ve just started to read the tutorial and learn JavaScript, maybe the 
 * problem hasn’t touched you yet, but it’s quite common.
 * 
 * As an example, let’s say we have 'user' objects that hold the information 
 * about our users.
 * 
 * Most of our users have addresses in 'user.address' property, with the 
 * street 'user.address.street', but some did not provide them.
 * 
 * In such case, when we attempt to get 'user.address.street', and the user happens 
 * to be without an address, we get an error:
 */

let user = {}; // a user without "address" property

alert(user.address.street); // Error!


// document.querySelector('.elem') is null if there's no element
let html = document.querySelector('.elem').innerHTML; // error if it's null

/**
 * How can we do this?
 * 
 * The obvious solution would be to check the value using if or the conditional 
 * operator ?, before accessing its property, like this:
 */

user = {};

alert(user.address ? user.address.street : undefined); // It work, there's no error

// Here's how the same would look for 'document.querySelector':
html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;

/**
 * We can see that the element search 'document.querySelector('.elem')' is actually 
 * called twice here. Not good.
 * 
 * For more deeply nested properties, it becomes even uglier, as more 
 * repetitions are required.
 * 
 * E.g. let’s get 'user.address.street.name' in a similar fashion.
 */

user = {}; // user has no address

alert(user.address ? user.address.street ? user.address.street.name : null : null);

// That’s just awful, one may even have problems understanding such code.

// There’s a little better way to write it, using the '&&' operator:

alert( user.address && user.address.street && user.address.street.name)

/**
 * AND’ing the whole path to the property ensures that all components exist 
 * (if not, the evaluation stops), but also isn’t ideal.
 * 
 * As you can see, property names are still duplicated in the code. 
 * E.g. in the code above, 'user.address' appears three times.
 * 
 * That’s why the optional chaining '?.' was added to the language. 
 * To solve this problem once and for all!
 */

// ======================== Optional chaining ========================//

/**
 * The optional chaining '?.' stops the evaluation if the value 
 * before '?.' is 'undefined' or 'null' and returns 'undefined'.
 * 
 * Further in this article, for brevity, we’ll be saying that 
 * something “exists” if it’s not 'null' and not 'undefined'.
 * 
 * In other words, 'value?.prop':
 *  - works as 'value.prop', if 'value' exists,
 *  - otherwise (when 'value' is 'undefined/null') it returns 'undefined'.
 * 
 * Here’s the safe way to access 'user.address.street' using '?.':
 */

user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)

// The code is short and clean, there’s no duplication at all.

// Here’s an example with 'document.querySelector':

html = document.querySelector('.elem')?.innerHTML; // will be undefined, if there's no element

// Reading the address with 'user?.address' works even if 'user' object doesn’t exist:
user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined

// Please note: the ?. syntax makes optional the value before it, but not any further.

// The variable must be declared (e.g. let/const/var user or as a function parameter). 
// The optional chaining works only for declared variables.
user1?.address; // ReferenceError: user is not defined

// ======================== Short-circuiting ========================//

/**
 * As it was said before, the '?.' immediately stops (“short-circuits”) the evaluation 
 * if the left part doesn’t exist.
 * 
 * So, if there are any further function calls or operations to the right of '?.', 
 * they won’t be made.
 * 
 * For instance:
 */

user = null;
let x = 0;

user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

alert(x); // 0, value not incremented

// ======================== Other variants: '?.()', '?.[]' ========================//

/**
 * The optional chaining '?.' is not an operator, but a special syntax construct, 
 * that also works with functions and square brackets.
 * 
 * For example, '?.()' is used to call a function that may not exist.
 * 
 * In the code below, some of our users have 'admin' method, and some don’t:
 */

let userAdmin = {
  admin() {
    alert("I am admin");
  }
};

let userGuest = {}; 

userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing happens (no such method)

// The '?.[]' syntax also works, if we’d like to use brackets '[]' to access properties 
// instead of dot .. Similar to previous cases, it allows to safely read a property 
// from an object that may not exist.

let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined

// Also we can use '?.' with 'delete':

delete user?.name; // delete user.name if user exists

/*
Summary:
- Optional chaining (?.) provides a safe way to access nested properties: if the 
  value to the left is null or undefined, evaluation stops and undefined is returned.
- Forms include optional property access, optional computed property access, 
  optional method call, and optional delete.
- It short-circuits further operations on the right (so function calls or side 
  effects won't run when the left side is missing).
- It does not protect against undeclared variables (those still throw ReferenceError).
- Useful for replacing repetitive null/undefined checks and for keeping concise, 
  robust code; may require transpilation/polyfills for older environments.
*/
