<?php

function getArticles(): array
{
    return json_decode(file_get_contents('db/articles.json'), true);
}

function addArticle(string $title, string $content): bool
{
    $articles = getArticles();

    $lastId = end($articles)['id'];
    $id = $lastId + 1;

    $articles[$id] = [
        'id' => $id,
        'title' => $title,
        'content' => $content
    ];

    saveArticles($articles);
    return true;
}

function editArticle(string $title, string $content, int $id): bool
{
    $articles = getArticles();

    $articles[$id]['title'] = $title;
    $articles[$id]['content'] = $content;
    saveArticles($articles);
    return true;
}

function removeArticle(int $id): bool
{
    $articles = getArticles();

    if (isset($articles[$id])) {
        unset($articles[$id]);
        saveArticles($articles);
        return true;
    }

    return false;
}

function saveArticles(array $articles): bool
{
    file_put_contents('db/articles.json', json_encode($articles));
    return true;
}

function checkErrors(string $title, string $content): string
{
    if ($title === '' || $content === '') {
        return 'Заполните все поля!';

    } else if (mb_strlen($title, 'UTF8') < 2) {
        return 'Заголовок должен быть не короче 2-х символов!';

    } else if (mb_strlen($content, 'UTF8') < 2) {
        return 'Текст статьи должен быть не короче 2-х символов!';
    } else {
        //  return 'no errors';
        return false;
    }

}

function logRequest()
{
    $filename = getLogFileName();
    file_put_contents("logs/$filename.txt", createLog(), FILE_APPEND);
}

/**
 * Method gets filename for log file without extension
 * @return string the filename without extension
 */
function getLogFileName(): string
{
    return date("d-m-Y");
}

/**
 * @param $serverInfo array — put $_SERVER here
 */
function createLog(): string
{
    // The elements that the log string consists of
    $currentDate = date('d-M-Y');
    $userIP = $_SERVER['REMOTE_ADDR'];
    if (array_key_exists('HTTP_REFERER', $_SERVER)) {
        $refererLink = $_SERVER['HTTP_REFERER'];
    } else {
        $refererLink = 'direct link';
    }
    $requestURI = $_SERVER['REQUEST_URI'];

    if (checkRequestURI($requestURI)){
        return "$currentDate;$userIP;$requestURI;$refererLink;!warning!\n";
    }else {
        return "$currentDate;$userIP;$requestURI;$refererLink\n";
    }

}

/**
 * return all log files (default one file per day)
 * @return array array of strings of log files
 */
function getAllLogs(): array
{
    $logFiles = scandir('logs');
    $propertyLogFiles = [];

    // make property array of strings of log files
    foreach ($logFiles as $fileName) {
        $fileNameWithoutExtension = substr($fileName, 0, -4);
        if (is_file("logs/$fileName") && preg_match('/.*\.txt$/', $fileName)) {
            array_push($propertyLogFiles, $fileNameWithoutExtension);
        }
    }
    return $propertyLogFiles;
}

function checkRequestURI($requestURI){
    $badStrings = true; // Проверка  регулярным выражением на подозрительные элементы строки
    return $badStrings;
}

/**
 * @param $logString string log string
 * @return bool TRUE, if in the log string has warning flag, otherwise FALSE
 */
function checkForBadLog(string $logString): bool
{
    $logString = rtrim($logString);
    $parts = explode(";", $logString);
    if($parts[count($parts) - 1] === "!warning!") {
        return true;
    }else {
        return false;
    }
}