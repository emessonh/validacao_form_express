const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Minha Aplicação Express' });
});

app.post('/pre-matricula', (req, res) => {
    console.log('recebeu requisição');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});