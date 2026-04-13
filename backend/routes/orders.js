const express = require('express');
const router = express.Router();
const pool = require('../db/db.js');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Configura o transportador de email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  }
});

// Rota para criar um novo pedido
router.post('/', async (req, res) => {
  console.log('Pedido recebido!');
  const { produto, tipo, preco, cor, tamanho, observacao } = req.body;
  const user_id = req.user.id;

  try {
    // Salva o pedido no banco
    await pool.query(
      'INSERT INTO orders (user_id, produto, tipo, preco, cor, tamanho, observacao) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [user_id, produto, tipo, preco, cor, tamanho, observacao]
    );

    // Busca os dados do usuario que fez o pedido
    const [users] = await pool.query('SELECT name, email FROM users WHERE id = ?', [user_id]);
    const user = users[0];

    console.log('Salvou no banco! Enviando email...');

    // Envia email para o professor
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: '🥊 Novo pedido na Shark Store!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #E53935; padding: 24px; text-align: center;">
            <h1 style="color: white; margin: 0;">SHARK STORE</h1>
            <p style="color: #ffcccc; margin: 4px 0 0;">Novo pedido recebido!</p>
          </div>
          <div style="background: #f5f5f5; padding: 24px;">
            <h2 style="color: #1a1a1a;">Detalhes do Pedido</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold;">Produto:</td><td style="padding: 8px;">${produto}</td></tr>
              <tr style="background: #eeeeee;"><td style="padding: 8px; font-weight: bold;">Cor:</td><td style="padding: 8px;">${cor}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Tamanho:</td><td style="padding: 8px;">${tamanho}</td></tr>
              <tr style="background: #eeeeee;"><td style="padding: 8px; font-weight: bold;">Preço:</td><td style="padding: 8px;">R$ ${preco}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Observação:</td><td style="padding: 8px;">${observacao || 'Nenhuma'}</td></tr>
            </table>
            <h2 style="color: #1a1a1a; margin-top: 24px;">Dados do Cliente</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold;">Nome:</td><td style="padding: 8px;">${user.name}</td></tr>
              <tr style="background: #eeeeee;"><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${user.email}</td></tr>
            </table>
          </div>
          <div style="background: #1a1a1a; padding: 16px; text-align: center;">
            <p style="color: #888; margin: 0; font-size: 12px;">Shark Camps — Sistema de Pedidos</p>
          </div>
        </div>
      `
    });

    console.log('Email enviado com sucesso!');
    res.json({ message: 'Pedido realizado com sucesso!' });
  } catch (err) {
    console.log('ERRO:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// Rota para listar todos os pedidos (admin)
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT orders.*, users.name, users.email FROM orders JOIN users ON orders.user_id = users.id ORDER BY orders.created_at DESC'
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;