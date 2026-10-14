// constants

const UnoCardCatalogue = [
    // Blue
    { id: 1, name: 0, color: 'blue' },
    { id: 2, name: 1, color: 'blue' },
    { id: 3, name: 1, color: 'blue' },
    { id: 4, name: 2, color: 'blue' },
    { id: 5, name: 2, color: 'blue' },
    { id: 6, name: 3, color: 'blue' },
    { id: 7, name: 3, color: 'blue' },
    { id: 8, name: 4, color: 'blue' },
    { id: 9, name: 4, color: 'blue' },
    { id: 10, name: 5, color: 'blue' },
    { id: 11, name: 5, color: 'blue' },
    { id: 12, name: 6, color: 'blue' },
    { id: 13, name: 6, color: 'blue' },
    { id: 14, name: 7, color: 'blue' },
    { id: 15, name: 7, color: 'blue' },
    { id: 16, name: 8, color: 'blue' },
    { id: 17, name: 8, color: 'blue' },
    { id: 18, name: 9, color: 'blue' },
    { id: 19, name: 9, color: 'blue' },
    { id: 20, name: 'Skip', color: 'blue' },
    { id: 21, name: 'Skip', color: 'blue' },
    { id: 22, name: 'Reverse', color: 'blue' },
    { id: 23, name: 'Reverse', color: 'blue' },
    { id: 24, name: 'Draw Two', color: 'blue' },
    { id: 25, name: 'Draw Two', color: 'blue' },

    // Red
    { id: 26, name: 0, color: 'red' },
    { id: 27, name: 1, color: 'red' },
    { id: 28, name: 1, color: 'red' },
    { id: 29, name: 2, color: 'red' },
    { id: 30, name: 2, color: 'red' },
    { id: 31, name: 3, color: 'red' },
    { id: 32, name: 3, color: 'red' },
    { id: 33, name: 4, color: 'red' },
    { id: 34, name: 4, color: 'red' },
    { id: 35, name: 5, color: 'red' },
    { id: 36, name: 5, color: 'red' },
    { id: 37, name: 6, color: 'red' },
    { id: 38, name: 6, color: 'red' },
    { id: 39, name: 7, color: 'red' },
    { id: 40, name: 7, color: 'red' },
    { id: 41, name: 8, color: 'red' },
    { id: 42, name: 8, color: 'red' },
    { id: 43, name: 9, color: 'red' },
    { id: 44, name: 9, color: 'red' },
    { id: 45, name: 'Skip', color: 'red' },
    { id: 46, name: 'Skip', color: 'red' },
    { id: 47, name: 'Reverse', color: 'red' },
    { id: 48, name: 'Reverse', color: 'red' },
    { id: 49, name: 'Draw Two', color: 'red' },
    { id: 50, name: 'Draw Two', color: 'red' },

    // Green
    { id: 51, name: 0, color: 'green' },
    { id: 52, name: 1, color: 'green' },
    { id: 53, name: 1, color: 'green' },
    { id: 54, name: 2, color: 'green' },
    { id: 55, name: 2, color: 'green' },
    { id: 56, name: 3, color: 'green' },
    { id: 57, name: 3, color: 'green' },
    { id: 58, name: 4, color: 'green' },
    { id: 59, name: 4, color: 'green' },
    { id: 60, name: 5, color: 'green' },
    { id: 61, name: 5, color: 'green' },
    { id: 62, name: 6, color: 'green' },
    { id: 63, name: 6, color: 'green' },
    { id: 64, name: 7, color: 'green' },
    { id: 65, name: 7, color: 'green' },
    { id: 66, name: 8, color: 'green' },
    { id: 67, name: 8, color: 'green' },
    { id: 68, name: 9, color: 'green' },
    { id: 69, name: 9, color: 'green' },
    { id: 70, name: 'Skip', color: 'green' },
    { id: 71, name: 'Skip', color: 'green' },
    { id: 72, name: 'Reverse', color: 'green' },
    { id: 73, name: 'Reverse', color: 'green' },
    { id: 74, name: 'Draw Two', color: 'green' },
    { id: 75, name: 'Draw Two', color: 'green' },

    // Yellow
    { id: 76, name: 0, color: 'yellow' },
    { id: 77, name: 1, color: 'yellow' },
    { id: 78, name: 1, color: 'yellow' },
    { id: 79, name: 2, color: 'yellow' },
    { id: 80, name: 2, color: 'yellow' },
    { id: 81, name: 3, color: 'yellow' },
    { id: 82, name: 3, color: 'yellow' },
    { id: 83, name: 4, color: 'yellow' },
    { id: 84, name: 4, color: 'yellow' },
    { id: 85, name: 5, color: 'yellow' },
    { id: 86, name: 5, color: 'yellow' },
    { id: 87, name: 6, color: 'yellow' },
    { id: 88, name: 6, color: 'yellow' },
    { id: 89, name: 7, color: 'yellow' },
    { id: 90, name: 7, color: 'yellow' },
    { id: 91, name: 8, color: 'yellow' },
    { id: 92, name: 8, color: 'yellow' },
    { id: 93, name: 9, color: 'yellow' },
    { id: 94, name: 9, color: 'yellow' },
    { id: 95, name: 'Skip', color: 'yellow' },
    { id: 96, name: 'Skip', color: 'yellow' },
    { id: 97, name: 'Reverse', color: 'yellow' },
    { id: 98, name: 'Reverse', color: 'yellow' },
    { id: 99, name: 'Draw Two', color: 'yellow' },
    { id: 100, name: 'Draw Two', color: 'yellow' },

    // Wild cards
    { id: 101, name: 'Wild', color: 'black' },
    { id: 102, name: 'Wild', color: 'black' },
    { id: 103, name: 'Wild', color: 'black' },
    { id: 104, name: 'Wild', color: 'black' },
    { id: 105, name: 'Wild Draw Four', color: 'black' },
    { id: 106, name: 'Wild Draw Four', color: 'black' },
    { id: 107, name: 'Wild Draw Four', color: 'black' },
    { id: 108, name: 'Wild Draw Four', color: 'black' }
];

//cached values




// variables
let turn = true // this specify for whos turn
let winner = false
let playerHand = []
let opponentHand = []
let unoDeck = []
let player = turn // false for the opponent || true for the player

//functions
function init() {
    turn = true
    winner = false
    playerHand = []
    opponentHand = []
    player = turn
    shuffleDeck()
    startingHands()
}

function shuffleDeck() {
    //Fisher-Yates shuffle
    unoDeck = UnoCardCatalogue.map((card) => {
        return { id: card.id, name: card.name, color: card.color }
    })

    for (let i = unoDeck.length - 1; i > 0; i--) {
        // pick a random number index from 0 t0 i
        let randomIndex = Math.floor(Math.random() * (i + 1));

        //swap the two cards
        [unoDeck[i], unoDeck[randomIndex]] = [unoDeck[randomIndex], unoDeck[i]]
    }
}


function cardsHandler(e) {

}
// Event Listeners





//test calling & Console Logs

shuffleDeck();

//drawCards(5, true);
//drawCards(2, false);




console.log(UnoCardCatalogue);
console.log(`Total cards: ${UnoCardCatalogue.length}`);
console.log("-----------------------------------------")

console.log(unoDeck);
console.log(`TOTAL CARDS: ${unoDeck.length}`);
console.log("-----------------------------------------")

startingHands();
console.log('PLAYER HANDS : ', playerHand);
console.log('REMAINING CARDS IN DECK : ', unoDeck.length);
console.log('OPPONENTS HANDS : ', opponentHand);
console.log('REMAINING CARDS IN DECK : ', unoDeck.length);
console.log("-----------------------------------------")

switchTurn()
console.log('first turn switch ', turn);

switchTurn()
console.log('second turn switch ', turn);
console.log("-----------------------------------------")



