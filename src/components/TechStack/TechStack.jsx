import React, { useState } from 'react';
import {
	IconStack,
	IconText,
	IconWrapper,
	IconWrapperSec,
	IconsWrapper,
	MainText,
	SecondText,
	SecondWrapper,
	Wrapper,
} from './TechStack.styles';

import { Icon } from '../BackGround/Background.styles';
import SVGIcons from '../../assets/Images/SVG/svgIcon';
import PNGIcons from '../../assets/Images/Icons/PNGIcons';

const TechStack = ({ refStack }) => {
	// let firstClick = true;
	// const [dir, setDir] = useState(false);
	// const IconW = document.getElementsByClassName('IW');

	// const ResetSide = () => {
	// 	for (let i = 0; i < IconW.length; i++) {
	// 		IconW[i].classList.remove('left');
	// 		IconW[i].classList.remove('right');
	// 	}
	// };

	// const handleDirSwitchLeft = (e) => {
	// 	if (
	// 		e.target.parentElement.parentElement.classList.contains('left') ||
	// 		e.target.parentElement.parentElement.classList.contains('right')
	// 	) {
	// 		if (e.target.parentElement.firstChild.tagName === 'IMG') {
	// 			ResetSide();
	// 			e.target.parentElement.parentElement.classList.remove('left');
	// 		} else {
	// 			ResetSide();
	// 			e.target.parentElement.parentElement.classList.remove('right');
	// 		}
	// 	} else {
	// 		if (e.target.parentElement.firstChild.tagName === 'IMG') {
	// 			ResetSide();
	// 			e.target.parentElement.parentElement.classList.add('left');
	// 		} else {
	// 			ResetSide();
	// 			e.target.parentElement.parentElement.classList.add('right');
	// 		}
	// 	}
	// };
	return (
		<Wrapper ref={refStack}>
			<SecondWrapper>
				<MainText>Tech Stack</MainText>
				<IconsWrapper>
					<IconWrapper>
						<IconWrapperSec>
							<IconStack src={PNGIcons.imgReact} />
							<IconText>ReactJS</IconText>
						</IconWrapperSec>
						<IconWrapperSec>
							<IconStack src={PNGIcons.imgJs} />
							<IconText>Java Script</IconText>
						</IconWrapperSec>
					</IconWrapper>
					<IconWrapper>
						<IconWrapperSec>
							<IconStack src={PNGIcons.imgRes} />
							<IconText>Responsive Web Design</IconText>
						</IconWrapperSec>
						<IconWrapperSec>
							<IconStack src={PNGIcons.imgHtml} />
							<IconText>HTML</IconText>
						</IconWrapperSec>
					</IconWrapper>
					<IconWrapper>
						<IconWrapperSec>
							<IconStack src={PNGIcons.imgCss} />
							<IconText>CSS </IconText>
						</IconWrapperSec>
						<IconWrapperSec>
							<IconStack src={PNGIcons.imgSass} />
							<IconText>SCSS</IconText>
						</IconWrapperSec>
					</IconWrapper>
				</IconsWrapper>
			</SecondWrapper>
		</Wrapper>
	);
};

export default TechStack;
