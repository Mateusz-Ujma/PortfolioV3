import React, { useState } from 'react';
import { NavBg, NavButton, NavLink, NavWrapper, Wrapper } from './NavBar.styles';
import imgAbout from '../../assets/Images/Icons/about.png';
import imgStack from '../../assets/Images/Icons/data.png';
import imgHome from '../../assets/Images/Icons/home.png';
import imgMail from '../../assets/Images/Icons/mail.png';
import imgExp from '../../assets/Images/Icons/quality.png';
import imgClose from '../../assets/Images/Icons/close.png';

const NavBar = () => {
	const [navOpen, setNavOpen] = useState(false);
	return (
		<Wrapper>
			<NavButton
				className={navOpen ? '' : 'close'}
				onClick={() => {
					setNavOpen(!navOpen);
				}}
			>
				<NavBg src={imgClose} />
			</NavButton>
			<NavWrapper className={navOpen ? '' : 'close'}>
				<NavLink>
					<NavBg src={imgHome} />
				</NavLink>
				<NavLink>
					<NavBg src={imgStack} />
				</NavLink>
				<NavLink>
					<NavBg src={imgExp} />
				</NavLink>
				<NavLink>
					<NavBg src={imgAbout} />
				</NavLink>
				<NavLink>
					<NavBg src={imgMail} />
				</NavLink>
			</NavWrapper>
		</Wrapper>
	);
};

export default NavBar;
