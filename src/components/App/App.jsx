import { useEffect, useRef, useState } from 'react';
import { Wrapper } from './App.styles';
import GlobalStyle from '../../assets/Styles/GlobalStyles';
import Background from '../BackGround/Background';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import TechStack from '../TechStack/TechStack';
import Experience from '../Experience/Experience';
import About from '../About/About';
import Contact from '../Contact/Contact';

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
			<Home refHome={refHome} />
			<TechStack refStack={refStack} />
			<Experience refExp={refExp} />
			<About refAbout={refAbout} />
			<Contact refContact={refContact} />
		</Wrapper>
	);
}

export default App;
