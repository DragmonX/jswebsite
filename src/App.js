import React from 'react';
import './styles.css'

import Navbar from './components/Navbar';
import Home from './components/Home';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
	return (
		<div className="App">
			<Navbar />
			<br/> <br/>

			<Home />
			<Achievements />
			<br /><br /><br /><br /><br />

			<Projects />
			<br /><br /><br /><br /><br />
			
			<Skills />
			<Contact />
		</div>
	);
}

export default App;