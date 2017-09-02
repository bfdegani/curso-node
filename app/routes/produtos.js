module.exports = function(app) {

  //consulta lista de produtos
  app.get('/produtos', (req, res) => {
    console.log("listando produtos");

    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection); //new cria um novo contexto para esse objeto, do contrario, 'this' referencia todo o contexto do express

    produtosDAO.lista((erros, resultados) => { // '() => ' representa uma forma alternativa de passar uma função como argumento
      res.format({
        html: function(){
          res.render("produtos/lista",{lista:resultados});
        },
        json: function(){
          res.json(resultados);
        }
      });

    });
    connection.end();
  });

  //formulario para inclusao de novos produtos
  app.get('/produtos/form', (req,res) => {
    res.render("produtos/form");
  })

  //gravacao de novo produto
  app.post('/produtos',function(req,res){
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);

    var produto = req.body;
    console.log(produto);

    produtosDAO.salva(produto, function(erros, resultados){
      console.log(erros);
      res.redirect('/produtos');
    });
    connection.end();
  });
}
