const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const validate = require('./validate/validate-form.js')

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Minha Aplicação Express' });
});

app.post('/pre-matricula', (req, res) => {
    const { ddd, email} = req.body;
    const validForm = validate.validateForm(req.body)
    const validCpf = validate.validateEmail(email)
    const validDDD = validate.validateTelCode(ddd)
    const validAtv = validate.validateAtv(req.body)
    if (validForm && validCpf && validDDD && validAtv){
      res.render('success', { message: 'Formulário enviado com sucesso!' })
    }
    else if (!validForm){
      res.render('error', { message: 'Erro ao enviar formulário! Campos faltantes'});
    }
    else if (!validCpf){
      res.render('error', { message: 'Erro ao enviar formulário! Email inválido'});
    }
    else if (!validAtv){
      res.render('error', { message: 'Erro ao enviar formulário! Quantidade de atividades maior do que 3'});
    }
    else if (!validDDD){
      res.render('error', { message: 'Erro ao enviar formulário! DDD inválido'});
    }
    res.render('error', { message: 'Erro ao enviar formulário!'})
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});