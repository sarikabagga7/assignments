// Program 1- Write a program to calculate the average of 5 numbers.

let numbers = [5,10,20,30,40]

let sum = 0;
for( var i = 0; i < numbers.length; i++ ){
    sum += numbers[i]; 
}

var avg = sum/numbers.length;

console.log("Sum: " + sum + " Average: " + avg );

