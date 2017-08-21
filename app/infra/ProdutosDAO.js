function ProdutosBanco(connection){ //definindo uma estrutura semelhante a uma classe para criacao otimizada de novos objetos
  this._connection = connection; // atributos iniciados com '_' sao uma convencao em js de que esse atributo deveria ser tratado como privado e usado apenas dentro da classe
}

// prototype define functions para definicao da estrutura padrao da classe
// otimizando a criacao dos objetos
ProdutosBanco.prototype.lista = function(callback){
  this._connection.query('select * from livros', callback);
}

module.exports = function(){
  return ProdutosBanco;
}
