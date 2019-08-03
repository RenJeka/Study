window.onload = function(){

	var counterMiliSec = 0;
	var counterMiliSecT = 0;
	var counterSec = 0;
	var counterSecT = 0;
	var counterMin = 0;
	var counterMinT = 0;
	var intervalHandler;
	var flag = false;

	var span6 = get("span6");
	var span5 = get("span5");
	var span4 = get("span4");
	var span3 = get("span3");
	var span2 = get("span2");
	var span1 = get("span1");

	// Функция, взята из 4-го примера по таймерам. Позволяет получить доступ к элементу, не записуя элемент в отдельно созданную пеоеменную.
	function get(id) {
		return document.getElementById(id);	
	}

	// функция-счетчик. Функция считает и записывает счетчики отдельно для каждой из 6-ти переменных :	(миллисекунд, десятых миллисекунд, секунд, десятых секунд, минут, десятых минут)
	function count() {

		if (counterMiliSec < 9) {
			// счетчик (миллисекунд) считает до тех пор, пока он не достигнет 9-ти. (Аналогично для всех остальных 5-ти счетчиков)
			counterMiliSec++;
			span6.innerHTML = counterMiliSec;

		}else if(counterMiliSecT < 9){
			// обнуляем все предыдущие счетчики (Аналогично для всех остальных 4-рех счетчиков)
			counterMiliSec = 0;
			span6.innerHTML = counterMiliSec;

			counterMiliSecT++;
			span5.innerHTML = counterMiliSecT;

		}else if (counterSec < 9) {
			
			counterMiliSecT = 0;
			counterMiliSec = 0;
			span6.innerHTML = counterMiliSec;
			span5.innerHTML = counterMiliSecT;

			counterSec++ ;
			span4.innerHTML = counterSec;

		}else if(counterSecT < 6){

			counterMiliSecT = 0;
			counterMiliSec = 0;
			counterSec = 0;
			span6.innerHTML = counterMiliSec;
			span5.innerHTML = counterMiliSecT;
			span4.innerHTML = counterSec;

			counterSecT++ ;
			span3.innerHTML = counterSecT;

		}else if (counterMin <9) {
			counterMiliSecT = 0;
			counterMiliSec = 0;
			counterSec = 0;
			counterSecT = 0;
			span6.innerHTML = counterMiliSec;
			span5.innerHTML = counterMiliSecT;
			span4.innerHTML = counterSec;
			span3.innerHTML = counterSecT;

			counterMin++;
			span2.innerHTML = counterMin;

		}else {
			counterMiliSecT = 0;
			counterMiliSec = 0;
			counterSec = 0;
			counterSecT = 0;
			counterMin =0;
			span6.innerHTML = counterMiliSec;
			span5.innerHTML = counterMiliSecT;
			span4.innerHTML = counterSec;
			span3.innerHTML = counterSecT;
			span2.innerHTML = counterMin;

			counterMinT++;
			span1.innerHTML = counterMinT;
		}
		
	}

	// функция проверяет, если не запущен счетчик — запускает его. Проверка нужна, чтобы при повторном нажатии на кнопку "Старт" — счетчик не запустился повторно 
	function startCount() {
		if (!flag) {
			flag = true;
			intervalHandler = setInterval(count, 10);
		}
	}

	// функция останавливает счетчик
	function stopCount() {
		clearInterval(intervalHandler);
		flag = false;
	}
	
	// функция обнуляет счетчик
	function resetCount() {
		clearInterval(intervalHandler);
		counterMiliSec = 0;
		counterMiliSecT = 0;
		counterSec = 0;
		counterSecT = 0;
		counterMin = 0;
		counterMinT = 0;
		span6.innerHTML = counterMiliSec;
		span5.innerHTML = counterMiliSecT;
		span4.innerHTML = counterSec;
		span3.innerHTML = counterSecT;
		span2.innerHTML = counterMin;
		span1.innerHTML = counterMinT;
		flag = false;
	}


	// НАЧАЛО ПРОГРАММЫ
	get("btn_start").onclick = startCount;
	get("btn_stop").onclick = stopCount;
	get("btn_reset").onclick = resetCount;

};