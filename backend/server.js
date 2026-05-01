const express = require("express");

const authRoutes = require("./src/routes/auth.routes");
const studentRoutes = require("./src/routes/student.route");
const adminRoutes = require("./src/routes/admin.routes");
const trainingRoutes = require("./src/routes/training.routes");

const app = express();

app.use(express.json());

// rotas
app.use("/api/auth", authRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/trainings", trainingRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando...");
});