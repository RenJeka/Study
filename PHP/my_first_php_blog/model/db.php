<?php


/**
 * create and return PHP Database Object
 * There is PDO is singleton
 * @return PDO PDO instance
 */
function getDBInstance(): PDO
{
    // Create singleton DB - connection
    static $db;
    if ($db === null) {
        $db = new PDO('mysql:host=localhost;dbname=<put here DB name>', '<put here your login to DB>', '<put here your password to DB>', [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]);
        $db->exec('SET NAMES UTF8');
    }
    return $db;
}

/**
 * preparation query to avoid SQL injection attack
 * @param string $sql target sql-query
 * @param array $inputParameters input parameters to inject into query mask-places
 * @return PDOStatement prepared sqlQuery
 */
function dbPrepareQuery(string $sql, array $inputParameters = []): PDOStatement
{
    $dbInstance = getDBInstance();
    $prepareSqlQuery = $dbInstance->prepare($sql);
    $prepareSqlQuery->execute($inputParameters);
    dbCheckErrors($prepareSqlQuery);
    return $prepareSqlQuery;
}

/**
 * check on SQL-errors for prepared sql-query
 * @param PDOStatement $preparedSqlQuery prepared query to find errors
 * @return bool true if no errors, otherwise print error and terminate the script
 */
function dbCheckErrors(PDOStatement $preparedSqlQuery): bool
{
    // get all errors
    $errInfo = $preparedSqlQuery->errorInfo();

    // if there is an error
    if ($errInfo[0] !== PDO::ERR_NONE) {
        echo "<pre>";
        print_r($errInfo[2]);
        echo "</pre>";
        exit();
    }
    // in no errors — return true
    return true;
}

function getLastInsertedID(): string
{
    $dbInstance = getDBInstance();
    return $dbInstance->lastInsertId();
}