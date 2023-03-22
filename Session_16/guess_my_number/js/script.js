let secretNumber = Math.trunc(Math.random() * 20) + 1;

const correctNumber = document.querySelector(".number");
const userScore = document.querySelector(".score");
const highScore = document.querySelector(".h-score");
const check = document.querySelector(".check");
const again = document.querySelector(".again");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const wrapper = document.querySelector(".wrapper");

let score = 20;
userScore.textContent = score;


check.addEventListener("click", function () {
    const inputValue = Number(guess.value);
    
if(inputValue > secretNumber){
message.textContent = "☝ Too high";
score--
userScore.textContent = score;
}else if (!inputValue){
message.textContent = "⛔ No number";
}else if (inputValue < secretNumber){
    message.textContent = "👇 Too low";
    score--
userScore.textContent = score;
}else if(inputValue === secretNumber){
    message.textContent = "👏Correct number";
    wrapper.style.backgroundColor = "green";
    correctNumber.style.width = "25rem";
    check.style.display = "none";
    again.style.display = "block";
    correctNumber.textContent = secretNumber;

    if(score > highScore.textContent){
        highScore.textContent = score;
    }
    
    }
    if(score ===0){
        wrapper.style.backgroundColor = "red";
        check.style.display = "none";
        again.style.display = "block";
        message.textContent = "You lost";
        correctNumber.textContent = secretNumber;
}    


})

again.addEventListener("click", function(){
    message.textContent = "Guess here ↙";
    correctNumber.textContent = "?"
    guess.value = ""
    check.style.display = "none";
    again.style.display = "block";
    score = 20
    wrapper.style.backgroundColor = "rgba(85, 85, 85, 0.5)"
    userScore.textContent = score
    correctNumber.style.width = "15rem"


})
