import * as express from 'express'
import 'dotenv/config'
import UserRouter from './database/routers/UserRouter'
import LoginRouter from './database/routers/LoginRouter'

const app = express();
app.use(express.json())

app.use('/user', UserRouter)
app.use('/login', LoginRouter)


app.listen( () => {
  console.log(`App está rodando na porta ${process.env.DB_PORT}`)
})
