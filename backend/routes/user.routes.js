/* const express = require("express");
const router = express.Router();

let usuarios = [];

// Criar usuário
router.post("/", (req, res) => {
  const { nome, email, tipo } = req.body;

  const novoUsuario = {
    id: Date.now(),
    nome,
    email,
    tipo
  };

  usuarios.push(novoUsuario);

  res.status(201).json(novoUsuario);
});

// Listar usuários
router.get("/", (req, res) => {
  res.json(usuarios);
});

module.exports = router; */