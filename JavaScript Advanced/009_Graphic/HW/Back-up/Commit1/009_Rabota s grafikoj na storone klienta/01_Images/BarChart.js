function createBarChart(data, width, height, color) {

    // создаем контейнер для диаграммы
    var chart = document.createElement("div");
//=======================================
//     CSS стили для внешнего контейнера
    chart.style.width = width + "px";
    chart.style.height = height + "px";
    chart.style.position = "relative";
//=======================================
    
    // находим максимальное значение в массиве данных (в нашей гистограмме), чтобы в дальнейшем отталкиваться от неё
    var max = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < data.length; i++) {
        if (max < data[i]) max = data[i];
    }

    var scale = height / max;
    var barWidth = Math.floor(width / data.length);
// ====================================================================
    // создаем отдельный элемент диаграммы
    for (var i = 0; i < data.length; i++) {
        var bar = document.createElement("div");
        
//=====================================================
//  CSS правила, для позиционирования, отступов и цвета

        bar.style.height = data[i] * scale + "px";
        bar.style.width = barWidth - 4 + "px";

        bar.style.position = "absolute";
        bar.style.margin = "4px";
        bar.style.bottom = "0px";
        bar.style.left = barWidth * i + "px";

        bar.style.backgroundColor = color;

//=====================================================

        chart.appendChild(bar);
    }

    return chart;
}