// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
function greet(Emman) {
    console.log(`Hello, ${Emman}!`);
  }
  
  // Call the 'greet' function with your name as the argument
  greet('Emman');
  
  // Checkpoint 4.1 What is the difference between a function declaration and a function expression?
  // Answer: Function declarations are hoisted, meaning they are available before they are declared, while function expressions are not.
  
  // Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
  const calculateArea = function(length, width) {
    return length * width;
  };
  
  // Call the 'calculateArea' function with any length and width as arguments
  const area = calculateArea(5, 8);
  console.log('Area:', area);
  
  // Checkpoint 4.2 What is a callback function? Provide an example.
  // Answer: A callback function is a function passed as an argument to another function and executed later. Example: setTimeout(() => console.log('Callback executed!'), 1000);
  
  // Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters.
  // The function should modify each element in the array using the provided function and return the modified array.
  function modifyArray(arr, modifierFunction) {
    return arr.map(modifierFunction);
  }
  
  // Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
  const numbers = [1, 2, 3, 4, 5];
  const modifiedArray = modifyArray(numbers, num => num + 1);
  console.log('Modified Array:', modifiedArray);
  
  // Todo 4.4 Import and call the 'add' method from mathUtils.js and display the value of the PI constant
  const { add, PI } = require('./path-to-mathUtils');
  console.log('Sum:', add(3, 4));
  console.log('PI:', PI);
  

  // Todo 4.5 Import and call the 'isPalindrome' method from isPalindrome.js
  const isPalindrome = require('./isPalindrome');
  console.log('Is "level" a palindrome?', isPalindrome('level'));
  
  // Checkpoint 4.3 What does the require function and module.exports variable do?
  // Should we use it over the import and export keywords? Why? Research your answer.
  // Answer: `require` is used in CommonJS (Node.js) for module imports, and `module.exports` is used to export functionality. Whether to use it over ES6 import/export depends on the context (Node.js or browser) and project requirements, but ES6 syntax is more modern and widely adopted.
  