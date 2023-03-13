let bill = 430;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill},The tip was ${tip},and The total value ${bill + tip}`)

