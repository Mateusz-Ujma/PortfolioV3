import { useEffect, useRef, useState } from 'react';
import { SecondWrapper, Wrapper } from './App.styles';
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
	const width = window.innerWidth;

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
			{width < 768 ? (
				<Parallax pages={6}>
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
					<ParallaxLayer offset={4}>
						<About refAbout={refAbout} />
					</ParallaxLayer>
					<ParallaxLayer offset={5}>
						<Contact refContact={refContact} />
					</ParallaxLayer>
				</Parallax>
			) : (
				<Parallax pages={3}>
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
					<ParallaxLayer offset={0}>
						<SecondWrapper>
							<Home refHome={refHome} />
							<TechStack refStack={refStack} />
						</SecondWrapper>
					</ParallaxLayer>
					<ParallaxLayer offset={1}>
						<SecondWrapper>
							<Project refExp={refExp} />
							<Experience />
						</SecondWrapper>
					</ParallaxLayer>
					<ParallaxLayer offset={2}>
						<SecondWrapper>
							<About refAbout={refAbout} />
							<Contact refContact={refContact} />
						</SecondWrapper>
					</ParallaxLayer>
				</Parallax>
			)}
		</Wrapper>
	);
}

export default App;
