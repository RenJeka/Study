window.addEventListener("load", function () {
    var myCanvas = this.document.querySelector("canvas"),
        ctx2 = myCanvas.getContext("2d");
        
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;

    // var currentX = myCanvas.width/2;
    // var currentY = myCanvas.height/2;

    var currentX ,
        currentY ,
        skewY = 0,
        skewX = 0,
        scaleX,
        //scaleY;
        stepSkewing = 0.01,

    // Флаг для переворачивания (масштабирования)
        scaleFlag = true,
    // Флаг для трансформации
        transformFlag = false;

    // При запуске Трансформации №1 — лучше выставить границы 0.2 и -0.2 
    // При запуске Трансформации №1 — лучше выставить границы 1 и -1 (Так красивее =) )
    var topLimit = 0.2;
    var bottomLimit = -0.2;

    // Функция для облегчения рисования. Задаем в параметрах сдвиг и ф-я сама рисует линию.
    function shiftLine(shiftX, shiftY) {
        currentX = currentX + shiftX;
        currentY = currentY + shiftY;
        ctx2.lineTo(currentX, currentY);
    }

    // Основная (интервальная)  функция для анимации
    setInterval(function () {

        ctx2.clearRect(0,0,ctx2.canvas.width, ctx2.canvas.height);
        currentX = 0;
        currentY = 0;
        skewY += 0;
        scaleFlag = !scaleFlag;
        // skewX += 0.01;
        
        // ---------ПРОВЕРКА ДЛЯ ТРАНСФОРМАЦИИ-------------
        // Проверка для того, чтобы остановить трансформацию на определенной границе и запустить её в обратном порядке.
        // Тут идет привязка к флагу — если трансформация дошла до границы — поменять флаг на противоположный.
        if (skewX >= topLimit) {
            transformFlag = true;
        }else if (skewX < bottomLimit) {
            transformFlag = false;
        }

        // Увеличиваем 
        if (transformFlag == false) {
            skewX += stepSkewing;
        }else if(transformFlag == true){
            skewX -= stepSkewing;
        }

        // ---------ПРОВЕРКА ДЛЯ МАСШТАБИРОВАНИЯ---------
        if (scaleFlag == true) {
            scaleX = 1;
        }else{
            scaleX = -1;
        }

        // console.log(skewY);
        console.log(skewX);

        // Трансформация №1
        ctx2.transform( 1 , skewY , skewX , 1 , 0 , 0 );
        console.log("scaleX = " + scaleX);
        
        ctx2.save();
        ctx2.translate(500,200);

        // Поворот изображения (отражение) путем масштабирования
        // ctx2.scale(scaleX,1);

        // Трансформация №2
        // ctx2.transform( 1 , skewY , skewX , 1 , 0 , 0 );

        // -------------ОТРИСОВКА-----------------
        // Отрисовка самого изображения
        ctx2.beginPath();
        ctx2.moveTo(currentX,currentY);
        shiftLine(30,0);
        shiftLine(-3,-10);
        shiftLine(15,-20);
        shiftLine(-5,-3);
        shiftLine(5,-15);
        shiftLine(-15,2);
        shiftLine(-2,-7);
        shiftLine(-15,20);
        shiftLine(7,-35);
        shiftLine(-8,4);
        shiftLine(-10,-20);
        shiftLine(0,120);
        shiftLine(4,0);
        ctx2.closePath();
        ctx2.fillStyle="red";
        ctx2.fill();

        ctx2.stroke();
        ctx2.restore();
    }, 50);

});
    