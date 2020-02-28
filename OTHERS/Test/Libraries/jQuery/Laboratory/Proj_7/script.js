// TODO ===========================================
/* 

1.  Взять с сервера шаблон для библиотеки mustacheJS
2. 	Взять с сервера данные о расписании
3. 	Когда все будет в наличии — вывести на страницу данные по шаблону 


Настроить фильтры

При нажатии фильтра — очищать таблицу и выводить отфильтрованные данные
*/
// TODO ===========================================

/**
 * Функция, которая получает шаблон для обработки данных с сервера
 */
async function getTemplate() {

	let returnData = await fetch('myTemplate.mst')
		.then(response => response.text())

		return returnData
};

/**
 * Функция, которая получает данные с сервера
 */
async function getData() {

	let returnData = await fetch('data.json')
		.then(response => response.json())

		return returnData
};

// function renderData(dataToRender) {
	
// }


// Тут основной код
(async function () {
	
	// Ждем шаблон и записываемв переменную 
	let template = await getTemplate();
	let rawData = await getData();

	let readyData;

	// Заполнить данные по шаблону с помощью библиотеки mustacheJS
	// renderData(readyData);

	console.log(rawData);

	for (i = 0; i < rawData.length; i++) {
		readyData = Mustache.render(template, rawData[i]);
		$('#myTable').append(readyData);

	}

})()