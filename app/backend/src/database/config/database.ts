import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'password',
  database: process.env.DB_NAME || 'ng_cash',
  host: process.env.DB_HOST || 'db',
  port: Number(process.env.DB_PORT) || 3302,
  dialect: 'postgres',
}

export = config;