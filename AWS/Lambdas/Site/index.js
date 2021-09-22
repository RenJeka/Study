var fakeList = ['1', '2', '3'];

var list = document.querySelector('#list');
var button = document.querySelector('#button');
var input = document.querySelector('#input');

function request(url, method, body, callback) {

	fetch(url, {
		method: method,
		body: method === 'POST' ? body : null
	})
		.then((response) => {
			if (response.status ===  200) {
				return response.json();
			}
		})
		.then(response => callback(JSON.stringify(response)))
		.catch((error) => {
			console.log(error);
		})

}

function inflateList(values) {
	list.innerHTML = '';
	for (let i = 0; i < values.Items.length; i++) {
		var li = document.createElement('li');
		li.innerHTML = values.Items[i].name;
		list.appendChild(li)
	}
}

button.addEventListener('click', () => {
	var text = input.value;
	input.value = '';
	button.innerText = 'Sending...';
	button.disabled = true;

	request('https://q8w5itkcmh.execute-api.us-east-2.amazonaws.com/dev/todos', 'POST', {text:text}, function(data) {
		var values = JSON.parse(data);

		inflateList(values);

		button.innerText = 'Add',
		button.disabled = false;
	});
})

request('https://q8w5itkcmh.execute-api.us-east-2.amazonaws.com/dev/todos', 'GET',{} , function(data) {
	inflateList(JSON.parse(data))
})