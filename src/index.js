const express = require('express')
const connectDB = require('./config/database')
const cors = require('cors')

const Routes = require('./routers/indexRoutes.js')

const app = express()

app.use(cors())


app.use(express.json())
app.use('', Routes)


// Conectando ao banco de dados
connectDB()


const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});