window.addEventListener("load", function () {

    // Создаем переменные для кнопки "отправить", для контейнера анимации, и массив полей ввода. 
    var btnSend = document.getElementById("btn_1");
    var animationConteiner = document.getElementById("animationConteiner")
    var inputs = document.form1.elements;
    var flag = true;
    

    // БЛОК ВАЛИДАЦИИ ФОРМЫ 
    for (var i = 0; i < inputs.length ; i++) {
        inputs[i].addEventListener("change", function () {
            
            // ♦ Не понимаю, почему нельзя поставить вместо "this" — inputs[i]  .  Почему в inputs[i]  не подставляеться индекс того элемента, на котором сработал обработчик (change)

            // Проверка для того, чтобы валидацию проходили только текстовые поля
            if (this.type == "text") {
                var pattern = this.getAttribute("data-pattern");
                var message = this.getAttribute("data-message");
                var outputWarning = document.getElementById(this.getAttribute("data-id"));

                // результат проверки введенного значение в поле ввода на паттерн (заготовка находиться в HTML - теге)
                var result = this.value.search(pattern);

                // Если поле пустое — вывести заготовленное сообщение (заготовка находиться в HTML - теге)
                if (this.value == "") {
                    outputWarning.innerHTML = message;

                    // Тут мы впервые создаем поле "validation" в текущем (заполняемом поле), которое указывает на валидное заполнение или нет. В данном случае если поле пустое — значение не валидное
                    this.validation = false;
                    // continue;
                }else if (result == -1) {  // проверка на соответствие паттерна — вводимому значению. Если не соответствует —вывести сообщение
                    outputWarning.innerHTML = "Неправильный формат данных";
                    this.validation = false;
                }else{ // Если введены правильные данные — очистить поле ввода
                    outputWarning.innerHTML = "";
                    this.validation = true;
                }
            }
        });
    }

    // Функция, которая проверяет все поля валидации (inputs[j].validation) в каждом инпуте. 
    function fFieldValidation() {

        // Временная переменная проверки валидации всей формы —"tempFlag" изначально она в позиции "true", но если хотя-бы одно поле inputs[j].validation не прошло валидацию — вся форма не прошла валидацию "tempFlag = false"
        var tempFlag = true;

        for (let j = 0; j < inputs.length; j++) {

            if (inputs[j].validation == false) {
                tempFlag = false;
            }
        }
        flag = tempFlag;
    }

    // Обработчик на нажатие: проверяет поля ввода на правильность вводимых значений, отправляет данные на сервер с помощью AJAX и возвращает результат
    btnSend.addEventListener("click", function () {
        //TODO Как принудительно запустить "inputs[i].addEventListener("change",..." —? (для того, чтобы когда пользователь ничего не ввел и нажал на кнопку — тут форма принудительно прошла блок валидации )

        var myEvent = new Event("change");
        var k;

        for (k = 0; k < inputs.length ; k++) {
            inputs[k].dispatchEvent(myEvent);
        }

        // Запуск функции проверки полей валидации
        fFieldValidation();

        // БЛОК ОТПРАВКИ НА СЕРВЕР
        if (flag) { // Проверка - если поля ввода заполнены правильно — тогда будет отправка на сервер 

            // Включение анимации
            animationConteiner.style.display = "block";
            // Создание и настройка объекта "XMLHttpRequest"
            var myXHR = new XMLHttpRequest();
            myXHR.open("POST", "../CalcHandler.ashx", false );
        
            // ♦ Не понимаю, зачем нужна настройка заголовков
            myXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        
            // Обработка событий на "при изменение параметра "readyState""
            myXHR.onreadystatechange = function () {

                // Проверка, успешно ли пришел ответ от сервера
                if (myXHR.readyState == 4 && myXHR.status == 200) {
                    animationConteiner.style.display = "none";
                    document.getElementById("output").innerHTML += myXHR.responseText + "</br>";
                }
            }
            // Отправка данных на сервер
            myXHR.send("a=" + document.form1.input_a.value +"&"  + "b=" + document.form1.input_b.value);
        }  
    });
});