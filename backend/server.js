import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import userRoutes from './routes/userRoutes.js'



dotenv.config({});
connectDB()



const app = express();

app.use(cookieParser())
app.use(cors())
app.use(express.json())



// api endpoint

app.use('/api/users',userRoutes)


const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})