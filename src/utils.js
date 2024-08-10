// Your code here
function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error('Input should be a string.');
    }
    
    if (!/^[A-Za-z]*$/.test(word)) { 
      throw new Error('Input should only contain alphabetic characters.');
    }
  
    const cleanedWord = word.toLowerCase();
    const reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
  }
  
  module.exports = { isPalindrome };
  