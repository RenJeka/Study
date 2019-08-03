window.addEventListener("load", function () {
	moduleDOM2 = {};
	moduleDOM2.addEventListener = function (element, event, func, capturing) {

		if (window.addEventListener) {
			element.addEventListener(event, func, capturing);
		} else if(window.attachEvent){
			element.attachEvent("on"+event, func);
		}

	};
});



