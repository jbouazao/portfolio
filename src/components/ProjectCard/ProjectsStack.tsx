import Image from 'next/image';
import { StaticImageData } from 'next/image';
import classes from './ProjectsStack.module.scss'
import { HiOutlineExternalLink } from 'react-icons/hi'

const ProjectsStack: React.FC<{screens: {id: number, link: string, img: StaticImageData}[]}> = (props) => {
	return <div className = {classes.container}>
		{props.screens.map((screen, idx) => <div key = {screen.id} className = {classes.screenwrapper} style = {{left: `${40 * idx}px`, top: `${20 * idx + 20}px`}}>
			<Image src = {screen.img} width = {500} height = {300} alt = ''/>
			<div className = {classes.redirectdiv}>
				{screen.link.length !== 0 ? <a href = {screen.link} target = '_blank' rel = "noreferrer"><HiOutlineExternalLink style = {{width: '50px', height: '50px', background: 'white', borderRadius: '50%', padding: '10px'}}/></a> : null}
			</div>
		</div>
		)}
	</div>
}

export default ProjectsStack;