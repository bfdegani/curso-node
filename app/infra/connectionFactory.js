var mysql = require('mysql');

function createDBConnection(){
    if(!process.env.NODE_ENV) {
      console.log('running in development database');
      return mysql.createConnection({
        host : 'localhost',
        user : 'bfdegani',
        password : '1234rewq',
        database : 'casadocodigo'
      });
  }

  else if(process.env.NODE_ENV === 'test') { // '===' difere de '==' por nao fazer conversao de tipo e só retorna true se os objetos são do mesmo tipo e iguais (nesse caso, não faz diferença)
    console.log('running in test database');
    return mysql.createConnection({
      host : 'localhost',
      user : 'bfdegani',
      password : '1234rewq',
      database : 'casadocodigo_test'
    });
  }

  else if(process.env.NODE_ENV === 'production') {
    console.log('running in remote production database');
    return mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
  }
}

//wrapper
//dessa maneira, a conexão com o banco sera criada apenas quando o objeto for
//carregado e nao no carregamento do modulo (o que aconteceria se o conteudo
//da funcao createDBConnection estivesse dentro da funcao chamada definida em
//module.exports)
module.exports = function(){
  return createDBConnection;
}
