import classes from './SkillItem.module.scss'
import Point from './Point';

const SkillItem = (props: {name: string, points: number}) => {

	const printdivs = (points:number) => {
		let divs = [];
		for (let i = 0; i < 5; i++) {
			if (i <= points - 1) {
				divs.push(<Point active = {true}/>)
			}
			else {
				divs.push(<Point active = {false}/>)
			}
		}
		return divs;
	}
	
	return <div className = {classes.container}>
		<strong className = {classes.name}>{props.name}</strong>
		<div className = {classes.points}>
			{printdivs(props.points)}
		</div>
	</div>
}

export default SkillItem;