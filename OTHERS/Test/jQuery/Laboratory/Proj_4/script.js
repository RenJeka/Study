$(document).ready(function () {
	
	let JSONdata;

	// $.get('http://jsonplaceholder.typicode.com/posts')
	// 	.then(data => {

	// 		JSONdata = data;
	// 		console.log(JSONdata.length);

	// 		for (i = 0; i < JSONdata.length; i++) {

	// 			let renderMustache = Mustache.render($('#myTemplate').text() , JSONdata[i]);
	// 			$('#output').append(renderMustache);
				
	// 		}
	// 	})



	// fetch('https://edu.cbsystematics.com/ru/schedule/get-course-plans', {mode: 'no-cors'})
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(data => data.json())
		.then(data => {
			console.log(data);
		})

	// $.get('https://google.com')
	// 	.then(
	// 		function (data) {
	// 			console.log(data);
	// 		}
	// 	)
});