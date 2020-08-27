<?php
	echo $_SERVER['REQUEST_METHOD'];

	// Выведем содержание массива "$_POST" красиво на экран
	// Все поля с формы попадут в массив "$_POST"
	echo "<pre>";
	print_r($_POST);
	echo "</pre>";
?>

<form method="post">
	<input type="text" name="a">
	<input type="text" name="b">
	<button>Send</button>

</form>