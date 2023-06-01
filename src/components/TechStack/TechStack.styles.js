import styled from 'styled-components';
import { Text } from '../../utils/SmallComponents/Text';
import theme from '../../assets/Styles/theme';
export const Wrapper = styled.div`
	position: relative;
	margin: 0;
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
	box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.17);
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);
`;
export const IconsWrapper = styled.div`
	margin-top: 30px;
	z-index: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 80%;
	overflow: hidden;
	max-width: 70%;
	.left {
		transform: translateX(-36.7%);
		filter: grayscale(0);
	}
	.right {
		transform: translateX(36.7%);
		filter: grayscale(0);
	}
`;
export const IconWrapper = styled.div`
	z-index: 2;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 40px;
	overflow: hidden;
`;
export const IconWrapperSec = styled.div`
	margin-top: 30px;
	z-index: 2;
	display: flex;
	gap: 20px;
	justify-content: center;
	align-items: center;
	width: 40%;
`;

export const MainText = styled(Text)`
	margin: -25px 0 0 15px;
	font-size: ${theme.fontSize.l};
	font-weight: 800;
`;
export const SecondText = styled(Text)`
	font-size: ${theme.fontSize.m};
	font-weight: 600;
`;

export const IconStack = styled.img`
	width: 80px;
	height: 80px;
`;
export const IconText = styled(Text)`
	width: 30px;
`;
