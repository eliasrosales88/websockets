"use strict";

const express = require("express");
const app = express();
const server =  require("http").Server(app);

app.get("/", (req, res, next)  => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(3000, () => {
  console.log("listening on port 3000");
  
})