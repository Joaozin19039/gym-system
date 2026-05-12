const users = require("../models/user.model");

// dashboard admin
exports.dashboard = (req, res) => {
  res.json({
    message: "Bem-vindo à área administrativa",
    adminId: req.userId,
    role: req.userRole
  });
};

// listar usuários
exports.getUsers = (req, res) => {
  res.json(users);
};

// criar usuário
exports.createUser = (req, res) => {
  const { nome, email, senha, role } = req.body;

  const newUser = {
    id: Date.now(),
    nome,
    email,
    senha,
    role: role || "student"
  };

  users.push(newUser);

  res.status(201).json(newUser);
};

// editar usuário
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { nome, email, senha, role } = req.body;

  const user = users.find(
    usuario => usuario.id == id
  );

  if (!user) {
    return res.status(404).json({
      message: "Usuário não encontrado"
    });
  }

  user.nome = nome || user.nome;
  user.email = email || user.email;
  user.senha = senha || user.senha;
  user.role = role || user.role;

  res.json(user);
};

// deletar usuário
exports.deleteUser = (req, res) => {
  const { id } = req.params;

  const index = users.findIndex(
    usuario => usuario.id == id
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Usuário não encontrado"
    });
  }

  users.splice(index, 1);

  res.json({
    message: "Usuário removido com sucesso"
  });
};