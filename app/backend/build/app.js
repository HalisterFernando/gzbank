"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const models_1 = require("./database/models");
const app = express();
app.listen(async () => {
    console.log('logando');
    try {
        await models_1.default.authenticate();
        console.log('logou');
    }
    catch (err) {
        console.log('Deu ruim', err);
    }
});
//# sourceMappingURL=app.js.map