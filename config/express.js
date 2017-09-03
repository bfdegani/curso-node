var express = require('express');
var load = require('express-load'); //gerencia carregamento de modulos
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function() {
  var app = express();

  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  //deve estar antes do load (abaixo) para garantir que o bodyparser seja executado. bodyparser atua como um middleware
  app.use(bodyParser.urlencoded({extended: true})); //bodyParser para conteudo html
  app.use(bodyParser.json()); //bodyParser para conteudo json
  app.use(expressValidator());

  load('routes', {cwd:'app'}) //{cwd:'app'} indica que a busca pelos modulos deve ser na pasta app
    .then('infra', {cwd:'app'}) // carregamento deve respeitar dependencias
    .into(app);

  return app;
}
