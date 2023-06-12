import styled, { keyframes } from 'styled-components';
import { Text } from '../../utils/SmallComponents/Text';
import theme from '../../assets/Styles/theme';

export const Wrapper = styled.div`
	position: relative;
	margin: 0 0 0 0;
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100svw;
	overflow: hidden;
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
	box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.17);
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);
	gap: 15px;
`;
export const SendMessage = styled.div`
	background: rgba(255, 255, 255, 0.25);
	box-shadow: 0px 0 5px 3px ${theme.colors.Accent}30;
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	border-radius: 10px;
	border: 1px solid ${theme.colors.Accent}30;
	position: absolute;
	top: 0px;
	left: 50%;
	width: 300px;
	height: 100px;
	transform: ${(props) =>
		props.visible
			? 'translateX(-50%) translateY(200%) '
			: 'translateX(80%) translateY(200%) '};
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${theme.colors.Primary};
	transition: all 1s cubic-bezier(0, 0, 0, 0.8);
	z-index: 1001;
	font-weight: 600;
	text-shadow: 0px 0px 10px ${theme.colors.Secondary};
`;
export const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 5px;
`;

export const MainText = styled(Text)`
	font-size: ${theme.fontSize.xl};
	margin: 0 0 20px 0;
	font-weight: 800;
	filter: drop-shadow(0px 0px 5px #ffffff60);
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
export const Input = styled.input`
	border-radius: 5px;

	font-size: ${theme.fontSize.s};
	padding: 3px;
	background: rgba(255, 255, 255, 0.25);
	box-shadow: 0 8px 32px 0 ${theme.colors.Accent}30;
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	border-radius: 10px;
	border: 1px solid ${theme.colors.Accent}50;
	gap: 15px;
	color: ${theme.colors.Primary};
	&::placeholder {
		color: ${theme.colors.Accent}95;
	}
	&:focus-visible {
		outline: none;
		border: 1px solid ${theme.colors.Accent};
		box-shadow: 0 8px 32px 0 ${theme.colors.Accent}50;
	}
`;
export const TextArea = styled.textarea`
	border-radius: 5px;
	color: ${theme.colors.Primary};
	font-size: ${theme.fontSize.s};
	padding: 3px;
	background: rgba(255, 255, 255, 0.25);
	box-shadow: 0 8px 32px 0 ${theme.colors.Accent}30;
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	border-radius: 10px;
	border: 1px solid ${theme.colors.Accent}50;
	gap: 15px;
	&::placeholder {
		color: ${theme.colors.Accent}95;
	}
	&:focus-visible {
		outline: none;
		border: 1px solid ${theme.colors.Accent};
		box-shadow: 0 8px 32px 0 ${theme.colors.Accent}50;
	}
`;
export const SubmitBtn = styled.button`
	font-family: 'Roboto Slab', serif;
	font-size: ${theme.fontSize.s};
	border: none;
	padding: 3px;
	font-weight: 600;
	color: ${theme.colors.Primary};
	border-radius: 5px;
	background-color: ${theme.colors.PrimaryButton};
	letter-spacing: 1px;
	text-shadow: 0px 0px 10px ${theme.colors.Secondary};
	filter: drop-shadow(0px 0px 5px ${theme.colors.Accent}40);
`;
export const SecondFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 5px;
`;
