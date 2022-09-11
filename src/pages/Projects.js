import { useRef, useEffect } from "react";
import ProjectsList from "../components/ProjectsList";
import './Projects.css';

export default function Projects(props) {

    const titleRef = useRef();

    useEffect(() => {
        titleRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    }, []);

    return (
        <div ref={titleRef} id="projects">
            <ProjectsList data={props.data} />
        </div>
    )
}
