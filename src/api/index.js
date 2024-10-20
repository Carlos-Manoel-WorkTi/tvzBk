import channels from '../listTv/index.js';
import fetchChannel from '../util/index.js';
import botInit from '../bot/index.js';
import express from 'express';
const app = express(); // Cria uma instância do Express
const port = 3000; // Define a porta em que o servidor irá rodar

process.env.PUPPETEER_CACHE_DIR = '/opt/render/.cache/puppeteer';

// Middleware para analisar JSON
app.use(express.json());

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu servidor Node.js!');
});

// Rota para retornar canais
app.get('/api/canais', async (req, res) => {
  const response = await botInit(channels,fetchChannel)
  res.json(response); // Retorna a lista de canais em formato JSON
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
