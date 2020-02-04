// В этом проекте шаблон "template" подключается из вне (из файла index2.html) 


window.addEventListener("load", ()=>{
 
	let output = document.querySelector("#output");
	let objects = [
		{name: "Luke"}, {name: "Maria"}, {name: "Nency"}, {name: "Andry"}
	]

	// Здесь мы берем innerHTML у любого тега, у которого мы можем поместить разметку внутрь тега (тег <script>  или тег <template>)
	let template = document.querySelector("#myTemplate").innerHTML;
	let mustacheResult;

	
	for (i = 0; i < objects.length ; i++) {
		mustacheResult = Mustache.render(template, objects[i]);
		output.innerHTML += mustacheResult;
	}
	
})