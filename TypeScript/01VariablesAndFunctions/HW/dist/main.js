window.addEventListener("load", function () {
    var costSize = 0, chocoFilling = 0, caramelFilling = 0, berriesFilling = 0, fillingsLimit = 15, marshmallow = 0, costFillings = 0, moreFilling = true, totalFillings = 0, inCorrectFilling;
    var mainFunc = function () {
        alert("Добрый день! Эта программа позволит Вам расчитать стоимость мороженного");
        var whatSize = prompt("Выберите размер мороженного: 'Маленькое' или '1', 'Большое' или '2'");
        whatSize.toLowerCase;
        if (whatSize == "большое" || whatSize == "2") {
            costSize = 25;
            alert("Большое мороженное обязательно дополняется начинкой от 1 до " + fillingsLimit + ", какую Вам добавить?");
            while (moreFilling) {
                if (confirm("Шоколадную?")) {
                    do {
                        chocoFilling = prompt("Сколько шоколадной начинки?", "0");
                        costFillings += fillingFix(chocoFilling) * 5;
                    } while (inCorrectFilling);
                }
                if (confirm("Карамель?")) {
                    do {
                        caramelFilling = prompt("Сколько карамельной начинки?", "0");
                        costFillings += fillingFix(caramelFilling) * 6;
                    } while (inCorrectFilling);
                }
                if (confirm("Ягоды?")) {
                    do {
                        berriesFilling = prompt("Сколько наяинки с ягодами?", "0");
                        costFillings += fillingFix(berriesFilling) * 10;
                    } while (inCorrectFilling);
                }
                if (costFillings == 0) {
                    alert("Вы должны выбрать минимум 1 начинку. Давайте попробуем еще раз");
                    moreFilling = true;
                    continue;
                }
                moreFilling = confirm("Еще добавить начинки?");
            }
        }
        else if (whatSize == "маленькое" || whatSize == "1") {
            costSize = 10;
        }
        if (confirm("Добавить маршмеллоу?")) {
            marshmallow = 5;
        }
    };
    function fillingFix(filling) {
        if (filling === null || filling == "") {
            inCorrectFilling = false;
            filling = 0;
            return filling;
        }
        else {
            filling = parseInt(filling);
            if (isNaN(filling)) {
                alert("Введите число!");
                inCorrectFilling = true;
                filling = 0;
                return filling;
            }
            else {
                totalFillings += filling;
                console.log(totalFillings);
                if (totalFillings > fillingsLimit) {
                    inCorrectFilling = true;
                    alert("Слишком много начинки! Вы что!?");
                    totalFillings -= filling;
                    filling = 0;
                    return filling;
                }
                else {
                    inCorrectFilling = false;
                    return filling;
                }
            }
        }
    }
    var calculateIceCream = function (size, chocoFilling, caramelFilling, berriesFilling, marshmallow) {
        var sum = 0;
        sum = size + costFillings + marshmallow;
        return sum;
    };
    mainFunc();
    alert("\u0421\u0443\u043C\u043C\u0430 \u043A \u043E\u043F\u043B\u0430\u0442\u0435 = " + calculateIceCream(costSize, chocoFilling, caramelFilling, berriesFilling, marshmallow) + " \u0433\u0440\u043D");
});
