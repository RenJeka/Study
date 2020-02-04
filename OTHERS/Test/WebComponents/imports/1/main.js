window.addEventListener("load", ()=>{
 
	let importContent = document.querySelector("#my-import-1").import;

	console.log(importContent);
	console.dir(importContent);
	console.dir(importContent.querySelector("h3"));
	document.body.appendChild(importContent);
 
})