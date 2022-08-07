"use strict";
// 6
let title = prompt("Как называется ваш проект");
console.log(title);
let screens = prompt("Какие типы экранов нужно разработать?");
console.log(screens);
let screenPrice = +prompt("Сколько будет стоить данная работа?");
console.log(screenPrice);
let adaptive = prompt("Нужен ли адаптив на сайте?");
console.log(adaptive);

// 7
let service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);
let servicePrice1 = +prompt("Сколько это будеть стоить?");
console.log(servicePrice1);
let service2 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service2);
let servicePrice2 = +prompt("Сколько это будеть стоить?");
console.log(servicePrice2);

const getAllServicePrices = function (servicePrice1, servicePrice2) {
    return servicePrice1 + servicePrice2;
};
const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
console.log(allServicePrices);

function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;
}

const fullPrice = getFullPrice(screenPrice, allServicePrices);
console.log(fullPrice);

const getTitle = function (title) {
    return title.substr(0, 1).toUpperCase() + "" + title.substr(1).toLowerCase();
};
console.log(getTitle(title));


// 10

const getServicePercentPrices = function (fullPrice) {
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

console.log(getServicePercentPrices(fullPrice));

function showTypeOf(screens) {
    return typeof screens;
}

console.log(showTypeOf(screens));

function getRollbackMessage(message) {
    return message;
}

console.log(getRollbackMessage("Вам скидка!"));