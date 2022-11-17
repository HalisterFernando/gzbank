"use strict";
require("dotenv/config");
const config = {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'password',
    database: process.env.DB_NAME || 'ng_cash',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3305,
    dialect: 'mysql',
};
module.exports = config;
//# sourceMappingURL=database.js.map