// Automated testing with Mocha

// Automated testing will be used in further tasks, and it’s also widely used in 
// real projects.

// ======================== Why do we need tests? ========================//

/**
 * When we write a function, we can usually imagine what it should do: which parameters 
 * give which results.
 * 
 * During development, we can check the function by running it and comparing the 
 * outcome with the expected one. For instance, we can do it in the console.
 * 
 * If something is wrong – then we fix the code, run again, check the result – and 
 * so on till it works.
 * 
 * But such manual “re-runs” are imperfect.
 * 
 * ***When testing a code by manual re-runs, it’s easy to miss something.***
 * 
 * For instance, we’re creating a function 'f'. Wrote some code, testing: 'f(1)' works, 
 * but 'f(2)' doesn’t work. We fix the code and now 'f(2)' works. Looks complete? 
 * But we forgot to re-test 'f(1)'. That may lead to an error.
 * 
 * That’s very typical. When we develop something, we keep a lot of possible use 
 * cases in mind. But it’s hard to expect a programmer to check all of them manually 
 * after every change. So it becomes easy to fix one thing and break another one.
 * Automated testing means that tests are written separately, in addition to the code. 
 * They run our functions in various ways and compare results with the expected.
 */

// ======================== Behavior Driven Development (BDD) ========================//

/**
 * Let’s start with a technique named Behavior Driven Development or, in short, BDD.
 * 
 * ** BDD is three things in one: tests AND documentation AND examples. **
 * 
 * To understand BDD, we’ll examine a practical case of development.
 */

// ======================== Developement of "pow": the spec ========================//

/**
 * Let’s say we want to make a function pow(x, n) that raises x to an integer power n. 
 * We assume that n≥0.
 */

// ======================== The development flow ========================//

/**
 * The flow of development usually looks like this:
 * 
 * 1. An initial spec is written, with tests for the most basic functionality.
 * 2. An initial implementation is created.
 * 3. To check whether it works, we run the testing framework Mocha (more details soon) 
 *    that runs the spec. While the functionality is not complete, errors are displayed.
 *    We make corrections until everything works.
 * 4. Now we have a working initial implementation with tests.
 * 5. We add more use cases to the spec, probably not yet supported by the implementations. 
 *    Tests start to fail.
 * 6. Go to 3, update the implementation till tests give no errors.
 * 7. Repeat steps 3-6 till the functionality is ready.
 */

// ======================== The spec in action ========================//

/**
 * Here in the tutorial we’ll be using the following JavaScript libraries for tests:
 * 
 * - Mocha @see https://mochajs.org/ - the core framework: it provides common testing
 *   functions including 'describe' and 'it' and the main function that runs tests.
 * 
 * - Chai @see https://www.chaijs.com/ - the library with many assertions. It allows 
 *   to use a lot of different assertions, for now we need only 'assert.equal'.
 * 
 * - Sinon @see https://sinonjs.org/ - a library to spy over functions, 
 *   emulate built-in functions and more, we’ll need it much later.
 */

/**
 * Other assertions:
 * 
 * there are other assertions in 'Chai @see https://www.chaijs.com/' as well, for instance:
 * - 'assert.equal(value1, value2)' checks the equality 'value1 == value2'.
 * - 'assert.strictEqual(value1, value2)' checks the strict equality 'value1 === value2'.
 * - 'assert.notEqual', 'assert.notStrictEqual' inverse checks to the ones above.
 * - 'assert.isTrue(value)' checks that 'value === true'.
 * - 'assert.isFalse(value)' checks that 'value === false'.
 * ...the full list is the docs @see https://www.chaijs.com/api/assert/
 */

