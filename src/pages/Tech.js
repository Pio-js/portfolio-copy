import { useEffect, useRef } from 'react';
import software from '../data/software.json';
import './Tech.css';

export default function Tech(props) {

    const titleRef = useRef();

    useEffect(() => {
        titleRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    }, []);

    const title = props.data.tech.title;
    const content = props.data.tech.content;

    const tech = software.web.map(item => {
        return (
            <div key={item} className='tech-item'>
                <p>{item}</p>
                <img src={`../images/icons/dark/${item}.png`} alt='icon' />
            </div>
        )
    });

    return (
        <div ref={titleRef} id='tech'>
            {
                props.orientation === 'portrait' &&
                <img className='portrait-about-img' src='../images/Pio.png' alt='Pio Saija' />
            }
            <h1>{title}</h1>
            <p style={{"whiteSpace": "pre-line"}}>{content}</p>
            <div id='tech-list'>{tech}</div>
        </div>
    )
}
