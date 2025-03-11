const personText = document.getElementById("personText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");
const keyButton = document.querySelectorAll(".keyButton");
const wins = document.getElementById("wins");
const losses = document.getElementById("losses");
const tie = document.getElementById("tie");

let person;
let computer;
let result;

const obj = { 
    wins:0,
    losses:0,
    tie:0
}

keyButton.forEach(button => button.addEventListener("click", () => {
    person = button.textContent;
    computerChoice();
    result = keyChamp()
    personText.textContent = `Person: ${person}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = result;
    wins.textContent = `wins:${obj.wins}`;
    losses.textContent = `losses:${obj.losses}`;
    tie.textContent = `tie:${obj.tie}`;
}))

function computerChoice(){
    const randomNum = Math.floor(Math.random() * 3) + 1;

    switch(randomNum){
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;        
    }
}

function keyChamp() {
    if (person === computer) {
        obj.tie += 1;
        return "Tie!";
    } else if (
        (computer === "Rock" && person === "Paper") ||
        (computer === "Paper" && person === "Scissors") ||
        (computer === "Scissors" && person === "Rock")
    ) {
        obj.wins += 1;
        return "You win!";
    } else {
        obj.losses += 1;
        return "You lose!";
    }
}