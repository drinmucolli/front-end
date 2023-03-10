/*if(kushti){
    // kodi qe do te ekzekutohet 
}
*/
const isThirsty = true;

if(isThirsty){
    console.log("Drink some water💧");
}   else{
        console.log("Stay hydrated then!");
    }

const day = "Saturday"

if(day === "Monday"){
    console.log("Today is Monday");
} else if ( day === "Tuesday"){
    console.log("Today is Tuesday");
} else if ( day === "Wednesday"){
    console.log("Today is Wednesday");
} else if ( day === "Thursday"){
    console.log("Today is Thursday");
} else if ( day === "Friday"){
    console.log("Today is Friday");
} else if ( day === "Saturday" || day === "Sunday"){
    console.log("Today is weekend");
} else {
    console.log("Invalid day");
}

// String concatination

let sentence1 = "Today is such a ";
let sentence2 = "beautiful day";
console.log(sentence1 + sentence2)
const firstName = "Drin ";
const lastName = "Mucolli";
const age = 24 ;
const job = " Sales Agent";
console.log("Hello my name is " + firstName + lastName + " and I am a " + age + " year old" + job);

// Template literals
console.log(`Hello my name is ${firstName} ${lastName}and I am a ${age} year old ${job}. My birthyear is ${2023 - age}`);
console.log(`Drin
Mucolli
rbko
sales agent
`)
// Camel case kur shkronja e pare osht e vogel e dyta e madhe for example "firstName"
// Type coercion and type conversion
const random = "5";
const randomNumber = Number(random)
console.log(typeof(random));

const x = 10;
const y = "10";
const z = x - y;
console.log(z, typeof(z))

// Truthy and falsy values
// Falsy values are:
// 0 
// "" - empty number
// Null
// Undefined
// False

const money = 0;
if(money){
    console.log("Go on vacation 🚢✈🌴");
} else{
    console.log("Go get a job");
}