import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Pet Lovers' Website</h1>
      <p className="intro-text">Explore our collection of adorable pets:</p>
      <ul>
        <li>
          <Link to="/doggos">Doggos</Link>
        </li>
        <li>
          <Link to="/cattos">Cattos</Link>
        </li>
      </ul>
    </div>
  );
}
