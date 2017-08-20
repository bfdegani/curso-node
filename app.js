var app = require('./config/express')();

app.get('/produtos', (req, res) => {
  console.log("listando produtos");
  res.render("produtos/lista");
});

hostname = "127.0.0.1";
port = "3000";

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
