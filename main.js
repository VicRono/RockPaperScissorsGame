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
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);

//test purposes
  console.log(playerChoice, computerChoice, winner);
}

//Get computer choices
function getComputerChoice(){
  const rand = Math.random();
  if(rand < 0.34){
    return 'rock';
  } else if (rand <= 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

//get winner
function getWinner(p, c){
  if(p === c){
    return 'draw';
  } else if (p === 'rock') {
    if(c === 'paper'){
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'paper') {
    if (c === 'scissors'){
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'scissors'){
    if (c === 'rock') {
      return 'computer';
    } else {
      return 'player';
    }
  }
}

function showWinner(winner, computerChoice) {
  if (winner === 'player') {
    //Increment player score
    scoreboard.player++;
    //Show modal result
    result.innerHTML = `
    <h1 class="text-win">You Win</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x">>/i>
    <p>Computer chose: <strong>${computerChoice}</strong></p>
    `;
  } else if (winner === 'computer') {
    //Increment CPU score
    scoreboard.computer++;
    //Show modal result
    result.innerHTML = `
    <h1 class="text-lose">You lose</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x">>/i>
    <p>Computer chose: <strong>${computerChoice}</strong></p>
    `;
  } else {
    result.innerHTML = `
    <h1>It's a draw =(</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x">>/i>
    <p>Computer chose: <strong>${computerChoice}</strong></p>
    `;
  }
  //Show Score
  score.innerHTML = `
  <p>Player: ${scoreboard.player}</p>
  <p>Computer: ${scoreboard.computer}</p>
  `;

//Display score on modal
  modal.style.display = 'block';
}

//Event listener
choices.forEach(choice => choice.addEventListener('click', play));
