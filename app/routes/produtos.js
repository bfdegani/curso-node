module.exports = function(app) {

  //consulta lista de produtos
  app.get('/produtos', (req, res) => {
    console.log("listando produtos");

    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection); //new cria um novo contexto para esse objeto, do contrario, 'this' referencia todo o contexto do express

    produtosDAO.lista((erros, resultados) => { // '() => ' representa uma forma alternativa de passar uma função como argumento
      res.format({
        html: function(){
          res.render("produtos/lista",{lista:resultados}); //binding dos resultados com o elemento da página
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
    res.render("produtos/form", {errosValidacao:{},produto:{}});
  })

  //gravacao de novo produto
  app.post('/produtos',function(req,res){
    var produto = req.body;
    console.log(produto);

    //validações de campos usando express-validator
    req.assert('titulo', 'Titulo é obrigatório').notEmpty();
    req.assert('descricao', 'Descrição é obrigatória').notEmpty();
    req.assert('preco', 'Preço deve ser número').isFloat();

    var erros = req.validationErrors();
    if(erros){
      console.log(erros);
      res.format({
          html: function(){
            res.status(400).render('produtos/form',{errosValidacao: erros,produto:produto}); //binding do objeto de erros com o elemento da página
          },
          json: function(){
            res.status(400).json(erros);
          }
      });
      return;
    }

    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);
    produtosDAO.salva(produto, function(erros, resultados){
      console.log(erros);
      res.redirect('/produtos');
    });
    connection.end();
  });
}
