var fakeList = ['1', '2', '3'];

const taskContainer = document.querySelector('#taskContainer');
const button = document.querySelector('#button');
const input = document.querySelector('#input');
const loadingInfo = document.querySelector('#loadingInfo');

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
	});

	loadingInfo.classList.add('loading-hidden');
	for (let i = 0; i < items.length; i++) {
		taskContainer.appendChild(prepareListItem(values.body.Items[i]));
	}
}

function prepareListItem(itemModel) {
	const tr = document.createElement('tr');
	const tdTask = document.createElement('td');
	const tdBtnRemove = document.createElement('td');
	const span = document.createElement('span');
	const button = document.createElement('button');

	span.innerText = itemModel.name;
	button.setAttribute("id", itemModel.id);
	button.innerText = 'Delete';
	button.classList.add('btn-remove');
	tr.classList.add('task-item');
	tdBtnRemove.classList.add('td-btn-remove');

	button.addEventListener("click", btnDeleteItemClickHandler.bind(button))

	tdTask.append(span);
	tdBtnRemove.append(button);
	tr.append(tdTask);
	tr.append(tdBtnRemove);
	return tr;

}

function btnDeleteItemClickHandler() {

	const deletedItem = encodeURI(this.getAttribute('id'));

	request(`https://q8w5itkcmh.execute-api.us-east-2.amazonaws.com/dev/todos?id=${deletedItem}`, 'DELETE', null , function(data) {
		inflateList(JSON.parse(data));
	});
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
});

request('https://q8w5itkcmh.execute-api.us-east-2.amazonaws.com/dev/todos?id=111', 'GET',{} , function(data) {
	inflateList(JSON.parse(data))
});
