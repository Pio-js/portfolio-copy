import Project from './Project';
import './ProjectsList.css';

export default function ProjectsList(props) {

    const title = props.data.projects.title;
    const content = props.data.projects.content;
    const techUsed = props.data.projects.tech_used;
    const projectsList = props.data.projects.projects_list;
    const galleryButton = props.data.projects.image_slider_btn;

    const projects = projectsList.map((project, key) => {

        return (
                <div key={key}
                    className='project-item'
                    onClick={() => props.setPopup(
                        <Project
                        projectsList={projectsList}
                        projectTitle={project.title}
                        techUsed={techUsed}
                        galleryButton={galleryButton}
                        setPopup={props.setPopup}
                        />
                    )}
                >
                    <h3>{project.title}</h3>
                    <img src={project.preview} alt={project.title}/>
                </div>
        )
    })

    return (
        <>
            <h1>{title}</h1>
            <p style={{"whiteSpace": "pre-line"}}>{content}</p>
            <div id='project-list'>
                {projects}
            </div>
        </>
    )
}
