window.onload = function(){



	var timer;
	var myWindow;

	function myFunk() {
		myWindow = window.open("extraPages/addTaskPage.html","New Window", "width =540, height = 400");
		
	}

	timer = setTimeout(myFunk, 5000);


}