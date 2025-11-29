let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#comp-score");

const generateComChoice = () => {
  let options = ["rock", "paper", "scissors"];
  //rock paper scissors
  const ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];
};

const drawGame = () => {
  msg.innerText = "Game was draw. Play again";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, comChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You win");
    msg.innerText = `You Win ${userChoice} beats ${comChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    comScorePara.innerText = compScore;
    console.log("you lose");
    msg.innerText = `You lose ${comChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user Choice is =", userChoice);
  //generate computer choice
  const comChoice = generateComChoice();
  console.log("user choice", userChoice);

  if (userChoice === comChoice) {
    //draw
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = comChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = comChoice === "scissors" ? false : true;
    } else {
      userWin = comChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, comChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
