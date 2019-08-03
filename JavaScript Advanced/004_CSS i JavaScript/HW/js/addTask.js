window.onload = function () {
    var btn1 = document.getElementById("btn_1");
    var arrayOfDiv = document.querySelectorAll("div div");
    console.dir(arrayOfDiv);
    var counter =0;
    var currentDiv=0

    //  Функция, которая определяет текущий элемент и меняет его цвет. Одновременно она же меняет все остальные цвета на зеленый.
    function changeBgColor() {
        currentDiv = counter++ % arrayOfDiv.length;
        arrayOfDiv[currentDiv].style.backgroundColor = "red";
        
        for (var i = 0; i < arrayOfDiv.length; i++) {
            if (i == currentDiv) {
                continue;                
            }
            arrayOfDiv[i].style.backgroundColor = "green";
        }
    }
    btn1.onclick = changeBgColor;
}