import styled, { keyframes } from 'styled-components';
import { Text } from '../../utils/SmallComponents/Text';
import theme from '../../assets/Styles/theme';

const AnimIn = keyframes`
	0%{
		transform: translateY(0);
	}
	100%{
transform: translateY(-100%);
	}

`;
const AnimOut = keyframes`
	0%{
		transform: translateY(-100%);
	}
	100%{
transform: translateY(0);
	}

`;
export const Wrapper = styled.div`
	position: relative;
	margin: 100px 0 0 0;
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100svw;
	padding-bottom: 50px;
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
	box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.17);
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);
	position: absolute;
	top: 0px;
	left: 50%;
	width: 300px;
	height: 100px;
	transform: ${(props) =>
		props.visible
			? 'translateX(-50%) translateY(250%)'
			: 'translateX(-50%) translateY(435%)'};
	display: flex;
	align-items: center;
	justify-content: center;
	color: black;
	transition: all 1s cubic-bezier(0, 0, 0, 0.8);
	z-index: 1001;
	font-weight: 600;
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
	border: none;
	font-size: ${theme.fontSize.s};
	padding: 3px;
`;
export const TextArea = styled.textarea`
	border-radius: 5px;
	border: none;
	font-size: ${theme.fontSize.s};
	padding: 3px;
`;
export const SubmitBtn = styled.button`
	font-size: ${theme.fontSize.s};
	border: none;
	padding: 3px;
	border-radius: 5px;
`;
export const SecondFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 5px;
`;
