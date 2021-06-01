let userScore = 0;
let botScore = 0;
const userScore_span = document.getElementById("user-score");
const botScore_span = document.getElementById("bot-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getBotChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  switch (letter) {
    case "r":
      return "Rock";
    case "p":
        return "Paper";
    case "s":
        return "Scissors";
  }
}

function win(userChoice, botChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallBotWord = "bot".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  botScore_span.innerHTML = botScore;
  result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(botChoice)}${smallBotWord}. You win!`;
  userChoice_div.classList.add("green-glow");
  setTimeout (() => userChoice_div.classList.remove("green-glow"), 300);
}

function lose(userChoice, botChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallBotWord = "bot".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  botScore++;
  userScore_span.innerHTML = userScore;
  botScore_span.innerHTML = botScore;
  result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(botChoice)}${smallBotWord}. You lost!`;
  userChoice_div.classList.add("red-glow");
  setTimeout (() => userChoice_div.classList.remove("red-glow"), 300);
}

function draw(userChoice, botChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallBotWord = "bot".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  botScore_span.innerHTML = botScore;
  result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals to ${convertToWord(botChoice)}${smallBotWord}. It's draw!`;
  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 300);
}

function game(userChoice) {
    const botChoice = getBotChoice();
    switch (userChoice + botChoice) {
      case "rs":
      case "pr":
      case "sp":
        win(userChoice, botChoice);
        break;
      case "sr":
      case "rp":
      case "ps":
        lose(userChoice, botChoice);
        break;
      case "rr":
      case "pp":
      case "ss":
        draw(userChoice, botChoice);
        break;
    }
}

function main() {
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
}

main();