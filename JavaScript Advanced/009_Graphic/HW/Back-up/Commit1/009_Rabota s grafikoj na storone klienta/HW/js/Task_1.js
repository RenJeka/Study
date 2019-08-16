window.addEventListener("load", function () {
    var inputsArray = document.getElementsByTagName("input");

//TODO: Перед событием кнопки (onclick)--закешировать  все изображения

    for (let i = 0; i < inputsArray.length; i++) {
        inputsArray[i].addEventListener("click", function () {
           document.myImg.src = inputsArray[i].dataset.src;
        });
    }

});

