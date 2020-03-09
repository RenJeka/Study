

/**
 * Это асинхронная функция. Она работает отдельно от основного синхронного кода.
 * @param {*} myParam  Произвольный параметр
 */
async function myAsyncFunc(myParam) {
	return {id: 111}
}


// ВОПРОС. Что возвращает верхняя функция? Объект или обещание объекта. И почему?

/**
 * Это основная функция. Она тоже асинхронная, но в ней мы хотим вызвать функцию "myAsyncFunc" и подождать, когда вернется результат от "myAsyncFunc".
 */
(async function () {  

	let resultOfFunc = await myAsyncFunc(); // Ждем когда вернется результат от "myAsyncFunc()" и записываем этот результат в переменную "resultOfFunc"

	console.log(resultOfFunc);
})();