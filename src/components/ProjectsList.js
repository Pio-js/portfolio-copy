import { useState } from 'react';
import Project from './Project';
import './ProjectsList.css';

export default function ProjectsList(props) {

    const [popup, setPopup] = useState();

    const title = props.data.projects.title;
    const content = props.data.projects.content;
    const techUsed = props.data.projects.tech_used;
    const projectsList = props.data.projects.projects_list;

    console.log(techUsed);

    const projects = projectsList.map((project, key) => {

        return (
                <div key={key}
                    className='project-item'
                    onClick={() => setPopup(
                        <Project
                        projectsList={projectsList}
                        projectTitle={project.title}
                        techUsed={techUsed}
                        setPopup={setPopup}
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
            {popup && popup}
            <h1>{title}</h1>
            <p style={{"whiteSpace": "pre-line"}}>{content}</p>
            <div id='project-list'>
                {projects}
            </div>
        </>
    )
}
