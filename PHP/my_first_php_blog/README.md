# PHP- BLOG

#### This is my first php-blog, that is locating working on Beget hosting

##### Try it: https://yevhenii.website/php-blog/

This is the simplest project with 1 DB couple models and some pages

### Setting-up the project:
* Host this project on your hosting
* Create DataBase on your hosting
* Write in `model/db.php` the correct settings to your database (in `getDBInstance()` method)
```php
$db = new PDO('mysql:host=localhost;dbname=<put here DB name>', '<put here your login to DB>', '<put here your password to DB>', [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]);
```
* Start the project
* If errors occur — correct them.

