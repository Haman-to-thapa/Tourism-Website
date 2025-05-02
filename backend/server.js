import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import userRoutes from './routes/userRoutes.js'
import ownerRoutes from './routes/ownerRoutes.js'
import placesRoute from './routes/userSearchRoutes.js'
import bookingRoute from './routes/bookingRoutes.js'



dotenv.config({});
connectDB()



const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())







// api endpoint
app.use('/api/users',userRoutes)
app.use('/api/owner',ownerRoutes)
app.use('/api/places',placesRoute)
app.use('/api/bookings',bookingRoute)

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Server error" });
});


const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});