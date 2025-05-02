import express from 'express'
import isAuthenticated from '../middleware/middleware.js'
import { createBooking, getUserbookings, updateBookingStatus } from '../controller/BookingController.js'


const router = express.Router()

router.post('/', isAuthenticated, createBooking);
router.get('/my-booking',isAuthenticated,getUserbookings);
router.patch('/:bookingId/status',isAuthenticated,updateBookingStatus);


export default router;