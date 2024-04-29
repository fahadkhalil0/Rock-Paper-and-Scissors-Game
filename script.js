let userScore = 0;
let compScore= 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

//Access to score-board (score)
let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#comp-score");

//computer choice
const gencompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    let randIdx= Math.floor(Math.random() * 3);
    return options [randIdx];
}

//Draw game command ----
const drawGame = () =>{
    console.log("game was draw.")
    msg.innerText = "Game was draw play Again";
    msg.style.backgroundColor = "yellow";

};

//ShowWinner function
let showWin = (userwin , Userchoice , compChoice) =>{
    if (userwin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = "you lose";
        msg.style.backgroundColor = "red";
    }
}

//PlayGame Function
const playGame = (userChoice)  => {
    console.log("userChoice =", userChoice);
//generate computer choice
const compChoice = gencompChoice();
console.log("compChoice =", compChoice);
//Condition Check B/W User and computer ----
if(userChoice === compChoice){
    drawGame();
} else {
    let userwin = true;
    if (userChoice === "Rock"){
        //Scissors // paper
        userwin = compChoice === "Paper" ? flase: true;
    } else if (userChoice === "paper"){
        userwin = compChoice === "Scissor" ? flase: true;
    } else {
        //rock //paper
      userwin = compChoice === "rock"? false: true;
    }
    showWin (userwin);
} };

//Function of Userchoice

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame (userChoice);
    })
});