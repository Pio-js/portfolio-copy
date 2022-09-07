import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <div id='footer'>
            <h4 id='copyright'>Copyright © {year} Pio Saija</h4>
            <Link className='footer-link' to={'impressum'}><h4>Impressum</h4></Link>
        </div>
    )
}
