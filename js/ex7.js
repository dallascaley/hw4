/* 
  Homework 4 Question 7
*/
function getVowelCount(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (['a','e','i','o','u','y'].includes(word[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

function isPalindrome(inputWord) {
  let word = inputWord.toLowerCase();
  let otherIndex = word.length - 1;
  for(let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] === word[otherIndex]) {
      otherIndex -= 1;
    } else {
      return false;
    }
  }
  return true;
}

let word = prompt('What is the word?');

let vowels = getVowelCount(word);
if (isPalindrome(word)) {
  console.log(`${word} contains ${vowels} vowels and is a palindrome`);
} else {
  console.log(`${word} contains ${vowels} vowels and is not a palindrome`);
}