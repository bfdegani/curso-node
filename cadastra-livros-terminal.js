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
    console.log('Corpo:'+body);
  });
});

var produto = {
    titulo: 'mais sobre node.js',
    descricao: 'node, javascript e http',
    preco: 100
};

client.end(JSON.stringify(produto));
