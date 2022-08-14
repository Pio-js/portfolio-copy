import SelectLanguage from './SelectLanguage';
import PagesLinks from './PagesLinks';
import './NavLandscape.css';
import { Link } from 'react-router-dom';

export default function NavLandscape(props) {
    return (
        <div id='sidebar-content'>
        <img className='sidebar-image' src='../images/Pio.png' alt='Pio Saija' />
            <SelectLanguage
                orientation={props.orientation}
                lang={props.lang}
                setLang={props.setLang}
            />
            <h1>PIO SAIJA</h1>
            <PagesLinks orientation={props.orientation} />
            
            <a href='https://www.linkedin.com/in/pio-saija/' target='_blank'>
                <img className='sidebar-link-img' src='images/linkedin_logo.png' alt='link to linkedin'/>
            </a>
            <a href='https://github.com/Pio-js' target='_blank'>
                <img className='sidebar-link-img' src='images/github-image.png' alt='link to github'/>
            </a>
        </div>
    )
}
