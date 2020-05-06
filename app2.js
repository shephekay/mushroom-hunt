///////////////////////
//Global Objects
//////////////////////

let $nameInput = $('input').val()
 
let gameBoardValues = []



const winNumber = 10;


class Player {
    constructor(name, id){
        this.name = name,
        this.mushrooms = [],
        this.id = id
    }
    addMushroom (){
        this.mushrooms.push('mush')
        // $('.notices').text(`Yay! ${this.name} found a mushroom!`)
        // setTimeout($('.notices').text(''), 3000)
        // alert('Yay! You got a mushroom!') //placeholder
    }
    poisoned () {
        this.mushrooms = []
    }
    win () {
        $('.win-notice').show(100)
        $('.win-text').text(`Hooray! ${this.name} found ${winNumber} mushrooms! \n You win!`)
        newGame()
    }
}

const player1 = new Player('Player 1', 'player1');
    // $nameInput = null;
const player2 = new Player('Player 2', 'player2');

//////////////////////////
//Functions
////////////////////////

const createGameBoard = () => {
    gameBoardValues = ['poison'];
    for (x = 0; x < 13; x++){
        gameBoardValues.push('mushroom')
    }
    for (x = 0; x < 21; x++){
        gameBoardValues.push('empty')
    }
}

//start game
const newGame = () => {
    $('.notices').text(`Player 1's turn`),
    // $('.win-notice').hide();
    player1.mushrooms.length = 0;
    player2.mushrooms.length = 0;
    // console.log(player2, player1)
    $('.player2').text(`No mushrooms yet`);
    $('.player1').text(`No mushrooms yet`);
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
    $('.alerts').text(`New round!`).slideDown('fast').delay(2000).slideUp('slow')
    $('.container-grid').empty()
    // $('.alerts').text(``)
    gameBoardValues = []
    createGameBoard()
    shuffle(gameBoardValues)
    console.log(gameBoardValues)
    for (value of gameBoardValues) {
        const $square = $('<div>').addClass(value)
        $square.addClass('square')
        $square.attr('id', 'unclicked')
        $square.appendTo($('.container-grid'))
    }
    playRound()
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
        if (currentPlayer.mushrooms.length >= winNumber) {
            currentPlayer.win()

        }
    }

    const checkUnclickedMushrooms = () => {
        // console.log($('#mushroom.unclicked'))
        if ($('.mushroom#unclicked').length === 0){
            newRound()
        }
    }

    //player one clicks a square
    const playTurn = $('.square').one('click', (event) => {
            
            $('.alerts').hide()

            console.log(event.currentTarget);
            const $element = $(event.currentTarget);
            console.log($element)
            $element.removeAttr('id');
            if ($element.is('.mushroom')) {
                currentPlayer.addMushroom();
                $('.alerts').text(`${currentPlayer.name} found a mushroom!`).slideDown('fast').delay(2000).slideUp('slow');
            } else if ($element.is('.poison')) {
                currentPlayer.poisoned()
                $('.alerts').text(`Oh no! ${currentPlayer.name} found the death cap.`).slideDown('fast').delay(2000).slideUp('slow')
            }
            console.log(currentPlayer, player2)
            $('.'+currentPlayer.id).text(`Mushrooms: ${currentPlayer.mushrooms.length}`)
            
            checkWin(currentPlayer)
            // console.log($('.mushroom'))
            checkUnclickedMushrooms()
            togglePlayer()
            $('.notices').text(`${currentPlayer.name}'s turn`).delay(2000)
        })
}


///////////////////////
//Event Handlers
///////////////////////

const showInstructions = {
    click: () => $('.instruction-box').show(300)
}
const hideInstructions = {
    click: () => $('.instruction-box').hide(300)
}

const restart = {
    click: () => newGame()
}
const restartGame = {
    click: () => newGame(),
    click: () => $('.win-notice').hide()
}

newGame()