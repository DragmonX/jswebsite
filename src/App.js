import React from 'react';
import ReactDOM from 'react-dom/client';
import './Design.css'

const myFirstElement = () => {
	<div className='skills'>
		<div> C/C++ </div>
		<div> Python </div>
		<div> PyGame </div>
		<div> Bash </div>
		<div> GitHub </div>
		<div> Debating </div>
		<div> CP </div>
		<div> Physics </div>
		<div> Mathematics </div>
		<div> HTML/CSS </div>
		<div> Haskell </div>
	</div>}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);