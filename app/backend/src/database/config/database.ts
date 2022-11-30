import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'password',  
  host: process.env.DB_HOST || 'db',
  port: Number(process.env.DB_PORT) || 3302,
  dialect: 'postgres',
}

export = config;