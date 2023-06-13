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
	ThirdText,
} from './Contact.styles';
import emailjs from '@emailjs/browser';

const Contact = ({ refContact }) => {
	const [name, setName] = useState('');
	const [mail, setMail] = useState('');
	const [title, setTitle] = useState('');
	const [message, setMessage] = useState('');
	const [mess, setMess] = useState('');
	const [popup, setPopup] = useState(false);
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		setPopup(true);
		if (name === '') {
			setMess('You must enter your name!');
			setPopup(true);
		} else if (mail === '') {
			setMess('You must enter your email!');
			setPopup(true);
		} else if (title === '') {
			setMess('You must enter some title!');
			setPopup(true);
		} else if (message === '') {
			setMess('Write message to me!');
			setPopup(true);
		} else {
			try {
				emailjs.sendForm(
					'service_ms9mlmb',
					'template_kd0edte',
					form.current,
					'0ZP_UQjPxH9mMXbk5'
				);
				setPopup(true);
				setMess('Mail Send Thanks!!');
			} catch (e) {
				setMess('Oops something went wrong!');
				setPopup(true);
			}
		}

		e.target.reset();
		setName('');
		setMail('');
		setMessage('');
		setTitle('');
		setTimeout(() => {
			setPopup(false);
		}, 3000);
	};
	return (
		<Wrapper ref={refContact}>
			<SendMessage className='mess' visible={popup}>
				<ThirdText>{mess}</ThirdText>
			</SendMessage>
			<MainText>Contact</MainText>
			<FormWrapper ref={form} onSubmit={sendEmail}>
				<SecondFormWrapper>
					<Input
						type='text'
						placeholder='Name'
						name='user_name'
						className='name'
						onChange={(e) => setName(e.target.value)}
					/>
					<Input
						type='email'
						placeholder='Email'
						name='user_email'
						onChange={(e) => setMail(e.target.value)}
					/>
				</SecondFormWrapper>
				<Input
					type='text'
					placeholder='Title'
					name='subject'
					onChange={(e) => setTitle(e.target.value)}
				/>
				<TextArea
					name='message'
					cols='25'
					rows='10'
					placeholder='Message'
					onChange={(e) => setMessage(e.target.value)}
				/>
				<SubmitBtn type='submit'>Send</SubmitBtn>
			</FormWrapper>
		</Wrapper>
	);
};

export default Contact;
