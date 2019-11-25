window.addEventListener("load", ()=>{

	let myTemplate 		= document.querySelector('template'),
		myTemplateClone = document.importNode(myTemplate.content, true);

	document.body.appendChild(myTemplateClone);

})
