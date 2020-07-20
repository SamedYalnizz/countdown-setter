const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

let countDownTitle = '';
let countdownDate = '';


// Set Date Input Min with Today's Date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min',today);
console.log(today);

// Take values from Form Input
function updateCountdown(event) {
    event.preventDefault(); // Browser refreshes on form submit and we want to prevent that.
    countdownTitle=  event.srcElement[0].value;
    countdownDate  = event.srcElement[1].value;
    console.log(countdownTitle, countdownDate);
}

// Event Listeners
countdownForm.addEventListener('submit', updateCountdown);