window.addEventListener("load", ()=>{

	(async function () {  
		let stringTemplate = await fetch('template.html'); // Промис шаблона
		let arrOfObject = await fetch('data.json'); // Промис объекта
		let localStringTemplate; // Локальный шаблон
		let localArrOfObject;	// Локальный объект
		let compiledTemplate;	// Скомпилированный шаблон при помощи библиотеки "Handlebars"
		let container = document.querySelector("#container"); // Контейнер, куда это все будет добавлятся (рендериться).
	
		
		localStringTemplate = await stringTemplate.text();

		compiledTemplate = Handlebars.compile(localStringTemplate);

		localArrOfObject = await arrOfObject.json();

		container.innerHTML = compiledTemplate(localArrOfObject);

	})()
})