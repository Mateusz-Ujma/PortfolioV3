import styled from 'styled-components';
import { Text } from '../../utils/SmallComponents/Text';
import theme from '../../assets/Styles/theme';
export const Wrapper = styled.div`
	position: relative;
	margin: 0 0 50px 0;
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100svh;
	width: 100svw;
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
`;
export const IconsWrapper = styled.div`
	z-index: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 80%;
	overflow: hidden;
	max-width: 285px;
	.left {
		transform: translateX(-25%);
		filter: grayscale(0%);
	}
	.right {
		transform: translateX(25%);
		filter: grayscale(0%);
	}
`;
export const IconWrapper = styled.div`
	z-index: 2;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 60px;
	min-width: 100%;
	filter: grayscale(100%);
`;
export const IconWrapperSec = styled.div`
	margin-top: 30px;
	z-index: 2;
	display: flex;
	gap: 44px;
	justify-content: center;
	align-items: center;
	width: 40%;
`;

export const MainText = styled(Text)`
	margin: -25px 100px 0 0px;
	font-size: ${theme.fontSize.l};
	font-weight: 800;
	filter: drop-shadow(0px 0px 5px ${theme.colors.Accent}60);
`;
export const SecondText = styled(Text)`
	margin-top: 30px;
	font-size: ${theme.fontSize.m};
	font-weight: 300;
	letter-spacing: 1px;
	filter: drop-shadow(0px 0px 5px ${theme.colors.Accent}60);
`;

export const IconStack = styled.img`
	width: 73px;
	height: 73px;
	filter: drop-shadow(0px 0px 5px ${theme.colors.Accent}60);
`;
export const IconText = styled(Text)`
	font-size: ${theme.fontSize.s};
	font-weight: 400;
	width: 200px;
`;
