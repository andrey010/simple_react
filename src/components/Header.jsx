import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const count = useSelector(state => state.cart.items.reduce((acc, item) => acc + item.quantity, 0));
  return (
    <header className="p-4 bg-green-100 flex justify-between">
      <h1 className="text-xl font-bold">GreenLeaf</h1>
      <nav>
        <Link to="/listing" className="mr-4">Shop</Link>
        <Link to="/cart">🛒 ({count})</Link>
      </nav>
    </header>
  );
};

export default Header;