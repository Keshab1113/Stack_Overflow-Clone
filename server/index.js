import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from './routes/users.js'
import userQuestions from './routes/Questions.js'
import userAnswers from './routes/Answers.js'
import dotenv from "dotenv"


dotenv.config(); 

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

const CONNECTION_URL = "mongodb+srv://keshab1113:keshab1113@stack-overflow-clone.tespupy.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
.then(()=> app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
}))
.catch((err)=> console.log(err.message));