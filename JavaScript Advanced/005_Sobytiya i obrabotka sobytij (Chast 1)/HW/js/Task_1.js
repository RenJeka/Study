window.addEventListener("load", function () {
    
    var inputFirst = document.getElementById("input_first");
    var inputSecond = document.getElementById("input_second");
    var pResult = document.getElementById("result");
    
    var btnPlus = document.getElementById("btn_plus");
    var btnMinus = document.getElementById("btn_minus");
    var btnMul = document.getElementById("btn_mul");
    var btnDiv = document.getElementById("btn_div");

    var divWrap = document.getElementById("wrapperInput");
    var result = 0;

    function checkINT() {
        // Проверка — число ли это вообще
        tempFirst = parseInt(inputFirst.value);
        tempSecond = parseInt( inputSecond.value);
        if ( !isNaN(tempFirst) && !isNaN(tempSecond)) {

        }else{
            pResult.innerHTML = "Вы ввели неправильное значение, повторите ввод";
            return false;
        }

        // Проверка — Целочисленное число или дробное.
        if ( (parseFloat(inputFirst.value) - parseInt(inputFirst.value)) == 0 && (parseFloat(inputSecond.value) - parseInt(inputSecond.value)) == 0) {

            
            return true;

        }else{
            pResult.innerHTML = "Одно или оба введеных чисел — нецелочисленные. Введите пожалуйста числа без запятых! ";
            return false;
        }
        
    }
    
    // Обработчик на нажатия клавиши, который не позволяет ввести "." или ","
    divWrap.addEventListener("keypress",function (e){

        if ((String.fromCharCode(e.charCode) == ".") || (String.fromCharCode(e.charCode) == ",")) {
            e.preventDefault();
            pResult.innerHTML = "Нельзя вводить дробные значения! ";
        }

    }, true);

//=============================================
//     Обработчик на нажатие на кнопку "+"
//  (Аналогично для всех остальных кнопок)
//=============================================
    btnPlus.addEventListener("click",function () {

        if (checkINT()) {
            result = tempFirst + tempSecond;
            pResult.innerHTML = "Результат = " + result ;
        }

    }, true);

//=============================================
//     Обработчик на нажатие на кнопку "-"
//=============================================
    btnMinus.addEventListener("click",function () {

        if (checkINT()) {
            result = tempFirst - tempSecond;
            pResult.innerHTML = "Результат = " + result ;
        }else{

        }

    }, true);

//=============================================
//     Обработчик на нажатие на кнопку "х"
//=============================================
    btnMul.addEventListener("click",function () {

        if (checkINT()) {
            result = tempFirst * tempSecond;
            pResult.innerHTML = "Результат = " + result ;
        }

    }, true);

//=============================================
//     Обработчик на нажатие на кнопку "/"
//=============================================
    btnDiv.addEventListener("click",function () {

        if (checkINT()) {
            result = tempFirst / tempSecond;
            pResult.innerHTML = "Результат = " + result ;
        }

    }, true);

}, true);
