import * as express from 'express';
import 'dotenv/config';
import db from './database/models';
import UserRouter from './database/routers/UserRouter';
import LoginRouter from './database/routers/LoginRouter';
import SigninRouter from './database/routers/SigninRouter';
import AccountRouter from './database/routers/AccountRouter';
import TransactionRouter from './database/routers/TransactionRouter';

const cors = require('cors');

const PORT = process.env.APP_PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => res.status(200).send({ message: 'Servidor conectado' }));

app.use('/user', UserRouter);
app.use('/login', LoginRouter);
app.use('/signin', SigninRouter);
app.use('/account', AccountRouter);
app.use('/transaction', TransactionRouter);

app.listen(PORT, () => {
  try {
    db.authenticate();
    console.log('Deu bom');
  } catch (err) {
    console.log('Deu ruim', err);
  }
  console.log('Ouvindo a porta', PORT);
});
