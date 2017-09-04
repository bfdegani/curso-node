var mysql = require('mysql');

function createDBConnection(){
    if(!process.env.NODE_ENV) {
      return mysql.createConnection({
        host : 'localhost',
        user : 'bfdegani',
        password : '1234rewq',
        database : 'casadocodigo'
      });
  }

  if(process.env.NODE_ENV === 'test') { // '===' difere de '==' por nao fazer conversao de tipo e só retorna true se os objetos são do mesmo tipo e iguais (nesse caso, não faz diferença)
    return mysql.createConnection({
      host : 'localhost',
      user : 'bfdegani',
      password : '1234rewq',
      database : 'casadocodigo_test'
    });
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
