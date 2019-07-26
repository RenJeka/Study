// Программа для парсинга GET - запроса
	
window.onload = function(){

	// привязываем кнопку к переменной
	var btn_1 = document.getElementById("btn_1");
	
	// создаем глобальный объект
	var task2 = {};
	
	// метод getString - собственно парсер. Он должен возвращать объект (ассоц. массив), в котором должно быть столько свойств, сколько параметров (ключей в паре "ключ-значение") находиться в GET - запросе, при том в каждом свойстве должно находиться значение, которое соответствует значению в паре "ключ-значение".
	task2.getString = function () {

		// создаем внутренний объект чтобы поместить туда нашу разделенную строку по парам (ключ-значение) как одно свойство в этом объекте.
		task2.arg = {};

		// записываем в переменную всю строку после знака "?" 
		task2.arg.query = location.search.substring(1);

		// записываем в переменную (в данном случае — массив) отдельные пары, которые разделены знаком "&"
		task2.arg.pairs = task2.arg.query.split("&");
		

		// создаем цикл для перебора пары (name=value) из строки выше, чтобы найти (разделить) отдельно "name", и отдельно "value". Цикл сразу создает свойство объекта "task2.arg" и присваевает ему значение.
		for (var i = 0; i < task2.arg.pairs.length; i++) {

			// находим индекс знака "=", чтобы в дальнейшем разделить пару на 2 части (до "=" и после "=")
			var index = task2.arg.pairs[i].indexOf("=");

			// записываем "ключ" в переменную  argname
			var argname = task2.arg.pairs[i].substring(0, index);

			// записываем "значение" в переменную value
			var value = task2.arg.pairs[i].substring(index +1);

			// создаем свойство с именем "argname", в которое присваиваем значение от переменной "value" 
			task2.arg[argname] = value;

		}
		delete task2.arg.query;
		delete task2.arg.pairs;

		return task2.arg;

	};



	// результирущая функция, которая считает сумму всех значений свойств объекта task2.arg
	task2.result = function (x) {
		var sum = 0;
		for (var key in x) {
			 x[key] = parseInt(x[key]);
			 sum += x[key];
		}
		return sum;
	};




	// метод, которая выводит на экран результат работы вычеслительных методов (getString)
	task2.print = function () {

		var args = task2.getString();

		var e  = document.createElement("p");
		
		e.innerHTML = "Сумма значений аргументов = " + task2.result(args);

		document.body.appendChild(e);
	};	

	// привязка обработчика событий
	btn_1.onclick = task2.print;

};