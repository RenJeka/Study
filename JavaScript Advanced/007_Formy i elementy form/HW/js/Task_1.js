
// ПОДСКАЗКА: Сумма пиццы просчитывается суммой 2-х переменных (pizzaSizeCost + addIngredientCost). Сумма далжна быть постоянно актуальной. При каждом изменении одной переменной сумма пересчитывается и выводится пользователю.

window.addEventListener("load", function () {

	// Вспомогательная функция доллара (как в jQuery)
	var $ = function (id) {
		return document.getElementById(id);
	}

	var sum = 0, // Общая сумма заказа
		rbtArrayPizzaSize = this.document.form1.pizzaSize, // Массив радиокнопок с размером пиццы
		addIngredient = this.document.form1.addIngredient, // Массив чекбоксов с выбором доп. ингредиента
		formFields = document.form1.elements, // Массив элементов формы
		pizzaSizeCost = 0, // Отдельная переменная для стоимости пиццы в зависимости от размера
		addIngredientCost = 0; // Отдельная переменная для подсчета суммы всех добавочных ингредиентов

	// Перебираем все radiobuttons и вешаем обработчик событий на них
	for (let j = 0; j < rbtArrayPizzaSize.length; j++) {

		rbtArrayPizzaSize[j].addEventListener("click",function () {

			// в зависимости от выбранной radio увеличиваем переменную "pizzaSizeCost" 
			switch (rbtArrayPizzaSize[j].value) {
				case "small":
					pizzaSizeCost =5;
					break;
				case "middle":
					pizzaSizeCost =10;
					break;
				case "large":
					pizzaSizeCost =15;
					break;
			
				default:
					break;
			}
			
			// Пересчитываем сумму и выводим пользователю
			sum = pizzaSizeCost + addIngredientCost;
			$("sum").innerHTML = "$" + sum;

		});
	}
//TODO Проверить (сделать проверку), как сделать так, чтобы при каждом нажатии добавлялась стоимость, а не перезаписывалась, но в то же время и не добавлялась больше 1 раза (поставить флаг или перебрать циклом все нечекнутые) 

	// Перебираем все чекбоксы с дополнительными ингредиентами и вешаем обработчик событий на них.
	for (let k = 0; k < addIngredient.length ; k++) {

		addIngredient[k].addEventListener("click", function () {

			// TODO Привязать флаг к этому "if" — если ингредиент отмечен— значит флаг подымаеться (можно и без переменной флага) — и цена "addIngredientCost" добавляеться, если он снят — addIngredientCost отнимаеться

			// В зависимости от выбранного ингредиента увеличиваем или уменьшаем переменную "addIngredientCost"
			switch (addIngredient[k].value) {
				case "mushroom":
					if (addIngredient[k].checked == true) {
						addIngredientCost +=5
					}else{
						addIngredientCost -=5
					}
					break;
				case "bacon":
					if (addIngredient[k].checked == true) {
						addIngredientCost +=7
					}else{
						addIngredientCost -=7
					}
					break;
				case "tomato":
					if (addIngredient[k].checked == true) {
						addIngredientCost +=5
					}else{
						addIngredientCost -=5
					}
					break;
				case "addChese":
					if (addIngredient[k].checked == true) {
						addIngredientCost +=3
					}else{
						addIngredientCost -=3
					}
					break;
				case "olives":
					if (addIngredient[k].checked == true) {
						addIngredientCost +=5
					}else{
						addIngredientCost -=5
					}
					break;
			}

			// Пересчитываем сумму и выводим пользователю
			sum = pizzaSizeCost + addIngredientCost;
			$("sum").innerHTML = "$" + sum;
			console.log(pizzaSizeCost);
			console.dir(addIngredientCost);
		});
	}
	
// ====================ВАЛИДАЦИЯ ФОРМЫ ================================

	// Обработчик событий на клик по кнопек "Заказать"
	$("submit_btn").addEventListener("click", function (e) {

		var isValid = true; // Переменная, которая указывает -- прошла ли форма валидацию.
		
		// Проверка, если пицца не выбрана -- пишем сообщение и не отправляем форму. 
		if (pizzaSizeCost == 0) {
			isValid = false;
			$("message").innerHTML = "Для начала выбирите пиццу!";
			e.preventDefault();
			return isValid;
		}

		//Перебираем все элементы формы, чтобы найти незаполненные поля и вывести ошибку
		for (let i = 0; i < formFields.length ; i++) {

			let pattern = formFields[i].getAttribute("data-val"),

				// элемент <span>, который связан с полем ввода, для вывода в него сообщения
				boundMessageItem  = $(formFields[i].getAttribute("data-val-id")),
				text_msg = formFields[i].getAttribute("data-val-msg"),
				result = formFields[i].value.search(pattern);

			console.dir(formFields[i]);

			// Сначала ищем все текстовые поля(предпологаем, что ВСЕ текстовые поля должны быть заполненны) (В случае, если у нас были бы текстовые поля, которые не обязательно заполнять — мы бы вписали доп. условие, либо алгоритм поиска был бы другой)
			if (pattern) {

				// Если значениев поле — пустое, то меняем флаг и задаем стиль с красным полем
				if (formFields[i].value == "") {
					isValid = false;
					$("message").innerHTML = "Нужно заполнить все поля !";
					formFields[i].className = "invalid";
					continue;
				}
				
				// Если поле не соответствует паттерну --ставим соответствующий класс и выводим сообщение.
				if (result == -1) {	
					$("message").innerHTML = "Заполните поля правильно";
					formFields[i].className = "invalid";
					boundMessageItem .innerHTML = text_msg;
					isValid = false;
					
				// В противном случае -- поле прошло валидацию. Ставим соответствующий класс и Очищаем поле
				}else{
					formFields[i].className = "valid";
					boundMessageItem .innerHTML = "";
				}
			}
		}

		//Главная проверка на флаг: если флаг — "false", тогда выводим сообщение о ошибке и запрещяем отправку формы.
		if (isValid == false) {
			e.preventDefault();
			return isValid;
		}	
	});

});