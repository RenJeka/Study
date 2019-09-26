window.addEventListener("load", () => {


	let costSize = 0,
		chocoFilling: any = 0,
		caramelFilling: any = 0,
		berriesFilling: any = 0,
		fillingsLimit:number = 15,
		marshmallow: number = 0,
		costFillings:number = 0,
		moreFilling:boolean = true,
		totalFillings:number = 0,
		inCorrectFilling:boolean;

	// Функция, которая запрашивает все данные у пользователя
	let mainFunc = () => {
		alert("Добрый день! Эта программа позволит Вам расчитать стоимость мороженного");

		let whatSize = prompt("Выберите размер мороженного: 'Маленькое' или '1', 'Большое' или '2'");

		(whatSize as string).toLowerCase;

		if (whatSize == "большое" || whatSize == "2") {

			costSize = 25;
			
			alert("Большое мороженное обязательно дополняется начинкой от 1 до " +fillingsLimit + ", какую Вам добавить?");

			while (moreFilling) {

				if (confirm("Шоколадную?")) {

					do {
						chocoFilling = prompt("Сколько шоколадной начинки?", "0");
						
						costFillings += fillingFix(chocoFilling) * 5 ;
					} while (inCorrectFilling);

				}
				
				if (confirm("Карамель?")) {
					do {
						caramelFilling = prompt("Сколько карамельной начинки?","0");
						
						costFillings += fillingFix(caramelFilling) * 6 ;
					} while (inCorrectFilling);
					
				}
				
				if (confirm("Ягоды?")) {
					do {
						berriesFilling = prompt("Сколько наяинки с ягодами?","0");
						
						costFillings += fillingFix(berriesFilling) * 10 ;
					} while (inCorrectFilling);

				} 
				if (costFillings == 0) {
					alert("Вы должны выбрать минимум 1 начинку. Давайте попробуем еще раз");
					moreFilling = true;
					continue;
				}
				moreFilling = confirm("Еще добавить начинки?");
			}

		} else if (whatSize == "маленькое" || whatSize == "1") {
			costSize = 10;
		}

		if (confirm("Добавить маршмеллоу?")) {
			marshmallow = 5;
		}
	}
	
		// Функция, которая делает проверку на правильноссть введенного значения, когда пользователь вводит начинку. Если пользователь нажал "Отена" или не ввел ничего — считается что начинки нет (0), если ввел не число — выводится сообщение.
		function fillingFix (filling:any){
		
			if (filling === null || filling == "") {
				inCorrectFilling = false;
				filling = 0;
				return filling;

			}else{

				filling = parseInt(filling) ;

				if (isNaN(filling)) {
					alert("Введите число!");
					inCorrectFilling = true;
					filling = 0;
					return filling;

				}else{

					totalFillings += filling;
					
					console.log(totalFillings);
					if (totalFillings > fillingsLimit) {
						inCorrectFilling = true;
						alert("Слишком много начинки! Вы что!?");
						totalFillings -= filling;
						filling = 0;
						return filling;

					}else{
						
						inCorrectFilling = false;
						return filling;
					}
					
				}

			}

		}

	// Функция, которая считает всю сумму мороженного
	let calculateIceCream = (size: number, chocoFilling: number, caramelFilling: number, berriesFilling: number, marshmallow:number) => {
		let sum = 0;

		sum = size + costFillings +  marshmallow;
		return sum;
	}

	// Начало работы программы---------------------------------------------
	mainFunc();

	alert(`Сумма к оплате = ${calculateIceCream(costSize, chocoFilling, caramelFilling, berriesFilling, marshmallow)} грн`);

});



