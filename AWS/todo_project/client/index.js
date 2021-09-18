var fakeList = ['1', '2', '3'];

var list = document.querySelector('#list');
var button = document.querySelector('#button');
var input = document.querySelector('#input');

function request(url, method, body, callback) {

	fetch(url, {
		method: method,
		headers: {
      		'Content-Type': 'application/json'
    	},
		body: method === 'POST' ? JSON.stringify(body) : null
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

	let items = values.body.Items;

	// extract the number from id (string) and sort the array (values.body.Items) in ascending order.
	items.sort((prev, next) => {
		const prevIdIndex = prev.id.indexOf('-') + 1;
		const prevIdNumber = parseInt(prev.id.slice(prevIdIndex));
		const nextIdIndex = next.id.indexOf('-') + 1;
		const nextIdNumber = parseInt(next.id.slice(nextIdIndex));
		return prevIdNumber - nextIdNumber;
	})

	list.innerHTML = '';
	for (let i = 0; i < items.length; i++) {
		list.appendChild(prepareListItem(values.body.Items[i]));
	}
}

function prepareListItem(itemModel) {
	const li = document.createElement('li');
	const span = document.createElement('span');
	const button = document.createElement('button');

	span.innerText = itemModel.name;
	button.setAttribute("id", itemModel.id);
	button.innerText = 'Delete Item';
	button.style.borderRadius = '10px';
	button.style.padding = '3px';
	button.style.marginLeft = '20px';
	button.style.width = '130px';
	button.style.backgroundColor = '#d32f2f';
	button.style.border = 'none';
	button.style.display = 'inline-block';
	li.style.height = '40px';

	button.addEventListener("click", btnDeleteItemClickHandler.bind(button))

	li.append(span);
	li.append(button);
	return li;

}

function btnDeleteItemClickHandler() {

	const deletedItem = encodeURI(this.getAttribute('id'));

	request(`https://q8w5itkcmh.execute-api.us-east-2.amazonaws.com/dev/todos?id=${deletedItem}`, 'DELETE', null , function(data) {
		inflateList(JSON.parse(data));
	})	
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

request('https://q8w5itkcmh.execute-api.us-east-2.amazonaws.com/dev/todos?id=111', 'GET',{} , function(data) {
	inflateList(JSON.parse(data))
})