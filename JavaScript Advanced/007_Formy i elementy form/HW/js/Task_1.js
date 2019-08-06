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
			console.log(pizzaSizeCost);
			console.dir(addIngredient);
		});
	}
//TODO Проверить (сделать проверку), как сделать так, чтобы при каждом нажатии добавлялась стоимость, а не перезаписывалась, но в то же время и не добавлялась больше 1 раза (поставить флаг или перебрать циклом все нечекнутые) 
	for (let k = 0; k<addIngredient.length ; k++) {
		addIngredient[k].addEventListener("click", function () {
			if (addIngredient[k].checked) {
				alert("checked!");
			}
			switch (addIngredient[k].value) {
				case "mushroom":
					addIngredientCost =5;
					break;
				case "bacon":
					addIngredientCost =7;
					break;
				case "tomato":
					addIngredientCost =5;
					break;
				case "addChese":
					addIngredientCost =3;
					break;
				case "olives":
					addIngredientCost =5;
					break;
			
				default:
					break;
			}
			sum = pizzaSizeCost + addIngredientCost;
			console.log(pizzaSizeCost);
			console.dir(addIngredientCost);
		});
	}
	





	$("submit_btn").addEventListener("click", function (e) {
		var flag = true;
		for (let i = 0; i<formFields.length ; i++) {
			if (formFields[i].type =="text") {
				if (formFields[i].value == "") {	
					formFields[i].className = "invalid";
					flag = false;
				}else{
					formFields[i].className = "valid";
				}
			}
			
		}
		if (!flag) {
			$("message").innerHTML = "Все поля должны быть запалнены !";
			e.preventDefault();
			console.dir(formFields);
			return flag;
		}
		
	});


	console.dir(formFields);
	console.dir(pizzaSize);
	


});