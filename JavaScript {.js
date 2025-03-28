function adicionarAoCarrinho(produto) {
    alert(produto + " foi adicionado ao carrinho!");
}

// Carregar o módulo express
const express = require('express');
const dotenv = require('dotenv');

// Configurar o dotenv para carregar as variáveis do .env
dotenv.config();

// Inicializar o aplicativo express
const app = express();

// Definir uma rota básica
app.get('/', (req, res) => {
  res.send('Olá, Iron Lab Suplementos!');
});

// Iniciar o servidor
const port = process.env.PORT || 3000;  // Usar a porta definida no .env ou 3000 como padrão
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
