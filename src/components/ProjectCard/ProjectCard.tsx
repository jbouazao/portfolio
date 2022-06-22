import Image from 'next/image';
import cx from 'classnames'
import { StaticImageData } from 'next/image';
import classes from './ProjectCard.module.scss'
import ProjectsStack from './ProjectsStack';

interface Props {
		id: number,
		name: string,
		desc: string[],
		screens: {
			id: number,
			link: string,
			img: StaticImageData}[],
		technos: {
			id: number,
			icon: any
		}[]
}

// const style = 

const ProjectCard: React.FC<{idx: number ,data: Props}> = (props) => {

	return <div className = {cx(
		classes.container, 
		// classes.goleft, 
	{
		[classes.goright]: props.idx % 2 !== 0,
		[classes.goleft]: props.idx % 2 === 0,
	}
	// return <div className = {`${}`}
	)}>
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