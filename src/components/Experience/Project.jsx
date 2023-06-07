import React from 'react';
import {
	Btn,
	IconStack,
	IconStackWrapper,
	ImgWrap,
	MainText,
	ProjectImg,
	SecondWrapper,
	ThirdText,
	Wrapper,
} from './Experience.styles';
import { Icon } from '../BackGround/Background.styles';
import SVGIcons from '../../assets/Images/SVG/svgIcon';
import PNGIcons from '../../assets/Images/Icons/PNGIcons';
import Pic1 from '../../assets/Images/Picture/Pic1.jpg';

const Project = ({ refExp }) => {
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
		</Wrapper>
	);
};

export default Project;
