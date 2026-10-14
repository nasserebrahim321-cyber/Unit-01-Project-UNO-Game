// constants
export const UnoCardCatalogue = [];

const colors = ['red', 'blue', 'green', 'yellow'];
const actionCards = ['Skip', 'Reverse', 'Draw Two'];
const wildCards = ['Wild', 'Wild Draw Four'];

// Generate numbered cards and colored action cards
colors.forEach(color => {

    // One zero card per color
    UnoCardCatalogue.push({
        id: UnoCardCatalogue.length + 1,
        Name: 0,
        color: color
    });

    // Two of each number from 1 to 9
    for (let number = 1; number <= 9; number++) {
        for (let copy = 0; copy < 2; copy++) {
            UnoCardCatalogue.push({
                id: UnoCardCatalogue.length + 1,
                Name: number,
                color: color
            });
        }
    }

    // Two of each action card per color


    actionCards.forEach(action => {
        for (let copy = 0; copy < 2; copy++) {
            UnoCardCatalogue.push({
                id: UnoCardCatalogue.length + 1,
                Name: action,
                color: color
            });
        }
    });
});

// Generate four Wild and four Wild Draw Four cards


wildCards.forEach(card => {
    for (let copy = 0; copy < 4; copy++) {
        UnoCardCatalogue.push({
            id: UnoCardCatalogue.length + 1,
            Name: card,
            color: 'black'
        });
    }
});