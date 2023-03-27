const express = require('express');
const path = require('path');
const app = express();

const PORT = 5000;

const pagesPath = '/pages';
const cssPath = '/styles';
const imagePath = '/images';

app.use(express.static(path.join(__dirname, pagesPath)));
app.use(express.static(path.join(__dirname, cssPath)));
app.use(express.static(path.join(__dirname, imagePath)));

app.listen(PORT)
