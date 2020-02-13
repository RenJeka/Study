const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
const method = 'GET';
const isAsync = false;

main5();

function main1() {
	$.get(url)
		.then(data => {
			console.log(data);
		})

}

function main2() {
	
	let params = {method, url}

	$.ajax(params)
		.done(data => {
			
			console.log(JSON.parse(data));
		});
		
}

/**
 * Работает только с новіми версиями jQuery
 */
async function main3() {
	
	let params = {method, url}

	const request = await $.ajax(params);

	console.log(request);
		
}

function main4() {
	
	let params = {method, url}

	const request = $.ajax(params);

	console.log(request);
		
}

function main5() {
	console.log(fetch(url));
	
}

