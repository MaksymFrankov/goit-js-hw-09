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

  let InputedDelay = Number(refs.delay.value);
  const InputedStep = Number(refs.step.value);
  const InputedAmount = Number(refs.amount.value);

  for (let i = 0; i < InputedAmount; i += 1) {
    createPromise(i + 1, InputedDelay)
      .then(({ position, InputedDelay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${InputedDelay}ms`
        );
      })
      .catch(({ position, InputedDelay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${InputedDelay}ms`
        );
      });
    InputedDelay += InputedStep;
  }
}