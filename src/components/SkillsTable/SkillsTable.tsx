import { Skill, SkillSet } from '../../../pages'
import SkillItem from '../SkillItem/SkillItem';
import classes from './SkillsTable.module.scss'

const SkillsTable: React.FC<{skills: Skill[]}> = props => {
	return <div className = {classes.container}>
		{props.skills.map(skill => <SkillItem key = {skill.name} name = {skill.name} points = {skill.points}/>)}
	</div>
}

export default SkillsTable;