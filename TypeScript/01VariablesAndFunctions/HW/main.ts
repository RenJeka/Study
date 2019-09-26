window.addEventListener("load", () => {


	let costSize = 0,
		chocoFilling: number = 0,
		caramelFilling: number = 0,
		berriesFilling: number = 0,
		marshmellow: number = 0,
		flag = true;

	// Функция, которая запрашивает все данные у пользователя
	let mainFunc = () => {
		alert("Добрый день! Эта программа позволит Вам расчитать стоимость мороженного");

		let whatSize = prompt("Выберите размер мороженного: 'Маленькое' или '1', 'Большое' или '2'");

		(whatSize as string).toLowerCase;

		if (whatSize == "большое" || whatSize == "2") {

			costSize = 25;

			while (flag) {

				alert("Большое мороженное обязательно дополняется начинкой, какую Вам добавить?");
				if (confirm("Шоколадную?")) {
					chocoFilling += parseInt(prompt("Сколько?") as string);

				}

				if (confirm("Карамель?")) {
					caramelFilling += parseInt(prompt("Сколько?") as string);

				}

				if (confirm("Ягоды?")) {
					berriesFilling += parseInt(prompt("Сколько?") as string);

				}
				flag = confirm("Еще добавить начинки?");
			}

		} else if (whatSize == "маленькое" || whatSize == "1") {
			costSize = 10;
		}

		if (confirm("Добавить маршмеллоу?")) {
			marshmellow = 5;
		}
	}
	
	// Функция, которая считает всю сумму мороженного
	let calculateIceCream = (size: number, chocoFilling: number, caramelFilling: number, berriesFilling: number, marshmellow:number) => {
		let sum = 0;

		sum = size + chocoFilling * 3 + caramelFilling * 6 + berriesFilling * 10 + marshmellow;
		return sum;
	}

	// Начало работы программы---------------------------------------------
	mainFunc();

	alert(`Сумма к оплате = ${calculateIceCream(costSize, chocoFilling, caramelFilling, berriesFilling, marshmellow)}`);

});



