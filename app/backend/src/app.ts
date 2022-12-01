import * as express from 'express';
import 'express-async-errors';
import 'dotenv/config';
import db from './database/models';
import LoginRouter from './database/routers/LoginRouter';
import SigninRouter from './database/routers/SigninRouter';
import AccountRouter from './database/routers/AccountRouter';
import TransactionRouter from './database/routers/TransactionRouter';
import errorHandler from './database/errors/errorHandler';

const cors = require('cors');

const PORT = process.env.APP_PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/login', LoginRouter);
app.use('/signin', SigninRouter);
app.use('/balance', AccountRouter);
app.use('/transaction', TransactionRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  try {
    console.log('Conectando ao banco de dados');
    db.authenticate();
    console.log('Conectado com sucesso!');
  } catch (err) {
    console.log('Conexão não realizada', err);
  }
  console.log('Ouvindo a porta', PORT);
});
