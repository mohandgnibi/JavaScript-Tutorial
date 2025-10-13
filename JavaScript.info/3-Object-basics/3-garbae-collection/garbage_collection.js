// Garbage collection

/**
 * Memory management in JavaScript is performed automatically and invisibly to us. 
 * We create primitives, objects, functions… All that takes memory.
 * What happens when something is not needed any more? How does the JavaScript engine 
 * discover it and clean it up?
 */

// ======================== Reachability ========================//

/**
 * The main concept of memory management in JavaScript is reachability.
 * 
 * Simply put, “reachable” values are those that are accessible or usable somehow. 
 * They are guaranteed to be stored in memory.
 * 
 * 1.There’s a base set of inherently reachable values, that cannot be deleted for 
 *   obvious reasons.
 * 
 * For instance:
 * - The currently executing function, its local variables and parameters.
 * - Other functions on the current chain of nested calls, their local variables 
 *   and parameters.
 * - Global variables.
 * - (there are some other, internal ones as well)
 * 
 * These values are called 'roots'.
 * 
 * 2. Any other value is considered reachable if it’s reachable from a root by 
 *    a reference or by a chain of references.
 * 
 * For instance, if there’s an object in a global variable, and that object has 
 * a property referencing another object, that object is considered reachable. 
 * And those that it references are also reachable. Detailed examples to follow.
 * 
 * There’s a background process in the JavaScript engine that is called 
 * garbage collector @see https://en.wikipedia.org/wiki/Garbage_collection_(computer_science). 
 * It monitors all objects and removes those that have become unreachable.
 *  
 */ 

// ======================== A simple example ========================//

// Here's the simplest example:

// user has a reference to the object
let user = {
    name: "John"
};


/**
 * Here the arrow depicts an object reference. The global variable 'user' references 
 * the object '{name: "John"}' (we’ll call it John for brevity). The 'name' property 
 * of John stores a primitive, so it’s painted inside the object.
 * 
 * If the value of 'user' is overwritten, the reference is lost:
 */

user = null;

// Now John becomes unreachable. There’s no way to access it, no references to it. 
// Garbage collector will junk the data and free the memory.

// ======================== Two references ========================//

// Now let's imagine we copied the reference from 'user' to 'admin':

// user has a reference to the object
user = {
    name: "John"
};

let admin = user;

// Now if we do the same:

user = null;

// Then the object is still reachable via admin global variable, so it must stay in memory. 
// If we overwrite admin too, then it can be removed.

// ======================== Interlinked objects ========================//

// Now a more complex example. The family:

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman,
    }
}

let family = marry({
    name: "John"
}, {
    name: "Ann"
});

// Function marry “marries” two objects by giving them references to each other 
// and returns a new object that contains them both.

// Now let’s remove two references:
delete family.father;
delete family.mother.husband;

// ======================== Unreachable island ========================//

/**
 * It is possible that the whole island of interlinked objects becomes unreachable 
 * and is removed from the memory.
 * 
 * The source object is the same as above. Then:
 */

family = null;

// This example demonstrates how important the concept of reachability is.

/**
 * Summary:
 * 
 * Garbage collection in JavaScript is automatic. The engine tracks objects and values in memory,
 * removing those that are no longer reachable from the "roots" (global variables, currently 
 * executing functions, etc.).
 * If an object cannot be accessed by any reference chain from a root, it is considered 
 * unreachable and will be cleaned up.
 * This process helps prevent memory leaks and keeps applications efficient.
 */

