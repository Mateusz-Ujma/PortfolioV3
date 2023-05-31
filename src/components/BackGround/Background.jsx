import React, { useEffect, useState } from 'react';
import { Icon, Wrapper } from './Background.styles';

import svgJS from '../../assets/Images/SVG/java-script.svg';
import svgCSS from '../../assets/Images/SVG/css.svg';
import svgHTML from '../../assets/Images/SVG/html.svg';
import svgREACT from '../../assets/Images/SVG/react.svg';

const Background = () => {
	const [size, setSize] = useState([]);
	const [speed, setSpeed] = useState([]);
	const [time, setTime] = useState([]);
	const [bgPosXStart, setBgPosXStart] = useState([]);

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min);
	}
	useEffect(() => {
		NewPos();
	}, []);
	const NewPos = () => {
		for (let i = 0; i < 4; i++) {
			setBgPosXStart((data) => [...data, getRandomInt(50, window.innerWidth - 100)]);
		}
	};
	return (
		<Wrapper>
			<Icon src={svgJS} size={80} top={200} left={300} rot={-30} />
			<Icon src={svgREACT} size={80} top={400} left={-20} rot={-45} />
			<Icon src={svgCSS} size={80} top={600} left={300} rot={-45} />
			<Icon src={svgHTML} size={80} top={50} left={-20} rot={30} />
		</Wrapper>
	);
};

export default Background;
