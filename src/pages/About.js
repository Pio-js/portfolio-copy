import { useEffect, useRef } from 'react';
import Horse from '../components/Horse';
import './About.css';

export default function About(props) {

    const titleRef = useRef();

    useEffect(() => {
        titleRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    });

    const title = props.data.about.title
    const about = props.data.about;
    const countries = props.data.countries

    return (
        <div ref={titleRef} id='about'>
            {
                props.orientation === 'portrait' &&
                <>
                    <h1>WANTED</h1>
                    <img className='portrait-about-img' src='../images/pio-clint.jpg' alt='Pio Saija' />
                </>
            }
            <h2>{title}</h2>
            <p lang={props.lang} style={{"whiteSpace": "pre-line"}}>{about.content1}</p>
            <Horse countries={countries}/>
            <p lang={props.lang} style={{"whiteSpace": "pre-line"}}>{about.content2}</p>

            <p lang={props.lang} style={{"whiteSpace": "pre-line"}}>{about.content3}</p>
            <p lang={props.lang} style={{"whiteSpace": "pre-line"}}>{about.content4}</p>
            <p lang={props.lang} style={{"whiteSpace": "pre-line"}}>{about.content5}</p>
        </div>
    )
}
