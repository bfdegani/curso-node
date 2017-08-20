var dbConnection = require('../infra/dbConnection');

module.exports = function(app) {
  app.get('/produtos', (req, res) => {
    console.log("listando produtos");

    var connection = dbConnection();
    
    connection.query('select * from livros', function(err, results){
      //res.send(results);
      res.render("produtos/lista",{lista:results});
    });

    connection.end();
  });
}
