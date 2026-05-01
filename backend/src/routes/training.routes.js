const express = require("express");
const router = express.Router();

const trainingController = require("../controllers/training.controller");

const authMiddleware = require("../middlewares/auth.middleware");
const adminMiddleware = require("../middlewares/admin.middleware");

// criar treino
router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  trainingController.createTraining
);

// listar treinos
router.get(
  "/",
  authMiddleware,
  trainingController.getTrainings
);

// editar treino
router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  trainingController.updateTraining
);

// deletar treino
router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  trainingController.deleteTraining
);

module.exports = router;