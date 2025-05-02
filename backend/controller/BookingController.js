import { Booking } from "../modules/booking.js"


export const createBooking = async (req, res) => {
  try {
    const {
      placeId,
      firstName,
      address,
      phone,
      email,
      selectedDate,
      selectedTime,
      selectedTag,
      feedback
    } = req.body;

    if (
      !placeId ||
      !firstName ||
      !address ||
      !phone ||
      !email ||
      !selectedDate ||
      !selectedTime ||
      !selectedTag ||
      !feedback
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const booking = new Booking({
      user: req.id,
      placeId,
      firstName,
      address,
      phone,
      email,
      selectedDate,
      selectedTime,
      selectedTag,
      feedback
    });

    await booking.save();
    return res.status(200).json({ success: true, booking });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Booking failed" });
  }
};




export const getUserbookings = async (req,res) => {
  try {

    const bookings = await Booking.find({user:req.id}).populate('placeId', 'place image price')
    .sort({createdAt: -1})

    return res.status(200).json({
      success:true,
      bookings
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success:false,
      message:"Failed to fetch bookings"
    })
  }
}

export const updateBookingStatus = async (req, res) => {
  try {
    
    const {bookingId} = req.params;
    const {status, paymentStatus} = req.body

    const updateFields = {}
    if(status) updateFields.status = status;
    if(paymentStatus) updateFields.paymentStatus = paymentStatus;

    if(Object.keys(updateFields).length === 0) {
      return res.status(400).json({
        success:false,
        message:"No valid fields to upadate"
      });
    }

    const booking = await Booking.findByIdAndUpdate(bookingId,updateFields,{new:true});
    if(!booking) {
      return res.status(404).json({success:false, message:"Booking not found"});
    }

    return res.status(200).json({
      success:true,
      booking
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success:false,
      message:"Failed to update booking status"
    })
  }
}