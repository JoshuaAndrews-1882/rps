const userChoice = (choice) => {
    let choices = document.querySelector(".game-area");
    choices.style.display = "none";
    let compare = document.querySelector(".compare");
    compare.style.visibility = "visible";

    switch (choice) {
        case 'rock':
            document.getElementById("player-choice").src = "/assets/images/rock.png";
        case 'paper':
            document.getElementById("player-choice").src = "/assets/images/paper.png";
        case 'scissors':
            document.getElementById("player-choice").src = "/assets/images/scissors.png";

            computerChoice();
}
}


const computerChoice = () => {
    let choices = ['rock', 'paper', 'scissors']
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];

    switch (randomChoice) {
        case 'rock':
            document.getElementById("computer-choice").src = "/assets/images/rock.png";
            break;
        case 'paper':
            document.getElementById("computer-choice").src = "/assets/images/paper.png";
            break;
        case 'scissors':
            document.getElementById("computer-choice").src = "/assets/images/scissors.png";
    };
}

/*
const compareChoices = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        console.log("It's a draw");
    }
    if (userChoice === 'rock' && computerChoice === 'paper') {
        console.log("You lose");
    }
    if (userChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You win");
    }
    if (userChoice === 'paper' && computerChoice === 'rock') {
        console.log("You win");
    }
    if (userChoice === 'paper' && computerChoice === 'scissors') {
        console.log("You lose");
    }
    if (userChoice === 'scissors' && computerChoice === 'rock') {
        console.log("You lose");
    }
    if (userChoice === 'scissors' && computerChoice === 'paper') {
        console.log("You win");
    }
}
*/