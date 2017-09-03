var http = require('http');

var configuracoes = {
//'Accept' = header para especificar formato de saida dos dados
//'Content-type' = header para especificar formato de entrada dos dados
  hostname: 'localhost',
  port: '3000',
  path: '/produtos',
  method: 'post',
  headers: {
    'Accept':'application/json',
    'Content-type':'application/json'
  }
};

var client = http.request(configuracoes, function(res){
  console.log(res.statusCode);
  res.on('data', function(body){
    console.log('cadastra-livros-terminal.js: '+body);
  });
});

var produto = {
    //titulo: 'Mais um livro de teste',
    descricao: 'node, javascript e http',
    preco: 99.99
};

client.end(JSON.stringify(produto));
