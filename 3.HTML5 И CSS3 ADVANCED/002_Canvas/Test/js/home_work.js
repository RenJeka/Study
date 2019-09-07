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
        scaleX = 0,
        //scaleY;
        stepSkewing = 0.01;
        stepScaling = 0.02;
    // При запуске Трансформации №1 — лучше выставить границы 0.2 и -0.2 
    // При запуске Трансформации №1 — лучше выставить границы 1 и -1 (Так красивее =) )
    var skewTopLimit     =  0.2,
        skewBottomLimit  = -0.2,
        scaleTopLimit    =  1.3,
        scaleBottomLimit = -1.3;

    // Флаг для переворачивания (масштабирования)
    var scaleFlag = false,
    // Флаг для трансформации
        transformFlag = false;

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
        // scaleFlag = !scaleFlag;
        // skewX += 0.01;
        
        // ---------ПРОВЕРКА ДЛЯ ТРАНСФОРМАЦИИ-------------
        // Проверка для того, чтобы остановить трансформацию на определенной границе и запустить её в обратном порядке.
        // Тут идет привязка к флагу — если трансформация дошла до границы — поменять флаг на противоположный.
        if (skewX >= skewTopLimit) {
            transformFlag = true;
        }else if (skewX < skewBottomLimit) {
            transformFlag = false;
        }

        // Увеличиваем или уменьшаем искажение на заданный шаг (в зависимости от флага)
        if (transformFlag == false) {
            skewX += stepSkewing;
        }else if(transformFlag == true){
            skewX -= stepSkewing;
        }

        // ---------ПРОВЕРКА ДЛЯ МАСШТАБИРОВАНИЯ---------
        // if (scaleFlag == true) {
        //     scaleX = 1;
        // }else{
        //     scaleX = -1;
        // }

        // Такая-же проверка как и для трансформации. Также используем флаг
        if (scaleX >= scaleTopLimit) {
            scaleFlag = true;
        }else if (scaleX < scaleBottomLimit) {
            scaleFlag = false;
        }

        if (scaleFlag == false) {
            scaleX +=stepScaling;
        }else if (scaleFlag == true) {
            scaleX -=stepScaling;
        }



        // console.log(skewY);
        console.log(skewX);

        // Трансформация №1
        // ctx2.transform( 1 , skewY , skewX , 1 , 0 , 0 );
        console.log("scaleX = " + scaleX);
        
        ctx2.save();
        ctx2.translate(500,200);

        // Поворот изображения (отражение) путем масштабирования
        ctx2.scale(scaleX,1);

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
    