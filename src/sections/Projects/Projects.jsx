import styles from './ProjectsStyles.module.css';
import vibber from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
    return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTittle">Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard 
                    src={vibber}
                    link="https://github.com/celiapaivab/digital-clock"
                    h3="Digital Clock"
                    p="Digital Clock App"
                />
                <ProjectCard 
                    src={freshBurger}
                    link="https://github.com/celiapaivab/color-picker"
                    h3="Color Picker"
                    p="Color Picker App"
                />
                <ProjectCard 
                    src={hipsster}
                    link="https://github.com/celiapaivab/todo-list"
                    h3="To Do List"
                    p="To Do List App"
                />
            </div>
        </section>
    );
}

export default Projects;
