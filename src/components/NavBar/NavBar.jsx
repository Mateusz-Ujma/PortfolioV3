import React, { useState } from 'react';
import { NavBg, NavButton, NavLink, NavWrapper, Wrapper } from './NavBar.styles';
import PNGIcons from '../../assets/Images/Icons/PNGIcons';

const NavBar = ({ refStack, refExp, refContact, refAbout, refHome }) => {
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
				<NavBg src={PNGIcons.imgClose} />
			</NavButton>
			<NavWrapper className={navOpen ? '' : 'close'}>
				<NavLink onClick={() => handleClick(refHome)}>
					<NavBg src={PNGIcons.imgHome} />
				</NavLink>
				<NavLink onClick={() => handleClick(refStack)}>
					<NavBg src={PNGIcons.imgStack} />
				</NavLink>
				<NavLink onClick={() => handleClick(refExp)}>
					<NavBg src={PNGIcons.imgExp} />
				</NavLink>
				<NavLink onClick={() => handleClick(refAbout)}>
					<NavBg src={PNGIcons.imgAbout} />
				</NavLink>
				<NavLink onClick={() => handleClick(refContact)}>
					<NavBg src={PNGIcons.imgMail} />
				</NavLink>
			</NavWrapper>
		</Wrapper>
	);
};

export default NavBar;
