<?php

	include_once('functions.php');		

	$isDeleted = false;
	$errors = array();
	$articleId = (int)($_GET['id'] ?? '');
	if ($articleId > 0) {
		removeArticle($articleId);
		$isDeleted = true;
	} else {
		array_push($errors, "Неправильный ID! Попробуйте удалить статью снова.");
	}
	/*
		your code here
		get id from url
		check id
		call removeArticle
	*/
?>

<? if($isDeleted): ?>
	<p>Статья удалена!</p>
<?endif;?>
<? foreach($errors as $errorNumber => $error): ?>
	<p class="error"><?=$error?></p>
<? endforeach; ?>	
<hr>
<a href="index.php">Move to main page</a>