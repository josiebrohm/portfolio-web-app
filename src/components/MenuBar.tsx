import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Link, useNavigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';

export default function MenuBar() {
	const navigate = useNavigate();

	const menuItems = [
		{
			label: "/home",
			command: () => navigate("/")
		},
		{
			label: "/projects",
			command: () => navigate("/projects")
		},
		{
			label: "/contact",
			command: () => navigate("/contact")
		}
	];

	const start = <Link className="logo-text" to={"/"} draggable="false"> Josephine Bröhm</Link>

	return (
		<div className="menubar">
			<Menubar model={menuItems} start={start}/>
		</div>
	);
}