const personText = document.getElementById("personText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");
const keyButton = document.querySelectorAll(".keyButton");
let person;
let computer;
let result;

keyButton.forEach(button => button.addEventListener("click", () => {
    person = button.textContent;
    computerChoice();
    personText.textContent = `Person: ${person}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = keyChamp();
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

function keyChamp(){
    if(person == computer){
        return "Tie!";
    } else if (computer == "Rock"){
        return (person == "Paper")? "You win!" : "You lose!";
    } else if (computer == "Paper"){
        return (person == "Scissors")? "You win!" : "You lose!";
    } else if (computer == "Scissors"){
        return (person == "Rock")? "You win!" : "You lose!";
    }
}