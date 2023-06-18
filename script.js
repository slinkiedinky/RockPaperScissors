function getComputerChoice() {
    var options = ["Rock", "Paper", "Scissors"]
    var choice = options[Math.floor(Math.random()*options.length)];
    return choice; 
}
console.log(getComputerChoice());
