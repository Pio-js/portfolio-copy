import SelectLanguage from './SelectLanguage';
import PagesLinks from './PagesLinks';
import ExtLinks from './ExtLinks';
import './NavLandscape.css';

export default function NavLandscape(props) {
    return (
        <div id='sidebar-content'>
            <h1>WANTED</h1>
            <img className='sidebar-image' src='../images/pio-clint.jpg' alt='Pio Saija' />
            <SelectLanguage
                orientation={props.orientation}
                lang={props.lang}
                setLang={props.setLang}
            />
            <div id='sidebar-menu'>

                <h1>PIO SAIJA</h1>

                <PagesLinks orientation={props.orientation} />

                <div id='sidebar-links'>
                    <ExtLinks />
                </div>
            </div>
        </div>
    )
}
