//test/produtos.js - arquivo de testes utilizando a biblioteca 'supertest'
var express = require('../config/express')();
var request = require('supertest')(express);

//definição da estrutura do test usando supertest
describe('ProdutosController', function(){

  beforeEach(function(done){ //beforeEach é executado antes de cada trecho de teste definido pelas funções 'it'
    var conn = express.infra.connectionFactory();
    conn.query("delete from livros", function (ex, results){
      if(ex) console.log(ex);
    });
    done();
  });

  afterEach(function(done){
    //verificar biblioteca node-database-cleaner que é capaz de limpar todas as tabelas de um banco
    done();
  });

  it('#listagem json (supertest)', function(done){ //done eh uma funcao (poderia ter outro nome) definida para garantir que o mocha aguarda toda a execução assíncrona antes de finalizar sua execução
    request.get('/produtos')
      .set('Accept', 'application/json')
      .expect('Content-Type',/json/) //expressao regular para verificacao do padrão 'json' no Content-Type
      .expect(200,done);
  });

  it('#listagem html (supertest)', function(done){ //done eh uma funcao (poderia ter outro nome) definida para garantir que o mocha aguarda toda a execução assíncrona antes de finalizar sua execução
    request.get('/produtos')
      .set('Accept', 'text/html')
      .expect('Content-Type',/html/) //expressao regular para verificacao do padrão 'html' no Content-Type
      .expect(200,done);
  });

  it('#cadastro produto invalido (supertest)', function(done){
    request.post('/produtos')
    .send({titulo:'',descricao:'',preco:''})
    .expect(400,done);
  });

  it('#cadastro produto ok (supertest)', function(done){
    request.post('/produtos')
    .send({titulo:'titulo supertest',descricao:'descricao supertest',preco:'99.99'})
    .expect(302,done);
  });

});
