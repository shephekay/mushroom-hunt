///////////////////////
//Global Objects
//////////////////////

let $nameInput = $('input').val()
 
const gameBoardValues = ['poison'];

for (x = 0; x < 13; x++){
    gameBoardValues.push('mushroom')
}
for (x = 0; x < 21; x++){
    gameBoardValues.push('empty')
}



class Player {
    constructor(name, id){
        this.name = name,
        this.mushrooms = [],
        this.id = id
    }
    addMushroom (){
        this.mushrooms.push('mush')
        alert('Yay! You got a mushroom!') //placeholder
    }
    poisoned () {
        alert('Oh no! You found the poisonous mushroom! All of your mushrooms are gone')
        this.mushrooms = []
    }
    win () {
        alert(`Hooray! ${this.name} found 30 mushrooms! \n You win!`) //placeholder
    }
}
const player1 = new Player('Player 1', 'player1');
    // $nameInput = null;
const player2 = new Player('Player 2', 'player2');

//////////////////////////
//Functions
////////////////////////

//start game
const newGame = () => {
    player1.mushrooms = []
    player2.mushrooms = []
    newRound()
}

//shuffle grid
const shuffle = (array) => {
    for (let i = array.length -1; i > 0; i--) {
        let x = Math.floor(Math.random()*(i + 1));
        let tempIndex = array[i];
        array[i] = array[x];
        array[x] = tempIndex;
    }
}

//start new round
const newRound = () => {
    shuffle(gameBoardValues)
    console.log(gameBoardValues)
    for (value of gameBoardValues) {
        const $square = $('<div>').attr('id', value)
        $square.addClass('square')
        $square.addClass('unclicked')
        $square.appendTo($('.container-grid'))
    }
}



const playRound = () => {
    //player 1 starts
    let currentPlayer = player1
    //array of current pieces
    let $currentSquares = $('.square')
    // console.log($currentSquares)

    const togglePlayer = () => {
        if (currentPlayer === player1) {
            currentPlayer = player2
        } else {
        currentPlayer = player1
        }
        return currentPlayer
    }

    const checkWin = (currentPlayer) => {
        if (currentPlayer.mushrooms.length >= 15) {
            currentPlayer.win()
        } 
    }

    //player one clicks a square
    const playTurn = $('.square').one('click', (event) => {


            console.log(event.currentTarget);
            const $element = $(event.currentTarget);
            console.log($element)
            $element.toggleClass('unclicked');
            if ($element.is('#mushroom')) {
                currentPlayer.addMushroom()
            } else if ($element.is('#poison')) {
                currentPlayer.poisoned()
            }
            console.log(currentPlayer, player2)
            $('.'+currentPlayer.id).text(`Mushrooms: ${currentPlayer.mushrooms.length}`)
            
            checkWin(currentPlayer)
            togglePlayer()
            
        })





    //which calls a function that: 
    //square reveals picture that depends on class? or 

    //if that square contains a mushroom, add the mushroom to player 1's array

    //or, if it contains a poisonous mushroom, empty their array

    //check if player 1 has 30 mushrooms

    //if yes, they win game.

    //if no, switch player to player 2

    //restart this whole process again, until all the mushrooms on the board are gone

    //this will maybe need an array of the grid classes



}


newGame()
playRound()