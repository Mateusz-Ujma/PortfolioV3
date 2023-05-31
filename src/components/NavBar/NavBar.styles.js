import styled from 'styled-components';
import { Text } from '../../utils/SmallComponents/Text';
import theme from '../../assets/Styles/theme';
export const Wrapper = styled.div`
	position: sticky;

	top: 0;
	left: 0;
	margin-top: 100px;
`;
export const NavWrapper = styled.div`
	position: fixed;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	margin: 0 0 20px 0;
	z-index: 3;
	color: white;
	background-color: #333;
	width: 75svw;
	height: 50px;
	border-radius: 18px;
	filter: drop-shadow(0px 0px 5px #ffffff30);
	gap: 10px;
	transition: all 0.3s ease-in;

	overflow: hidden;
	&.close {
		width: 0;
	}
`;

export const NavButton = styled.button`
	position: fixed;
	bottom: 80px;
	left: 50%;
	transform: translateX(-50%);
	width: 40px;
	height: 40px;
	border-radius: 5rem;
	border: none;
	background: #555;
	filter: drop-shadow(0px 0px 5px #ffffff30);
	padding: 13px;
	transition: all 0.3s ease-in;
	&.close {
		bottom: 0;
		margin-bottom: 25px;
		left: 30px;
		transform: translateX(-50%);
	}
`;
export const NavLink = styled.button`
	width: 40px;
	height: 40px;
	border-radius: 15px;
	border: none;
	background: #555;
	filter: drop-shadow(0px 0px 2px #00000030);
`;
export const NavBg = styled.img`
	width: 100%;
	filter: drop-shadow(0px 0px 2px #ffffff) invert();
`;
