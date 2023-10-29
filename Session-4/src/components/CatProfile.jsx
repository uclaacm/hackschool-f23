import React from 'react';
import '../styles/Profile.css';

export default function CatProfile(props) {
  return (
    <div className="profile">
      <h2>Cat Profile</h2>
      <img src={props.image} alt={props.name} height="400px" />
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age} years old</p>
      <p>Breed: {props.breed}</p>
    </div>
  );
}