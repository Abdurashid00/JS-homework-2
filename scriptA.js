let age = Number(prompt("Введите ваш возраст"));

if (age > 0 && age < 18) {
    alert("Вы молоды, вам нужно учиться");
} else if (age >= 18 && age <= 50) {
    alert("Вам нужно работать");
} else if (age > 50 && age <= 59) {
    alert("Вы скоро выйдете на пенсию");
} else if (age >= 60 && age <= 100) {
    alert("Вы на пенсии");
} else {
    alert("Что-то пошло не так");
}