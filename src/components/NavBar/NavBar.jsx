import React, { useState } from 'react';
import {
	NavBg,
	NavButton,
	NavLink,
	NavText,
	NavWrapper,
	SecondWrapper,
	Wrapper,
} from './NavBar.styles';
import PNGIcons from '../../assets/Images/Icons/PNGIcons';
import { SocialIcon } from '../Home/Home.styles';
import github from '../../assets/Images/Icons/github.png';
import fb from '../../assets/Images/Icons/facebook.png';
import link from '../../assets/Images/Icons/linkedin.png';

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
				{width > 992 ? (
					<SecondWrapper>
						<SocialIcon
							img={github}
							href='https://github.com/Mateusz-Ujma'
							target='_blank'
						></SocialIcon>
						<SocialIcon
							img={fb}
							href='https://www.facebook.com/mateusz.ujma.7'
							target='_blank'
						></SocialIcon>
						<SocialIcon
							img={link}
							href='https://www.linkedin.com/in/mateusz-ujma/'
							target='_blank'
						></SocialIcon>
					</SecondWrapper>
				) : (
					''
				)}
			</NavWrapper>
		</Wrapper>
	);
};

export default NavBar;
