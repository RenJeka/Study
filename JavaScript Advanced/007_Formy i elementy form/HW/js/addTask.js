window.addEventListener("load", function () {
    var pMessage = document.getElementById("message");
    var pMessage2 = document.getElementById("message1");
    var arrayOfRadio = [];
    

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
        for (let k = 0; k < document.form1.elements.length; k++) {
            var e = document.form1.elements[k];
            if (e.onchange) {
                e.onchange();
                if (e.className == "invalidInput") {
                    flag =  false;
                }
            }
        }

        return flag && isChecked("radio_1");
    }

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

    function isChecked(group) {

        for (let i = 0; i < document.form1.elements.length; i++) {
            if (document.form1.elements[i].name == group && document.form1.elements[i].type == "radio") {
                
                if (document.form1.elements[i].checked) {
                    return  true;
                }
            }
        }
        pMessage.innerHTML = "Вы не выбрали \"Пол\"";
        return false;

    }
});