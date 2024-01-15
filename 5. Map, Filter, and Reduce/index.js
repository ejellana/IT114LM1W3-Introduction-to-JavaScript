// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared Numbers:", squaredNumbers);

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum:", sum);

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const uppercasedWords = words.map(word => word.toUpperCase());
console.log("Uppercased Words:", uppercasedWords);

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
const longWords = words.filter(word => word.length > 4);
console.log("Words with More than Four Letters:", longWords);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
const concatenatedString = words.reduce((accumulator, currentValue) => accumulator + currentValue, "");
console.log("Concatenated String:", concatenatedString);

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 
// - `map`: Creates a new array by applying a function to each element in the original array.
// - `filter`: Creates a new array with elements that satisfy a specified condition.
// - `reduce`: Applies a function to each element of the array, resulting in a single accumulated value.
