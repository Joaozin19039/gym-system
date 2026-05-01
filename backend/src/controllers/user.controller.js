const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const users = require ("../models/user.model");

// Criando um user - segue esse esqueleto
exports.createUser = async (req, res) => {
    const { nome, email, senha} = req.body;
    
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const user = { 
        id: Date.now (),
         nome, 
         email, 
         senha: senhaCriptografada,
         role: "student"
        };

    users.push (user)

    res.status (201).json (user);
};

//listando users
exports.getUsers = (req, res) => {
    res.json(users);
};

exports.login = async (req, res) => {
    const { email, senha } = req.body;

    //  PRIMEIRO cria o user
    const user = users.find(
        usuario => usuario.email === email
    );
    
    //  DEPOIS valida
    if (!user) {
        return res.status (401).json ({
            message: "Email ou Senha Inválidos"
        });
    }

    const senhaValida = await bcrypt.compare(
        senha,
        user.senha
    );

    if (!senhaValida) {
        return res.status(401).json({
            message: "Email ou senha inválidos"
    });
    }

    //  gera token
    const token = jwt.sign (
    {
        id: user.id,
        role: user.role
    }   ,
        "segredo_jwt",
        {expiresIn: "1d"}
    );

        res.json ({
        message: "Login realizado com sucesso",
        token
    });
};