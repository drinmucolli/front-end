const calcAverage = (score1,score2,score3) => (score1 + score2 + score3)/3 

const koalasAverage = calcAverage(65,54,49)
const dolphinsAverage = calcAverage(44,23,71)

let checkWinner = function(koalasAverage, dolphinsAverage){
    if(dolphinsAverage > 2 * koalasAverage){
        return `dolphins are the winner with score${dolphinsAverage}`
    } else if(dolphinsAverage < 2 * koalasAverage){
        return `koalas are the winner with score${koalasAverage}`
    } else{
        return `nobody won`
    }
}
console.log(checkWinner(koalasAverage, dolphinsAverage))