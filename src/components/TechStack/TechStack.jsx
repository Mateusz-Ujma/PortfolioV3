import React, { useState } from 'react';
import {
	IconStack,
	IconText,
	IconWrapper,
	IconWrapperSec,
	IconsWrapper,
	MainText,
	SecondWrapper,
	Wrapper,
} from './TechStack.styles';
import Background from '../BackGround/Background';
import { Icon } from '../BackGround/Background.styles';
import SVGIcons from '../../assets/Images/SVG/svgIcon';
import PNGIcons from '../../assets/Images/Icons/PNGIcons';

const TechStack = ({ refStack }) => {
	let firstClick = true;
	const [dir, setDir] = useState(false);
	const handleIconClick = (e) => {
		if (dir) {
			e.target.classList.add('right');
		} else {
			e.target.classList.add('left');
		}
	};
	const handleDirSwitchLeft = (e) => {
		if (firstClick) {
			if (e.target.parentElement.firstChild.tagName === 'IMG') {
				e.target.parentElement.parentElement.classList.add('left');
				firstClick = !firstClick;
			} else {
				e.target.parentElement.parentElement.classList.add('right');
				firstClick = !firstClick;
			}
		} else {
			if (e.target.parentElement.firstChild.tagName === 'IMG') {
				e.target.parentElement.parentElement.classList.remove('left');
				firstClick = !firstClick;
			} else {
				e.target.parentElement.parentElement.classList.remove('right');
				firstClick = !firstClick;
			}
		}
	};
	return (
		<Wrapper ref={refStack}>
			<Background />
			<SecondWrapper>
				<MainText>Tech Stack</MainText>
				<IconsWrapper>
					<IconWrapper>
						<IconWrapperSec id='test' onClick={(e) => handleDirSwitchLeft(e)}>
							<IconText>Test</IconText>
							<IconStack src={PNGIcons.imgReact} />
						</IconWrapperSec>
						<IconWrapperSec onClick={(e) => handleDirSwitchLeft(e)}>
							<IconStack src={PNGIcons.imgReact} />
							<IconText>Test</IconText>
						</IconWrapperSec>
					</IconWrapper>
					<IconWrapper>
						<IconWrapperSec onClick={(e) => handleDirSwitchLeft(e)}>
							<IconText>Test</IconText>
							<IconStack src={PNGIcons.imgReact} />
						</IconWrapperSec>
						<IconWrapperSec onClick={(e) => handleDirSwitchLeft(e)}>
							<IconStack src={PNGIcons.imgReact} />
							<IconText>Test</IconText>
						</IconWrapperSec>
					</IconWrapper>
					<IconWrapper>
						<IconWrapperSec onClick={(e) => handleDirSwitchLeft(e)}>
							<IconText>Test</IconText>
							<IconStack src={PNGIcons.imgReact} />
						</IconWrapperSec>
						<IconWrapperSec onClick={(e) => handleDirSwitchLeft(e)}>
							<IconStack src={PNGIcons.imgReact} />
							<IconText>Test</IconText>
						</IconWrapperSec>
					</IconWrapper>
				</IconsWrapper>
			</SecondWrapper>
			<Icon src={SVGIcons.svgJS} size={80} top={200} left={50} rot={-30} />
			<Icon src={SVGIcons.svgREACT} size={80} top={400} left={0} rot={-45} />
			<Icon src={SVGIcons.svgCSS} size={80} top={600} left={0} rot={-25} />
			<Icon src={SVGIcons.svgHTML} size={80} top={50} left={0} rot={30} />
		</Wrapper>
	);
};

export default TechStack;
