import React from 'react';
import './styles/App.css';
import SquirrelNav from './components/SquirrelNav';
import Squirrel from './components/Squirrel';
import Alvin from './img/alvin.jpeg';
import ChipNDale from './img/chipndale.jpeg';
import Scrat from './img/scrat.png';
import UCLASquirrel from './img/ucla-squirrel.jpeg';

function App() {
	let squirrels = [
		{
			name: 'Alvin',
			imageSource: Alvin,
			description:
				'This is Alvin. He is very cool. One of the squirrels of all time.'
		},
		{
			name: 'Chip and Dale',
			imageSource: ChipNDale,
			description: 'These are Chip and Dale. They be real ones.'
		},
		{
			name: 'Scrat',
			imageSource: Scrat,
			description: 'Scrat is lit'
		},
		{
			name: 'UCLA Squirrel',
			imageSource: UCLASquirrel,
			description:
				'UCLA Squirrels are fat. I tried petting one once and it scratched me and I had to get tested for rabies.'
		}
	];

	return (
		<div id='app'>
			<SquirrelNav />
			<div id='introText'>
				<h1>Hi, I'm James.</h1>
				<h3>Today, I will be presenting some of my favorite squirrels.</h3>
				<p>
					Currently I go to UCLA. And if you didn't know, there are a{' '}
					<i>bunch</i> of squirrels here. They are all super duper fat.
					Sometimes I get the intrusive thought to just chase one and try to
					catch it and see what it does. Can you imagine being a squirrel? Do
					squirrels have some knowledge of how small they are? They are{' '}
					<b>tiny</b>. But like from there POV they're probably just roaming a
					world of giants, right? Like to them it's normal for a tree to be
					ginormous or for an ant to be like bigger relatively than it is to us.
					Kinda crazy.
				</p>
				<p>
					Anyways, here's some of my top tier squirrels. I'm just realizing that
					some of these are actually chipmunks. However whatever, I already got
					the images for them and made this site so I don't really feel like
					changing it now. If you're a Hackschool person who is reading this,
					I'm sorry for my rodent ignorance.
				</p>
			</div>

			<div id='squirrelComponents'>
				{squirrels.map((squirrel, index) => (
					<Squirrel
						key={index}
						name={squirrel.name}
						imageSource={squirrel.imageSource}
						description={squirrel.description}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
