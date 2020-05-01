console.log('js file connected')
///////////////////////
//Global Objects
//////////////////////

let $nameInput = $('input').val()
 
const gameBoardValues = ['poison'];

for (x = 0; x < 10; x++){
    gameBoardValues.push('mushroom')
}
for (x = 0; x < 19; x++){
    gameBoardValues.push('empty')
}
console.log(gameBoardValues)



class Player {
    constructor(name){
        this.name = name
        this.mushrooms = []
        this.poisoned = false
    }
    addMushroom (){
        this.mushrooms.push('mush')
    }
    poisoned () {
        //empty array of mushrooms.
    }
}

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

}

//start game
const newGame = () => {
    ///create 2 Players
    const player1 = new Player($nameInput);
    $nameInput = null;
    const player2 = new Player($nameInput);
    //append their names

    //trigger createRound
    
}

//start new round
const createRound = () => {
    //generate a new grid with 10 mushrooms, 1 poisonous one, 19 empty squares. 
    

    console.log(gameBoardValues)
    for (value of gameBoardValues) {
        $square = $('<div>').attr('id', value)
        $square.addClass('square')
        $square.appendTo($('.container-grid'))
    }

}
createRound()

//play round. should be loop?
const play = () => {
    player1
    //when player clicks on square, reveal whether currentTarget has class of mushroom. 

    //if it does

}

//check win. if either player has 30 mushrooms, they win. check after each play.
const checkWin = () => {

}

//check for poisonous mushroom. check after each play.
const checkPoisoned = () => {
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



