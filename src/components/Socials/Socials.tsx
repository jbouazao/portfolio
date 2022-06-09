import Image from 'next/image';
import classes from './Socials.module.scss'

const Socials: React.FC<{icons: {id:string, icon: string, link:string}[], link: string}> = (props) => {

	return <div className = {classes.container}>
		{props.icons.map(social => <a key = {social.id} href = {social.link}><Image src = {social.icon} alt = '' width = {20} height = {20}/></a>)}
	</div>
}

export default Socials;