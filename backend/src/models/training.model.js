const mongoose = require("mongoose");

const trainingSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  grupoMuscular: {
    type: String,
    required: true
  },
  exercicios: [
    {
      nome: String,
      series: Number,
      repeticoes: String,
      carga: String
    }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model("Training", trainingSchema);