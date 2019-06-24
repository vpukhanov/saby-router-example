/*
   Эмуляция разрешения маршрутов сервисом представления
*/

const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const resourcePath = __dirname;
const staticPath = path.join(__dirname, '..', 'static');
const indexPath = path.join(staticPath, 'index.html');

app.use('/static', express.static(staticPath));
app.use(express.static(resourcePath));

// Реальный сервис представления использует таблицы router.json
// для сопоставления маршрутов (описано в статье). В этом демо
// оба модуля разрешаются в один файл в связи с отсутствием
// Controls.Application и серверного роутинга
app.get('/Travel/*', (req, res) => res.sendFile(indexPath));
app.get('/Purchases/*', (req, res) => res.sendFile(indexPath));

// Реальный сервис представления смотрит на маршрут "/" в таблицах замен
app.get('/', (req, res) => {
   res.redirect('/Travel/');
});

app.listen(port);
