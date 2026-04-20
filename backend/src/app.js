const express = require("express");
const cors = require("cors");

const app = express();

//middlewares globais
app.use(cors());
app.use(express.json());

// IMPORTAR rotas (aqui em cima)


//  USAR rotas (aqui)
const userRoutes = require ("./routes/user.routes");
app.use ("/api", userRoutes);


// rota teste
app.get("/", (req, res) => {
  res.send("API da Academia rodando 💪");
});

//  Exporta o app
module.exports = app;