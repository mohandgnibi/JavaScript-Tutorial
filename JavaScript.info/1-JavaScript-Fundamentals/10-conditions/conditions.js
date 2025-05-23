// CONDITIONAL BRANCHING: "if", "?"

// Sometimes, we need to perform different actions based on different conditions.

// To do that, we can use the 'if' statement and the conditional operator '?', 
// that’s also called a “question mark” operator.

// ======================== The 'if' statement ========================//

// The 'if(...)' statement evaluates a condition in parentheses and if the result
// is true, executes a block of code.
// For example:

let year = prompt("In which year was ECMAScript-2015 specification published?", "");

if (year == 2015) alert("You are right!");

/**
 * In the example above, the condition is a simple equality check (year == 2015), 
 * but it can be much more complex.
 * 
 * If we want to execute more than one statement, we have to wrap our code block inside curly braces:
 */

if (year == 2015) {
    alert( "That's correct!" );
    alert( "You're so smart" );
}

// We recommend wrapping your code block with curly braces {} every time you use an if statement, 
// even if there is only one statement to execute. Doing so improves readability.

// ======================== Boolean conversion ========================//

/**
 * The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.
 * Let’s recall the conversion rules from the chapter Type Conversions:
 * 
 * - A number 0, an empty string "", null, undefined, and NaN all become false. 
 *   Because of that they are called “falsy” values.
 * - Other values become true, so they are called “truthy”.
 * 
 * So, the code under this condition would never execute:
 */

if (0){ 
    // 0 is fals   
}

// and inside this condition _ it always will:

if (1) {
    // 1 is truthy
}

// We can also pass a pre-evaluated boolean value to 'if', like this:

let cond = (year == 2015); // equality evaluates to true or false

if (cond) {
    //
}

// ======================== The 'else' clause ========================//

// The 'if' statement may contain an optional 'else' block. It executes when the condition is falsy.
// For example:

if (year == 2015) {
    alert( 'You guessed it right!');
} else {
    alert( 'How can you be so wrong?'); // any value except 2015
}

// ======================== Several conditions: "else if" ========================//

// Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.
// For example:

if (year < 2015) {
    alert( 'Too early...' );
} else if (year > 2015) {
    alert( 'Too late' );
} else {
    alert( 'Exactly!' );
}

/**
 * In the code above, JavaScript first checks 'year < 2015'. If that is falsy, it goes to the 
 * next condition 'year > 2015'. If that is also falsy, it shows the last 'alert'.
 * 
 * There can be more 'else if' blocks. The final 'else' is optional.
 */

// ======================== Conditional operator '?' ========================//

// Sometimes, we need to assign a variable depending on a condition.
// For instance:

let accessAllowed;
let age = prompt( 'How old are you?', '');

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

alert(accessAllowed);

/**
 * The so-called “conditional” or “question mark” operator lets us do that in a shorter 
 * and simpler way.
 * 
 * The operator is represented by a question mark '?'. Sometimes it’s called “ternary”, 
 * because the operator has three operands. It is actually the one and only operator 
 * in JavaScript which has that many.
 */

// the syntax is: 
//let result = condition ? value1 : value2;

// The condition is evaluated: if it’s truthy then 'value1' is returned, otherwise – 'value2'.
// For example:

let accessAllow = (age > 18) ? true : false;

/**
 * Technically, we can omit the parentheses around 'age > 18'. The question mark operator 
 * has a low precedence, so it executes after the comparison '>'.
 * 
 * This example will do the same thing as the previous one
 */

// the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)
let accessAllowd = age > 18 ? true : false;

// But parentheses make the code more readable, so we recommend using them.


// ======================== Multiple '?' ========================//

// A sequence of question mark operators '?' can return a value that depends 
// on more than one condition.
// For instance:

let ages = prompt('age?', 18);

let message = (ages < 3) ? 'Hi, baby!' :
  (ages < 18) ? 'Hello!' :
  (ages < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

/**
 * It may be difficult at first to grasp what’s going on. But after a closer look, 
 * we can see that it’s just an ordinary sequence of tests:
 * 
 * 1. The first question mark checks whether 'age < 3'.
 * 2. If true – it returns 'Hi, baby!'. Otherwise, it continues to the expression 
 *    after the colon “:”, checking 'age < 18'.
 * 3. If that’s true – it returns 'Hello!'. Otherwise, it continues to the expression 
 *    after the next colon “:”, checking 'age < 100'.
 * 4. If that’s true – it returns 'Greetings!'. Otherwise, it continues to the expression
 *    after the last colon “:”, returning 'What an unusual age!'.
 */

// Here’s how this looks using 'if..else':

if (ages < 3) {
    message = "Hi, baby!";
} else if (ages < 18) {
    message = "Hello!";
} else if (ages < 100) {
    message = "Greeting!";
} else {
    message = "What an unusual age!";
}

// ======================== Non-traditional use of '?' ========================//

// Sometimes the question mark '?' is used as a replacement fo if:

let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
    alert('Right!') : alert('Wrong.');

// It’s not recommended to use the question mark operator in this way.

// The notation is shorter than the equivalent 'if' statement, which appeals 
// to some programmers. But it is less readable.

// Here is the same code using 'if' for comparison:

if (company == "Netscape") {
    alert("Right");
} else {
    alert("Wrong.");
}
/**
 * Our eyes scan the code vertically. Code blocks which span several lines 
 * are easier to understand than a long, horizontal instruction set.
 * The purpose of the question mark operator ? is to return one value 
 * or another depending on its condition. Please use it for exactly that. 
 * Use if when you need to execute different branches of code.
 */

// ======================== Summary ========================//

/**
 * Topics covered:
 * 
 * 1. **The 'if' Statement**:
 *    - Evaluates a condition and executes a block of code if the condition is truthy.
 *    - Example: Checking equality and executing single or multiple statements.
 *    - Recommendation: Always use curly braces `{}` for better readability.
 *
 * 2. **Boolean Conversion**:
 *    - Explains how JavaScript converts values to boolean in conditions.
 *    - Falsy values: `0`, `""`, `null`, `undefined`, `NaN`.
 *    - Truthy values: All other values.
 *
 * 3. **The 'else' Clause**:
 *    - Executes a block of code when the `if` condition is falsy.
 *    - Example: Providing alternative logic when a condition is not met.
 *
 * 4. **Several Conditions: 'else if'**:
 *    - Allows testing multiple conditions sequentially.
 *    - Example: Handling cases where a value is less than, greater than, or equal to a specific value.
 *
 * 5. **Conditional Operator '?'**:
 *    - A shorthand for assigning values based on a condition.
 *    - Syntax: `condition ? value1 : value2`.
 *    - Example: Assigning a value to a variable based on a comparison.
 *    - Recommendation: Use parentheses for better readability.
 *
 * 6. **Multiple '?' Operators**:
 *    - Demonstrates chaining of the conditional operator for multiple conditions.
 *    - Example: Returning different messages based on age ranges.
 *    - Explanation: Each condition is evaluated sequentially, returning the corresponding value.
 *
 * 7. **Non-Traditional Use of '?'**:
 *    - Shows how the conditional operator can replace `if` for executing code.
 *    - Example: Using `?` for inline conditional alerts.
 *    - Recommendation: Avoid using `?` for code execution as it reduces readability.
 *
 * Notes:
 * - The conditional operator `?` is best used for returning values, not for executing code.
 * - Use `if` statements for better readability when executing different branches of code.
 */
