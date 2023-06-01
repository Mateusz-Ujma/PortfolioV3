import styled from 'styled-components';
import { Text } from '../../utils/SmallComponents/Text';
import theme from '../../assets/Styles/theme';
export const Wrapper = styled.div`
	position: sticky;
	top: 0;
	left: 0;
	z-index: 100;
	width: 100svw;
	overflow-x: hidden;
`;
export const NavWrapper = styled.div`
	position: fixed;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	bottom: 40px;
	left: 50%;
	transform: translateX(-50%) translateY(50%) scaleX(100%);
	margin: 0 0 0px 0;
	z-index: 3;
	color: white;
	background-color: #333;
	width: 75vw;
	height: 50px;
	border-radius: 18px;
	filter: drop-shadow(0px 0px 5px #ffffff30);
	gap: 10px;
	transition: all 0.3s ease-in;
	overflow: hidden;
	opacity: 1;
	visibility: visible;

	&.close {
		transform: translateX(0%) translateY(50%) scaleX(0%);
	}
`;

export const NavButton = styled.button`
	z-index: 100;
	position: fixed;
	bottom: 90px;
	right: 50%;
	transform: translateX(50%) translateY(50%);
	width: 40px;
	height: 40px;
	border-radius: 5rem;
	border: none;
	background: #555;
	filter: drop-shadow(0px 0px 5px #ffffff30);
	padding: 13px;
	transition: all 0.3s ease-in;

	&.close {
		bottom: 30px;
		right: 30px;
	}
`;
export const NavLink = styled.button`
	z-index: 1000;
	width: 40px;
	height: 40px;
	border-radius: 15px;
	border: none;
	background: #555;
	filter: drop-shadow(0px 0px 2px #00000030);
`;
export const NavBg = styled.img`
	z-index: 1001;
	width: 100%;

	filter: drop-shadow(0px 0px 2px #ffffff) invert();
`;
