//Program 7- Create an array of length 5 and store below numbers 
     //  1,11,111,222,555 . Write a program to calculate the average of numbers.

let numbers = [ 1, 11, 111, 222, 555 ];
//let numbers = [ 1, 2, 3, 4, 5 ];
let total = 0;

for ( let i = 0; i < numbers.length; i++ ) {
  total += numbers[i];
}

let average = total / numbers.length ;
console.log("Average:"+average);