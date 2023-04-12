const restify = require('restify');

const getController = require('./controllers/get.controller');
const addController = require('./controllers/add.controller');
const editController = require('./controllers/edit.controller');

const port = process.env.port || 3000;

const server = restify.createServer({
    name: 'nodeJS_lesson_9_HW_0'
});

server.use((req, res, next) => {
    console.log(`METHOD: ${req.method}, URL: ${req.url}`);
    next();
});

server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/', getController.getAllItems);

server.get('/:id', getController.getItem);

server.post('/', addController.addNewItem);

server.put('/:id', editController.changeItem);

server.del('/:id', editController.removeItem);

server.listen(port, () => {
    console.log(`server running on port ${port}`);
});
