import classes from './index.module.scss'
import type { NextPage } from 'next'
import Head from 'next/head'
import logo from '../public/logo.png'
import Image from 'next/image'
import SkillItem from '../src/components/SkillItem/SkillItem'
import Socials from '../src/components/Socials/Socials'
import linkedin from '../public/linkedin.svg'
import github from '../public/github.svg'
import Navbar from '../src/components/Navbar/Navbar'
import { useState } from 'react'
import classNames from 'classnames'


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

const Home: NextPage = () => {

	const [activeMenuItem, setActiveMenuItem] = useState('1')

	const menuHandler = (id:string) => {
		setActiveMenuItem(id)
	}
	
  return (
    <div className={classes.container}>
      <Head>
        <title>Jihad Bouazaoui | frontend developer</title>
        <meta name="description" content="Hi, I'm Jihad and I'm a frontend developer" />
        <link rel="icon" href="/logo.png" />
      </Head>
			<div className = {classes.layout}>
				<header className = {classes.header}>
					<Image src = {logo} alt = 'logo' width = {60} height = {60}/>
					<div className = {classes.navwrapper} >
						<Navbar />
						<Socials icons = {socials} link = 'https://linkedin.com/in/jbouazao'/>
					</div>
				</header>
				<main className={classes.main}>
					<p className = {classes.mynameis}><span style = {{fontFamily: 'prompt-med', color: '#664a13'}}>Hello</span>, my name is</p>
					<strong className = {classes.myname}>Jihad Bouazaoui</strong>
					<p>
						I make applications, libraries, servers, and everything in between!
						<br />
						I also love keyboards (very much).
					</p>
					<div className = {classes.skillswrapper}>
						<ul className = {classes.topmenu}>
							<li onClick = {() => menuHandler('1')} className = {`${classes.menuitem} ${activeMenuItem === '1' ? classes.active : ''}`}>langs</li>
							<li onClick = {() => menuHandler('2')} className = {`${classes.menuitem} ${activeMenuItem === '2' ? classes.active : ''}`}>frontend</li>
							<li onClick = {() => menuHandler('3')} className = {`${classes.menuitem} ${activeMenuItem === '3' ? classes.active : ''}`}>tools</li>
						</ul>
						<ul className = {classes.skills}>
							<SkillItem name = "Js\Ts" points = {4}/>
							<SkillItem name = "ReactJs" points = {3}/>
							<SkillItem name = "C" points = {5}/>
						</ul>
					</div>
				</main>
			</div>
    </div>
  )
}

export default Home
