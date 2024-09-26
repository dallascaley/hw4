/* 
  Homework 4 Question 4
*/

const values = [3, 11, 7, 2, 9, 10];
let sum = 0;
let min = false;
let max = false;

values.forEach((number) => {
  sum += number;
  if (min === false){
    min = number;
  } else if (number < min) {
    min = number;
  }
  if (max === false) {
    max = number;
  } else if (number > max) {
    max = number;
  }
});
console.log('Sum of all array values = ' + sum);
console.log('Minimum value = ' + min);
console.log('Maximum value = ' + max);