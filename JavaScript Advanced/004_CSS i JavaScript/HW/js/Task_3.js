window.onload = function(){
    var arrayOfDiv = document.getElementsByTagName("div");
    
    // Старт интервальной функции, которая будет запускать нужную нам функцию каждые 1000мс 
    setInterval(changePossition, 1000);

    // функция перебирает массив Div-ов и задает стиль  "left" и "top" каждому из элемментов массива
    function changePossition() {
        for (var  i= 0; i < arrayOfDiv.length; i++) {
            arrayOfDiv[i].style.left = getRandom(0,(window.innerWidth-100))+"px";
            arrayOfDiv[i].style.top = getRandom(0,(window.innerHeight-100))+"px";
        }
        
    }

    // Функция возвращает рандомное число
    function getRandom(min, max) {
        return Math.floor(Math.random()*(max-min))+min;
    }

    

};