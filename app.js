const phaseEl = document.getElementById('phase');
const timeEl = document.getElementById('time');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

let time = 0;
let timer = null;

function updateTime() {
  time += 1;
  let mins = String(Math.floor(time / 60)).padStart(2, '0');
  let secs = String(time % 60).padStart(2, '0');
  timeEl.textContent = `${mins}:${secs}`;
}

startBtn.addEventListener('click', () => {
  timer = setInterval(updateTime, 1000);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  resetBtn.disabled = false;
  phaseEl.textContent = "Inhale";
});

pauseBtn.addEventListener('click', () => {
  clearInterval(timer);
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  phaseEl.textContent = "Paused";
});

resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  time = 0;
  timeEl.textContent = "00:00";
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  resetBtn.disabled = true;
  phaseEl.textContent = "Ready";
});
