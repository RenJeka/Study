const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

const port = process.env.PORT || 5000;

const adminCredentials = {
    login: 'admin',
    password: '123456'
};

const folderPaths = {
    image: '/images',
    styles: '/styles',
    js: '/js',
};

const pagesPaths = {
    index: '/pages/index.html',
    notFound: '/pages/404.html'
};

app.use('/', express.static(path.join(__dirname, folderPaths.image)));
app.use('/', express.static(path.join(__dirname, folderPaths.styles)));
app.use('/', express.static(path.join(__dirname, folderPaths.js)));
app.use(express.json());

app.get(['/', '/home', '/index.html'], (req, res) => {
    homePageHandler(req, res)
});

app.get(/\/\w*/, (req, res) => {
    notFoundPageHandler(req, res)
});

app.post('/data', (req, res) => {
    res.append('Content-Type', 'text/plain');

    if (checkAdminAuthorization(req.body)) {
        res.status(200).send('Authorized successfully!')
    } else {
        res.status(401).send('Bad credentials!')
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

function homePageHandler(req, res) {
    res.sendFile(path.join(__dirname, pagesPaths.index));
}

function notFoundPageHandler(req, res) {
    res.append('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, pagesPaths.notFound));
}

function checkAdminAuthorization(authData) {
    return (authData.login === adminCredentials.login) && (authData.pass === adminCredentials.password);
}
