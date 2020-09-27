const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
var handlebars = require('express-handlebars');
const over = require('method-override')
app.engine('handlebars',handlebars({defaultLayout:'mainLayout'}))
app.set('view engine', 'handlebars') 
app.use(bodyParser.urlencoded({extended:true}))
app.use(over('X-HTTP-Method-Override'))
app.use(over('_method', {methods:['GET', 'POST', 'PUT', 'DELETE']}))
app.get('/projeto/form',  (req, res) => {res.render('formView')})

app.put('/projeto/atualizar', (req, res) => {
	res.render('mensagens', {nome: req.body.nome, cpf:req.body.cpf})})

  
app.listen(3000, () =>{//testando
	console.log('funcionando')
})