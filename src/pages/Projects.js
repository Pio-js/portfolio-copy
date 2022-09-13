import { useRef, useEffect, useState } from "react";
import ProjectsList from "../components/ProjectsList";
import './Projects.css';

export default function Projects(props) {

    const [popup, setPopup] = useState();

    const titleRef = useRef();

    useEffect(() => {
        titleRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    });

    return (
        <>
            <div ref={titleRef} id="projects">
                {
                    popup ?
                    popup
                    :
                    <ProjectsList data={props.data} popup={popup} setPopup={setPopup} />
                }
            </div>
        </>
    )
}
