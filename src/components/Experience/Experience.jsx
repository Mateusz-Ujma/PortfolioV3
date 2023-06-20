import React from 'react';
import {
	Btn,
	ExpTextMain,
	IconStack,
	IconStackWrapper,
	ImgWrap,
	MainText,
	ProjectImg,
	SecondText,
	SecondWrapper,
	ThirdText,
	Wrapper,
} from './Experience.styles';

const Experience = () => {
	return (
		<Wrapper id='test1'>
			<ExpTextMain>Experience</ExpTextMain>
			<SecondWrapper>
				<SecondText bold>2020 - 2022</SecondText>
				<SecondText bold>Coding Giants</SecondText>
				<ThirdText>Programming Teacher / Trainer</ThirdText>
				<ThirdText>
					Working at Coding Giants, I was teaching children and teenagers the basics and
					more advanced concepts of creating websites with HTML/CSS/JavaScript
					,programming in C# and creating computer and mobile games using Unity3D.
				</ThirdText>
			</SecondWrapper>
		</Wrapper>
	);
};

export default Experience;
