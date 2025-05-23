// COMPARISIONS

// ======================== Comparisons operators ========================//

/**
 * In JavaScript comparison operators:
 * 
 * - Greater/less than: a > b, a < b.
 * - Greater/less than or equals: a >= b , a <= b.
 * - Equals: a == b, (double equality sign == means the equality test, while 
 *  a single one a = b means an assignment.)
 * - Not equals: a != b.
 */

// ======================== Boolean is the result ========================//

/**
 * All comparison operators return a boolean value:
 * 
 * - 'true': means "yes", "correct" or "the truth".
 * - 'false': means "no", "wrong" or "not the truth".
 */

// For example:

alert( 2 > 1 );   // true (correct)
alert( 2 == 1 );  // false (wrong)
alert( 2 != 1 );  // true (correct)

// A comparison result can be assinged to a variable, just like any value:

let result = 5 > 4; // assign the result fo the comparison
alert(result); // true

// ======================== String comparison ========================//

/**
 * To see whether a string is greater than another, JavaScript uses 
 * the so-called “dictionary” or “lexicographical” order.
 * 
 * In other words, strings are compared letter-by-letter.
 */

// For example:
alert( "Z" > "A" ); // true
alert( "Clow" > "Glee" ); // true
alert( "Bee" > "Be" ); // true

/**
 * The algorithm to compare two strings is simple:
 * 
 * 1. Compare the first character of both strings.
 * 2. If the first character from the first string is greater (or less) than the other string’s, 
 *    then the first string is greater (or less) than the second. We’re done.
 * 3. Otherwise, if both strings’ first characters are the same, 
 *    compare the second characters the same way.
 * 4. Repeat until the end of either string.
 * 5. If both strings end at the same length, then they are equal. 
 *    Otherwise, the longer string is greater.
 */

// ======================== Comparison of different types ========================//

// When comparing values of different types, JavaScript converts the values to numbers.

// For example:
alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

// For boolean values, 'true' becomes 1 and 'false' becomes 0.

// For example:
alert( true == 1 ); // true
alert( false == 0 ); // true

// ======================== Strict equality ========================//

// A regular equality check '==' has a problem. It cannot differentiate '0' from 'false':

alert( 0 == false ); // true

// The same thing happens with an empty sting:

alert( '' == false ); // true

/**
 * This happens because operands of different types are converted to numbers by the equality 
 * operator ==. An empty string, just like false, becomes a zero.
 * 
 * What to do if we’d like to differentiate '0' from 'false'?
 * 
 * ***A strict equality operator '===' checks the equality without type conversion.***
 * 
 * In other words, if a and b are of different types, then a '==='b immediately 
 * returns false without an attempt to convert them.
 * 
 */

// Let's try it:
alert( 0 === false ); // false, because the types are different

// There is also a “strict non-equality” operator '!==' analogous to '!='.

// ======================== Comparison wiht 'null' and 'undefined' ========================//

/**
 * There’s a non-intuitive behavior when 'null' or 'undefined' are compared to other values.
 * 
 * ***For a strict equality check '==='***
 * 
 * These values are different, because each of them is a different type.
 */

alert( null === undefined ); // false

/**
 * ***For a non-strict check '=='***
 * 
 * There’s a special rule. These two are a “sweet couple”: 
 * they equal each other (in the sense of ==), but not any other value.
 */

alert( null == undefined ); // true

/**
 * ***For maths and other comparisons (< > <= >=)***
 * 
 * 'null/undefined' are converted to numbers: 'null' becomes '0', 
 * while 'undefined' becomes 'NaN'.
 */

// Strange result: null vs 0:

alert( null > 0 );  // false
alert( null == 0 ); // false
alert( null >= 0 ); // true

/**
 * Mathematically, that’s strange. The last result states that “null 
 * is greater than or equal to zero”, so in one of the comparisons above 
 * it must be true, but they are both false.
 * The reason is that an equality check == and comparisons > < >= <= work differently.
 * Comparisons convert null to a number, treating it as 0. 
 * That’s why (3) null >= 0 is true and (1) null > 0 is false.
 * On the other hand, the equality check == for undefined and null is defined such that,
 * without any conversions, they equal each other and don’t equal anything else. 
 * That’s why (2) null == 0 is false.
 */

/**
 * ***An incomparable 'undefined'***
 * 
 * The value 'undefined' shouldn't be compared to other values:
 */

alert( undefined > 0 );  // false (1)
alert( undefined < 0 );  // false (2)
alert( undefined == 0 ); // false (3)

/**
 * Why does it dislike zero so much? Always false!
 * We get these results because:
 * 
 * - Comparison (1) and (2) return 'false' because 'undefined' gets converted to 'NaN' and 
 *   'NaN' is a special numeric value which returns 'false' for all comparisons.
 * - The equality check (3) returns 'false' because 'undefined' only equals 'null',
 *   'undefined', and no other value.
 */

// ======================== Summary ========================//

/**
 * 1. **Comparison Operators**:
 *    - Greater/less than: `a > b`, `a < b`.
 *    - Greater/less than or equals: `a >= b`, `a <= b`.
 *    - Equals: `a == b` (equality test).
 *    - Not equals: `a != b`.
 * 
 * 2. **Boolean Results**:
 *    - Comparison operators return boolean values (`true` or `false`).
 *    - Example: `2 > 1` evaluates to `true`.
 * 
 * 3. **String Comparison**:
 *    - Strings are compared lexicographically (dictionary order).
 *    - Example: `"Z" > "A"` evaluates to `true`.
 * 
 * 4. **Comparison of Different Types**:
 *    - JavaScript converts values to numbers when comparing different types.
 *    - Example: `'2' > 1` evaluates to `true` because `'2'` is converted to `2`.
 * 
 * 5. **Strict Equality**:
 *    - `===` checks equality without type conversion.
 *    - Example: `0 === false` evaluates to `false` because the types are different.
 *    - `!==` is the strict non-equality operator.
 * 
 * 6. **Comparison with `null` and `undefined`**:
 *    - `null` and `undefined` are equal to each other (`null == undefined` is `true`).
 *    - For strict equality (`===`), they are not equal (`null === undefined` is `false`).
 *    - When compared with numbers:
 *      - `null` is converted to `0`.
 *      - `undefined` is converted to `NaN`, making all comparisons with it return `false`.
 * 
 * 7. **Special Cases**:
 *    - `null > 0` is `false`, `null == 0` is `false`, but `null >= 0` is `true`.
 *    - `undefined` compared to any number always returns `false`.
 * 
 * Notes:
 * - Use strict equality (`===`) to avoid unexpected type coercion.
 * - Avoid comparing `undefined` with other values as it leads to non-intuitive results.
 */

