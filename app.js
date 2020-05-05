// console.log('js file connected')
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



class Player {
    constructor(name){
        this.name = name
        this.mushrooms = []
    }
    addMushroom (){
        this.mushrooms.push('mush')
        alert('Yay! You got a mushroom!') //placeholder
    }
    poisoned () {
        this.mushrooms = []
    }
    win () {
        alert(`Hooray! ${this.name} found 30 mushrooms! \n You win!`) //placeholder
    }
}
const player1 = new Player('Player 1');
    // $nameInput = null;
const player2 = new Player('Player 2');

let currentPlayer = player1;







//////////////////////////
//Functions
////////////////////////

const shuffle = (array) => {
    for (let i = array.length -1; i > 0; i--) {
        let x = Math.floor(Math.random()*(i + 1));
        let tempIndex = array[i];
        array[i] = array[x];
        array[x] = tempIndex;
    }
}



//////////function check turn/alternate
const togglePlayer = () => {
    if (currentPlayer === player1) {
        currentPlayer = player2
    } else {
        currentPlayer = player1
    }
    return currentPlayer
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
        // //event handler
        // $square.one('click', (event) => {
        //     $element = $(event.currentTarget);
        //     // console.log($element);
        //     $element.toggleClass('unclicked')
        //     console.log($element) //works, element becomes unclicked
        //     //playturn
        //     return $element
        // }
        
        // )
    }
    // } return $element
}



const playRound = () => {

    const clickSquare = (event, player) => {
    $element = $(event.currentTarget);
    console.log($element);
    $element.toggleClass('unclicked')
    console.log($element) //works, element becomes unclicked
    //playturn
    // return $element
    if ($element.is('#mushroom')) {
        currentPlayer.addMushroom()
    } else if ($element.is('#poison')) {
        currentPlayer.poisoned()
    } console.log(currentPlayer)
    }

    // player1.playTurn($element)

    //ughhhhhhhh
    let $square = $('.square')
    //event handler
    $square.one('click', clickSquare(event, currentPlayer))
    
}

// turn(player1, $element)
// playRound()






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
    currentPlayer.poisoned()
}




//start game
const newGame = () => {
    player1.mushrooms = []
    player2.mushrooms = []
    newRound()
}
/////////////////////
//Event Handlers
////////////////////


/////////////////////////
//App Logic
//////////////////////////

newGame()




// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

// https://api.jquery.com/removeAttr/

// https://stackoverflow.com/questions/17277821/jquery-if-element-has-an-id/17277848