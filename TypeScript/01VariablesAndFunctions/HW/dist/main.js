window.addEventListener("load", function () {
    var costSize = 0, chocoFilling = 0, caramelFilling = 0, berriesFilling = 0, marshmellow = 0, flag = true;
    var mainFunc = function () {
        alert("Добрый день! Эта программа позволит Вам расчитать стоимость мороженного");
        var whatSize = prompt("Выберите размер мороженного: 'Маленькое' или '1', 'Большое' или '2'");
        whatSize.toLowerCase;
        if (whatSize == "большое" || whatSize == "2") {
            costSize = 25;
            while (flag) {
                alert("Большое мороженное обязательно дополняется начинкой, какую Вам добавить?");
                if (confirm("Шоколадную?")) {
                    chocoFilling += parseInt(prompt("Сколько?"));
                }
                if (confirm("Карамель?")) {
                    caramelFilling += parseInt(prompt("Сколько?"));
                }
                if (confirm("Ягоды?")) {
                    berriesFilling += parseInt(prompt("Сколько?"));
                }
                flag = confirm("Еще добавить начинки?");
            }
        }
        else if (whatSize == "маленькое" || whatSize == "1") {
            costSize = 10;
        }
        if (confirm("Добавить маршмеллоу?")) {
            marshmellow = 5;
        }
    };
    var calculateIceCream = function (size, chocoFilling, caramelFilling, berriesFilling, marshmellow) {
        var sum = 0;
        sum = size + chocoFilling * 3 + caramelFilling * 6 + berriesFilling * 10 + marshmellow;
        return sum;
    };
    mainFunc();
    alert("\u0421\u0443\u043C\u043C\u0430 \u043A \u043E\u043F\u043B\u0430\u0442\u0435 = " + calculateIceCream(costSize, chocoFilling, caramelFilling, berriesFilling, marshmellow));
});
