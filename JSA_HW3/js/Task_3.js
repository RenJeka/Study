var a = prompt("введите выражение: +  прибавить, - отнять, * умножить, / разделить");

function Parser(string) {
	arg = {};
	arg.wrongSign = false;
	// функция, которая определяет знак арифмет. операции, подсчитывает результат в зависимости от знака и возвращает этот результат
	arg.FindOperation = function (number1, number2, sign) {
		switch (sign) {
			case "+":
				number1+=number2;
				return number1;
				
			case "-":
				number1-=number2;
				return number1;
			case "*":
				number1*=number2;
				return number1;
				
			case "/":
				number1/=number2;
				return number1;
			default:
				return arg.wrongSign = true;
		}
	};
	/* 
		♦ почему pattern1 не работает как надо и записывает в массив пустое значение "" когда я ввожу это пустое значение в начало строки?
		♦ почему при вводе строки, то что соответствует паттерну /\D+/ — не работает коррекно функция? 
	*/

	var pattern1 = /\D+/g;
	var pattern2 = /\d+/g;

	//  разбиваем строку на 2 массива: массив только с числами и массив только с знаками
	arg.arrayOfNumbers = string.split(pattern1);
	arg.arrayOfOperations = string.split(pattern2);
	
	// почему-то в массив со знаками добавляются лишние пустые символы в начале и в конце. Лучше уточнить почему, а тут я просто чищу их
	arg.arrayOfOperations.pop();
	arg.arrayOfOperations.shift();

	// В массиве с чмслами должны быть только числа. Превращаем строки в числа
	for (n = 0; n< arg.arrayOfNumbers.length; n++) {
		arg.arrayOfNumbers[n] = parseInt(arg.arrayOfNumbers[n]);
	}

	// ♦ для отладки 
	console.log(arg.arrayOfNumbers);
	console.log(arg.arrayOfOperations); 
	

	// инициализируем результат как первый элемент массива с числами
	arg.result = arg.arrayOfNumbers[0];

	// главная часть кода где происходят все вичисления: берем следующий элемент массива с числами и применяем к нему необходимую операцию (с помощью метода arg.FindOperation)
	for (i = 0; i<arg.arrayOfNumbers.length-1 ; i++) {
		if (arg.wrongSign) {
			return alert("Неверный знак операции");
		}
			arg.result = arg.FindOperation(arg.result,arg.arrayOfNumbers[i+1],arg.arrayOfOperations[i]);
	}

	// дизайн
	// ♦ почему не работает alret ?
	document.write("result = "+ arg.result);
}

Parser(a);