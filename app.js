var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http); // socket.io recebe o objeto http.Server criado a partir do express

app.set('io', io); //insere o objeto io criado dentro do objeto app

hostname = "127.0.0.1";
port = "3000";

http.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
