	
	window.onload = function(){
		var task3 = {};
		task3.FindClass = function (className) {
			
			arr = document.getElementsByClassName(className);
		};
		task3.FindClass("class1");
		console.log(arr);
	};