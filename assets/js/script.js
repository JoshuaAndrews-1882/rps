/*
const gameChoices = {
    "rock": "/assets/images/rock.png",
    "paper": "/assets/images/paper.png",
    "scissors": "/assets/images/paper.png"
}
*/


const userChoice = (choice) => {
    let choices = document.querySelector(".game-area");
    choices.style.display = "none";
    let compare = document.querySelector(".compare");
    compare.style.visibility = "visible";

    switch (choice) {
        case 'rock':
            document.getElementById("game-choice").src = "/assets/images/rock.png";
            break;
        case 'paper':
            document.getElementById("game-choice").src = "/assets/images/paper.png";
            break;
        case 'scissors':
            document.getElementById("game-choice").src = "/assets/images/scissors.png";
            break;
}
}