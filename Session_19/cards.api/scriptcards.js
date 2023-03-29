const draw = document.querySelector("button");
const player1 = document.getElementById("player-1")
const player2 = document.getElementById("player-2")
const message = document.querySelector("h1")

let deckId;

fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        deckId = data.deck_id;
    })
    .catch(error => {
        console.log(error);
    })

draw.addEventListener("click", () => {

    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const player1Val = valueConverter(data.cards[0].value)
            const player2Val = valueConverter(data.cards[1].value)

            player1.src = data.cards[0].image
            player2.src = data.cards[1].image

            if (player1Val > player2Val) {
                message.textContent = "Player 1 wins";
            } else if (player1Val < player2Val) {
                message.textContent = "Player 2 wins";
            } else {
                message.textContent = "There is a tie";
            }
        })
        .catch(error => {
            console.log(error);
        })

})
function valueConverter(value) {
    switch (value) {
        case "ACE":
            return 14;
            break;
        case "KING":
            return 13;
            break;
        case "QUEEN":
            return 12;
            break;
        case "JACK":
            return 11;
            break;
        default:
            return Number(value);
            break;

    }
}