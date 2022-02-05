'use strict';

let number = 15;
let sayNumber;
let count;
let question;

const isNumber = function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));
}

const bot = function (number) {
    sayNumber = prompt("Угадай число от 1 до 100");
    count = 3;

    const guess = function () {
        if (sayNumber == number) {
            question = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
            if (question == true) {
                count = 10;
                bot();
            } else {
                return false;
            }


        } else if (sayNumber > number) {
            if(count <= 1) {
                alert('Игра окончена');
            } else {
                sayNumber = prompt(`Загаданное число меньше, осталось попыток ${count = --count}`);
                guess();
            }

        } else if (sayNumber > 0 && sayNumber < number) {
            if(count <= 1) {
                alert('Игра окончена');
            } else {
                sayNumber = prompt(`Загаданное число больше, осталось попыток ${count = --count}`);
                guess();
            }

        } else if(sayNumber === null) {
            alert('Игра окончена');
        } else if(isNumber(sayNumber) == false) {
            sayNumber = prompt("Введи число!");
            sayNumber = +sayNumber;
            guess();
        }
    }
    guess();
}

bot(number);