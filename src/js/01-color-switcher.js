const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', onClickStartBtn);

refs.stopBtn.addEventListener('click', onClickStopBtn);

const DEALAY = 1000;

let DEALAY_ID;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function onClickStartBtn() {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    
    DEALAY_ID = setInterval(() =>
    {
    refs.body.style.backgroundColor = getRandomHexColor();
    }, DEALAY)
    console.log('Колорпикер включен');
};

function onClickStopBtn() {
    refs.stopBtn.disabled = true;
    refs.startBtn.disabled = false;
    clearInterval(DEALAY_ID);
    console.log('Колопикер выключен');
};