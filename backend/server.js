import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import userRoutes from './routes/userRoutes.js'
import ownerRoutes from './routes/ownerRoutes.js'
import placesRoute from './routes/userSearchRoutes.js'



dotenv.config({});
connectDB()



const app = express();


app.use(cookieParser())
app.use(cors(
 {
  origin: "http://localhost:5173", 
  credentials:true
 }
))
app.use(express.json())



// api endpoint

app.use('/api/users',userRoutes)
app.use('/api/owner',ownerRoutes)
app.use('/api/places',placesRoute)


const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})