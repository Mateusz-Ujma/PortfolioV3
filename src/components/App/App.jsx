import { useEffect, useRef, useState } from 'react';
import { MainWrapper, SecondWrapper, Wrapper } from './App.styles';
import GlobalStyle from '../../assets/Styles/GlobalStyles';

import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import TechStack from '../TechStack/TechStack';
import Experience from '../Experience/Experience';
import About from '../About/About';
import Contact from '../Contact/Contact';

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
				<MainWrapper>
					<Home refHome={refHome} />
					<TechStack refStack={refStack} />
					<Project refExp={refExp} />
					<Experience />
					<About refAbout={refAbout} />
					<Contact refContact={refContact} />
				</MainWrapper>
			) : (
				<MainWrapper>
					<SecondWrapper>
						<Home refHome={refHome} />
						<TechStack refStack={refStack} />
					</SecondWrapper>
					<SecondWrapper>
						<Project refExp={refExp} />
						<Experience />
					</SecondWrapper>
					<SecondWrapper>
						<About refAbout={refAbout} />
						<Contact refContact={refContact} />
					</SecondWrapper>
				</MainWrapper>
			)}
		</Wrapper>
	);
}

export default App;
