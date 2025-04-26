import { Place } from "../modules/placeSchema.js"


export const getAllPlaces = async(req,res) => {
  try {
    
    const places = await Place.find();

    return res.status(200).json({success:true, places})

  } catch (error) {
   console.log(error)
   return res.status(500).json({success:false,message:"Failed to fetch places"}) 
  }
}


export const getPlaceById = async (req, res) => {
  try {
    const { id } = req.params;

    const place = await Place.findById(id);

    if (!place) {
      return res.status(404).json({ message: "Place not found" });
    }

    return res.status(200).json(place);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "PlaceId failed" });
  }
};
