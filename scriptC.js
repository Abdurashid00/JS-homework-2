let A, B, C;

A = Number(prompt('Введите первое число: '));
B = Number(prompt('Введите второе число: '));
C = Number(prompt('Введите третье число: '));

if ((A > B && A < C) || (A > C && A < B)) {
    alert(`Среднее число: ${A}`);
} else if ((B > A && B < C) || (B > C && B < A)) {
    alert(`Среднее число: ${B}`);
} else {
    alert(`Среднее число: ${C}`);
}
