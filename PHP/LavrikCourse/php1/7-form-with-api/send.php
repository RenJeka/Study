<?php

	$response = [
		'res' => false,
		'error' => '',
	];

	if($_SERVER['REQUEST_METHOD'] === 'POST') {
		$name = trim($_POST['name']);
		$phone = trim($_POST['phone']);
		
		if($name === '' || $phone === '') {
			$response['error'] = 'Заполните все поля';
		} else if(mb_strlen($name, 'UTF8') < 2){
			$response['error'] = 'имя должно быть не короче 2-х символов! ';
		} 
		else {
			$dt = date("Y-d-m H:i:s");
			$mailBody = "$dt\nPhone: $phone\nName: $name";
			mail('1@1.ru', 'New app on site', $mailBody);
			$response['res'] = true;
		}
	} 

	echo json_encode($response);