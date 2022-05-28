
const userChoice = (choice) => {
    console.log(choice);
    let choices = document.querySelector(".game-area");
    choices.style.display = "none";
    let compare = document.querySelector(".compare");
    compare.style.visibility = "visible";
};