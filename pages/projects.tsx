import Header from "../src/components/Header/Header"
import adala from '../public/adala.png'
import alsaoud from '../public/alsaoud.png'
import um6p from '../public/um6p.png'
import podcast from '../public/podcast1.png'
import insta from '../public/insta.png'
import ProjectCard from "../src/components/ProjectCard/ProjectCard"
import reacticon from '../public/technos/react.svg'
import nexticon from '../public/technos/nextjs.svg'
import sassicon from '../public/technos/sass.svg'
import tailwindicon from '../public/technos/tailwind.svg'

const PROJECTS = [
	{
		id: 1,
		name: 'Harmony Technology',
		desc: [
			'- Assisted in building and maintaining multiple user interfaces for universities and ministries.',
			'- Pair programmed with multiple developers, and reviewed team’s code to provide additional perspective and best practices, and catch previously missed errors.',
			'- Collaborated with the design team and the backend team to ensure the integrity and for a better user experience.'
		],
		screens: [
			{
				id: 1,
				link: '',
				img: um6p,
			},
			{
				id: 2,
				link: 'https://alsaoud-jbouazao.vercel.app/',
				img: alsaoud,
			},
			{
				id: 3,
				link: 'https://adala.justice.gov.ma/fr',
				img: adala,
			},
		],
		technos: [
			{
				id: 1,
				icon: reacticon
			},
			{
				id: 2,
				icon: nexticon
			},
			{
				id: 3,
				icon: sassicon
			},
			{
				id: 4,
				icon: tailwindicon
			},
		]
	},
	{
		id: 2,
		name: 'Pod of Cast',
		desc: ['Website that includes episodes of podcast and testimonials along with packages to buy different subscriptions.'],
		screens: [
			{
				id: 1,
				link: 'https://podcast-ui.vercel.app/',
				img: podcast
			}
		],
		technos: [
			{
				id: 1,
				icon: reacticon
			},
			{
				id: 2,
				icon: nexticon
			},
			{
				id: 3,
				icon: sassicon
			},
			{
				id: 4,
				icon: tailwindicon
			},
		]
	},
	{
		id: 3,
		name: 'Instagram Clone',
		desc: ['Minimal Instagram clone'],
		screens: [
			{
				id: 1,
				link: '',
				img: insta
			}
		],
		technos: [
			{
				id: 1,
				icon: reacticon
			},
			{
				id: 2,
				icon: nexticon
			},
			{
				id: 3,
				icon: sassicon
			},
			{
				id: 4,
				icon: tailwindicon
			},
		]
	},
]

const projects = () => {
	return <>
		<Header />
		<div style = {{marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
			{PROJECTS.map(project => <ProjectCard key = {project.id} data = {project}/>)}
		</div>
	</>
}

export default projects;