const mongoose = require("mongoose");

async function connectDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 30000
    });

    console.log("Banco de dados conectado com sucesso");
  } catch (error) {
    console.error("Erro ao conectar no banco:", error.message);
    process.exit(1);
  }
}

module.exports = connectDatabase;