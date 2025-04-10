import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white" style={{ backgroundImage: 'url(/plants-bg.jpg)' }}>
    <h1 className="text-5xl font-bold mb-4">GreenLeaf Store</h1>
    <p className="mb-6">We provide the freshest indoor plants for your space</p>
    <Link to="/listing" className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded">Get Started</Link>
  </div>
);

export default Landing;