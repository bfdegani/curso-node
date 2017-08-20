
// caso esse código esteja dentro do exports,
// ele eh executado sempre que o modulo for requisitado.
// do contrario, eh requisitado apenas na 1a vez e
// o mesmo objeto eh retornado nas chamadas seguintes
var app = require('express')();
app.set('view engine', 'ejs');

module.exports = function() {
  return app;
}
