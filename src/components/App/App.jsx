import { useEffect, useRef, useState } from 'react';
import { Wrapper } from './App.styles';
import GlobalStyle from '../../assets/Styles/GlobalStyles';

import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import TechStack from '../TechStack/TechStack';
import Experience from '../Experience/Experience';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Project from '../Experience/Project';
import SVGIcons from '../../assets/Images/SVG/svgIcon';
import { Icon } from '../BackGround/Background.styles';

function App() {
	const refHome = useRef(null);
	const refStack = useRef(null);
	const refExp = useRef(null);
	const refContact = useRef(null);
	const refAbout = useRef(null);
	const height = window.innerHeight;

	return (
		<Wrapper>
			<GlobalStyle />
			<NavBar
				refStack={refStack}
				refExp={refExp}
				refContact={refContact}
				refAbout={refAbout}
				refHome={refHome}
			/>
			<Parallax pages={4.9}>
				<ParallaxLayer offset={0} speed={-1.1}>
					<Icon src={SVGIcons.svgJS} size={80} top={400} left={71} rot={-30} />
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={-0.3}>
					<Icon src={SVGIcons.svgCSS} size={80} top={200} left={0} rot={30} />
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={-0.1}>
					<Icon src={SVGIcons.svgREACT} size={100} top={1900} left={34} rot={30} />
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={-0.1}>
					<Icon src={SVGIcons.svgREACT} size={130} top={1200} left={15} rot={30} />
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.5}>
					<Icon src={SVGIcons.svgHTML} size={50} top={800} left={45} rot={30} />
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.5}>
					<Icon src={SVGIcons.svgCSS} size={80} top={2200} left={21} rot={30} />
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.1}>
					<Icon src={SVGIcons.svgREACT} size={100} top={3100} left={8} rot={30} />
				</ParallaxLayer>
				<ParallaxLayer offset={0} factory={4.9}>
					<h1>{height}</h1>
					<Home refHome={refHome} />
					<TechStack refStack={refStack} />
					<Project refExp={refExp} />
					<Experience />
					<About refAbout={refAbout} />
					<Contact refContact={refContact} />
				</ParallaxLayer>
			</Parallax>
		</Wrapper>
	);
}

export default App;
