'use strict';

let admin
let name = 'Джон';
    admin = name;
alert(admin);

let newyear = 2024;
let city = prompt('Введите название города', 'Мюнхен');
let yearcreate = prompt('Введите год образования', '2024');
let peoples = prompt('Напишите численность населения города', '10000');
alert(`Городу ${city} исполнилось ${newyear - yearcreate} лет с момента его образования. ${peoples} человек `);

let r = prompt('Введите радиус круга', 3);
let p = 3.14;
let s = p * (r * r);
alert(`Площадь круга ${s}`);

let number1 = +prompt('Введите первое число', 10);
let number2 = +prompt('Введите второе число', 5);
alert(`Разность ${number1 - number2}, сумма ${number1 + number2}, частное ${number1 / number2}, произведение ${number1 * number2}`);