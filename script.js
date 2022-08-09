"use strict";

let title;
let screens;
let screenPrice;
let adaptive;
let allServicePrices;
let service1;
let service2;
let fullPrice;
let getServicePercentPrices;

const isString = function (Str) {
    if (typeof Str === typeof "") {
        return "Str";
    }
};

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};


const asking = function () {
    title = prompt("Как называется ваш проект");
    while (isNumber(title) || title.trim() === "") {
        title = prompt("Как называется ваш проект");
    }

    screens = prompt("Какие типы экранов нужно разработать?");
    while (isNumber(screens) || screens.trim() === "") {
        screens = prompt("Какие типы экранов нужно разработать?");
    }

    screenPrice = prompt("Сколько будет стоить данная работа?");
    do {
        screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(screenPrice));

    adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
    let sum;
    for (let i = 0; i < 2; i++) {
        if (i == 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?");
            while (isNumber(service1) || service1.trim() === "") {
                service1 = prompt("Какой дополнительный тип услуги нужен?");
            }
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?");
            while (isNumber(service2) || service2.trim() === "") {
                service2 = prompt("Какой дополнительный тип услуги нужен?");
            }
        }

        sum += prompt("Сколько это будеть стоить?");
        while (!isNumber(sum) || sum.trim() === "") {
            sum = prompt("Сколько это будеть стоить?");
        }
    }
    return sum;
};



function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;
};

getServicePercentPrices = function (fullPrice) {
    if (fullPrice >= 30000) {
        return fullPrice - (fullPrice * 10 / 100);
    } else if (fullPrice => 15000 && fullPrice <= 30000) {
        return fullPrice - (fullPrice * 5 / 100);
    } else if (fullPrice => 0 && fullPrice <= 15000) {
        return fullPrice;
    } else {
        console.log("Что-то пошло не так");
    }
};

const getTitle = function (title) {
    return title.substr(0, 1).toUpperCase() + "" + title.substr(1).toLowerCase();
};

function showTypeOf(screens) {
    return typeof screens;
}

function getRollbackMessage(message) {
    return message;
}

console.log(asking());
allServicePrices = console.log(getAllServicePrices());
parseFloat(allServicePrices);
console.log(allServicePrices);
fullPrice = getFullPrice(screenPrice, allServicePrices);
console.log(fullPrice);
console.log(getServicePercentPrices(fullPrice));
console.log(getTitle(title));
console.log(showTypeOf(screens));

console.log(getRollbackMessage("Вам скидка!"));