function createDiagram(canvas, dataArray, width, height, lineColor, blockColor, diagramOrGistagram) {

    // Проверка, если мы ввели название канваса -- берем по названию; Если передали непосредственно сам канвас--берем сам канвас.
    if (typeof canvas == "string") {
        var canvas = this.document.getElementById(canvas);
    }
    
    // Настройка канваса
    canvas.width = width;
    canvas.height = height;
    // Добавляем контекст
    var myContext = canvas.getContext("2d");

    // Находим максимальное число (в заданном массиве) как в примере.
    var maxValue = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < dataArray.length; i++) {
        if (maxValue < dataArray[i]) {
            maxValue = dataArray[i];
        }
    }

    //===============ТЕСТ (можно удалить)================
    console.log(canvas);
    console.log("Ширина канваса = " + canvas.width);
    console.log("Высота канваса = " + canvas.height);
    console.log( "Максимальное значение = " + maxValue);
    //=====================================================

    // Считаем масштаб
    var scale = height / maxValue;

    // Вычисляем ширину отдельного столбика 
    var widthOfBar = Math.floor( width / dataArray.length);

    //===============ТЕСТ (можно удалить)================
    console.log("Ширина столбика = " + widthOfBar);
    //=====================================================
   
    //Основной цикл отрисовки. Перебираем все элементы. На каждой иттерации цикла мы берем 1 элемент с массива,  вычисляем его высоту и отрисоваем его.
    for (let i = 0; i < dataArray.length; i++) {

        // Вычисляем высоту каждого столбика
        var heightOfBar = dataArray[i] * scale;
        
        //===============ТЕСТ (можно удалить)================
        console.log("Высота "+ i+ "-го столбика = " + heightOfBar);
        //=====================================================
        
        // Также вычисляем позицию по горизонтали и вертикали для того, чтобы отобразить колонку (точку в диаграмме)  в нужном месте. 
        var positionHorisontal = widthOfBar * i;
        var positionVertical = height - heightOfBar;

        // Тут немного стилей 
        myContext.lineWidth = 3;
        myContext.lineJoin = "round";
        myContext.fillStyle = blockColor;
        myContext.strokeStyle = lineColor;

       // Проверка, что мы хотим рисавать--гистограмму или диаграмму

        switch (diagramOrGistagram) {
            case "diagram":
                // Тут необходимо перевести виртуальный маркер в начальную позицию графика, напр. если график стартует со 150 -- то диаграмма должна начинаться со 150. Если это первое число - просто двигаем маркер, со 2-го начинаем прорисовывать линию
                if (i == 0 ) {
                    myContext.moveTo(positionHorisontal, positionVertical);
                }else{
                    myContext.lineTo(positionHorisontal, positionVertical);
                }

                //Отрисовываем линию
                myContext.stroke();
                // Тут рисуем тонкие прямоугольники (которые под каждой точкой)
                myContext.fillRect(positionHorisontal  ,positionVertical, 3, heightOfBar )
            break;

            case "gistagram":
                // Тут рисуем прямоугольники для блочной гистограммы
                myContext.fillRect(positionHorisontal  ,positionVertical, widthOfBar -3, heightOfBar );
            break; 
        }
        
    }


}




    



/*  // Проверка, что мы хотим рисавать--гистограмму или диаграмму
 if (true) {
    // Тут необходимо перевести виртуальный маркер в начальную позицию графика, напр. если график стартует со 150 -- то диаграмма должна начинаться со 150. Если это первое число - просто двигаем маркер, со 2-го начинаем прорисовывать линию
    if (i == 0 ) {
        myContext.moveTo(positionHorisontal, positionVertical);
    }else{
        myContext.lineTo(positionHorisontal, positionVertical);
    }

    //Отрисовываем линию
    myContext.stroke();
    // Тут рисуем прямоугольники для блочной гистограммы
    myContext.fillRect(positionHorisontal  ,positionVertical, 3, heightOfBar )
}else{
    // Тут рисуем прямоугольники для блочной гистограммы
    myContext.fillRect(positionHorisontal  ,positionVertical, widthOfBar -3, heightOfBar );
} */