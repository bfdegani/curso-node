var mysql = require('mysql');

module.exports = function(){
  return mysql.createConnection({
    host : 'localhost',
    user : 'bfdegani',
    password : '1234rewq',
    database : 'casadocodigo'
  });
}
