'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No number!');
  } else if (secretNumber === guess) {
    displayMessage('🎉Correct Answer!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too High!' : '📉Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
      displayMessage('No number!');
    } else if (secretNumber === guess) {
      displayMessage('🎉Correct Answer!');
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) {
        highScore = score;
      }
      document.querySelector('.highscore').textContent = highScore;
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈Too High!' : '📉Too Low');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});