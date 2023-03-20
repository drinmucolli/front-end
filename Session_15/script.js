//Objects
const drinAarray = ["Drin", "Mucolli", "24", ["Drila", "Bledi", "Fisi", "Adni", "Blendi"]
];
console.log(drinAarray[0])

const drinObject = {
    firstName: "Drin",
    lastName: "Mucolli",
    age: 24,
    friends: ["Drila", "Bledi", "Fisi", "Adni", "Blendi", "Drini"] 
}

console.log(drinObject.firstName)
console.log(drinObject.lastName)
console.log(drinObject.friends[3])

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    nationality: 'american',
    visitedCountries: ['Spain', 'Germany', 'Italy'],
    job: 'programmer'
}

//John Doe a 27 year old programmer visited 3 countries

console.log(`${person.firstName} ${person.lastName} a ${person.age} year old ${person.job} who visited ${person.visitedCountries.length} countries.`);

console.log(drinObject.firstName);
console.log(drinObject.lastName);

const coffeeMachine = {
    brand: "Gaggia",
    model: "Classic pro",
    color: "silver",

    makeCoffee: function(coffeeSize){
        if(coffeeSize === 's'|| coffeeSize === 'S'){
            return "Short espresso";
        }else if(coffeeSize === 'm' || coffeeSize === 'M'){
            return "Medium espresso";
        }else if(coffeeSize === 'l' || coffeeSize === 'L'){
            return "Large espresso";

    } else if(coffeeSize === 'd' || coffeeSize === 'D'){
        return "Double espresso";

}else{
    return "Invalid input";
}
    },
    about:function(){ 
      return  `I am a ${this.color} colored ${this.model} ${this.brand}`;}
}

coffeeMachine.brand;
coffeeMachine.makeCoffee('m')
console.log(coffeeMachine.makeCoffee('m'))
console.log(coffeeMachine.about())