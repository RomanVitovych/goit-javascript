const timeDays = document.querySelector('[data-value="days"]');
const timeHours = document.querySelector('[data-value="hours"]');
const timeMins = document.querySelector('[data-value="mins"]');
const timeSec = document.querySelector('[data-value="secs"]');

class CountdownTimer {
    constructor(obj) {
        this.selector = obj.selector;
        this.targetDate = obj.targetDate;
        this.deltaTime = 0;
    }
    start() {
        const startTime = this.targetDate;
        console.log(startTime);
        this.timerId = setInterval(() => {
            const currentTime = Date.now();
            // console.log(currentTime);
            this.deltaTime = startTime - currentTime;
            // console.log(this.deltaTime);
            this.updateClockFace(this.deltaTime);
        }, 1000);
    }

    updateClockFace(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        timeDays.textContent = days;
        timeHours.textContent = hours;
        timeMins.textContent = mins;
        timeSec.textContent = secs;
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Aug 17, 2020'),
  });
  timer.start();

//   Для підрахунку значень використовуй такі готові формули, де time - різниця між targetDate і поточною датою.
  
  /*
   * Дні, що залишилися: ділимо значення UTC на 1000 * 60 * 60 * 24, кількість
   * мілісекунд в один день (мілісекунди * секунди * хвилини * години)
   */
//   const days = Math.floor(time / (1000 * 60 * 60 * 24));
  
  /*
   * Решта годин: отримуємо залишок від попереднього розрахунку за допомогою оператора
   * залишку% і ділимо його на кількість мілісекунд в одній годині
   * (1000 * 60 * 60 = мілісекунди * хвилини * секунди)
   */
//   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  /*
   * Решта хвилин: отримуємо хвилини, що залишилися і ділимо їх на кількість
   * мілісекунд в одній хвилині (1000 * 60 = мілісекунди * секунди)
   */
//   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  
  /*
   * Решта секунд: отримуємо секунди, які залишилися і ділимо їх на кількість
   * миллисекунд в одной секунде (1000)
   */
//   const secs = Math.floor((time % (1000 * 60)) / 1000);