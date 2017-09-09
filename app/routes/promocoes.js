module.exports = function(app) {

  app.get('/promocoes/form',function(req,res){
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection); //new cria um novo contexto para esse objeto, do contrario, 'this' referencia todo o contexto do express

    produtosDAO.lista(function(erros, resultados){
      //console.log(resultados);
      res.render('promocoes/form',{lista:resultados}); //binding dos resultados com o elemento da página
    });
    //connection.end(); // usando pool
  });

  app.post('/promocoes',function(req,res){
    var promocao = req.body;
    console.log(promocao);
    app.get('io').emit('novaPromocao', promocao);
    res.redirect('/promocoes/form');
  });
}
