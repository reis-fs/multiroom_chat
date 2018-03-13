// importar modulos
var express = require('express');
var path = require('path');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var PORT = process.env.PORT || 5000;

// iniciar o objeto do express
var app = express();

/* configurar o ejs, setar variaveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

// configurar middleware express.static
app.use(express.static('./app/public'));

// configurar middleware body-parser
app.use(bodyParser.urlencoded({extended:true}));

// configurar middleware express-validator
app.use(expressValidator());

// efetuar autoload das rotas, dos models e dos controllers para o objeto app
consign()
  .include('app/routes')
  .then('app/models')
  .then('app/controllers')
  .into(app);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

// exportar o objeto app
module.exports = app;
