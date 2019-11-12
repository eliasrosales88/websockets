"use strict";

const express = require("express");
const app = express();
const server =  require("http").Server(app);

app.get("/", (req, res, next)  => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(3000, () => {
  console.log("listening on port 3000");
  
});


// Añadimos websockets
const io = require("socket.io")(server);

io.on('connection', socket  => {
  // socket es una conexion con cada browser
  console.log("Nueva conexión de un cliente");
  
  socket.on("nuevo-mensaje", data => { // mensaje recibido de un browser
    console.log("Recibido, ", data);
    
    // emito desde el servidor a todos los browsers que esten conectados
    io.emit("nuevo-mensaje", data);
  })
  

  // setInterval(() => {
  //   socket.emit("pasa un segundo")
  // }, 1000)



});