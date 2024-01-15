// Todo 4.6a Create a function called isPalindrome function which checks if the given word is a palindrome
// What is a Palindrome? See here: https://en.wikipedia.org/wiki/Palindrome. Feel free to search for the implementation
function isPalindrome(word) {
    // Remove non-alphanumeric characters and convert to lowercase for a case-insensitive check
    const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare the cleaned word with its reverse
    return cleanWord === cleanWord.split('').reverse().join('');
  }
  
  // Todo 4.6b Set the isPalindrome function as the default export of the module
  module.exports = isPalindrome;
  