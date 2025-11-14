// Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval. Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.


const boxx = document.querySelector(".box")
let count = 0
 const int = setInterval(() => {
    count+=1
console.log(count);

  
    if (count === 5) {
        console.log("hello");
        clearInterval(int)
}


}, 1000);




// Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, змінюючи їх розмір, положення чи стилі через певний інтервал за допомогою setInterval.



const conte = document.querySelector(".cont")
const conterr = document.querySelector(".conter")


let positiv = 50
let color = 0


const animation = setInterval(() => {
    color+=5
    conte.style.width = color + "px"

    if (color >= 900 ) {
        clearInterval(animation)
    }
}, 100);

const posit = setInterval(() => {
    positiv += 10
    conterr.style.left = positiv + "px"
       conterr.style.top = positiv + "px"
       if (positiv >= 400  ) {
        clearInterval(posit)
       }
}, 450);





// Завдання "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець має натискати на елементи на сторінці протягом певного інтервалу часу, використовуючи setInterval. Реалізуйте лічильник очок та відслідковуйте кількість натисків гравця.







(() => {
  const gameArea = document.getElementById('gameArea');
  const scoreEl = document.getElementById('score');
  const timerEl = document.getElementById('timer');
  const startBtn = document.getElementById('startBtn');

  let score = 0;
  let timeLeft = 10;
  let gameInterval = null;
  let targetInterval = null;

  // --- Створюємо нову ціль ---
  function createTarget() {
    const target = document.createElement('div');
    target.classList.add('target');

    // Випадкове положення
    const maxX = gameArea.clientWidth - 60;
    const maxY = gameArea.clientHeight - 60;
    target.style.left = `${Math.random() * maxX}px`;
    target.style.top = `${Math.random() * maxY}px`;

    // Натискання по цілі
    target.addEventListener('click', () => {
      score++;
      scoreEl.textContent = `Очки: ${score}`;
      target.remove();
    });

    gameArea.appendChild(target);

    // Зникнення через 0.8 с
    setTimeout(() => {
      target.remove();
    }, 800);
  }

  // --- Початок гри ---
  function startGame() {
    score = 0;
    timeLeft = 10;
    scoreEl.textContent = 'Очки: 0';
    timerEl.textContent = 'Час: 10 сек';
    gameArea.innerHTML = '';

    startBtn.disabled = true;
    startBtn.textContent = 'Гра триває...';

    // З’являються цілі
    targetInterval = setInterval(createTarget, 700);

    // Лічильник часу
    gameInterval = setInterval(() => {
      timeLeft--;
      timerEl.textContent = `Час: ${timeLeft} сек`;

      if (timeLeft <= 0) {
        endGame();
      }
    }, 1000);
  }

  // --- Кінець гри ---
  function endGame() {
    clearInterval(targetInterval);
    clearInterval(gameInterval);
    gameArea.innerHTML = '';
    startBtn.disabled = false;
    startBtn.textContent = '🔁 Почати знову';

    alert(`⏰ Гру закінчено! Твій результат: ${score} очок.`);
  }

  // --- Подія кнопки ---
  startBtn.addEventListener('click', startGame);
})();










// Завдання "Контроль часу": Створіть програму, яка дозволяє користувачу встановити певний час (у секундах) за допомогою введення з клавіатури. Потім використовуйте setTimeout або setInterval, щоб після встановленого часу вивести повідомлення.



const text = document.querySelector(".text")

let second = Number (prompt("напиши час"))
if ( isNaN(second)|| second<=0 ) {
text.textContent = "введить правильне число"
 
} else{text.textContent = `таймер працюе${second}`  


 let times =  setInterval(() => {
second -=1
text.textContent = `залишилось${second}`
   if (second ===0) {
   text.textContent = "час выйшов";
    clearInterval(times)
   }
},1000);


}

