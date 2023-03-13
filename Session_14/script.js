const day = "Thursday";

switch (day) {
    case "Monday":
        console.log(`Today is ${day}`);
        break;
    case "Tuesday":
        console.log(`Today is ${day}`);
        break;
    case "Wednesday":
        console.log(`Today is ${day}`);
        break;
    case "Thursday":
        console.log(`Today is ${day}`);
        break;
    case "Friday":
        console.log(`Today is ${day}`);
        break;
    case "Saturday":
        console.log(`Today is ${day}`);
        break;
    case "Sunday":
        console.log(`Today is ${day}`);
        break;
    default:
        console.log("Invalid day");
        break;
}

let expression = 5 + 5
console.log(expression);

// Ternary operator
const age = 21;
let ifElseExpression = age >= 18 ? "Wine🍷" :
    'Water💧'
console.log(`You can drink ${ifElseExpression}`);

const randomString = `Hello I am ${age} year old and I can drink ${age >= 18 ? 'Wine🍷' :
    'Water💧'
    }`
console.log(randomString);

// Functions
// DRY
// Don't Repeat Yourself

function logger(word) {
    console.log(word);
}

logger("Drin")
logger("adr")

function nutribullet(apples, oranges) {
    console.log(`Juice with ${apples} apples and ${oranges} oranges`)
}

nutribullet(2, 3)


function addnumbers(x, y) {
    return x + y

}
console.log(addnumbers(5, 4))


function calcAge(currentYear, birthYear) {
    return currentYear - birthYear
}

const drinsAge = calcAge(2023, 1998);

console.log(`Drin is ${drinsAge} year old`)

//console.log() -funksion
//String() - funksion
//Boolean() - funksion

function yearsUntilRetirement(birthYear) {
    const age = calcAge(2023, birthYear);
    if (age <= 65) {
        return `You will retire in ${65 - age} years`
    }
    else {
        return "You are already retired sir!"
    }
}

console.log(yearsUntilRetirement(1943))
