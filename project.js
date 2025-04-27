// script.js

const riddles = [
  { question: "What has keys but can't open locks?", answer: "piano" },
  { question: "What comes down but never goes up?", answer: "rain" },
  { question: "What has a face but can't smile?", answer: "clock" },
  { question: "What can travel around the world while staying in the corner?", answer: "stamp" },
  { question: "What has one head, one foot, and four legs?", answer: "bed" }
];

let currentRiddle = 0;
let score = 0;

const landingContainer = document.querySelector('.landing-container');
const gameContainer = document.querySelector('.game-container');
const riddleText = document.querySelector('.riddle-text');
const answerInput = document.querySelector('.answer-input');
const submitBtn = document.querySelector('.submit-btn');
const feedback = document.querySelector('.feedback');
const correctAnswerText = document.querySelector('.correct-answer');
const nextBtn = document.querySelector('.next-btn');
const counter = document.querySelector('.counter');
const scoreCard = document.querySelector('.score-card');
const finalScore = document.querySelector('.final-score');
const totalRiddles = document.querySelector('.total-riddles');
const restartBtn = document.querySelector('.restart-btn');
const congratulationsMessage = document.querySelector('.congratulations-message');

// Start game on landing page click
document.querySelector('.start-btn').addEventListener('click', () => {
  landingContainer.style.display = 'none';
  gameContainer.style.display = 'block';
  loadRiddle();
});

// Game logic
function loadRiddle() {
  if (currentRiddle < riddles.length) {
    riddleText.textContent = riddles[currentRiddle].question;
    counter.textContent = `Riddle ${currentRiddle + 1} of ${riddles.length}`;
    feedback.textContent = '';
    correctAnswerText.textContent = '';
    answerInput.value = '';
    answerInput.focus();
    submitBtn.style.display = 'block';
    nextBtn.style.display = 'none';
  } else {
    showScoreCard();
  }
}

function checkAnswer() {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = riddles[currentRiddle].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    score++;
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
    correctAnswerText.textContent = '';
  } else {
    feedback.textContent = "Incorrect!";
    feedback.style.color = "red";
    correctAnswerText.textContent = `Correct answer: ${correctAnswer}`;
  }

  nextBtn.style.display = 'block';
  submitBtn.style.display = 'none';
}

function showScoreCard() {
  scoreCard.style.display = 'block';
  finalScore.textContent = score;
  totalRiddles.textContent = riddles.length;
  congratulationsMessage.style.display = 'block';
  nextBtn.style.display = 'none';
  submitBtn.style.display = 'none';
}

function restartGame() {
  currentRiddle = 0;
  score = 0;
  scoreCard.style.display = 'none';
  congratulationsMessage.style.display = 'none';
  landingContainer.style.display = 'block';
  gameContainer.style.display = 'none';
}

// Event listeners
submitBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', function () {
  currentRiddle++;
  loadRiddle();
});
restartBtn.addEventListener('click', restartGame);

  