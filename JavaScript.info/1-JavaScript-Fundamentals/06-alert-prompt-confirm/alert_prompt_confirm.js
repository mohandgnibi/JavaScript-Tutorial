// Interaction: alert, prompt, confirm

// ======================== alert ========================//

// This one we’ve seen already. It shows a message and waits for the user to press “OK”.
alert("Hello");

// ======================== prompt ========================//

// The function 'prompt' accepts two arguments:

// result = prompt(title, [default]);

// The square brackets around 'default' in the syntax above denote that the parameter is 
// optional, not required.

// The call prompt returns the text form the input field or 'null' if the input was canceled.

let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // Your are 100 years old!

// ======================== confirm ========================//

// The syntax
//result = confirm(question);

// The function confirm shows a modal window with a question and two buttons: OK and Cancel.
// The result is true if OK is pressed and false otherwise.

let isBoss = confirm("Are you the boss?");

alert(isBoss); // true if OK is pressed


// ======================== Summary ========================//

// We coverd 3 browser-specific functions to interact with visitors/


// 'alert': Displays an alert dialog with a specified message and waits for the user to press "OK".
 
// 'prompt': Displays a prompt dialog with a specified message and an optional default value.

// 'confirm': Displays a confirmation dialog with a specified question and two buttons: OK and Cancel.
