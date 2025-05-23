// BASIC OPERATORS, MATHS

// ======================== Terms: "unary", "binary", "operand" ========================//

// An operand is what operators are applied to. For instance, in the multiplication of '5 * 2' there
// are two operands: the left operand is '5' and the right operand is '2'. Sometimes, people call 
// these "arguments" instead of "operands".

// An operator is unary if it has a single operand. for example, the unary negation '-' reverses the sign of a number:

let x = 1;

x = -x;
alert(x); // -1, unary negation was applied

// An operator is binary if it has two operands. The same minus exists in binary form as well:

let y = 1, z = 3;
alert(z - y ); // 2, binary minus substracts values


// ======================== Maths ========================//

// The following math operations are supported:
/**
 * Addition: +,
 * Subtraction: -,
 * Multiplication: *,
 * Division: /,
 * Remainder: %,
 * Exponentiation: **.
 */

// The first four are straightforward, while '%' and '**' need a few words about them.

// Remainder %:
// The remainder operator '%', despite its appearance, is not related to percents.
// The result of 'a % b' is the remainder of the integer division of 'a' by 'b'.

alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4

// Exponentiation **:
// The exponentiation operator 'a ** b' raises 'a' to the power of 'b'.

alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16

// Just like in maths, the exponentiation operator is defined for non-interger numbers as well.
// For example, a square root is an exponentiation by ½:

alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

// ======================== String concatenation with binary + ========================//

// Usually, the plus operator '+' sums numbers.
// But if the binary '+' is applied to strings, it merges (concatenates) them:

let s = "my" + "string";
alert(s); // mystring

// Note that if any of the operands is a string, then the other one is converted to a string too.
// For example:

alert('1' + 2); // "12"
alert(2 + '1'); // "21"

// See, it doesn't matter whether the first operand is a string or the second one.

// Here's a more complex example:

alert(2 + 2 + '1'); // "41" and not "221"

// Here, operators work one after another. The first '+' sums two numbers, so it returns '4',
// then the next '+' adds the string '1' to it, so it's like (4 + '1' = '41').

alert('1' + 2 + 2); // "122" and not "14"

// Here, the first operand is a string, the compiler treats the other two operands as strings too. 
// The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".
// The binary + is the only operator that supports strings in such a way. 
// Other arithmetic operators work only with numbers and always convert their operands to numbers.

// Here's the demo for substraction and division:

alert(6 - '2');    // 4, converts '2' to a number
alert('6' / '2');  // 3,  converts both operands to numbers

// ======================== Numeric conversion, unary + ========================//

/**
 * The plus '+' exists in two forms: the binary form that we used above and the unary form.
 * The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. 
 * But if the operand is not a number, the unary plus converts it into a number.
 */

// For example:

// No effects on numbers
let a = 1;
alert( +a ); // 1

let b = -2;
alert( +b ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"");    // 0

/**
 * It actually does the same thing as Number(...), but is shorter.
 * The need to convert strings to numbers arises very often. For example, if we are getting values from HTML form fields, 
 * they are usually strings. What if we want to sum them?
 * The binary plus would add them as strings:
 */

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings

// if we want to treat them as numbers, we beed to convert and then sum them

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert(Number(apples) + Number(oranges)); // 5

// ======================== Operator precedence ========================//

/**
If an expression has more than one operator, the execution order is defined by their precedence, 
or, in other words, the default priority order of operators.
From school, we all know that the multiplication in the expression 1 + 2 * 2 should be calculated 
before the addition. That’s exactly the precedence thing. 
The multiplication is said to have a higher precedence than the addition.
Parentheses override any precedence, so if we’re not satisfied with the default order, 
we can use them to change it. For example, write (1 + 2) * 2.
There are many operators in JavaScript. Every operator has a corresponding precedence number. 
The one with the larger number executes first. If the precedence is the same, 
the execution order is from left to right.
Here’s an extract from the precedence table (you don’t need to remember this, but note that 
unary operators are higher than corresponding binary ones):
 */

// ======================== Assignment ========================//

let num = 2 * 2 + 1;

alert( num ); // 5

// Assingnment = returns a value


let c = 1;
let d = 2;

let e = 3 - (c = d + 1);

alert( c ); // 3
alert( e ); // 0

// Chaining assignments

// Another interesting feature is the ability to chain assignments:

let f, g, h;

f = g = h = 2 + 2

alert( f ); // 4 
alert( g ); // 4
alert( h ); // 4

// Once again, for the purposes of readability it's better to split such code into few lines:

f = 2 + 2
g = f;
h = f;
// That's easier to read, espeially when eye-scanning the code fast.

// ======================== Modify-in-place ========================//

// We often need to apply an opertor to a variable and store the new result in that same variable
// For example:

let n = 2;
n = n + 5;
n = n * 2;

// This notation can be shortened using the operators '+=' and '*='
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14

// Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: '/=', '-=', etc.

// Such operators have the same precedence as a normal assignment, so they run after most other calculations:
// let n = 2;
n *= 3 + 5; // right part evaluated first, same as n *= 8

alert( n ); // 16

// ======================== Increment/decrement ========================//

// Increasing or decreasing a number by one is among the most common numerical operations.
// So, there are special operators for it:

// Increment '++' increases a variable by 1:
let counter = 2;
counter++; // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3

// Decrement '--' decreses a variable by 1:
// let counter = 2;
counter--; // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1

// Important: Increment/decrement can only be applied to variables.

/**
 * The operators ++ and -- can be placed either before or after a variable.
 * When the operator goes after the variable, it is in “postfix form”: counter++.
 * The “prefix form” is when the operator goes before the variable: ++counter.
 * 
 * Both of these statements do the same thing: increase counter by 1.
 * 
 * Is there any difference? Yes, but we can only see it if we use the returned value of ++/--.
 */

// To see the difference, here's an example:
let count = 1;
let number = ++count; // the prefix form ++counter increments counter and returns the new value, 2. So, the alert shows 2.

alert( number ); // 2

// Now, let's use the postfix form:

let counte = 1;
let i = counte++; // the postfix form counter++ also increments counter but returns the old value (prior to increment). So, the alert shows 1.

alert( i ); // 1

// To summarize:

/**
 * If the result of increment/decrement is not used, there is no difference in which form to use:
 * let counter = 0;
 * counter++;
 * ++counter;
 * alert(counter); // 2, the lines above did the same
 * 
 * If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:
 * let counter = 0;
 * alert(++counter); // 1
 * 
 * If we’d like to increment a value but use its previous value, we need the postfix form:
 * let counter = 0;
 * alert( counter++ ); // 0
 */

// The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations.

/**
 * let counter = 1;
 * alert( 2 * ++counter ); // 4
 */

// Compare with:

/**
 * let counter = 1;
 * alert( 2 * counter++ ); // 2, because counter++ returns the "old" value
 */

// ======================== Bitwise operators ========================//

/**
 * Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.
 * 
 * The list of operators:
 * - AND ( & )
 * - OR  ( | )
 * - XOR ( ^ )
 * - NOT ( ~ )
 * - LEFT SHIFT ( << )
 * - RIGHT SHIFT ( >> )
 * - ZERO-FILL RIGHT SHIFT ( >>> )
 * 
 * These operators are used very rarely, when we need to fiddle with numbers on the very lowest (bitwise) level.
 * 
 */

// ======================== Comma ========================//

// The comma operator allows us to evaluate several expressions, dividing them with a comma ,. 
// Each of them is evaluated but only the result of the last one is returned.

let j = (1 + 2, 3 + 4);
alert( j ); // 7 (the result of 3 + 4)

// Sometimes, people use it in more complex constructs to put several actions in one line.

// three operations in one line
for (a = 1, b = 3, c = a * b; a < 10; a++) {
    //
}

// ======================== Summary ========================//
/**
 * Demonstrates the usage of basic operators and mathematical operations in JavaScript.
 *
 * Topics covered:
 * 1. **Terms: "unary", "binary", "operand"**:
 *    - Explanation of operands and operators.
 *    - Unary operators (e.g., `-x`) and binary operators (e.g., `x - y`).
 *
 * 2. **Math Operations**:
 *    - Supported operations: Addition (`+`), Subtraction (`-`), Multiplication (`*`), Division (`/`), Remainder (`%`), Exponentiation (`**`).
 *    - Examples of remainder and exponentiation operations.
 *
 * 3. **String Concatenation with Binary `+`**:
 *    - Demonstrates how the `+` operator concatenates strings.
 *    - Explains type conversion when one operand is a string.
 *
 * 4. **Numeric Conversion with Unary `+`**:
 *    - Converts non-numeric values to numbers using the unary `+` operator.
 *    - Examples of converting strings and booleans to numbers.
 *
 * 5. **Operator Precedence**:
 *    - Explains the precedence of operators and how parentheses can override it.
 *    - Examples of operator precedence in expressions.
 *
 * 6. **Assignment**:
 *    - Demonstrates assignment operations and chaining assignments.
 *    - Examples of modifying variables in place using shorthand operators (e.g., `+=`, `*=`).
 *
 * 7. **Increment/Decrement**:
 *    - Explains the `++` and `--` operators in both prefix and postfix forms.
 *    - Examples of using increment/decrement operators in expressions.
 *
 * 8. **Bitwise Operators**:
 *    - Lists bitwise operators: AND (`&`), OR (`|`), XOR (`^`), NOT (`~`), LEFT SHIFT (`<<`), RIGHT SHIFT (`>>`), ZERO-FILL RIGHT SHIFT (`>>>`).
 *    - Notes that these are rarely used and operate on 32-bit integers.
 *
 * 9. **Comma Operator**:
 *    - Demonstrates the use of the comma operator to evaluate multiple expressions.
 *    - Explains that only the result of the last expression is returned.
 */


