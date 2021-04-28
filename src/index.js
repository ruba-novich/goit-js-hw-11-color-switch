import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs  = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]')
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

refs.btnStart.addEventListener('click', () => {
  
  refs.btnStart.disabled = true;
  timerId = setInterval(() => {
    document.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)]; 
    }, 1000);
});

refs.btnStop.addEventListener("click", () => {
    clearInterval(timerId);
    refs.btnStart.disabled = false;
});

