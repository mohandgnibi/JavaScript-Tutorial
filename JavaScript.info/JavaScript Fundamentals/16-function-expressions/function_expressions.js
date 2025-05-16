// FUNCTION EXPRESSIONS:

// In JavaScript, a function is not a “magical language structure”, 
// but a special kind of value.

// The syntax that we used before is called a Function Declaration:

function sayHi() {
  alert( 'Hello' );
}

// There is another syntax for creating a function that is called a Function Expression.

// It allows us to create a new function in the middle of any expression.

// For example:

let sayHi1 = function() {
  alert( "Hello" );
}

/**
 * Here we can see a variable sayHi getting a value, the new function, created 
 * as 'function() { alert("Hello"); }'.
 * 
 * As the function creation happens in the context of the assignment expression 
 * (to the right side of =), this is a Function Expression.
 * 
 * Here we immediately assign it to the variable, so the meaning of these code 
 * samples is the same: “create a function and put it into the variable sayHi”.
 * 
 * In more advanced situations, that we’ll come across later, a function may be 
 * created and immediately called or scheduled for a later execution, not stored 
 * anywhere, thus remaining anonymous.
 */

// ======================== Function is a value ========================//

/**
 * Let’s reiterate: no matter how the function is created, a function is a value. 
 * Both examples above store a function in the sayHi variable.
 * 
 * We can even print out that value using alert:
 */

let sayHi2 = function() {
  alert( "Hello" );
};

alert( sayHi2 ); // shows the function code

/**
 * Please note that the last line does not run the function, because there are no 
 * parentheses after sayHi. There are programming languages where any mention 
 * of a function name causes its execution, but JavaScript is not like that.
 * 
 * In JavaScript, a function is a value, so we can deal with it as a value. 
 * The code above shows its string representation, which is the source code.
 * 
 * Surely, a function is a special value, in the sense that we can call it like sayHi().
 * But it’s still a value. So we can work with it like with other kinds of values.
 * 
 * We can copy a function to another variable:
 */

function sayHi3() {  // (1) create
  alert( "Hello" );
}

let func = sayHi3;  //  (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //  this still works too  (why wouldn't it)

/**
 * Here’s what happens above in detail:
 * 
 * 1. The Function Declaration (1) creates the function and puts it into the variable named sayHi.
 * 2. Line (2) copies it into the variable func. Please note again: there are no parentheses 
 *    after sayHi. If there were, then func = sayHi() would write the result of the call sayHi() 
 *    into func, not the function sayHi itself.
 * 3. Now the function can be called as both sayHi() and func().
 * 
 * We could also have used a Function Expression to declare sayHi, in the first line:
 */

let sayHi4 = function() { // (1) create
  alert( "Hello" );
};

let func1 = sayHi4; // (2)
// ...

// Everything would work the same.

/* *** Why is there a semicolon at the end? ***
 * 
 * You might wonder, why do Function Expressions have a semicolon ; at the end, 
 * but Function Declarations do not:
 * 
 * function sayHi() {
 *   // ...
 * }
 * 
 * let sayHi = function() {
 *   // ...
 * };
 * 
 * The answer is simple: a Function Expression is created here as function(…) {…} 
 * inside the assignment statement: let sayHi = …;. The semicolon ; is recommended 
 * at the end of the statement, it’s not a part of the function syntax.
 * 
 * The semicolon would be there for a simpler assignment, such as let sayHi = 5;, 
 * and it’s also there for a function assignment.
 */

// ======================== Callback functions ========================//

/**
 * Let’s look at more examples of passing functions as values and using function expressions.
 * 
 * We’ll write a function 'ask(question, yes, no)' with three parameters:
 * 
 * 'question'
 * Text of the question
 * 
 * 'yes'
 * Function to run if the answer is "Yes"
 * 
 * 'no'
 * Function to run if the answer is "No"
 * 
 * The function should ask the question and, depending on the user’s answer, 
 * call 'yes()' or 'no()':
 */

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk; showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

// The arguments 'showOk' and 'showCancel' of ask are called callback functions or just callbacks.

// We can use Function Expressions to write an equivalent, shorter function:

function ask1(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask1(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

/** *** A function is a value representing an “action” ***
 * 
 * Regular values like strings or numbers represent the data.
 * A function can be perceived as an action.
 * We can pass it between variables and run when we want.
 */

// ======================== Function Expression vs Function Declaration ========================//

/**
 * Let’s formulate the key differences between Function Declarations and Expressions.
 * 
 * First, the syntax: how to differentiate between them in the code.
 * 
 * - Function Declaration: a function, declared as a separate statement, in the main code flow:
 */

// Function Declaration
function sum(a, b) {
  return a + b;
}

// - Function Expression: a function, created inside an expression or inside another syntax construct. 
// Here, the function is created on the right side of the “assignment expression” =:

// Function Expression
let sum1 = function(a, b) {
  return a + b;
};

// A Function Expression is created when the execution reaches it 
// and is usable only from that moment.

// A Function Declaration can be called earlier than it is defined.

// For example, this works:

sayHi5("John"); // Hello, John

function sayHi5(name) {
  alert( `Hello, ${name}` );
}

// If it were a Function Expression, then it wouldn’t work:

sayHi6("John"); // error! (Cannot access 'sayHi6' before initialization)

let sayHi6 = function(name) {   // (*) no magic any more
  alert( `Hello, ${name}` );
};

// Function Expressions are created when the execution reaches them. 
// That would happen only in the line (*). Too late.


// In strict mode, when a Function Declaration is within a code block, 
// it’s visible everywhere inside that block. But not outside of it.

// If we use Function Declaration, it won’t work as intended:

let age = prompt("What is your age?", 18);


// conditionally declare a function
if (age < 18) {

  function welcom() {
    alert("Hello!");
  }

} else {
  function welcome() {
    alert("Greetings!");
  }

}

// ... use it later
welcome(); // Error: welcome is not defined

// That’s because a Function Declaration is only visible inside the code block in which it resides.

// Here’s another example:

let age1 = 16; // take 16 as an example

if (age1 < 18) {
  welcome();                  //  \    (runs)
                              //   |
  function welcome() {        //   |
    alert("Hello!");          //   |  Function Declaration is availabe
  }                           //   |  everywhere in the block where it's declared
                              //   |
  welcome();                  //  /    (runs)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined

// What can we do to make welcome visible outside of if?

// The correct approach would be to use a Function Expression and assign welcome to the variable
//  that is declared outside of if and has the proper visibility.

let age2 = prompt("What is your age?", 18);

let welcome;

if (age2 < 18) {
  
  welcome = function() {
    alert("Hello!");
  };

} else {
  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now

// Or we could simplify it even further using a question mark operator ?:

let age3 = prompt("What is your age?", 18);

let welcome1 = (age3 < 18) ?
  function() {alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome1(); // ok now

/** *** When to choose Function Declaration versus Function Expression?
 * 
 * As a rule of thumb, when we need to declare a function, 
 * the first thing to consider is Function Declaration syntax. 
 * It gives more freedom in how to organize our code, 
 * because we can call such functions before they are declared.
 * 
 * That’s also better for readability, as it’s easier to look up 'function f(…) {…}' in the code 
 * than 'let f = function(…) {…};'. Function Declarations are more “eye-catching”.
 * 
 * But if a Function Declaration does not suit us for some reason, 
 * or we need a conditional declaration (we’ve just seen an example), 
 * then Function Expression should be used.
 */

// ======================== Summary ========================//

/**
 * - Functions are values. They can be assigned, copied or declared in any place of the code.
 * - If the function is declared as a separate statement in the main code flow, that’s called 
 *   a “Function Declaration”.
 * - If the function is created as a part of an expression, it’s called a “Function Expression”.
 * - Function Declarations are processed before the code block is executed. They are visible
 *   everywhere in the block.
 * - Function Expressions are created when the execution flow reaches them.
 * 
 * In most cases when we need to declare a function, a Function Declaration is preferable, 
 * because it is visible prior to the declaration itself. That gives us more flexibility 
 * in code organization, and is usually more readable.
 * 
 * So we should use a Function Expression only when a Function Declaration is not fit for the task. 
 * We’ve seen a couple of examples of that in this chapter, and will see more in the future.
 * 
 */