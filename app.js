let userScore = 0
let computerScore = 0

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board")
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('input')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))


function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 

  if (randomNumber === 1) {
    computerChoice = 'Death Star'
  }
  if (randomNumber === 2) {
    computerChoice = 'Lightsaber'
  }
  if (randomNumber === 3) {
    computerChoice = 'Darth Vader'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}


function getResult() {
  if (computerChoice === userChoice) {
    result = 'Its A Draw!'
  }
  if (computerChoice === 'Death Star' && userChoice === 'Darth Vader') {
    let userChoice_id = document.getElementById(userScore)
    userScore++
    userScore_span.innerHTML = userScore;
    result = 'You Win!' 

  }
  if (computerChoice === 'Death Star' && userChoice === 'Lightsaber') {
    let computerChoice_id = document.getElementById(computerScore)
    computerScore++
    computerScore_span.innerHTML = computerScore;
    result = 'You Lose!'
    
  }
  if (computerChoice === 'Darth Vader' && userChoice === 'Lightsaber') {
    let userChoice_id = document.getElementById(userScore)
    userScore++
    userScore_span.innerHTML = userScore;
    result = 'You Win!'
   
  }
  if (computerChoice === 'Darth Vader' && userChoice === 'Death Star') {
    let computerChoice_id = document.getElementById(computerScore)
    computerScore++
    computerScore_span.innerHTML = computerScore;
    result = 'You Lose!'
    
  }
  if (computerChoice === 'Lightsaber' && userChoice === 'Death Star') {
    let userChoice_id = document.getElementById(userScore)
    userScore++
    userScore_span.innerHTML = userScore;
    result = 'You Win!'
  }
  if (computerChoice === 'Lightsaber' && userChoice === 'Darth Vader') {
    let computerChoice_id = document.getElementById(computerScore)
    computerScore++
    computerScore_span.innerHTML = computerScore;
    result = 'You Lose!'
  }
  resultDisplay.innerHTML = result
}
