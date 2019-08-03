window.addEventListener("load", function () {
    
    var inputFirst = document.getElementById("input_first");
    var inputSecond = document.getElementById("input_second");
    var pResult = document.getElementById("result");
    var result = 0;
    var tempFirst;
    var tempSecond;
    
    var btnPlus = document.getElementById("btn_plus");
    var btnMinus = document.getElementById("btn_minus");
    var btnMul = document.getElementById("btn_mul");
    var btnDiv = document.getElementById("btn_div");

    btnPlus.addEventListener("click",function () {
        tempFirst = parseFloat(inputFirst.value);
        tempSecond = parseFloat( inputSecond.value);
        if ( !isNaN(tempFirst) && !isNaN(tempSecond)) {
            result = tempFirst + tempSecond;
            pResult.innerHTML = "Результат = " + result ;
        }else{
            pResult.innerHTML = "Вы ввели неправильное значение, повторите ввод";
        }

    }, true);

    btnMinus.addEventListener("click",function () {
        tempFirst = parseFloat(inputFirst.value);
        tempSecond = parseFloat( inputSecond.value);
        if ( !isNaN(tempFirst) && !isNaN(tempSecond)) {
            result = tempFirst - tempSecond;
            pResult.innerHTML = "Результат = " + result ;
        }else{
            pResult.innerHTML = "Вы ввели неправильное значение, повторите ввод";
        }

    }, true);

    btnMul.addEventListener("click",function () {
        tempFirst = parseFloat(inputFirst.value);
        tempSecond = parseFloat( inputSecond.value);
        if ( !isNaN(tempFirst) && !isNaN(tempSecond)) {
            result = tempFirst * tempSecond;
            pResult.innerHTML = "Результат = " + result ;
        }else{
            pResult.innerHTML = "Вы ввели неправильное значение, повторите ввод";
        }

    }, true);

    btnDiv.addEventListener("click",function () {
        tempFirst = parseFloat(inputFirst.value);
        tempSecond = parseFloat( inputSecond.value);
        if ( !isNaN(tempFirst) && !isNaN(tempSecond)) {
            result = tempFirst / tempSecond;
            pResult.innerHTML = "Результат = " + result ;
        }else{
            pResult.innerHTML = "Вы ввели неправильное значение, повторите ввод";
        }

    }, true);

}, true);
