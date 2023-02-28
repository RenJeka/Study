<?php

include_once "model/articles.php";
$articles = getAllArticles();
?>

<!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Мой блог</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css"
		integrity="sha384-DhY6onE6f3zzKbjUPRc2hOzGAdEf4/Dz+WJwBvEYL/lkkIsI3ihufq9hk9K4lVoK" crossorigin="anonymous">

	<style>
	* {
		font-size: 18px;
	}

	.title-article-date {
		font-size: 16px;
		color: gray;
	}
    .image-block{
        width: 150px;
        height: 150px;
        background-repeat: no-repeat;
        background-size: contain;
    }

    .article-block{
        display: flex;
        position: relative;
    }

    @media screen and (max-width: 600px){
        .article-block{
            flex-direction: column;
            align-items:center;
        }
    }

	</style>
</head>

<body>
	<div class="container">
		<div class="row mx-3 ">
            <h1 class="display-6 text-center">Это мой блог на PHP, с помощью базы данных </h1>
            
            <a href="add.php" class="btn btn-success btn-sm">Добавить статью</a>
            
			<div class="my-4">
				<? foreach ($articles as $article): ?>
				<div
                        class="
                            article-block
                            my-3
                            p-3
                            border
                            border-2
                            border-secondary
                            rounded
                        "
                >
                    <div class="image-block mr-3" style="background-image: url('<?=$article['imageUrl']?>')"></div>
					<div class="align-self-start">
                        <h6 class="mt-0"><?= $article['title'] ?>
                            <span class="title-article-date">( <?= substr($article['addDate'],
                                    0,10)?> )</span>
                        </h6>

                        <p><?= $article['text'] ?></p>
                        
                        <a href="article.php?id=<?= $article['id_article'] ?>" class="stretched-link">Читать статью</a>
                    </div>
				</div>
				<? endforeach; ?>
			</div>
		</div>
	</div>
</body>

</html>