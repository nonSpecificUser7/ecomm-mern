import express from 'express'
import productRoutes from './routes/productRoutes.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'

dotenv.config()

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('Api is working')
})

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server ${PORT} running mode: ${process.env.NODE_ENV}`))