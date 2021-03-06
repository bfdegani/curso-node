var mysql = require('mysql');
var pool;

function connectionFactory(){
  if(!pool){
    if(!process.env.NODE_ENV) {
      console.log('running in development database');
      pool = mysql.createPool({
        connectionLimit : 10,
        host : 'localhost',
        user : 'bfdegani',
        password : '1234rewq',
        database : 'casadocodigo'
      });
    }
    else if(process.env.NODE_ENV === 'test') { // '===' difere de '==' por nao fazer conversao de tipo e só retorna true se os objetos são do mesmo tipo e iguais (nesse caso, não faz diferença)
      console.log('running in test database');
      pool = mysql.createPool({
        connectionLimit : 10,
        host : 'localhost',
        user : 'bfdegani',
        password : '1234rewq',
        database : 'casadocodigo_test'
      });
    }
    else if(process.env.NODE_ENV === 'production') {
      console.log('running in remote production database');
      pool = mysql.createPool({
        connectionLimit : 10,
        host : 'us-cdbr-iron-east-05.cleardb.net',
        user : 'ba0b8a9ddbcb56',
        password : 'e93618dd',
        database : 'heroku_a4e42e6c2ce8850'
      });
    }
  }
  return pool;
}

//wrapper
//dessa maneira, a conexão com o banco sera criada apenas quando o objeto for
//carregado e nao no carregamento do modulo (o que aconteceria se o conteudo
//da funcao createDBConnection estivesse dentro da funcao chamada definida em
//module.exports)
module.exports = function(){
  return connectionFactory;
}
