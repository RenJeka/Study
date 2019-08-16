window.addEventListener("load", function(){
    var imagesArray = document.getElementsByTagName("img");
    var btn_close = document.querySelector(".btn-close");
    var overlay = this.document.querySelector(".overlay");
    var modalWindow = this.document.querySelector(".modal");
    var body = this.document.querySelector("body");
    var isModalOpen = false; 

    
    for (let i = 0; i < imagesArray.length; i++) {
        imagesArray[i].addEventListener("click", function () {
            // console.log(imagesArray[i].src);


            overlay.style.display = "block";
            overlay.style.height = imagesArray[i].naturalHeight;
            
            // ♦ Как решить проблемму с размером изображения. Размер модального окна "modalWindow" — должен быть одинаковый, а размер изображения подстраиваться под статичный размер модального окна (использовать свойство ".backgroundSize = "cover"")


            // modalWindow.style.width = imagesArray[i].naturalWidth;
            // modalWindow.style.height = imagesArray[i].naturalHeight;

            modalWindow.style.background = "url(" + imagesArray[i].src + ") no-repeat" ;
            modalWindow.style.backgroundSize = "cover";


            // window.open(imagesArray[i].src, "window_1", this.width = 100)
            isModalOpen = true;
            console.dir(imagesArray[i]);
            
        });
    }

    // ♦ При клике на  "body" — Необходимо, чтобы оверлей с смодальным окном закрывался
    body.addEventListener("click", function () {
        if (isModalOpen == true) {
            overlay.style.display = "none";
            isModalOpen = false;
            
        }
        
    }, true);

    // ♦ Однако у меня не получилось сделать так, чтобы закрывалось модальное окно именно при клике на "body", а не на само окно. Так-же само, как в класной работе на уроке выполнить не удалось.
    overlay.addEventListener("click", function name(eee) {
        eee.stopPropagation();
    });
    
    btn_close.addEventListener("click",function () {
        overlay.style.display = "none";
        isModalOpen = false;
    });
});