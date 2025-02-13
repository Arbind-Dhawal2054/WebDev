let wins = localStorage.getItem('wins') ? parseInt(localStorage.getItem('wins')) : 0;
let losses = localStorage.getItem('losses') ? parseInt(localStorage.getItem('losses')) : 0;
let ties = localStorage.getItem('ties') ? parseInt(localStorage.getItem('ties')) : 0;


function generateComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3); 
  return randomNumber === 0 ? 'Bat' : randomNumber === 1 ? 'Ball' : 'Stump';
}

function getResult(userMove, computerMove) {
  let result = "";
  if (userMove === computerMove) {
    ties++;
    result = "It's a tie.";
  } else if (
    (userMove === 'Bat' && computerMove === 'Ball') ||
    (userMove === 'Ball' && computerMove === 'Stump') ||
    (userMove === 'Stump' && computerMove === 'Bat')
  ) {
    wins++;
    result = 'User has won!';
  } else {
    losses++;
    result = 'Computer has won!';
  }

  localStorage.setItem('wins', wins);
  localStorage.setItem('losses', losses);
  localStorage.setItem('ties', ties);

  return result;
}

function updateScoreboard() {
  document.getElementById('win-count').innerText = wins;
  document.getElementById('loss-count').innerText = losses;
  document.getElementById('tie-count').innerText = ties;
}

function showResult(userMove, computerMove, result) {
  let resultContainer = document.getElementById('result-container');
  
  resultContainer.innerHTML = `You chose <b>${userMove}</b>. Computer chose <b>${computerMove}</b>. <br> 
  <span style="color: green;">${result}</span>`;

  resultContainer.style.opacity = '0';
  resultContainer.style.transform = 'translateY(-20px)';

  setTimeout(() => {
    resultContainer.classList.add('fade-in');
  }, 100);

  updateScoreboard();
}

function handleClick(userMove) {
  let computerChoice = generateComputerChoice();
  let resultMsg = getResult(userMove, computerChoice);
  showResult(userMove, computerChoice, resultMsg);
}

function resetScore() {
  wins = 0;
  losses = 0;
  ties = 0;
  
  localStorage.setItem('wins', wins);
  localStorage.setItem('losses', losses);
  localStorage.setItem('ties', ties);
  
  updateScoreboard();
}

updateScoreboard();
