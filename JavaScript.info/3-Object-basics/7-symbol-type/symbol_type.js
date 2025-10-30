// Symbol type

/**
 * By specification, only two primitive types may serve as object property keys:
 * 
 * - string type, or
 * - symbol type
 * 
 * Otherwise, if one uses another type, such as number, it’s autoconverted to string. 
 * So that 'obj[1]' is the same as 'obj["1"]', and 'obj[true]' is the same as 'obj["true"]'.
 * 
 * Until now we've been using only strings.
 * 
 * Now let's explore symbols, see what they can do for us.
 */

// ======================== Symbol type ========================//

/*
A “symbol” represents a unique identifier.
A value of this type can be created using' Symbol()':
*/
let id = Symbol();

/*
Upon creation, we can give symbols a description (also called a symbol name), 
mostly useful for debugging purposes:
*/

// id is a symbol with the description "id"
id = Symbol("id");

/*
Symbols are guaranteed to be unique. Even if we create many symbols with exactly 
the same description, they are different values. The description is just a label 
that doesn’t affect anything.
*/

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); false

// So, to summarize, a symbol is a “primitive unique value” with an optional description. 
// Let’s see where we can use them.

// Symbols don't auto-convert to a string
id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string

// If we really want to show a symbol, we need to explicitly call '.toString()' 
// on it, like here:

id = Symbol("id");
alert(id.toString()); // Symbol(id), now it works

// Or get 'symbol.description' property to show the description only:
id = Symbol("id");
alert(id.description); // id

// ======================== "Hidden" properties ========================//

/*
Symbols allow us to create “hidden” properties of an object, that no other part 
of code can accidentally access or overwrite.

For instance, if we’re working with user objects, that belong to a third-party 
code. We’d like to add identifiers to them.

Let’s use a symbol key for it:
*/

let user = { // belongs to another code
  name: "John"    
};

id = Symbol("id");

user[id] = 1;

alert( user[id] );  // we can access the data using the symbol as the key

/*
What’s the benefit of using 'Symbol("id")' over a string "id"?

As 'user' objects belong to another codebase, it’s unsafe to add fields to them, 
since we might affect pre-defined behavior in that other codebase. However, symbols 
cannot be accessed accidentally. The third-party code won’t be aware of newly 
defined symbols, so it’s safe to add symbols to the user objects.

Also, imagine that another script wants to have its own identifier inside user, 
for its own purposes.

Then that script can create its own Symbol("id"), like this:
*/
// ...
id = Symbol("id");

user[id] = "Their id value";

/*
There will be no conflict between our and their identifiers, because symbols are 
always different, even if they have the same name.

…But if we used a string "id" instead of a symbol for the same purpose, then there 
would be a conflict:
*/

user = { name: "John"};

// Our script uses "id" property
user.id = "Our id value";

// ...Another script also wants "id" for its purposes...

user.id = "Their id value";
// Boom! overwritten by another script!

/*
**Symbols in an object literal**

If we want to use a symbol in an object literal {...}, we need square brackets 
around it.

Like this:
*/

id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // not "id": 123
};

// That’s because we need the value from the variable id as the key, not the string “id”.

/*
** Symbols are skipped by for...id**

Symbolic properties do not participate in for..in loop.

For instance:
*/

id = Symbol("id");

user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert( "Direct: " + user[id] ); // Direct: 123

/** 
'Object.keys(user)' @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys 
also ignores them. That’s a part of the general “hiding symbolic properties” 
principle. If another script or a library loops over our object, it won’t unexpectedly
access a symbolic property.

In contrast, 'Object.assign' @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
copies both string and symbol properties:
*/

id = Symbol("id");

user = {
  [id]: 123
};

let clone = Object.assign({}, user);

alert( clone[id] ); // 123

// ======================== Global symbols ========================//

/*
As we’ve seen, usually all symbols are different, even if they have the same name. 
But sometimes we want same-named symbols to be same entities. For instance, 
different parts of our application want to access symbol "id" meaning exactly 
the same property.

To achieve that, there exists a global symbol registry. We can create symbols in 
it and access them later, and it guarantees that repeated accesses by the same name 
return exactly the same symbol.

In order to read (create if absent) a symbol from the registry, use 'Symbol.for(key)'.

That call checks the global registry, and if there’s a symbol described as key, then 
returns it, otherwise creates a new symbol 'Symbol(key)' and stores it in the registry 
by the given 'key'.

For instance:
*/

// read from the global registry
id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
alert( id === idAgain ); // true

/*
Symbols inside the registry are called global symbols. If we want an application-wide 
symbol, accessible everywhere in the code – that’s what they are for.

**That sounds like Ruby**

In some programming languages, like Ruby, there’s a single symbol per name.

In JavaScript, as we can see, that’s true for global symbols.

**Symbol.keyfor**

We have seen that for global symbols, 'Symbol.for(key)' returns a symbol by name. 
To do the opposite – return a name by global symbol – we can use: 'Symbol.keyFor(sym)':

For instance:
*/

// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id

/*
The 'Symbol.keyFor' internally uses the global symbol registry to look up the key 
for the symbol. So it doesn’t work for non-global symbols. If the symbol is not 
global, it won’t be able to find it and returns 'undefined'.

That said, all symbols have the 'description' property.

For instance:
*/

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name, global symbol
alert( Symbol.keyFor(localSymbol) ); // undefined, not global

alert( localSymbol.description ); // name

/*
There exist many “system” symbols that JavaScript uses internally, and we can use 
them to fine-tune various aspects of our objects.

They are listed in the specification in the Well-known symbols table:

  - Symbol.hasInstance
  - Symbol.isConcatSpreadable
  - Symbol.iterator
  - Symbol.to Primitive
  - ...and so on.

For instance, Symbol.toPrimitive allows us to describe object to primitive 
conversion. We’ll see its use very soon.

Other symbols will also become familiar when we study the corresponding language features.
*/

/**
** Summary **

Symbols are primitive, unique identifiers created via Symbol([description]).
They can carry an optional description for debugging but remain distinct even
when descriptions match. Symbols do not implicitly convert to strings
(calling String(symbol) or interpolating may throw), but can be explicitly
represented via symbol.toString() or symbol.description.

@features
  - Creation: Symbol() and Symbol(description).
  - Uniqueness: Two symbols with the same description are different values.
  - String conversion: No implicit conversion; use toString() or .description.

@object_keys
  - Symbols may be used as property keys: obj[sym] = value.
  - To use a symbol in an object literal key you must use computed property syntax: {[sym]: value}.
  - Symbol-keyed properties are "hidden" from ordinary enumeration:
    - for...in and Object.keys() do not list symbol properties.
    - Direct access via the symbol still retrieves the value.
    - Object.assign copies both string and symbol properties.

@global-registry
  - Symbol.for(key) reads or creates a global symbol in a registry and returns the same symbol for the same key.
  - Symbol.keyFor(sym) returns the registry key for a global symbol, or undefined for non-global symbols.
  - Local (non-global) symbols are not found by Symbol.keyFor but do expose .description.

@use_cases
  - Provide truly unique identifiers to avoid naming collisions when augmenting objects owned by other code.
  - Create non-enumerable, library-specific or "hidden" object metadata that won't interfere with string-keyed properties.
  - Implement and customize language-level behaviors via well-known symbols (e.g., Symbol.iterator, Symbol.toPrimitive, etc.).

@see
  - Symbol.for / Symbol.keyFor for application-wide shared symbols.
  - Well-known symbols (Symbol.iterator, Symbol.toPrimitive, etc.) for customizing built-in behaviors.

@example
// Creating a unique identifier usable as an object key:
// const id = Symbol('id'); obj[id] = 123;

@notes
  - Use symbols when you need non-colliding property keys or want to hide metadata from normal property enumerations.
*/