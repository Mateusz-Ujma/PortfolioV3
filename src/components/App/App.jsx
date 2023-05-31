import { useRef } from 'react';
import { Wrapper } from './App.styles';
import GlobalStyle from '../../assets/Styles/GlobalStyles';
import Background from '../BackGround/Background';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';

function App() {
	const refSkills = useRef(null);
	const refExp = useRef(null);
	const refContact = useRef(null);
	const refAbout = useRef(null);
	const rootHeight = document.querySelector('#root').scrollHeight;

	return (
		<Wrapper>
			<GlobalStyle />
			<Background height={rootHeight} />
			<Home />
			<NavBar />
		</Wrapper>
	);
}

export default App;
