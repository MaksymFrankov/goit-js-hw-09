function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("eWCmQ");const i={delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),sbmBtn:document.querySelector("button")};function l(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}i.sbmBtn.addEventListener("click",(function(t){t.preventDefault();let n=Number(i.delay.value);const o=Number(i.step.value),r=Number(i.amount.value);for(let t=0;t<r;t+=1)l(t+1,n).then((({position:t,InputedDelay:n})=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,InputedDelay:n})=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),n+=o}));
//# sourceMappingURL=03-promises.3055ec40.js.map