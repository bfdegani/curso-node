create table casadocodigo.livros
(
  id int(11) NOT NULL AUTO_INCREMENT,
  titulo varchar(255) NULL,
  descricao text NULL,
  preco decimal(10,2) NULL,
  PRIMARY KEY (id)
);


insert into casadocodigo.livros(titulo, descricao, preco)
values ("Começando com nodejs", "Livro sobre nodejs", 40);

insert into casadocodigo.livros(titulo, descricao, preco)
values ("Começando com javascript", "Livro sobre javascript", 40);

insert into casadocodigo.livros(titulo, descricao, preco)
values ("Começando com express", "Livro sobre express", 40);

insert into casadocodigo.livros(titulo, descricao, preco)
values ("Indo além com javascript", "Livro avançado sobre javascript", 39.90);
