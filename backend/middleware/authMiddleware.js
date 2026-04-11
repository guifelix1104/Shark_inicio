// Importa o jsonwebtoken para verificar se o token enviado é válido
const jwt = require('jsonwebtoken');

// Carrega as variáveis de ambiente do .env (precisamos da JWT_SECRET para verificar o token)
require('dotenv').config();

// Exporta o middleware como uma função
// Middleware é uma função que roda ANTES da rota — funciona como um "porteiro"
// Recebe req (requisição), res (resposta) e next (função para continuar para a rota)
module.exports = (req, res, next) => {

  // Tenta pegar o token do cabeçalho Authorization da requisição
  // O formato esperado é: "Bearer SEU_TOKEN_AQUI"
  // O .split(' ')[1] pega apenas a parte do token, ignorando a palavra "Bearer"
  const token = req.headers.authorization?.split(' ')[1];

  // Se não veio nenhum token, bloqueia o acesso com erro 401 (não autorizado)
  if (!token) {
    return res.status(401).json({ error: 'Acesso negado. Token não fornecido.' });
  }

  try {
    // Verifica se o token é válido usando a chave secreta do .env
    // Se for válido, retorna os dados que foram salvos no token (id e role do usuário)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Salva os dados do usuário na requisição para que a rota possa usá-los
    req.user = decoded;

    // Chama next() para liberar a passagem para a rota protegida
    next();

  } catch {
    // Se o token for inválido ou estiver expirado, bloqueia com erro 403 (proibido)
    res.status(403).json({ error: 'Token inválido ou expirado.' });
  }
};
