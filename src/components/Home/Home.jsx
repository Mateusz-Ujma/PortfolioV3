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
	return (
		<Wrapper ref={refHome}>
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
			<MainText>Hi .</MainText>
			<SecondText>I&apos;m </SecondText>
			<SecondText>Mateusz</SecondText>
			<ThirdText>
				I&apos;ve always wanted to become a Frontend Developer. Now it&apos;s time to turn
				what I&apos;ve learned into something I can show to everyone.
			</ThirdText>
			<Icon src={SVGIcons.svgJS} size={80} top={200} left={71} rot={-30} />
			<Icon src={SVGIcons.svgREACT} size={80} top={400} left={0} rot={-45} />
			<Icon src={SVGIcons.svgCSS} size={80} top={600} left={0} rot={-25} />
			<Icon src={SVGIcons.svgHTML} size={80} top={50} left={0} rot={30} />
		</Wrapper>
	);
};

export default Home;
