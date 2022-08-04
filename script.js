"use strict";
// до 6
// let title = prompt("Как называется ваш проект");
// console.log(title);
// let screens = prompt("Какие типы экранов нужно разработать?");
// console.log(screens);
// let screenPrice = +prompt("Сколько будет стоить данная работа?");
// console.log(screenPrice);
// let adaptive = prompt("Нужен ли адаптив на сайте?");
// console.log(adaptive);

// // 7
// let service1 = prompt("Какой дополнительный тип услуги нужен?");
// console.log(service1);
// let servicePrice1 = +prompt("Сколько это будеть стоить?");
// console.log(servicePrice1);
// let service2 = prompt("Какой дополнительный тип услуги нужен?");
// console.log(service2);
// let servicePrice2 = +prompt("Сколько это будеть стоить?");
// console.log(servicePrice2);

// const getAllServicePrices = function(servicePrice1, servicePrice2) {
//     return servicePrice1 + servicePrice2;
// }
// const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
// console.log(allServicePrices);

// function getFullPrice(screenPrice, allServicePrices) {
//     return screenPrice + allServicePrices;
// }

// const fullPrice = getFullPrice(screenPrice, allServicePrices);
// console.log(fullPrice);
let title = " КаЛьКулятор Верстки";
console.log(title.toLowerCase());

const getTitle = function (title) {
    console.log(title.toLowerCase().title.toUpperCase(0));
}

getTitle(" КаЛьКулятор Верстки");

// 10
// if (fullPrice >= 30000) {
//     console.log("Даем скидку 10%");
// } else if (fullPrice => 15000 && fullPrice <= 30000) {
//     console.log("Даем скидку 5%");
// } else if (fullPrice => 0 && fullPrice <= 15000) {
//     console.log("Скидка не предусмотрена");
// } else {
//     console.log("Что-то пошло не так");
// }

