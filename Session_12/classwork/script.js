/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).Store Mark's and John's mass and height in variablesCalculate both their BMIs using the formula (you can even implement both versions)Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀

*/
// Variables of BMI Test 1
let marksWeight = 78;
let marksHeight = 1.69;

let johnsWeight = 92;
let johnsHeight = 1.95;

let marksBMI = marksWeight / marksHeight ** 2;
let johnsBMI = johnsWeight / johnsHeight ** 2;

console.log(marksBMI, johnsBMI);

let markHigherBMI = marksBMI > johnsBMI;
console.log(markHigherBMI);

// Variables of BMI Test 2
let marksWeight2 = 95;
let marksHeight2 = 1.88;

let johnsWeight2 = 85;
let johnsHeight2 = 1.76;

let marksBMI2 = marksWeight2 / marksHeight2 ** 2;
let johnsBMI2 = johnsWeight2 / johnsHeight2 ** 2;

console.log(marksBMI, johnsBMI);

let markHigherBMI2 = marksBMI2 > johnsBMI2;
console.log(markHigherBMI2);