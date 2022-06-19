import Link from 'next/link';
import Image from 'next/image';
import Socials from '../Socials/Socials';
import Navbar from '../Navbar/Navbar';
import logo from '../../../public/logo.png'
import linkedin from '../../../public/linkedin.svg'
import github from '../../../public/github.svg'
import classes from './Header.module.scss'

const socials = [
		{
			id: '1',
			icon: linkedin,
			link: 'https://linkedin.com/in/jbouazao'
		},
		{
			id: '2',
			icon: github,
			link: 'https://github.com/jbouazao'
		},
	]

const Header = () => {
	return <header className = {classes.header}>
		<Link href = '/'>
			<Image src = {logo} alt = 'logo' width = {60} height = {60}/>
		</Link>
		<div className = {classes.navwrapper} >
			<Navbar />
			<Socials icons = {socials} link = 'https://linkedin.com/in/jbouazao'/>
		</div>
	</header>
}

export default Header;