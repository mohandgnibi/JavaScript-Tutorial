/**
 * Type conversions in JavaScript including:
 * 
 * 1. **String Conversion**:
 *    - Converts a value to a string using `String(value)`.
 *    - Examples:
 *      - `true` becomes `"true"`.
 *      - `null` becomes `"null"`.
 * 
 * 2. **Numeric Conversion**:
 *    - Converts a value to a number using `Number(value)`.
 *    - Automatically occurs in mathematical operations.
 *    - Examples:
 *      - `"6" / "2"` results in `3`.
 *      - `Number("123")` results in `123`.
 *      - Invalid strings (e.g., `"123z"`) result in `NaN`.
 *    - Conversion rules:
 *      - `undefined` → `NaN`
 *      - `null` → `0`
 *      - `true` → `1`, `false` → `0`
 *      - Strings → `0` (if empty) or `NaN` (if invalid)
 * 
 * 3. **Boolean Conversion**:
 *    - Converts a value to a boolean using `Boolean(value)`.
 *    - Automatically occurs in logical operations.
 *    - Conversion rules:
 *      - "Empty" values (`0`, `""`, `null`, `undefined`, `NaN`) → `false`.
 *      - All other values → `true`.
 *    - Examples:
 *      - `Boolean(1)` results in `true`.
 *      - `Boolean(0)` results in `false`.
 *      - Non-empty strings (e.g., `"hello"`, `"0"`, `" "`) result in `true`.
 * 
 * **Summary**:
 * - String conversion is explicit with `String(value)`.
 * - Numeric conversion can be explicit with `Number(value)` or implicit in mathematical operations.
 * - Boolean conversion can be explicit with `Boolean(value)` or implicit in logical operations.
 */
// TYPE CONVERSIONS

// ======================== String Conversion ========================//

// String conversion happens when we need the string form of a value.

// Example:
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof(value)); // string

// Sting conversion is mostly obvious. A 'false' becomes "false", 'null' becomes "null", etc.


// ======================== Numeric Conversion ========================//

// Numeric conversion in mathematical functions and expressions happens automatically.
// For example, when division '/' is applied to  non-numbers:

alert("6" / "2"); // 3, string are converted to numbers

// We can use the 'Number(value)' function to explicitly convert a 'value' to a number:

let str = "123";
alert(typeof(str)); // string

let num = Number(str);
alert(typeof(num)); // number

// If the string is not a valid number, the result of such a conversion is 'NaN'.

let age = Number("an arbitrary string instead of a number");
alert(age); // NaN, conversion failed

// Numeric conversion rules:
/**
 * undefined ===> NaN
 * null ===> 0
 * true and false ===> 1 and 0
 * string ====> 0 - NaN 
*/

// Example:
alert(Number("   123   ")); // 123
alert(Number("123z"));      // NaN (error reading a number at 'z')
alert(Number(true));        // 1
alert(Number(false));       // 0

// Please note that 'null' and 'undefined' behave differently here: 'null' becomes 'zero' while 'undefined' becomes 'NaN'.


// ======================== Boolean Conversion ========================//

// Boolean conversion is the simplest one.

// It happens in logical operations (later we’ll meet condition tests and other similar things)
// but can also be performed explicitly with a call to 'Boolean(value)'.

// The conversion rule:
/**
 * Value that are intuitively "empty", like '0', an empty string, 'null', undefined', and 'NaN', become 'false'.
 * Other values become 'true'.
*/

// For instance:
alert(Boolean(1)); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") );  // true
alert( Boolean("") );  // false

// Please note: the string with zero '0' is 'true'
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)


// ======================== Summary ========================//

// The three most widely used type conversions are to string, to number, and to boolean.

// - String conversion is explicit with `String(value)`.
// - Numeric conversion can be explicit with `Number(value)` or implicit in mathematical operations.
// - Boolean conversion can be explicit with `Boolean(value)` or implicit in logical operations.

