$(document).ready(()=>{

	let $condextDiv1 = $(".myDiv1");

	//console.log($condextDiv1.html());
	
	let $myDivs = $("div", $condextDiv1)
	console.log($myDivs);
	console.log($myDivs.text());
});