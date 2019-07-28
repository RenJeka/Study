window.onload = function(){

	var counterMiliSec = 0;
	var counterMiliSecT = 0;
	var counterSec = 0;
	var counterSecT = 0;
	var counterMin = 0;
	var counterMinT = 0;
	var intervalHandler;
	var flag = false;

	// Функция, взята из 4-го примера по таймерам. Позволяет получить доступ к элементу, не записуя элемент в отдельно созданную пеоеменную.
	var get = function (id) {
		return document.getElementById(id);		
	};


	function count() {

		if (counterMiliSec < 9) {

			++counterMiliSec;
			get("span6").innerHTML = counterMiliSec;

		}else if(counterMiliSecT < 9){

			++counterMiliSecT;
			counterMiliSec = 0;
			get("span5").innerHTML = counterMiliSecT;

		}else if (counterSec < 9) {

			++counterSec ;
			counterMiliSecT = 0;
			get("span4").innerHTML = counterSec;

		}else if(counterSecT < 6){

			++counterSecT ;
			counterSec = 0;
			get("span3").innerHTML = counterSecT;

		}else if (counterMin <9) {

			++counterMin;
			counterSecT = 0;
			get("span2").innerHTML = counterMin;

		}else {

			++counterMinT;
			counterMin =0;
			get("span1").innerHTML = counterMinT;
		}
		
	}

	function startCount() {
		if (!flag) {
			flag = true;
			intervalHandler = setInterval(count, 10);
		}

		
	}

	function stopCount() {
		clearInterval(intervalHandler);
		flag = false;
	}
	
	function resetCount() {
		clearInterval(intervalHandler);
		var counterMiliSec = 0;
		var counterMiliSecT = 0;
		var counterSec = 0;
		var counterSecT = 0;
		var counterMin = 0;
		var counterMinT = 0;
		get("span6").innerHTML = counterMiliSec;
		get("span5").innerHTML = counterMiliSecT;
		get("span4").innerHTML = counterSec;
		get("span3").innerHTML = counterSecT;
		get("span2").innerHTML = counterMin;
		get("span1").innerHTML = counterMinT;
		flag = false;
	}


	// НАЧАЛО ПРОГРАММЫ
	get("btn_start").onclick = startCount;
	get("btn_stop").onclick = stopCount;
	get("btn_reset").onclick = resetCount;

}