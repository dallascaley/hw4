/* 
  Homework 4 Question 3
*/

const r = Number(prompt("Enter the circle radius:"));

const circle = {
   radius: function() {
      return r;
   },
   circumference: function() {
      return 2 * Math.PI * r;
   },
   area: function() {
      return Math.PI * (r * r);
   }
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

