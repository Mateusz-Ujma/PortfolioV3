import styled from 'styled-components';
import { Text } from '../../utils/SmallComponents/Text';
import theme from '../../assets/Styles/theme';
export const Wrapper = styled.div`
	margin: 0;
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100svh;
	width: 100svw;
`;

export const SecondWrapper = styled.div`
	margin-top: 20px;
	z-index: 2;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;
export const MainText = styled(Text)`
	margin: 50px 0 30px 0;
	font-size: ${theme.fontSize.x4l};
	font-weight: 700;
	filter: drop-shadow(0px 0px 4px ${theme.colors.Accent}70);
`;
export const SecondText = styled(Text)`
	font-size: ${theme.fontSize.xl};
	font-weight: 700;
	line-height: 3.4rem;
	letter-spacing: 1px;
	filter: drop-shadow(0px 0px 4px ${theme.colors.Accent}70);
`;
export const ThirdText = styled(Text)`
	text-align: center;
	width: 80%;
	margin: 90px auto 0 auto;
	font-size: ${theme.fontSize.s};
	font-weight: 400;
	line-height: 1.5rem;
	letter-spacing: 1px;
	filter: drop-shadow(0px 0px 4px ${theme.colors.Accent}70);
`;

export const SocialIcon = styled.a`
	width: 50px;
	height: 50px;
	background-image: url(${(props) => props.img});
	background-size: cover;
	filter: drop-shadow(0px 0px 4px ${theme.colors.Accent}) invert();
`;
