let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    return  options[Math.floor(Math.random() * 3)];
};

const drawGame = () =>{
    msg.style.backgroundColor = "#402E7A";
    msg.innerText = "Game draw🥹.play again.";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        msg.innerText = `You win!🥳 your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScorePara.innerText = userScore;
    }else{
        comScore++;
        msg.style.backgroundColor = "red";
        msg.style.color = "black";
        msg.innerText = `You loose🥲${compChoice} beats your ${userChoice}`;
        compScorePara.innerText = comScore;
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();//generate computer choice
    if( userChoice === compChoice){
        //game Draw;
        drawGame();
    }else {
        let userWin = true;
        if(userChoice ==="rock") {
            // paper scissors
            userWin = compChoice ==="paper" ? false : true;

        }else if (userChoice ==="paper"){
            // rock scissors
            userWin = compChoice ==="scissors" ? false : true;
        }else {
            // rock paper 
            userWin= compChoice ==="rock" ? false : true ;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
    
});