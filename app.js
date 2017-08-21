var app = require('./config/express')();

hostname = "127.0.0.1";
port = "3000";

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
