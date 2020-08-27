<?php
	declare (strict_types = 1);
	include_once 'functions.php';
	$nameShouldBeCamelCase = true;

	var_dump(checkId($_GET['id'] ?? ''));
	var_dump(checkId(12));
