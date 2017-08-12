var express = require('express');
var app = express();
var hostname = "127.0.0.1";
var port = 3000;

app.set('view engine', 'ejs');
app.get('/produtos', (req, res) => {
  console.log("listando produtos");
  res.render("produtos/lista");
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
