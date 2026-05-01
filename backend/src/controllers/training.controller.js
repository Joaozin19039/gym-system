const trainings = require("../models/training.model");

// criar treino
exports.createTraining = (req, res) => {
  const { nome, grupoMuscular } = req.body;

  const training = {
    id: Date.now(),
    nome,
    grupoMuscular
  };

  trainings.push(training);

  res.status(201).json(training);
};

// listar treinos
exports.getTrainings = (req, res) => {
  res.json(trainings);
};

// editar treino
exports.updateTraining = (req, res) => {
  const { id } = req.params;
  const { nome, grupoMuscular } = req.body;

  const training = trainings.find(
    treino => treino.id == id
  );

  if (!training) {
    return res.status(404).json({
      message: "Treino não encontrado"
    });
  }

  training.nome = nome || training.nome;
  training.grupoMuscular = grupoMuscular || training.grupoMuscular;

  res.json(training);
};

// deletar treino
exports.deleteTraining = (req, res) => {
  const { id } = req.params;

  const index = trainings.findIndex(
    treino => treino.id == id
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Treino não encontrado"
    });
  }

  trainings.splice(index, 1);

  res.json({
    message: "Treino removido com sucesso"
  });
};