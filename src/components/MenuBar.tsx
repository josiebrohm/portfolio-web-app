import React from 'react';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';

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

	const start = <p className="highlighted-text"> hello, world!</p>

	return (
		<div className="menubar">
			<Menubar model={menuItems} start={start}/>
		</div>
	);
}