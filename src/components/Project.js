import { useRef } from "react";
import useOutsideClick from "./useOutsideClick";
import ImageSlider from './ImageSlider';
import projects from '../data/projects.json';
import './Project.css';

export default function Project(props) {

    const ref = useRef();

    useOutsideClick(ref, () => {
        props.setPopup();
    });

    const projectSelected = props.projectsList.filter(project => project.title === props.projectTitle);
    const projectData = projects[props.projectTitle];
    console.log(projectSelected);

    const techUsedImages = projectData.tech.map((item) => {
        return (
            <div key={item} className='project-tech-item'>
                <p>{item}</p>
                <img key={item} src={`../images/icons/bright/${item}.png`} alt={item}/>
            </div>
        )
    });

    const links = projectData.links && projectData.links.map((link, index) => {
        return <a key={index} href={link.value}>{link.title}</a>
        });

    const images = projectData.images.map(image => {
        return(
            <div className='project-image-container'>
                <h2>{image}</h2>
                <div className='project-image'>
                    <img src={`../images/${projectData.folder}/${image}.jpg`} alt={image}/>
                </div>
            </div>
        )
    });

    return (
        <div className='project-popup' ref={ref}>
            <div className='project-close-btn' onClick={() => props.setPopup()}>X</div>
            <h1>{projectSelected[0].title}</h1>
            <p style={{"whiteSpace": "pre-line"}}>{projectSelected[0].description}</p>
            <div className='project-tech'>
                <h2>{props.techUsed}</h2>
                <div>{techUsedImages}</div>
            </div>
            {   
                projectData.links &&
                <div className="project-links">
                    <h2>Links</h2>
                    <div>
                        {links}
                    </div>
                </div>
            }
            <ImageSlider slides={images} />
        </div>
    );
}
