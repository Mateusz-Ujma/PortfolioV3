import React, { useState } from 'react';
import { NavBg, NavButton, NavLink, NavText, NavWrapper, Wrapper } from './NavBar.styles';
import PNGIcons from '../../assets/Images/Icons/PNGIcons';

const NavBar = ({ refStack, refExp, refContact, refAbout, refHome }) => {
	const exp = document.getElementById('test1');
	const handleClick = (ref) => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};
	const [navOpen, setNavOpen] = useState(false);
	return (
		<Wrapper>
			<NavButton
				className={navOpen ? '' : 'close'}
				onClick={() => {
					setNavOpen(!navOpen);
				}}
			>
				<NavBg src={navOpen ? PNGIcons.imgClose : PNGIcons.imgForw} />
			</NavButton>
			<NavWrapper className={navOpen ? '' : 'close'}>
				<NavLink onClick={() => handleClick(refHome)}>
					<NavBg src={PNGIcons.imgHome} />
					<NavText>Home</NavText>
				</NavLink>
				<NavLink onClick={() => handleClick(refStack)}>
					<NavBg src={PNGIcons.imgStack} />
					<NavText>Tech Stack</NavText>
				</NavLink>
				<NavLink onClick={() => handleClick(refExp)}>
					<NavBg src={PNGIcons.imgExp} />
					<NavText>Experience</NavText>
				</NavLink>
				<NavLink onClick={() => handleClick(refAbout)}>
					<NavBg src={PNGIcons.imgAbout} />
					<NavText>About me</NavText>
				</NavLink>
				<NavLink onClick={() => handleClick(refContact)}>
					<NavBg src={PNGIcons.imgMail} />
					<NavText>Contact</NavText>
				</NavLink>
			</NavWrapper>
		</Wrapper>
	);
};

export default NavBar;
