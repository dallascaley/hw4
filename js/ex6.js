/* 
  Homework 4 Question 6
*/
let stopReceived = false;
let inputValues = [];
let allValues = '';

while(!stopReceived) {
  let thisInput = prompt('Enter words, type stop to end');
  let inputWords = thisInput.split(' ');

  inputWords.forEach(word => {
    let wordsAgain = word.split(',');
    
    wordsAgain.forEach(wordAgain => {

      if (wordAgain.length > 0) {
        if (stopReceived || 'stop' === wordAgain.toLowerCase()) {
          stopReceived = true;
          allValues += ', ' + wordAgain;
        } else{
          inputValues.push(wordAgain);
          if (allValues === '') {
            allValues = wordAgain;
          } else{
            allValues += ', ' + wordAgain;
          }
        }
      }
    })
  });
}

if (inputValues.length === 0) {
  console.log('Input: Stop');
  console.log('Output: No words to display, Stop was the first word entered');
} else {
  console.log('Input: ' + allValues);
  console.log('You entered the following words:');
  inputValues.forEach(value => {
    console.log(value);
  })
}