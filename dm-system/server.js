const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

let users = {};

io.on("connection", socket => {
  socket.on("join", username => {
    users[socket.id] = username;
    io.emit("users", users);
  });

  socket.on("message", data => {
    socket.broadcast.emit("message", data);
  });

  socket.on("typing", username => {
    socket.broadcast.emit("typing", username);
  });

  socket.on("disconnect", () => {
    delete users[socket.id];
    io.emit("users", users);
  });
});

server.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});
