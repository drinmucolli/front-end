const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    BMI: null,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.mass / this.height ** 2;
    }
}

const john = {
    fullName: "Mark Miller",
    mass: 92,
    height: 1.95,
    BMI: null,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.mass / this.height ** 2;
    }
}

john.calcBMI();
mark.calcBMI();

console.log(john.BMI);
console.log(mark.BMI);

if (john.BMI > mark.BMI) {
    console.log(`Mark's BMI ${mark.BMI}is higher than John's ${john.BMI} BMI`);
} else if (mark.BMI > john.BMI) {
    console.log("Mark's BMI is greater than John's BMI")

} else {
    console.log("Invalid input")
}


//Loops

for (let i = 1; i <= 3; i++) {
    console.log(`Doing benchpress, set ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`Doing benchpress, repetition ${j}`);
    }
}

for (let i = 0; i <= 10; i++) {
    if (i === 5) continue;
    console.log(i);
}

// classwork with (for loops)

for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) continue;
    console.log(i)
}

//While
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

//Do while

do{
    console.log(i);
    i++;
}while(i<=10)