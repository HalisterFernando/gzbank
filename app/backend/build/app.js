"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
require("dotenv/config");
const models_1 = require("./database/models");
const UserRouter_1 = require("./database/routers/UserRouter");
const LoginRouter_1 = require("./database/routers/LoginRouter");
const SigninRouter_1 = require("./database/routers/SigninRouter");
const PORT = process.env.APP_PORT;
const app = express();
app.use(express.json());
app.get('/', async (req, res) => {
    return res.status(200).send({ message: 'Servidor conectado' });
});
app.use('/user', UserRouter_1.default);
app.use('/login', LoginRouter_1.default);
app.use('/signin', SigninRouter_1.default);
app.listen(PORT, () => {
    try {
        models_1.default.authenticate();
        console.log('Deu bom');
    }
    catch (err) {
        console.log('Deu ruim', err);
    }
    console.log('Ouvindo a porta', PORT);
});
//# sourceMappingURL=app.js.map