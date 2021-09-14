// Rock paper scissors game with random choice by computer and simple UI
// get computers choise for play

let userScore = 0 ;
let compScore = 0 ;
let roundTie=0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

// gets user input on play selection 
function main (){
    rock_div.addEventListener('click', function(){
        playRound("rock");
    })
    paper_div.addEventListener('click', function(){
        playRound("paper");
    })
    scissor_div.addEventListener('click', function(){
        playRound("scissor");
    })
}

// random play by computer
function computerPlay (){
 let  x = Math.floor(Math.random() * 3);
 let play = " ";
 switch (x){
     case 0: 
        play = "rock"; break;
     case 1: 
        play = "paper"; break;
     case 2: 
        play = "scissor"; break;
 }
 return play;
}

//update score board with wins + losses, keeping score of draws for future enhancements 

function win(computerSelection, playerSelection){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = computerSelection + "  beats "+ playerSelection + ", you win!";
    document.getElementById(playerSelection).classList.add('green-glow');
    setTimeout(function(){document.getElementById(playerSelection).classList.remove('green-glow')},1000);
}
function lose(computerSelection, playerSelection){
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = computerSelection + " beats "+ playerSelection+ ", you lose!";
    document.getElementById(playerSelection).classList.add('red-glow');
    setTimeout(function(){document.getElementById(playerSelection).classList.remove('red-glow')},1000);
}
function tie(computerSelection, playerSelection){
    roundTie++;
    result_div.innerHTML ="We both played " + playerSelection+ ", it's a draw!";
    document.getElementById(playerSelection).classList.add('yellow-glow');
    setTimeout(function(){document.getElementById(playerSelection).classList.remove('yellow-glow')},1000);
}

//play a single round of rock paper scissors

function playRound (playerSelection){
    let computerSelection = computerPlay();
    switch(true){
        case (computerSelection == playerSelection):
            console.log("We both played " + playerSelection+ ". It's a draw!");
            tie(computerSelection, playerSelection);
            break;
        case (playerSelection == "rock" && computerSelection == "scissor"):
        case (playerSelection == "scissor" && computerSelection == "paper"):
        case (playerSelection == "paper" && computerSelection == "rock"):
           console.log("I played " + computerSelection + " and you played "+ playerSelection + ". You win!") ;
           win(computerSelection, playerSelection);
            break;
        default :
            console.log("I played " + computerSelection + " and you played "+ playerSelection+ ". You lose!");
            lose(computerSelection, playerSelection);
            break;

    } 

}

//begin a game when user clicks on a item 
main();



