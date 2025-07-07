const express = require("express");
const server = express();
const port = 3000;

server.get("/hello", function (req, res) {
  res.send("Hello, Node-World!");
});

server.listen(port, "0.0.0.0", function () {
  console.log(`Server is running on http://127.0.0.1:${port}/hello`);
});
