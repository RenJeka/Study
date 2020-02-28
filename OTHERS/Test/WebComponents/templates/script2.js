window.onload = function () {
	

	templateWrapper = document.querySelector("#templateWrapper");
	templateWrapperContent = document.importNode(templateWrapper.content, true);
	templateWrapperTitle = templateWrapperContent.querySelector(".schedule-s2__body_month-block_title");
	table = templateWrapperContent.querySelector("#courses-table");


	templateWrapperTitle.innerHTML = "I am working. This is a header!!! ";
	document.body.appendChild(templateWrapperTitle);

};