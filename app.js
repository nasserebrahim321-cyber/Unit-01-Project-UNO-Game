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
    { id: 24, name: 'Draw_Two', color: 'blue' },
    { id: 25, name: 'Draw_Two', color: 'blue' },

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
    { id: 49, name: 'Draw_Two', color: 'red' },
    { id: 50, name: 'Draw_Two', color: 'red' },

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
    { id: 74, name: 'Draw_Two', color: 'green' },
    { id: 75, name: 'Draw_Two', color: 'green' },

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
    { id: 99, name: 'Draw_Two', color: 'yellow' },
    { id: 100, name: 'Draw_Two', color: 'yellow' },

    // Wild cards
    { id: 101, name: 'Wild', color: 'black' },
    { id: 102, name: 'Wild', color: 'black' },
    { id: 103, name: 'Wild', color: 'black' },
    { id: 104, name: 'Wild', color: 'black' },
    { id: 105, name: 'Wild_Draw_Four', color: 'black' },
    { id: 106, name: 'Wild_Draw_Four', color: 'black' },
    { id: 107, name: 'Wild_Draw_Four', color: 'black' },
    { id: 108, name: 'Wild_Draw_Four', color: 'black' }
];

const cardPoolElement = document.querySelector('#card-pool');
const opponentHandElement = document.querySelector('#opponent-hand');
const playerHandElement = document.querySelector('#player-hand');
const deckElement = document.querySelector('#deck');
const chooseColorElement = document.querySelector('#choose-color');



//cached values

console.log(cardPoolElement);
console.log(opponentHandElement);
console.log(playerHandElement);
console.log(deckElement);
console.log(chooseColorElement);



// variables
let turn = true // this specify for whos turn
let winner = "GAME-ONGOING";
let playerHand = []
let opponentHand = []
let unoDeck = []
let cardPool = []
let player = turn // false for the opponent || true for the player
let selectedColor;
let selectedCard;


//functions
function init() {
    turn = true
    winner = false
    playerHand = []
    opponentHand = []
    cardPool = []
    player = turn
    selectedColor = ""
    shuffleDeck()
    startingHands()
    selectTheFirstCardForPool()

    render()
}

function initUI() {
    playerHandElement.replaceChildren();
    opponentHandElement.replaceChildren();
    cardPoolElement.replaceChildren();

}

function render() {
    initUI()

    playerHand.forEach((card) => {
        let newCard = document.createElement("div")
        newCard.textContent = `${card.name}`
        newCard.classList.add('player-card')
        newCard.classList.add(card.color)
        newCard.id = card.id
        playerHandElement.appendChild(newCard)
        console.log(newCard)
    })

    const playerCardsElement = document.querySelectorAll('.player-card');
    playerCardsElement.forEach((card) => {
        card.addEventListener('click', cardsHandler)
    })

    opponentHand.forEach((card) => {
        let newCard = document.createElement("div")
        newCard.textContent = `${card.name}`
        newCard.classList.add('opponent-card')
        newCard.classList.add(card.color)
        newCard.id = card.id
        opponentHandElement.appendChild(newCard)
        console.log(newCard)

    })

    const opponentCardsElement = document.querySelectorAll('.opponent-card');
    opponentCardsElement.forEach((card) => {
        card.addEventListener('click', cardsHandler)
    })

    // show the last card in the pool
    let cardForPool = document.createElement("div")
    cardForPool.textContent = cardPool[cardPool.length - 1].name;
    cardForPool.classList.add('card');
    cardForPool.classList.add(cardPool[cardPool.length - 1].color);
    cardPoolElement.appendChild(cardForPool);

    deckElement.textContent = "TOTAL CARDS IN DECK : " + unoDeck.length;



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

function drawCards(cardsNum, player) {

    let drawnCard = false;

    for (i = 0; i < cardsNum; i++) {
        if (player) {
            unoDeck.shift()
            playerHand.push(unoDeck.shift())
        }
        else if (!player) {
            opponentHand.push(unoDeck.shift())
        }
        else {
            return
        }
        drawnCard = true
    }
    return drawnCard;
}

function startingHands() {
    drawCards(7, player);
    drawCards(7, !player);
}

function selectTheFirstCardForPool() {
    let numberCards = unoDeck.filter((card) => {
        return Number(card.name)
    })

    cardPool.push(numberCards[Math.floor(Math.random() * numberCards.length)])
}

function switchTurn() {
    turn = !turn
    player = turn
}

function activateCardEffect(card) {
    let cardsToBeDrawn = 0
    if (card.name === "Draw_Two") {
        cardsToBeDrawn = 2

        drawCards(cardsToBeDrawn, !player)
    }
    else if (card.name === "Skip" || card.name === "Reverse") {
        switchTurn()
    }
    else if (card.name === "Wild") {
        let colorArray = ['red', 'blue', 'yellow', 'green']
        selectedColor = colorArray[Math.floor(Math.random() * colorArray.length)]
        console.log(`THE SELECTED COLOR : ${selectedColor}`)
        cardPool[cardPool.length - 1].color = selectedColor
    }
    else if (card.name === "Wild_Draw_Four") {
        cardsToBeDrawn = 4
        drawCards(cardsToBeDrawn, !player)
        let colorArray = ['red', 'blue', 'yellow', 'green']
        selectedColor = colorArray[Math.floor(Math.random() * colorArray.length)]
        console.log(`THE SELECTED COLOR : ${selectedColor}`)
        cardPool[cardPool.length - 1].color = selectedColor
    }
    else {
        console.log("ERROR: UNAVAILABLE CARD EFFECT")
    }

}

function playCard(card) {
    let success = false;

    if (card.color === cardPool[cardPool.length - 1].color ||
        card.name === cardPool[cardPool.length - 1].name ||
        card.name === 'Wild' ||
        card.name === 'Wild_Draw_Four') {
        cardPool.push(card)
        if (card.name === 'Draw_Two' ||
            card.name === 'Skip' ||
            card.name === 'Reverse' ||
            card.name === 'Wild' ||
            card.name === 'Wild_Draw_Four') {
            activateCardEffect(card)
        }
        success = true
    }

    // if (card.name === 'Wild' || card.name === 'Wild_Draw_Four') {
    //     cardPool.push(card)
    //     activateCardEffect(card)
    //     success = true
    // }
    return success;
}


function isThereACardPlayable(player) {
    let temp
    if (player) {
        temp = playerHand.filter((card) => {
            return cardPool[cardPool.length - 1].color === card.color || card.name === 'Wild' || card.name === 'Wild_Draw_Four';
        })

        if (temp.length === 0) {
            return false;
        }
        return true;
    }
    else {
        temp = opponentHand.filter((card) => {
            return cardPool[cardPool.length - 1].color === card.color || card.name === 'Wild' || card.name === 'Wild_Draw_Four';
        })
        if (temp.length === 0) {
            return false;
        }
        return true;
    }

}

// complete later
function counter() {
    let cardsToBeDrawn = 0;
    if (canBeCountered(!player)) {

    }
}

//complete later
function canBeCountered(player) {

    let canBeCountered = true;
    if (cardPool[cardPool.length - 1].name === "Draw_Two") {
        if (player) {

            let temp = playerHand.filter((card) => {
                return card.name === "Draw_Two" || card.name === "Wild_Draw_Four"
            })

            if (temp.length === 0) {
                canBeCountered = false
            }
            return canBeCountered
        }
        else {
            let temp = opponentHand.filter((card) => {
                return card.name === "Draw_Two" || card.name === "Wild_Draw_Four"
            })

            if (temp.length === 0) {
                canBeCountered = false
            }
            return canBeCountered
        }
    }
    else if (cardPool[cardPool.length - 1].name === "Wild_Draw_Four") {

        if (player) {

            let temp = playerHand.filter((card) => {
                return card.name === "Draw_Two" || card.name === "Wild_Draw_Four"
            })

            if (temp.length === 0) {
                canBeCountered = false
            }
            return canBeCountered
        }
        else {
            let temp = opponentHand.filter((card) => {
                return card.name === "Draw_Two" || card.name === "Wild_Draw_Four"
            })

            if (temp.length === 0) {
                canBeCountered = false
            }
            return canBeCountered
        }
    }

}

function checkForWinner() {
    if (playerHand.length === 0) {
        winner = "WIN"
    }
    else if (opponentHand.length === 0) {
        winner = "LOSE"
    }
}

function cardsHandler(e) {
    try {
        let selectedCard;

        if (player) {
            selectedCard = playerHand.find((card) => {
                return card.id === Number(e.target.id)
            })
            console.log(selectedCard)

            //correct
            if (playCard(selectedCard)) {
                console.log(`the card has been successfully placed in the cards pool : CARD `, selectedCard)
                console.log(`the `, selectedCard, ` index : `, playerHand.indexOf(selectedCard))
                console.log(`the removed object : `, playerHand.splice(playerHand.indexOf(selectedCard), 1))
                switchTurn();
            }
            else {
                console.log(`ERROR: THE CARD CANT BE PLAYED : CARD `, selectedCard)
            }
        }
        else {
            selectedCard = opponentHand.find((card) => {
                return card.id === Number(e.target.id)
            })

            console.log(selectedCard)

            if (playCard(selectedCard)) {
                console.log(`the card has been successfully placed in the cards pool : CARD ${selectedCard}`)
                console.log(`the ${selectedCard} index : ${opponentHand.indexOf(selectedCard)}`)
                console.log(`the removed object : ${opponentHand.splice(playerHand.indexOf(selectedCard), 1)}`)
                switchTurn();
            }
            else {
                console.log(`ERROR: THE CARD CANT BE PLAYED : CARD `, selectedCard)
            }
        }
        checkForWinner()
        if (winner === "WIN") {
            console.log("THE PLAYER HAVE WON")
        }
        else if (winner === "LOSE") {
            console.log("THE OPPONENT HAVE WON")
        }
        render();

    }
    catch (error) {

        console.log("YOU CANNOT PICK A CARD IN THE OPPONENT HAND")
    }
}


// Event Listeners
deckElement.addEventListener('click', () => {

    if (!isThereACardPlayable(player)) {
        if ((drawCards(1, player))) {
            switchTurn();
        }
    }
    render()


});




//test calling & Console Logs

init();




