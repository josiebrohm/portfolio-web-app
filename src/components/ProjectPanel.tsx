import { Divider } from 'primereact/divider';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';

import Preview from "../assets/logo512.png";
import ProjectBio from './ProjectBio';

export default function ProjectPanel() {
	return(
		<div className="project-panel">
			<Card className="project-card "title="project">
				<Image src={Preview} width='200' preview/>
				<ProjectBio />
			</Card>
			

			<Divider />
		</div>
	)
}