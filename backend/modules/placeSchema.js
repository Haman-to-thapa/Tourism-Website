import mongoose from 'mongoose';


const placeSchema = new mongoose.Schema({
  place: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
  },
}, { timestamps: true });

export const Place = mongoose.model('Place', placeSchema);