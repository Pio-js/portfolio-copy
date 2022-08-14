import { NavLink } from "react-router-dom";
import './PagesLinks.css';

export default function PagesLinks(props) {

    const pages = [{name: 'About', link:'/'}, {name: 'Tech', link: 'tech'}, {name: 'Projects', link: 'projects'}];

    const buttons = pages.map((page, key) => {
        return <NavLink key={key} to={page.link} className={navData => navData.isActive ? 'nav-buttons nav-active' : 'nav-buttons'} >{page.name}</NavLink>
    });

    const style = props.orientation === 'portrait' ? 'nav-portrait' : 'nav-landscape';

    return (
        <div className={style}>
            {buttons}
        </div>
    )
}
