import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";


const refs = {
    startBtn: document.querySelector('button[data-start]'),
    inputedDate: document.querySelector('#datetime-picker'),
    dCount: document.querySelector('span[data-days]'),
    hCount: document.querySelector('span[data-hours]'),
    mCount: document.querySelector('span[data-minutes]'),
    sCount: document.querySelector('span[data-seconds]'),
};

const optionsFlatpickr = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
// console.log(selectedDates[0]);
  },
};
flatpickr('#datetime-picker', optionsFlatpickr);


let totalSeconds, days, hours, minutes, seconds, counter;

refs.inputedDate.addEventListener('change', onChangeDate);
refs.startBtn.addEventListener('click', onClickStartBtn);

refs.startBtn.disabled = true;

function onChangeDate() {
    const now = Date.now();
    const picker = Date.parse(refs.inputedDate.value);
    // console.log('now: ' + now);
    // console.log('picker: ' + picker);
    totalSeconds = Math.floor((picker - now) / 1000);
    if (totalSeconds > 0) {
        refs.startBtn.disabled = false;
    } else {
        refs.startBtn.disabled = true;
        // window.alert("Please choose a date in the future");
        Notiflix.Notify.warning("Please choose a date in the future");
        return;
    }
    // console.log('totalSeconds: ' + totalSeconds)
}

function timer() {
    updateTotalTime();
    displayCounter();
    if (totalSeconds <= 0) clearInterval(counter)
}

function onClickStartBtn() {
    counter = setInterval(() => { timer() }, 1000);
    refs.startBtn.disabled = true;

};

function updateTotalTime() {
    const secondsInDay = 60 * 60 * 24;
    const secondsInHour = 60 * 60;
    const secondsInMinute = 60;

    let diff = totalSeconds;

    days = Math.floor(diff / secondsInDay);
    diff -= days * secondsInDay;

    hours = Math.floor(diff / secondsInHour);
    diff -= hours * secondsInHour;

    minutes = Math.floor(diff / secondsInMinute);
    diff -= minutes * secondsInMinute;

    seconds = diff;

    totalSeconds--;
};

function displayCounter()
{
    refs.dCount.textContent = String(days).padStart(2,0);
    refs.hCount.textContent = String(hours).padStart(2,0);
    refs.mCount.textContent = String(minutes).padStart(2,0);
    refs.sCount.textContent = String(seconds).padStart(2,0);
};






