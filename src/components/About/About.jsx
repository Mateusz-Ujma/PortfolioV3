import React from 'react';
import { MainText, SecondWrapper, ThirdText, Wrapper } from './About.styles';

const About = ({ refAbout }) => {
	return (
		<Wrapper ref={refAbout}>
			<MainText>After Work</MainText>
			<SecondWrapper>
				<ThirdText>
					I like to put myself on the couch and watch the next episode of my favorite
					Anime which is One Piece. Sometimes when I feel like it, I like to play World of
					Tanks, and when I want to wind down I like to sit down and read whether
					it&apos;s a fantasy book or a good book on economics.
				</ThirdText>
			</SecondWrapper>
		</Wrapper>
	);
};

export default About;
