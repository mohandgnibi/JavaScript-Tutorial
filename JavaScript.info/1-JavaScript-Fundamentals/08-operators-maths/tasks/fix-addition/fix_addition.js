// Here’s a code that asks the user for two numbers and shows their sum.

// It works incorrectly. The output in the example below is 12 (for default prompt values).

// Why? Fix it. The result should be 3.

// The reason is that prompt returns user input as a string.

/**
 * let a = "1"; // prompt("First number?", 1);
 * let b = "2"; // prompt("Second number?", 2);
 * alert(a + b); // 12
 */

// fix it:

// right before prompt
let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 3

// or prepending them with +

alert( +a + +b) // 3

// or using Number()

alert(Number(a) + Number(b)); // 3 

