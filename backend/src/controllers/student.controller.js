exports.profile = (req, res) => {
  res.json({
    message: "Perfil do aluno carregado com sucesso",
    userId: req.userId
  });
};

exports.getTrainings = (req, res) => {
  res.json({
    message: "Lista de treinos do aluno",
    treinos: [
      "Treino A - Peito e Tríceps",
      "Treino B - Costas e Bíceps",
      "Treino C - Pernas"
    ]
  });
};

exports.getSchedule = (req, res) => {
  res.json({
    message: "Horários disponíveis",
    horarios: [
      "06:00",
      "08:00",
      "18:00",
      "20:00"
    ]
  });
};