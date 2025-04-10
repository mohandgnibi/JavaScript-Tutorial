// VARIALBLES:

// ======================== A variable ========================
   
// Create a variable using 'let' keyword.
let message;
message = "Hello"; // store the string 'Helll' in the variable named message

alert(message); // shows the variable content

// We can combine the variable declaration and assignment into a single line:
let message1 = "Hello"; // define the variable and assign the value

alert(message1)

// We can declare multiple variable in one line:
let user = "John", age = 25, greet = "Hello";

// The multiline variant a bit longer, but easier to read:
let user1 = "John";
let age1 = 25;
let message2 = "Hello";

// Some people also define multiple variables in this multiline style:
let user2 = "John",
age2 = 25,
message3 = "Hello";

// Or even in the "comma-first" style:
let user3 = "John"
, age3 = 25
, message4 = "Hello";

// 'var' instead of 'let'
var message5 = "Hello";

// A real-life analogy
// We can put value in the box labelled 'someName'.
// We can also change it as many times as we want:
let message6;
message6 = "Hello";

message6 = "World!"; // value changed

alert(message6);
// When the value is changed, the old data is removed from the variable:

// We can also declare two variables and copy data from one into the other:
let hello = "Hello world!";
let message7;

// copy 'Hello world!' from hello into message7
message7 = hello;

// now two variable holde the same data
alert(hello); // Hello world!
alert(message7); // Hello world!

// Declaring twice triggers an error:
let msg = "This";

// repeated 'let' leads to an error
/* let msg = "That"; // SyntaxError: 'messag' has already been declared */
// So, we should declare a variable once and then refer to it without 'let'.

// ======================== Variable naming ========================

// There are two limitations on variable names in JavaScript:
// The name must contain only letters, digits, or the symbols '$' and '_'.
// The first character must not be a digit.

let userName;
let test123;

// When the name contains multiple worlds, camelCase is commonly used '(myVeryLongName)'. 

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

// Examples of incorrect variable names:
// let 1age; // cannot start with a digit
// let my-name; // hephens '-' aren't allowed in the name

// Case matters
// Variables named 'apple' and 'APPLE' are two different variables.

// Non-Latin letters are allowed, but not recommended
let имя = '...';
let 我 = '...';

// Reserved names
// list of reserved words:
/*
----------------------------------------------------------------------------------
|  break   |   case     |  catch   |  class |  const   |  continue  |  debugger   |
----------------------------------------------------------------------------------
|  default |   delete   | do       |  else  |  export  |  extends   |  false      |
----------------------------------------------------------------------------------
|  finally |   for      | function |  if    |  import  |  in        |  instanceof |
---------------------------------------------------------------------------------- 
|  new     |   null     | return   |  super |  switch  |  this      |  throw      |
----------------------------------------------------------------------------------
|  true    |   try      | typeof   |   var  |  viod    |  while     |   with      |
----------------------------------------------------------------------------------
*/

// The following are only reserved when they are found in strict mode code:
/*
let (reserved in 'const', 'let', and class declarations)
static
yield (reserved in generator function bodies)
await (reserved in module code or async function bodies)
*/

// let let = 5; //can't name a variable 'let', error!
// let return = 5; // also can't name it 'return', error!

// An assignment without mode 'use strict'.

// note: no "use strict" in this example
num = 5; // the variable "num" is created if it didn't exist
alert(num); // 5

// This is a bad practice and would cause an error in strict mode:
"use strict";
num = 5; // error: numis not defined

// ======================== Constants ========================

// To declare a constant (unchangin) variable, use 'const' instead of 'let':
const myBirthday = "18.04.1982";
myBirthday = "01.01.2001"; // error; can't reasign the constant!

// Uppercase constants
// constants are named using capital letters and underscores.
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // FF7F00

// ======================== Name things right ========================

// A variable name should have a clean, obvious meaning, describing the data that it stores.

/*
- Use human-readable names like 'userName' or 'shoppingCart'.
- Stay away from abbreviations or short names like a, b, and c, unless you know what you're doing.
- Make names maximally descriptive and concise. Example of bad names are 'data' and 'value'.
...

Variables should be named in a way that allows us to easily understand what’s inside them.
*/

