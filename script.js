// Задание 1
// Вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
// Сообщение номер 1
// Сообщение номер 2
// Сообщение номер 3
// Сообщение номер 4
// Сообщение номер 5
const counter = () => {
  let count = 1;
  return (message = () => {
    return count++;
  });
};
const getMessage = counter();
const interval = setInterval(() => {
  console.log(`Message number ${getMessage()}`);
}, 2000);
setTimeout(() => {
  clearInterval(interval);
}, 10000);

// Задание 2
// Сделать виджет - цифровые часы, оформить по желанию.
// Вам нужно будет каждую секунду запускать функцию, которая будет создавать новый объект Date и забирать из него необходимую информацию.
const hoursArrow = document.querySelector(".arrow-hours");
const minutesArrow = document.querySelector(".arrow-minutes");
const secondsArrow = document.querySelector(".arrow-seconds");

const setSeconds = () => {
  const seconds = new Date().getSeconds();
  return `${seconds * 6}deg`;
};
const setMinutes = () => {
  const minutes = new Date().getMinutes();
  return minutes;
};
const setHours = () => {
  const hours = new Date().getHours();
  if (hours >= 12) {
    return `${hours * 30 - 360 + setMinutes() * 0.5}deg`;
  }
  return `${hours * 30 + setMinutes() * 0.5}deg`;
};

const parseTime = () => {
  hoursArrow.style.rotate = setHours();
  minutesArrow.style.rotate = `${setMinutes() * 6}deg`;
  secondsArrow.style.rotate = setSeconds();
};
setInterval(parseTime, 1000);

// Цифровые часы
const hoursContainer = document.querySelector(".clock-hours");
const minutesContainer = document.querySelector(".clock-minutes");
const secondsContainer = document.querySelector(".clock-seconds");

const setHoursDigital = () => {
  const hours = new Date().getHours();
  if (hours < 10) {
    return `0${hours}`;
  }
  return hours;
};
const setMinutesDigital = () => {
  const minutes = new Date().getMinutes();
  if (minutes < 10) {
    return `0${minutes}`;
  }
  return minutes;
};
const setSecondsDigital = () => {
  const seconds = new Date().getSeconds();
  if (seconds < 10) {
    return `0${seconds}`;
  }
  return seconds;
};

const parseTimeDigital = () => {
  hoursContainer.textContent = setHoursDigital();
  minutesContainer.textContent = setMinutesDigital();
  secondsContainer.textContent = setSecondsDigital();
};
setInterval(parseTimeDigital, 1000);
