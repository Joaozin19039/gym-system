const express = require("express");
const router = express.Router();

const studentController = require("../controllers/student.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/profile", authMiddleware, studentController.profile);
router.get("/trainings", authMiddleware, studentController.getTrainings);
router.get("/schedule", authMiddleware, studentController.getSchedule);

module.exports = router;

/* 
O aluno poderá acessar:

Perfil:
GET /api/student/profile
 */

/* 
Treinos:
GET /api/student/trainings
 */

/* 
Agendamento ou Grade de aulas:
GET /api/student/schedule
 */