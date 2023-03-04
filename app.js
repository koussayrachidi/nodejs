const app = require("express")();
const server = require("http").createServer(app);
const hostname = "0.0.0.0";
const port = 8000;
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  socket.on("roomsatu", function (data) {
    console.log(data);
    io.emit("hello", data);
  });
  socket.on("roomsatu2", function () {
    io.emit("yes");
  });
});
server.listen(port, hostname, () => {
  console.log("Server running at http://${hostname}:${port}/");
});
