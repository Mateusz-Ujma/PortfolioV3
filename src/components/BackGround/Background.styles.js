import styled, { keyframes } from 'styled-components';
import theme from '../../assets/Styles/theme';

export const Wrapper = styled.div`
	min-height: 100svh;
	width: 100svw;
	position: absolute;
	margin: 0;
	overflow: hidden;
	left: 50%;
	top: 50%;
	transform: translateX(-50%) translateY(-50%);
	z-index: 0;
`;

export const Icon = styled.img`
	z-index: 0;
	position: absolute;
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
	opacity: 0.3;
	top: ${(props) => props.top}px;
	left: ${(props) => props.left}svw;
	rotate: ${(props) => props.rot}deg;
	filter: drop-shadow(0 0 5px ${theme.colors.Accent}90);
	color: red;
`;
