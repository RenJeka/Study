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

const adminAuthData = [
    {login: 'admin', pass: '1111'},
];

const userAuthData = [
    {login: 'user-1', pass: '1111'},
    {login: 'user-2', pass: '2222'},
    {login: 'user-3', pass: '3333'}

];

const pagesPaths = {
    login: path.join(__dirname, '/pages/login.html'),
    notFound: path.join(__dirname, '/pages/404.html'),
};

// routes
router.route(['/', '/home', '/index.html'])
    .get((req, res) => {
        if (!req.session.isNew) {
            renderPageByUser(req.session.currentUsername, res);
        } else {
            res.sendFile(pagesPaths.login);
        }
    })


router.route('/login')
    .post((req, res) => {
        adminAuthHandler(req, res);
        userAuthHandler(req, res);
    })

router.route(/\/\w*/)
    .get((req, res) => {
        res.sendFile(pagesPaths.notFound);
    });


// for template generator 'ejs'
app.set('views', __dirname + '/pages');
app.set('view engine', 'ejs');

// static files middleware
app.use('/', express.static(path.join(__dirname, folderPaths.pages)));
app.use('/', express.static(path.join(__dirname, folderPaths.image)));
app.use('/', express.static(path.join(__dirname, folderPaths.styles)));
app.use('/', express.static(path.join(__dirname, folderPaths.js)));

// body-parser middleware
app.use(express.json());
// cookie-session middleware
app.use(cookieSession({
    name: 'NodeJS_lesson#8_HW#0_session',
    keys: ['keys1']
}));
// routing middleware
app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


function adminAuthHandler(req, res) {
    const currentAdmin = findCurrentAdmin(req.body);

    if (currentAdmin) {
        req.session.currentUsername = currentAdmin.login;
        renderPageByUser(currentAdmin.login, res);
    }
}

function userAuthHandler(req, res) {

    const currentUser = findCurrentUser(req.body);

    if (currentUser) {
        req.session.currentUsername = currentUser.login;
        renderPageByUser(currentUser.login, res);
    } else {
        res.status(401);
        res.end('No such user!')
    }

}

function findCurrentAdmin(currentUserData) {
    return adminAuthData.find((userData) => {
        return userData.login === currentUserData.login && userData.pass === currentUserData.pass
    });
}

function findCurrentUser(currentUserData) {
    return userAuthData.find((userData) => {
        return userData.login === currentUserData.login && userData.pass === currentUserData.pass
    });
}

function renderPageByUser(currentUserName, res) {
    switch (currentUserName) {
        case 'admin': {
            res.render('adminPage', {userName: currentUserName})
            break;
        }

        default: {
            res.render('userPage', {userName: currentUserName})
        }
    }
}
