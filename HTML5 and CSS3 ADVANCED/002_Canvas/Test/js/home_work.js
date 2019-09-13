window.addEventListener("load", function () {
    var myCanvas        = document.querySelector("canvas"),
        ctx2            = myCanvas.getContext("2d"),
        btnScale        = document.getElementById("btnScale"),
        btnTransform1   = document.getElementById("btnTransform1"),
        btnTransform2   = document.getElementById("btnTransform2"),
        btnPause        = document.getElementById("btnPause"),
        btnReset        = document.getElementById("btnReset"),
        intervalHandlerScale, intervalHandlerTrf1, intervalHandlerTrf2;

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
        stepSkewingX = 0.01;
        stepSkewingY = 0;
        stepScaling  = 0.02;
        stepInterval = 50;
    // При запуске Трансформации №1 — лучше выставить границы "skewTop(Bottom)Limit" 0.2 и -0.2 
    // При запуске Трансформации №1 — лучше выставить границы "skewTop(Bottom)Limit" 1 и -1 (Так красивее =) )
    var skewTopLimit     =  0.2,
        skewBottomLimit  = -0.2,
        scaleTopLimit    =  1.3,
        scaleBottomLimit = -1.3;

    // Флаг для переворачивания (масштабирования)
    var scaleFlag = false,
    // Флаг для трансформации
        transformFlag = false,
        btnPauseFlag = false,
        btnResetFlag = false,
        btnScaleFlag = false,
        btnTransform1Flag = false,
        btnTransform2Flag = false;

    // Функция для облегчения рисования. Задаем в параметрах сдвиг и ф-я сама рисует линию.
    function shiftLine(shiftX, shiftY) {
        currentX = currentX + shiftX;
        currentY = currentY + shiftY;
        ctx2.lineTo(currentX, currentY);
    }

    function transformImage() {
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
            skewX += stepSkewingX;
        }else if(transformFlag == true){
            skewX -= stepSkewingX;
        }
    }

    function scaleImage() {
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
    }

    
    // Функкция по отрисовке самого изображения
    function drawImage() {
        
        ctx2.translate(0,0);
        ctx2.save();
        ctx2.translate(500,200);

        // Поворот изображения (отражение) путем масштабирования
        if (btnScaleFlag == true) {
            ctx2.scale(scaleX,1);
        }
        
        // Трансформация №2
        if (btnTransform2Flag == true) {
            ctx2.transform( 1 , skewY , skewX , 1 , 0 , 0 );
        }

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
        ctx2.fillStyle = "red";
        ctx2.fill();

        ctx2.stroke();
        ctx2.restore();
    }

    // Основная (интервальная)  функция для анимации
    function main() {

        ctx2.clearRect(0,0,ctx2.canvas.width, ctx2.canvas.height);
        currentX = 0;
        currentY = 0;
        // skewY += stepSkewingY;
        
        transformImage();
        scaleImage();

        //------------ЗАПУСК АНИМАЦИЙ--------------------
        // console.log(skewY);
        console.log("%c skewX = " + skewX , "color: red;");
        // console.log("%c skewY = " + skewY , "color: brown;");


        // TODO Не понимаю, почему не ресетиться Трансформация №1 (Нужно, чтобы при нажатии кноки "Reset"—анимация становилась в изначальное положение, обнулялась)
        // Трансформация №1
        if (btnTransform1Flag == true && btnResetFlag == false ) {
            ctx2.transform( 1 , skewY , skewX , 1 , 0 , 0 );
        }
        
        // console.log("%c scaleX = " + scaleX , "color: green;");
        
        drawImage();
    }

    function reset() {
        clearInterval(intervalHandlerScale);
        clearInterval(intervalHandlerTrf1);
        clearInterval(intervalHandlerTrf2);
        // skewY = 0;
        // skewX = 0;
        scaleX = 0;
        // stepSkewingX = 0.01;
        btnPauseFlag      = false;
        btnScaleFlag      = false;
        btnTransform1Flag = false;
        btnTransform2Flag = false;

        main();

    }


// ----------------КНОПКИ УПРАВЛЕНИЯ-------------------------
    btnScale.addEventListener("click", function () {
        if (btnScaleFlag == false) {
            reset();
            intervalHandlerScale =  setInterval(main, stepInterval);
            btnScaleFlag = true;
            
        }else{
            reset();
            // btnScaleFlag = false;
        }



    });

    btnTransform1.addEventListener("click", function () {
        if (btnTransform1Flag == false) {
            reset();
            intervalHandlerTrf1 =  setInterval(main, stepInterval);
            btnTransform1Flag = true;
            
        }else{
            reset();
        }
    });

    btnTransform2.addEventListener("click", function () {
        if (btnTransform2Flag == false) {
            reset();
            intervalHandlerTrf2 =  setInterval(main, stepInterval);
            btnTransform2Flag = true;
            
        }else{
            reset();
        }
    });


    btnPause.addEventListener("click", function () {
        
        if (btnPauseFlag == false) {
            clearInterval(intervalHandlerScale);
            clearInterval(intervalHandlerTrf1);
            clearInterval(intervalHandlerTrf2);
            btnPauseFlag = true;
            console.dir(stepInterval);

        }else if (btnPauseFlag == true) {
            intervalHandlerScale =  setInterval(main, stepInterval);
            intervalHandlerTrf1  =  setInterval(main, stepInterval);
            intervalHandlerTrf2  =  setInterval(main, stepInterval);
            btnPauseFlag = false;
            console.dir(stepInterval);
        }
        console.log(btnPauseFlag);
    });

    btnReset.addEventListener("click", function () {
        
        if (btnResetFlag == false) {
            btnResetFlag = true;
            reset();
            btnResetFlag = false;
        }
        
    } );

});
    