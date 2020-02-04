window.addEventListener("load", ()=>{
 
	// let aaa = fetch('https://jsonplaceholder.typicode.com/users')
	// // fetch('https://jsonplaceholder.typicode.com/users')
	// // .then(response => response.json())
	// // .then(data => console.log(data));

	// aaa.then((data) => {
	// 	data.json().then(data2 => {
	// 		console.log(data2);
	// 	})
	// 	// console.log(data);
	// 	// console.dir(data.text());
	// 	// console.dir(data.json());
	// })
	
	let template,
		objects,
		mustacheResult;


	//// Не дает сделать запрос на сервер, чтобі взять одтуда шаблон для mustache js
	// fetch('https://edu.cbsystematics.com/assets/js/templates/template-schedulte.ru.mst', { mode: 'no-cors'})
	// 	.then(data => {
	// 		console.log("template Promice");
	// 		console.log(data);
	// 		return data.text();
	// 	})
	// 	.then(data => {
			
	// 		console.log("template text");
	// 		console.log(data);
	// 		template = data;
	// 		console.log(template);
	// 	})


	fetch('test.txt', {mode: 'no-cors'})
		.then(response => response.text())
		.then(response => {
			document.write(response);
		})


	// fetch('https://jsonplaceholder.typicode.com/users')
	// 	.then(data => {
	// 		console.log(data);
	// 		return data.json();
	// 	})
	// 	.then(data => {

	// 		objects = data;
	// 		console.log(objects);
	// 	})
 
})