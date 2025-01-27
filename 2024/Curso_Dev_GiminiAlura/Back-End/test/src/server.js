import express from 'express';
import cors from 'cors';
import logger from 'morgan';

import routes from './routes/barberRouts.js';

// cria o app
const app = express();

// consiguração dos middlewares
app.use(express.json()); // Utiliza json como formato de entrada
app.use(cors()); // Habilita o cors (qualquer aplicação acessa o backend)
app.use(logger('dev'));


// Integra Rotas (EndPoint) na aplicação
routes(app);

const porta = process.env.PORT || 3001

const server = app.listen(porta, () =>
    console.log(`\nServidor rodando na porta ${porta}` )
)

process.on('SIGINT', () => {
    server.close()
    console.log("\Servidor encerrado com sucesso")
}) // ctrl + c (Solicita interrupção do servidor de forma segura)