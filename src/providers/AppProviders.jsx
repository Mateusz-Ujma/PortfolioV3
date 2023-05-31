import GlobalStyle from '../assets/Styles/GlobalStyles';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const AppProviders = ({ children }) => {
	return (
		<Router>

			{children}
		</Router>
	);
};

export default AppProviders;
