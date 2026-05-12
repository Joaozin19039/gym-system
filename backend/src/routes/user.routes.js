const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authMiddleware = require ("../middlewares/auth.middleware")

router.post("/users", userController.createUser);
router.get("/users", userController.getUsers);
router.post("/login", userController.login);

router.get("/perfil", authMiddleware, (req, res) => {
  res.json({
    message: "Rota protegida",
    userId: req.userId
  });
});

module.exports = router;

// let users = [];

// // Criar usuário
// router.post("/", (req, res) => {
//   const { nome, email, tipo } = req.body;

//   const novouser = {
//     id: Date.now(),
//     nome,
//     email,
//     tipo
//   };

//   users.push(novouser);

//   res.status(201).json(novouser);
// });

// // Listar usuários
// router.get("/", (req, res) => {
//   res.json(users);
// });

// module.exports = router; */
