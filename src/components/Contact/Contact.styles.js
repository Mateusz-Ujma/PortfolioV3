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
	width: 100svw;
	margin-bottom: 50px;
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
export const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 5px;
`;

export const MainText = styled(Text)`
	font-size: ${theme.fontSize.xl};
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
