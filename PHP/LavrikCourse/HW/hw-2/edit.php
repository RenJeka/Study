<?php


include_once('functions.php');

$isEdit = false;
$err = '';
$currentId = null;
if($_SERVER['REQUEST_METHOD'] === 'POST') {

    $editTitle = trim($_POST['editArticleTitle']);
    $editContent = trim($_POST['editArticleText']);
    $currentId = $_REQUEST['id'];
    $err = checkErrors($editTitle, $editContent);

    if (!$err) {
        $err = '';
        $isEdit = true;
        editArticle($editTitle, $editContent, $currentId);
    }

} else {
    $currentId = $_GET['id'];
    $articles = getArticles();
    $editTitle = $articles[$currentId]['title'];
    $editContent = $articles[$currentId]['content'];
}
/*
    your code here
    check request method
    read POST-data
    validate data
    call addArticle
*/
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit article</title>
    <style>
        *{
            font-size: 22px;
        }
    </style>
</head>
<body>
<div class="form">
    <? if($isEdit): ?>
        <p>Статья успешно изменена!</p>
    <?else: ?>
        <form method="post">
            <p>Title: <input type="text" name="editArticleTitle" value="<?=$editTitle?>"></p>
            <p>Text of article: <input type="text" name="editArticleText" value="<?=$editContent?>"></p>
            <p><button>Send</button></p>
            <p><?=$err?></p>
        </form>
    <?endif;?>
</div>
<hr>
<a href="index.php">Move to main page</a>
</body>
</html>