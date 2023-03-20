console.log(square(10));

function square(a) {
    return a * a;
}

const square2 = function (a) {
    return a * a;
}
console.log(square2(10));

// Arrays
const friend1 = "Driloni";
const friend2 = "Bledi";
const friend3 = "Fisi";
const friend4 = "Blendi";
const friend5 = "Adriani";
const friend6 = "Drini";

const friends = ["Drini", "Adriani", "Blendi", "Fisi", "Bledi", "Driloni"];

console.log(friends[5])
//We can store different data types inside an array
const randomArr = [2, "karakter", true, null, friends];
console.log(randomArr[4][1]);
// Add an element to the end of the array
friends.push("Adni");
// Add an element to the start of the array
friends.unshift("Bardhyli");

// Removes the last element of the array
friends.pop();
// Removes the first element of the array
friends.shift();

console.log(friends);

console.log(friends.length)
// Return the last element of the array
 console.log(friends[friends.length - 1])
//(indexOf) u can find what index has X array(element)
console.log(friends.indexOf("Fisi"));
// Includes tells you if an element is part of the array
console.log(friends.includes("Arditi"));
