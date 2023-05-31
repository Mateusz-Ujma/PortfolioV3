import styled from 'styled-components';
import { Text } from '../../utils/SmallComponents/Text';
import theme from '../../assets/Styles/theme';
export const Wrapper = styled.div`
	margin: 0;
	z-index: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const SecondWrapper = styled.div`
	margin: 20px 0 0 0;
	z-index: 2;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;
export const MainText = styled(Text)`
	margin: 50px 0 80px 0;
	font-size: ${theme.fontSize.xxl};
	font-weight: 700;
	filter: drop-shadow(0px 0px 4px #ffffff60);
`;
export const SecondText = styled(Text)`
	font-size: ${theme.fontSize.xl};
	font-weight: 700;
	line-height: 3.4rem;
	letter-spacing: 1px;
	filter: drop-shadow(0px 0px 4px #ffffff60);
`;

export const SocialIcon = styled.a`
	width: 40px;
	height: 40px;
	background-image: url(${(props) => props.img});
	background-size: cover;

	filter: drop-shadow(0px 0px 4px #00000060) invert();
`;
