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
	background-color: ${theme.colors.DarkSecondary};
	width: 75vw;
	height: 55px;
	border-radius: 18px;
	filter: drop-shadow(0px 0px 5px ${theme.colors.Primary}35);
	gap: 10px;
	transition: all 0.3s ease-in;
	overflow: hidden;

	&.close {
		transform: translateX(-50%) translateY(50%) scaleX(0%);
	}
`;

export const NavButton = styled.button`
	z-index: 100;
	position: fixed;
	bottom: 100px;
	right: 50%;
	transform: translateX(50%) translateY(50%);
	width: 40px;
	height: 40px;
	border-radius: 5rem;
	border: none;
	background: ${theme.colors.PrimaryButton};
	filter: drop-shadow(0px 0px 5px ${theme.colors.Primary}35);
	padding: 6px;
	transition: all 0.3s ease-in;

	&::before {
		position: absolute;
		top: 16px;
		left: -10px;
		content: '';
		width: 30px;
		transform: translateX(50%) translateY(50%) rotate(-45deg);
		border: 2px solid ${theme.colors.Primary};
		border-radius: 10px;
		background-color: ${theme.colors.Primary};
		transition: all 0.3s ease-in;
	}
	&::after {
		position: absolute;
		top: 16px;
		left: -10px;
		content: '';
		width: 30px;
		transform: translateX(50%) translateY(50%) rotate(45deg);
		border: 2px solid ${theme.colors.Primary};
		border-radius: 10px;
		background-color: ${theme.colors.Primary};
		transition: all 0.3s ease-in;
	}
	&.close {
		bottom: 40px;
		right: 40px;

		&::before {
			position: absolute;
			top: 11px;
			left: -10px;
			content: '';
			width: 30px;
			transform: translateX(50%) translateY(50%);
			border: 2px solid ${theme.colors.Primary};
			border-radius: 10px;
		}
		&::after {
			position: absolute;
			top: 20px;
			left: -2.8px;
			content: '';
			width: 25px;
			transform: translateX(50%) translateY(50%);
			border: 2px solid ${theme.colors.Primary};
			border-radius: 10px;
		}
	}
`;
export const NavLink = styled.button`
	z-index: 1000;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 45px;
	height: 45px;
	border-radius: 15px;
	border: none;
	background: ${theme.colors.PrimaryButton};
	filter: drop-shadow(0px 0px 5px ${theme.colors.Primary}35);
`;
export const NavBg = styled.img`
	z-index: 1001;
	width: 90%;
	padding: 5px;

	filter: drop-shadow(0px 0px 5px ${theme.colors.Primary}35) invert();
`;
