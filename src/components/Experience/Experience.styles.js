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
	padding: 15px 0 15px 0;
	width: 80svw;
	margin-top: 80px;
	background: rgba(255, 255, 255, 0.25);
	box-shadow: 0px 0 5px 3px ${theme.colors.Accent}30;
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	border-radius: 10px;
	gap: 15px;
`;

export const MainText = styled(Text)`
	font-size: ${theme.fontSize.xl};
	font-weight: 800;
	filter: drop-shadow(0px 0px 5px ${theme.colors.Accent}60);
`;
export const SecondText = styled(Text)`
	font-size: ${theme.fontSize.m};
	font-weight: ${(props) => (props.bold ? '800' : '400')};
	letter-spacing: ${(props) => (props.bold ? '1.5' : '1')}px;
	line-height: 2rem;
	text-align: center;
	filter: drop-shadow(0px 0px 5px ${theme.colors.Accent}60);
`;
export const ThirdText = styled(Text)`
	font-size: ${theme.fontSize.s};
	font-weight: ${(props) => (props.bold ? '800' : '400')};
	letter-spacing: ${(props) => (props.bold ? '1.5' : '1')}px;
	text-align: center;
	line-height: 1.3rem;
	padding: 10px;
	filter: drop-shadow(0px 0px 5px ${theme.colors.Accent}40);
`;
export const ExpTextMain = styled(Text)`
	margin: 40px 0 0 0;
	font-size: ${theme.fontSize.xl};
	font-weight: 800;
	filter: drop-shadow(0px 0px 5px ${theme.colors.Accent}60);
`;
export const IconStackWrapper = styled.div`
	display: flex;
	justify-content: center;
	gap: 30px;
	width: 90%;
`;
export const IconStack = styled.img`
	width: 45px;
	height: 45px;
	filter: drop-shadow(0px 0px 5px ${theme.colors.Accent}40);
`;

export const ImgWrap = styled.div`
	margin-bottom: 10px;
	width: 90%;
	border-radius: 0.5rem;
	overflow: hidden;
	display: flex;
	justify-content: center;
	aspect-ratio: 1.9/1;
	filter: drop-shadow(0px 0px 5px ${theme.colors.Accent}40);
`;
export const ProjectImg = styled.img`
	width: 110%;
	height: 110%;
`;

export const Btn = styled.a`
	padding: 5px;
	border-radius: 5px;
	font-size: ${theme.fontSize.s};
	background: ${theme.colors.PrimaryButton};
	color: ${theme.colors.Primary};
	text-decoration: none;
	font-family: 'Roboto Slab', serif;
	font-weight: 500;
	letter-spacing: 1px;
	text-shadow: 0px 0px 10px ${theme.colors.Secondary};
	filter: drop-shadow(0px 0px 5px ${theme.colors.Accent}40);
`;
