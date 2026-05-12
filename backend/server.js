require("dotenv").config();

const express = require("express");
const connectDatabase = require("./src/config/database");

const authRoutes = require("./src/routes/auth.routes");
const studentRoutes = require("./src/routes/student.route");
const adminRoutes = require("./src/routes/admin.routes");
const trainingRoutes = require("./src/routes/training.routes");

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/trainings", trainingRoutes);

const PORT = process.env.PORT || 3000;

async function startServer() {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
}

startServer();