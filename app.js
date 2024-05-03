
let timer;
  let seconds = 0;
  let minutes = 0;
  let hours = 0;

  function updateTime() {
    seconds++;

    if (seconds / 60 === 1) {
      seconds = 0;
      minutes++;

      if (minutes / 60 === 1) {
        minutes = 0;
        hours++;
      }
    }

    const display = document.querySelector('.display');
    display.textContent = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }

  document.getElementById('startStop').addEventListener('click', function() {
    const btn = document.getElementById('startStop');

    if (btn.textContent === 'Start') {
      btn.textContent = 'Stop';
      timer = setInterval(updateTime, 1000);
    } else {
      btn.textContent = 'Start';
      clearInterval(timer);
    }
  });

  document.getElementById('reset').addEventListener('click', function() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    const display = document.querySelector('.display');
    display.textContent = '00:00:00';
    document.getElementById('startStop').textContent = 'Start';
  });