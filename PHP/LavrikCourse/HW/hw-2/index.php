<?php

	include_once('functions.php');
	$articles = getArticles();

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Небольшой блог</title>
	<style>
		*{
			font-size: 22px;
		}
	</style>
</head>
<body>
	<a href="add.php">Add article</a>
	<hr>
	<div class="articles">
		<? foreach($articles as $id => $article): ?>
			<div class="article">
				<h2><?=$article['title']?></h2>
				<a href="article.php?id=<?=$id?>">Read more</a>
			</div>
		<? endforeach; ?>
	</div>
</body>
</html>

	