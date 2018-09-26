let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const scoreboar_div = document.querySelector(".result");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getComputerChoice(){
  const choices = ["rock", "paper", "scissors"];
  const randomNumber= (Math.floor(Math.random() * 3));
  return choices[randomNumber];
}
function convertToWord(word) {
  if (word === "rock") return "Rock";
  if (word === "paper") return "Paper";
  return "Scissors"
}

function win(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You got lucky!"
  userChoice_div.classList.add('green-glow');
  setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 300);
}

function lose(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(userChoice) + " losses to " + convertToWord(computerChoice) + ". HA, You lost!"
  userChoice_div.classList.add('red-glow');
  setTimeout(function() {userChoice_div.classList.remove('red-glow')}, 300);
}

function tie(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(userChoice) + " is the same as " + convertToWord(computerChoice) + ". It's a tie...Go again";
  userChoice_div.classList.add('yellow-glow');
  setTimeout(function() {userChoice_div.classList.remove('yellow-glow')}, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
    win(userChoice, computerChoice);
    break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
    lose(userChoice, computerChoice);
    break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
    tie(userChoice, computerChoice)
    break;
  }
}

function main() {
rock_div.addEventListener('click', function() {
  game("rock");
})
paper_div.addEventListener('click', function() {
  game("paper");
})
scissors_div.addEventListener('click', function() {
  game("scissors");
})
}
main();
