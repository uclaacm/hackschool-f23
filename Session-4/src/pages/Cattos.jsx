import React from 'react';
import { Link } from 'react-router-dom';
import CatProfile from '../components/CatProfile';
import BonkaiPhoto from '../images/Bonkai.jpg';
import UnknownPhoto from '../images/Unknown.jpg';
import '../styles/PetProfiles.css';

export default function Cattos() {
  const cattos = [
    {
      name: 'Bonkai',
      age: '?',
      breed: '?',
      image: BonkaiPhoto
    },
    {
        name: '?',
        age: '?',
        breed: '?',
        image: UnknownPhoto
      },
  ];

  return (
    <>
        <h1 className="title">Cute cats that I know</h1>
        <div className="container">
          {cattos.map((catto, index) => (
              <CatProfile
              key={index}
              name={catto.name}
              age={catto.age}
              breed={catto.breed}
              image={catto.image}
              />
          ))}
        </div>
        <div className="link">
          <Link to="/">Back</Link>
        </div>
    </>
  );
}