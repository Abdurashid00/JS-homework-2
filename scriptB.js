let time = Number(prompt("Введите время в часах (от 0 до 23):"));

if (time >= 0 && time <= 6) {
    alert(`${time} часа(ов) ночи`);
} else if (time >= 7 && time <= 10) {
    alert(`${time} часов утра`);
} else if (time >= 11 && time <= 17) {
    let afternoonHour = time - 12; 
    alert(`${afternoonHour} часа(ов) дня`);
} else if (time >= 18 && time <= 23) {
    let eveningHour = time - 12; 
    alert(`${eveningHour} часа(ов) вечера`);
} else {
    alert("Введите корректное время от 0 до 23");
}
