window.addEventListener("load", function () {
    var btn_1 = this.document.getElementById("btn_1");
    var output = this.document.querySelector("p");

    // массив адресов файлов на сервере. Требуется чтобы в последствии перебрать и на каждом адресе запустить новый XMLHttpRequest.
    var arrayOfLinks =  ["../add_Task_HTML/html1.html","../add_Task_HTML/html2.html"];

    btn_1.addEventListener("click", function () {
        
        // Создаем запросы через перебор всех ссылок файлов на сервере (через массив, в котором хранятся адреса файлов на сервере)
        for (let i = 0; i < arrayOfLinks.length; i++) {

            //При каждой иттерации цикла создаем новый запрос xhr
            let xhr = new XMLHttpRequest();
            xhr.open("GET", arrayOfLinks[i]);
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    output.innerHTML += xhr.responseText;
                }
            }
        }

    });

});