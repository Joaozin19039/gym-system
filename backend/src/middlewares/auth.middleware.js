const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Token não enviado"
    });
  }

  // remove "Bearer "
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "segredo_jwt");

    req.userId = decoded.id;
    req.userRole = decoded.role;

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