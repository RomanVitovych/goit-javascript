const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
}
// console.dir(refs.btnStart);

refs.btnStart.addEventListener('click', () => {
    refs.btnStart.disable = true;
    refs.btnStop.disable = false;
    toChangeColor();
});
refs.btnStop.addEventListener('click', () => {
    refs.btnStart.disable = false;
    refs.btnStop.disable = true;
    stopToChange();
});

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  console.log(colors);

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
   
  let interval;

  function toChangeColor () {
    interval = setInterval(() => {
        const color = randomIntegerFromInterval(0, colors.length, -1);
        refs.body.style.backgroundColor = colors[color];
  },1000)
  };

function stopToChange () {
    clearInterval (interval);
};



