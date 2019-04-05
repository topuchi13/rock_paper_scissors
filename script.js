function computerPlay () {
    var options = ["rock", "paper", "scissors"];
    return (options[Math.floor(Math.random() * (3-0) + 0)]);
}

function logic (a,b){
    if (a == b){
        return ("tie");
    }
    else if (a == "rock" && b == "paper"){
        return ("computer");
    }
    else if (a == "paper" && b == "scissors"){
        return ("computer");
    }
    else if (a == "scissors" && b == "rock"){
        return ("computer");
    }
    else {
        return ("player");
    }
}

function play (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (logic(playerSelection, computerSelection) == "tie"){
        return ["tie","It's a tie"];
    }
    else if (logic(playerSelection, computerSelection) == "computer"){
        return ["computer","You lose! " + computerSelection + " beats " + playerSelection];
    }
    else {
        return ["player","You win! " + playerSelection + " beats " + computerSelection];
    }
}

function game(){
    var player = 0;
    var comp = 0;
    while (player < 5 && comp < 5) {
        var result = play(prompt("What's your play?"), computerPlay());
        console.log(result[1]);
        if (result[0] == "computer"){
            comp += 1;
        }
        else if (result[0] == "player"){
            player += 1;
        }
        console.log ("Current Score: Player - " + player + ", Computer - " + comp);
    }
    if (player == 5){
        console.log("Congratulations! You win");
    }
    else {
        console.log("You lose! Keep Trying");
    }
 
}
