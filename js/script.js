var playerScore = 0;
var computerScore = 0;

//This function handels what happens in each round and who wins the round.
function playRound(playerSelection, computerSelection)
{
    let result;
    switch (computerSelection)
    {
        case "Rock":
            
            switch (playerSelection) 
            {
                case "Rock":
                    result = "Tie"
                    break;
                case "Paper":
                    playerScore++;
                    result = "Win"
                    break;
                case "Scissors":
                    computerScore++;
                    result = "Lose"
                    break;
                default:
                    break;
            }
            break;
        case "Paper":
            switch (playerSelection) 
            {
                case "Rock":
                    computerScore++;
                    result = "Lose"
                    break;
                case "Paper":
                    result = "Tie"
                    break;
                case "Scissors":
                    playerScore++;
                    result = "Win"
                    break;
            
                default:
                    break;
            }
            break;
        case "Scissors":
            switch (playerSelection) 
            {
                case "Rock":
                    playerScore++;
                    result = "Win"
                    break;
                case "Paper":
                    computerScore++;
                    result = "Lose"
                    break;
                case "Scissors":
                    result = "Tie"
                    break;
                default:
                    break;
            }
            break;
        default:
            result = "ERROR";
            break;
    }

    return "Player's " + playerSelection + " vs Computer's " + computerSelection + 
            " = Player " + result;
}

//Randomly selects the computer choice.
function getComputerChoice()
{
    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) 
    {
        case 0:
            return "Rock"
            break;
        case 1:
            return "Paper"
            break;
        case 2:
            return "Scissors"
            break;
        default:
            return "ERROR"
            break;
    }

    return "ERROR";
}

function displayScoreBoard()
{
    return "Player Score: " + playerScore + " || " + "Computer's Score: " + computerScore;
}

//This handles checking to see who the winner is of the game.
function checkWinner()
{
    if(playerScore >= 5)
    {
        playerScore = computerScore = 0; //Set score to zero to start game over.
        return "The winner is: YOU! Congrats";
    }
    else if(computerScore >= 5)
    {
        playerScore = computerScore = 0; //Set score to zero to start game over.
        return "The winner is: THE COMPUTER! Better luck next time";
    }
}

//Page references
const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");
const scoreBoard = document.querySelector(".scoreBoard");
const roundDisplay = document.querySelector(".roundDisplay");
const gameResult = document.querySelector(".gameResult");

//Add listeners to the buttons so we can figure out what the player has chosen.
rockButton.addEventListener("click", function(e)
{
    //Player chose Rock
    roundDisplay.textContent = playRound("Rock", getComputerChoice());
    gameResult.textContent = checkWinner();
    scoreBoard.textContent = displayScoreBoard();
});
paperButton.addEventListener("click", function(e)
{
    //Player chose Paper
    roundDisplay.textContent = playRound("Paper", getComputerChoice());
    gameResult.textContent = checkWinner();
    scoreBoard.textContent = displayScoreBoard();
});
scissorsButton.addEventListener("click", function(e)
{
    //Player chose Scissors
    roundDisplay.textContent = playRound("Scissors", getComputerChoice());
    gameResult.textContent = checkWinner();
    scoreBoard.textContent = displayScoreBoard();
});