const jwt = require("jsonwebtoken");
const users = require ("../models/user.model");

// Criando um user - segue esse esqueleto
exports.createUser = (req, res) => {
    const { nome, email, senha} = req.body;

    const user = { id: Date.now (), nome, email, senha };

    users.push (user)

    res.status (201).json (user);
};

//listando users
exports.getUsers = (req, res) => {
    res.json(users);
};

exports.login = (req, res) => {
    const { email, senha } = req.body;

    //  PRIMEIRO cria o user
    const user = users.find (
        usuario => usuario.email === email && usuario.senha === senha
    );
    
    //  DEPOIS valida
    if (!user) {
        return res.status (401).json ({
            message: "Email ou Senha Inválidos"
        });
    }

    //  gera token
    const token = jwt.sign (
        {id: user.id},
        "segredo_jwt",
        {expiresIn: "1d"}
    );

    res.json ({
        message: "Login realizado com sucesso",
        token
    });
};