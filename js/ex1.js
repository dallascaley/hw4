/* 
  Homework 4 Question 1
*/
let operationString = prompt('Enter a mathmatical operation (+,-,*,/) with two numbers and one operator such as 1 + 1');

let segments = operationString.split(' ');

//get rid of any whitespaces
let thing1 = segments[0].trim();
let thing2 = segments[1].trim();
let thing3 = segments[2].trim();

//initialize all the variables to false
let number1 = false;
let number2 = false;
let operator = false;

// - Section 1: assign first thing

//If the first thing is a number assign it to the first number variable
if (!isNaN(thing1)) {
   number1 = Number.parseInt(thing1)
} else {
   //Otherwise assume it's an operator (not likely but possible)
   operator = thing1;
}

// - Section 2: assign second thing

//if the first number has been assigned
if (number1 != false) {
   //Then check if the second thing is a number
   if (!isNaN(thing2)) {
      //and assign it
      number2 = Number.parseInt(thing2);
   } else {
      //otherwise it must be an operator
      operator = thing2;
   }
} else {
   //Otherwise the second thing is the first number
   number1 = Number.parseInt(thing2);
}

// - Section 3: assign third thing

//if the third thing is a number, it must be the second number so assign it
if (!isNaN(thing3)) {
   number2 = Number.parseInt(thing3)
} else {
   //otherwise the third thing is the operator
   operator = thing3;
}

switch(operator) {
   case '+':
      console.log(`${number1} + ${number2} = ${(number1+number2)}`);
   break;
   case '-':
      console.log(`${number1} - ${number2} = ${(number1-number2)}`);
   break;
   case '*':
      console.log(`${number1} x ${number2} = ${(number1*number2)}`);
   break;
   case '/':
      console.log(`${number1} / ${number2} = ${(number1/number2)}`);
   break;
   default:
      console.log('Invalid input');
}
