window.addEventListener("load", function(){
    var imagesArray = document.getElementsByTagName("img");
    var btn_close = document.querySelector(".btn-close");
    var overlay = document.querySelector(".overlay");
    var modalWindow = document.querySelector(".modal");
    var body = document.querySelector("body");
    var isModalOpen = false; 
    var modalImageHeight = 0;
    var modalImageWidth = 0;


    //  Основной обработчик событий ( клика на картинку) через перебор массива изображений. (Тренировочный вариант без использования "this")
    for (let i = 0; i < imagesArray.length; i++) {
        
        // Хватаем нужную картинку перебором массива и создаем обработчик при клике.
        imagesArray[i].addEventListener("click", function () {

            // Эта переменная нужна для позиционирования модального окна посредине
            var tempOverlayHeight;

            // Показываем оверлей (внешнее серое окно) и задаем отступ сверху.
            overlay.style.display = "block";
            overlay.style.top = getMaxHeight() + 10+ "px";

            // Вычисляем размер модального окна (размер внутренего изображзения)— ширину (modalImageWidth) и высоту (modalImageHeight)
            countSize(imagesArray[i]);

            // Устанавливаем размер (высоту) оверлея
            tempOverlayHeight = modalImageHeight *1.15;
            overlay.style.height = tempOverlayHeight + "px";

            //Вписываем картинку в модальное окно — бэкграундом
            modalWindow.style.background = "url(" + imagesArray[i].src + ") no-repeat" ;
            modalWindow.style.backgroundSize = "cover";
            
            // Устанавливаем размер модального окна
            modalWindow.style.height = modalImageHeight + "px";
            modalWindow.style.width = modalImageWidth + "px";

            // Позиционируем модальное окно по центру оверлея (с помощью верхнего отступа)
            modalWindow.style.top =(tempOverlayHeight-modalImageHeight)/2 + "px";
            isModalOpen = true;

        });
    }

    // Функция подсчитывает максимальную высоту маленьких изображений, чтобы сделать правильный отступ появляющегося окна "overlay" от верхнего края.
    function getMaxHeight() {
        var maxHeight = imagesArray[0].height;
        for (j = 0; j< imagesArray.length; j++) {
            if (imagesArray[j].height > maxHeight) {
                maxHeight = imagesArray[j].height;
            }
        }
        return maxHeight;
    }

    // Функция, которая подсчитует размер изображения, которое будет  вписано (в качестве бекграунда) в модальное окно.
    function countSize(image) {

        var imageNatureHeight = image.naturalHeight;
        var imageNatureWidth = image.naturalWidth;
        var ratio;

        // Вычисляем размер изображения с помощью отношения экрана и самого изображения. Коефиц. "0.65" нужен, чтобы учесть отступы окна браузера и.т.п. 
        // Я не разобрался, как можно решить это через размер окна браузера ("window.innerHeight")
        ratio = (screen.height / imageNatureHeight)*0.65;
        modalImageWidth = imageNatureWidth*ratio;
        modalImageHeight = imageNatureHeight*ratio;

    }

    // Этот обработчик клика по "body" (области вокруг появившегося окна) — закрывает все дополнительное окно (overlay + modalWindow) 
    body.addEventListener("click", function (e) {

        // Проверка — если модальное окно открыто, и мы нажали не на "overlay", и не на "modal" — тогда закрыть окно.
        // Разобраться с функцией "e.target.classList.contains('overlay')" — что это такое и зачем она используеться
        if (isModalOpen == true && !e.target.classList.contains('overlay') && !e.target.classList.contains('modal')) {
            overlay.style.display = "none";
            isModalOpen = false;
            
        }
        
    }, true);

    // Обработчик на нажатие по кнопке "Х" — сверху справа оверлея.
    btn_close.addEventListener("click",function () {
        overlay.style.display = "none";
        isModalOpen = false;
    });
});