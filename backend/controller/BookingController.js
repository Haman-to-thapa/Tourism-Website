import { Booking } from "../modules/booking.js"


export const createBooking = async (req,res) => {
  try {
    const {place, firstName, address, phone , email, seletedDate, seletedTime, seletedTag, feedback
    } = req.body
    if(!place || !firstName || !address || !phone || !email || !seletedDate || !seletedTime || !seletedTag || !feedback){
      return res.status(400).json({message:"Missing required fields"})  }

      const booking = new Booking({
        user:req.user._id,
        place,
        firstName,
        address,
        phone,
        email,
        seletedDate,
        seletedTime,
        feedback
      })

      await booking.save()
      return res.status(200).json({success:true, booking})

  } catch (error) {
    console.log(error)
    return res.status({success:false, message:"Booking failed"})
  }
}

export const getUserbookings = async (req,res) => {
  try {
    const bookings = await Booking.find({user:req.user._id}).populate('placeId','place image price').sort({createdAt: -1})

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
  
}