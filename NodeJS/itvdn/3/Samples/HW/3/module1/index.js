// This project will output content from file to console

const path = require('path');
const fs = require('fs');
const todayDate = new Date().toDateString();

/**
 *
 * @param filePath {String} Path to file. Should starts from './' or without added symbols or be an absolute path
 */
function logFile(filePath) {
    const format = path.parse(filePath).ext;
    if (format !== '.txt') {
        console.log('Unknown format! Please use only \'.txt\' format!');
        return;
    }
    fs.readFile(filePath, (error, data) => {
        if (error) throw error;
        console.log(`${todayDate} : \n${Buffer.from(data, 'utf-8').toString() }`
        );
    });
}

module.exports = logFile;
