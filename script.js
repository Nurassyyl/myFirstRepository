let title = "My first repository";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 123;
let rollback = 99;
let fullPrice = 10000000000;
let adaptive = true;

console.log(typeof title);
console.log(typeof screens);
console.log(typeof screenPrice);
console.log(screens.length)
console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "рублей/ долларов/гривен/юани");
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "рублей / долларов / гривен / юани");
console.log(screens.toLowerCase());
console.log(screens.split(", "));
console.log(fullPrice * (rollback / 100));