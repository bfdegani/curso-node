var mysql = require('mysql');

function createDBConnection(){
  return mysql.createConnection({
    host : 'localhost',
    user : 'bfdegani',
    password : '1234rewq',
    database : 'casadocodigo'
  });
}

//wrapper
//dessa maneira, a conexão com o banco sera criada apenas quando o objeto for 
//carregado e nao no carregamento do modulo (o que aconteceria se o conteudo
//da funcao createDBConnection estivesse dentro da funcao chamada definida em
//module.exports)
module.exports = function(){
  return createDBConnection;
}
