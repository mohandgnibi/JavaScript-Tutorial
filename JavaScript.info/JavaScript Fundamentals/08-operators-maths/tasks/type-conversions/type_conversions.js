// What are results of these expressions?

"" + 1 + 0 // "10" 
// The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", 
// and then we have "1" + 0, the same rule is applied.


"" - 1 + 0 // -1
//The subtraction - (like most math operations) only works with numbers, 
// it converts an empty string "" to 0.


true + false // 1 
// true = 1 and false = O (like 1 + 0 = 1)

6 / "3" // 2
// convert "3" to number 3

4 + 5 + 'px' // "9px" ( 9 + px )

"$" + 4 + 5 // "$45"

"4" - 2 // 2

"4px" - 2 // NaN

"  -9  " + 5  // "  -9  5" 
// The addition with a string appends the number 5 to the string.

"  -9  " - 5 // -14
// The subtraction always converts to numbers, so it makes " -9 " 
// a number -9 (ignoring spaces around it).

null + 1 // 1
// null becomes 0 after the numeric conversion.

undefined + 1 // NaN
// undefined becomes NaN after the numeric conversion.

" \t \n" - 2 // -2
// Space characters are trimmed off string start and end when a string is 
// converted to a number. Here the whole string consists of space characters, 
// such as \t, \n and a “regular” space between them. So, similarly to an empty string, 
// it becomes 0.
