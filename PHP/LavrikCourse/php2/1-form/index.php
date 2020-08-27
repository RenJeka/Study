<?php

	include_once('model/apps.php');

	$isSend = false;
	$err = '';

	if($_SERVER['REQUEST_METHOD'] === 'POST') {
		$name = trim($_POST['name']);
		$phone = trim($_POST['phone']);
		
		if($name === '' || $phone === '') {
			$err = 'Заполните все поля!';
		} else if(mb_strlen($name, 'UTF8') < 2){
			$err = 'имя должно быть не короче 2-х символов! ';
		} 
		else {
			addApp($name, $phone);
			$isSend = true;
		}

	} else {
		$name = '';
		$phone = '';
	}

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
