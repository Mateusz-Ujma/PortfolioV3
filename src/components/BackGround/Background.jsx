import React, { useEffect, useState } from 'react';
import { Icon, Wrapper } from './Background.styles';

import svgJS from '../../assets/Images/SVG/java-script.svg';
import svgCSS from '../../assets/Images/SVG/css.svg';
import svgHTML from '../../assets/Images/SVG/html.svg';
import svgREACT from '../../assets/Images/SVG/react.svg';

const Background = ({ height }) => {
	return <Wrapper height={height}></Wrapper>;
};

export default Background;
