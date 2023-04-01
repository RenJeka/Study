const express = require('express');
const path = require('path');
const fs = require('fs');
const mongoDBModule = require('./modules/mongodb');

const app = express();
const router = express.Router();

const port = process.env.PORT || 80;

const folderPaths = {
    pages: '/pages',
    styles: '/styles',
    js: '/js',
};

const pagesPaths = {
    registration: path.join(__dirname, '/pages/registration.html'),
};

const loggerPath = `logs/logs_${getCurrentDateString()}.txt`;

router.route(['/', '/home', '/index.html'])
    .get((req, res) => {
        res.sendFile(pagesPaths.registration);
    })

router.route('/registration')
    .post(async (req, res) => {
        res.append('Content-Type', 'text/plain');
        if (req.body && validateCredentials(req.body)) {
            try {
                await addUserCredentials(req.body);
                res.status(200).send(await getDBData());
            }catch(err) {
                console.log(err);
            }
        } else {
            res.status(400).send('Unregistered!');
        }

    });

router.route(/\/\w*/)
    .get((req, res) => {
        res.append('Content-type', 'text/html');
        res.send(`<h1 style="text-align: center; color: darkred">Oops! Page is not found!</h1>`);
    });

app.use('/', express.static(path.join(__dirname, folderPaths.pages)));
app.use('/', express.static(path.join(__dirname, folderPaths.styles)));
app.use('/', express.static(path.join(__dirname, folderPaths.js)));
app.use(express.json());
app.use('/registration', (request, response, next) => {
    logToFile(request, 'Registration',  true)
    next();
});
app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

// Logging start
function getCurrentDateString() {
    const today = new Date();
    const day = today.getUTCDate();
    const month = today.getUTCMonth() + 1;
    const year = today.getUTCFullYear();
    return `${day}_${month}_${year}`;
}

function logToFile(request, logHeader = 'Log', needBody = false) {
    let data = `${logHeader} : ${request.ip}; Time: ${new Date().toLocaleString()}; URL : ${request.url}\n`;
    if (needBody) {
        data += `Data: ${ JSON.stringify(request.body)}\n`;
    }
    data += '---------------------------\n';

    fs.appendFile(loggerPath, data, function(err){
        console.log('registration data wrote');
    });
}

// Logging end

function validateCredentials(body) {
    return !!body;
}

async function addUserCredentials(body) {
    console.log('userCredentials: ', body);
    await mongoDBModule.connectMongoDB();
    await mongoDBModule.insertOne(formalizingData(body));
    await mongoDBModule.closeMongoDBConnection();
}

async function getDBData() {
    let data = '';
    await mongoDBModule.connectMongoDB();
    data = await mongoDBModule.getAllData();
    await mongoDBModule.closeMongoDBConnection();
    return data;
}

function formalizingData(data) {
    return data;
}

