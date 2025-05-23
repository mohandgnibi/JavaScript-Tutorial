// The "switch" statement

/**
 * A 'switch' statement can replace multiple if checks.
 * It gives a more descriptive way to compare a value with multiple variants.
 * 
 * 
 * *** The syntax ***
 * 
 * switch (x) {
 *   case 'value1': // if (x === 'value1')
 *     ...
 *     [break]
 * 
 *   case 'value2': // if (x === 'value2')
 *     ...
 *     [break]
 * 
 *   default:
 *     ...
 *     [break]
 * }
 */

// ======================== An example ========================//

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know sush values" );
}

/**
 * Here the switch starts to compare a from the first 'case' variant that is 3. 
 * The match fails.
 * Then 4. That’s a match, so the execution starts from 'case' 4 until the nearest 'break'.
 * 
 * **If there is no 'break' then the execution continues with 
 * the next 'case' without any checks.**
 * 
 * An example without 'break':
 */

switch (a) {
  case 3:
    alert( 'Too samll' );
  case 4:
    alert( 'Exactly' );
  case 5:
    alert( 'Too big' );
  default:
    alert( "I don't know such values." );
}

// In the example above we’ll see sequential execution of three alerts:

// alert( 'Exactly!' );
// alert( 'Too big' );
// alert( "I don't know such values." );

/**
 * *** Any expression can be a 'switch/case' argument ***
 * 
 * Both 'switch' and 'case' allow arbitrary expressions.
 * 
 * For example:
 */

a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("This runs, because +a is 1, exactly equals b+1");
    break;
  
  default:
    alert("This doesn't run");
}

// Here +a gives 1, that’s compared with b + 1 in case, and the corresponding code 
// is executed.

// ======================== Grouping of "case" ========================//

// Several variants of case which share the same code can be grouped.
// For example, if we want the same code to run for case 3 and case 5:

a = 3;

switch (a) {
  case 4:
    alert( 'Right!' );
    break;
  
  case 3: // (*) grouped two cases
  case 5:
    alert( "Wrong!" );
    alert( "Why don't you take a match class?" );
    break;

  default:
    alert( "The result is strange. Really." );
}

/**
 * Now both 3 and 5 show the same message.
 * 
 * The ability to “group” cases is a side effect of how 'switch/case' works without
 * 'break'. Here the execution of 'case 3' starts from the line '(*)' and goes through 
 * 'case 5', because there’s no 'break'.
 */

// ======================== Type matters ========================//

// Let’s emphasize that the equality check is always strict. The values must be 
// of the same type to match.

// For example, let's consider the code:

let arg = prompt("Enter a balue?");
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;
  
  case 3:
    alert( 'Never executes!' );
    break;

  default:
    alert( 'An unkown value' );
}

// 1. For 0, 1, the first alert runs.
// 2. For 2 the second alert runs.
// 3. But for 3, the result of the prompt is a string "3", which is not strictly 
//    equal === to the number 3. So we’ve got a dead code in case 3! The default 
//    variant will execute.

// ======================== Summary ========================//

/**
 * "switch" statement in JavaScript.
 * 
 * The "switch" statement is used to replace multiple `if` checks, providing
 * a more descriptive way to compare a value with multiple variants.
 * 
 * Key Points:
 * - The `switch` statement evaluates an expression and executes the code block
 *   associated with the first matching `case`.
 * - The `break` statement is used to terminate the execution of a `case` block.
 *   Without `break`, execution continues to the next `case`.
 * - Both `switch` and `case` can accept arbitrary expressions.
 * - Cases can be grouped to share the same code block by omitting `break`.
 * - The equality check in `switch/case` is strict (`===`), meaning the type
 *   of the value must also match.
 * 
 * Examples:
 * - Basic usage of `switch` with `case` and `default`.
 * - Behavior when `break` is omitted, leading to sequential execution.
 * - Grouping multiple `case` statements to share the same code block.
 * - Demonstrating strict type checking in `switch/case`.
 */

