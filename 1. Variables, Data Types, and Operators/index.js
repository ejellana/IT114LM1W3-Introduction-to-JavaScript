/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
console.log(haha)
var haha = ('Hello world')
// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let wawa = ('Hello')
console.log(wawa)
// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const rah = ('yow')
// rah = ('jsdfsbf')
console.log(rah)
// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 

// 'var' has function or global scope, allowing for redeclaration and updating of values. 
// 'let' is block-scoped, cannot be redeclared in the same scope, but can be updated. 
// 'const' is also block-scoped, cannot be reassigned once assigned, and is considered constant throughout the code.

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here

const y = 100 + 10 / 2;
console.log(y)

// Checkpoint 1.2 What operators did you use?
// Answer: plus (+) and divide (/)
// Your code here

const x = 200 + 10 / 2;
console.log(x)

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here

const obj = ('hello')
const bjo = ('world')

console.log(obj + bjo)

// Checkpoint 1.3 What operators did you use?
// Answer: plus (+)

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here

const o = 'hello' || 'world'
console.log(o)

const p = 'hello' && 'world'
console.log(p)

// Checkpoint 1.4 What operators did you use?
// Answer: or (||) and (&&)


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators


// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
// Your code here