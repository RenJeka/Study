window.addEventListener("load", function () {

    var counter = 0;

    // Создаем вывод адресов изображений --циклом
    for ( i = 0; i < document.images.length; i++) {
        document.querySelector('p').innerHTML += document.images[i].src + "</br>";

    }

    // Создаем интервальную функцию для отрисовки рамок
    var setInterval =  window.setInterval(function () {
        
        // создаем перебор элементов через "if"
        if (counter < document.images.length) {

            // Если удовлетворяет условию выше -- задаем рамку
            document.images[counter].style.border = "3px solid red";
            
            //=============ТЕСТ (можно удалить)===
            console.dir(document.images[counter]);
            //====================================

            counter ++;
        }else{
            // Если не удовлетворяет условию -- наш перебор дошел до конца, -- нужно удалить интервальную функцию.
            clearInterval(setInterval);
            counter = 0;
            //=============ТЕСТ (можно удалить)===
            console.log("timer cleaned");
            //====================================
        }
        
    }, 1000)

});