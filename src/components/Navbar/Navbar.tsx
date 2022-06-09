import classes from './Navbar.module.scss'
import Link from 'next/link';

const Navbar = () => {
	return <ul className = {classes.container}>
		<li className = {classes.navitem}><Link href = '/'>$whoami</Link></li>
		<li className = {classes.navitem}><Link href = '/'>projects</Link></li>
	</ul>
}

export default Navbar;