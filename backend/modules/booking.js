import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  placeId: { type: mongoose.Schema.Types.ObjectId, ref: "Place", required: true },
  firstName: String,
  address: String,
  phone: String,
  email: String,
  selectedDate: Date,
  selectedTime: String,
  selectedTag: String,
  feedback: String,
  status: { type: String, default: "Pending" },
  paymentStatus: { type: String, default: "unpaid" }
}, { timestamps: true });


export const Booking = mongoose.model("Booking",bookingSchema)