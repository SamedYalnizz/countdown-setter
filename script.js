const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');



let countDownTitle = '';
let countdownDate = '';
let countdownValue = Date;
let countdownActive; 

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;


// Set Date Input Min with Today's Date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min',today);
console.log(today);

//Populate Countdown / Complete UI
function updateDOM() {
    countdownActive = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownValue - now; 
        console.log('distance', distance);

        const days = Math.floor(distance / day);
        const hours = Math.floor((distance % day)/hour);
        const minutes = Math.floor((distance % hour) /minute);
        const seconds = Math.floor((distance % minute) / second);
        console.log(days,hours,minutes,seconds);

        // Populate Countdown
        countdownElTitle.textContent = `${countdownTitle}`;
        timeElements[0].textContent = `${days}`;
        timeElements[1].textContent = `${hours}`;
        timeElements[2].textContent = `${minutes}`;
        timeElements[3].textContent = `${seconds}`;


        // Hide Input
        inputContainer.hidden = true;
        // Show Countdown
        countdownEl.hidden = false;
        }, second);

}

// Take values from Form Input
function updateCountdown(event) {
    event.preventDefault(); // Browser refreshes on form submit and we want to prevent that.
    countdownTitle=  event.srcElement[0].value;
    countdownDate  = event.srcElement[1].value;
    console.log(countdownTitle, countdownDate);
    // Get number version of current date, update DOM
    countdownValue = new Date(countdownDate).getTime();
    console.log('countdown value:', countdownValue);
    updateDOM();
}

// Event Listeners
countdownForm.addEventListener('submit', updateCountdown);