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
        sessionHandler(req,res);
    })

router.route('/logout')
    .get((req, res) => {
        req.session.currentUsername = '';
        res.status(200).end('Logged out')
    })

router.route('/adminPage')
    .get((req, res) => {
        if (req.session.currentUsername) {
            res.render('adminPage', {userName: currentUserName})
        } else {
            res.render('accessDenied');
        }
    })

router.route('/userPage')
    .get((req, res) => {
        if (req.session.currentUsername) {
            res.render('userPage', {userName: currentUserName})
        } else {
            res.render('accessDenied')
        }
    })


router.route('/guestPage')
    .get((req, res) => {
        res.render('guestPage')
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


function sessionHandler(req, res) {
    const sessionData = getSessionData(req.body)
    if (sessionData) {
        req.session.currentUserName = sessionData;
        res.status(200).end(`Successfully logged in with ${sessionData}`);
    } else (
        res.status(401).end(`Can\'t find user \'${req.body.login}\' with such password. Please try other!`)
    )
}

function getSessionData(authData) {

    const adminData = findCurrentAdmin(authData)
    const userData = findCurrentUser(authData)

    if (adminData) {
        return  adminData.login;

    } else if (userData) {
        return userData.login;

    } else {
        return false;
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
