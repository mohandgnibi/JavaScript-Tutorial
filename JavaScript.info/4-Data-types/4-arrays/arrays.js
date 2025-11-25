// ARRAYS:

/*
Objects allow you to store keyed collections of values. That’s fine.

But quite often we find that we need an ordered collection, where we have a 1st, 
a 2nd, a 3rd element and so on. For example, we need that to store a list of 
something: users, goods, HTML elements etc.

It is not convenient to use an object here, because it provides no methods to manage 
the order of elements. We can’t insert a new property “between” the existing ones. 
Objects are just not meant for such use.

There exists a special data structure named Array, to store ordered collections.
*/

// ======================== Declaration ========================//

// There are two syntaxes for creating an empty array:

let arr = new Array();
let array = [];

// Almost all the time, the second syntax is used. We can supply initial elements in the brackets:

let fruits = ["Apple", "Orange", "Plum"];

// Array elements are numbered, starting with zero.

// We can get an element by its number in square brackets:
fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum

// We can replace an element:
fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]

// ... Or add new one to the array:
fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]

// The total count of the elements in the array is its 'length':
fruits = ["Apple", "Orange", "Plum"];

alert( fruits.length ); // 3

// We can also use alert to show the whole array.
alert( fruits ); // Apple,Orange,Plum

// An array can store elements of any type.

// mix of values

arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello


// ** Trailing comma **

// An array, just like an object, may end with a comma:

fruits = [
  "Apple", 
  "Orange",
  "Plum",
];

// The “trailing comma” style makes it easier to insert/remove items, because all 
// lines become alike.

// ======================== Get last elements with “at” ========================//

// We can explicitly calculate the last element index and then access it: 
// 'fruits[fruits.length - 1]'.

fruits = ["Apple", "Orange", "Plum"];

alert( fruits[fruits.length-1] ); // Plum

// A bit cumbersome, isn’t it? We need to write the variable name twice.

// Luckily, there’s a shorter syntax: 'fruits.at(-1)':

// same as fruits[fruits.length-1]
alert( fruits.at(-1) ); // Plum

/*
In other words, arr.at(i):

- is exactly the same as arr[i], if i >= 0.
- for negative values of i, it steps back from the end of the array.
*/

// ======================== Methods pop/push, shift/unshift ========================//

/*
A queue is one of the most common uses of an array. In computer science, this means 
an ordered collection of elements which supports two operations:

- `push` appends an element to the end.
- `shift` get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.

There’s another use case for arrays – the data structure named stack.

It supports two operations:

- `push` adds an element to the end.
- `pop` takes an element from the end.

For stacks, the latest pushed item is received first, that’s also called LIFO (Last-In-First-Out) principle. 
For queues, we have FIFO (First-In-First-Out).
*/

// ** Methods that work with the end of the array: **

// `pop` Extracts the last element of the array and returns it:

fruits = ["Apple", "Orange", "Pear"];

alert( fruits.pop() ); // remove "Pear" and alert it

alert( fruits ); // Apple, Orange

// `push` Append the element to the end of the array:

fruits = ["Apple", "Orange"];

fruits.push("Pear");

alert( fruits ); // Apple, Orange, Pear

// ** Methods that work with the beginning of the array: **

// `shift` Extracts the first element of the array and returns it:

fruits = ["Apple", "Orange", "Pear"];

alert( fruits.shift() ); // remove Apple and alert it

alert( fruits ); // Orange, Pear

// `unshift` Add the element to the beginning of the array:

fruits = ["Orange", "Pear"];

fruits.unshift('Apple');

alert( fruits ); // Apple, Orange, Pear

// Methods `push` and `unshift` can add multiple elements at once:

fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert( fruits );

// ======================== Internals ========================//

/*
An array is a special kind of object. The square brackets used to access a 
property arr[0] actually come from the object syntax. That’s essentially the 
same as obj[key], where arr is the object, while numbers are used as keys.

They extend objects providing special methods to work with ordered collections 
of data and also the length property. But at the core it’s still an object.

Remember, there are only eight basic data types in JavaScript (see the Data types 
chapter for more info). Array is an object and thus behaves like an object.

For instance, it is copied by reference:
*/

fruits = ["Banana"];

arr = fruits; // copy by reference (two varaibles reference the same array)

arr.push("Pear"); // modify the array by reference

alert( fruits ); // Banana, Pear -2 items now

/*
…But what makes arrays really special is their internal representation. The engine 
tries to store its elements in the contiguous memory area, one after another, just 
as depicted on the illustrations in this chapter, and there are other optimizations 
as well, to make arrays work really fast.

But they all break if we quit working with an array as with an “ordered collection” 
and start working with it as if it were a regular object.

For instance, technically we can do this:
*/

fruits = []; // make an array

fruits[99999] = 5; // assign a property with the index far greater than its length

fruits.age = 25; // create a property with an arbitrary name

/*
Please think of arrays as special structures to work with the ordered data. They 
provide special methods for that. Arrays are carefully tuned inside JavaScript 
engines to work with contiguous ordered data, please use them this way. And if 
you need arbitrary keys, chances are high that you actually require a regular 
object '{}'.
*/

// ======================== Performance ========================//

// Methods `push/pop` run fast, while `shift/unshift` are slow.

fruits.shift(); // take 1 element from the start

fruits.pop(); // take 1 element from the end

// ======================== Loops ========================//

// One of the oldest ways to cycle array items is the 'for' loop over indexes:

arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}

// But for arrays there is another form of loop, 'for..of':

fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}

// Technically, because arrays are objects, it is also possible to use 'for..in':

arr = ["Apple", "Orange", "Pear"];

for (let key in arr) {
  alert( arr[key] ); // Apple, Orange, Pear
}

// Generally, we shouldn’t use `for..in` for arrays.

// ======================== A word about "length" ========================//

/*
The length property automatically updates when we modify the array. To be precise, it is
actually not the count of values in the array, but the greatest numeric index plus one.

For instance, a single element with a large index gives a big length:
*/

fruits = [];
fruits[123] = "Apple";

alert( fruits.length ); // 124

/*
Note that we usually don’t use arrays like that.

Another interesting thing about the length property is that it’s writable.

If we increase it manually, nothing interesting happens. But if we decrease it, 
the array is truncated. The process is irreversible, here’s the example:
*/

arr = [1, 2, 3, 4, 5];

arr.length = 2; // truncate to 2 elements
alert( arr ); // [1, 2]

arr.length = 5; // return length back
alert( arr[3] ); // undefined: the values do not return

// So, the simplest way to clear the array is: `arr.length = 0`.

// ======================== new Array() ========================//

// There is one more syntax to create an array:
let arra = new Array("Apple", "Pear", "etc");

/*
It’s rarely used, because square brackets `[]` are shorter. Also, there’s a tricky 
feature with it.

If new Array is called with a single argument which is a number, then it creates 
an array *without items, but with the given length*.

Let’s see how one can shoot themselves in the foot:
*/

arr = new Array(2); // will it create an array of [2]?

alert( arr[0] ); // undefined! no elements.

alert( arr.length ); // length 2

// To avoid such surprises, we usually use square brackets, unless we really know 
// what we’re doing.

// ======================== Multidimensional arrays ========================//

// Arrays can have items that are also arrays. We can use it for multidimensional arrays, 
// for example to store matrices:

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[0][1] ); // 2, the second value of the first inner array

// ======================== toString ========================//

//Arrays have their own implementation of toString method that returns a 
// comma-separated list of elements.

arr = [1, 2, 3];

alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true

// Also, let's try this:

alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"

/*
Arrays do not have `Symbol.toPrimitive`, neither a viable `valueOf`, they implement 
only `toString` conversion, so here [] becomes an empty string, `[1]` becomes `"1"` 
and `[1,2]` becomes `"1,2"`.

When the binary plus `"+"` operator adds something to a string, it converts it to 
a string as well, so the next step looks like this:
*/

alert( "" + 1 ); // "1"
alert( "1" + 1 ); // "11"
alert( "1,2" + 1 ); // "1,21"

// ======================== Don't compare arrays with `==` ========================//

// Arrays in JavaScript, unlike some other programming languages, shouldn’t be compared with operator `==`.

alert( [] == [] ); // false
alert( [0] == [0] ); // false

/*
These arrays are technically different objects. So they aren’t equal. The `==` operator 
doesn’t do item-by-item comparison.

Comparison with primitives may give seemingly strange results as well:
*/

alert( 0 == [] ); // true
alert( '0' == [] ); // false

/*
Here, in both cases, we compare a primitive with an array object. So the array [] gets 
converted to primitive for the purpose of comparison and becomes an empty string ''.

Then the comparison process goes on with the primitives, as described in the chapter 
Type Conversions:
*/

// after [] was converted to ''
alert( 0 == '' ); // true, as '' becomes converted to number 0

alert('0' == '' ); // false, no type conversion, different strings

/*
So, how to compare arrays?

That’s simple: don’t use the == operator. Instead, compare them item-by-item in 
a loop or using iteration methods explained in the next chapter.
*/

/**
 * @Summary
 * 
 * @section Declaration
 * Arrays can be declared using:
 * - `new Array()` - constructor syntax (rarely used)
 * - `[]` - literal syntax (preferred)
 * 
 * @section Accessing Elements
 * - Access via index: `arr[0]`, `arr[1]`, etc.
 * - Get last element: `arr.at(-1)` or `arr[arr.length - 1]`
 * - Length property: `arr.length`
 * 
 * @section Queue/Stack Methods
 * Queue (FIFO):
 * - {@link Array#push} - add to end
 * - {@link Array#shift} - remove from start
 * 
 * Stack (LIFO):
 * - {@link Array#push} - add to end
 * - {@link Array#pop} - remove from end
 * - {@link Array#unshift} - add to start
 * 
 * Performance: `push/pop` are fast; `shift/unshift` are slow.
 * 
 * @section Iteration
 * - `for` loop - index-based iteration
 * - `for...of` loop - element iteration (preferred for arrays)
 * - `for...in` loop - key iteration (not recommended for arrays)
 * 
 * @section Array Properties
 * - `length` - automatically updates, writable, can be used to truncate
 * - Arrays are objects copied by reference
 * - Use `[]` for ordered data, use `{}` for arbitrary keys
 * 
 * @section Type Coercion
 * - `toString()` - returns comma-separated values
 * - Avoid comparing arrays with `==` operator
 * - Compare arrays item-by-item in loops or use iteration methods
 * 
 * @section Advanced
 * - Multidimensional arrays supported via nested arrays
 * - `new Array(n)` creates empty array with length n (not array with value n)
 * - Arrays are optimized for contiguous ordered data in memory
 */
