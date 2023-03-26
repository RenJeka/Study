const express = require('express');
const path = require('path');
const app = express();

const PORT = 5000;

const pagesPath = '/pages';
const cssPath = '/styles';
const imagePath = '/images';

// const StaticPagesOptions = {
//     dotfiles: 'ignore',
//     etag: false,
//     extensions: ['htm', 'html'],
//     index: false,
//     maxAge: '1d',
//     redirect: false,
//     setHeaders: function (res, path, stat) {
//         res.set('x-timestamp', Date.now())
//     }
// }
// app.use('/[a-zA-Z]*\.html/', (req, res, next) => {
//     console.log('path (html): ', req.baseUrl);
// });
// app.use('/[a-zA-Z]*\.css/', (req, res, next) => {
//     console.log('path (css): ', path.join(__dirname, cssPath));
//     next();
// });
//
// // app.use('/[a-zA-Z]*\.html/', express.static(path.join(__dirname, pagesPath)));
// app.use('/styles.css', express.static(path.join(__dirname, cssPath)));
// // app.use('/[a-zA-Z]*\.css/', express.static(path.join(__dirname, cssPath)));
// app.use('/[a-zA-Z]*\.{png | jpg | jpeg}/', express.static(path.join(__dirname, imagePath)));
// app.use((err, req, res, next) => {
//     console.log(err);
//     throw new Error(err)
// });

app.use('/', (req, res, next) => {
    console.log('path: ', path.join(__dirname, '/common'));
    console.log('req path: ', req.url);
    next();
});
app.use(express.static(path.join(__dirname, '/common')));

//
// app.get('/', (request, response) => {
//     response.sendFile(path.join(__dirname, pagesPath,'/index.html'));
// });

app.listen(PORT)