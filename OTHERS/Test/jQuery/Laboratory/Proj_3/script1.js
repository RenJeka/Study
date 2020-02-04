// В этом проекте шаблон "template" подключается непосредственно в функцию "render"


window.onload = function(){
	let myOutput = document.querySelector('#output');
	let arrayOfObjects = [
		{
			name: "JJJ",
			surname: "Simpson",
			level: 1
		},
		{
			name: "QQQ",
			surname: "Smith",
			level: 2
		},
		{
			name: "AAA",
			surname: "Bonque",
			level: 3
		}
	];
	let outputMustacheRender
	let myTemplate = "<h3>Этот шаблон подключен через переменную</h3> <ul> <li><b>Имя: </b>{{name}}</li><li><b>Фамилия: </b>{{surname}}</li><li><b>Уровень: </b>{{level}}</li></ul>"

	for (var i = 0; i < arrayOfObjects.length; i++) {

		/**	
		 * Шаблон подключается непосредственно сюда, либо через переменную
		 */
		outputMustacheRender = Mustache.render(
			"<p> Hello, my name is  {{name}}! My surname is  {{surname}}, and my level is <b>{{level}}</b></p>",
			arrayOfObjects[i]
			);

		//// Попробуй подключить через переменную
		// outputMustacheRender = Mustache.render(myTemplate, arrayOfObjects[i] ); //*


		console.log(outputMustacheRender);
		myOutput.innerHTML += outputMustacheRender;

	}

}