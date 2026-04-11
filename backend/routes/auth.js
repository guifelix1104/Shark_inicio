// Importa o Express para criar as rotas
const express = require('express');

// Cria um roteador — agrupa as rotas de autenticação separadas do servidor principal
const router = express.Router();

// Importa o bcryptjs — biblioteca para criptografar senhas
// Nunca salvamos a senha pura no banco, sempre criptografada
const bcrypt = require('bcryptjs');

// Importa o jsonwebtoken — biblioteca para criar e verificar tokens JWT
// O token é usado para identificar o usuário logado sem precisar de sessão no servidor
const jwt = require('jsonwebtoken');

// Importa a conexão com o banco de dados
const pool = require('../db/db.js');

// ========================
// ROTA DE CADASTRO
// ========================
// Recebe POST /auth/register com { name, email, password } no corpo da requisição
router.post('/register', async (req, res) => {

  // Extrai os dados enviados pelo frontend
  const { name, email, password } = req.body;

  try {
    // Criptografa a senha antes de salvar no banco
    // O número 10 é o "salt rounds" — quanto maior, mais seguro e mais lento
    const hash = await bcrypt.hash(password, 10);

    // Insere o novo usuário no banco com a senha já criptografada
    // Os "?" são placeholders que evitam SQL Injection
    await pool.query(
      'INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)',
      [name, email, hash]
    );

    // Retorna sucesso para o frontend
    res.json({ message: 'Usuário cadastrado com sucesso!' });

  } catch (err) {
    // Se der erro (ex: email duplicado), retorna status 500 com a mensagem
    res.status(500).json({ error: err.message });
  }
});

// ========================
// ROTA DE LOGIN
// ========================
// Recebe POST /auth/login com { email, password } no corpo da requisição
router.post('/login', async (req, res) => {

  // Extrai os dados enviados pelo frontend
  const { email, password } = req.body;

  try {
    // Busca o usuário no banco pelo email
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

    // Se não encontrou nenhum usuário com esse email, retorna erro 404
    if (rows.length === 0) return res.status(404).json({ error: 'Usuário não encontrado' });

    // Pega o primeiro (e único) resultado da busca
    const user = rows[0];

    // Compara a senha digitada com o hash salvo no banco
    // bcrypt.compare retorna true se a senha bater, false se não bater
    const match = await bcrypt.compare(password, user.password_hash);

    // Se a senha não bater, retorna erro 401 (não autorizado)
    if (!match) return res.status(401).json({ error: 'Senha incorreta' });

    // Cria um token JWT com o id e o papel (role) do usuário
    // O token expira em 8 horas — depois disso o usuário precisa logar novamente
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,   // Chave secreta usada para assinar o token (fica no .env)
      { expiresIn: '8h' }
    );

    // Retorna o token e os dados básicos do usuário para o frontend
    res.json({ token, name: user.name, role: user.role });

  } catch (err) {
    // Se der qualquer erro inesperado, retorna status 500
    res.status(500).json({ error: err.message });
  }
});

// Exporta o roteador para ser usado no server.js
module.exports = router;
