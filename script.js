const body = document.querySelector("body");
const form = document.querySelector(".form");
const play = document.querySelector("#play");
const rockDeck = document.querySelector(".rock");
const paperDeck = document.querySelector(".paper");
const scissorsDeck = document.querySelector(".scissors");
const img = document.createElement("img");
const img2 = document.createElement("img");
const playerScreen = document.querySelector(".player-screen");
const lives = document.querySelector(".lives");
let computerMove = "";
let playerMove = "";
let playerLife = 19;

body.onload = () => {
  form.style.opacity = "1";
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const playerName = event.target.elements["name"].value;

  if (playerName.trim() === "") {
    document.querySelector(".form-control").style.border = "3px solid red";
    document.querySelector(".invalid").style.opacity = "1";
  } else {
    const validate = document.querySelector(".load");
    validate.style.opacity = "1";
    document.querySelector(".invalid").style.opacity = "0";
    document.querySelector(".form-control").style.border = "none";
    setTimeout(() => {
      form.style.opacity = "0";
      const banner = document.querySelector(".banner");
      banner.style = `opacity:1;z-index:200`;
      document.querySelector(".player").innerHTML = playerName;
    }, 3000);
  }
});

play.addEventListener("click", () => {
  document.querySelector(".game").style = `opacity:1;z-index:200`;
  document.querySelector(".banner").style.opacity = "0";
  document.querySelector(".stats").style.opacity = "1";
  const input = document.querySelector("#name");
  document.querySelector(".left .player").innerHTML = input.value;
  document.querySelector(".player-win").innerHTML = input.value;
  document.querySelector(".player-win-over").innerHTML = input.value;
});
function computerChoice() {
  const computerScreen = document.querySelector(".computer-screen");
  const computer = Math.floor(Math.random() * 3 + 1);

  if (computer === 1) {
    computerMove = "Rock";
    img.setAttribute("src", `./img/${computerMove}.png`);
    computerScreen.append(img);
  } else if (computer === 2) {
    computerMove = "Paper";
    img.setAttribute("src", `./img/${computerMove}.png`);
    computerScreen.append(img);
  } else {
    computerMove = "Scissors";
    img.setAttribute("src", `./img/${computerMove}.png`);
    computerScreen.append(img);
  }
  console.log(computer);
  console.log(computerMove);
}

function playerLifeHandler() {
  lives.innerHTML = playerLife--;
  if (playerLife <= -1) {
    playerLife = 19;
    const over = document.querySelector(".over");
    over.style.display = "block";
    const play = document.querySelector(".play-again");
    play.addEventListener("click", () => {
      over.style.display = "none";
      if (lives.innerHTML === "0") {
        lives.innerHTML = "20";
        playerLife = 19;
        const resetValue = document.querySelectorAll(".reset");
        for (let i = 0; i < resetValue.length; i++) {
          resetValue[i].value = 0;
        }
      }
    });
  }
}
function playerScoresHandler() {
  if (results === "Tie") {
    tie.value++;
  } else if (results === "Won") {
    win.value++;
  } else if (results === "lose") {
    lose.value++;
  }
  console.table(tie.value, win.value, lose.value);
}

function scoreOutputHandler() {
  const ties = document.querySelector(".tie-score");
  ties.innerHTML = tie.value;
  const wins = document.querySelector(".win-score");
  wins.innerHTML = win.value;
  const loses = document.querySelector(".lose-score");
  loses.innerHTML = lose.value;
}

rockDeck.addEventListener("click", () => {
  computerChoice();
  playerMove = "Rock";
  img2.setAttribute("src", `./img/${playerMove}.png`);
  playerScreen.append(img2);

  if (playerMove === computerMove) {
    console.log("Tie");
    results = "Tie";
  } else if (playerMove && computerMove === "Paper") {
    console.log("lose");
    results = "lose";
  } else {
    console.log("won");
    results = "Won";
  }
  playerLifeHandler();
  playerScoresHandler();
  scoreOutputHandler();
});

paperDeck.addEventListener("click", () => {
  computerChoice();
  playerMove = "Paper";
  img2.setAttribute("src", `./img/${playerMove}.png`);
  playerScreen.append(img2);
  if (playerMove === computerMove) {
    console.log("Tie");
    results = "Tie";
  } else if (playerMove && computerMove === "Rock") {
    console.log("won");
    results = "Won";
  } else {
    console.log("lose");
    results = "lose";
  }
  playerLifeHandler();
  playerScoresHandler();
  scoreOutputHandler();
});

scissorsDeck.addEventListener("click", () => {
  computerChoice();
  playerMove = "Scissors";
  img2.setAttribute("src", `./img/${playerMove}.png`);
  playerScreen.append(img2);
  if (playerMove === computerMove) {
    console.log("Tie");
    results = "Tie";
  } else if (playerMove && computerMove === "Paper") {
    console.log("won");
    results = "Won";
  } else {
    console.log("lose");
    results = "lose";
  }
  playerLifeHandler();
  playerScoresHandler();
  scoreOutputHandler();
});
