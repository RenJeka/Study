<?php

	$isSend = false;
	$err = '';
	if($_SERVER['REQUEST_METHOD'] === 'POST') {
		echo 'post';
		$name = trim($_POST['name']);
		$phone = trim($_POST['phone']);
		
		if($name === '' || $phone === '') {
			$err = 'Заполните все поля!';
		} else if(mb_strlen($name, 'UTF8') < 2){
			$err = 'имя должно быть не короче 2-х символов! ';
		} 
		else {
			$dt = date("Y-d-m H:i:s");
			$mailBody = "$dt\nPhone: $phone\nName: $name";
			mail('1@1.ru', 'New app on site', $mailBody);
			$isSend = true;
		}

	} else {
		$name = '';
		$phone = '';
		echo 'get method!';
	}

	echo $_SERVER['REQUEST_METHOD'];

	// Выведем содержание массива "$_POST" красиво на экран
	// Все поля с формы попадут в массив "$_POST"
	echo "<pre>";
	print_r($_POST);
	echo "</pre>";
?>

<div class="form">
	<? if($isSend): ?>
		<p>Ваша заявка принята.</p>
	<?else: ?>
		<form method="post">
			<p>Name: <input type="text" name="name" value="<?=$name?>"></p>
			<p>Phone: <input type="text" name="phone" value="<?=$phone?>"></p>
			<p><button>Send</button></p>
			<p><?=$err?></p>
		</form>
	<?endif;?>
</div>
