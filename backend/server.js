// Importa o Express — framework que nos permite criar um servidor web com Node.js
const express = require('express');

// Importa o CORS — permite que o frontend (rodando em outro endereço) acesse o backend
const cors = require('cors');

// Carrega as variáveis de ambiente do arquivo .env (ex: porta, senha do banco)
require('dotenv').config();

// Cria a aplicação Express — é o nosso servidor
const app = express();

// Ativa o CORS para todas as rotas — sem isso o navegador bloquearia as requisições do frontend
app.use(cors());

// Permite que o servidor entenda requisições com corpo em JSON (ex: login, cadastro)
app.use(express.json());

// Importa a conexão com o banco de dados
const pool = require('./db/db.js');

// Importa as rotas de autenticação (login e cadastro)
const authRoutes = require('./routes/auth');

// Registra as rotas de autenticação no caminho /auth
app.use('/auth', authRoutes);

// Importa o middleware que verifica se o usuário está autenticado
const authMiddleware = require('./middleware/authMiddleware');

// Protege todas as rotas que começam com /dashboard
app.use('/dashboard', authMiddleware);

// Importa as rotas de pedidos da loja
const orderRoutes = require('./routes/orders');

// Protege as rotas de pedidos com o middleware JWT
// Só usuários logados podem fazer pedidos
app.use('/orders', authMiddleware, orderRoutes);

// Rota de teste — verifica se o servidor consegue se comunicar com o banco de dados
app.get('/test', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1');
    res.json({ message: 'Banco conectado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Define a porta do servidor
const PORT = process.env.PORT || 3001;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});