"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
// import { fileURLToPath } from 'url';
//
// const __filename = fileURLToPath(import.meta.url);
//
// const __dirname = path.dirname(__filename);
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/names', (req, res) => {
    res.status(201).end(JSON.stringify(['Alex', 'Vlad', 'Sergii', 'Jeka']));
});
app.get('/home', (req, res) => {
    res.status(200).sendFile(path_1.default.join(__dirname, '/public/index.html'));
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
exports.default = app;
