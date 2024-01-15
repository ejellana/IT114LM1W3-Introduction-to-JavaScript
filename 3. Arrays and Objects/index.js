/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here

console.log(numbers[0])
console.log(numbers[4])
console.log(numbers[14])

// Todo 3.2 calculate the min, max, and the average of the numbers array
let min = Math.min(...numbers)
let max = Math.max(...numbers)
console.log(min)
console.log(max)

const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;
console.log(average)

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer:

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
let object = new Object();
object = {
    course: "IT114L",
    Name: "Emman",
    Units: "16",
    NumStuds: "35"
}
console.log(object)

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
object.professor = 'Job Lipat'
console.log(object.professor)

// Todo 3.5 Declare an array of objects with information about the courses you are taking this term
const courses = [
    { courseCode: 'IT114L', units: 3 },
    { courseCode: 'CS120', units: 4 },
    { courseCode: 'CS107', units: 3 }
  ];
  
  // Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
  const totalUnits = courses.reduce((sum, course) => sum + course.units, 0);
  console.log("Total units:", totalUnits);
  
  // Checkpoint 3.2 What would be the equivalent of objects in Python? How would you compare them?
  // Answer: In Python, the equivalent of objects is dictionaries, and they can be compared similarly based on their key-value pairs.
  
  // Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
  const num = [1, 2, 3, 4, 5];
  const newArray = [...num, 6];
  console.log("New array:", newArray);
  
  // Todo 3.7 Going back to your IT114L object, extract the course code and units using the destructuring assignment
  const { courseCode, units } = courses.find(course => course.courseCode === 'IT114L');
  console.log("Course Code:", courseCode, "Units:", units);
  