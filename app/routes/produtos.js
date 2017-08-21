module.exports = function(app) {
  app.get('/produtos', (req, res) => {
    console.log("listando produtos");

    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection); //new cria um novo contexto para esse objeto, do contrario, 'this' referencia todo o contexto do express

    produtosDAO.lista(function(erros, resultados){
      res.render("produtos/lista",{lista:resultados});
    });

    connection.end();
  });
}
