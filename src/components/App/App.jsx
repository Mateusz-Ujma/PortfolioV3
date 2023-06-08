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
			<Parallax pages={5.7}>
				<ParallaxLayer offset={0} speed={-0.1}>
					<Icon src={SVGIcons.svgJS} size={80} top={400} left={71} rot={-30} />
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={-0.3}>
					<Icon src={SVGIcons.svgCSS} size={80} top={200} left={0} rot={30} />
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={0.3}>
					<Icon src={SVGIcons.svgCSS} size={100} top={200} left={38} rot={30} />
				</ParallaxLayer>
				<ParallaxLayer offset={0}>
					<Home refHome={refHome} />
				</ParallaxLayer>
				<ParallaxLayer offset={1}>
					<TechStack refStack={refStack} />
				</ParallaxLayer>
				<ParallaxLayer offset={2}>
					<Project refExp={refExp} />
				</ParallaxLayer>
				<ParallaxLayer offset={3}>
					<Experience />
				</ParallaxLayer>
				<ParallaxLayer offset={4} factor={0.4}>
					<About refAbout={refAbout} />
				</ParallaxLayer>
				<ParallaxLayer offset={5} factor={0.4}>
					<Contact refContact={refContact} />
				</ParallaxLayer>
			</Parallax>
		</Wrapper>
	);
}

export default App;
