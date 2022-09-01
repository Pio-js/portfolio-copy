import ProjectsList from "../components/ProjectsList";
import './Projects.css';

export default function Projects(props) {

    return (
        <div id="projects">
            <ProjectsList data={props.data} />
        </div>
    )
}
