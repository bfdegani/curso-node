var express = require('express');
var load = require('express-load'); //gerencia carregamento de modulos

module.exports = function() {
  var app = express();

  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  load('routes', {cwd:'app'}) //{cwd:'app'} indica que a busca pelos modulos deve ser na pasta app
    .then('infra', {cwd:'app'}) // carregamento deve respeitar dependencias
    .into(app);

  return app;
}
