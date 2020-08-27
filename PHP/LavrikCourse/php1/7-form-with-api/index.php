<div class="form">
	<form method="post" class="app-form">
		<p>Name: <input type="text" name="name" ></p>
		<p>Phone: <input type="text" name="phone" ></p>
		<div class="err"></div>
		<p><button>Send</button></p>
		<p class="err"></p>
	</form>
</div>

<script>
	let form = document.querySelector('.app-form');
	let errorBax = document.querySelector('.err');

	form.addEventListener("submit", (e)=>{
		e.preventDefault();
		let formData = new FormData(form);

		console.log(formData);

		fetch('send.php', {
			method: 'POST',
			body: formData
		})
		.then(response => response.json())
		.then(data => {
			if (data.res) {
				form.innerHTML = 'Ваши данные отправлены! Спасибо за сотрудничество! =)';
			} else {
				errorBax.innerHTML = data.error;
			}
		});

	})
</script>