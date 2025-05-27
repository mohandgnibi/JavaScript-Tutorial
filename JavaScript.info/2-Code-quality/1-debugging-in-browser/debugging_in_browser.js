// Debugging in the browser //

/**
 * Before writing more complex code, let’s talk about debugging.
 * 
 * Debugging is the process of finding and fixing errors within a script. All modern
 * browsers and most other environments support debugging tools – a special UI 
 * in developer tools that makes debugging much easier. It also allows to trace 
 * the code step by step to see what exactly is going on.
 * 
 * We’ll be using Chrome here, because it has enough features, most other browsers 
 * have a similar process.
 */

// ======================== The "Sources" panel ========================//

/**
 * - Open the exaple page in Chrome. @see https://javascript.info/article/debugging-chrome/debugging/index.html 
 * - Turn on developer tools with [F12] ('Mac: Cmd+Opt+I').
 * - Select the 'Sources' panel
 * 
 * The Sources panel has 3 parts:
 * 
 * 1. The "File Navigator" pane lists HTML, JavaScript, CSS and other files, including
 *    images that are attached to the page. Chrome extensions may appear here too.
 * 2. The "Code Editor" pane shows the source code.
 * 3. The "JavaScript Debugging" pane is for debugging, we’ll explore it soon.
 */

// ======================== Console ========================//

/**
 * The console tab, is a crucial tool for debugging web applications. It allows the 
 * developer to view and interact with JavaScript errors, and log messages, and run 
 * code snippets directly in the browser. Developers can inspect variables, 
 * test functions, and diagnose issues in real-time, making it an essential component
 * of web development and allowing the debugging of a JavaScript file very efficiently.
 */

// ======================== Breakpoints ========================//

/**
 * A breakpoint is a point of code where the debugger will automatically pause 
 * the JavaScript execution.
 * 
 * While the code is paused, we can examine current variables, execute commands in
 * the console etc. In other words, we can debug it.
 * 
 * We can always find a list of breakpoints in the right panel. That’s useful when 
 * we have many breakpoints in various files. It allows us to:
 * 
 * - Quickly jump to the breakpoint in the code (by clicking on it in the right panel).
 * - Temporarily disable the breakpoint by unchecking it.
 * _ Remove the breakpoint by right-clicking and selecting Remove.
 * - ...And so on.
 * 
 * *** Conditional breakpoints ***
 * 
 * Right click on the line number allows to create a conditional breakpoint. It 
 * only triggers when the given expression, that you should provide when you create
 * it, is truthy.
 * 
 * That’s handy when we need to stop only for a certain variable value or for certain
 * function parameters.
 */

// ======================== The cammand "debugger" ========================//

// We can also pause the code by using the debugger command in it, like this:

function hello(name) {
  let phrase = `Hello, ${name}!`;

  debugger; // <-- the debugger stops here
}

// Such command works only when the development tools are open, otherwise the browser ignores it.

// ======================== Pause and look around ========================//

/**
 * Please open the informational dropdowns to the right (labeled with arrows). 
 * They allow you to examine the current code state:
 * 
 * 1. 'Watch' – shows current values for any expressions.
 *    You can click the plus + and input an expression. The debugger will show 
 *    its value, automatically recalculating it in the process of execution.
 * 
 * 2. 'Call Stack' – shows the nested calls chain.
 *    At the current moment the debugger is inside hello() call, called by a script
 *    in index.html (no function there, so it’s called “anonymous”).
 * 
 *    If you click on a stack item (e.g. “anonymous”), the debugger jumps to the 
 *    corresponding code, and all its variables can be examined as well.
 * 
 * 3. 'Scope' – current variables.
 *    'Local' shows local function variables. You can also see their values highlighted
 *    right over the source.
 * 
 *    'Global' has global variables (out of any functions).
 * 
 *    There’s also 'this' keyword there that we didn’t study yet, but we’ll do that soon.
 */

// ======================== Tracing the execution ========================//

/**
 * Now it’s time to trace the script.
 * 
 * There are buttons for it at the top of the right panel. Let’s engage them.
 * 
 * *** – “Resume”: continue the execution, hotkey [F8]. ***
 * 
 * Resumes the execution. If there are no additional breakpoints, then the
 * execution just continues and the debugger loses control.
 * 
 * *** – “Step”: run the next command, hotkey [F9]. ***
 * 
 * Run the next statement. If we click it now, alert will be shown.
 * 
 * Clicking this again and again will step through all script statements one by one.
 * 
 * *** – “Step over”: run the next command, but don’t go into a function, hotkey [F10]. ***
 * 
 * Similar to the previous “Step” command, but behaves differently if the next statement
 * is a function call (not a built-in, like alert, but a function of our own).
 * 
 * If we compare them, the “Step” command goes into a nested function call and pauses
 * the execution at its first line, while “Step over” executes the nested function call
 * invisibly to us, skipping the function internals.
 * 
 * The execution is then paused immediately after that function call.
 * 
 * That’s good if we’re not interested to see what happens inside the function call.
 * 
 *  *** – “Step into”, hotkey [F11]. ***
 * 
 * That’s similar to “Step”, but behaves differently in case of asynchronous function
 * calls. If you’re only starting to learn JavaScript, then you can ignore the 
 * difference, as we don’t have asynchronous calls yet.
 * 
 * For the future, just note that “Step” command ignores async actions, such as 
 * setTimeout (scheduled function call), that execute later. The “Step into” goes
 * into their code, waiting for them if necessary. See DevTools manual for more details.
 * 
 * *** – “Step out”: continue the execution till the end of the current function, 
 *   hotkey [Shift+F11]. ***
 * 
 * Continue the execution and stop it at the very last line of the current function.
 * That’s handy when we accidentally entered a nested call using , but it does not 
 * interest us, and we want to continue to its end as soon as possible.
 * 
 *  *** – enable/disable all breakpoints. ***
 * 
 * That button does not move the execution. Just a mass on/off for breakpoints.
 * 
 * *** – enable/disable automatic pause in case of an error. ***
 * 
 * When enabled, if the developer tools is open, an error during the script execution
 * automatically pauses it. Then we can analyze variables in the debugger to see what
 * went wrong. So if our script dies with an error, we can open debugger, enable this
 * option and reload the page to see where it dies and what’s the context at that 
 * moment.
 * 
 * *** Continue to here ***
 * 
 * Right click on a line of code opens the context menu with a great option 
 * called “Continue to here”.
 * 
 * That’s handy when we want to move multiple steps forward to the line, 
 * but we’re too lazy to set a breakpoint.
 */

// ======================== Logging ========================//

// To output something to console from our code, there’s 'console.log' function.

// For instance, this outputs values from '0' to '4' to console:

// open console to see
for (let i = 0; i < 5; i++) {
  console.log("Value,", i);
}

/**
 * OUTPUT:
 * 
 * > "Value,", 0
 * > "Value,", 1
 * > "Value,", 2
 * > "Value,", 3
 * > "Value,", 4
 */

// ======================== Summary ========================//

/**
 * As we can see, there are three main ways to pause a script:
 * 
 * 1. A breakpoint.
 * 2. The 'debugger' statements.
 * 3. An error (if dev tools are open and the button (pause) is "on").
 * 
 * When paused, we can debug: examine variables and trace the code to see where 
 * the execution goes wrong.
 * 
 * There are many more options in developer tools than covered here. 
 * The full manual is at @see https://developers.google.com/web/tools/chrome-devtools.
 * 
 * The information from this chapter is enough to begin debugging, but later, 
 * especially if you do a lot of browser stuff, please go there and look through 
 * more advanced capabilities of developer tools.
 * 
 * Oh, and also you can click at various places of dev tools and just see what’s 
 * showing up. That’s probably the fastest route to learn dev tools. Don’t forget 
 * about the right click and context menus!
 */

