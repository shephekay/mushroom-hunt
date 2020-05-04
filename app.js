console.log('js file connected')
///////////////////////
//Global Objects
//////////////////////

let $nameInput = $('input').val()
 
const gameBoardValues = ['poison'];

for (x = 0; x < 11; x++){
    gameBoardValues.push('mushroom')
}
for (x = 0; x < 23; x++){
    gameBoardValues.push('empty')
}
// console.log(gameBoardValues)



class Player {
    constructor(name){
        this.name = name
        this.mushrooms = []
    }
    playTurn(){
        $('.square').on('click', (event) => {
            console.log(event.currentTarget);
            const $element = $(event.currentTarget);
            console.log($element);
            $element.toggleClass('unclicked');
            // return $element
            if ($element.is('#mushroom')) {
                this.addMushroom()
            } else if ($element.is('#poison')) {
                this.poisoned()
            } console.log(this, this.mushrooms)
            console.log(player2)
            // $element.unbind('click')
            // $element.removeAttr('id')
            
        })}
    addMushroom (){
        this.mushrooms.push('mush')
    }
    poisoned () {
        this.mushrooms = []
    }
    win () {
    }
}
const player1 = new Player('Player 1');
    // $nameInput = null;
const player2 = new Player('Player 2');

//not sure about this yet. maybe have an array instead
// class gameBoard {
//     constructor (){
//         this.mushrooms = 10
//         this.deathCaps = 1
//         this.empty = 19
//     }
//     generateBoard
// }

//////////////////////////
//Functions
////////////////////////

//shuffle array- fisher-yates algorithm?

const shuffle = (array) => {
    for (let i = array.length -1; i > 0; i--) {
        let x = Math.floor(Math.random()*(i +1));
        let tempIndex = array[i];
        array[i] = array[x];
        array[x] = tempIndex;
    }
}

//start game
const newGame = () => {
    ///create 2 Players
    // const player1 = new Player('Player 1');
    // // $nameInput = null;
    // const player2 = new Player('Player 2');
    //append their names

    //trigger createRound
    return player1, player2,
    createRound()
}



//start new round
const createRound = () => {
    //generate a new grid with 10 mushrooms, 1 poisonous one, 19 empty squares. 
    
    shuffle(gameBoardValues)
    console.log(gameBoardValues)
    for (value of gameBoardValues) {
        const $square = $('<div>').attr('id', value)
        $square.addClass('square')
        $square.addClass('unclicked')
        $square.appendTo($('.container-grid'))
    }

}



// const $playTurn = $('.square').on('click', (event, currentPlayer) => {
//     console.log(event.currentTarget);
//     const $element = $(event.currentTarget);
//     console.log($element)
//     $element.toggleClass('unclicked');
//     if ($element.attr('id', 'mushroom')) {
//         currentPlayer.addMushroom()
//     } else if ($element.attr('id', 'poison')) {
//         currentPlayer.poisoned()
//     }
//     return $element

//     // $element.removeAttr('id')
// })

//play round. should be loop?
// const $playTurn = (currentPlayer) => {
//     $('.square').on('click', (event) => {
//         console.log(event.currentTarget);
//         const $element = $(event.currentTarget);
//         console.log($element);
//         $element.toggleClass('unclicked');
//         // return $element
//         if ($element.is('#mushroom')) {
//             currentPlayer.addMushroom()
//         } else if ($element.is('#poison')) {
//             currentPlayer.poisoned()
//         } console.log(currentPlayer, currentPlayer.mushrooms)
//         // $element.removeAttr('id')
//     })

//     // when player clicks on square, reveal whether currentTarget has class of mushroom. 

//     // if it does

// }

//check win. if either player has 30 mushrooms, they win. check after each play.
const checkWin = (currentPlayer) => {
    if (currentPlayer.mushrooms.length >= 30) {
        currentPlayer.win()
    } else {

    }
}

//check for poisonous mushroom. check after each play.
const checkPoisoned = (currentPlayer) => {
    //if the player has a poisonous mushroom, trigger their poisoned method
}

/////////////////////
//Event Handlers
////////////////////

//for example:
const handler = {
    click: () => console.log('hello')
}

/////////////////////////
//App Logic
//////////////////////////

///is this where all the jquery stuff goes? i think so.

newGame()
// console.log(player1, player2)
player1.playTurn()
// player2.playTurn()
// $playTurn()
// console.log(player1,player2)

player2.playTurn()


// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

// https://api.jquery.com/removeAttr/

// https://stackoverflow.com/questions/17277821/jquery-if-element-has-an-id/17277848