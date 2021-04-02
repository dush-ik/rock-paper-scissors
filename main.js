const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const winningCombination = [
  ['rock', 'scissors'],
  ['rock', 'lizard'],
  ['paper', 'rock'],
  ['paper', 'spock'],
  ['scissors', 'paper'],
  ['scissors', 'lizard'],
  ['lizard', 'spock'],
  ['lizard', 'paper'],
  ['spock', 'rock'],
  ['spock', 'scissors']
];

const includeGameAnimationHtml = () => {
  fetch('./game-animation.html')
    .then(resp => resp.text())
    .then(htmlString => document.querySelector('dialog').innerHTML = htmlString);
}

const playerSelection = () => {
  const selected = prompt('Please choose Rock Paper Scissors Lizard Spock').toLocaleLowerCase();
  if (choices.includes(selected)) {
    return selected;
  } else {
    playerSelection();
  }
}

const computerSelection = () => {
  const rand = Math.floor(Math.random() * 5)
  return choices[rand]; 
}

(() => {
  includeGameAnimationHtml();
  // const playerSelected = playerSelection();
  // const computerSelected = computerSelection();

  // if (playerSelected === computerSelected) {
  //   alert('It`s a tie');
  //   return
  // }

  // const outcome = [playerSelected, computerSelected];

  // const outcomeIndex = winningCombination.reduce((acm, combination, index) => {
  //   if (combination.every(value => outcome.includes(value))) {
  //     acm = index;
  //   }
  //   return acm;
  // }, 0);
  
  // const winningOutcome = winningCombination[outcomeIndex];
  // if (playerSelected === winningOutcome[0]) {
  //   alert(`You Win! ${winningOutcome[0]} beats ${winningOutcome[1]}`);
  // } else {
  //   alert(`You Loose! ${winningOutcome[0]} beats ${winningOutcome[1]}`);
  // }
})();
