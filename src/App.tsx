import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
	return (
		<div className='portfolio-app'>
			<Router>
				<Routes>
					<Route path='/' element={<HomePage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
