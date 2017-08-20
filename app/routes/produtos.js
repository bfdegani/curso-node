module.exports = function(app) {
  app.get('/produtos', (req, res) => {
    console.log("listando produtos");

    var mysql = require('mysql');
    var connection = mysql.createConnection({
      host : 'localhost',
      user : 'bfdegani',
      password : '1234rewq',
      database : 'casadocodigo'
    });

    connection.query('select * from livros', function(err, results){
      //res.send(results);
      res.render("produtos/lista",{lista:results});
    });

    connection.end();
  });
}
