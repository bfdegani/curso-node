//test/produtos.js - arquivo de testes para o mocha
var assert = require('assert');
var http = require('http');

//definição da estrutura do test usando mocha
describe('ProdutosController', function(){
  it('#listagem json', function(done){ //done eh uma funcao (poderia ter outro nome) definida para garantir que o mocha aguarda toda a execução assíncrona antes de finalizar sua execução
    var configuracoes = {
      hostname: 'localhost',
      port: '3000',
      path: '/produtos',
      headers: {
        'Accept':'application/json'
      }
    };
    http.get(configuracoes, function(res){
      res.on('data', function(body){
        assert.equal(res.statusCode, 200);
        assert.equal(res.headers['content-type'], 'application/json; charset=utf-8');
        done(); //chamada da funcao 'done' para liberar a execucao
      });
    });
  });
});
