import styled, { keyframes } from 'styled-components';
import { Text } from '../../utils/SmallComponents/Text';
import theme from '../../assets/Styles/theme';

const ColoredText = keyframes`
 0%{
color: ${theme.colors.Primary};
 }
 50%{color: ${theme.colors.Accent};}
 75%{color: ${theme.colors.Accent};}
 100%{
color: ${theme.colors.Primary};
 }
`;

export const Wrapper = styled.div`
	position: relative;
	margin: 0 0 50px 0;
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100svw;
	@media (width >= 992px) {
		width: auto;
	}
`;

export const SecondWrapper = styled.div`
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 500px;
	width: 80svw;
	margin-top: 80px;
	background: rgba(255, 255, 255, 0.25);
	box-shadow: 0px 0 5px 3px ${theme.colors.Accent}30;
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	border-radius: 10px;
	@media (width >= 768px) {
		width: 75svw;
		padding: 0 0 30px 0;
	}
	@media (width >= 992px) {
		width: auto;
		padding: 0 0 30px 0;
	}
`;
export const IconsWrapper = styled.div`
	z-index: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 80%;
	gap: 10px;
	max-width: 285px;
	padding-top: 25px;
	.left {
		transform: translateX(-25%);
		filter: grayscale(0%);
	}
	.right {
		transform: translateX(25%);
		filter: grayscale(0%);
	}
	@media (width >= 768px) {
		width: 75svw;
		max-width: 300px;
	}
	@media (width >= 992px) {
		gap: 20px;
	}
`;
export const IconWrapper = styled.div`
	z-index: 2;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	min-width: 100%;

	filter: grayscale(0%);
	@media (width >= 768px) {
	}
`;
export const IconWrapperSec = styled.div`
	margin-top: 30px;
	z-index: 2;
	display: flex;
	gap: 10px;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (width >= 768px) {
		height: 130px;
	}
	@media (width >= 992px) {
		height: 100px;
		filter: grayscale(100%);
		transition: all 0.7s;
		&:hover {
			filter: grayscale(0%);
			div {
				animation: ${ColoredText} 1.2s infinite;
			}
		}
	}
`;

export const MainText = styled(Text)`
	margin: -25px 100px 0 0px;
	font-size: ${theme.fontSize.l};
	font-weight: 800;
	filter: drop-shadow(0px 0px 5px ${theme.colors.Accent}60);
	@media (width >= 768px) {
		font-size: ${theme.fontSize.xl};
		margin: -35px 150px 0 0px;
	}
	@media (width >= 992px) {
		font-size: ${theme.fontSize.xl};
		margin: -35px 45px 0 170px;
	}
`;
export const SecondText = styled(Text)`
	margin-top: 30px;
	font-size: ${theme.fontSize.m};
	font-weight: 300;
	letter-spacing: 1px;
	filter: drop-shadow(0px 0px 5px ${theme.colors.Accent}60);
	@media (width >= 768px) {
		font-weight: 400;
	}
	@media (width >= 992px) {
		font-weight: 300;
		margin-top: 20px;
	}
`;

export const IconStack = styled.img`
	width: 73px;
	height: 73px;
	filter: drop-shadow(0px 0px 5px ${theme.colors.Accent}60);
	@media (width >= 768px) {
		width: 85px;
		height: 85px;
	}
`;
export const IconText = styled(Text)`
	font-size: ${theme.fontSize.s};
	font-weight: 400;
	width: 130px;
	text-align: center;
	@media (width >= 768px) {
		font-size: ${theme.fontSize.sm};
		letter-spacing: 1px;
		width: 200px;
	}
`;
