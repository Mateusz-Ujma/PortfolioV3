import React, { useState } from 'react';
import {
	MainText,
	SecondText,
	SecondWrapper,
	SocialIcon,
	ThirdText,
	Wrapper,
} from './Home.styles';
import SVGIcons from '../../assets/Images/SVG/svgIcon';
import github from '../../assets/Images/Icons/github.png';
import fb from '../../assets/Images/Icons/facebook.png';
import link from '../../assets/Images/Icons/linkedin.png';

import { Icon } from '../BackGround/Background.styles';

const Home = ({ refHome }) => {
	const width = window.innerWidth;
	return (
		<Wrapper ref={refHome}>
			{width > 992 ? (
				''
			) : (
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
			)}

			<MainText>Hi .</MainText>
			<SecondText>I&apos;m </SecondText>
			<SecondText>Mateusz</SecondText>
			<SecondText engName>(Matthew)</SecondText>
			<ThirdText>
				I&apos;ve always wanted to become a Frontend Developer. Now it&apos;s time to turn
				what I&apos;ve learned into something I can show to everyone.
			</ThirdText>
		</Wrapper>
	);
};

export default Home;
