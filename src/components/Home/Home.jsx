import React from 'react';
import { MainText, SecondText, SecondWrapper, SocialIcon, Wrapper } from './Home.styles';
import github from '../../assets/Images/Icons/github.png';
import fb from '../../assets/Images/Icons/facebook.png';
import link from '../../assets/Images/Icons/linkedin.png';

const Home = () => {
	return (
		<Wrapper>
			<SecondWrapper>
				<SocialIcon img={github} href='https://github.com/Mateusz-Ujma' target='_blank'></SocialIcon>
				<SocialIcon img={fb} href='https://www.facebook.com/mateusz.ujma.7' target='_blank'></SocialIcon>
				<SocialIcon img={link} href='https://www.linkedin.com/in/mateusz-ujma/' target='_blank'></SocialIcon>
			</SecondWrapper>
			<MainText>Hi .</MainText>
			<SecondText>I&apos;m </SecondText>
			<SecondText>Mateusz</SecondText>
		</Wrapper>
	);
};

export default Home;
