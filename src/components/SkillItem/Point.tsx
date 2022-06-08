import classes from './Point.module.scss'

const Point = (props: {active:boolean}) => {
	return <div className = {classes.point} style = {props.active ? {background: 'black'} : {background: 'white'}}></div>
}

export default Point;