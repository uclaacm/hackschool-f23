import React from 'react';
import '../styles/Squirrel.css';

export default function Squirrel({ name, imageSource, description }) {
	return (
		<div className='squirrelContainer'>
			<h1>{name}</h1>
			<img
				className='squirrelImage'
				src={imageSource}
				alt='Alvin the squirrel'
			/>
			<p>{description}</p>
		</div>
	);
}
