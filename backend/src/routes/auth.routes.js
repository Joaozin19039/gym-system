const express = require("express");
const router = express.Router();

// importar controller
const userController = require("../controllers/user.controller");

// cadastro
router.post("/register", userController.createUser);

// login
router.post("/login", userController.login);

module.exports = router;


/* 
Cadastro:
POST /api/auth/register

Cria um novo aluno ou admin. 
*/

/* 
Login:
POST /api/auth/login

Valida email/senha e devolve JWT.
 */