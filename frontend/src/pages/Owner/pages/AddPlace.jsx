import { useAddPlacesMutation } from "@/appRedux/API/ownerApi";
import React, { useState } from "react";

const AddPlace = () => {
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState('');

  const [addPlaces, { isLoading }] = useAddPlacesMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!place || !description || !price) {
      setMessage("Place name and description are required.");
      return;
    }
    try {
      const res = await addPlaces({ place, description, image, price }).unwrap();

      setMessage(res.message);
      setPlace("");
      setDescription("");
      setImage("");
      setPrice("");
    } catch (error) {
      console.log(error); // Corrected
      setMessage("Failed to add place. Please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-start py-10 px-4 bg-gray-50">
      <div className="w-full max-w-2xl bg-white p-6 md:p-10 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Add a New Place</h2>

        {message && <p className="mb-6 text-blue-600 font-medium">{message}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Place Name"
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
          <textarea
            placeholder="Description"
            rows={5}
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL (optional)"
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
            disabled={isLoading} // Disable the button while loading
          >
            {isLoading ? "Adding..." : "Add Place"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPlace;
