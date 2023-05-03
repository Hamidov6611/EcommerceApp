import express from "express";
import chalk from "chalk";
import dotenv from "dotenv"
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRoute.js";
import cors from 'cors'


//dotenv config
dotenv.config()

//database config
connectDB()

//rest object
const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRouter)

//rest api
app.get('/', (req, res) => {
    res.send('<h1>Salom Dunyo</h1>')
})

//PORT
const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(chalk.bgGreenBright(`Server is running on port ${PORT}...`)))