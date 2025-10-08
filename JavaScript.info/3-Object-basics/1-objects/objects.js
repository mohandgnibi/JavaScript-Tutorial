// Objects

/**
 * As we know from the chapter Data types, there are eight data types in JavaScript. 
 * Seven of them are called “primitive”, because their values contain only a single 
 * thing (be it a string or a number or whatever).
 * 
 * In contrast, objects are used to store keyed collections of various data and more 
 * complex entities. In JavaScript, objects penetrate almost every aspect of 
 * the language. So we must understand them first before going in-depth anywhere else.
 * 
 * An object can be created with figure brackets '{…}' with an optional list of 
 * properties. A property is a “key: value” pair, where 'key' is a string 
 * (also called a “property name”), and 'value' can be anything.
 * 
 * We can imagine an object as a cabinet with signed files. Every piece of data 
 * is stored in its file by the key. It’s easy to find a file by its name 
 * or add/remove a file.
 */

// An empty object can be created using one of two syntaxes:

let user = new Object(); // "object constructor" syntax
user = {};

// Usually, the figure brackets {...} are used. That declaration is called an "object literal".

// ======================== Literals and properties ========================//

// We can immediatly put some properties into {...} as "key: value" pairs:

user = {         // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};

/**
 * In the 'user' object, there are two properties:
 * 1. The first property has the name "name" and the value "John".
 * 2. The second one has the name "age" and the value "30".
 */

// Property values are accessible using the dot notation:

// get property values of the object:
alert( user.name ); // John
alert( user.age );  // 30

// The value can be of any type. Let's add a boolean one:
user.isAdmin = true;

// To remove a property, we can use the delete operator:
delete user.age;

// We can also use multiword property names, but then they must be quoted:
user = {
  name: "John",
  age: 30,
  "likes birds": true // multiword property name must be quoted
};

// The last property in the list may end with a comma:
user = {
  name: "John",
  age: 30,
};

/**
 * That is called a “trailing” or “hanging” comma. Makes it easier to add/remove/move 
 * around properties, because all lines become alike.
 */

// ======================== Square brackets ========================//

// For multiword properties, the dot access doesn’t work:
/*
 * this would give a syntax error
 * user.like birds = true;
 * 
 * JavaScript doesn’t understand that. It thinks that we address user.likes, 
 * and then gives a syntax error when comes across unexpected birds.
 * 
 * There’s an alternative “square bracket notation” that works with any string:
 */

user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];

/**
 * Square brackets also provide a way to obtain the property name as the result 
 * of any expression – as opposed to a literal string – like from a variable as follows:
 */

let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;

/**
 * Here, the variable key may be calculated at run-time or depend on the user input. 
 * And then we use it to access the property. That gives us a great deal of flexibility.
 * 
 * For instance:
 */

user = {
  name: "John",
  age: 30
};

key = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key] ); // John (if enter "name")

// The dot notation cannot be used in a similar way:

user = {
  name: "John",
  age: 30
};

key = "name";
alert( user.key ); // undefined

/**
 * ** Computed properties
 * 
 * We can use square brackets in an object literal, when creating an object. 
 * That’s called 'computed properties'.
 * 
 * For instance:
 */

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert ( bag.apple ); // 5 if fruit="apple"

/**
 * The meaning of a computed property is simple: '[fruit]' means that the property 
 * name should be taken from 'fruit'.
 * 
 * So, if a visitor enters "apple", bag will become '{apple: 5}'.
 * 
 * Essentially, that works the same as:
 */

fruit = prompt("Which fruit to buy?", "apple");
bag = {};

// take property name from the fruit variable
bag[fruit] = 5;

// We can use more complex expressions inside square brackets:

fruit = "apple";
bag = {
  [fruit + "Computers"]: 5 // bag.appleComputers = 5
};

/**
 * Square brackets are much more powerful than dot notation. They allow any 
 * property names and variables. But they are also more cumbersome to write.
 * 
 * So most of the time, when property names are known and simple, the dot is used. 
 * And if we need something more complex, then we switch to square brackets.
 */

// ======================== Property value shorthand ========================//

// In real code, we often use existing variables as values for property names.

// For instance:

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

user = makeUser("John", 30);
alert(user.name); // John

/**
 * In the example above, properties have the same names as variables. The use-case 
 * of making a property from a variable is so common, that there’s a special 
 * 'property value shorthand' to make it shorter.
 * 
 * Instead of name:name we can just write name, like this:
 */

function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
  };
}

// We can use both normal properties and shorthands in the same object:

user = {
  name, //same as name: name
  age: 30
};

// ======================== Property names limitations ========================//

/**
 * As we already know, a variable cannot have a name equal to one of the 
 * language-reserved words like “for”, “let”, “return” etc.
 * 
 * But for an object property, there’s no such restriction:
 */

// these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return ); // 6

/**
 * In short, there are no limitations on property names. They can be any strings 
 * or symbols (a special type for identifiers, to be covered later).
 * 
 * Other types are automatically converted to strings.
 * 
 * For instance, a number '0' becomes a string "0" when used as a property key:
 */

obj = {
  0: 'test' // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
alert( obj["0"] ); // test
alert( obj[0] ); // test (same property)

// There’s a minor gotcha with a special property named __proto__. 
// We can’t set it to a non-object value:

obj = {};

obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object Object] - the value is an object, didn't work as intended

// ======================== Property existence test, "in" operator ========================//

/**
 * A notable feature of objects in JavaScript, compared to many other languages, 
 * is that it’s possible to access any property. There will be no error if 
 * the property doesn’t exist!
 * 
 * Reading a non-existing property just returns undefined. So we can easily test 
 * whether the property exists:
 */

user = {};

alert( user.noSuchProperty === undefined ); // true means "no such property"

// There’s also a special operator "in" for that.
// The syntax is: "key" in object
// For instance:

user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist

/**
 * Please note that on the left side of in there must be a property name. 
 * That’s usually a quoted string.
 * 
 * If we omit quotes, that means a variable should contain the actual name 
 * to be tested. For instance:
 */

user = { age: 30 };

key = "age";
alert( key in user ); // true, property "age" exists

/**
 * Why does the 'in' operator exist? Isn’t it enough to compare against 'undefined'?
 * 
 * Well, most of the time the comparison with 'undefined' works fine. But there’s a 
 * special case when it fails, but "in" works correctly.
 * 
 * It’s when an object property exists, but stores 'undefined':
 */

obj = {
  test: undefined
};

alert( obj.test ); // it's undefined, so - no sush property?
alert( "test" in obj ); // true, the property does exist!

// In the code above, the property obj.test technically exists. So the in operator works right.

// ======================== The "for..in" loop ========================//

/**
 * To walk over all keys of an object, there exists a special form of the loop: for..in. 
 * This is a completely different thing from the for(;;) construct that we studied before.
 * 
 * The syntax:
 * 
 * for (key in object) {
 *   // executes the body for each key among object properties
 * }
 * 
 * For instance, let's output all properties of 'user':
 */

user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key ); // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}

/**
 * Note that all “for” constructs allow us to declare the looping variable inside the loop, 
 * like let key here.
 * 
 * Also, we could use another variable name here instead of key. For instance, 
 * "for (let prop in obj)" is also widely used.
 * 
 * ** Ordered like an object **
 * 
 * Are objects ordered? In other words, if we loop over an object, do we get all 
 * properties in the same order they were added? Can we rely on this?
 * 
 * The short answer is: “ordered in a special fashion”: integer properties are 
 * sorted, others appear in creation order. The details follow.
 * 
 * As an example, let’s consider an object with the phone codes:
 */

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Brithain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}

/**
 * The object may be used to suggest a list of options to the user. If we’re making 
 * a site mainly for a German audience then we probably want 49 to be the first.
 * 
 * But if we run the code, we see a totally different picture:
 * - USA(1) goes first
 * - then Switzerland (41) and so on.
 * 
 * The phone codes go in the ascending sorted order, because they are integers. 
 * So we see 1, 41, 44, 49.
 * 
 * On the other hand, if the keys are non-integer, then they are listed in 
 * the creation order, for instance:
 */

user = {
  name: "John",
  surname: "Smith"
};

user.age = 25; // add one more

// non-integer properties are listed in the creation order
for (let prop in user) {
  alert( prop ); // name, surname, age
}

/**
 * So, to fix the issue with the phone codes, we can “cheat” by making the codes 
 * non-integer. Adding a plus "+" sign before each code is enough.
 * 
 * Like this:
 */

codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}

// Now it works as intended. 
