var playerScore = 0;
var computerScore = 0;


//Starts the game
game();

//Game function that handles all the rounds in a game.
function game()
{
    //Plays 5 rounds per game. Outpus each rounds winner to the console.
    for (let i = 0; i < 5; i++) 
    {
        let playerSelection = "Rock"
        let computerSelection = getComputerChoice();

        //Output the winner of the round.
        console.log("Round #" + (i+1) + ": " + playRound(playerSelection, computerSelection));
    }
    
    //Check to see the winner of the game and output it.
    checkWinner();
}


//This function handels what happens in each round and who wins the round.
function playRound(playerSelection, computerSelection)
{
    switch (computerSelection) 
    {
        case "Rock":
            
            switch (playerSelection) 
            {
                case "Rock":
                    return "Tie"
                    break;
                case "Paper":
                    playerScore++;
                    return "Win"
                    break;
                case "Scissors":
                    computerScore++;
                    return "Lose"
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
                    return "Lose"
                    break;
                case "Paper":
                    return "Tie"
                    break;
                case "Scissors":
                    playerScore++;
                    return "Win"
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
                    return "Win"
                    break;
                case "Paper":
                    computerScore++;
                    return "Lose"
                    break;
                case "Scissors":
                    return "Tie"
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }

    return "Null"
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
            return "Null"
            break;
    }

    return "Null";
}

//This handles checking to see who the winner is of the game.
function checkWinner()
{
    if(playerScore > computerScore)
    {
        console.log("The winner is: YOU! Congrats");
    }
    else
    {
        console.log("The winner is: THE COMPUTER! Better luck next time");
    }
}