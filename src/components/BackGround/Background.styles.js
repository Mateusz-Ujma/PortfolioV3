import styled, { keyframes } from 'styled-components';

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
	position: absolute;
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
	opacity: 0.15;
	top: ${(props) => props.top}px;
	left: ${(props) => props.left}svw;
	rotate: ${(props) => props.rot}deg;
	filter: invert() drop-shadow(0px 0px 4px #ffffff60);
`;
