<?php
include_once "model/articles.php";
include_once "model/categories.php";
$db = getDBInstance();
$id_article = $_GET['id'] ?? '';
$article = getArticleByID($id_article);
$isArticleExist = $article !== null;

if ($isArticleExist) {
    $articleCategory = getCategoryByID($article['id_category']);
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Статья — <?= $article['title'] ?> </title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css" integrity="sha384-DhY6onE6f3zzKbjUPRc2hOzGAdEf4/Dz+WJwBvEYL/lkkIsI3ihufq9hk9K4lVoK" crossorigin="anonymous">

    <style>
        * {
            font-size: 18px;
        }

        .title-article__date {
            font-size: 18px;
            color: gray;
        }

        .title-article__category {
            font-style: italic;
            font-size: 16px;
            color: #4e4e4e;
        }

        pre {
            white-space: pre-wrap;
            white-space: -moz-pre-wrap;
            white-space: -pre-wrap;
            white-space: -o-pre-wrap;
            word-wrap: break-word;
        }

        .icon-home{
            top: -2px;
            left: 0;
            position: relative;
            display: inline-block;
        }

        .edit-date {
            font-size: 12px;
            font-weight: lighter;
        }

        @media screen and (max-width: 450px) {
            .btn-edit{
                margin-bottom: 20px;
            }
        }
    </style>
</head>
<body>
<div class="container">
    <div class="row px-3">
        <div class="mt-3">
            <a href="index.php" class="btn btn-primary btn-sm">
                <span class="background-color-warning">
                    <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            class="icon-home"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                    >
                    <path fill-rule="evenodd"
                          transform="rotate(-90 8 8)"
                          d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047z"></path>
                </svg>
                </span>
            На главную</a>
        </div>
        <? if ($isArticleExist): ?>
            <div class="article">
                <h1 class="display-4 text-center">
                    <?= $article['title'] ?>
                    <span class="title-article__date">
                        ( <?= substr($article['addDate'], 0, 10) ?> )
                    </span>
                    <span class="title-article__category">
                        <?= $articleCategory['categoryName'] ?>
                    </span>
                </h1>
                <? if ($article['imageUrl']): ?>
                    <img class="img-fluid my-3 mx-auto d-block" src="<?=$article['imageUrl']?>">
                <? else: ?>
                    <p class="text-muted  text-center font-weight-light">Добавьте  изображение для этой статьи</p>
                <?endif;?>

                <div>
                    <pre class="p-2 border border-2 border-secondary rounded"><?= $article['text'] ?></pre>
                </div>

                <p class="edit-date"> Последнее изменение было <span
                            class="edit-date"><?=$article['editDate']?></span></p>
                <hr>

                <div class="my-2">
                    <a 
                        href="edit.php?id=<?= $article['id_article'] ?>" 
                        class="btn-edit btn btn-outline-secondary mr-4"
                    >Редактировать статью</a>
                    <a 
                        href="delete.php?id=<?= $article['id_article'] ?>" 
                        class="btn btn-danger btn-sm"
                    >Удалить статью</a>
                </div>
            </div>
        <? else: ?>
            <div class="e404">
                <h1>Страница не найдена!</h1>
            </div>
        <? endif; ?>
    

    </div>
</div>
</body>
</html>
