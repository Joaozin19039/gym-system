const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// rota teste
app.get("/", (req, res) => {
  res.send("API da Academia rodando 💪");
});

module.exports = app;