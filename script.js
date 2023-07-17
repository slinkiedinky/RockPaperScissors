function getComputerChoice() 
{
    var options = ["rock", "paper", "scissors"]
    var choice = options[Math.floor(Math.random()*options.length)];
    return choice; 
}

function playRound(playerSelection, computerSelection)
{  
    var playerwins = 0;
    var computerwins = 0;

    playerSelection = playerSelection.toLowerCase();
    console.log("Player selection: " + playerSelection);
    console.log("Computer choice: " + computerSelection);

    if (playerSelection === computerSelection){
        return "Its a tie!";
    }

    else if (playerSelection === "rock")
    {
        if (computerSelection === "paper"){
            return "You lose! Paper beats Rock.";
        }
        else {
            return "You win! Rock beats Scissors!";
        }
    }

    else if (playerSelection === "paper")
    {
        if (computerSelection === "rock"){
            return "You win! Paper beats Rock!";
        }
        else {
            return "You lose! Scissors beats paper.";
        }
    }

    else if (playerSelection === "scissors")
    {
        if (computerSelection === "rock"){
            return "You lose! Rock beats scissors.";
        }
        else {
            return "You win! Scissors beats paper!";
        }
    }
    return "Invalid input! Please choose Rock, Paper, or Scissors."
}

function game(playerwins, computerwins)
{
    while ((playerwins + computerwins) <= 5)
    {
        const playerSelection = prompt("Enter your choice (rock, paper, or scissors): ");
        if (playerSelection){
            const computerSelection = getComputerChoice();

              const result = playRound(playerSelection, computerSelection);
              console.log(result);
            if (result.includes("win"))
                playerwins++;
            else if (result.includes("lose"))
                computerwins++;
        } else {
            console.log("No input received, please refresh the page and try again.");
            return;
        }
       
        if ((playerwins + computerwins) === 5)
        {
        console.log(`Player score: ${playerwins}, Computer score: ${computerwins}`);
        if (computerwins > playerwins)
        {
           console.log("Game Over! Computer Wins!");
           return;
        }
        console.log("Game Over! Player Wins!");
        return;
        }
    }
}

game(0,0);