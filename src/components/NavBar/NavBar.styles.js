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
	@media (width >= 768px) {
		width: 50vw;
		height: 80px;
		bottom: 55px;
		gap: 15px;
	}
	@media (width >= 992px) {
		width: 200px;
		height: 100%;
		top: 0;
		left: 0;
		flex-direction: column;
		border-radius: 0;
		transform: translateX(0) translateY(0) scaleX(100%);
		gap: 15px;
		padding-top: 70px;
		justify-content: start;
		align-items: start;
		padding-left: 10px;
		&.close {
			transform: translateX(0%);
			width: 80px;
		}
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
	@media (width >= 768px) {
		width: 55px;
		height: 55px;
		bottom: 130px;
		&::before {
			top: 21px;
			left: -13px;
			width: 40px;
			border: 3px solid ${theme.colors.Primary};
		}
		&::after {
			top: 21px;
			left: -13px;
			width: 40px;
			border: 3px solid ${theme.colors.Primary};
		}

		&.close {
			bottom: 55px;
			right: 55px;

			&::before {
				top: 14px;
				left: -13px;
				width: 40px;
				border: 3px solid ${theme.colors.Primary};
			}
			&::after {
				top: 27px;
				left: -5px;
				width: 35px;
				border: 3px solid ${theme.colors.Primary};
			}
		}
	}
	@media (width >= 992px) {
		top: 0;
		left: 0;
		margin: 0;
		height: 40px;
		width: 40px;
		padding: 4px;
		transform: translateX(380%) translateY(20%);
		transition: all 0.3s ease-in;
		&::before {
			width: 0px;
			height: 0px;

			border: none;
			border-radius: 0;
		}
		&::after {
			width: 0px;
			height: 0px;

			border: none;
			border-radius: 0;
		}
		img {
			margin: 0 0px 0px 0;
			width: 100%;
			height: 100%;
			transition: all 0.3s ease-in;
		}
		&.close {
			transform: translateX(28%) translateY(20%);
			width: 40px;
			height: 40px;
			transition: all 0.3s ease-in;
			padding: 3px;
			&::before {
				width: 0px;
				height: 0px;

				border: none;
				border-radius: 0;
			}
			&::after {
				width: 0px;
				height: 0px;

				border: none;
				border-radius: 0;
			}
			img {
				width: 100%;
				height: 100%;
			}
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
	@media (width >= 768px) {
		width: 55px;
		height: 55px;
	}
	@media (width >= 992px) {
		max-width: 45px;
		height: 45px;
	}
`;
export const NavText = styled(Text)`
	position: absolute;
	left: 70px;
	width: 90px;
	text-align: left;
	font-size: ${theme.fontSize.s};
`;
export const NavBg = styled.img`
	z-index: 1001;
	width: 90%;
	padding: 5px;
	filter: drop-shadow(0px 0px 5px ${theme.colors.Primary}35) invert();
	@media (width >= 992px) {
	}
`;
