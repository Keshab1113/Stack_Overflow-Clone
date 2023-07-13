import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from './routes/users.js'
import userQuestions from './routes/Questions.js'
import userAnswers from './routes/Answers.js'
import dotenv from "dotenv"
import connectDB from "./connectMongoDb.js";


dotenv.config();
connectDB();

const app =express();
app.use(express.json({limit:"30mb", extended: true}))
app.use(express.urlencoded({limit:"30mb", extended: true}))
app.use(cors());

app.get('/',(req,res)=>{
    res.send("This is a stack overflow clone API")
})
app.use('/user', userRoutes)
app.use('/questions', userQuestions)
app.use('/answer', userAnswers)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });