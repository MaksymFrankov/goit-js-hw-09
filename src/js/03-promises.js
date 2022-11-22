import Notiflix from 'notiflix';

const refs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  sbmBtn: document.querySelector('button')
};

refs.sbmBtn.addEventListener('click', onClicksbmBtn);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

function onClicksbmBtn(event) {
  event.preventDefault();

  let inputedDelay = Number(refs.delay.value);
  // console.log(inputedDelay);
  const inputedStep = Number(refs.step.value);
  // console.log(inputedStep);
  const inputedAmount = Number(refs.amount.value);

  for (let i = 0; i < inputedAmount; i += 1) {
    createPromise(i + 1, inputedDelay)
      .then(({ position, inputedDelay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delayTime}ms`
        );
      })
      .catch(({ position, inputedDelay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delayTime}ms`
        );
      });
    let delayTime = inputedDelay += inputedStep;
  }
}