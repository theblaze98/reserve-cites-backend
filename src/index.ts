import express from 'express'
import cors from 'cors'

import citesRoutes from './routes/cites.routes';

const app = express()

import './config/db'

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use('/api/cites', citesRoutes)

app.listen(PORT, () => {
    console.log(`Server is runing in port ${PORT}`)
})
