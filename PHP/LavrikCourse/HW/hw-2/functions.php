<?php

	// your functions may be here

	/* start --- black box */
	function getArticles() : array{
		return json_decode(file_get_contents('db/articles.json'), true);
	}

	function addArticle(string $title, string $content) : bool{
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

function editArticle(string $title, string $content, int $id) : bool{
    $articles = getArticles();

    $articles[$id]['title'] = $title;
    $articles[$id]['content'] = $content;
    saveArticles($articles);
    return true;
}

	function removeArticle(int $id) : bool{
		$articles = getArticles();

		if(isset($articles[$id])){
			unset($articles[$id]);
			saveArticles($articles);
			return true;
		}
		
		return false;
	}

	function saveArticles(array $articles) : bool{
		file_put_contents('db/articles.json', json_encode($articles));
		return true;
	}

	function checkErrors(string $title, string $content): string {
        if($title === '' || $content === '') {
            return 'Заполните все поля!';

        } else if(mb_strlen($title, 'UTF8') < 2){
            return 'Заголовок должен быть не короче 2-х символов!';

        } else if(mb_strlen($content, 'UTF8') < 2){
            return 'Текст статьи должен быть не короче 2-х символов!';
        } else {
            //  return 'no errors';
            return false;
        }

    }
	/* end --- black box */