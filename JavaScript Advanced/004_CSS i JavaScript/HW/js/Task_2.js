window.onload = function () {
	btn1 = document.getElementById("btn_submit");
	arrayOfInputs = document.querySelectorAll(".inp-text");
	message = document.getElementById("message");
	
	btn1.onclick = btn1Handler;
	console.dir(arrayOfInputs);

	function btn1Handler() {
		message.innerHTML = "";
		if (arrayOfInputs[0].value =="" && arrayOfInputs[1].value =="") {

			message.innerHTML = "Bы нe заполнили поля логин и пароль!";
			message.style.color = "red";
			for ( i = 0; i < arrayOfInputs.length; i++) {
				arrayOfInputs[i].style.backgroundColor = "pink";
			}
			
		}else if (arrayOfInputs[0].value =="admin" && arrayOfInputs[1].value =="12345") {

			message.innerHTML = "Bы авторизованы!";
			message.style.color = "green";
			for ( i = 0; i < arrayOfInputs.length; i++) {
				arrayOfInputs[i].style.backgroundColor = "lightgreen";
			}

		}else{

			message.innerHTML = "Неправильные данные для авторизации";
			message.style.color = "red";
			for ( i = 0; i < arrayOfInputs.length; i++) {
				arrayOfInputs[i].style.backgroundColor = "pink";
			}

		}
	}




};