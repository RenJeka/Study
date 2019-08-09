window.addEventListener("load", function () {
	var $ = function (id) {
		return document.getElementById(id);
	}
	var sum = 0;
	var pizzaSize = this.document.form1.pizzaSize;
	var addIngredient = this.document.form1.addIngredient;
	var formFields = document.form1.elements;
	var pizzaSizeCost = 0;
	var addIngredientCost = 0;

	for (let j = 0; j< pizzaSize.length; j++) {
		pizzaSize[j].addEventListener("click",function () {
			switch (pizzaSize[j].value) {
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
			sum = pizzaSizeCost + addIngredientCost;
			$("sum").innerHTML = "$" + sum;
			console.log(pizzaSizeCost);
			console.dir(addIngredient);
		});
	}
//TODO Проверить (сделать проверку), как сделать так, чтобы при каждом нажатии добавлялась стоимость, а не перезаписывалась, но в то же время и не добавлялась больше 1 раза (поставить флаг или перебрать циклом все нечекнутые) 
	for (let k = 0; k<addIngredient.length ; k++) {
		addIngredient[k].addEventListener("click", function () {

			// TODO Привязать флаг к этому "if" — если ингредиент отмечен— значит флаг подымаеться (можно и без переменной флага) — и цена "addIngredientCost" добавляеться, если он снят — addIngredientCost отнимаеться

			
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
			sum = pizzaSizeCost + addIngredientCost;
			$("sum").innerHTML = "$" + sum;
			console.log(pizzaSizeCost);
			console.dir(addIngredientCost);
		});
	}
	

// TODO == Также необходимо валидация формы по паттерну
	$("submit_btn").addEventListener("click", function (e) {
		var flag = true;

		// Проверка на выбор размера пиццы (радиокнопки). Еслистоимость равна 0 — соответственно что пользователь не выбрал ни одну пиццу. 
		if (pizzaSizeCost == 0) {
			flag = false;
			$("message").innerHTML = "Для начала выбирите пиццу!";
			e.preventDefault();
			return flag;
		}

		//Перебираем все элементы формы, чтобы найти незаполненные поля и вывести ошибку
		for (let i = 0; i<formFields.length ; i++) {

			// Сначала ищем все текстовые поля(предпологаем, что ВСЕ текстовые поля должны быть заполненны) (В случае, если у нас были бы текстовые поля, которые не обязательно заполнять — мы бы вписали доп. условие, либо алгоритм поиска был бы другой)
			if (formFields[i].getAttribute("data-val")) {
				//formFields[i].type =="text"
				// Если значениев поле — пустое, то меняем флаг и задаем стиль с красным полем
				if (formFields[i].value == "") {
					flag = false;
					$("message").innerHTML = "Нужно заполнить все поля !";
					formFields[i].className = "invalid";
					continue;
				}
				//Проверка на соответствие паттерну — если поле не  соответствует (возвращает "-1") — мы выводим подсказку, применяем красный стиль к полю и устанавливаем флаг в "false"
				var pattern = formFields[i].getAttribute("data-val");
				var messageElement = $(formFields[i].getAttribute("data-val-id"));
				var text_msg = formFields[i].getAttribute("data-val-msg");
				var result = formFields[i].value.search(pattern);
				
				if (result == -1) {	
					$("message").innerHTML = "Заполните поля правильно";
					formFields[i].className = "invalid";
					messageElement.innerHTML = text_msg;
					flag = false;
					
				}else{
					formFields[i].className = "valid";
					messageElement.innerHTML = "";
				}
			}
		}

		//Главная проверка на флаг: если флаг — "false", тогда выводим сообщение о ошибке и запрещяем отправку формы.
		if (flag == false) {
			e.preventDefault();
			return flag;
		}
		// В противном случае "if" не сработает и форма отправиться сама
		
	});
	// var pattern1 = formFields[8].getAttribute("data-val");
	
	// formFields[8].onchange = function(){
	// 	var result1 = this.value.search(pattern1);
	// 	console.log(this.value)
	// 	console.log(result1)
	// }
	


});