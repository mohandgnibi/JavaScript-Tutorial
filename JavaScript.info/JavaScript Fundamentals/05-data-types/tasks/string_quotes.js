// What is the output of the script?

let name = "Ilya";

// The following line outputs "hello 1" because ${1} evaluates to the number 1.
alert(`hello ${1}`); // hello 1

// The following line outputs "hello name" because ${"name"} evaluates to the string "name".
alert(`hello ${"name"}`); // hello name

// The following line outputs "hello Ilya" because ${name} evaluates to the value of the variable name, which is "Ilya".
alert(`hello ${name}`); // hello Ilya