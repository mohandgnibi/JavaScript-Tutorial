/**
 * Demonstrates the eight basic data types in JavaScript:
 * 1. Number: Represents both integer and floating-point numbers, including special numeric values like Infinity, -Infinity, and NaN.
 * 2. BigInt: Represents integers of arbitrary length, created by appending 'n' to the end of an integer.
 * 3. String: Represents text, enclosed in double quotes, single quotes, or backticks (for embedding variables/expressions).
 * 4. Boolean: Represents logical values, either `true` or `false`.
 * 5. null: A special value representing "nothing", "empty", or "value unknown".
 * 6. undefined: A special value indicating "value is not assigned".
 * 7. Object: A special type used to store collections of data and more complex entities.
 * 8. Symbol: Used to create unique identifiers for objects.
 *
 * Highlights:
 * - Variables in JavaScript can dynamically change their type.
 * - Special numeric values like Infinity and NaN are part of the Number type.
 * - BigInt allows safe representation of integers beyond the Number type's limit.
 * - Backticks (`) enable embedding variables and expressions into strings.
 * - The `typeof` operator is used to determine the type of a value.
 * - `null` is considered an object due to a historical JavaScript bug.
 * - Functions are a subtype of objects, and `typeof` returns "function" for them.
 */
// DATA TYPES

// There are eight basic data types in JavaScript.

// We can put any type in variable. For example, a variable can at one moment be a string and 
// then store a number

// no error
let message = "Hello";
message = 123456;


// ======================== Number ========================//

// Number type represents both integer and floating point numbers.

// Besides regular numbers, there are so-called 'special numeric values' 
// which also belong to this data type: Infinity, -Infinity and 'NaN'.

// Infinity ∞.
alert(1 / 0); // Infinity

// Or just reference it directly
alert(Infinity); // Infinity

// 'NaN': Represents a computational error. It is a result of an incorrect or an undefined
// mathematical opreration, for instance:

alert("not a number" / 2); // 'NaN', such division is erroneous

// 'NaN' is sticky. Any further mathematical operation on 'NaN' returns 'Nan':
alert(NaN + 1); // NaN
alert(3 * NaN); // NaN
alert("not a number" / 2 - 1); // NaN

// Only one exception:
alert(NaN ** 0); // 1

// ======================== BigInt ========================//

// In JavaScript, the number type cannot safely represent integer values larger than '(2**53 - 1)
// (that's 9007199254740991), or less than '(2**53 - 1)' for negatives.

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// 'BigInt' type was recently added to the language to represent integers of arbitrary length.
// A 'BigInt' value is created by appending 'n' to the end of an integer/

// the "n" at the end means it's a 'BigInt'
const bigInt = 123456789012345678901234567890123456789n;

// ======================== BigInt ========================//

// A string in JavaScript must be surrounded by quotes.
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
/*
1. Double quotes: "Hello".
2. Single quotes: 'Hello'.
3. Backticks
*/
// Double and single quotes are "simple" quotes. There’s practically no difference between them in JavaScript.
// Backticks are "extended functionality" quotes. They allow us to embed variables and expressions 
// into a string by wrapping them in '${…}', for example:
let name = "John";

// enbed a variable
alert(`Hello, ${name}!`); // Hello, John!

// embed an expression
alert(`The result is ${1 + 2}`); // The result is 3

// The expression inside '${…}' is evaluated and the result becomes a part of the string.

// Other quotes don’t have this embedding functionality!
alert("The result is ${1 + 2}"); // The result is ${1 + 2} (double quotes do nothing)

// ======================== Boolean (logical type) ========================//

// The boolean type has only two values: 'true' and 'false'.
// This type is commonly used to store yes/no values: 
// 'true' means "yes, correct", and 'false' means "no, incorrect".
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

// Boolean values also come as a result of comparisons:
let isGreater = 4 > 1;

alert(isGreater); // true (the comparison result is "yes")

// ======================== The "null" value ========================//

// The special 'null' value does not belong to any of the types described above.

let age = null;

// In JavaScript, 'null' is not a "reference to a non-existing objects" or a "null pointer"
// like in some other languages. It's just a special value which represents "nothing", "empty" or "value unknoun".

// ======================== The "undefined" value ========================//

// The special value 'undefined' also stands apart. It makes a type of its oown, just like 'null'.
// The meaning of 'undefined' is "value is not assigned".
let age1;

alert(age1); // shows "undefined"

// Thechnically, it is possible to explicity assign 'undefined' to a variable:
let age2 = 100;

// change the value to 'undefined'
age2 = undefined;
alert(age2); // "undefined"

// ======================== Objects and Symbols ========================//

// The 'object' type is special.
// All other types are called “primitive” because their values can contain only a single thing 
// (be it a string or a number or whatever). 
// In contrast, objects are used to store collections of data and more complex entities.


// The symbol type is used to create unique identifiers for objects. We have to mention 
// t here for the sake of completeness, but also postpone the details till we know objects.


// ======================== The 'typeof' operator ========================//

// The 'typeof' operator returns the type of the operand.
// It’s useful when we want to process values of different 
// types differently or just want to do a quick check.

// A call to 'typeof x' return a string with the type name:
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"    (1)
typeof null // "object"    (2)
typeof alert // "function" (3)

// The last three lines may need additional explanation:
/*
(1) Math is a built-in object in JavaScript.
(2) null is a special case; it is considered an object due to a historical bug in JavaScript.
(3) alert is a function, and functions are a subtype of objects.
*/

// ======================== Summary ========================//
/*
 * Demonstrates the eight basic data types in JavaScript:
 * 1. Number: Represents both integer and floating-point numbers, including special numeric values like Infinity, -Infinity, and NaN.
 * 2. BigInt: Represents integers of arbitrary length, created by appending 'n' to the end of an integer.
 * 3. String: Represents text, enclosed in double quotes, single quotes, or backticks (for embedding variables/expressions).
 * 4. Boolean: Represents logical values, either `true` or `false`.
 * 5. null: A special value representing "nothing", "empty", or "value unknown".
 * 6. undefined: A special value indicating "value is not assigned".
 * 7. Object: A special type used to store collections of data and more complex entities.
 * 8. Symbol: Used to create unique identifiers for objects.
 *
 * Highlights:
 * - Variables in JavaScript can dynamically change their type.
 * - Special numeric values like Infinity and NaN are part of the Number type.
 * - BigInt allows safe representation of integers beyond the Number type's limit.
 * - Backticks (`) enable embedding variables and expressions into strings.
 * - The `typeof` operator is used to determine the type of a value.
 * - `null` is considered an object due to a historical JavaScript bug.
 * - Functions are a subtype of objects, and `typeof` returns "function" for them.
 */
