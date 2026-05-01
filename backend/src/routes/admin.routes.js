const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin.controller");

const authMiddleware = require("../middlewares/auth.middleware");
const adminMiddleware = require("../middlewares/admin.middleware");

router.get(
  "/users",
  authMiddleware,
  adminMiddleware,
  adminController.getUsers
);

router.post(
  "/users",
  authMiddleware,
  adminMiddleware,
  adminController.createUser
);

router.put(
  "/users/:id",
  authMiddleware,
  adminMiddleware,
  adminController.updateUser
);

router.delete(
  "/users/:id",
  authMiddleware,
  adminMiddleware,
  adminController.deleteUser
);

module.exports = router;

/* 
O admin poderá:

Ver usuários:
GET /api/admin/users


Criar usuários:
POST /api/admin/users


Editar usuários:
PUT /api/admin/users/:id


Deletar usuários:
DELETE /api/admin/users/:id*/