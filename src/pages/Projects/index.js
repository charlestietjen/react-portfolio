import './styles.css';
import Project from './Project/';
import projectList from '../../lib/projects.json';

export default function Projects(){
    return (
        <div className='projects-container'>
            {projectList.map(project => (
                <Project projData={project} key={project.title}/>
            ))}
        </div>
    )
};