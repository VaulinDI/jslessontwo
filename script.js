// Задача 1
let num1 = prompt('Введите число num1');
let num2 = prompt('Введите число num2');
alert((num1 <= 1) ? 'num1 удовлетворяет условиям' : 'num1 не удовлетворяет условиям');
alert((num2 >= 3) ? 'num2 удовлетворяет условиям' : 'num2 не удовлетворяет условиям');

// Задача 2
let test = true;
alert((test === true) ? '+++' : '---');

// Задача 3
let day = Number(prompt('Введите число месяца'));
alert((day <= 10 && day >= 1) ? 'Первая декада месяца' : (day <= 20 && day >= 11) ? 'Вторая декада месяца' : (day <= 31 && day >= 21) ? 'Третья декада месяца' :  'Такого числа месяца не бывает');

// Задача 4
let number = Number(prompt('Введите число'));
alert(`количество сотен: ${(number - ((number - number % 10) / 10 % 10 * 10) - (number % 10)) / 100 % 10}, десятков: ${(number - number % 10) / 10 % 10}, единиц: ${number % 10}`);