import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuBar from './components/MenuBar';

import 'primereact/resources/themes/mdc-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
	return (
		<div className='portfolio-app'>
			<Router>
				<MenuBar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/projects' element={<ProjectsPage />} />
					<Route path='/contact' element={<ContactPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
