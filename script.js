'use strict';

let number = 15;
let sayNumber;

const isNumber = function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));
}

const bot = function (number) {
    sayNumber = prompt("Угадай число от 1 до 100");
    const guess = function () {
        if (sayNumber == number) {
            alert('Поздравляю, Вы угадали!!!');
            console.log('Поздравляю, Вы угадали!!!');
        } else if (sayNumber > number) {
            console.log('Загаданное число меньше');
            sayNumber = prompt("Загаданное число меньше. Введите другое число от 1 до 100");
            guess();
        } else if (sayNumber > 0 && sayNumber < number) {
            console.log('Загаданное число больше');
            sayNumber = prompt("Загаданное число больше. Введите другое число от 1 до 100");
            guess();
        } else if(sayNumber === null) {
            alert('Игра окончена');
            console.log('Игра окончена');
        } else if(isNumber(sayNumber) == false) {
            console.log('Введи число!');
            sayNumber = prompt("Введи число!");
            guess();
        }
    }
    guess();
}

bot(number);