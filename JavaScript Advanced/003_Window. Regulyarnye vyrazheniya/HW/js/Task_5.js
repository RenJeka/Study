window.onload = function(){

var input_1 = document.getElementById("input1");
var btn_1 = document.getElementById("btn1");
var div_1 = document.getElementById("div1");
var step =0 ;
var intervalHandler;

// функция, которая двигает HTML -элемент
function move() {

	div_1.style.left = step++ + "px";
	if (step == window.innerWidth) {
		step =0;
	}
}

// функция-обработчик нажатия
function onClickHandler() {

	// задаем элементу div значение нашей строки
	var inputLine = input_1.value;
	div_1.innerHTML = inputLine;

	// сначала очищаем функцию "setInterval", так как в противном случае при каждом следующем нажатии будет увеличиваться скорость
	clearInterval(intervalHandler);

	// запускаем интервальное повторение функции "move"
	intervalHandler = setInterval(move, 5);

}

// НАЧАЛО ПРОГРАММЫ
btn_1.onclick = onClickHandler;

};