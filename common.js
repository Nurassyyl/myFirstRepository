const person = {
    title: "Hello",
    age: 22,
    logger: function (str) {
        console.log(str);
    },
    start: function () {
        person.logger()
    }
}

for (let key in person) {
    person.start(person.logger(key + " " + person[key]));
}