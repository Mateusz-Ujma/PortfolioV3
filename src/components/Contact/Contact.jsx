import React, { useRef } from 'react';
import {
	MainText,
	Input,
	Wrapper,
	TextArea,
	FormWrapper,
	SecondFormWrapper,
	SubmitBtn,
} from './Contact.styles';
import emailjs from '@emailjs/browser';

const Contact = ({ refContact }) => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_ms9mlmb', 'template_kd0edte', form.current, '0ZP_UQjPxH9mMXbk5')
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<Wrapper ref={refContact}>
			<MainText>Contact</MainText>
			<FormWrapper ref={form} onSubmit={sendEmail}>
				<SecondFormWrapper>
					<Input type='text' placeholder='Name' name='user_name' />
					<Input type='email' placeholder='Email' name='user_email' />
				</SecondFormWrapper>
				<Input type='text' placeholder='Title' name='subject' />
				<TextArea name='message' cols='25' rows='10' placeholder='Message' />
				<SubmitBtn type='submit'>Send</SubmitBtn>
			</FormWrapper>
		</Wrapper>
	);
};

export default Contact;
