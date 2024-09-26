/* 
  Homework 4 Question 5
*/
function getArrayProperties(myArray) {
  let count = 0;
  let firstElement = false;
  let lastElement = false;
  myArray.forEach(element => {
    count += 1;
    if (count === 1) {
      firstElement = element;
    }
    lastElement = element;
  });

  return {
    firstElement: firstElement,
    lastElement: lastElement,
    length: count
  }
}

let input = [
  [4, 8, 12, 5, 20],
  ["a", 2, "Hello", 6, [4, 5], "bye", {name: "Alice", score: 98}]
]

input.forEach(whatever => {
  console.log('Input: ' + JSON.stringify(whatever));
  console.log('Return:');
  console.log(JSON.stringify(getArrayProperties(whatever),null,"\r  "));
})
