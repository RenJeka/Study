<?php
include_once "model/articles.php";

$isDeleted = false;
$errors = array();
$articleId = (int)($_GET['id'] ?? '');

if ($articleId > 0) {
    $isDeleted = deleteArticle($articleId);
} else {
    array_push($errors, "Wrong ID! Try deleting the article again.");
}
?>

<!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Deleting an article</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css"
		integrity="sha384-DhY6onE6f3zzKbjUPRc2hOzGAdEf4/Dz+WJwBvEYL/lkkIsI3ihufq9hk9K4lVoK" crossorigin="anonymous">

	<style>
	* {
		font-size: 18px;
	}
	</style>
</head>

<body>
	<div class="container">
		<div class="row">
			<div class="col-md-12 ">
				<div class="d-flex flex-column justify-content-center align-items-center my-5">
					<? if ($isDeleted): ?>
					<h1 class="display-3 text-center">Article deleted!</h1>
					<? endif; ?>
					<? foreach ($errors as  $error): ?>
					<p class="error"><?= $error ?></p>
					<? endforeach; ?>
					<div class="my-3">
                        <a href="index.php" class="btn btn-primary btn-lg">Main page</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>

</html>
