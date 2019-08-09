window.addEventListener("load", function () {
    var watermark = {}

    watermark.add = function (element, text) {
        var element = element;
        var text = text;
        blur()
        
        element.addEventListener("blur", blur);

        function blur() {
            if (element.value == "" ) {
                if (element.type == "password" || element.inpast == "pass") {

                    element.setAttribute("inpast", "pass")
                    element.type= "text"
                    element.value = text;
                    element.style.color = "gray";
                    element.style.fontStyle = "italic";
                    return;
                }

                element.value = text;
                element.style.color = "gray";
                element.style.fontStyle = "italic";
            }
        }

        element.addEventListener("focus", function () {
            if (element.value == text ) {
                if (element.type == "text" && element.attributes.inpast) {
                    
                    element.type= "password"
                    element.value = "";
                    element.style.color = "black";
                    element.style.fontStyle = "normal";
                    return;
                }

                element.value = "";
                element.style.color = "black";
                element.style.fontStyle = "normal";
            }
        });
    }
    watermark.add (document.form1.login,"Введите логин")
    watermark.add (document.form1.pass, "Введите пароль")
});