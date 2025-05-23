// LOOPS: while and for


/**
 * We often need to repeat actions.
 * 
 * For example, outputting goods from a list one after another or just running 
 * the same code for each number from 1 to 10.
 * 
 * Loops are a way to repeat the same code multiple times.
 */


// ======================== The 'while' loop ========================//

/**
 * The 'while' loop has the following syntax:
 * 
 * while (condition) {
 *   // code
 *   // so-called "loop body"
 * }
 * 
 */

let i = 0;

while (i < 3) {
  alert( i );
  i++;
}

// For instance, a shorter way to write 'while (i != 0)' is 'while (i):

i = 3;

while (i) {// when i becomes 0; the condition becomes falsy, and the loop stops
  alert( i );
  i--;
}


// Curly braces are not required for a single-line body

i = 3;

while (i) alert(i--);

// ======================== The 'do...while' loop ========================//

// The condition check can be moved below the loop body using the 'do..while' syntax:

/**
 * 
 * do {
 *   // loop body
 * } while (condition);
 * 
 */

// The loop will first execute the body, then check the condition, and, while it’s truthy, 
// execute it again and again.

// For example:

i = 0;

do {
  alert( i );
  i++;
} while(i < 3);

// ======================== The 'for' loop ========================//

/**
 * Syntax:
 * 
 * for (begin; condition; step) {
 *   // ... loop body ...
 * }
 * 
 */

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);  
}

/**
 * Let’s examine the for statement part-by-part:
 * 
 * part
 * ------
 * begin        'let i = 0'     executes once upon entering the loop.
 * condition    'i < 3'         Checked befor every loop iteration. If false, the loop stops.
 * body         'alert(i)'      Runs again and again while the condition is truthy
 * step         'i++'           Executes after the body on each iteration.
 * 
 * The general loop algorithm works like this:
 * 
 * Run begin
 * → (if condition → run body and run step)
 * → (if condition → run body and run step)
 * → (if condition → run body and run step)
 * → ...
 * 
 */

// for (let i = 0; i < 3; i++) alert(i);

// run begin

i = 0;
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// ...finish, because now i == 3

// Inline variable declaration //

// Here, the “counter” variable i is declared right in the loop. This is called
// an “inline” variable declaration. Such variables are visible only inside the loop.

for (let i = i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}

// alert(i); // error, no such variable

// Instead of defining a variable, we could use an existing one:

i = 0; 

for (i = 0; i < 3; i++) { // use an existing variable
  alert(i); // 0, 1, 2
}

alert(i); // 3, visible, because declared outside of the loop

// Skipping parts //

/**
 * Any part of for can be skipped.
 * 
 * For example, we can omit begin if we don’t need to do anything at the loop start.
 * Like here:
 */

i = 0; // we have i already declared and assigned

for (; i < 3; i++) {
  alert( i ); // 0, 1, 2
}

// We can also remove the step part:

i = 0;

for (; i < 3;) {
  alert(i++);
}

// his makes the loop identical to while (i < 3).
// We can actually remove everything, creating an infinite loop:

for (;;) {
  // repeats without limits
}

// ======================== Breaking the loop ========================//

/**
 * Normally, a loop exits when its condition becomes falsy.
 * 
 * But we can force the exit at any time using the special break directive.
 * For example, the loop below asks the user for a series of numbers, “breaking” 
 * when no number is entered:
 */

let sum = 0;

while (true) {
  let value = +prompt("Enter a number", "");

  if (!value) break; // (*)
  sum += value;

}

alert("Sum: " + sum);

// The break directive is activated at the line (*) if the user enters an empty 
// line or cancels the input.

// ======================== Continue to the next iteration ========================//

/**
 * The continue directive is a “lighter version” of break. 
 * It doesn’t stop the whole loop. Instead, it stops the current iteration and 
 * forces the loop to start a new one (if the condition allows).
 * 
 * We can use it if we’re done with the current iteration and would like to move
 *  on to the next one.
 * 
 * The loop below uses continue to output only odd values:
 */

for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}

// The continue directive helps decrease nesting //

// A loop that shows odd values could look like this:

for (let i = 0; i < 10; i++) {
  if (i % 2) {
    alert(i);
  }
}

// No break/continue to the right side of '?' //

/**
 * Please note that syntax constructs that are not expressions cannot be used 
 * with the ternary operator ?.
 * In particular, directives such as break/continue aren’t allowed there.
 * 
 * For example, if we take this code:
 */

// if (i > 5) {
//   alert(i);
// } else {
//   continue;
// }

// (i > 5) ? alert(i) : continue; // continue isn't allowed here

//it stops working: there’s a syntax error.
// This is just another reason not to use the question mark operator ? instead of if.

// ======================== Labels for break/continue ========================//

/**
 * Sometimes we need to break out from multiple nested loops at once.
 * 
 * For example, in the code below we loop over i and j, prompting for 
 * the coordinates (i, j) from (0,0) to (2,2):
 */

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i}, ${j})`, '');

    // What if we want to exit from here to Done (below)?
  }
}

alert('Done!');


/**
 * We need a way to stop the process if the user cancels the input.
 * The ordinary break after input would only break the inner loop. 
 * That’s not sufficient – labels, come to the rescue!
 * 
 * labelName: for (...) {
 * ...
 * }
 * 
 * The break <labelName> statement in the loop below breaks out to the label:
 */

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i}, ${j})`, '');

    // if an empty string or conceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert("Done!");

/**
 * n the code above, break outer looks upwards for the label named outer and breaks 
 * out of that loop. So the control goes straight from (*) to alert('Done!').
 * 
 * We can also move the label onto a separate line:
 */

outer:
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i}, ${j})`, "");

    // if an empty string or conceled, then break out of both loops
    if (!input) break outer;
    
    // do something with the value...
  }
}

alert("Done!");

// ======================== Summary ========================//

/**
 * Loops in JavaScript:
 * 
 * 1. The 'while' loop:
 *    - Repeats actions while a condition is truthy.
 *    - Example: Counting up or down with a condition.
 *    - Single-line bodies can omit curly braces.
 * 
 * 2. The 'do...while' loop:
 *    - Executes the loop body at least once before checking the condition.
 *    - Example: Counting up with a condition checked after execution.
 * 
 * 3. The 'for' loop:
 *    - A compact loop structure with initialization, condition, and step.
 *    - Example: Iterating over a range of numbers.
 *    - Supports inline variable declarations and skipping parts (e.g., initialization, step).
 * 
 * 4. Breaking the loop:
 *    - The 'break' directive exits the loop immediately.
 *    - Example: Summing numbers until the user cancels input.
 * 
 * 5. Continuing to the next iteration:
 *    - The 'continue' directive skips the current iteration and proceeds to the next.
 *    - Example: Skipping even numbers to output only odd values.
 * 
 * 6. Labels for break/continue:
 *    - Labels allow breaking out of nested loops.
 *    - Example: Exiting multiple loops when a condition is met.
 * 
 * 7. Summary:
 *    - Provides an overview of loop constructs and their usage in JavaScript.
 */

