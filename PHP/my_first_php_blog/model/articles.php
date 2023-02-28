<?php
include_once "model/db.php";

/**
 * get all articles from DB
 * @return array
 */
function getAllArticles(): array{
    $sql = "SELECT * FROM articles ORDER BY editDate DESC";
    $preparedQuery = dbPrepareQuery($sql);
    return $preparedQuery->fetchAll();
}

/**
 * return article (array of article's data from DB)
 * experiment for strict type
 * @param string $id id of requested article
 * @return array|null
 */
function getArticleByID(string $id): ?array {

    $sql = "SELECT * FROM articles WHERE id_article = :id";
    $preparedQuery = dbPrepareQuery($sql, ['id' => (int)$id]);
    $article = $preparedQuery->fetch();
    return is_array($article) ? $article : null;
}

/**
 * Input new article to DataBase through input mask parameters to sql query
 * @param array $inputMaskParameters parameters, that will inject to mask-place in SQL query
 * @return bool true, if sql-query has completed
 */
function addNewArticle(array $inputMaskParameters): bool{
    $sql = "INSERT INTO articles (title, text, id_category, imageUrl) VALUES (:title, :text, :id_category, :imageUrl)";
    dbPrepareQuery($sql, $inputMaskParameters);
    return true;
}

function updateArticle(array $inputMaskParameters): bool{
    $sql = "UPDATE articles
            SET id_category=:id_category,
                title=:title,
                text=:text,
                imageUrl=:imageUrl,
                editDate=:editDate
            WHERE id_article=:id_article";
    dbPrepareQuery($sql, $inputMaskParameters);
    return true;
}

function deleteArticle(int $id_article): bool{
    $sql = "DELETE FROM articles WHERE id_article=:id_article";
    dbPrepareQuery($sql, ['id_article' => (int)$id_article]);
    return true;
}

function checkID(string $id): bool{
    $pattern = "/^[1-9]+\d*/";
    return (bool)preg_match($pattern, $id);
}

