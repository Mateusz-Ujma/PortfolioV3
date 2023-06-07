import React, { useRef, useState } from 'react';
import {
	MainText,
	Input,
	Wrapper,
	TextArea,
	FormWrapper,
	SecondFormWrapper,
	SubmitBtn,
	SendMessage,
} from './Contact.styles';
import emailjs from '@emailjs/browser';

const Contact = ({ refContact }) => {
	const [mess, setMess] = useState('');
	const [popup, setPopup] = useState(false);
	const form = useRef();
	const messa = document.querySelector('.mess');
	const sendEmail = (e) => {
		e.preventDefault();
		setPopup(true);
		emailjs
			.sendForm('service_ms9mlmb', 'template_kd0edte', form.current, '0ZP_UQjPxH9mMXbk5')
			.then(
				(result) => {
					setMess('Message Send! Thanks You!');
				},
				(error) => {
					setMess(error.text);
				}
			);

		e.target.reset();
		setTimeout(() => {
			setPopup(false);
		}, 3000);
		console.log(popup);
	};
	return (
		<Wrapper ref={refContact}>
			{console.log(popup)}
			<SendMessage className='mess' visible={popup}>
				{mess}
			</SendMessage>
			<MainText>Contact</MainText>
			<FormWrapper ref={form} onSubmit={sendEmail}>
				<SecondFormWrapper>
					<Input type='text' placeholder='Name' name='user_name' className='name' />
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
