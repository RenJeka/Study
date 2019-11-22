window.addEventListener("load", ()=>{
 
	const myMap = new Map([
		['Hi', "Привет"],
		[42, "Ответ на главный вопрос мироздания и всего такого..."],
		[true, false],
		[{}, "this is an object"],
		[function() {}, "this is a function"],
		['some key', "some value"],
		
	]);
	const myTable = document.querySelector("#myTable1");
	let whatConstructor;


	whatConstructor = myTable.rows instanceof String;
	console.log(myMap);
	console.dir(myTable);
	console.log(`whatConstructor`, whatConstructor);

 
})