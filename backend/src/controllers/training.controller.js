const Training = require("../models/training.model");

// criar treino
exports.createTraining = async (req, res) => {
  try {
    const { nome, grupoMuscular, exercicios } = req.body;

    const training = await Training.create({
      nome,
      grupoMuscular,
      exercicios: exercicios || []
    });

    res.status(201).json(training);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao criar treino",
      error: error.message
    });
  }
};

// listar treinos
exports.getTrainings = async (req, res) => {
  try {
    const trainings = await Training.find();

    res.json(trainings);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao listar treinos",
      error: error.message
    });
  }
};

// editar treino
exports.updateTraining = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, grupoMuscular, exercicios } = req.body;

    const training = await Training.findByIdAndUpdate(
      id,
      {
        nome,
        grupoMuscular,
        exercicios
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!training) {
      return res.status(404).json({
        message: "Treino não encontrado"
      });
    }

    res.json(training);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao atualizar treino",
      error: error.message
    });
  }
};

// deletar treino
exports.deleteTraining = async (req, res) => {
  try {
    const { id } = req.params;

    const training = await Training.findByIdAndDelete(id);

    if (!training) {
      return res.status(404).json({
        message: "Treino não encontrado"
      });
    }

    res.json({
      message: "Treino removido com sucesso"
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao deletar treino",
      error: error.message
    });
  }
};