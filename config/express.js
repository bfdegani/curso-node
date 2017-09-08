var express = require('express');
var load = require('express-load'); //gerencia carregamento de modulos
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function() {
  var app = express();

  app.use(express.static('./app/public')); //mapeia caminho dos conteudos estaticos
  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  //deve estar antes do load (abaixo) para garantir que o bodyparser seja executado. bodyparser atua como um middleware
  app.use(bodyParser.urlencoded({extended: true})); //bodyParser para conteudo html
  app.use(bodyParser.json()); //bodyParser para conteudo json
  app.use(expressValidator());

  load('routes', {cwd:'app'}) //{cwd:'app'} indica que a busca pelos modulos deve ser na pasta app
    .then('infra', {cwd:'app'}) // carregamento deve respeitar dependencias
    .into(app);

    //criado um midleware para tratar casos em que o express não encontra uma rota associada
    //importante estar após o tratamento de rotas do bloco acima, do contrário, será executado mesmo
    //quando existir um rota
    app.use(function(req,res,next){
      res.status(404).render('erros/404');
      next(); //libera a continuação do fluxo de execução do express
    });

    app.use(function(error,req,res,next){
      if(process.env.NODE_ENV == 'production'){
        res.status(500).render('erros/500',{error:error});
        return;
      }
        next(error);
    });
  return app;
}
