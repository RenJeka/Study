window.addEventListener("load", function () {
    var pMessage = document.getElementById("message");
    var pMessage2 = document.getElementById("message1");
    var arrayOfRadio = [];
    

    // Ставим на событие "onchange" обработчик события на каждый элемент формы.
    this.document.form1.fName.onchange = function () {
        validate(this, /[a-zA-Zа-яА-Я-]/);
    }
    this.document.form1.lName.onchange = function () {
        validate(this, /[a-zA-Zа-яА-Я-]/);
    }
    this.document.form1.login.onchange = function () {
        validate(this, /\S/);
    }
    this.document.form1.pass.onchange = function () {
        confirm(validate(this, /\S/),document.form1.pass,document.form1.passConfirm);
    }
    this.document.form1.passConfirm.onchange = function () {
        confirm(validate(this, /\S/),document.form1.pass,document.form1.passConfirm);
    }
    this.document.form1.email.onchange = function () {
        validate(this, /\b[a-z0-9._]+@[a-z0-9._]+\.[a-z]{2,4}\b/i);
    }

    this.document.form1.submit.onclick = function () {


        var flag = true;

        // Перебираем все элементы формы
        for (let k = 0; k < document.form1.elements.length; k++) {
            var e = document.form1.elements[k];

            // Если элелмент имеет обработчик на событие "onchange"
            if (e.onchange) {

                // Запускаем принудительно событие "onchange"
                e.onchange();
                if (e.className == "invalidInput") {
                    flag =  false;
                }
            }
        }

        return flag && isChecked("radio_1");
    }

    /**
     * Функция, которая валидирует <element> на соответствие паттерну <pattern>
     * @param {object} element 
     * @param {string} pattern 
     * @returns {boolean} true, если элемент прошел валидацию,  false -- если не прошел валидацию
     */
    function validate(element, pattern) {
        if (element.value.search(pattern) == -1) {
            // Как можно достучаться к лейблу ?
            // var currentLabel = document.form1.label
            // currentLabel.for.element.innerHTML = "Вы неправильно заполнили это поле!";

            pMessage.innerHTML = "Вы неправильно что-то заполнили!"
            element.className = "invalidInput";
            return false;
        }else{
            element.className = "validInput";
            return true;
        }
    }

    /**
     * Функция проверяет на равенство значений 2 элементов <element1> и  <element2>
     * @param {boolean} flag  Является ли элементы изначально валидными (есть ли смысл их проверять на равенство)
     * @param {object} element1 DOM-элемент 1 (input-1)
     * @param {object} element2 DOM-элемент 2 (input-2)
     */
    function confirm(flag,element1,element2) {
        if (flag) {
            if (element1.value != element2.value) {
                pMessage2.style.display = "block";
                pMessage2.innerHTML = "Поле \"Пароль\" и \"Подтверждение пароля\" должны совпадать!";
                element1.className = "invalidInput";
                element2.className = "invalidInput";
            }else{
                element1.className = "validInput";
                element2.className = "validInput";
                pMessage2.innerHTML = "";
            }
        }else{
            element1.className = "invalidInput";
            element2.className = "invalidInput";
            pMessage.innerHTML = "";
        }

    }

    /**
     * Функция проверяет все радиокнопки определенной группы на наличие отмеченной радиокнопки
     * @param {object} group Группа радиокнопок для проверки
     * @returns {boolean} true, если выбранная радиокнопка , false если ни одна радиокнопка не выбрана.
     */
    function isChecked(group) {

        // Перебор всех радиокнопок
        for (let i = 0; i < document.form1.elements.length; i++) {
            if (document.form1.elements[i].name == group && document.form1.elements[i].type == "radio") {
                
                // Проверка, если есть значение checked == true у данной радиокнопки
                if (document.form1.elements[i].checked) {
                    return  true;
                }
            }
        }
        pMessage.innerHTML = "Вы не выбрали \"Пол\"";
        return false;
    }
});