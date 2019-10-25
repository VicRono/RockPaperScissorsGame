// DOM elements
const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

// scoreboard object
const scoreboard = {
  player : 0,
  computer : 0
}

//Play Game
function play(e) {
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
}

//Event listener
choices.forEach(choice => choice.addEventListener('click', play));
