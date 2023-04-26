import express from 'express'
import path from "path";
const app = express()
const port = 3000

// import { fileURLToPath } from 'url';
//
// const __filename = fileURLToPath(import.meta.url);
//
// const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/names', (req, res) => {
    res.status(201).end(JSON.stringify(['Alex', 'Vlad', 'Sergii', 'Jeka']));
});

app.get('/home', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

export default app;
