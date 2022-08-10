"use strict";


const appData = {
    title: "",
    screens: "",
    screenPrice: 0,
    adaptive: true,
    allServicePrices: 0,
    rollback: 10,
    fullPrice: 0,
    servicePercentPrices: 0,
    service1: "",
    service2: "",
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    asking: function () {
        while (appData.isNumber(appData.title) || appData.title.trim() === "") {
            appData.title = prompt("Как называется ваш проект");
        }
    
        while (appData.isNumber(appData.screens) || appData.screens.trim() === "") {
            appData.screens = prompt("Какие типы экранов нужно разработать?");
        }
    
        do {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?");
        } while (!appData.isNumber(appData.screenPrice));
    
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    getAllServicePrices: function () {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            let price = 0;
            if (i == 0) {
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
                while (appData.isNumber(appData.service1) || appData.service1.trim() === "") {
                    appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
                }
            } else if (i === 1) {
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
                while (appData.isNumber(appData.service2) || appData.service2.trim() === "") {
                    appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
                }
            }
    
            do {
                price = prompt("Сколько это будеть стоить?");
            }
            while (!appData.isNumber(price))
            
            sum += +price
        }
        return sum;
    },
    getFullPrice: function () {
        return +appData.screenPrice + appData.allServicePrices;
    },
    getServicePercentPrices: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    getTitle: function () {
        return appData.title.substr(0, 1).toUpperCase() + "" + appData.title.substr(1).toLowerCase();
    },
    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return "Даем скидку 10%"
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку 5%"
        } else if (price >= 0 && price < 15000) {
            return "Скидка не предусмотрена"
        } else {
            return "Что то пошло не так"
        }
    },
    logger: function (str) {
        console.log(str);
    },
    start: function () { 
        appData.asking();
        appData.getAllServicePrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();
        appData.getRollbackMessage();
        appData.logger();
    },
}
appData.start();
for (let key in appData) {
    appData.start(appData.logger(appData[key]));
}


