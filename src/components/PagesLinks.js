import { NavLink } from "react-router-dom";
import SelectLanguage from './SelectLanguage';
import './PagesLinks.css';

export default function PagesLinks(props) {

    const pages = [
                {name: 'About', link:'/'},
                {name: 'Tech', link: 'tech'},
                {name: 'Projects', link: 'projects'},
                {name: 'Catch me', link: 'contact'}
                ];

    const onClick = props.orientation === 'portrait' ? () => props.setOpen(!props.open) : null;

    const buttons = pages.map((page, key) => {
        return <NavLink
                key={key}
                onClick={onClick}
                to={page.link}
                className={navData => navData.isActive ? 'nav-active' : 'nav-buttons'}>
                    {page.name}
                </NavLink>
    });

    const style = props.orientation === 'portrait' ? 'nav-portrait' : 'nav-landscape';

    return (
        <div className={style}>
            {buttons}
            {props.orientation === 'portrait' &&
            <SelectLanguage orientation={props.orientation} setOpen={props.setOpen} open={props.open} lang={props.lang} setLang={props.setLang} />}
        </div>
    )
}
