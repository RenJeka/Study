const express = require('express');
const app = express();
const path = require('path');
const sessionConfig = require('./database/sessionConfig');

const port = 8080;

// подключение модулей для обработки запросов 
const displayHandler = require('./controllers/displayhandler');
const insertHandler = require('./controllers/inserthandler');
const editHandler = require('./controllers/edithandler');

// установка генератора шаблонов 
app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');

// подгрузка статических файлов из папки view
app.use(express.static(path.join(__dirname, 'view')));

// middleware для обработки данных в формате JSON 
app.use(express.json());
app.use(express.text());

app.use(sessionConfig);

// загрузить таблицу с элементами 
app.get('/', displayHandler.displayItems);

// загрузка страницы для создания нового элемента 
app.get('/add', insertHandler.loadAddPage); 
// добавить новый элемент 
app.post('/add/newItem', insertHandler.addRow); 

// отобразить элементы в режиме редактирования 
app.get('/edit', displayHandler.displayItems); 

// загрузка страницы для редактирования элементов 
app.get('/edit/:id', editHandler.loadEditPage);

// редактирование элемента в бд 
app.put('/edit/:id', editHandler.changeItem);

// удаление элемента из бд 
app.delete('/edit/:id', editHandler.removeItem); 

// обработка ошибок 
app.use(function(err, req, res, next) {
	if (err) console.log(err.stack); 

	res.status(500).send('oops...something went wrong'); 
}); 

app.listen(port, function() {
	console.log('app listening on port ' + port);
});  
