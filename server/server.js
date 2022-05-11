import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.js'
import authRouter from './routes/auth.js'
import postRouter from './routes/posts.js'

dotenv.config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/', userRouter)
app.use('/', authRouter)
app.use('/', postRouter)


mongoose.connect(process.env.MONGO_URL)
    .then((res) => app.listen(process.env.PORT, console.log(`server runnign on http://localhost:${process.env.PORT}`)))
    .catch((error) => console.log('error: ', error.message));
