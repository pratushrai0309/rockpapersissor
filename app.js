//Variables
let playerChoice;
let computerChoice;
let randomNumber;

//In Game Variables
let gameStatus = document.getElementById("gamestatus");
let choice = document.getElementById("choice");
let choiceComputer = document.getElementById("computerchoice");
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorButton = document.getElementById("scissor");
let resetButton = document.getElementById("reset");


//Show Reser Button
function showReset(){
    resetButton.style.display = "block";
    rockButton.style.display = "none";
    paperButton.style.display = "none";
    scissorButton.style.display = "none";
};

//Random Number Generator
function randomNumberGenerator(){
    randomNumber = Math.floor(Math.random() * 3) + 1;

    //Creating The Brain Of The Computer
    switch(randomNumber){
        case 1:
            computerChoice = "rock";
            choiceComputer.textContent = "Rock";
            break;

            case 2:
                computerChoice = "paper";
                choiceComputer.textContent = "Paper";
                break;

                case 3:
                    computerChoice = "scissor";
                    choiceComputer.textContent = "Scissor";
                    break;

    }
}

//Rock Button
rockButton.addEventListener("click", function rock(){
    playerChoice = "rock";
    choice.textContent = "Rock";
    randomNumberGenerator();
    if(playerChoice === computerChoice){
        gameStatus.textContent = "Game Is Tie!";
    }

        else if(playerChoice === "rock" && computerChoice === "paper"){
            gameStatus.textContent = "Computer Win!";
        }
          
        else if(playerChoice === "paper" && computerChoice === "scissor"){
            gameStatus.textContent = "Computer Win!";
        }
        
        else if(playerChoice === "scissor" && computerChoice === "paper"){
            gameStatus.textContent = "You Win!";
        }

        else if(playerChoice === "paper" && computerChoice === "rock"){
            gameStatus.textContent = "You Win!";
        }

        else if(playerChoice === "scissor" && computerChoice === "rock"){
            gameStatus.textContent = "Computer Win!";
        }

        else if(playerChoice === "rock" && computerChoice === "scissor"){
            gameStatus.textContent = "You Win!";
        }
        showReset();
});

//Paper Button
paperButton.addEventListener("click", function paper(){
    playerChoice = "paper";
    choice.textContent = "Paper";
    randomNumberGenerator();
    if(playerChoice === computerChoice){
        gameStatus.textContent = "Game Is Tie!";
    }

        else if(playerChoice === "rock" && computerChoice === "paper"){
            gameStatus.textContent = "Computer Win!";
        }
          
        else if(playerChoice === "paper" && computerChoice === "scissor"){
            gameStatus.textContent = "Computer Win!";
        }
        
        else if(playerChoice === "scissor" && computerChoice === "paper"){
            gameStatus.textContent = "You Win!";
        }

        else if(playerChoice === "paper" && computerChoice === "rock"){
            gameStatus.textContent = "You Win!";
        }

        else if(playerChoice === "scissor" && computerChoice === "rock"){
            gameStatus.textContent = "Computer Win!";
        }

        else if(playerChoice === "rock" && computerChoice === "scissor"){
            gameStatus.textContent = "You Win!";
        }
        showReset();
});

//Scissor Button
scissorButton.addEventListener("click", function scissor(){
    playerChoice = "scissor";
    choice.textContent = "Scissor";
    randomNumberGenerator();
    if(playerChoice === computerChoice){
        gameStatus.textContent = "Game Is Tie!";
    }

        else if(playerChoice === "rock" && computerChoice === "paper"){
            gameStatus.textContent = "Computer Win!";
        }
          
        else if(playerChoice === "paper" && computerChoice === "scissor"){
            gameStatus.textContent = "Computer Win!";
        }
        
        else if(playerChoice === "scissor" && computerChoice === "paper"){
            gameStatus.textContent = "You Win!";
        }

        else if(playerChoice === "paper" && computerChoice === "rock"){
            gameStatus.textContent = "You Win!";
        }

        else if(playerChoice === "scissor" && computerChoice === "rock"){
            gameStatus.textContent = "Computer Win!";
        }

        else if(playerChoice === "rock" && computerChoice === "scissor"){
            gameStatus.textContent = "You Win!";
        }
        showReset();
});

resetButton.addEventListener("click", function resetGame(){
    playerChoice = "";
    computerChoice = "";
    gameStatus.textContent = "Please Select To Check The Winner";
    choice.textContent = "-";
    choiceComputer.textContent = "-";
    resetButton.style.display = "none";
    rockButton.style.display = "inline-block";
    paperButton.style.display = "inline-block";
    scissorButton.style.display = "inline-block";
});