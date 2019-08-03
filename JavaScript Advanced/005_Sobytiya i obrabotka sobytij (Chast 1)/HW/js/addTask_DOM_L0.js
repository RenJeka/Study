window.onload =  function () {
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

    btnPlus.onclick = addFun;
    btnMinus.onclick = subFun;
    btnMul.onclick = mulFun;
    btnDiv.onclick = dvFun;

    function addFun() {
        tempFirst = parseFloat(inputFirst.value);
        tempSecond = parseFloat( inputSecond.value);
        if ( !isNaN(tempFirst) && !isNaN(tempSecond)) {
            result = tempFirst + tempSecond;
            pResult.innerHTML = "Результат = " + result ;
        }else{
            pResult.innerHTML = "Вы ввели неправильное значение, повторите ввод";
        }    
    }
    function subFun() {
        tempFirst = parseFloat(inputFirst.value);
        tempSecond = parseFloat( inputSecond.value);
        if ( !isNaN(tempFirst) && !isNaN(tempSecond)) {
            result = tempFirst - tempSecond;
            pResult.innerHTML = "Результат = " + result ;
        }else{
            pResult.innerHTML = "Вы ввели неправильное значение, повторите ввод";
        }    
    }
    function mulFun() {
        tempFirst = parseFloat(inputFirst.value);
        tempSecond = parseFloat( inputSecond.value);
        if ( !isNaN(tempFirst) && !isNaN(tempSecond)) {
            result = tempFirst * tempSecond;
            pResult.innerHTML = "Результат = " + result ;
        }else{
            pResult.innerHTML = "Вы ввели неправильное значение, повторите ввод";
        }    
    }
    function dvFun() {
        tempFirst = parseFloat(inputFirst.value);
        tempSecond = parseFloat( inputSecond.value);
        if ( !isNaN(tempFirst) && !isNaN(tempSecond)) {
            result = tempFirst / tempSecond;
            pResult.innerHTML = "Результат = " + result ;
        }else{
            pResult.innerHTML = "Вы ввели неправильное значение, повторите ввод";
        }    
    }
};
