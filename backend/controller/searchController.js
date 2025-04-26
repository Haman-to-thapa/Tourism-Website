import { Place } from "../modules/placeSchema.js"

export const createPlaces = async (req, res) => {
try {
  const {place, description, image} = req.body;

  if(!place || !description) {
    return res.status(404).json({success:false,message:"no places added here"})
  }
  const newPlace = await Place.create({
    place,
    description,
    image,
    createdBy: req.id,
  })



  return res.status(200).json({success:true,newPlace, message:"Created Successfully"})
} catch (error) {
  console.log(error)
  return res.status(500).json({success:false,message:"created failed"})
}
}

