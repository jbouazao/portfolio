import Image from 'next/image';
import { StaticImageData } from 'next/image';
import classes from './ProjectsStack.module.scss'

const ProjectsStack: React.FC<{screens: {id: number, img: StaticImageData}[]}> = (props) => {
	return <div className = {classes.container}>
		{props.screens.map((screen, idx) => <div key = {screen.id} style = {{left: `${40 * idx}px`}} className = {classes.screenwrapper}>
			<Image src = {screen.img} width = {500} height = {300} alt = ''/>
		</div>
		)}
	</div>
}

export default ProjectsStack;