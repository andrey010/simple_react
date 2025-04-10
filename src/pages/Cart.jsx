import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, remove } from '../store/slices/cartSlice';
import { Link } from 'react-router-dom';
import icon from "../logo.svg";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Your Cart</h2>
      {items.length === 0 ? <p>Cart is empty</p> : (
        <div>
          {items.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <img src={icon} alt={item.name} className="w-20 h-20 object-cover" />
              <div className="flex-1 px-4">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => dispatch(decrease(item.id))} className="px-2">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increase(item.id))} className="px-2">+</button>
              </div>
              <button onClick={() => dispatch(remove(item.id))} className="text-red-600 ml-4">Remove</button>
            </div>
          ))}
          <div className="mt-6">
            <p>Total items: {items.reduce((acc, i) => acc + i.quantity, 0)}</p>
            <p>Total cost: ${total}</p>
            <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded">Checkout (Coming Soon)</button>
            <br />
            <Link to="/listing" className="text-blue-600">Continue Shopping</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;