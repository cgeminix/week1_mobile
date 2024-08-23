//JavaScript Fundamentals – Part 1
//Coding Challenge 1
//Mark and John are trying to compare their BMI (Body Mass Index), which is
//calculated using the formula:
//BMI = mass / height ** 2 = mass / (height * height) (mass in kg
//and height in meter).
//Data 1:-
console.log("Coding Challenge 1- Data 1");
let heightMark = 1.69;
let weightMark = 78;
let BMIMark = weightMark / (heightMark ** 2);

let heightJohn = 1.95;
let weightJohn = 92;
let BMIJohn = weightJohn / (heightJohn ** 2);

markHigherBMI = BMIMark > BMIJohn;
console.log("BMI Mark: " + BMIMark);
console.log("BMI John: " + BMIJohn);
console.log("Mark has a higher BMI than John: " + markHigherBMI);