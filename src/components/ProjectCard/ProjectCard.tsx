import Image from 'next/image';
import { StaticImageData } from 'next/image';
import classes from './ProjectCard.module.scss'
import ProjectsStack from './ProjectsStack';

interface Props {
		id: number,
		name: string,
		desc: string[],
		screens: {
			id: number,
			img: StaticImageData}[],
		technos: {
			id: number,
			icon: any
		}[]
}

const ProjectCard: React.FC<{data: Props}> = (props) => {

	return <div className = {classes.container}>
		<div style = {{width: '300px'}}>
			{props.data.desc.map(line => <p key = 'rand'>{line}</p>)}
		</div>
		<div style = {{width: '600px', display: 'flex'}}>
			{/* {props.data.screens.map(screen => <Image key = '2' src = {screen} width = {400} height = {250} alt = ''/>)} */}
			<ProjectsStack screens = {props.data.screens}/>
		</div>
		<div className = {classes.technologies}>
			{props.data.technos.map(techno => <span key = {techno.id} className = {classes.technoicon}><Image src = {techno.icon} height = {40} width = {40} alt = ''/></span>)}
		</div>
	</div>
}

export default ProjectCard;