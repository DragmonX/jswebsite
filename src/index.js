import React from 'react';
import ReactDOM from 'react-dom/client';
import './Design.css'
import MyPic from './MyPic.png'
import Pokemon from './Pokemon-gameofmasters.png'
import PokeTowers from './PokeTowers.png'
import Instagram_icon from './Instagram_icon.png'
import Facebook_icon from './Faceboon-icon.png'
import GitHub_icon from './GitHub-icon.png'
import Gmail_icon from './Gmail-icon.png'

const First = (
	<h1 className='h1'>My Skills</h1>
	)

const myFirstElement = (
<>
	<ul class="nav">
		<li class="nav"><a className="nav" href="#Home">About</a></li>
		<li class="nav"><a className="nav" href="#Achievements">Achievements</a></li>
		<li class="nav"><a className="nav" href="#Projects">Projects</a></li>
		<li class="nav"><a className="nav" href="#Skills">Skills</a></li>
		<li class="nav"><a className="nav" href="#Contact">Contact Me</a></li>
	</ul>
	<br/>
	<br/>

	<a id = "Home"></a>
	<div className="flex-container">
		<div style={{width: '100%'}}><font size="100">Hi, I am Aryan Sanghi</font>
		<br/>
		<font size="5">I am a CSE undergrad at IIT Kharagpur</font>
		</div>
		<div style={{width: '100%'}}><img src={MyPic} width = "600" height = "750" align = "right"/></div>
	</div>

	<a id = "Achievements"></a>
	<h1 class="h1">My Achievements</h1>

	<div class="achievements">
		<div><h2>Competitive Programming</h2></div>
		<div><h2>Academic Achievements</h2></div>
		<div>
			<font style={{color:'white',textAlign: 'center', fontSize:'17px'}}>
				<a href="https://www.codechef.com/users/aryansanghi" style={{color:'skyblue'}}>CodeChef</a> - Highest Rating: 2239<br/>
				<a href="https://codeforces.com/profile/aryansanghi" style={{color:'skyblue'}}>Codeforces</a> - Highest Rating: 1690<br/>
				<font style={{color:'black',textDecoration: 'underline'}}>Google CodeJam</font> - 2020 - Qualified Round 1(Rank-1350) and Reached Round 2<br/>
				<font style={{color:'black',textDecoration: 'underline'}}>Google KickStart</font> - Best Rank - 624<br/>
				<font style={{color:'black',textDecoration: 'underline'}}>Olympiads</font> - Qualified ZCO - 2019 & ZIO - 2019<br/>
			</font>
		</div>
		<div>
			<font style={{color:'white',textAlign: 'center', fontSize:'17px'}}>
				<font style={{color:'black',textDecoration: 'underline'}}>JEE Advanced 2022</font> - AIR: 486<br/>
				<font style={{color:'black',textDecoration: 'underline'}}>JEE Mains 2022</font> -  AIR: 550<br/>
				<font style={{color:'black',textDecoration: 'underline'}}>Olympiads</font> - Qualified NSEC - 2021&2022, NSEA - 2021&2022, NSEP - 2022, NTSE scholar, KVPY SA scholar<br/>
			</font>
		</div>
	</div>
	<br/><br/><br/><br/><br/>

	<a id = "Projects"></a>
	<h1 class="h1">My Projects</h1>

	<div class="proj">
		<div><a class = "proj" href="https://github.com/DragmonX/Pokemon---The-Game-Of-Masters"><img class = "projimg" src={Pokemon} width = "650" height="400"/></a></div>
		<div><a id = "proj" href="https://github.com/DragmonX/PokeTowers-Legends"><img class = "projimg" src={PokeTowers} width = "650" height="400"/></a></div>
	</div>

	<br/><br/><br/><br/><br/>

	<a id = "Skills"></a>
	<h1 class="h1">My Skills</h1>

	<div class="skills">
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
	</div>

	<a id = "Contact"></a>

	<br/><br/><br/><br/><br/>

	<h1 class="h1">Contact Me</h1>

	<div class="contact">
		<div><a href="https://www.instagram.com/aryansanghi11/"><img src = {Instagram_icon} width="90" height="90"/></a></div>
		<div><a href="https://www.facebook.com/people/Aryan-Sanghi/100086674040207/"><img src = {Facebook_icon} width="90" height="90"/></a></div>
		<div><a href="hhttps://github.com/DragmonX"><img src = {GitHub_icon} width="110" height="110"/></a></div>
		<div><a href="mailto:aryansanghi2004@gmail.com"><img src = {Gmail_icon} width="110" height="80"/></a></div>
	</div>
</>)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);