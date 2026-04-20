const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Token não enviado"
    });
  }

  try {
    const decoded = jwt.verify(token, "segredo_jwt");
    req.userId = decoded.id;
    next();
  } catch {
    return res.status(401).json({
      message: "Token inválido"
    });
  }
};



// comando no terminal para retornar o token por completo 



// $response = Invoke-RestMethod -Uri "http://localhost:3000/api/login" `
// -Method POST `
// -Headers @{ "Content-Type" = "application/json" } `
// -Body '{"email":"joao@email.com","senha":"123456"}'

// $response.token