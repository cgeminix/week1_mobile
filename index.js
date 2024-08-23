//JavaScript Fundamentals – Part 1
//Coding Challenge 1
//Mark and John are trying to compare their BMI (Body Mass Index), which is
//calculated using the formula:
//BMI = mass / height ** 2 = mass / (height * height) (mass in kg
//and height in meter).
//Data 1:-
/*console.log("Coding Challenge 1- Data 1");
let heightMark = 1.69;
let weightMark = 78;
let BMIMark = weightMark / (heightMark ** 2);

let heightJohn = 1.95;
let weightJohn = 92;
let BMIJohn = weightJohn / (heightJohn ** 2);

markHigherBMI = BMIMark > BMIJohn;
console.log("BMI Mark: " + BMIMark);
console.log("BMI John: " + BMIJohn);
console.log("Mark has a higher BMI than John: " + markHigherBMI);*/

//Coding Challenge 2
//Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
/*console.log("Coding Challenge 2");
let heightMark = 1.69;
let weightMark = 78;
let BMIMark = weightMark / (heightMark ** 2);

let heightJohn = 1.95;
let weightJohn = 92;
let BMIJohn = weightJohn / (heightJohn ** 2);

markHigherBMI = BMIMark > BMIJohn;
console.log("BMI Mark: " + BMIMark);
console.log("BMI John: " + BMIJohn);
if (BMIMark > BMIJohn)
    console.log("Marks BMI" + "(" + (BMIMark) + ")" + "is higher than John's" + "(" + "(" + (BMIJohn) + ")" + ")!")
else
    console.log("John's BMI" + "(" + (BMIJohn) + ")" + "is higher than Mark's" + "(" + (BMIMark) + ")" + "!")*/

//Coding Challenge 3
//There are two gymnastics teams, Dolphins and Koalas. They compete against each
//other 3 times. The winner with the highest average score wins a trophy!
//Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
console.log("Coding Challenge 3 - Data 1")

function calculateScore(score1, score2, score3) {
    let averageScore = (score1 + score2 + score3) / 3
    return averageScore
}
let dolphinAverage = Math.round(calculateScore(96, 108, 89))
let koalaAverage = Math.round(calculateScore(109, 900, 106))
console.log(dolphinAverage, koalaAverage)
if (dolphinAverage > koalaAverage && dolphinAverage >= 100) {
    console.log(`Dolphin's won! They have ${dolphinAverage} and koala's only have ${koalaAverage}`);
} else if (dolphinAverage < koalaAverage && koalaAverage >= 100) {
    console.log(`Koala's won! They have ${koalaAverage} and Dolphin's only have ${dolphinAverage}`);
} else if (dolphinAverage === koalaAverage && dolphinAverage >= 100 && koalaAverage >= 100) {
    console.log(`They draw!`);
} else {
    console.log(`No one win!`);
}
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
console.log("Coding Challenge 3 - Data 2")
dolphinAverage = Math.round(calculateScore(97, 112, 101))
koalaAverage = Math.round(calculateScore(109, 95, 106))
console.log(dolphinAverage, koalaAverage)
if (dolphinAverage > koalaAverage && dolphinAverage >= 100) {
    console.log(`Dolphin's won! They have ${dolphinAverage} and koala's only have ${koalaAverage}`);
} else if (dolphinAverage < koalaAverage && koalaAverage >= 100) {
    console.log(`Koala's won! They have ${koalaAverage} and Dolphin's only have ${dolphinAverage}`);
} else if (dolphinAverage === koalaAverage && dolphinAverage >= 100 && koalaAverage >= 100) {
    console.log(`They draw!`);
} else {
    console.log(`No one win!`);
}