const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

// Criar usuário
exports.createUser = async (req, res) => {
  try {
    const { nome, email, senha, role } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "Email já cadastrado"
      });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const user = await User.create({
      nome,
      email,
      senha: senhaCriptografada,
      role: role || "student"
    });

    res.status(201).json({
      id: user._id,
      nome: user.nome,
      email: user.email,
      role: user.role
    });

  } catch (error) {
    res.status(500).json({
      message: "Erro ao criar usuário",
      error: error.message
    });
  }
};

// Listar usuários
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-senha");

    res.json(users);

  } catch (error) {
    res.status(500).json({
      message: "Erro ao listar usuários",
      error: error.message
    });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Email ou senha inválidos"
      });
    }

    const senhaValida = await bcrypt.compare(senha, user.senha);

    if (!senhaValida) {
      return res.status(401).json({
        message: "Email ou senha inválidos"
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login realizado com sucesso",
      token,
      user: {
        id: user._id,
        nome: user.nome,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    res.status(500).json({
      message: "Erro ao fazer login",
      error: error.message
    });
  }
};