const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const routes = require("./routes");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const connectedUsers = {};

io.on("connection", socket => {
  const { user } = socket.handshake.query;

  console.log(user, socket.id);

  connectedUsers[user] = socket.id;
});

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

app.use("/", express.static(__dirname + "/../../frontend/dist"));

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);
const port = process.env.PORT || 3030;

server.listen(port, () => {
  console.log(`Servidor executando em ${port}`);
});
