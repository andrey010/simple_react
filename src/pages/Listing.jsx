import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import icon from "../logo.svg";
const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulent" },
  { id: 2, name: "Snake Plant", price: 15, category: "Succulent" },
  { id: 3, name: "Peace Lily", price: 20, category: "Flowering" },
  { id: 4, name: "Spider Plant", price: 12, category: "Hanging" },
  { id: 5, name: "Fiddle Leaf Fig", price: 25, category: "Tree" },
  { id: 6, name: "ZZ Plant", price: 18, category: "Tree" },
];

const Listing = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.find((i) => i.id === id);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Indoor Plants</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plants.map((plant) => (
          <div key={plant.id} className="border p-4 rounded">
            <img
              src={icon}
              alt={plant.name}
              className="w-full h-40 object-cover mb-2"
            />
            <h3 className="text-lg font-bold">{plant.name}</h3>
            <p>${plant.price}</p>
            <button
              className="mt-2 px-4 py-1 bg-green-500 text-white rounded disabled:bg-gray-400"
              onClick={() => dispatch(addToCart(plant))}
              disabled={isInCart(plant.id)}
            >
              {isInCart(plant.id) ? "In Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
