const choices = document.querySelectorAll('.choices')

const genCompChoice = () => {
  const options = ['rock', 'paper', 'scissors']
  const randIdx = Math.floor(Math.random() * 3)
  return options[randIdx]
}

const drawGame = () => {
  
}

const playGame = (userChoice) => {
  const compChoice = genCompChoice()

  if (userChoice === compChoice) {
    drawGame()
  } else {
    let userWin = true
    if (userChoice === 'rock') {
      userWin = compChoice === 'paper' ? false : true
    } else if (userChoice === 'paper') {
      
    }
  }

}

choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute('id')
    playGame(userChoice)
  })
})