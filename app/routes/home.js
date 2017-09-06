module.exports = function(app){
  app.get('/',function(req,res){
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection); //new cria um novo contexto para esse objeto, do contrario, 'this' referencia todo o contexto do express

    produtosDAO.lista(function(erros, resultados){
      res.render('home/index',{livros:resultados}); //binding dos resultados com o elemento da página
    });
    connection.end();
  });
}
