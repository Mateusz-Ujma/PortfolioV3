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
	window.addEventListener('scroll', (e) => {
		const t = document.querySelectorAll('.test');
		let scrolled = window.pageYOffset;

		var index = 0,
			length = t.length;
		for (index; index < length; index++) {
			var pos = window.pageYOffset * t[index].dataset.rate;
			t[index].style.transform = `translate3d(0px ,${pos}px, 0px)`;
		}
	});

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
					<Icon
						data-rate='0.2'
						src={SVGIcons.svgREACT}
						size={200}
						top={2303}
						left={15}
						rot={0}
						className='test'
					/>
					<Icon
						data-rate='-0.3'
						src={SVGIcons.svgJS}
						size={200}
						top={2203}
						left={35}
						rot={0}
						className='test'
					/>
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

					<About refAbout={refAbout} />

					<Contact refContact={refContact} />
				</MainWrapper>
			)}
			<Icon
				data-rate='0.5'
				src={SVGIcons.svgJS}
				size={50}
				top={203}
				left={20}
				rot={0}
				className='test'
			/>
			<Icon
				data-rate='0.5'
				src={SVGIcons.svgREACT}
				size={120}
				top={403}
				left={65}
				rot={0}
				className='test'
			/>
			<Icon
				data-rate='-0.2'
				src={SVGIcons.svgCSS}
				size={50}
				top={703}
				left={30}
				rot={0}
				className='test'
			/>
			<Icon
				data-rate='-0.2'
				src={SVGIcons.svgHTML}
				size={50}
				top={1203}
				left={60}
				rot={0}
				className='test'
			/>
			<Icon
				data-rate='-0.2'
				src={SVGIcons.svgREACT}
				size={200}
				top={903}
				left={15}
				rot={0}
				className='test'
			/>
			<Icon
				data-rate='-0.5'
				src={SVGIcons.svgJS}
				size={90}
				top={2003}
				left={60}
				rot={0}
				className='test'
			/>
		</Wrapper>
	);
}

export default App;
