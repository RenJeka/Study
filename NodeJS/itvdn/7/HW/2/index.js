const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');

const app = express();
const router = express.Router();

const port = process.env.PORT || 5000;

const folderPaths = {
    pages: '/pages',
    image: '/images',
    styles: '/styles',
    js: '/js',
};

const pagesPaths = {
    login: path.join(__dirname, '/pages/login.html'),
    notFound: path.join(__dirname, '/pages/404.html'),
};

router.route(['/', '/home', '/index.html'])
    .get((req, res) => {
        if (!req.session.isNew) {
            res.status = '200';
            res.render('hello', { userName:  req.session.userName });
        } else {
            res.sendFile(pagesPaths.login);
        }
    })


router.route(/\/\w*/)
    .get((req, res) => {
        res.sendFile(pagesPaths.notFound);
    });

router.route('/login')
    .post((req, res) => {
        req.session.userName = getUserName(req.body);
        res.append('Content-Type', 'text/plain');
        res.send('Success!')
    })

// установка генератора шаблонов
app.set('views', __dirname + '/pages');
app.set('view engine', 'ejs');
app.use('/', express.static(path.join(__dirname, folderPaths.pages)));
app.use('/', express.static(path.join(__dirname, folderPaths.image)));
app.use('/', express.static(path.join(__dirname, folderPaths.styles)));
app.use('/', express.static(path.join(__dirname, folderPaths.js)));
app.use(express.json());
app.use(cookieSession({
    name: 'HW-2_session',
    keys: ['keys1']
}));
app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

function getUserName(body) {
    return body.login;
}

