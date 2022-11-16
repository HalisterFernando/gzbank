import * as express from 'express'
import db from './database/models'

const app = express();

app.listen(async() => {
    console.log('logando')
    try {
        await db.authenticate();
        console.log('logou');
    } catch (err) {
        console.log('Deu ruim', err)
    }
})
