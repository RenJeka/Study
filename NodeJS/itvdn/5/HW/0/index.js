const express = require('express');

const app = express();
const PORT = 8080;

app.get('/', (request, response) => {
    response.send(`
    <h1>Hello, Jeka! This is my simple server on ExpressJS!</h1>
    <h2>Let's build something amazing</h2>
    <button><a href="/about">About page</a></button>
`)
});

app.get('/about', (request, response) => {
    response.send(`
    <h1>About us!</h1>
    <h2>I am programmer on NodeJS!</h2>
    <button><a href="/">Home Page</a></button>
`)
});

app.listen(PORT)