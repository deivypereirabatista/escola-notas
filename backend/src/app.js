import express from 'express'
import router from './routes.js'
import conexao from './app/database/conexao.js'


const app = express()

app.use(express.json())

app.use(router)

export default app