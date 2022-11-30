"use strict";
require("dotenv/config");
const config = {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'password',
    host: process.env.DB_HOST || 'db',
    port: Number(process.env.DB_PORT) || 3302,
    dialect: 'postgres',
};
module.exports = config;
//# sourceMappingURL=database.js.map