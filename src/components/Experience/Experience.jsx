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

import { Icon } from '../BackGround/Background.styles';
import SVGIcons from '../../assets/Images/SVG/svgIcon';
import PNGIcons from '../../assets/Images/Icons/PNGIcons';
import Pic1 from '../../assets/Images/Picture/Pic1.jpg';

const Experience = ({ refExp }) => {
	return (
		<Wrapper ref={refExp}>
			<MainText>Projects</MainText>
			<SecondWrapper>
				<ImgWrap>
					<a
						href='https://karolinaglabmakeup.netlify.app/'
						target='_blank'
						rel='noreferrer'
					>
						<ProjectImg src={Pic1} />
					</a>
				</ImgWrap>
				<ThirdText>Simple Web create for Makeup Artist</ThirdText>
				<ThirdText>Stack:</ThirdText>
				<IconStackWrapper>
					<IconStack src={PNGIcons.imgReact} />
					<IconStack src={PNGIcons.imgSass} />
					<IconStack src={PNGIcons.imgRes} />
				</IconStackWrapper>
				<IconStackWrapper>
					<Btn
						href='https://karolinaglabmakeup.netlify.app/'
						target='_blank'
						rel='noreferrer'
					>
						View
					</Btn>
					<Btn
						href='https://karolinaglabmakeup.netlify.app/'
						target='_blank'
						rel='noreferrer'
					>
						GitHub
					</Btn>
				</IconStackWrapper>
			</SecondWrapper>
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
