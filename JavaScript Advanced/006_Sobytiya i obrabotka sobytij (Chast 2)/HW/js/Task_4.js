window.addEventListener("load", function(){

	var output = document.getElementById("output");

	// ♦ Не понимаю, какой смысл работы с нашим "body" ("main")— почему нельзя работать напрямую? (Добавить слушатель событий для "window"?)
	var main = document.getElementById("main");

	document.addEventListener("keyup", function (e) {
		var myString = String.fromCharCode(e.keyCode).toLowerCase();

		console.log(myString);
		console.log(e.altKey);

		// Проверяем — какая кнопка была нажата, с помощью перехвата кода клавиши("e.charCode"), и превращение его в символ на клавиатуре (функция "fromCharCode()")
		if ((myString=="s") && (e.ctrlKey == true)&& (e.shiftKey == true)) {
			output.innerHTML = "Сохранено всё";
		}else if ((myString=="a") && (e.ctrlKey == true)) {
			output.innerHTML = "Выбрано всё";
		}else if ( (myString=="s") && (e.ctrlKey == true)) {
			output.innerHTML = "Сохранено";
		} 
	} );
});