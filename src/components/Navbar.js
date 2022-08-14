import NavLandscape from './NavLandscape';
import NavPortrait from './NavPortrait';

export default function Navbar(props){

    const Nav = () => {    
        return props.orientation === 'portrait' ?
            <NavPortrait orientation={props.orientation} lang={props.lang} setLang={props.setLang}/>
            :
            <NavLandscape orientation={props.orientation} lang={props.lang} setLang={props.setLang}/>;
    }

    return <Nav/>;
}