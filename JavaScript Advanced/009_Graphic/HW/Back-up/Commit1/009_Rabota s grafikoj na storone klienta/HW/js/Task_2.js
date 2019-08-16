window.addEventListener("load", function(){
    var imagesArray = document.getElementsByTagName("img");
    //TODO: Создать отдельный див, на подибии что мы делали в классе (с серым фоном) -- и выводить туда большие изображения
    
    for (let i = 0; i < imagesArray.length; i++) {
        imagesArray[i].addEventListener("click", function () {
            // console.log(imagesArray[i].src);
            window.open(imagesArray[i].src, "window_1", this.width = 100)
        });
    }
});