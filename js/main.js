const startSection = document.querySelector('.start-js');
const startForm = document.querySelector('.start-form-js');
// const startGameBtn = document.querySelector('.start-game-btn-js');
const waitingSection = document.querySelector('.waiting-js');

const timer = document.querySelector('.timer-js');


const startTimer = () => {
    // Устанавливаем начальное время в 0 минут и 0 секунд
    const startTime = new Date().getTime();
    console.log(startTime)

    // Обновляем таймер каждую секунду
    setInterval(() => {
        // Получаем текущее время
        const now = new Date().getTime();

        // Вычисляем прошедшее время
        const elapsedTime = now - startTime;

        // Вычисляем минуты и секунды
        const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

        // Добавляем нули перед однозначными числами
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

        timer.textContent = `${formattedMinutes}:${formattedSeconds}`;
    }, 1000);
};

startForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    startSection.style.position = 'fixed';
    startSection.style.transform = 'scale(0)';
    waitingSection.style.position = 'static';
    waitingSection.style.transform = 'none';

    startTimer();
});



// .visually-hidden {
//     position: fixed;
//     transform: scale(0);
// }
