<?php
function getAllCategories(): array {
    $sql = "SELECT * FROM caterories ORDER BY id_category";
    $preparedQuery = dbPrepareQuery($sql);
    return $preparedQuery->fetchAll();
}

function getCategoryByID(int $id): array{
    $sql = "SELECT * FROM caterories WHERE id_category = :id";
    $preparedQuery = dbPrepareQuery($sql, ['id' => (int)$id]);
    return $preparedQuery->fetch();
}