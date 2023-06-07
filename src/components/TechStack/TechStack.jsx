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
	let firstClick = true;
	const [dir, setDir] = useState(false);
	const IconW = document.getElementsByClassName('IW');

	const ResetSide = () => {
		for (let i = 0; i < IconW.length; i++) {
			IconW[i].classList.remove('left');
			IconW[i].classList.remove('right');
		}
	};

	const handleDirSwitchLeft = (e) => {
		if (
			e.target.parentElement.parentElement.classList.contains('left') ||
			e.target.parentElement.parentElement.classList.contains('right')
		) {
			if (e.target.parentElement.firstChild.tagName === 'IMG') {
				ResetSide();
				e.target.parentElement.parentElement.classList.remove('left');
			} else {
				ResetSide();
				e.target.parentElement.parentElement.classList.remove('right');
			}
		} else {
			if (e.target.parentElement.firstChild.tagName === 'IMG') {
				ResetSide();
				e.target.parentElement.parentElement.classList.add('left');
			} else {
				ResetSide();
				e.target.parentElement.parentElement.classList.add('right');
			}
		}
	};
	return (
		<Wrapper ref={refStack}>
			<SecondWrapper>
				<MainText>Tech Stack</MainText>
				<SecondText>Let&apos;s click it!</SecondText>
				<IconsWrapper>
					<IconWrapper className='IW'>
						<IconWrapperSec onClick={(e) => handleDirSwitchLeft(e)}>
							<IconText>
								React is the number one JavaScript library for building JavaScript apps.
								That&apos;s why I learned it
							</IconText>
							<IconStack src={PNGIcons.imgReact} />
						</IconWrapperSec>
						<IconWrapperSec onClick={(e) => handleDirSwitchLeft(e)}>
							<IconStack src={PNGIcons.imgJs} />
							<IconText>
								Already in technical school I got to know JavaScript and I liked it very
								much
							</IconText>
						</IconWrapperSec>
					</IconWrapper>
					<IconWrapper className='IW'>
						<IconWrapperSec onClick={(e) => handleDirSwitchLeft(e)}>
							<IconText>Today Responsive Web Design is must to now</IconText>
							<IconStack src={PNGIcons.imgRes} />
						</IconWrapperSec>
						<IconWrapperSec onClick={(e) => handleDirSwitchLeft(e)}>
							<IconStack src={PNGIcons.imgHtml} />
							<IconText>HTML The Most Popular Programming Language</IconText>
						</IconWrapperSec>
					</IconWrapper>
					<IconWrapper className='IW'>
						<IconWrapperSec onClick={(e) => handleDirSwitchLeft(e)}>
							<IconText>If website are lovely and beautiful design it is css </IconText>
							<IconStack src={PNGIcons.imgCss} />
						</IconWrapperSec>
						<IconWrapperSec onClick={(e) => handleDirSwitchLeft(e)}>
							<IconStack src={PNGIcons.imgSass} />
							<IconText>But Scss is css on steroids</IconText>
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
