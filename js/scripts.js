// Get necessary elements
var elFormRandom = document.querySelector('.js-form-random');
var elRandomInput = elFormRandom.querySelector('.js-random-input');
var elUserResult = document.querySelector('.js-user-result');
var elAttemptResult = document.querySelector('.js-attempt-result');

var ATTEMPT = 5;

// Add random number variable
var pcNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
console.log(pcNumber);

// Add eventListener and function
elFormRandom.addEventListener('submit', function (evt) {
  evt.preventDefault();

  // Validate attempts
  if (ATTEMPT === 0) {
    elAttemptResult.textContent = 'You lost all chances';
    elRandomInput.setAttribute('disabled', true);
    return;
  } else {
    elAttemptResult.textContent = --ATTEMPT;
  }

  // Get userInput
  var userGuess = parseInt(elRandomInput.value.trim(), 10);

  // Check whether guess is right or wrong
  elUserResult.classList.remove('text-success', 'text-danger');
  elRandomInput.classList.remove('is-valid', 'is-invalid');

  if (userGuess === pcNumber) {
    elUserResult.textContent = 'Correct :)';
    elUserResult.classList.add('text-success');
    elRandomInput.classList.add('is-valid');
    elAttemptResult.classList.add('d-none');
  } else {
    elUserResult.textContent = 'Incorrect :(';
    elUserResult.classList.add('text-danger');
    elRandomInput.classList.add('is-invalid');
  }

});