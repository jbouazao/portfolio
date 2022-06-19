import classes from './Layout.module.scss'

const Layout = (props: any) => {
	return <div className = {classes.layout}>
		<div style = {{width: '80%', margin: 'auto'}}>
			{props.children}
		</div>
	</div>
}

export default Layout;