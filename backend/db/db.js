// Importa o mysql2 com suporte a Promises — permite usar async/await nas queries
const mysql = require('mysql2/promise');

// Carrega as variáveis de ambiente do arquivo .env
// As credenciais do banco ficam no .env para não ficarem expostas no código
require('dotenv').config();

// Cria um pool de conexões com o banco de dados MySQL
// Um pool reutiliza conexões abertas em vez de abrir uma nova a cada requisição
// Isso melhora a performance e evita sobrecarregar o banco
const pool = mysql.createPool({
  host: process.env.DB_HOST,      // Endereço do servidor do banco (ex: localhost)
  user: process.env.DB_USER,      // Usuário do banco (ex: root)
  password: process.env.DB_PASS,  // Senha do banco
  database: process.env.DB_NAME,  // Nome do banco de dados a ser usado
});

// Exporta o pool para que outros arquivos possam usá-lo para fazer queries
module.exports = pool;
