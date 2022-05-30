let userChoice = (choice) => {
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

            console.log(computerChoice());
};
}

const computerChoice = () => {
    let choices = ['rock', 'paper', 'scissors']
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];

    switch (randomChoice) {
        case 'rock':
            document.getElementById("computer-choice").src = "/assets/images/rock.png";
            return 'rock';
        case 'paper':
            document.getElementById("computer-choice").src = "/assets/images/paper.png";
            return 'paper';
        case 'scissors':
            document.getElementById("computer-choice").src = "/assets/images/scissors.png";
            return 'scissors';
    };
}