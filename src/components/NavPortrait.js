import { useState } from 'react';
import PagesLinks from './PagesLinks';
import './NavPortrait.css';

export default function NavPortrait(props) {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div id="navbar-portrait">
                <div id="navbar-title">PIO SAIJA</div>
                <div id='menu-button' onClick={() => setOpen(!open)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {open && <PagesLinks orientation={props.orientation} setOpen={setOpen} open={open} lang={props.lang} setLang={props.setLang}/>}
        </>
    )
}
