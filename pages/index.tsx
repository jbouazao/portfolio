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
import SkillsTable from '../src/components/SkillsTable/SkillsTable'


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
	export type Skill = {
		name: string;
		points: number;
	}

	export type SkillSet = {
		id: number;
		name: string;
		skills: Skill[];
	}[]

	const SKILLS: SkillSet = [
		{
			id: 0,
			name: 'langs',
			skills: [
				{
					name: 'Js/Ts',
					points: 3
				},
				{
					name: 'C/C++',
					points: 4
				}
			]
		},
		{
			id: 1,
			name: 'frontend',
			skills: [
				{
					name: 'ReactJs/NextJs',
					points: 4
				},
				{
					name: 'HTML/CSS',
					points: 4
				},
				{
					name: 'Tailwind',
					points: 4
				},
			]
		},
		{
			id: 2,
			name: 'backend',
			skills: [
				{
					name: 'express',
					points: 2
				},
				{
					name: 'graphql',
					points: 2
				},
				{
					name: 'mongodb',
					points: 2
				},
				{
					name: 'firebase',
					points: 2
				},
			]
		},
		{
			id: 3,
			name: 'tools',
			skills: [
				{
					name: 'Git',
					points: 3
				},
				{
					name: 'VScode',
					points: 5
				},
				{
					name: 'Figma',
					points: 4
				},
			]
		},
	]

const Home: NextPage = () => {

	const [activeMenuItem, setActiveMenuItem] = useState(0)

	const menuHandler = (id:number) => {
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
						I make interfaces, dashboards, and everything in between!
						<br />
						I also love gaming.
					</p>
					<div className = {classes.skillswrapper}>
						<ul className = {classes.topmenu}>
							{SKILLS.map(skillset => <li key = {skillset.id} onClick = {() => menuHandler(skillset.id)} className = {`${classes.menuitem} ${activeMenuItem === skillset.id ? classes.active : ''}`}>{skillset.name}</li>)}
						</ul>
						<SkillsTable skills = {SKILLS[activeMenuItem].skills}/>
					</div>
					<p className = {classes.text}>Get in touch</p>
					<a href='mailto:jihad.bo2@gmail.com'>
						<button className = {classes.contactbutton}>Contact me</button>
					</a>
				</main>
			</div>
    </div>
  )
}

export default Home
