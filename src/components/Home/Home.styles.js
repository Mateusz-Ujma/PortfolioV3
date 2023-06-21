import styled from 'styled-components';
import { Text } from '../../utils/SmallComponents/Text';
import theme from '../../assets/Styles/theme';
export const Wrapper = styled.div`
	margin: 0 0 50px 0;
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100svw;
	@media (width >= 768px) {
		padding: 50px 0 0 0;
	}
	@media (width >= 992px) {
		width: auto;
		padding: 30px 0 0 0;
	}
`;

export const SecondWrapper = styled.div`
	margin-top: 20px;
	z-index: 2;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 20px;
	@media (width >= 768px) {
		gap: 35px;
	}
	@media (width >= 992px) {
		gap: 20px;
		align-self: start;
		margin: 0 0 0 20px;
	}
`;
export const MainText = styled(Text)`
	margin: 50px 0 30px 0;
	font-size: ${theme.fontSize.x4l};
	font-weight: 700;
	filter: drop-shadow(0px 0px 4px ${theme.colors.Accent}70);
	@media (width >= 768px) {
		font-size: ${theme.fontSize.x5l};
		font-weight: 800;
	}
	@media (width >= 992px) {
		font-size: ${theme.fontSize.x4l};
		font-weight: 800;
		margin: 30px 0 10px 0;
	}
`;
export const SecondText = styled(Text)`
	font-size: ${theme.fontSize.xl};
	font-weight: 700;
	line-height: 3.4rem;
	letter-spacing: 1px;
	filter: drop-shadow(0px 0px 4px ${theme.colors.Accent}70);
	@media (width >= 768px) {
		font-size: ${theme.fontSize.x4l};
		line-height: 5.5rem;
		font-weight: 800;
	}
	@media (width >= 992px) {
		font-size: ${(props) => (props.engName ? theme.fontSize.l : theme.fontSize.xxl)};
		line-height: 3.7rem;
		font-weight: 700;
	}
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
	@media (width >= 768px) {
		font-size: ${theme.fontSize.m};
		line-height: 2.2rem;
	}
	@media (width >= 992px) {
		font-size: ${theme.fontSize.sm};
		line-height: 1.5rem;
		margin: 40px auto 0 auto;
	}
`;

export const SocialIcon = styled.a`
	width: 50px;
	height: 50px;
	background-image: url(${(props) => props.img});
	background-size: cover;
	filter: drop-shadow(0px 0px 4px ${theme.colors.Accent}) invert();
	@media (width >= 768px) {
		width: 65px;
		height: 65px;
	}
	@media (width >= 992px) {
		width: 45px;
		height: 45px;
	}
`;
