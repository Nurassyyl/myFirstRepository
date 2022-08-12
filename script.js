"use strict";


const appData = {
    title: "",
    screens: [],
    screenPrice: 0,
    adaptive: true,
    allServicePrices: 0,
    rollback: 10,
    fullPrice: 0,
    servicePercentPrices: 0,
    services: {},
    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();
        appData.getRollbackMessage();

        appData.logger();
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    asking: function () {
        while (appData.isNumber(appData.title) || appData.title.trim() === "") {
            appData.title = prompt("Как называется ваш проект");
        }

        for (let i = 0; i < 2; i++) {
            let name = prompt("Какие типы экранов нужно разработать?");
            let price = 0;
            while (appData.isNumber(name) || name.trim() === "") {
                name = prompt("Какие типы экранов нужно разработать?");
            }

            do {
                price = prompt("Сколько будет стоить данная работа?");
            } while (!appData.isNumber(price));

            appData.screens.push({ id: i, name: name, price: price });
        }

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");

        for (let i = 0; i < 2; i++) {
            let name = prompt("Какой дополнительный тип услуги нужен?");
            let price = 0;

            while (appData.isNumber(name) || name.trim() === "") {
                name = prompt("Какие типы экранов нужно разработать?");
            }

            do {
                price = prompt("Сколько это будеть стоить?");
            }
            while (!appData.isNumber(price));

            appData.services[name] = +price;
        }

    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }
        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },
    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrices = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    getTitle: function () {
        appData.title = appData.title.substr(0, 1).toUpperCase() + "" + appData.title.substr(1).toLowerCase();
    },
    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return "Даем скидку 10%";
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку 5%";
        } else if (price >= 0 && price < 15000) {
            return "Скидка не предусмотрена";
        } else {
            return "Что то пошло не так";
        }
    },
    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrices);
        console.log(appData.screens);
    },
};

appData.start();



