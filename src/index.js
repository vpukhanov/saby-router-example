const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const resourcePath = __dirname;
const staticPath = path.join(__dirname, '..', 'static');
const indexPath = path.join(staticPath, 'index.html');

app.use('/static', express.static(staticPath));
app.use(express.static(resourcePath));

// TODO Use router.json to match urls instead
app.get('/Travel/*', (req, res) => {
   res.sendFile(indexPath);
});

app.get('/', (req, res) => {
   res.redirect('/Travel/');
});

app.listen(port);
