// file system
const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//
//     if (err) {
//         throw err;
//     }
//
//     console.log('Directory created!');
// })

const filePath = path.join(__dirname, 'test', 'text.txt');

// fs.appendFile(filePath, '\nHello NodeJS!!! Ula-la!!!', (err) => {
//
//     if (err) {
//         throw err
//     } else {
//         console.log('File was created!');
//
//     }
// })

fs.readFile(filePath, 'utf-8',  (err, content) => {

    if (err) {
        throw err;
    }
    console.log(content);

    // const data = Buffer.from(content);
    // console.log('data: ', data.toString());
})
