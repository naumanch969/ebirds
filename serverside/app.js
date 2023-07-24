import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import userRoutes from './routes/user.js'
import productRoutes from './routes/product.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080
const CONNECTION_STRING = process.env.MONGODB_URL
// const CONNECTION_STRING = process.env.COMPASS_URL

app.use(cors())
app.use(express.json({ limit: "10mb" }))
app.use('/user', userRoutes)
app.use('/product', productRoutes)

app.get('/', (req, res) => res.send("App is working!"))

mongoose.set('strictQuery', false)
mongoose.connect(CONNECTION_STRING)
  .then(
    () => app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
  )
  .catch(
    (err) => console.log(err)
  )