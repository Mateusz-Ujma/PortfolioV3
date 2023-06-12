import styled from 'styled-components';
import { Text } from '../../utils/SmallComponents/Text';
import theme from '../../assets/Styles/theme';
export const Wrapper = styled.div`
	position: relative;
	margin: 0px 0 50px 0;
	padding: 60px 0 0 0;
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
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
`;
export const ThirdText = styled(Text)`
	font-size: ${theme.fontSize.s};
	font-weight: ${(props) => (props.bold ? '800' : '400')};
	letter-spacing: ${(props) => (props.bold ? '1.5' : '1')}px;
	text-align: center;
	line-height: 1.5rem;
	padding: 10px;
`;
