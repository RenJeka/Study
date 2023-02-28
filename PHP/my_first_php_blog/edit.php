<?php
include_once "model/articles.php";
include_once "model/categories.php";

$inputParameters = [
    'id_article' => '',
    'title' => '',
    'id_category' => '',
    'text' => ''
];
$err = '';
$articleData = [];
$categories = getAllCategories();
$isArticleExist = false;


// there is 2 verification — "checkID()" AND returned value of "getArticleByID()"
if (checkID($_GET['id'])) {
    $articleData = getArticleByID($_GET['id']);
    // verification for non-existent id
    ($articleData === null) ? $isArticleExist = false : $isArticleExist = true;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $isArticleExist === true) {
    $inputParameters['title'] = trim($_POST['title']);
    $inputParameters['text'] = trim($_POST['text']);
    $inputParameters['imageUrl'] = trim($_POST['imageUrl']);
    $inputParameters['id_article'] = $_GET['id'];
    $inputParameters['editDate'] = date("Y-m-d H:i:s");

    if (array_key_exists('id_category', $_POST)) {
        $inputParameters['id_category'] = trim($_POST['id_category']);
    }

    if ($inputParameters['title'] === '' || $inputParameters['text'] === '' || $inputParameters['id_category'] === '') {
        $err = 'Заполните все поля!';
    } else {
        updateArticle($inputParameters);
        header("Location:article.php?id=".$inputParameters['id_article']);
        exit();
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Редактирование статьи</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css" integrity="sha384-DhY6onE6f3zzKbjUPRc2hOzGAdEf4/Dz+WJwBvEYL/lkkIsI3ihufq9hk9K4lVoK" crossorigin="anonymous">
    <style>
         * {
            font-size: 18px;
        }
         .icon-home{
             top: -2px;
             left: 0;
             position: relative;
             display: inline-block;
         }
    </style>
</head>
<body>
<? if (!$isArticleExist) : ?>
    <div>Статья не найдена!</div>
<? else: ?>
    <div class="container ">

        <div class="row px-3">
            <div class="col">

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
                <div class="display-6 text-center">
                    Редактирование статьи
                </div>
                <form method="post">
                    <div class="mb-3">
                        <label for="articleTitle" class="form-label">Заголовок статьи:</label>
                            <input 
                                type="text" 
                                name="title"
                                value=<?= $articleData['title'] ?>
                                class="form-control" 
                                id="articleTitle" 
                                aria-describedby="articleTitleHelp"
                            >
                        <div id="articleTitleHelp" class="form-text">Введите сюда название своей статьи</div>
                    </div>

                    <div class="mb-3">
                        <label for="articleCategory" class="form-label">Выберите категорию статьи:</label>
                        <select name="id_category" class="form-select">
                            <? foreach ($categories as $category): ?>
                            <option 
                                value=<?= $category['id_category'] ?> <? if ($category['id_category']===$articleData['id_category']): ?>
                                selected
                                <? endif; ?>
                                > <?= $category['categoryName'] ?>
                            </option>
                            <? endforeach; ?>
                        </select>
                    </div>
            
                    <div class="mb-3">
                        <label for="articleText" class="form-label">Введите текст статьи: </label>
                        <textarea 
                            name="text" 
                            class="form-control" 
                            id="articleText" 
                            rows="10" 
                        ><?= $articleData['text'] ?></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="articleImageUrl" class="form-label">Ссылка на изображение</label>
                        <input
                                type="text"
                                name="imageUrl"
                                value="<?= $articleData['imageUrl']?>"
                                class="form-control"
                                id="articleImageUrl"
                                aria-describedby="articleImgUrlHelp"
                        >
                        <div id="articleImgUrlHelp" class="form-text">Просто правой кн. мыши на любой картинки в
                            интернете → и "Копировать URL"</div>
                    </div>

                    <div class="mb-3">
                        <button 
                            type="submit" 
                            class="btn btn-success btn-lg btn-block"
                        >Изменить статью</button>
                    </div>
                    <p><?= $err ?></p>
                </form>

            </div>
        </div>
    </div>
<? endif; ?>
</body>
</html>
