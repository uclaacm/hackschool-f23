import React from 'react';
import { Link } from 'react-router-dom';
import DogProfile from '../components/DogProfile';
import DobbyPhoto from '../images/Dobby.jpg';
import PiggyPhoto from '../images/Piggy.jpg';
import '../styles/PetProfiles.css';

export default function Doggos() {
  const doggos = [
    {
      name: 'Dobby',
      age: 3,
      breed: 'Pomeranian',
      image: DobbyPhoto
    },
    {
      name: 'Piggy',
      age: 3,
      breed: 'Poodle',
      image: PiggyPhoto
    }
  ];

  return (
    <>
      <h1 className="title">Cute dogs that I know</h1>
      <div className="container">
        {doggos.map((doggo, index) => (
          <DogProfile
            key={index}
            name={doggo.name}
            age={doggo.age}
            breed={doggo.breed}
            image={doggo.image}
          />
        ))}
      </div>
      <div className="link">
        <Link to="/">Back</Link>
      </div>
    </>
  );
}
