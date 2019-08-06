window.addEventListener("load", function () {
	var btnSave = this.document.getElementById("btn_save");
	var spanWarning1 = this.document.getElementById("warning_1");
	var flag = false;

	btnSave.addEventListener("click", function () {
		flag = true;
		spanWarning1.innerHTML = "Сохранено!";
		return flag;
	});
	window.addEventListener("beforeunload", function () {
		if (flag == false) {
			return "Вы не сохранили текст!"
		}else{
			
		}
	});
});