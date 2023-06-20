import React, { useState } from 'react';
import { NavBg, NavButton, NavLink, NavText, NavWrapper, Wrapper } from './NavBar.styles';
import PNGIcons from '../../assets/Images/Icons/PNGIcons';

const NavBar = ({ refStack, refExp, refContact, refAbout, refHome }) => {
	const exp = document.getElementById('test1');
	const [navOpen, setNavOpen] = useState(false);
	const width = window.innerWidth;
	const handleClick = (ref) => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<Wrapper>
			<NavButton
				className={navOpen ? '' : 'close'}
				onClick={() => {
					setNavOpen(!navOpen);
				}}
			>
				{width > 992 ? (
					<NavBg src={navOpen ? PNGIcons.imgClose : PNGIcons.imgForw} />
				) : null}
			</NavButton>
			<NavWrapper className={navOpen ? '' : 'close'}>
				<NavLink onClick={() => handleClick(refHome)}>
					<NavBg src={PNGIcons.imgHome} />
					{width > 992 ? <NavText>Home</NavText> : null}
				</NavLink>
				<NavLink onClick={() => handleClick(refStack)}>
					<NavBg src={PNGIcons.imgStack} />
					{width > 992 ? <NavText>Tech Stack</NavText> : null}
				</NavLink>
				<NavLink onClick={() => handleClick(refExp)}>
					<NavBg src={PNGIcons.imgExp} />
					{width > 992 ? <NavText>Experience</NavText> : null}
				</NavLink>
				<NavLink onClick={() => handleClick(refAbout)}>
					<NavBg src={PNGIcons.imgAbout} />
					{width > 992 ? <NavText>About me</NavText> : null}
				</NavLink>
				<NavLink onClick={() => handleClick(refContact)}>
					<NavBg src={PNGIcons.imgMail} />
					{width > 992 ? <NavText>Contact</NavText> : null}
				</NavLink>
			</NavWrapper>
		</Wrapper>
	);
};

export default NavBar;
