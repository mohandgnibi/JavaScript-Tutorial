// Object references and copying

// Her we put a copy ot 'message' into 'phrase':

let message = "Hello!";
let phrase = message;

// Object are not like that.

/**
 * A variable assigned to an object stores not the object itself, but its 
 * “address in memory” – in other words “a reference” to it.
 */

// Let's look at an example of such a variable:

let user = {
    name: "John"
};

// Now here's why it's important.

/**
 * When an object variable is copied, the reference is copied, 
 * but the object itself is not duplicated.
 * 
 * For instance:
 */

user = { name: "John"};

let admin = user; // copy the reference

// Now we have tow variables, each storing a reference to the same object:

// We can use either variable to access the object and modify its contents:

admin.name = "Pete"; // chaged by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference

// ======================== Comparison by reference ========================//

// Two objects are equal only it they are the same object.
// For instance, here 'a' and 'b' reference the same object, thus they are equal:

let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

// And here two independent objects are not equal, even though they 
// look alike (both are empty):

let a1 = {};
let b1 = {}; // two independent objects

alert( a1 == b1 ); // false

// Const objects can be modified:
// For instance:

user = {
    name: "John",
};

user.name = "Pete";

alert(user.name); // Pete

// the const user gives an error only if we try to set user = ... as a whole.

// ======================== Cloning and merging, Object.assign ========================//

/**
 * So, copying and object variable create one more reference to the same object.
 * 
 * We can create a new object and replicate the structure of the existing one, 
 * by iterating over its properties and copying them on the primitive level.
 * 
 * Like this:
 */

let user = {
    name: "John",
    age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
    clone[key] = user[key]
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert( user.name ); // still John in the original object

/**
 * We can also use the method 'Object.assign @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * 
 * The syntax is:
 * Object.assign(dest, ...sources)
 * 
 * - The first argument 'dest' is a target object.
 * - Further arguments is a list of source objects.
 */

// For example:

let user = { name: "John"};

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true

// If the copied property name already exists, it gets overwritten:
user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // now user = { name: "Pete"}

// We also can use Object.assign to perform a simple object cloning:

user = {
    name: "John",
    age: 30
};

let clone = Object.assign({}, user);

alert(clone.name); // John
alert(clone.age); // 30

// Here it copies all properties of user into the empty object and returns it.

// ======================== Nested cloning ========================//

/**
 * Until now we assumed that all properties of user are primitive. But properties 
 * can be references to other objects.
 * 
 * Like this:
 */

let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

alert(user.sizes.height); // 182

/**
 * Now it’s not enough to copy 'clone.sizes = user.sizes', because 'user.sizes' is 
 * an object, and will be copied by reference, so clone and user will share the same sizes:
 */

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width = 60;     // change a property from one place
alert(clone.sizes.width);  // 60, get the result from the other one

/**
 * To fix that and make user and clone truly separate objects, we should 
 * use a cloning loop that examines each value of user[key] and, if it’s 
 * an object, then replicate its structure as well. 
 * That is called a “deep cloning” or “structured cloning”. 
 * There’s 'structuredClone' @see https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
 *  method that implements deep cloning.
 */

// StructuredClone

let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = structuredClone(user);

alert( user.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 50, not related

//  
// 

/**
 * The structuredClone method can clone most data types, such as objects, arrays,
 * primitive values.
 * 
 * It also supports circular references, when an object property references the object
 * itself (directly or via a chain or references).
 * 
 * For instance:
 */

let user = {};
// let's create a circular reference:
// user.me references the user itself
user.me = user;

let clone = structuredClone(user);
alert(clone.me === clone); // true

/**
 * As you can see, clone.me' references the 'clone', not the 'user'! So the circular 
 * reference was cloned correctly as well.
 * 
 * Although, there are cases when 'structuredClone' fails.
 * 
 * For instance, when an object has a function property:
 */

// error
structuredClone({
    f: function() {}
});

// Function properties aren’t supported.


