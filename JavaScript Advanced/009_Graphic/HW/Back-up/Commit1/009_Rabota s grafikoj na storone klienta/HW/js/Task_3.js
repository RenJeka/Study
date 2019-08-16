function createDiagram(canvas, dataArray, width, height, diagramColor) {

    if (typeof canvas == "string") {
        var canvas = this.document.getElementById(canvas);
    }
    
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
    console.log(canvas);
    console.log("Ширина канваса = " + canvas.width);
    console.log("Высота канваса = " + canvas.height);
    
    console.log( "Максимальное значение = " + maxValue);
    // Считаем масштаб
    var scale = height / maxValue;

    // Вычисляем ширину отдельного столбика 
    var widthOfBar = Math.floor( width / dataArray.length);
    console.log("Ширина столбика = " + widthOfBar);
    
   
    
    //перебираем все элементы. На каждой иттерации цикла мы берем 1 элемент с массива,  вычисляем его высоту и отрисоваем его.
    for (let i = 0; i < dataArray.length; i++) {

        // Вычисляем высоту каждого столбика
        var heightOfBar = dataArray[i] * scale;
        
        console.log("Высота "+ i+ "-го столбика = " + heightOfBar);

        var positionHorisontal = widthOfBar * i;
        var positionVertical = height - heightOfBar;


        myContext.fillStyle = "green";
        myContext.fillRect(positionHorisontal  ,positionVertical, widthOfBar-3, heightOfBar );
    }











}

    
